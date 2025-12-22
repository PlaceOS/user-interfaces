import {
  ParkingSpaceListFieldComponent
} from "./chunk-4TKH7LIR.js";
import {
  BookingFormService
} from "./chunk-XCGU5XIL.js";
import {
  AsyncHandler,
  BehaviorSubject,
  Booking,
  Component,
  DateFieldComponent,
  DefaultValueAccessor,
  DurationFieldComponent,
  EventEmitter,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  FullscreenModalShellComponent,
  IconComponent,
  Injectable,
  MAT_DIALOG_DATA,
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
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRipple,
  MatRippleModule,
  MatTooltip,
  MatTooltipModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  OrganisationService,
  Output,
  ReactiveFormsModule,
  RecurrenceDays,
  SettingsService,
  SettingsToggleComponent,
  TimeFieldComponent,
  TranslatePipe,
  UserPipe,
  UserSearchFieldComponent,
  Validators,
  Xu,
  __spreadProps,
  __spreadValues,
  addDays,
  addHours,
  approveBooking,
  approveBookingInstance,
  checkinBooking,
  checkinBookingInstance,
  combineLatest,
  currentUser,
  debounceTime,
  ec,
  endOfDay,
  filter,
  first,
  getInvalidFields,
  getUnixTime,
  i18n,
  inject,
  map,
  nextValueFrom,
  notifyError,
  notifySuccess,
  of,
  openConfirmModal,
  queryBookings,
  randomInt,
  rejectBooking,
  rejectBookingInstance,
  removeBooking,
  saveBooking,
  set,
  setClassMetadata,
  shareReplay,
  showStaff,
  signal,
  startOfDay,
  switchMap,
  tap,
  unique,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-Z5DSMDUT.js";

// apps/concierge/src/app/parking/parking-booking-modal.component.ts
var _c0 = () => ({ standalone: true });
function ParkingBookingModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "a-user-search-field", 18);
    \u0275\u0275elementEnd();
  }
}
function ParkingBookingModalComponent_Conditional_31_Template(rf, ctx) {
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
function ParkingBookingModalComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 19)(2, "label", 20);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a-time-field", 21);
    \u0275\u0275listener("ngModelChange", function ParkingBookingModalComponent_Conditional_32_Template_a_time_field_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 22)(9, "label", 23);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "a-duration-field", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 9, "FORM.TIME_START"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(13, _c0))("disabled", ctx_r1.form.controls.date.disabled)("use_24hr", ctx_r1.use_24hr);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 11, "FORM.TIME_END"));
    \u0275\u0275advance(4);
    \u0275\u0275property("time", ctx_r1.form == null ? null : (tmp_7_0 = ctx_r1.form.getRawValue()) == null ? null : tmp_7_0.date)("max", ctx_r1.max_duration)("use_24hr", ctx_r1.use_24hr);
  }
}
function ParkingBookingModalComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
var _ParkingBookingModalComponent = class _ParkingBookingModalComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._data = inject(MAT_DIALOG_DATA);
    this._booking_form = inject(BookingFormService);
    this._dialog_ref = inject(MatDialogRef);
    this._settings = inject(SettingsService);
    this.loading = signal(false);
    this.user = this._data.user;
    this.date = this._data.date;
    this.allow_time_changes = this._data.allow_time_changes;
    this.form = this._booking_form.form;
  }
  get id() {
    return this.form.value.id;
  }
  get end_date() {
    return endOfDay(addDays(Date.now(), this._settings.get("app.parking.available_period") || this._settings.get("app.bookings.available_period") || 7));
  }
  get max_duration() {
    return this._settings.get("app.parking.max_duration") || this._settings.get("app.bookings.max_duration") || 480;
  }
  get allow_all_day() {
    return this._settings.get("app.parking.allow_all_day") ?? true;
  }
  get use_24hr() {
    return this._settings.get("app.use_24_hour_time");
  }
  ngOnInit() {
    this._booking_form.newForm("parking", this._data.booking);
    this._booking_form.setOptions({ type: "parking" });
    this.subscription("user_changes", this.form.controls.user.valueChanges.subscribe((user) => {
      if (!user)
        return;
      this.form.patchValue({
        user_name: user.name,
        user_email: user.email,
        attendees: [user]
      });
    }));
    this.form.patchValue({
      booking_type: "parking",
      all_day: this._data.booking ? this._data.booking.duration > 12 * 60 : true
    });
    if (!this.form.value.user) {
      this.form.patchValue({
        user: this._data.booking?.attendees[0] || currentUser()
      });
    }
    if (this._data.parent_id) {
      this.form.patchValue({
        parent_id: this._data.parent_id
      });
    }
    if (this._data.user) {
      this.form.patchValue({
        user: this._data.user,
        user_email: this._data.user.email,
        user_name: this._data.user.name,
        attendees: [this._data.user]
      });
      this.form.controls.plate_number.setValidators([
        Validators.required
      ]);
      this.form.controls.user_name.disable();
      this.form.controls.user_email.disable();
    }
    if (this._data.booking?.id) {
      this.form.controls.user.disable();
      this.form.controls.user_name.disable();
      this.form.controls.user_email.disable();
    } else {
      this.form.controls.user.enable();
      this.form.controls.user_name.enable();
      this.form.controls.user_email.enable();
    }
    if (this._data.level) {
      this._booking_form.setOptions({ zone_id: this._data.level.id });
    }
    if (this._data.link_id) {
      this.form.patchValue({ parent_id: this._data.link_id });
    }
    if (this._data.space) {
      this.form.patchValue({ resources: [this._data.space] });
    }
    if (this._data.date) {
      console.log("Date:", this._data.date);
      this.timeout("init_date", () => {
        this.form.patchValue({ date: this._data.date });
      }, 300);
    }
  }
  async postForm() {
    if (!this.form.value.all_day && this.form.value.duration > this.max_duration) {
      this.form.patchValue({ duration: 30 });
    }
    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();
    if (this.form.invalid) {
      return notifyError(i18n("FORM.INVALID_FIELDS", {
        field_list: getInvalidFields(this.form).join(", ")
      }));
    }
    this.loading.set(true);
    this.form.patchValue({ user_id: void 0, booking_type: "parking" });
    const result = await this._booking_form.postForm().catch((e) => {
      this.loading.set(false);
      this.form.controls.plate_number.setValidators([]);
      notifyError(e);
      throw e;
    });
    this.form.controls.plate_number.setValidators([]);
    notifySuccess(i18n("APP.CONCIERGE.PARKING_SAVE"));
    this.form.get("date").enable();
    this.form.get("duration").enable();
    this.form.controls.user.disable();
    this.form.controls.user_name.disable();
    this.form.controls.user_email.disable();
    this._dialog_ref.close(result.id);
  }
};
_ParkingBookingModalComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ParkingBookingModalComponent_BaseFactory;
  return function ParkingBookingModalComponent_Factory(__ngFactoryType__) {
    return (\u0275ParkingBookingModalComponent_BaseFactory || (\u0275ParkingBookingModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ParkingBookingModalComponent)))(__ngFactoryType__ || _ParkingBookingModalComponent);
  };
})();
_ParkingBookingModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingBookingModalComponent, selectors: [["parking-booking-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 47, vars: 44, consts: [[3, "confirm", "heading", "loading"], [3, "formGroup"], [1, "mb-4", "flex", "items-center", "space-x-2"], [1, "flex", "items-center", "space-x-2"], [1, "flex-1"], ["for", "user-name"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "user-name", "formControlName", "user_name", 3, "placeholder"], ["for", "email"], ["matInput", "", "name", "email", "formControlName", "user_email", 3, "placeholder"], [1, "relative"], ["for", "date"], ["formControlName", "date"], ["formControlName", "all_day", 1, "absolute", "-top-2", "right-0"], ["for", "parking-space"], ["name", "parking-space", "formControlName", "resources", 1, "mb-2"], ["for", "plate-number"], ["matInput", "", "name", "plate-number", "formControlName", "plate_number", 3, "placeholder"], ["name", "user", "formControlName", "user", 1, "flex-1"], [1, "w-1/3", "flex-1"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "disabled", "use_24hr"], [1, "relative", "w-1/3", "flex-1"], ["for", "end-time"], ["name", "end-time", "formControlName", "duration", 3, "time", "max", "use_24hr"]], template: function ParkingBookingModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("confirm", function ParkingBookingModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
      return ctx.postForm();
    });
    \u0275\u0275elementStart(3, "form", 1);
    \u0275\u0275conditionalCreate(4, ParkingBookingModalComponent_Conditional_4_Template, 2, 0, "div", 2);
    \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "label", 5);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-form-field", 6);
    \u0275\u0275element(11, "input", 7);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementStart(13, "mat-error");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 4)(17, "label", 8);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-form-field", 6);
    \u0275\u0275element(21, "input", 9);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementStart(23, "mat-error");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "div", 10)(27, "label", 11);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "a-date-field", 12);
    \u0275\u0275conditionalCreate(31, ParkingBookingModalComponent_Conditional_31_Template, 3, 3, "mat-checkbox", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(32, ParkingBookingModalComponent_Conditional_32_Template, 15, 14, "div", 3);
    \u0275\u0275elementStart(33, "label", 14);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "parking-space-list-field", 15);
    \u0275\u0275elementStart(37, "label", 16);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275conditionalCreate(40, ParkingBookingModalComponent_Conditional_40_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "mat-form-field", 6);
    \u0275\u0275element(42, "input", 17);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementStart(44, "mat-error");
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 18, ctx.id ? "APP.CONCIERGE.PARKING_EDIT" : "APP.CONCIERGE.PARKING_NEW"))("loading", ctx.loading() ? \u0275\u0275pipeBind1(2, 20, "APP.CONCIERGE.PARKING_SAVING") : "");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.user ? 4 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 22, "FORM.NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(12, 24, "FORM.NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 26, "FORM.NAME_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 28, "FORM.EMAIL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(22, 30, "FORM.EMAIL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 32, "FORM.EMAIL_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 34, "FORM.DATE"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.allow_all_day && !ctx.form.controls.duration.disabled ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.form.value.all_day ? 32 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 36, "APP.CONCIERGE.PARKING_SPACE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 38, "EXPLORE.PARKING_PLATE_NUMBER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.user ? 40 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(43, 40, "EXPLORE.PARKING_PLATE_NUMBER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 42, "BOOKINGS.PARKING_PLATE_NUMBER_REQUIRED"));
  }
}, dependencies: [
  FullscreenModalShellComponent,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  FormsModule,
  NgModel,
  MatFormFieldModule,
  MatFormField,
  MatError,
  MatInputModule,
  MatInput,
  DurationFieldComponent,
  TimeFieldComponent,
  MatCheckboxModule,
  MatCheckbox,
  DateFieldComponent,
  TranslatePipe,
  UserSearchFieldComponent,
  ParkingSpaceListFieldComponent
], encapsulation: 2 });
var ParkingBookingModalComponent = _ParkingBookingModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingBookingModalComponent, [{
    type: Component,
    args: [{ selector: "parking-booking-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (id
                    ? 'APP.CONCIERGE.PARKING_EDIT'
                    : 'APP.CONCIERGE.PARKING_NEW'
                ) | translate
            "
            [loading]="
                loading() ? ('APP.CONCIERGE.PARKING_SAVING' | translate) : ''
            "
            (confirm)="postForm()"
        >
            <form [formGroup]="form">
                @if (!user) {
                    <div class="mb-4 flex items-center space-x-2">
                        <a-user-search-field
                            name="user"
                            formControlName="user"
                            class="flex-1"
                        ></a-user-search-field>
                    </div>
                }
                <div class="flex items-center space-x-2">
                    <div class="flex-1">
                        <label for="user-name">{{
                            'FORM.NAME' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                name="user-name"
                                formControlName="user_name"
                                [placeholder]="'FORM.NAME' | translate"
                            />
                            <mat-error>{{
                                'FORM.NAME_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex-1">
                        <label for="email">{{
                            'FORM.EMAIL' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                name="email"
                                formControlName="user_email"
                                [placeholder]="'FORM.EMAIL' | translate"
                            />
                            <mat-error>{{
                                'FORM.EMAIL_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                </div>
                <div class="relative">
                    <label for="date">{{ 'FORM.DATE' | translate }}</label>
                    <a-date-field formControlName="date"></a-date-field>
                    @if (allow_all_day && !form.controls.duration.disabled) {
                        <mat-checkbox
                            formControlName="all_day"
                            class="absolute -top-2 right-0"
                        >
                            {{ 'COMMON.ALL_DAY' | translate }}
                        </mat-checkbox>
                    }
                </div>
                @if (!form.value.all_day) {
                    <div class="flex items-center space-x-2">
                        <div class="w-1/3 flex-1">
                            <label for="start-time"
                                >{{ 'FORM.TIME_START' | translate
                                }}<span>*</span></label
                            >
                            <a-time-field
                                name="start-time"
                                [ngModel]="form.value.date"
                                (ngModelChange)="
                                    form.patchValue({ date: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [disabled]="form.controls.date.disabled"
                                [use_24hr]="use_24hr"
                            ></a-time-field>
                        </div>
                        <div class="relative w-1/3 flex-1">
                            <label for="end-time"
                                >{{ 'FORM.TIME_END' | translate
                                }}<span>*</span></label
                            >
                            <a-duration-field
                                name="end-time"
                                formControlName="duration"
                                [time]="form?.getRawValue()?.date"
                                [max]="max_duration"
                                [use_24hr]="use_24hr"
                            >
                            </a-duration-field>
                        </div>
                    </div>
                }
                <label for="parking-space">{{
                    'APP.CONCIERGE.PARKING_SPACE' | translate
                }}</label>
                <parking-space-list-field
                    name="parking-space"
                    formControlName="resources"
                    class="mb-2"
                ></parking-space-list-field>
                <label for="plate-number">
                    {{ 'EXPLORE.PARKING_PLATE_NUMBER' | translate }}
                    @if (user) {
                        <span>*</span>
                    }
                </label>
                <mat-form-field appearance="outline" class="w-full">
                    <input
                        matInput
                        name="plate-number"
                        formControlName="plate_number"
                        [placeholder]="
                            'EXPLORE.PARKING_PLATE_NUMBER' | translate
                        "
                    />
                    <mat-error>{{
                        'BOOKINGS.PARKING_PLATE_NUMBER_REQUIRED' | translate
                    }}</mat-error>
                </mat-form-field>
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      ReactiveFormsModule,
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      DurationFieldComponent,
      TimeFieldComponent,
      MatCheckboxModule,
      DateFieldComponent,
      MatInputModule,
      TranslatePipe,
      UserSearchFieldComponent,
      ParkingSpaceListFieldComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingBookingModalComponent, { className: "ParkingBookingModalComponent", filePath: "apps/concierge/src/app/parking/parking-booking-modal.component.ts", lineNumber: 188 });
})();

// apps/concierge/src/app/parking/parking-space-modal.component.ts
function ParkingSpaceModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 3)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ParkingSpaceModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 4)(1, "label", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 9);
    \u0275\u0275element(5, "input", 10);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "mat-error");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "label", 11);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-form-field", 9);
    \u0275\u0275element(14, "input", 12);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementStart(16, "mat-error");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "label", 13);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 14);
    \u0275\u0275element(23, "a-user-search-field", 15);
    \u0275\u0275elementStart(24, "button", 16);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275listener("click", function ParkingSpaceModalComponent_Conditional_6_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ assigned_user: null, assigned_to: null, assigned_name: null }));
    });
    \u0275\u0275elementStart(26, "icon", 17);
    \u0275\u0275text(27, " person_cancel ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "label", 18);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "mat-form-field", 9);
    \u0275\u0275element(32, "textarea", 19);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 11, "APP.CONCIERGE.PARKING_SPACE_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 13, "APP.CONCIERGE.PARKING_SPACE_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 15, "FORM.NAME_REQUIRED"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 17, "EXPLORE.MAP_ID"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(15, 19, "EXPLORE.MAP_ID_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 21, "EXPLORE.MAP_ID_REQUIRED"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 23, "APP.CONCIERGE.USER_ASSIGNED"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(25, 25, "APP.CONCIERGE.USER_CLEAR"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 27, "FORM.NOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(33, 29, "FORM.NOTES"));
  }
}
function ParkingSpaceModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 5);
    \u0275\u0275element(1, "mat-spinner", 20);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.PARKING_SPACE_SAVE"));
  }
}
var _ParkingSpaceModalComponent = class _ParkingSpaceModalComponent {
  get id() {
    return this._data?.id || "";
  }
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.event = new EventEmitter();
    this.form = new FormGroup({
      id: new FormControl(""),
      name: new FormControl("", [Validators.required]),
      map_id: new FormControl("", [Validators.required]),
      assigned_user: new FormControl(null),
      assigned_to: new FormControl(""),
      assigned_name: new FormControl(""),
      notes: new FormControl(""),
      map_rotation: new FormControl(0)
    });
    const _data = this._data;
    if (_data)
      this.form.patchValue(_data);
  }
  async ngOnInit() {
    if (this._data.assigned_to) {
      const user = await showStaff(this._data.assigned_to).toPromise();
      if (user) {
        this.form.patchValue({
          assigned_user: user,
          assigned_to: user.email,
          assigned_name: user.name
        });
      }
    }
  }
  postForm() {
    if (!this.form.valid)
      return;
    this.loading = true;
    const value = __spreadValues({}, this.form.getRawValue());
    if (value.assigned_user) {
      value.assigned_to = value.assigned_user.email;
      value.assigned_name = value.assigned_user.name;
      delete value.assigned_user;
    }
    this._dialog_ref.disableClose = true;
    this.event.emit({ reason: "done", metadata: value });
  }
};
_ParkingSpaceModalComponent.\u0275fac = function ParkingSpaceModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ParkingSpaceModalComponent)();
};
_ParkingSpaceModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingSpaceModalComponent, selectors: [["parking-space-modal"]], outputs: { event: "event" }, decls: 12, vars: 8, consts: [[1, "w-md"], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "flex-col", "p-4", 3, "formGroup"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "border-base-300", "flex", "items-center", "justify-end", "space-x-2", "border-t", "px-4", "py-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "name", "name", "formControlName", "name", 3, "placeholder"], ["for", "map-id"], ["matInput", "", "name", "map-id", "formControlName", "map_id", 3, "placeholder"], ["for", "user"], [1, "mb-4", "flex", "space-x-2"], ["name", "user", "formControlName", "assigned_user", 1, "flex-1"], ["icon", "", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "min-w-12", "rounded-sm", 3, "click", "matTooltip"], ["className", "material-symbols-outlined"], ["for", "notes"], ["matInput", "", "name", "notes", "formControlName", "notes", 3, "placeholder"], ["diameter", "32"]], template: function ParkingSpaceModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ParkingSpaceModalComponent_Conditional_5_Template, 3, 0, "button", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, ParkingSpaceModalComponent_Conditional_6_Template, 34, 31, "main", 4)(7, ParkingSpaceModalComponent_Conditional_7_Template, 5, 3, "main", 5);
    \u0275\u0275elementStart(8, "footer", 6)(9, "button", 7);
    \u0275\u0275listener("click", function ParkingSpaceModalComponent_Template_button_click_9_listener() {
      return ctx.postForm();
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, ctx.id ? "APP.CONCIERGE.PARKING_SPACE_EDIT" : "APP.CONCIERGE.PARKING_SPACE_NEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.loading ? 6 : 7);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 6, "COMMON.SAVE"), " ");
  }
}, dependencies: [
  MatDialogModule,
  MatDialogClose,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatFormFieldModule,
  MatFormField,
  MatError,
  MatInputModule,
  MatInput,
  IconComponent,
  UserSearchFieldComponent,
  ReactiveFormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  MatTooltipModule,
  MatTooltip
], encapsulation: 2 });
var ParkingSpaceModalComponent = _ParkingSpaceModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingSpaceModalComponent, [{
    type: Component,
    args: [{ selector: "parking-space-modal", template: `
        <div class="w-md">
            <header
                class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
            >
                <h2 class="px-2 text-xl font-medium">
                    {{
                        (id
                            ? 'APP.CONCIERGE.PARKING_SPACE_EDIT'
                            : 'APP.CONCIERGE.PARKING_SPACE_NEW'
                        ) | translate
                    }}
                </h2>
                @if (!loading) {
                    <button icon matRipple mat-dialog-close>
                        <icon>close</icon>
                    </button>
                }
            </header>
            @if (!loading) {
                <main class="flex flex-col p-4" [formGroup]="form">
                    <label for="name">{{
                        'APP.CONCIERGE.PARKING_SPACE_NAME' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="name"
                            [placeholder]="
                                'APP.CONCIERGE.PARKING_SPACE_NAME' | translate
                            "
                            formControlName="name"
                        />
                        <mat-error>{{
                            'FORM.NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                    <label for="map-id">{{
                        'EXPLORE.MAP_ID' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="map-id"
                            [placeholder]="
                                'EXPLORE.MAP_ID_PLACEHOLDER' | translate
                            "
                            formControlName="map_id"
                        />
                        <mat-error>
                            {{ 'EXPLORE.MAP_ID_REQUIRED' | translate }}
                        </mat-error>
                    </mat-form-field>
                    <label for="user">{{
                        'APP.CONCIERGE.USER_ASSIGNED' | translate
                    }}</label>
                    <div class="mb-4 flex space-x-2">
                        <a-user-search-field
                            name="user"
                            formControlName="assigned_user"
                            class="flex-1"
                        ></a-user-search-field>
                        <button
                            icon
                            matRipple
                            class="bg-secondary text-secondary-content h-12 w-12 min-w-12 rounded-sm"
                            [matTooltip]="
                                'APP.CONCIERGE.USER_CLEAR' | translate
                            "
                            (click)="
                                form.patchValue({
                                    assigned_user: null,
                                    assigned_to: null,
                                    assigned_name: null,
                                })
                            "
                        >
                            <icon className="material-symbols-outlined">
                                person_cancel
                            </icon>
                        </button>
                    </div>
                    <label for="notes">{{ 'FORM.NOTES' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <textarea
                            matInput
                            name="notes"
                            [placeholder]="'FORM.NOTES' | translate"
                            formControlName="notes"
                        ></textarea>
                    </mat-form-field>
                </main>
            } @else {
                <main
                    class="flex flex-col items-center justify-center space-y-2 p-8"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p>{{ 'APP.CONCIERGE.PARKING_SPACE_SAVE' | translate }}</p>
                </main>
            }
            <footer
                class="border-base-300 flex items-center justify-end space-x-2 border-t px-4 py-2"
            >
                <button btn matRipple class="w-32" (click)="postForm()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        </div>
    `, imports: [
      MatDialogModule,
      TranslatePipe,
      MatRippleModule,
      MatProgressSpinnerModule,
      MatFormFieldModule,
      MatInputModule,
      IconComponent,
      UserSearchFieldComponent,
      ReactiveFormsModule,
      MatTooltipModule
    ] }]
  }], () => [], { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingSpaceModalComponent, { className: "ParkingSpaceModalComponent", filePath: "apps/concierge/src/app/parking/parking-space-modal.component.ts", lineNumber: 149 });
})();

// apps/concierge/src/app/parking/parking-user-modal.component.ts
function ParkingUserModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 3)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ParkingUserModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 4)(1, "div", 7);
    \u0275\u0275element(2, "a-user-search-field", 8);
    \u0275\u0275elementStart(3, "button", 9);
    \u0275\u0275listener("click", function ParkingUserModalComponent_Conditional_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ user: null, email: null, name: null }));
    });
    \u0275\u0275elementStart(4, "icon", 10);
    \u0275\u0275text(5, " person_cancel ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "label", 11);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-form-field", 12);
    \u0275\u0275element(10, "input", 13);
    \u0275\u0275elementStart(11, "mat-error");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "label", 14);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-form-field", 12);
    \u0275\u0275element(18, "input", 15);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementStart(20, "mat-error");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 16)(24, "div", 17)(25, "label", 18);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-form-field", 19);
    \u0275\u0275element(29, "input", 20);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 17)(32, "label", 21);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "mat-form-field", 19);
    \u0275\u0275element(36, "input", 22);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "label", 23);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "mat-form-field", 12);
    \u0275\u0275element(42, "textarea", 24);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 25);
    \u0275\u0275element(45, "settings-toggle", 26);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 13, "FORM.NAME"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 15, "FORM.NAME_REQUIRED"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 17, "FORM.EMAIL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(19, 19, "FORM.EMAIL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 21, "FORM.EMAIL_REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 23, "EXPLORE.PARKING_PLATE_NUMBER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(30, 25, "EXPLORE.PARKING_PLATE_NUMBER"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 27, "APP.CONCIERGE.PARKING_CAR_COLOUR"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(37, 29, "APP.CONCIERGE.PARKING_CAR_COLOUR"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 31, "FORM.NOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(43, 33, "FORM.NOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(46, 35, "APP.CONCIERGE.PARKING_USER_DENY_PLACEHOLER"));
  }
}
function ParkingUserModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 5);
    \u0275\u0275element(1, "mat-spinner", 27);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.PARKING_USER_SAVE"));
  }
}
function ParkingUserModalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 6)(1, "button", 28);
    \u0275\u0275listener("click", function ParkingUserModalComponent_Conditional_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.postForm());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.SAVE"), " ");
  }
}
var _ParkingUserModalComponent = class _ParkingUserModalComponent extends AsyncHandler {
  get id() {
    return this._data?.id || "";
  }
  constructor() {
    super();
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.event = new EventEmitter();
    this.loading = false;
    this.form = new FormGroup({
      id: new FormControl(""),
      user: new FormControl(null),
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      plate_number: new FormControl(""),
      car_color: new FormControl(""),
      notes: new FormControl(""),
      deny: new FormControl(false)
    });
    const _data = this._data;
    if (_data)
      this.form.patchValue(_data);
  }
  ngOnInit() {
    this.subscription("user", this.form.valueChanges.subscribe((value) => {
      if (value.user?.id && value.user?.email !== this.form.value.email) {
        this.form.patchValue({
          email: value.user.email,
          name: value.user.name
        });
      }
    }));
  }
  postForm() {
    if (!this.form.valid)
      return;
    this.loading = true;
    const value = this.form.value;
    if (value.user) {
      value.email = value.user.email;
      value.name = value.user.name;
    }
    this._dialog_ref.disableClose = true;
    this.event.emit({ reason: "done", metadata: value });
  }
};
_ParkingUserModalComponent.\u0275fac = function ParkingUserModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ParkingUserModalComponent)();
};
_ParkingUserModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingUserModalComponent, selectors: [["parking-user-modal"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 6, consts: [[1, "w-md"], [1, "flex", "w-full", "items-center", "justify-between", "px-2"], [1, "px-2"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "max-h-[65vh]", "flex-col", "overflow-auto", "p-4", 3, "formGroup"], [1, "user-y-2", "flex", "flex-col", "items-center", "justify-center", "p-8"], [1, "border-base-200", "flex", "items-center", "justify-end", "space-x-2", "border-t", "p-2"], [1, "mb-4", "flex", "space-x-2"], ["name", "user", "formControlName", "user", 1, "flex-1"], ["icon", "", "matRipple", "", "matTooltip", "Clear Selected User", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "min-w-12", "rounded-sm", 3, "click"], ["className", "material-symbols-outlined"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "name", "name", "formControlName", "name", "placeholder", "Name"], ["for", "email"], ["matInput", "", "name", "email", "formControlName", "email", 3, "placeholder"], [1, "flex", "items-center", "space-x-2"], [1, "w-1/3", "flex-1"], ["for", "plate-number"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "plate-number", "formControlName", "plate_number", 3, "placeholder"], ["for", "car-color"], ["matInput", "", "name", "car-color", "formControlName", "car_color", 3, "placeholder"], ["for", "notes"], ["matInput", "", "name", "notes", "formControlName", "notes", 3, "placeholder"], [1, "mb-4", "flex", "items-center"], ["formControlName", "deny", 1, "flex-1", 3, "name"], ["diameter", "32"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"]], template: function ParkingUserModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ParkingUserModalComponent_Conditional_5_Template, 3, 0, "button", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, ParkingUserModalComponent_Conditional_6_Template, 47, 37, "main", 4)(7, ParkingUserModalComponent_Conditional_7_Template, 5, 3, "main", 5);
    \u0275\u0275conditionalCreate(8, ParkingUserModalComponent_Conditional_8_Template, 4, 3, "footer", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, ctx.id ? "APP.CONCIERGE.PARKING_USER_EDIT" : "APP.CONCIERGE.PARKING_USER_NEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.loading ? 6 : 7);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading ? 8 : -1);
  }
}, dependencies: [
  IconComponent,
  TranslatePipe,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatRippleModule,
  MatRipple,
  SettingsToggleComponent,
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
  FormsModule,
  MatTooltipModule,
  MatTooltip,
  UserSearchFieldComponent
], encapsulation: 2 });
var ParkingUserModalComponent = _ParkingUserModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingUserModalComponent, [{
    type: Component,
    args: [{ selector: "parking-user-modal", template: `
        <div class="w-md">
            <header class="flex w-full items-center justify-between px-2">
                <h2 class="px-2">
                    {{
                        (id
                            ? 'APP.CONCIERGE.PARKING_USER_EDIT'
                            : 'APP.CONCIERGE.PARKING_USER_NEW'
                        ) | translate
                    }}
                </h2>
                @if (!loading) {
                    <button icon matRipple mat-dialog-close>
                        <icon>close</icon>
                    </button>
                }
            </header>
            @if (!loading) {
                <main
                    class="flex max-h-[65vh] flex-col overflow-auto p-4"
                    [formGroup]="form"
                >
                    <div class="mb-4 flex space-x-2">
                        <a-user-search-field
                            name="user"
                            formControlName="user"
                            class="flex-1"
                        ></a-user-search-field>
                        <button
                            icon
                            matRipple
                            class="bg-secondary text-secondary-content h-12 w-12 min-w-12 rounded-sm"
                            matTooltip="Clear Selected User"
                            (click)="
                                form.patchValue({
                                    user: null,
                                    email: null,
                                    name: null,
                                })
                            "
                        >
                            <icon className="material-symbols-outlined">
                                person_cancel
                            </icon>
                        </button>
                    </div>
                    <label for="name">{{ 'FORM.NAME' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="name"
                            formControlName="name"
                            placeholder="Name"
                        />
                        <mat-error>{{
                            'FORM.NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                    <label for="email">{{ 'FORM.EMAIL' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="email"
                            formControlName="email"
                            [placeholder]="'FORM.EMAIL' | translate"
                        />
                        <mat-error>{{
                            'FORM.EMAIL_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                    <div class="flex items-center space-x-2">
                        <div class="w-1/3 flex-1">
                            <label for="plate-number">{{
                                'EXPLORE.PARKING_PLATE_NUMBER' | translate
                            }}</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    name="plate-number"
                                    formControlName="plate_number"
                                    [placeholder]="
                                        'EXPLORE.PARKING_PLATE_NUMBER'
                                            | translate
                                    "
                                />
                            </mat-form-field>
                        </div>
                        <div class="w-1/3 flex-1">
                            <label for="car-color">{{
                                'APP.CONCIERGE.PARKING_CAR_COLOUR' | translate
                            }}</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    name="car-color"
                                    formControlName="car_color"
                                    [placeholder]="
                                        'APP.CONCIERGE.PARKING_CAR_COLOUR'
                                            | translate
                                    "
                                />
                            </mat-form-field>
                        </div>
                    </div>
                    <label for="notes">{{ 'FORM.NOTES' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <textarea
                            matInput
                            name="notes"
                            formControlName="notes"
                            [placeholder]="'FORM.NOTES' | translate"
                        ></textarea>
                    </mat-form-field>
                    <div class="mb-4 flex items-center">
                        <settings-toggle
                            class="flex-1"
                            [name]="
                                'APP.CONCIERGE.PARKING_USER_DENY_PLACEHOLER'
                                    | translate
                            "
                            formControlName="deny"
                        >
                        </settings-toggle>
                    </div>
                </main>
            } @else {
                <main
                    class="user-y-2 flex flex-col items-center justify-center p-8"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p>{{ 'APP.CONCIERGE.PARKING_USER_SAVE' | translate }}</p>
                </main>
            }
            @if (!loading) {
                <footer
                    class="border-base-200 flex items-center justify-end space-x-2 border-t p-2"
                >
                    <button btn matRipple class="w-32" (click)="postForm()">
                        {{ 'COMMON.SAVE' | translate }}
                    </button>
                </footer>
            }
        </div>
    `, imports: [
      IconComponent,
      TranslatePipe,
      MatProgressSpinnerModule,
      MatRippleModule,
      SettingsToggleComponent,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule,
      FormsModule,
      MatTooltipModule,
      UserSearchFieldComponent
    ] }]
  }], () => [], { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingUserModalComponent, { className: "ParkingUserModalComponent", filePath: "apps/concierge/src/app/parking/parking-user-modal.component.ts", lineNumber: 185 });
})();

// apps/concierge/src/app/parking/parking-state.service.ts
var USER_PIPE = new UserPipe();
var _ParkingStateService = class _ParkingStateService extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this._poll = new BehaviorSubject(0);
    this._change = new BehaviorSubject(0);
    this._options = new BehaviorSubject({
      date: Date.now(),
      search: "",
      zones: []
    });
    this._loading = new BehaviorSubject([]);
    this.levels = combineLatest([
      this._org.active_region,
      this._org.active_building
    ]).pipe(filter(([_, bld]) => !!bld), map(([_, bld]) => {
      const levels = this._org.levels.filter((_2) => _2.tags.includes("parking"));
      if (this._settings.get("app.use_region")) {
        const blds = this._org.buildingsForRegion();
        const bld_ids = blds.map((bld2) => bld2.id);
        const list = levels.filter((lvl) => bld_ids.includes(lvl.parent_id));
        list.map((lvl) => __spreadProps(__spreadValues({}, lvl), {
          display_name: `${blds.find((_2) => _2.id === lvl.parent_id)?.display_name} - ${lvl.display_name}`
        }));
        return list;
      }
      return levels.filter((lvl) => lvl.parent_id === bld.id);
    }));
    this.spaces = combineLatest([
      this.levels,
      this._options,
      this._change
    ]).pipe(switchMap(([levels, options]) => {
      if (!(options.zones[0] || levels[0]?.id)) {
        return of([]);
      }
      this._loading.next([...this._loading.getValue(), "spaces"]);
      return Xu(options.zones[0] || levels[0]?.id, "parking-spaces").pipe(map(({ details }) => (details instanceof Array ? details : []).map((space) => __spreadProps(__spreadValues({}, space), {
        zone_id: options.zones[0] || levels[0]?.id
      }))));
    }), tap(() => this._loading.next(this._loading.getValue().filter((_) => _ !== "spaces"))), shareReplay(1));
    this.users = combineLatest([
      this._org.active_building,
      this._change
    ]).pipe(filter(([bld]) => !!bld?.id), switchMap(([bld]) => {
      this._loading.next([...this._loading.getValue(), "users"]);
      return Xu(bld.id, "parking-users");
    }), map((metadata) => metadata.details instanceof Array ? metadata.details : []), tap(() => this._loading.next(this._loading.getValue().filter((_) => _ !== "users"))), shareReplay(1));
    this.bookings = combineLatest([
      this._org.active_building,
      this._options,
      this.users,
      this._poll,
      this._change
    ]).pipe(debounceTime(500), switchMap(([bld, options, users]) => {
      this._loading.next([...this._loading.getValue(), "[BOOKINGS]"]);
      return queryBookings({
        period_start: getUnixTime(startOfDay(options.date)),
        period_end: getUnixTime(endOfDay(options.date)),
        type: "parking",
        zones: options.zones?.length ? options.zones.join(",") : (this._settings.get("app.use_region") ? this._org.region?.id : "") || bld?.id,
        include_checked_out: true
      }).pipe(map((list) => {
        for (const booking of list) {
          const user = users.find((_) => _.email.toLowerCase() === booking.user_email.toLowerCase());
          if (user) {
            booking.extension_data.plate_number = booking.extension_data.plate_number || user.plate_number;
          }
        }
        return list;
      }));
    }), tap(() => this._loading.next(this._loading.getValue().filter((_) => _ !== "[BOOKINGS]"))), shareReplay(1));
    this.options = this._options.asObservable();
    this.loading = this._loading.asObservable();
  }
  setOptions(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), options));
  }
  startPolling(delay = 2 * 60 * 1e3) {
    this._poll.next(Date.now());
    this.interval("poll", () => this._poll.next(Date.now()), delay);
    return () => this.stopPolling();
  }
  stopPolling() {
    this.clearInterval("poll");
  }
  /** Add or update a space in the available list */
  async editSpace(space = {}) {
    const ref = this._dialog.open(ParkingSpaceModalComponent, {
      data: space
    });
    const state = await Promise.race([
      ref.afterClosed().toPromise(),
      ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise()
    ]);
    if (state?.reason !== "done")
      return;
    const zone = this._options.getValue().zones[0] || space.zone_id || this._org.levelsForBuilding()[0]?.id;
    const new_space = __spreadProps(__spreadValues({}, state.metadata), {
      zone,
      id: state.metadata.id || `parking-${zone}.${randomInt(999999)}`
    });
    const spaces = await nextValueFrom(this.spaces);
    const idx = spaces.findIndex((_) => _.id === space.id);
    let recreate = false;
    if (space.assigned_to && (space.assigned_to !== new_space.assigned_to || space.id !== new_space.id)) {
      this._clearAssignedBooking(space);
      recreate = true;
    }
    if ((space.assigned_to !== new_space.assigned_to || recreate) && new_space.assigned_to) {
      const users = await nextValueFrom(this.users);
      const user = users.find((_) => _.email === new_space.assigned_to);
      const user_details = await USER_PIPE.transform(new_space.assigned_to);
      const date = set(Date.now(), { hours: 1, minutes: 0, seconds: 0 });
      await saveBooking(new Booking({
        user_id: user_details.id || new_space.assigned_to,
        user_email: new_space.assigned_to,
        user_name: user_details.name,
        booking_start: getUnixTime(date),
        booking_end: getUnixTime(addHours(date, 22)),
        type: "parking",
        booking_type: "parking",
        asset_id: new_space.id,
        asset_name: new_space.name,
        recurrence_type: "daily",
        recurrence_days: RecurrenceDays.MONDAY | RecurrenceDays.TUESDAY | RecurrenceDays.WEDNESDAY | RecurrenceDays.THURSDAY | RecurrenceDays.FRIDAY,
        zones: unique([
          this._org.organisation.id,
          this._org.region?.id,
          this._org.building?.id,
          new_space.zone_id || new_space.zone?.id || new_space.zone
        ]),
        extension_data: {
          asset_name: new_space.name,
          is_assigned: true,
          plate_number: user?.plate_number || ""
        }
      })).toPromise();
    }
    if (idx >= 0)
      spaces[idx] = new_space;
    else
      spaces.push(new_space);
    const new_space_list = spaces;
    await ec(zone, {
      name: "parking-spaces",
      details: new_space_list,
      description: "List of available parking spaces"
    }).toPromise();
    this._change.next(Date.now());
    ref.close();
  }
  /** Remove the given space from the available list */
  async removeSpace(space) {
    const state = await openConfirmModal({
      title: "Remove Parking Space",
      content: `Are you sure you wish to remove the parking space "${space.name}"?`,
      icon: { content: "delete" }
    }, this._dialog);
    if (state?.reason !== "done")
      return;
    state.loading("Removing parking space...");
    const zone = this._options.getValue().zones[0];
    const spaces = await nextValueFrom(this.spaces);
    this._clearAssignedBooking(space);
    await ec(zone, {
      name: "parking-spaces",
      details: spaces.filter((_) => _.id !== space.id),
      description: "List of available parking spaces"
    }).toPromise();
    state.close();
  }
  /** Add or update a space in the available list */
  async editUser(user) {
    const ref = this._dialog.open(ParkingUserModalComponent, {
      data: user
    });
    const state = await Promise.race([
      ref.afterClosed().toPromise(),
      ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise()
    ]);
    if (state?.reason !== "done")
      return;
    const zone = this._org.building.id;
    const new_user = __spreadProps(__spreadValues({}, state.metadata), {
      id: state.metadata.id || `P:USR-${randomInt(999999)}`
    });
    if ("user" in new_user)
      delete new_user.user;
    const users = await nextValueFrom(this.users);
    const idx = users.findIndex((_) => _.id === new_user.id);
    if (idx >= 0)
      users[idx] = new_user;
    else
      users.push(new_user);
    await ec(zone, {
      name: "parking-users",
      details: users,
      description: "List of available parking users"
    }).toPromise();
    this._change.next(Date.now());
    ref.close();
  }
  /** Remove the given space from the available list */
  async removeUser(user) {
    const state = await openConfirmModal({
      title: i18n("APP.CONCIERGE.PARKING_USER_REMOVE"),
      content: i18n("APP.CONCIERGE.PARKING_USER_REMOVE_MSG", {
        name: user.name
      }),
      icon: { content: "delete" }
    }, this._dialog);
    if (state?.reason !== "done")
      return;
    state.loading(i18n("APP.CONCIERGE.PARKING_USER_REMOVE_LOADING"));
    const zone = this._org.building.id;
    const users = await nextValueFrom(this.users);
    await ec(zone, {
      name: "parking-users",
      details: users.filter((_) => _.id !== user.id),
      description: "List of available parking users"
    }).toPromise().catch((e) => {
      notifyError(i18n("APP.CONCIERGE.PARKING_USER_REMOVE_ERROR", {
        error: e
      }));
      throw e;
    });
    state.close();
    notifySuccess(i18n("APP.CONCIERGE.PARKING_USER_REMOVE_SUCCESS"));
    this._change.next(Date.now());
  }
  editReservation(reservation, { parent_id, user, link_id, date, space, allow_time_changes, external_user } = {}) {
    return new Promise(async (resolve) => {
      const levels = await nextValueFrom(this.levels);
      const spaces = await nextValueFrom(this.spaces);
      if (!space && reservation?.asset_id) {
        space = spaces.find((_) => _.id === reservation.asset_id);
      }
      const ref = this._dialog.open(ParkingBookingModalComponent, {
        data: {
          parent_id,
          booking: reservation,
          user,
          link_id,
          date,
          level: levels[0],
          space,
          allow_time_changes,
          external_user
        }
      });
      ref.afterClosed().subscribe((id) => {
        resolve(id);
        this._poll.next(Date.now());
      });
    });
  }
  async setBookingCheckinState(booking, state = true) {
    const promise = (booking.instance ? checkinBookingInstance(booking.id, booking.instance, state) : checkinBooking(booking.id, state)).toPromise().catch((_) => ({ state: "failed", error: _ }));
    const success = await promise;
    success.state === "failed" ? notifyError(i18n(state ? "APP.CONCIERGE.PARKING_CHECKIN_ERROR" : "APP.CONCIERGE.PARKING_CHECKOUT_ERROR", { error: success.error })) : notifySuccess(i18n(state ? "APP.CONCIERGE.PARKING_CHECKIN_SUCCESS" : "APP.CONCIERGE.PARKING_CHECKOUT_SUCCESS"));
    if (success.state !== "failed")
      this._change.next(Date.now());
  }
  async approveBooking(booking) {
    const promise = (booking.instance ? approveBookingInstance(booking.id, booking.instance) : approveBooking(booking.id)).toPromise().catch((_) => ({ state: "failed", error: _ }));
    const success = await promise;
    success.state === "failed" ? notifyError(i18n("APP.CONCIERGE.PARKING_APPROVE_ERROR", {
      error: success.error
    })) : notifySuccess(i18n("APP.CONCIERGE.PARKING_APPROVE_SUCCESS"));
    if (success.state !== "failed")
      this._change.next(Date.now());
  }
  async rejectBooking(booking) {
    const promise = (booking.instance ? rejectBookingInstance(booking.id, booking.instance) : rejectBooking(booking.id)).toPromise().catch((_) => ({ state: "failed", error: _ }));
    const success = await promise;
    success.state === "failed" ? notifyError(i18n("APP.CONCIERGE.PARKING_DECLINE_ERROR", {
      error: success.error
    })) : notifySuccess(i18n("APP.CONCIERGE.PARKING_DECLINE_SUCCESS"));
    if (success.state !== "failed")
      this._change.next(Date.now());
  }
  async _clearAssignedBooking(space) {
    const booking_list = await queryBookings({
      period_start: getUnixTime(startOfDay(Date.now())),
      period_end: getUnixTime(endOfDay(Date.now())),
      type: "parking",
      email: space.assigned_to,
      include_checked_out: true
    }).toPromise();
    const filtered = booking_list.filter((_) => _.asset_id === space.id);
    await Promise.all(filtered.map((_) => removeBooking(_.id).toPromise()));
  }
};
_ParkingStateService.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ParkingStateService_BaseFactory;
  return function ParkingStateService_Factory(__ngFactoryType__) {
    return (\u0275ParkingStateService_BaseFactory || (\u0275ParkingStateService_BaseFactory = \u0275\u0275getInheritedFactory(_ParkingStateService)))(__ngFactoryType__ || _ParkingStateService);
  };
})();
_ParkingStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ParkingStateService, factory: _ParkingStateService.\u0275fac, providedIn: "root" });
var ParkingStateService = _ParkingStateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  ParkingBookingModalComponent,
  ParkingStateService
};
//# sourceMappingURL=chunk-6PB7XUL2.js.map
