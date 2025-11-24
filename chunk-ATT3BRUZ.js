import {
  BookingFormService,
  ParkingSpaceListFieldComponent
} from "./chunk-JEBZF7PS.js";
import {
  AsyncHandler,
  BehaviorSubject,
  Booking,
  DateFieldComponent,
  DefaultValueAccessor,
  DurationFieldComponent,
  EventEmitter,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  IconComponent,
  MAT_DIALOG_DATA,
  MatCheckbox,
  MatDialog,
  MatDialogClose,
  MatDialogRef,
  MatError,
  MatFormField,
  MatInput,
  MatProgressSpinner,
  MatRipple,
  MatTooltip,
  NgControlStatus,
  NgControlStatusGroup,
  NgIf,
  NgModel,
  OrganisationService,
  RecurrenceDays,
  SettingsService,
  TimeFieldComponent,
  UserSearchFieldComponent,
  Validators,
  __async,
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
  endOfDay,
  filter,
  first,
  format,
  getInvalidFields,
  getUnixTime,
  map,
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
  shareReplay,
  showMetadata,
  showStaff,
  startOfDay,
  switchMap,
  take,
  tap,
  unique,
  updateMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵi18n,
  ɵɵi18nEnd,
  ɵɵi18nStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-L3HTKRSL.js";

// apps/concierge/src/app/parking/parking-space-modal.component.ts
function ParkingSpaceModalComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 6)(1, "app-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ParkingSpaceModalComponent_main_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 7)(1, "label", 8);
    \u0275\u0275text(2, "Parking Space Name/Bay Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 9);
    \u0275\u0275element(4, "input", 10);
    \u0275\u0275elementStart(5, "mat-error");
    \u0275\u0275text(6, "A name is required for parking spaces");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "label", 11);
    \u0275\u0275text(8, "Map ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-form-field", 9);
    \u0275\u0275element(10, "input", 12);
    \u0275\u0275elementStart(11, "mat-error");
    \u0275\u0275text(12, " A map ID is required for parking spaces ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "label", 13);
    \u0275\u0275text(14, "Assigned User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 14);
    \u0275\u0275element(16, "a-user-search-field", 15);
    \u0275\u0275elementStart(17, "button", 16);
    \u0275\u0275listener("click", function ParkingSpaceModalComponent_main_5_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ assigned_user: null, assigned_to: null, assigned_name: null }));
    });
    \u0275\u0275elementStart(18, "app-icon", 17);
    \u0275\u0275text(19, " person_cancel ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "label", 18);
    \u0275\u0275text(21, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "mat-form-field", 9);
    \u0275\u0275element(23, "textarea", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 20)(25, "button", 21);
    \u0275\u0275text(26, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 22);
    \u0275\u0275listener("click", function ParkingSpaceModalComponent_main_5_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.postForm());
    });
    \u0275\u0275text(28, " Save ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
  }
}
function ParkingSpaceModalComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 23);
    \u0275\u0275element(1, "mat-spinner", 24);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Saving parking space details...");
    \u0275\u0275elementEnd()();
  }
}
var _ParkingSpaceModalComponent = class _ParkingSpaceModalComponent {
  get id() {
    return this._data?.id || "";
  }
  constructor(_data, _dialog_ref) {
    this._data = _data;
    this._dialog_ref = _dialog_ref;
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
    if (_data)
      this.form.patchValue(_data);
  }
  ngOnInit() {
    return __async(this, null, function* () {
      if (this._data.assigned_to) {
        const user = yield showStaff(this._data.assigned_to).toPromise();
        if (user) {
          this.form.patchValue({
            assigned_user: user,
            assigned_to: user.email,
            assigned_name: user.name
          });
        }
      }
    });
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
  return new (__ngFactoryType__ || _ParkingSpaceModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef));
};
_ParkingSpaceModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingSpaceModalComponent, selectors: [["parking-space-modal"]], outputs: { event: "event" }, decls: 8, vars: 4, consts: [["load_state", ""], [1, "w-[28rem]"], [1, "flex", "items-center", "justify-between", "px-2", "w-full"], [1, "px-2"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "p-4 flex flex-col", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "p-4", "flex", "flex-col", 3, "formGroup"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "name", "name", "formControlName", "name"], ["for", "map-id"], ["matInput", "", "name", "map-id", "formControlName", "map_id"], ["for", "user"], [1, "flex", "items-center", "space-x-2", "mb-4"], ["name", "user", "formControlName", "assigned_user", 1, "flex-1"], ["icon", "", "matRipple", "", "matTooltip", "Clear Assigned User", 1, "h-12", "w-12", "min-w-12", "rounded", "bg-secondary", "text-secondary-content", 3, "click"], ["className", "material-symbols-outlined"], ["for", "notes"], ["matInput", "", "name", "notes", "formControlName", "notes"], [1, "flex", "items-center", "justify-center", "space-x-2"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "w-32", "inverse"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "p-8", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], ["diameter", "32"]], template: function ParkingSpaceModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "h2", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ParkingSpaceModalComponent_button_4_Template, 3, 0, "button", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ParkingSpaceModalComponent_main_5_Template, 29, 1, "main", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ParkingSpaceModalComponent_ng_template_6_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const load_state_r3 = \u0275\u0275reference(7);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx.id ? "Edit" : "New", " Parking Space");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r3);
  }
}, dependencies: [NgIf, MatFormField, MatError, MatInput, MatTooltip, MatProgressSpinner, MatDialogClose, MatRipple, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, UserSearchFieldComponent, IconComponent] });
var ParkingSpaceModalComponent = _ParkingSpaceModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingSpaceModalComponent, { className: "ParkingSpaceModalComponent", filePath: "apps/concierge/src/app/parking/parking-space-modal.component.ts", lineNumber: 98 });
})();

// apps/concierge/src/app/parking/parking-user-modal.component.ts
function ParkingUserModalComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 7)(1, "app-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ParkingUserModalComponent_main_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 8)(1, "div", 9);
    \u0275\u0275element(2, "a-user-search-field", 10);
    \u0275\u0275elementStart(3, "button", 11);
    \u0275\u0275listener("click", function ParkingUserModalComponent_main_5_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ user: null, email: null, name: null, phone: null }));
    });
    \u0275\u0275elementStart(4, "app-icon", 12);
    \u0275\u0275text(5, " person_cancel ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "label", 13);
    \u0275\u0275text(7, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-form-field", 14);
    \u0275\u0275element(9, "input", 15);
    \u0275\u0275elementStart(10, "mat-error");
    \u0275\u0275text(11, "A name is required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "label", 16);
    \u0275\u0275text(13, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-form-field", 14);
    \u0275\u0275element(15, "input", 17);
    \u0275\u0275elementStart(16, "mat-error");
    \u0275\u0275text(17, "An email is required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 18)(19, "div", 19)(20, "label", 20);
    \u0275\u0275text(21, "Car Number Plate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "mat-form-field", 21);
    \u0275\u0275element(23, "input", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 19)(25, "label", 23);
    \u0275\u0275text(26, "Car Colour");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "mat-form-field", 21);
    \u0275\u0275element(28, "input", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "label", 25);
    \u0275\u0275text(30, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "mat-form-field", 14);
    \u0275\u0275element(32, "textarea", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 27)(34, "mat-checkbox", 28);
    \u0275\u0275text(35, " Deny User Parking Access ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
  }
}
function ParkingUserModalComponent_footer_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 29)(1, "button", 30);
    \u0275\u0275text(2, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 31);
    \u0275\u0275listener("click", function ParkingUserModalComponent_footer_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.postForm());
    });
    \u0275\u0275text(4, " Save ");
    \u0275\u0275elementEnd()();
  }
}
function ParkingUserModalComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 32);
    \u0275\u0275element(1, "mat-spinner", 33);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Saving parking user details...");
    \u0275\u0275elementEnd()();
  }
}
var _ParkingUserModalComponent = class _ParkingUserModalComponent extends AsyncHandler {
  get id() {
    return this._data?.id || "";
  }
  constructor(_data, _dialog_ref) {
    super();
    this._data = _data;
    this._dialog_ref = _dialog_ref;
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
    if (_data)
      this.form.patchValue(_data);
  }
  ngOnInit() {
    this.subscription("user", this.form.valueChanges.subscribe((value) => {
      if (value.user) {
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
  return new (__ngFactoryType__ || _ParkingUserModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef));
};
_ParkingUserModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingUserModalComponent, selectors: [["parking-user-modal"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 5, consts: [["load_state", ""], [1, "w-[28rem]"], [1, "flex", "items-center", "justify-between", "px-2", "w-full"], [1, "px-2"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "p-4 flex flex-col max-h-[65vh] overflow-auto", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["class", "flex items-center justify-end space-x-2 p-2 border-t border-base-200", 4, "ngIf"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "p-4", "flex", "flex-col", "max-h-[65vh]", "overflow-auto", 3, "formGroup"], [1, "flex", "items-center", "space-x-2", "mb-4"], ["name", "user", "formControlName", "user", 1, "flex-1"], ["icon", "", "matRipple", "", "matTooltip", "Clear Selected User", 1, "h-12", "w-12", "min-w-12", "rounded", "bg-secondary", "text-secondary-content", 3, "click"], ["className", "material-symbols-outlined"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "name", "name", "formControlName", "name", "placeholder", "Name"], ["for", "email"], ["matInput", "", "name", "email", "formControlName", "email", "placeholder", "Email"], [1, "flex", "items-center", "space-x-2"], [1, "flex-1", "w-1/3"], ["for", "plate-number"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "plate-number", "formControlName", "plate_number", "placeholder", "Car Plate Number"], ["for", "car-color"], ["matInput", "", "name", "car-color", "formControlName", "car_color", "placeholder", "Car Colour"], ["for", "notes"], ["matInput", "", "name", "notes", "formControlName", "notes", "placeholder", "User's Notes"], [1, "px-2", "pb-2"], ["name", "deny", "formControlName", "deny"], [1, "flex", "items-center", "justify-end", "space-x-2", "p-2", "border-t", "border-base-200"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "w-32", "inverse"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "p-8", "flex", "flex-col", "items-center", "justify-center", "user-y-2"], ["diameter", "32"]], template: function ParkingUserModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "h2", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ParkingUserModalComponent_button_4_Template, 3, 0, "button", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ParkingUserModalComponent_main_5_Template, 36, 1, "main", 5)(6, ParkingUserModalComponent_footer_6_Template, 5, 0, "footer", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ParkingUserModalComponent_ng_template_7_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const load_state_r4 = \u0275\u0275reference(8);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx.id ? "Edit" : "New", " Parking User");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
  }
}, dependencies: [NgIf, MatFormField, MatError, MatInput, MatCheckbox, MatTooltip, MatProgressSpinner, MatDialogClose, MatRipple, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, UserSearchFieldComponent, IconComponent] });
var ParkingUserModalComponent = _ParkingUserModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingUserModalComponent, { className: "ParkingUserModalComponent", filePath: "apps/concierge/src/app/parking/parking-user-modal.component.ts", lineNumber: 130 });
})();

// apps/concierge/src/app/parking/parking-booking-modal.component.ts
var _c0 = () => ({ standalone: true });
function ParkingBookingModalComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 10)(1, "app-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ParkingBookingModalComponent_main_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "a-user-search-field", 31);
    \u0275\u0275elementEnd();
  }
}
function ParkingBookingModalComponent_main_5_mat_checkbox_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 32);
    \u0275\u0275i18n(1, 1);
    \u0275\u0275elementEnd();
  }
}
function ParkingBookingModalComponent_main_5_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 33)(2, "label", 34);
    \u0275\u0275i18nStart(3, 2);
    \u0275\u0275element(4, "span");
    \u0275\u0275i18nEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a-time-field", 35);
    \u0275\u0275listener("ngModelChange", function ParkingBookingModalComponent_main_5_div_22_Template_a_time_field_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 36)(7, "label", 37);
    \u0275\u0275i18nStart(8, 3);
    \u0275\u0275element(9, "span");
    \u0275\u0275i18nEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "a-duration-field", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r1.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(7, _c0))("disabled", ctx_r1.form.controls.date.disabled)("use_24hr", ctx_r1.use_24hr);
    \u0275\u0275advance(5);
    \u0275\u0275property("time", ctx_r1.form == null ? null : (tmp_7_0 = ctx_r1.form.getRawValue()) == null ? null : tmp_7_0.date)("max", ctx_r1.max_duration)("use_24hr", ctx_r1.use_24hr);
  }
}
function ParkingBookingModalComponent_main_5_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ParkingBookingModalComponent_main_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 11);
    \u0275\u0275template(1, ParkingBookingModalComponent_main_5_div_1_Template, 2, 0, "div", 12);
    \u0275\u0275elementStart(2, "div", 13)(3, "div", 14)(4, "label", 15);
    \u0275\u0275text(5, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 16);
    \u0275\u0275element(7, "input", 17);
    \u0275\u0275elementStart(8, "mat-error");
    \u0275\u0275text(9, "A name is required");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 14)(11, "label", 18);
    \u0275\u0275text(12, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-form-field", 16);
    \u0275\u0275element(14, "input", 19);
    \u0275\u0275elementStart(15, "mat-error");
    \u0275\u0275text(16, "An email is required");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div", 20)(18, "label", 21);
    \u0275\u0275text(19, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "a-date-field", 22);
    \u0275\u0275template(21, ParkingBookingModalComponent_main_5_mat_checkbox_21_Template, 2, 0, "mat-checkbox", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, ParkingBookingModalComponent_main_5_div_22_Template, 11, 8, "div", 24);
    \u0275\u0275elementStart(23, "label", 25);
    \u0275\u0275text(24, "Parking Space");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "parking-space-list-field", 26);
    \u0275\u0275elementStart(26, "label", 27);
    \u0275\u0275text(27, " Plate Number");
    \u0275\u0275template(28, ParkingBookingModalComponent_main_5_span_28_Template, 2, 0, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-form-field", 16);
    \u0275\u0275element(30, "input", 29);
    \u0275\u0275elementStart(31, "mat-error");
    \u0275\u0275text(32, "A plate number is required");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.user);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngIf", ctx_r1.allow_all_day && !ctx_r1.form.controls.duration.disabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.form.value.all_day);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.user);
  }
}
function ParkingBookingModalComponent_footer_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 39)(1, "button", 40);
    \u0275\u0275text(2, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 41);
    \u0275\u0275listener("click", function ParkingBookingModalComponent_footer_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.postForm());
    });
    \u0275\u0275text(4, " Save ");
    \u0275\u0275elementEnd()();
  }
}
function ParkingBookingModalComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 42);
    \u0275\u0275element(1, "mat-spinner", 43);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Saving parking reservation...");
    \u0275\u0275elementEnd()();
  }
}
var _ParkingBookingModalComponent = class _ParkingBookingModalComponent extends AsyncHandler {
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
  constructor(_data, _booking_form, _dialog_ref, _settings) {
    super();
    this._data = _data;
    this._booking_form = _booking_form;
    this._dialog_ref = _dialog_ref;
    this._settings = _settings;
    this.loading = false;
    this.user = this._data.user;
    this.date = this._data.date;
    this.allow_time_changes = this._data.allow_time_changes;
    this.form = this._booking_form.form;
  }
  ngOnInit() {
    this._booking_form.newForm(this._data.booking);
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
      this.timeout("init_date", () => {
        this.form.patchValue({ date: this._data.date });
        if (!this._data.allow_time_changes) {
          this.form.get("date").disable();
          this.form.get("duration").disable();
        }
      }, 300);
      if (!this._data.allow_time_changes) {
        this.subscription("form_change", this.form.valueChanges.subscribe((v) => {
          this.timeout("disable_date", () => {
            this.form.get("date").disable({ emitEvent: false });
            this.form.get("duration").disable({ emitEvent: false });
          }, 50);
        }));
      }
    }
  }
  postForm() {
    return __async(this, null, function* () {
      if (!this.form.value.all_day && this.form.value.duration > this.max_duration) {
        this.form.patchValue({ duration: 30 });
      }
      this.form.markAllAsTouched();
      this.form.updateValueAndValidity();
      if (this.form.invalid) {
        return notifyError(`Some fields are invalid. [${getInvalidFields(this.form).join(", ")}]`);
      }
      this.loading = true;
      const id = this.form.value.id;
      this.form.patchValue({ user_id: void 0, booking_type: "parking" });
      const result = yield this._booking_form.postForm().catch((e) => {
        this.loading = false;
        this.form.controls.plate_number.setValidators([]);
        notifyError(e);
        throw e;
      });
      this.form.controls.plate_number.setValidators([]);
      notifySuccess(`Successfully ${id ? "updated" : "created"} parking reservation`);
      this.form.get("date").enable();
      this.form.get("duration").enable();
      this.form.controls.user.disable();
      this.form.controls.user_name.disable();
      this.form.controls.user_email.disable();
      this._dialog_ref.close(result.id);
    });
  }
};
_ParkingBookingModalComponent.\u0275fac = function ParkingBookingModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ParkingBookingModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(SettingsService));
};
_ParkingBookingModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingBookingModalComponent, selectors: [["parking-booking-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 5, consts: () => {
  let i18n_0;
  if (false) {
    const MSG_EXTERNAL_835486935962207481$$APPS_CONCIERGE_SRC_APP_PARKING_PARKING_BOOKING_MODAL_COMPONENT_TS_0 = goog.getMsg(" All Day ");
    i18n_0 = MSG_EXTERNAL_835486935962207481$$APPS_CONCIERGE_SRC_APP_PARKING_PARKING_BOOKING_MODAL_COMPONENT_TS_0;
  } else {
    i18n_0 = $localize`:␟d7f43e20f3a729fa3de32bc7a1f709ccd722eae5␟835486935962207481: All Day `;
  }
  let i18n_1;
  if (false) {
    const MSG_EXTERNAL_3039786638368843634$$APPS_CONCIERGE_SRC_APP_PARKING_PARKING_BOOKING_MODAL_COMPONENT_TS_1 = goog.getMsg("Start Time{$startTagSpan}*{$closeTagSpan}", { "closeTagSpan": "\uFFFD/#4\uFFFD", "startTagSpan": "\uFFFD#4\uFFFD" }, { original_code: { "closeTagSpan": "</span>", "startTagSpan": "<span>" } });
    i18n_1 = MSG_EXTERNAL_3039786638368843634$$APPS_CONCIERGE_SRC_APP_PARKING_PARKING_BOOKING_MODAL_COMPONENT_TS_1;
  } else {
    i18n_1 = $localize`:␟34a7595cdc15925514038224946986bfd90dc0ed␟3039786638368843634:Start Time${"\uFFFD#4\uFFFD"}:START_TAG_SPAN:*${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_SPAN:`;
  }
  let i18n_2;
  if (false) {
    const MSG_EXTERNAL_5960185837188220843$$APPS_CONCIERGE_SRC_APP_PARKING_PARKING_BOOKING_MODAL_COMPONENT_TS_2 = goog.getMsg("End Time{$startTagSpan}*{$closeTagSpan}", { "closeTagSpan": "\uFFFD/#9\uFFFD", "startTagSpan": "\uFFFD#9\uFFFD" }, { original_code: { "closeTagSpan": "</span>", "startTagSpan": "<span>" } });
    i18n_2 = MSG_EXTERNAL_5960185837188220843$$APPS_CONCIERGE_SRC_APP_PARKING_PARKING_BOOKING_MODAL_COMPONENT_TS_2;
  } else {
    i18n_2 = $localize`:␟85d5c3a89bab9a7475a7db095089e161586cb7a1␟5960185837188220843:End Time${"\uFFFD#9\uFFFD"}:START_TAG_SPAN:*${"\uFFFD/#9\uFFFD"}:CLOSE_TAG_SPAN:`;
  }
  return [["load_state", ""], i18n_0, i18n_1, i18n_2, [1, "w-[32rem]"], [1, "flex", "items-center", "justify-between", "px-2", "w-full"], [1, "px-2"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "p-4 flex flex-col max-h-[65vh] overflow-auto", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["class", "flex items-center justify-end space-x-2 p-2 border-t border-base-200", 4, "ngIf"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "p-4", "flex", "flex-col", "max-h-[65vh]", "overflow-auto", 3, "formGroup"], ["class", "flex items-center space-x-2 mb-4", 4, "ngIf"], [1, "flex", "items-center", "space-x-2"], [1, "flex-1"], ["for", "user-name"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "user-name", "formControlName", "user_name", "placeholder", "Name"], ["for", "email"], ["matInput", "", "name", "email", "formControlName", "user_email", "placeholder", "Email"], [1, "relative"], ["for", "date"], ["formControlName", "date"], ["formControlName", "all_day", "class", "absolute -top-2 right-0", 4, "ngIf"], ["class", "flex items-center space-x-2", 4, "ngIf"], ["for", "parking-space"], ["name", "parking-space", "formControlName", "resources", 1, "mb-2"], ["for", "plate-number"], [4, "ngIf"], ["matInput", "", "name", "plate-number", "formControlName", "plate_number", "placeholder", "Plate Number"], [1, "flex", "items-center", "space-x-2", "mb-4"], ["name", "user", "formControlName", "user", 1, "flex-1"], ["formControlName", "all_day", 1, "absolute", "-top-2", "right-0"], [1, "flex-1", "w-1/3"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "disabled", "use_24hr"], [1, "flex-1", "w-1/3", "relative"], ["for", "end-time"], ["name", "end-time", "formControlName", "duration", 3, "time", "max", "use_24hr"], [1, "flex", "items-center", "justify-end", "space-x-2", "p-2", "border-t", "border-base-200"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "w-32", "inverse"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "p-8", "flex", "flex-col", "items-center", "justify-center", "user-y-2"], ["diameter", "32"]];
}, template: function ParkingBookingModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "header", 5)(2, "h2", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ParkingBookingModalComponent_button_4_Template, 3, 0, "button", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ParkingBookingModalComponent_main_5_Template, 33, 5, "main", 8)(6, ParkingBookingModalComponent_footer_6_Template, 5, 0, "footer", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ParkingBookingModalComponent_ng_template_7_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const load_state_r4 = \u0275\u0275reference(8);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx.id ? "Edit" : "New", " Parking Reservation ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
  }
}, dependencies: [NgIf, MatFormField, MatError, MatInput, MatCheckbox, MatProgressSpinner, MatDialogClose, MatRipple, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, FormGroupDirective, FormControlName, DateFieldComponent, DurationFieldComponent, TimeFieldComponent, UserSearchFieldComponent, IconComponent, ParkingSpaceListFieldComponent] });
var ParkingBookingModalComponent = _ParkingBookingModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingBookingModalComponent, { className: "ParkingBookingModalComponent", filePath: "apps/concierge/src/app/parking/parking-booking-modal.component.ts", lineNumber: 154 });
})();

// apps/concierge/src/app/parking/parking-state.service.ts
var _ParkingStateService = class _ParkingStateService extends AsyncHandler {
  constructor(_org, _dialog, _settings) {
    super();
    this._org = _org;
    this._dialog = _dialog;
    this._settings = _settings;
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
    ]).pipe(map(([_, bld]) => {
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
      return showMetadata(options.zones[0] || levels[0]?.id, "parking-spaces").pipe(map(({ details }) => (details instanceof Array ? details : []).map((space) => __spreadProps(__spreadValues({}, space), {
        zone_id: options.zones[0] || levels[0]?.id
      }))));
    }), tap(() => this._loading.next(this._loading.getValue().filter((_) => _ !== "spaces"))), shareReplay(1));
    this.users = combineLatest([
      this._org.active_building,
      this._change
    ]).pipe(filter(([bld]) => !!bld?.id), switchMap(([bld]) => {
      this._loading.next([...this._loading.getValue(), "users"]);
      return showMetadata(bld.id, "parking-users");
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
  editSpace() {
    return __async(this, arguments, function* (space = {}) {
      const ref = this._dialog.open(ParkingSpaceModalComponent, {
        data: space
      });
      const state = yield Promise.race([
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
      const spaces = yield this.spaces.pipe(take(1)).toPromise();
      const idx = spaces.findIndex((_) => _.id === new_space.id);
      if (space.assigned_to && space.assigned_to !== new_space.assigned_to) {
        this._clearAssignedBooking(space);
      }
      if (space.assigned_to !== new_space.assigned_to && new_space.assigned_to) {
        const date = set(Date.now(), { hours: 4, minutes: 0, seconds: 0 });
        yield saveBooking(new Booking({
          user_id: new_space.assigned_to,
          user_email: new_space.assigned_to,
          booking_start: getUnixTime(date),
          booking_end: getUnixTime(addHours(date, 16)),
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
            asset_name: new_space.name
          }
        })).toPromise();
      }
      if (idx >= 0)
        spaces[idx] = new_space;
      else
        spaces.push(new_space);
      const new_space_list = spaces;
      yield updateMetadata(zone, {
        name: "parking-spaces",
        details: new_space_list,
        description: "List of available parking spaces"
      }).toPromise();
      this._change.next(Date.now());
      ref.close();
    });
  }
  /** Remove the given space from the available list */
  removeSpace(space) {
    return __async(this, null, function* () {
      const state = yield openConfirmModal({
        title: "Remove Parking Space",
        content: `Are you sure you wish to remove the parking space "${space.name}"?`,
        icon: { content: "delete" }
      }, this._dialog);
      if (state?.reason !== "done")
        return;
      state.loading("Removing parking space...");
      const zone = this._options.getValue().zones[0];
      const spaces = yield this.spaces.pipe(take(1)).toPromise();
      this._clearAssignedBooking(space);
      yield updateMetadata(zone, {
        name: "parking-spaces",
        details: spaces.filter((_) => _.id !== space.id),
        description: "List of available parking spaces"
      }).toPromise();
      state.close();
    });
  }
  /** Add or update a space in the available list */
  editUser(user) {
    return __async(this, null, function* () {
      const ref = this._dialog.open(ParkingUserModalComponent, {
        data: user
      });
      const state = yield Promise.race([
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
      const users = yield this.users.pipe(take(1)).toPromise();
      const idx = users.findIndex((_) => _.id === new_user.id);
      if (idx >= 0)
        users[idx] = new_user;
      else
        users.push(new_user);
      yield updateMetadata(zone, {
        name: "parking-users",
        details: users,
        description: "List of available parking users"
      }).toPromise();
      this._change.next(Date.now());
      ref.close();
    });
  }
  /** Remove the given space from the available list */
  removeUser(user) {
    return __async(this, null, function* () {
      const state = yield openConfirmModal({
        title: "Remove Parking User",
        content: `Are you sure you wish to remove the parking user "${user.name}"?`,
        icon: { content: "delete" }
      }, this._dialog);
      if (state?.reason !== "done")
        return;
      state.loading("Removing parking user...");
      const zone = this._org.building.id;
      const users = yield this.users.pipe(take(1)).toPromise();
      yield updateMetadata(zone, {
        name: "parking-users",
        details: users.filter((_) => _.id !== user.id),
        description: "List of available parking users"
      }).toPromise();
      state.close();
      this._change.next(Date.now());
    });
  }
  editReservation(reservation, { parent_id, user, link_id, date, space, allow_time_changes, external_user } = {}) {
    return new Promise((resolve) => __async(this, null, function* () {
      const levels = yield this.levels.pipe(take(1)).toPromise();
      const spaces = yield this.spaces.pipe(take(1)).toPromise();
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
    }));
  }
  setBookingCheckinState(booking, state = true) {
    return __async(this, null, function* () {
      const promise = (booking.instance ? checkinBookingInstance(booking.id, booking.instance, state) : checkinBooking(booking.id, state)).toPromise().catch((_) => "failed");
      const success = yield promise;
      success === "failed" ? notifyError("Error setting checkin state of parking booking") : notifySuccess(`${state ? "Checked in to" : "Checked out of"} parking reservation for ${booking.user_name} on ${format(booking.date, "MMM Do")}.`);
      if (success !== "failed")
        this._change.next(Date.now());
    });
  }
  approveBooking(booking) {
    return __async(this, null, function* () {
      const promise = (booking.instance ? approveBookingInstance(booking.id, booking.instance) : approveBooking(booking.id)).toPromise().catch((_) => "failed");
      const success = yield promise;
      success === "failed" ? notifyError("Error approving in parking booking") : notifySuccess(`Approved parking reservation for ${booking.user_name} on ${format(booking.date, "MMM Do")}.`);
      if (success !== "failed")
        this._change.next(Date.now());
    });
  }
  rejectBooking(booking) {
    return __async(this, null, function* () {
      const promise = (booking.instance ? rejectBookingInstance(booking.id, booking.instance) : rejectBooking(booking.id)).toPromise().catch((_) => "failed");
      const success = yield promise;
      success === "failed" ? notifyError("Error rejecting in parking booking") : notifySuccess(`Rejected parking reservation for ${booking.user_name} on ${format(booking.date, "MMM dd")}.`);
      if (success !== "failed")
        this._change.next(Date.now());
    });
  }
  _clearAssignedBooking(space) {
    return __async(this, null, function* () {
      const booking_list = yield queryBookings({
        period_start: getUnixTime(startOfDay(Date.now())),
        period_end: getUnixTime(endOfDay(Date.now())),
        type: "parking",
        email: space.assigned_to,
        include_checked_out: true
      }).toPromise();
      const filtered = booking_list.filter((_) => _.asset_id === space.id);
      yield Promise.all(filtered.map((_) => removeBooking(_.id).toPromise()));
    });
  }
};
_ParkingStateService.\u0275fac = function ParkingStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ParkingStateService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(MatDialog), \u0275\u0275inject(SettingsService));
};
_ParkingStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ParkingStateService, factory: _ParkingStateService.\u0275fac, providedIn: "root" });
var ParkingStateService = _ParkingStateService;

export {
  ParkingStateService
};
//# sourceMappingURL=chunk-ATT3BRUZ.js.map
