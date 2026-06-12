import {
  CateringListFieldComponent,
  CateringOrderStateService
} from "./chunk-IPDW32UJ.js";
import {
  ANIMATION_SHOW_CONTRACT_EXPAND,
  AssetListFieldComponent,
  AsyncHandler,
  BehaviorSubject,
  CalendarEvent,
  Component,
  DateFieldComponent,
  DefaultValueAccessor,
  Dl,
  DurationFieldComponent,
  EventFormService,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  FullscreenModalShellComponent,
  HostSelectFieldComponent,
  IconComponent,
  Injectable,
  Input,
  MAT_DIALOG_DATA,
  MatAutocompleteModule,
  MatCheckbox,
  MatCheckboxModule,
  MatDialog,
  MatDialogRef,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
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
  RecurrenceFieldComponent,
  RichTextInputComponent,
  SettingsService,
  SettingsToggleComponent,
  SpaceListFieldComponent,
  TimeFieldComponent,
  TranslatePipe,
  UserListFieldComponent,
  UserSearchFieldComponent,
  __spreadValues,
  addDays,
  addMinutes,
  catchError,
  combineLatest,
  computed,
  currentUser,
  debounceTime,
  declineEvent,
  differenceInMinutes,
  distinctUntilKeyChanged,
  effect,
  endOfDay,
  endOfMonth,
  endOfWeek,
  filter,
  flatten,
  forkJoin,
  format,
  formatDuration,
  getTimezoneDifferenceInHours,
  getUnixTime,
  i18n,
  inject,
  input,
  lastValueFrom,
  map,
  notifyError,
  notifySuccess,
  observableFromSignal,
  of,
  openConfirmModal,
  output,
  queryCalendarPermission,
  queryEvents,
  requestSpacesForZone,
  setClassMetadata,
  shareReplay,
  signal,
  startOfDay,
  startOfMonth,
  startOfWeek,
  switchMap,
  tap,
  timePeriodsIntersect,
  toSignal,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-32WFR5TQ.js";

// libs/events/src/lib/meeting-form-details.component.ts
var _c0 = () => ({ standalone: true });
var _forTrack0 = ($index, $item) => $item.value;
function MeetingFormDetailsComponent_Conditional_0_Conditional_12_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 13);
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
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "a-date-field", 12);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, MeetingFormDetailsComponent_Conditional_0_Conditional_12_Conditional_9_Template, 3, 3, "mat-checkbox", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "FORM.DATE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("to", ctx_r0.end_date())("use_24hr", ctx_r0.use_24hr())("timezone", ctx_r0.timezone());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 8, "FORM.DATE_ERROR"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.allow_all_day() ? 9 : -1);
  }
}
function MeetingFormDetailsComponent_Conditional_0_Conditional_13_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 13);
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
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 6)(2, "label", 11);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a-date-field", 14);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, MeetingFormDetailsComponent_Conditional_0_Conditional_13_Conditional_10_Template, 3, 3, "mat-checkbox", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 6)(12, "label", 11);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "a-date-field", 15);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 14, "FORM.DATE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("to", ctx_r0.end_date())("use_24hr", ctx_r0.use_24hr())("timezone", ctx_r0.timezone())("range", 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 16, "FORM.DATE_ERROR"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.allow_all_day() ? 10 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 18, "FORM.DATE_END"));
    \u0275\u0275advance(4);
    \u0275\u0275property("from", ctx_r0.start_date)("to", ctx_r0.end_date())("use_24hr", ctx_r0.use_24hr())("timezone", ctx_r0.timezone())("range", 2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 20, "FORM.DATE_ERROR"), " ");
  }
}
function MeetingFormDetailsComponent_Conditional_0_Conditional_14_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "label", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "a-time-field", 20);
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 8, "FORM.TIME_END"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r0.form().value.date_end)("ngModelOptions", \u0275\u0275pureFunction0(10, _c0))("from", ((tmp_6_0 = ctx_r0.form()) == null ? null : (tmp_6_0 = tmp_6_0.getRawValue()) == null ? null : tmp_6_0.date) + 30 * 60 * 1e3)("range", ctx_r0.bookable_hours())("use_24hr", ctx_r0.use_24hr())("extra_info_fn", ctx_r0.duration_info)("timezone", ctx_r0.timezone());
  }
}
function MeetingFormDetailsComponent_Conditional_0_Conditional_14_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "label", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "a-duration-field", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_9_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 9, "FORM.TIME_END"));
    \u0275\u0275advance(4);
    \u0275\u0275property("time", (tmp_4_0 = ctx_r0.form()) == null ? null : (tmp_4_0 = tmp_4_0.getRawValue()) == null ? null : tmp_4_0.date)("max", ctx_r0.max_duration())("min", ctx_r0.min_duration())("step", ctx_r0.duration_step())("custom_options", ctx_r0.custom_duration_options())("end_time", (tmp_9_0 = ctx_r0.bookable_hours()) == null ? null : tmp_9_0.end)("use_24hr", ctx_r0.use_24hr())("timezone", ctx_r0.timezone());
  }
}
function MeetingFormDetailsComponent_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 16)(2, "label", 17);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a-time-field", 18);
    \u0275\u0275listener("ngModelChange", function MeetingFormDetailsComponent_Conditional_0_Conditional_14_Template_a_time_field_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.form().patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, MeetingFormDetailsComponent_Conditional_0_Conditional_14_Conditional_8_Template, 7, 11, "div", 16);
    \u0275\u0275conditionalCreate(9, MeetingFormDetailsComponent_Conditional_0_Conditional_14_Conditional_9_Template, 7, 11, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 10, "FORM.TIME_START"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r0.form().getRawValue().date)("ngModelOptions", \u0275\u0275pureFunction0(12, _c0))("disabled", ctx_r0.form().controls.date.disabled)("range", ctx_r0.bookable_hours())("min_duration", ctx_r0.effective_min_duration())("use_24hr", ctx_r0.use_24hr())("timezone", ctx_r0.timezone());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.allow_multiday() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.allow_multiday() ? 9 : -1);
  }
}
function MeetingFormDetailsComponent_Conditional_0_Conditional_15_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275text(1, " Checking calendar permissions... ");
    \u0275\u0275elementEnd();
  }
}
function MeetingFormDetailsComponent_Conditional_0_Conditional_15_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.permission_error(), " ");
  }
}
function MeetingFormDetailsComponent_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "a-user-search-field", 23);
    \u0275\u0275conditionalCreate(7, MeetingFormDetailsComponent_Conditional_0_Conditional_15_Conditional_7_Template, 2, 0, "p", 24);
    \u0275\u0275conditionalCreate(8, MeetingFormDetailsComponent_Conditional_0_Conditional_15_Conditional_8_Template, 2, 1, "p", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "FORM.HOST"));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.checking_permission() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.permission_error() ? 8 : -1);
  }
}
function MeetingFormDetailsComponent_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "label", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "host-select-field", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "FORM.HOST"));
  }
}
function MeetingFormDetailsComponent_Conditional_0_Conditional_17_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 28);
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
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "label", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "recurrence-field", 27);
    \u0275\u0275listener("first_instance", function MeetingFormDetailsComponent_Conditional_0_Conditional_17_Template_recurrence_field_first_instance_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onFirstInstanceChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, MeetingFormDetailsComponent_Conditional_0_Conditional_17_Conditional_7_Template, 3, 3, "mat-checkbox", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "FORM.RECURRENCE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("date", ctx_r0.form().getRawValue().date)("available_days", ctx_r0.allowed_future_days());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().value.id ? 7 : -1);
  }
}
function MeetingFormDetailsComponent_Conditional_0_Conditional_18_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 32);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    \u0275\u0275property("value", option_r5.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "COMMON.VISIBILITY_" + option_r5.label), " ");
  }
}
function MeetingFormDetailsComponent_Conditional_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "label", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 30)(7, "mat-select", 31);
    \u0275\u0275repeaterCreate(8, MeetingFormDetailsComponent_Conditional_0_Conditional_18_For_9_Template, 3, 4, "mat-option", 32, _forTrack0);
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
function MeetingFormDetailsComponent_Conditional_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 33);
    \u0275\u0275listener("ngModelChange", function MeetingFormDetailsComponent_Conditional_0_Conditional_19_Template_settings_toggle_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.form().patchValue({ meeting_provider: $event ? "teamsForBusiness" : null }));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r0.form().value.meeting_provider === "teamsForBusiness")("ngModelOptions", \u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "CALENDAR_EVENT.TEAMS_MEETING"), " ");
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
    \u0275\u0275conditionalCreate(14, MeetingFormDetailsComponent_Conditional_0_Conditional_14_Template, 10, 13, "div", 7);
    \u0275\u0275conditionalCreate(15, MeetingFormDetailsComponent_Conditional_0_Conditional_15_Template, 9, 5, "div", 8)(16, MeetingFormDetailsComponent_Conditional_0_Conditional_16_Template, 7, 3, "div", 9);
    \u0275\u0275conditionalCreate(17, MeetingFormDetailsComponent_Conditional_0_Conditional_17_Template, 8, 6, "div", 9);
    \u0275\u0275conditionalCreate(18, MeetingFormDetailsComponent_Conditional_0_Conditional_18_Template, 10, 3, "div", 9);
    \u0275\u0275conditionalCreate(19, MeetingFormDetailsComponent_Conditional_0_Conditional_19_Template, 3, 6, "settings-toggle", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 11, "FORM.TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 13, "CALENDAR_EVENT.TITLE_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 15, "FORM.TITLE_REQUIRED"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.allow_multiday() ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.allow_multiday() ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.form().value.all_day ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.can_book_for_anyone() ? 15 : ctx_r0.can_book_for_others() ? 16 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.allow_recurrence() ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.allow_visibility() ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.allow_online_meetings() ? 19 : -1);
  }
}
var MINUTES_IN_DAY = 24 * 60;
var ALLOWED_CALENDAR_ROLES = [
  "write",
  "delegateWithoutPrivateEventAccess",
  "delegateWithPrivateEventAccess"
];
var MeetingFormDetailsComponent = class _MeetingFormDetailsComponent extends AsyncHandler {
  constructor() {
    super();
    this._settings = inject(SettingsService);
    this._event_form = inject(EventFormService);
    this._org = inject(OrganisationService);
    this._max_duration = this._settings.signal("events.max_duration", 480);
    this._duration_step = this._settings.signal("events.duration_step", 30);
    this._can_book_for_others = this._settings.signal("events.can_book_for_others", false);
    this._can_book_for_anyone = this._settings.signal("events.can_book_for_anyone", false);
    this._allow_all_day = this._settings.signal("events.allow_all_day", false);
    this._allow_visibility = this._settings.signal("events.allow_visibility", false);
    this._allow_online_meetings = this._settings.signal("events.allow_online_meetings", false);
    this._allow_recurrence = this._settings.signal("events.allow_recurrence", false);
    this._allow_multiday = this._settings.signal("events.allow_multiday", false);
    this._use_building_timezone = this._settings.signal("events.use_building_timezone", false);
    this._allowed_future_days = this._settings.signal("events.allowed_future_days", 180);
    this._use_24hr = this._settings.signal("use_24_hour_time", false);
    this._bookable_hours = this._settings.signal("events.bookable_hours", null);
    this._min_duration = this._settings.signal("events.min_duration", 30);
    this._custom_duration_options = this._settings.signal("events.custom_duration_options", []);
    this.form = input(void 0, ...ngDevMode ? [{ debugName: "form" }] : (
      /* istanbul ignore next */
      []
    ));
    this.checking_permission = signal(false, ...ngDevMode ? [{ debugName: "checking_permission" }] : (
      /* istanbul ignore next */
      []
    ));
    this.permission_error = signal("", ...ngDevMode ? [{ debugName: "permission_error" }] : (
      /* istanbul ignore next */
      []
    ));
    this.minimum_duration = 30;
    this.max_duration = this._max_duration;
    this.duration_step = this._duration_step;
    this.can_book_for_others = this._can_book_for_others;
    this.can_book_for_anyone = this._can_book_for_anyone;
    this.allow_all_day = this._allow_all_day;
    this.allow_visibility = this._allow_visibility;
    this.allow_online_meetings = this._allow_online_meetings;
    this.allow_recurrence = computed(() => this._allow_recurrence() && this.form().value.duration <= 24 * 60, ...ngDevMode ? [{ debugName: "allow_recurrence" }] : (
      /* istanbul ignore next */
      []
    ));
    this.allow_multiday = computed(() => this._allow_multiday() || this._event_form.is_multiday, ...ngDevMode ? [{ debugName: "allow_multiday" }] : (
      /* istanbul ignore next */
      []
    ));
    this.timezone = computed(() => this._use_building_timezone() ? this._org.building?.timezone || "" : "", ...ngDevMode ? [{ debugName: "timezone" }] : (
      /* istanbul ignore next */
      []
    ));
    this.end_date = computed(() => endOfDay(addDays(Date.now(), this._allowed_future_days())).valueOf(), ...ngDevMode ? [{ debugName: "end_date" }] : (
      /* istanbul ignore next */
      []
    ));
    this.use_24hr = this._use_24hr;
    this.allowed_future_days = this._allowed_future_days;
    this.bookable_hours = this._bookable_hours;
    this.min_duration = this._min_duration;
    this.custom_duration_options = this._custom_duration_options;
    this.effective_min_duration = computed(() => Math.min(this.min_duration(), ...this.custom_duration_options()), ...ngDevMode ? [{ debugName: "effective_min_duration" }] : (
      /* istanbul ignore next */
      []
    ));
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
    effect(() => {
      const form = this.form();
      if (!form)
        return;
      this.subscription("organiser_permission_check", form.get("organiser").valueChanges.subscribe((user) => {
        this._checkCalendarPermission(user);
      }));
    });
  }
  async _checkCalendarPermission(user) {
    this.permission_error.set("");
    if (!user?.email || !this.can_book_for_anyone())
      return;
    const current = currentUser();
    if (user.email.toLowerCase() === current?.email?.toLowerCase())
      return;
    const checked_email = user.email;
    this.checking_permission.set(true);
    try {
      const permission = await lastValueFrom(queryCalendarPermission(checked_email));
      if (this.form()?.value?.organiser?.email !== checked_email)
        return;
      const can_book = permission.has_access && ALLOWED_CALENDAR_ROLES.includes(permission.role) || permission.can_edit;
      if (!can_book) {
        this.permission_error.set(`You don't have permission to book on behalf of the user "${checked_email}", please select a user which has shared their calendar with Edit or Delegate permissions. Host reverted back to you.`);
        this._resetHostToCurrentUser();
      }
    } catch (_) {
      if (this.form()?.value?.organiser?.email !== checked_email)
        return;
      this.permission_error.set(`You don't have permission to book on behalf of the user "${checked_email}", please select a user which has shared their calendar with Edit or Delegate permissions.`);
      this._resetHostToCurrentUser();
    } finally {
      this.checking_permission.set(false);
    }
  }
  _resetHostToCurrentUser() {
    const user = currentUser();
    this.form()?.patchValue({
      host: user.email,
      organiser: user,
      user,
      creator: user.email,
      calendar: user.email
    }, { emitEvent: false });
    this._event_form.storeForm();
  }
  get start_date() {
    const date = this.form().getRawValue().date || Date.now();
    const date_end = this.form().getRawValue().date_end || addMinutes(date, 30).valueOf();
    const is_next_day = format(date, "yyyy-MM-dd") !== format(date_end, "yyyy-MM-dd");
    return is_next_day ? startOfDay(date).valueOf() : addMinutes(date, 30).valueOf();
  }
  onFirstInstanceChange(date) {
    this.form().patchValue({ date });
  }
  static {
    this.\u0275fac = function MeetingFormDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MeetingFormDetailsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MeetingFormDetailsComponent, selectors: [["meeting-form-details"]], inputs: { form: [1, "form"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "formGroup"], [1, "flex", "flex-wrap", "items-center", "sm:space-x-2"], [1, "min-w-[256px]", "flex-1"], ["for", "title"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "title", "formControlName", "title", 3, "placeholder"], [1, "relative", "min-w-[256px]", "flex-1"], [1, "flex", "items-center", "space-x-2"], [1, "mb-4", "flex", "w-full", "flex-col"], [1, "flex", "w-full", "flex-col"], [3, "ngModel", "ngModelOptions"], ["for", "date"], ["name", "date", "formControlName", "date", 3, "to", "use_24hr", "timezone"], ["formControlName", "all_day", 1, "absolute", "-top-2", "right-2"], ["name", "date", "formControlName", "date", 3, "to", "use_24hr", "timezone", "range"], ["name", "date", "formControlName", "date_end", 3, "from", "to", "use_24hr", "timezone", "range"], [1, "w-1/3", "flex-1"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "disabled", "range", "min_duration", "use_24hr", "timezone"], ["for", "end-time"], ["name", "end-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "from", "range", "use_24hr", "extra_info_fn", "timezone"], ["name", "end-time", "formControlName", "duration", 3, "time", "max", "min", "step", "custom_options", "end_time", "use_24hr", "timezone"], ["for", "host"], ["name", "host", "formControlName", "organiser"], [1, "text-pending", "mt-1", "text-xs"], [1, "text-error", "mt-1", "text-xs"], ["for", "recurrence"], ["name", "recurrence", "type", "event", "formControlName", "recurrence", 3, "first_instance", "date", "available_days"], ["formControlName", "update_master"], ["for", "visibility"], ["appearance", "outline"], ["formControlName", "visibility"], [3, "value"], [3, "ngModelChange", "ngModel", "ngModelOptions"]], template: function MeetingFormDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, MeetingFormDetailsComponent_Conditional_0_Template, 20, 17, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.form() ? 0 : -1);
      }
    }, dependencies: [
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
      NgModel,
      SettingsToggleComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
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
                    @if (!allow_multiday()) {
                        <div class="relative min-w-[256px] flex-1">
                            <label for="date">
                                {{ 'FORM.DATE' | translate }}<span>*</span>
                            </label>
                            <a-date-field
                                name="date"
                                formControlName="date"
                                [to]="end_date()"
                                [use_24hr]="use_24hr()"
                                [timezone]="timezone()"
                            >
                                {{ 'FORM.DATE_ERROR' | translate }}
                            </a-date-field>
                            @if (allow_all_day()) {
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
                @if (allow_multiday()) {
                    <div class="flex flex-wrap items-center sm:space-x-2">
                        <div class="relative min-w-[256px] flex-1">
                            <label for="date">
                                {{ 'FORM.DATE' | translate }}<span>*</span>
                            </label>
                            <a-date-field
                                name="date"
                                formControlName="date"
                                [to]="end_date()"
                                [use_24hr]="use_24hr()"
                                [timezone]="timezone()"
                                [range]="1"
                            >
                                {{ 'FORM.DATE_ERROR' | translate }}
                            </a-date-field>
                            @if (allow_all_day()) {
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
                                [to]="end_date()"
                                [use_24hr]="use_24hr()"
                                [timezone]="timezone()"
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
                                [range]="bookable_hours()"
                                [min_duration]="effective_min_duration()"
                                [use_24hr]="use_24hr()"
                                [timezone]="timezone()"
                            ></a-time-field>
                        </div>
                        @if (allow_multiday()) {
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
                                    [range]="bookable_hours()"
                                    [use_24hr]="use_24hr()"
                                    [extra_info_fn]="duration_info"
                                    [timezone]="timezone()"
                                ></a-time-field>
                            </div>
                        }
                        @if (!allow_multiday()) {
                            <div class="w-1/3 flex-1">
                                <label for="end-time">
                                    {{ 'FORM.TIME_END' | translate
                                    }}<span>*</span>
                                </label>
                                <a-duration-field
                                    name="end-time"
                                    formControlName="duration"
                                    [time]="form()?.getRawValue()?.date"
                                    [max]="max_duration()"
                                    [min]="min_duration()"
                                    [step]="duration_step()"
                                    [custom_options]="custom_duration_options()"
                                    [end_time]="bookable_hours()?.end"
                                    [use_24hr]="use_24hr()"
                                    [timezone]="timezone()"
                                ></a-duration-field>
                            </div>
                        }
                    </div>
                }
                @if (can_book_for_anyone()) {
                    <div class="mb-4 flex w-full flex-col">
                        <label for="host">
                            {{ 'FORM.HOST' | translate }}<span>*</span>
                        </label>
                        <a-user-search-field
                            name="host"
                            formControlName="organiser"
                        ></a-user-search-field>
                        @if (checking_permission()) {
                            <p class="text-pending mt-1 text-xs">
                                Checking calendar permissions...
                            </p>
                        }
                        @if (permission_error()) {
                            <p class="text-error mt-1 text-xs">
                                {{ permission_error() }}
                            </p>
                        }
                    </div>
                } @else if (can_book_for_others()) {
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
                @if (allow_recurrence()) {
                    <div class="flex w-full flex-col">
                        <label for="recurrence">
                            {{ 'FORM.RECURRENCE' | translate }}<span>*</span>
                        </label>
                        <recurrence-field
                            name="recurrence"
                            type="event"
                            [date]="form().getRawValue().date"
                            [available_days]="allowed_future_days()"
                            (first_instance)="onFirstInstanceChange($event)"
                            formControlName="recurrence"
                        ></recurrence-field>
                        @if (form().value.id) {
                            <mat-checkbox formControlName="update_master">
                                {{ 'FORM.UPDATE_FUTURE' | translate }}
                            </mat-checkbox>
                        }
                    </div>
                }
                @if (allow_visibility()) {
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
                @if (allow_online_meetings()) {
                    <settings-toggle
                        [ngModel]="
                            form().value.meeting_provider === 'teamsForBusiness'
                        "
                        (ngModelChange)="
                            form().patchValue({
                                meeting_provider: $event
                                    ? 'teamsForBusiness'
                                    : null,
                            })
                        "
                        [ngModelOptions]="{ standalone: true }"
                    >
                        {{ 'CALENDAR_EVENT.TEAMS_MEETING' | translate }}
                    </settings-toggle>
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
      FormsModule,
      SettingsToggleComponent
    ] }]
  }], () => [], { form: [{ type: Input, args: [{ isSignal: true, alias: "form", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MeetingFormDetailsComponent, { className: "MeetingFormDetailsComponent", filePath: "libs/events/src/lib/meeting-form-details.component.ts", lineNumber: 323 });
})();

// apps/concierge/src/app/day-view/event-book-modal.component.ts
var _c02 = (a0, a1, a2, a3) => ({ date: a0, duration: a1, all_day: a2, zone_id: a3 });
var _c1 = () => ({ standalone: true });
function EventBookModalComponent_Conditional_17_Template(rf, ctx) {
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
    \u0275\u0275listener("click", function EventBookModalComponent_Conditional_17_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hide_block.attendees = !ctx_r1.hide_block.attendees);
    });
    \u0275\u0275elementStart(9, "icon");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 9);
    \u0275\u0275element(12, "a-user-list-field", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, "CALENDAR_EVENT.ATTENDEES"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.hide_block.attendees ? "expand_more" : "expand_less");
    \u0275\u0275advance();
    \u0275\u0275property("@show", ctx_r1.hide_block.attendees ? "hide" : "show");
    \u0275\u0275advance();
    \u0275\u0275property("guests", ctx_r1.allow_externals);
  }
}
function EventBookModalComponent_Conditional_30_Template(rf, ctx) {
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
function EventBookModalComponent_Conditional_32_Conditional_13_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 24);
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
function EventBookModalComponent_Conditional_32_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 19)(1, "mat-select", 21);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "input", 22, 0);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EventBookModalComponent_Conditional_32_Conditional_13_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.code_filter, $event) || (ctx_r1.code_filter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "mat-option", 23);
    \u0275\u0275repeaterCreate(7, EventBookModalComponent_Conditional_32_Conditional_13_For_8_Template, 2, 2, "mat-option", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(2, 5, "CALENDAR_EVENT.CATERING_CHARGE_CODE"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.code_filter);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(11, _c1))("placeholder", \u0275\u0275pipeBind1(5, 7, "CALENDAR_EVENT.CATERING_CHARGE_CODE_SEARCH"));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.filtered_codes());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 9, "CALENDAR_EVENT.CATERING_CHARGE_CODE_REQUIRED"), " ");
  }
}
function EventBookModalComponent_Conditional_32_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 25);
    \u0275\u0275element(1, "textarea", 26);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "mat-error");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("mt-2", !((ctx_r1.form.value.catering == null ? null : ctx_r1.form.value.catering.length) && ctx_r1.has_codes()));
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(2, 4, "CALENDAR_EVENT.CATERING_NOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 6, "CALENDAR_EVENT.CATERING_NOTES_REQUIRED"), " ");
  }
}
function EventBookModalComponent_Conditional_32_Template(rf, ctx) {
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
    \u0275\u0275elementStart(8, "button", 17);
    \u0275\u0275listener("click", function EventBookModalComponent_Conditional_32_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hide_block.catering = !ctx_r1.hide_block.catering);
    });
    \u0275\u0275elementStart(9, "icon");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 9);
    \u0275\u0275element(12, "catering-list-field", 18);
    \u0275\u0275conditionalCreate(13, EventBookModalComponent_Conditional_32_Conditional_13_Template, 12, 12, "mat-form-field", 19);
    \u0275\u0275conditionalCreate(14, EventBookModalComponent_Conditional_32_Conditional_14_Template, 6, 8, "mat-form-field", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, "CALENDAR_EVENT.CATERING"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.hide_block.catering ? "expand_more" : "expand_less");
    \u0275\u0275advance();
    \u0275\u0275property("@show", ctx_r1.hide_block.catering ? "hide" : "show");
    \u0275\u0275advance();
    \u0275\u0275property("options", \u0275\u0275pureFunction4(8, _c02, ctx_r1.form.value.date, ctx_r1.form.value.duration, ctx_r1.form.value.all_day, (ctx_r1.form.value == null ? null : ctx_r1.form.value.resources == null ? null : ctx_r1.form.value.resources.length) ? ctx_r1.form.value == null ? null : ctx_r1.form.value.resources[0] == null ? null : ctx_r1.form.value.resources[0].level == null ? null : ctx_r1.form.value.resources[0].level.parent_id : ""));
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.form.value.catering == null ? null : ctx_r1.form.value.catering.length) && ctx_r1.has_codes() ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.form.value.catering == null ? null : ctx_r1.form.value.catering.length) ? 14 : -1);
  }
}
function EventBookModalComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 3)(1, "h3", 4)(2, "div", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 6);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 7);
    \u0275\u0275elementStart(8, "button", 27);
    \u0275\u0275listener("click", function EventBookModalComponent_Conditional_33_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hide_block.assets = !ctx_r1.hide_block.assets);
    });
    \u0275\u0275elementStart(9, "icon");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 9);
    \u0275\u0275element(12, "asset-list-field", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", !ctx_r1.has_catering() ? "4" : "5", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "RESOURCE.ASSETS"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.hide_block.assets ? "expand_more" : "expand_less");
    \u0275\u0275advance();
    \u0275\u0275property("@show", ctx_r1.hide_block.assets ? "hide" : "show");
    \u0275\u0275advance();
    \u0275\u0275property("options", \u0275\u0275pureFunction4(7, _c02, ctx_r1.form.getRawValue().date, ctx_r1.form.value.duration, ctx_r1.form.value.all_day, (ctx_r1.form.value == null ? null : ctx_r1.form.value.resources == null ? null : ctx_r1.form.value.resources.length) ? ctx_r1.form.value == null ? null : ctx_r1.form.value.resources[0] == null ? null : ctx_r1.form.value.resources[0].level == null ? null : ctx_r1.form.value.resources[0].level.parent_id : ""));
  }
}
function EventBookModalComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3)(1, "h3", 29)(2, "div", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 6);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 30)(8, "label", 31);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "rich-text-input", 32);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", !ctx_r1.has_catering() || !ctx_r1.has_assets ? !ctx_r1.has_catering() && !ctx_r1.has_assets ? "4" : "5" : "6", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, "CALENDAR_EVENT.NOTES_HEADER"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 6, "CALENDAR_EVENT.NOTES_INFO"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(12, 8, "CALENDAR_EVENT.NOTES_INFO"));
  }
}
var EventBookModalComponent = class _EventBookModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._event_form = inject(EventFormService);
    this._settings = inject(SettingsService);
    this._catering = inject(CateringOrderStateService);
    this._dialog_ref = inject(MatDialogRef);
    this.event = output();
    this.loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hide_block = {};
    this.code_filter = signal("", ...ngDevMode ? [{ debugName: "code_filter" }] : (
      /* istanbul ignore next */
      []
    ));
    this._charge_codes = toSignal(this._catering.charge_codes, {
      initialValue: []
    });
    this.has_catering = toSignal(this._catering.available_menu.pipe(map((l) => l.length > 0)), { initialValue: false });
    this.has_codes = toSignal(this._catering.charge_codes.pipe(map((l) => l.length > 0), tap((has_codes) => {
      if (!has_codes) {
        this.form.get("catering_charge_code").setValidators([]);
        this.form.updateValueAndValidity();
      }
    })), { initialValue: false });
    this.filtered_codes = computed(() => this._charge_codes().filter((_) => _.toLowerCase().includes(this.code_filter().toLowerCase())), ...ngDevMode ? [{ debugName: "filtered_codes" }] : (
      /* istanbul ignore next */
      []
    ));
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
  async save() {
    this.loading.set(true);
    if (!this.form.value.host) {
      this.form.patchValue({
        host: currentUser().email
      });
    }
    const event = await this._event_form.postForm().catch((_) => {
      notifyError(_);
      this.loading.set(false);
      throw _;
    });
    this.event.emit({ reason: "done", metadata: event });
    notifySuccess(i18n("CALENDAR_EVENT.SUCCESS"));
    this._dialog_ref.close();
    this.loading.set(false);
  }
  static {
    this.\u0275fac = function EventBookModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EventBookModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventBookModalComponent, selectors: [["event-book-modal"]], outputs: { event: "event" }, decls: 35, vars: 24, consts: [["input", ""], [3, "confirm", "heading", "loading"], [3, "formGroup"], [1, "p-2"], [1, "flex", "items-center", "space-x-2"], [1, "bg-base-200", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full"], [1, "text-xl"], [1, "w-px", "flex-1"], ["type", "button", "icon", "", "name", "toggle-details-meeting", "matRipple", "", 3, "click"], [1, "overflow-hidden"], [1, "mt-4", 3, "form"], ["type", "button", "icon", "", "name", "toggle-spaces-meeting", "matRipple", "", 3, "click"], [1, "flex", "flex-col", "items-center", "overflow-hidden"], [1, "bg-warning", "text-warning-content", "mx-auto", "my-2", "inline-flex", "rounded-sm", "p-2", "text-xs", "shadow-sm"], ["formControlName", "resources", 1, "w-full", 3, "multiday"], ["type", "button", "icon", "", "name", "toggle-attendees-meeting", "matRipple", "", 3, "click"], ["formControlName", "attendees", 1, "mt-4", 3, "guests"], ["type", "button", "icon", "", "name", "toggle-catering-meeting", "matRipple", "", 3, "click"], ["formControlName", "catering", 3, "options"], ["appearance", "outline", 1, "mt-2", "w-full"], ["appearance", "outline", 1, "w-full", 3, "mt-2"], ["formControlName", "catering_charge_code", 3, "placeholder"], [1, "border-base-200", "bg-base-100", "sticky", "top-0", "z-50", "w-full", "rounded-none", "border-x-0", "border-t-0", "border-b", "px-4", "py-3", "text-base", "focus:border-b", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [1, "hidden"], [3, "value"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "formControlName", "catering_notes", 3, "placeholder"], ["type", "button", "icon", "", "name", "toggle-assets-meeting", "matRipple", "", 3, "click"], ["formControlName", "assets", 3, "options"], [1, "mb-4", "flex", "items-center", "space-x-2"], [1, "flex", "w-full", "flex-col"], ["for", "notes"], ["name", "notes", "formControlName", "body", 3, "placeholder"]], template: function EventBookModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 1);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("confirm", function EventBookModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(3, "form", 2)(4, "section", 3)(5, "h3", 4)(6, "div", 5);
        \u0275\u0275text(7, " 1 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 6);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "div", 7);
        \u0275\u0275elementStart(12, "button", 8);
        \u0275\u0275listener("click", function EventBookModalComponent_Template_button_click_12_listener() {
          return ctx.hide_block.details = !ctx.hide_block.details;
        });
        \u0275\u0275elementStart(13, "icon");
        \u0275\u0275text(14);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9);
        \u0275\u0275element(16, "meeting-form-details", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(17, EventBookModalComponent_Conditional_17_Template, 13, 6, "section", 3);
        \u0275\u0275elementStart(18, "section", 3)(19, "h3", 4)(20, "div", 5);
        \u0275\u0275text(21, " 3 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 6);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "div", 7);
        \u0275\u0275elementStart(26, "button", 11);
        \u0275\u0275listener("click", function EventBookModalComponent_Template_button_click_26_listener() {
          return ctx.hide_block.resources = !ctx.hide_block.resources;
        });
        \u0275\u0275elementStart(27, "icon");
        \u0275\u0275text(28);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 12);
        \u0275\u0275conditionalCreate(30, EventBookModalComponent_Conditional_30_Template, 3, 3, "div", 13);
        \u0275\u0275element(31, "space-list-field", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(32, EventBookModalComponent_Conditional_32_Template, 15, 13, "section", 3);
        \u0275\u0275conditionalCreate(33, EventBookModalComponent_Conditional_33_Template, 13, 12, "section", 3);
        \u0275\u0275conditionalCreate(34, EventBookModalComponent_Conditional_34_Template, 13, 10, "section", 3);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 16, ctx.form.value.id ? "APP.CONCIERGE.ROOMS_BOOK_EDIT" : "APP.CONCIERGE.ROOMS_BOOK_NEW"))("loading", ctx.loading() ? \u0275\u0275pipeBind1(2, 18, "CALENDAR_EVENT.LOADING") : "");
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 20, "BOOKINGS.DETAILS"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.hide_block.details ? "expand_more" : "expand_less");
        \u0275\u0275advance();
        \u0275\u0275property("@show", ctx.hide_block.details ? "hide" : "show");
        \u0275\u0275advance();
        \u0275\u0275property("form", ctx.form);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.hide_attendees ? 17 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 22, "RESOURCE.ROOM"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.hide_block.resources ? "expand_more" : "expand_less");
        \u0275\u0275advance();
        \u0275\u0275property("@show", ctx.hide_block.resources ? "hide" : "show");
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.strict_capacity_check && ctx.total_capacity && ctx.total_capacity <= (ctx.form.value.attendees == null ? null : ctx.form.value.attendees.length) ? 30 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("multiday", ctx.allow_multiday);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.has_catering() ? 32 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.has_assets ? 33 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.hide_notes ? 34 : -1);
      }
    }, dependencies: [
      FullscreenModalShellComponent,
      RichTextInputComponent,
      SpaceListFieldComponent,
      AssetListFieldComponent,
      CateringListFieldComponent,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
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
      MatSelect,
      TranslatePipe
    ], encapsulation: 2, data: { animation: [ANIMATION_SHOW_CONTRACT_EXPAND] } });
  }
};
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
            [loading]="loading() ? ('CALENDAR_EVENT.LOADING' | translate) : ''"
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
                            type="button"
                            icon
                            name="toggle-details-meeting"
                            matRipple
                            (click)="hide_block.details = !hide_block.details"
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
                                type="button"
                                icon
                                name="toggle-attendees-meeting"
                                matRipple
                                (click)="
                                    hide_block.attendees = !hide_block.attendees
                                "
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
                            type="button"
                            icon
                            name="toggle-spaces-meeting"
                            matRipple
                            (click)="
                                hide_block.resources = !hide_block.resources
                            "
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
                @if (has_catering()) {
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
                                type="button"
                                icon
                                name="toggle-catering-meeting"
                                matRipple
                                (click)="
                                    hide_block.catering = !hide_block.catering
                                "
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
                            @if (form.value.catering?.length && has_codes()) {
                                <mat-form-field
                                    appearance="outline"
                                    class="mt-2 w-full"
                                >
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
                                            [(ngModel)]="code_filter"
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                            [placeholder]="
                                                'CALENDAR_EVENT.CATERING_CHARGE_CODE_SEARCH'
                                                    | translate
                                            "
                                        />
                                        <mat-option class="hidden"></mat-option>
                                        @for (
                                            code of filtered_codes();
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
                                            has_codes()
                                        )
                                    "
                                >
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
                                {{ !has_catering() ? '4' : '5' }}
                            </div>
                            <div class="text-xl">
                                {{ 'RESOURCE.ASSETS' | translate }}
                            </div>
                            <div class="w-px flex-1"></div>
                            <button
                                type="button"
                                icon
                                name="toggle-assets-meeting"
                                matRipple
                                (click)="hide_block.assets = !hide_block.assets"
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
                                    !has_catering() || !has_assets
                                        ? !has_catering() && !has_assets
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
  }], null, { event: [{ type: Output, args: ["event"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventBookModalComponent, { className: "EventBookModalComponent", filePath: "apps/concierge/src/app/day-view/event-book-modal.component.ts", lineNumber: 404 });
})();

// apps/concierge/src/app/day-view/events-state.service.ts
function periodFor(period, date, tz_offset = 0, week_start = 0) {
  const start_result = period === "month" ? startOfMonth(date) : period === "week" ? startOfWeek(date, { weekStartsOn: week_start }) : startOfDay(date);
  const end_result = period === "month" ? endOfMonth(date) : period === "week" ? endOfWeek(date, { weekStartsOn: week_start }) : endOfDay(date);
  const start = addMinutes(start_result, tz_offset * 60);
  const end = addMinutes(end_result, tz_offset * 60);
  return { start, end };
}
var EventsStateService = class _EventsStateService extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
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
    this.date = this._date.asObservable();
    this.zones = this._zones.asObservable();
    this.options = this._options.asObservable();
    this.loading = this._loading.asObservable();
    this.event = this._event.asObservable();
    this.period = this._period.asObservable();
    this.levels = (this._org.active_levels || of([])).pipe(switchMap((levels) => {
      if (!levels.length) {
        return of([]);
      }
      return forkJoin(levels.map((level) => requestSpacesForZone(level.id).pipe(map((spaces) => ({
        level,
        has_bookable: spaces.some((space) => space.bookable)
      })), catchError(() => of({ level, has_bookable: false })))));
    }), map((levels) => levels.filter((item) => item.has_bookable).map((item) => item.level)), shareReplay(1));
    this.spaces = combineLatest([
      this._zones,
      this._org.active_region.pipe(distinctUntilKeyChanged("id")),
      this._org.active_building.pipe(filter((_) => !!_), distinctUntilKeyChanged("id"))
    ]).pipe(debounceTime(300), tap(() => this.unsubWith("bind:")), switchMap(([zones]) => {
      this._loading.next(true);
      const zone_ids = this._active_zone_ids(zones);
      return forkJoin(zone_ids.map((id) => requestSpacesForZone(id)));
    }), map((l) => flatten(l).filter((_) => _.bookable).sort((a, b) => (a.display_name || a.name || "").localeCompare(b.display_name || b.name || ""))), tap(() => this._loading.next(false)), shareReplay(1));
    this.event_list = combineLatest([
      this._period,
      this._zones,
      this._date,
      this.spaces,
      this._poll
    ]).pipe(filter(([period]) => !!period), debounceTime(300), switchMap(([period, zones, date, spaces]) => {
      zones = this._active_zone_ids(zones);
      if (!zones.length)
        return of([]);
      this._loading.next(true);
      const { start, end } = periodFor(period, date, this.tz_offset, this._week_start);
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
          const mod = Dl(space.id, "Bookings");
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
      if (observables.length === 0)
        return of([]);
      if (observables.length === 1)
        return observables[0];
      return combineLatest(observables).pipe(map((event_lists) => flatten(event_lists)));
    }), tap(() => {
      this._loading.next(false);
      queueMicrotask(() => {
        this._removed_events.next([]);
        this._added_events.next([]);
      });
    }), shareReplay(1));
    this.filtered = combineLatest([
      this.event_list,
      this._removed_events,
      this._added_events,
      this._filters,
      this._date,
      this._period,
      this._zones,
      this._options
    ]).pipe(map(([events, removed, added, filters, date, period, zones, options]) => {
      let event_list = [...events];
      event_list = event_list.filter((_) => !removed.find((e) => _.id && e.id && _.id === e.id || _.ical_uid && e.ical_uid && _.ical_uid === e.ical_uid));
      event_list = event_list.concat(added);
      const { start, end } = periodFor(period, date, this.tz_offset, this._week_start);
      return this.filterEvents(event_list, start, end, filters, zones, options);
    }), shareReplay(1));
    this.pending = of(1).pipe(switchMap(() => {
      const mod = this._org.module("approvals", "RoomBookingApproval");
      if (!mod)
        return of([]);
      const binding = mod.binding("approval_required");
      this.subscription("pending", binding.bind());
      return observableFromSignal(binding.listen()).pipe(map((_) => flatten(Object.values(_ || {}))?.map((i) => new CalendarEvent(i))));
    }), shareReplay(1));
    this.setFilters = (details) => this._filters.next(details);
    this.setDate = (date) => this._date.next(date);
    this.setPeriod = (period) => this._period.next(period);
    this.setZones = (zones) => this._zones.next(this._clean_zone_ids(zones));
    this.setEvent = (event) => this._event.next(event);
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
      new Promise((resolve) => {
        const subscription = ref.componentInstance.event.subscribe((details2) => {
          if (details2?.reason !== "done")
            return;
          subscription.unsubscribe();
          resolve(details2);
        });
      }),
      ref.afterClosed().toPromise()
    ]);
    if (details?.reason !== "done")
      return;
    this.replace(details.metadata);
  }
  async removeBooking(event, series = false) {
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
    this.remove(event);
    await declineEvent(series ? event.recurring_event_id || event.id : event.id, {
      calendar: event.calendar || event.mailbox || event.host,
      system_id: event.system?.id
    }).toPromise().catch((e) => {
      this.restore(event);
      notifyError(i18n("APP.CONCIERGE.BOOKING_REMOVE_ERROR", { error: e }));
      details.close();
      throw e;
    });
    notifySuccess(i18n("APP.CONCIERGE.BOOKING_REMOVE_SUCCESS"));
    this._dialog.closeAll();
    return true;
  }
  /**
   * Update booking in the bookings list
   * @param booking
   */
  replace(booking) {
    this._removed_events.next([
      ...this._removed_events.getValue(),
      booking
    ]);
    this._added_events.next([
      ...this._added_events.getValue().filter((_) => !(_.id && booking.id && _.id === booking.id || _.ical_uid && booking.ical_uid && _.ical_uid === booking.ical_uid)),
      booking
    ]);
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
  /**
   * Restore a booking that was optimistically removed
   * @param booking
   */
  restore(booking) {
    this._removed_events.next(this._removed_events.getValue().filter((_) => !(_.id && booking.id && _.id === booking.id || _.ical_uid && booking.ical_uid && _.ical_uid === booking.ical_uid)));
  }
  filterEvents(events, start, end, filters, zones = [], options = {}) {
    return events.filter((bkn) => {
      const intersects = timePeriodsIntersect(start.valueOf(), end.valueOf(), bkn.date, bkn.date + bkn.duration * 60 * 1e3);
      const has_space = !filters.space_emails?.length || !!bkn.resources.find((space) => filters.space_emails.includes(space.email));
      const in_zones = !filters.zone_ids?.length || !!bkn.resources.find((space) => space.zones.find((zone) => filters.zone_ids.includes(zone)));
      const type = bkn.guests?.length ? "external" : bkn.status === "declined" ? "cancelled" : "internal";
      const show = !filters.hide_type?.length || !filters.hide_type.find((item) => item.id === type || item === type);
      const show_setup_breakdown = options.show_overflow || !bkn.is_system_event;
      return intersects && has_space && in_zones && show && show_setup_breakdown;
    });
  }
  _clean_zone_ids(zones = []) {
    return (zones || []).filter((zone_id) => !!zone_id);
  }
  _active_zone_ids(zones = []) {
    const zone_ids = this._clean_zone_ids(zones);
    if (zone_ids.length && zone_ids[0] !== this._org.region?.id) {
      return zone_ids;
    }
    const default_zones = this._settings.get("app.use_region") ? this._org.buildingsForRegion(this._org.region).map((_) => _.id) : [this._org.building?.id];
    return this._clean_zone_ids(default_zones);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275EventsStateService_BaseFactory;
      return function EventsStateService_Factory(__ngFactoryType__) {
        return (\u0275EventsStateService_BaseFactory || (\u0275EventsStateService_BaseFactory = \u0275\u0275getInheritedFactory(_EventsStateService)))(__ngFactoryType__ || _EventsStateService);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EventsStateService, factory: _EventsStateService.\u0275fac, providedIn: "root" });
  }
};
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
//# sourceMappingURL=chunk-NYFUTAAC.js.map
