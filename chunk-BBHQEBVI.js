import {
  SelectMapItemModalComponent
} from "./chunk-HY4JZF3A.js";
import {
  ItemListFieldComponent
} from "./chunk-XFUSZ3IX.js";
import {
  UserSearchFieldComponent,
  approveBooking,
  checkinBooking,
  queryBookings,
  queryPagedBookings,
  rejectBooking,
  removeBooking,
  saveBooking,
  showStaff
} from "./chunk-PNVZNC3H.js";
import {
  AsyncHandler,
  Booking,
  Component,
  DefaultValueAccessor,
  Desk,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  IconComponent,
  Injectable,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRipple,
  MatRippleModule,
  MatTooltip,
  MatTooltipModule,
  NgControlStatus,
  NgControlStatusGroup,
  OrganisationService,
  ReactiveFormsModule,
  RecurrenceDays,
  SettingsService,
  SettingsToggleComponent,
  Subject,
  TranslatePipe,
  Validators,
  addHours,
  catchError,
  combineLatest,
  computed,
  debounceTime,
  distinctUntilChanged,
  endOfDay,
  first,
  getUnixTime,
  i18n,
  inject,
  lastValueFrom,
  map,
  nc,
  nextValueFrom,
  notifyError,
  notifyInfo,
  notifySuccess,
  oc,
  of,
  openConfirmModal,
  output,
  outputToObservable,
  randomInt,
  randomString,
  rc,
  scan,
  set,
  setClassMetadata,
  shareReplay,
  signal,
  startOfDay,
  switchMap,
  tap,
  toObservable,
  toSignal,
  unique,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-U4YKYOQ5.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// apps/concierge/src/app/desks/desk-modal.component.ts
function DeskModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 3)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function DeskModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 4)(1, "div", 8)(2, "label", 9);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-form-field", 10)(8, "mat-label");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 11);
    \u0275\u0275elementStart(12, "mat-error");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 12)(16, "div", 13)(17, "label", 14);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "mat-form-field", 10)(23, "mat-label");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 15);
    \u0275\u0275elementStart(27, "mat-error");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 13)(31, "label", 16);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementStart(34, "span");
    \u0275\u0275text(35, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 12)(37, "mat-form-field", 10)(38, "mat-label");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "input", 17);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementStart(43, "mat-error");
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "button", 18);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275listener("click", function DeskModalComponent_Conditional_6_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectItemfromMap());
    });
    \u0275\u0275elementStart(48, "icon");
    \u0275\u0275text(49, "place");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(50, "label", 19);
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 20);
    \u0275\u0275element(54, "a-user-search-field", 21);
    \u0275\u0275elementStart(55, "button", 22);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275listener("click", function DeskModalComponent_Conditional_6_Template_button_click_55_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ assigned_user: null, assigned_to: null, assigned_name: null }));
    });
    \u0275\u0275elementStart(57, "icon", 23);
    \u0275\u0275text(58, " person_cancel ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(59, "div", 24);
    \u0275\u0275element(60, "settings-toggle", 25);
    \u0275\u0275pipe(61, "translate");
    \u0275\u0275element(62, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "label", 27);
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(66, "item-list-field", 28);
    \u0275\u0275pipe(67, "translate");
    \u0275\u0275elementStart(68, "label", 27);
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(71, "item-list-field", 29);
    \u0275\u0275pipe(72, "translate");
    \u0275\u0275elementStart(73, "label", 27);
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "mat-form-field", 30)(77, "mat-label");
    \u0275\u0275text(78);
    \u0275\u0275pipe(79, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(80, "textarea", 31);
    \u0275\u0275pipe(81, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "label", 32);
    \u0275\u0275text(83);
    \u0275\u0275pipe(84, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "mat-form-field", 10)(86, "mat-label");
    \u0275\u0275text(87);
    \u0275\u0275pipe(88, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(89, "input", 33);
    \u0275\u0275pipe(90, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 25, "APP.CONCIERGE.DESKS_ID"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 27, "APP.CONCIERGE.DESKS_ID"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 29, "FORM.ID_REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 31, "APP.CONCIERGE.DESKS_NAME"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 33, "APP.CONCIERGE.DESKS_NAME"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 35, "FORM.NAME_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 37, "EXPLORE.MAP_ID"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 39, "EXPLORE.MAP_ID"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(42, 41, "APP.CONCIERGE.DESKS_MAP_ID_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(45, 43, "EXPLORE.MAP_ID_REQUIRED"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(47, 45, "APP.CONCIERGE.POI_MAP_SELECT"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 47, "APP.CONCIERGE.USER_ASSIGNED"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(56, 49, "APP.CONCIERGE.USER_CLEAR"));
    \u0275\u0275advance(5);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(61, 51, "COMMON.BOOKABLE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(65, 53, "COMMON.GROUPS"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(67, 55, "BOOKINGS.GROUPS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(70, 57, "COMMON.FEATURES"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(72, 59, "COMMON.FEATURES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(75, 61, "FORM.NOTES"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(79, 63, "FORM.NOTES"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(81, 65, "FORM.NOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(84, 67, "APP.CONCIERGE.DESKS_SECURITY"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(88, 69, "APP.CONCIERGE.DESKS_SECURITY"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(90, 71, "APP.CONCIERGE.DESKS_SECURITY"));
  }
}
function DeskModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 5);
    \u0275\u0275element(1, "mat-spinner", 34);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.DESKS_SAVING"));
  }
}
var CHARS = "0123456789ABCDEF";
var _DeskModalComponent = class _DeskModalComponent {
  get id() {
    return this._data?.desk?.id || "";
  }
  get desk() {
    return this._data?.desk;
  }
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this.event = output();
    this.loading = signal(false);
    this.form = new FormGroup({
      id: new FormControl(``),
      name: new FormControl("", [Validators.required]),
      map_id: new FormControl("", [Validators.required]),
      groups: new FormControl([]),
      features: new FormControl([]),
      bookable: new FormControl(false),
      notes: new FormControl(""),
      assigned_user: new FormControl(null),
      assigned_to: new FormControl(""),
      assigned_name: new FormControl(""),
      security: new FormControl("")
    });
    const _data = this._data;
    if (_data?.desk)
      this.form.patchValue(_data.desk);
    if (!this.form.value.id) {
      this.form.patchValue({
        id: `desk-${randomString(3, CHARS)}_${randomString(5, CHARS)}`
      });
    }
  }
  async ngOnInit() {
    if (this.desk?.assigned_to) {
      const user = await lastValueFrom(showStaff(this.desk.assigned_to));
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
    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();
    if (!this.form.valid)
      return;
    this.loading.set(true);
    const value = __spreadValues({}, this.form.getRawValue());
    if (value.assigned_user) {
      value.assigned_to = value.assigned_user?.email || value.assigned_to;
      value.assigned_name = value.assigned_user?.name || value.assigned_name;
    } else {
      delete value.assigned_to;
      delete value.assigned_name;
    }
    delete value.assigned_user;
    this._dialog_ref.disableClose = true;
    const has_changes = Object.keys(this.desk).some((key) => value[key] !== this.desk[key]);
    if (has_changes) {
      this.event.emit({ reason: "done", metadata: value });
    } else {
      this._dialog_ref.disableClose = false;
      notifyInfo("No changes were made.");
      this._dialog_ref.close();
    }
  }
  selectItemfromMap() {
    let level = this.desk.zone;
    const ref = this._dialog.open(SelectMapItemModalComponent, {
      data: {
        location: this.form.value.map_id,
        level_id: this.form
      }
    });
    ref.afterClosed().subscribe((d) => {
      if (!d)
        return;
      level = ref.componentInstance.level || level;
      const zones = unique([
        this._org.organisation.id,
        this._org.building.parent_id,
        this._org.building.id,
        level?.id
      ]);
      this.form.patchValue({ map_id: d });
    });
  }
};
_DeskModalComponent.\u0275fac = function DeskModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DeskModalComponent)();
};
_DeskModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskModalComponent, selectors: [["desk-modal"]], outputs: { event: "event" }, decls: 12, vars: 8, consts: [[1, "w-lg"], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", "", "aria-label", "Close dialog"], [1, "flex", "max-h-[65vh]", "flex-col", "overflow-auto", "p-4", 3, "formGroup"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "border-base-300", "flex", "items-center", "justify-end", "space-x-2", "border-t", "px-4", "py-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "w-full"], ["for", "id"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "id", "formControlName", "id", "placeholder", "desk-10.123"], [1, "flex", "space-x-2"], [1, "w-1/3", "flex-1"], ["for", "name"], ["matInput", "", "name", "name", "formControlName", "name", "placeholder", "e.g. Office Desk"], ["for", "map-id"], ["matInput", "", "name", "map-id", "formControlName", "map_id", 3, "placeholder"], ["icon", "", "matRipple", "", 1, "border-secondary", "text-secondary", "h-12", "w-12", "min-w-12", "rounded-sm", "border", 3, "click", "matTooltip"], ["for", "user"], [1, "mb-4", "flex", "space-x-2"], ["name", "user", "formControlName", "assigned_user", 1, "flex-1"], ["icon", "", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "min-w-12", "rounded-sm", 3, "click", "matTooltip"], ["className", "material-symbols-outlined"], [1, "flex", "space-x-4", "pb-4"], ["formControlName", "bookable", 1, "flex-1", 3, "name"], [1, "flex-1"], ["for", "notes"], ["formControlName", "groups", 1, "w-full", 3, "placeholder"], ["formControlName", "features", 1, "w-full", 3, "placeholder"], ["appearance", "outline"], ["matInput", "", "name", "notes", "formControlName", "notes", 3, "placeholder"], ["for", "security"], ["matInput", "", "name", "security", "formControlName", "security", 3, "placeholder"], ["diameter", "32"]], template: function DeskModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, DeskModalComponent_Conditional_5_Template, 3, 0, "button", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, DeskModalComponent_Conditional_6_Template, 91, 73, "main", 4)(7, DeskModalComponent_Conditional_7_Template, 5, 3, "main", 5);
    \u0275\u0275elementStart(8, "footer", 6)(9, "button", 7);
    \u0275\u0275listener("click", function DeskModalComponent_Template_button_click_9_listener() {
      return ctx.postForm();
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, ctx.id ? "APP.CONCIERGE.DESKS_EDIT" : "APP.CONCIERGE.DESKS_NEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.loading() ? 6 : 7);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 6, "COMMON.SAVE"), " ");
  }
}, dependencies: [
  MatDialogModule,
  MatDialogClose,
  TranslatePipe,
  IconComponent,
  MatRippleModule,
  MatRipple,
  MatFormFieldModule,
  MatFormField,
  MatLabel,
  MatError,
  MatInputModule,
  MatInput,
  ReactiveFormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  ItemListFieldComponent,
  SettingsToggleComponent,
  UserSearchFieldComponent,
  MatTooltipModule,
  MatTooltip
], encapsulation: 2 });
var DeskModalComponent = _DeskModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskModalComponent, [{
    type: Component,
    args: [{ selector: "desk-modal", template: `
        <div class="w-lg">
            <header
                class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
            >
                <h2 class="px-2 text-xl font-medium">
                    {{
                        (id
                            ? 'APP.CONCIERGE.DESKS_EDIT'
                            : 'APP.CONCIERGE.DESKS_NEW'
                        ) | translate
                    }}
                </h2>
                @if (!loading()) {
                    <button icon matRipple mat-dialog-close aria-label="Close dialog">
                        <icon>close</icon>
                    </button>
                }
            </header>
            @if (!loading()) {
                <main
                    class="flex max-h-[65vh] flex-col overflow-auto p-4"
                    [formGroup]="form"
                >
                    <div class="w-full">
                        <label for="id">
                            {{ 'APP.CONCIERGE.DESKS_ID' | translate }}
                            <span>*</span>
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-label>{{ 'APP.CONCIERGE.DESKS_ID' | translate }}</mat-label>
                            <input
                                matInput
                                name="id"
                                formControlName="id"
                                placeholder="desk-10.123"
                            />
                            <mat-error>{{
                                'FORM.ID_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex space-x-2">
                        <div class="w-1/3 flex-1">
                            <label for="name">
                                {{ 'APP.CONCIERGE.DESKS_NAME' | translate }}
                                <span>*</span>
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-label>{{ 'APP.CONCIERGE.DESKS_NAME' | translate }}</mat-label>
                                <input
                                    matInput
                                    name="name"
                                    formControlName="name"
                                    placeholder="e.g. Office Desk"
                                />
                                <mat-error>{{
                                    'FORM.NAME_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                        <div class="w-1/3 flex-1">
                            <label for="map-id">
                                {{ 'EXPLORE.MAP_ID' | translate }}<span>*</span>
                            </label>
                            <div class="flex space-x-2">
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <mat-label>{{ 'EXPLORE.MAP_ID' | translate }}</mat-label>
                                    <input
                                        matInput
                                        name="map-id"
                                        formControlName="map_id"
                                        [placeholder]="
                                            'APP.CONCIERGE.DESKS_MAP_ID_PLACEHOLDER'
                                                | translate
                                        "
                                    />
                                    <mat-error>
                                        {{
                                            'EXPLORE.MAP_ID_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                </mat-form-field>
                                <button
                                    icon
                                    matRipple
                                    class="border-secondary text-secondary h-12 w-12 min-w-12 rounded-sm border"
                                    [matTooltip]="
                                        'APP.CONCIERGE.POI_MAP_SELECT'
                                            | translate
                                    "
                                    (click)="selectItemfromMap()"
                                >
                                    <icon>place</icon>
                                </button>
                            </div>
                        </div>
                    </div>
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
                    <div class="flex space-x-4 pb-4">
                        <settings-toggle
                            formControlName="bookable"
                            class="flex-1"
                            [name]="'COMMON.BOOKABLE' | translate"
                        >
                        </settings-toggle>
                        <div class="flex-1"></div>
                    </div>
                    <label for="notes">{{ 'COMMON.GROUPS' | translate }}</label>
                    <item-list-field
                        class="w-full"
                        [placeholder]="'BOOKINGS.GROUPS' | translate"
                        formControlName="groups"
                    ></item-list-field>
                    <label for="notes">{{
                        'COMMON.FEATURES' | translate
                    }}</label>
                    <item-list-field
                        class="w-full"
                        [placeholder]="'COMMON.FEATURES' | translate"
                        formControlName="features"
                    ></item-list-field>
                    <label for="notes">{{ 'FORM.NOTES' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <mat-label>{{ 'FORM.NOTES' | translate }}</mat-label>
                        <textarea
                            matInput
                            name="notes"
                            [placeholder]="'FORM.NOTES' | translate"
                            formControlName="notes"
                        ></textarea>
                    </mat-form-field>
                    <label for="security">
                        {{ 'APP.CONCIERGE.DESKS_SECURITY' | translate }}
                    </label>
                    <mat-form-field appearance="outline" class="w-full">
                        <mat-label>{{ 'APP.CONCIERGE.DESKS_SECURITY' | translate }}</mat-label>
                        <input
                            matInput
                            name="security"
                            [placeholder]="
                                'APP.CONCIERGE.DESKS_SECURITY' | translate
                            "
                            formControlName="security"
                        />
                    </mat-form-field>
                </main>
            } @else {
                <main
                    class="flex flex-col items-center justify-center space-y-2 p-8"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p>{{ 'APP.CONCIERGE.DESKS_SAVING' | translate }}</p>
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
      IconComponent,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule,
      MatProgressSpinnerModule,
      ItemListFieldComponent,
      SettingsToggleComponent,
      UserSearchFieldComponent,
      MatTooltipModule
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskModalComponent, { className: "DeskModalComponent", filePath: "apps/concierge/src/app/desks/desk-modal.component.ts", lineNumber: 257 });
})();

// apps/concierge/src/app/desks/desks-state.service.ts
var _DesksStateService = class _DesksStateService extends AsyncHandler {
  nextPage() {
    this._call_next_page.next(`NEXT_${Date.now()}`);
  }
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this._filters = signal({});
    this._desk_bookings = [];
    this._loading = signal(false);
    this._change = signal(0);
    this.loading = this._loading.asReadonly();
    this.filters = this._filters.asReadonly();
    this._desks$ = combineLatest([
      toObservable(this._filters),
      toObservable(this._change)
    ]).pipe(debounceTime(500), switchMap(([filters]) => {
      if (filters.view !== "manage") {
        return of({ list: [], is_manage: false });
      }
      this._loading.set(true);
      const zones = filters.zones || [];
      const fetch$ = zones && !zones.includes("All") ? nc(zones[0], "desks").pipe(map((m) => m.details instanceof Array ? m.details : []), catchError((_) => of([]))) : oc(this._org.building?.id, {
        name: "desks"
      }).pipe(map((m) => m.map((i) => i.metadata?.desks?.details || []).reduce((c, i) => [...c, ...i], [])), catchError((_) => of([])));
      return fetch$.pipe(map((list) => ({ list, is_manage: true })));
    }), map(({ list, is_manage }) => {
      if (!(list instanceof Array))
        list = [];
      list.sort((a, b) => a.name?.localeCompare(b.name));
      if (is_manage)
        this._loading.set(false);
      return list.map((i) => new Desk(__spreadProps(__spreadValues({}, i), { qr_code: "" })));
    }), shareReplay(1));
    this.desks = toSignal(this._desks$, {
      initialValue: []
    });
    this._next_page = new Subject();
    this._call_next_page = new Subject();
    this._all_zones_keys = ["All", -1, "-1", ""];
    this.setup_paging = combineLatest([
      toObservable(this._filters),
      this._org.initialised
    ]).pipe(debounceTime(500), tap(([filters, loaded]) => {
      if (!loaded || filters.view !== "events")
        return;
      const date = filters.date || Date.now();
      const active_zones = (filters.zones || []).filter((_) => !this._all_zones_keys.includes(_));
      const zones = !active_zones.length ? this._settings.get("app.use_region") ? this._org.buildingsForRegion().map((_) => _.id) : [this._org.building.id] : filters.zones;
      this._next_page.next(() => queryPagedBookings({
        period_start: getUnixTime(startOfDay(date)),
        period_end: getUnixTime(endOfDay(date)),
        type: "desk",
        zones: zones.join(","),
        include_checked_out: true,
        include_deleted: "all",
        limit: 500
      }).pipe(catchError((_) => of({ data: [], total: 0, next: null }))));
      this._call_next_page.next(`RESET_${Date.now()}`);
    }));
    this._paged_bookings$ = combineLatest([
      this._next_page,
      this._call_next_page
    ]).pipe(debounceTime(500), distinctUntilChanged((a, b) => a[1] === b[1]), switchMap(([next_page, action]) => {
      this._loading.set(true);
      if (!next_page) {
        return of({
          data: [],
          total: 0,
          next: null,
          reset: action.includes("RESET")
        });
      }
      if (action.includes("RESET")) {
        return next_page().pipe(map((data) => __spreadProps(__spreadValues({}, data), { reset: true })), catchError((_) => of({ data: [], total: 0, next: null })));
      }
      return next_page().pipe(map((data) => __spreadProps(__spreadValues({}, data), { reset: false })), catchError((_) => of({ data: [], total: 0, next: null })));
    }), scan((acc, { data, total, next, reset }) => {
      const list = data;
      this._next_page.next(next);
      if (reset)
        return {
          list,
          total,
          has_next: list.length < total && !!next
        };
      return {
        list: [...acc.list, ...list],
        has_next: !!next,
        total
      };
    }, { list: [], total: 0, has_next: false }), tap((_) => this._loading.set(false)), shareReplay(1));
    this.paged_bookings = toSignal(this._paged_bookings$, {
      initialValue: { list: [], total: 0, has_next: false }
    });
    this.has_more_pages = computed(() => this.paged_bookings().has_next);
    this.bookings = computed(() => this.paged_bookings().list);
    this.setup_paging.subscribe();
  }
  setFilters(filters) {
    if (filters.zones?.includes("All")) {
      filters.zones = [
        "All",
        ...this._org.levelsForBuilding(this._org.building).map((lvl) => lvl.id)
      ];
    } else if (filters.zones && this._filters()?.zones?.includes("All")) {
      filters.zones = [];
    }
    if (filters.zones !== void 0 || filters.date !== void 0) {
      this._loading.set(true);
    }
    this._filters.set(__spreadValues(__spreadValues({}, this._filters()), filters));
  }
  refresh() {
    this._loading.set(true);
    this.timeout("poll", () => this.setFilters(this._filters()));
  }
  async addDesks(list) {
    const zone = this._filters().zones[0];
    const desk_list = [...this.desks()];
    for (const desk of list) {
      const idx = desk_list.findIndex((_) => _.id === desk.id);
      if (idx >= 0)
        desk_list[idx] = desk;
      else
        desk_list.push(desk);
    }
    await rc(zone, {
      name: "desks",
      details: desk_list,
      description: "List of available desks"
    }).toPromise();
    this._change.set(Date.now());
  }
  async editDesk(desk = new Desk()) {
    const ref = this._dialog.open(DeskModalComponent, { data: { desk } });
    const state = await Promise.race([
      lastValueFrom(ref.afterClosed()),
      lastValueFrom(outputToObservable(ref.componentInstance.event).pipe(first((_) => _.reason === "done")))
    ]);
    if (state?.reason !== "done")
      return;
    const zone = this._filters().zones[0];
    const new_desk = __spreadProps(__spreadValues({}, state.metadata), {
      id: state.metadata.id || `desk-${zone.slice(-3)}.${randomInt(999999)}`
    });
    const desk_list = [...this.desks()];
    const idx = desk_list.findIndex((_) => _.id === desk.id);
    if (idx >= 0)
      desk_list[idx] = new_desk;
    else
      desk_list.push(new_desk);
    if (!new_desk.bookable) {
      new_desk.assigned_to = "";
      delete new_desk.assigned_name;
      delete new_desk.assigned_user;
    }
    await lastValueFrom(rc(zone, {
      name: "desks",
      details: desk_list,
      description: "List of available desks"
    })).catch((e) => {
      notifyError(i18n("APP.CONCIERGE.DESKS_SAVE_ERROR", { error: e }));
      ref.componentInstance.loading.set(false);
      throw e;
    });
    let recreate = false;
    if (desk.assigned_to && (desk.assigned_to !== new_desk.assigned_to || desk.id !== new_desk.id)) {
      await this._clearAssignedBooking(desk);
      recreate = true;
    }
    if ((desk.assigned_to !== new_desk.assigned_to || recreate) && new_desk.assigned_to) {
      const date = set(Date.now(), { hours: 1, minutes: 0, seconds: 0 });
      await saveBooking(new Booking({
        user_id: new_desk.assigned_to,
        user_email: new_desk.assigned_to,
        user_name: new_desk.assigned_name,
        booking_start: getUnixTime(date),
        booking_end: getUnixTime(addHours(date, 22)),
        type: "desk",
        booking_type: "desk",
        asset_id: new_desk.id,
        asset_name: new_desk.name,
        recurrence_type: "daily",
        recurrence_days: RecurrenceDays.MONDAY | RecurrenceDays.TUESDAY | RecurrenceDays.WEDNESDAY | RecurrenceDays.THURSDAY | RecurrenceDays.FRIDAY | RecurrenceDays.SATURDAY | RecurrenceDays.SUNDAY,
        zones: unique([
          this._org.organisation.id,
          this._org.region?.id,
          this._org.building?.id,
          new_desk.zone?.id,
          new_desk.zone,
          ...new_desk?.zones || [],
          zone
        ]).filter((_) => !!_),
        extension_data: {
          asset_name: new_desk.name,
          is_assigned: true
        }
      })).toPromise();
    }
    this._change.set(Date.now());
    ref.close();
  }
  async checkinDesk(desk, state = true) {
    const status = await checkinBooking(desk.id, state ?? true).toPromise().catch((_) => ({ failed: true, error: _ }));
    if (status.failed) {
      notifyError(i18n(state ? "APP.CONCIERGE.DESKS_CHECKIN_ERROR" : "APP.CONCIERGE.DESKS_CHECKOUT_ERROR", { error: status.error }));
      throw status.error;
    }
    notifySuccess(i18n(state ? "APP.CONCIERGE.DESKS_CHECKIN_SUCCESS" : "APP.CONCIERGE.DESKS_CHECKOUT_SUCCESS"));
  }
  async approveDesk(desk) {
    const status = await approveBooking(desk.id).toPromise().catch((_) => ({ failed: true, error: _ }));
    if (status.failed) {
      return notifyError(i18n("APP.CONCIERGE.DESKS_APPROVE_ERROR", {
        error: status.error
      }));
    }
    notifySuccess(i18n("APP.CONCIERGE.DESKS_APPROVE_SUCCESS"));
    desk.approved = true;
    desk.rejected = false;
    this.setFilters({});
  }
  async rejectDesk(desk) {
    const status = await rejectBooking(desk.id).toPromise().catch((_) => ({ failed: true, error: _ }));
    if (status.failed) {
      return notifyError(i18n("APP.CONCIERGE.DESKS_REJECT_ERROR", {
        error: status.error
      }));
    }
    notifySuccess(i18n("APP.CONCIERGE.DESKS_REJECT_SUCCESS"));
    desk.approved = false;
    desk.rejected = true;
    this.setFilters({});
  }
  async cancelBooking(booking, series = false) {
    const result = await openConfirmModal({
      title: i18n(series ? "APP.CONCIERGE.DESKS_BOOKING_DELETE_SERIES_TITLE" : "APP.CONCIERGE.DESKS_BOOKING_DELETE_TITLE"),
      content: i18n(series ? "APP.CONCIERGE.DESKS_BOOKING_DELETE_SERIES_CONTENT" : "APP.CONCIERGE.DESKS_BOOKING_DELETE_CONTENT"),
      icon: { content: "event_busy" }
    }, this._dialog);
    if (result.reason !== "done")
      return;
    result.loading(i18n(series ? "APP.CONCIERGE.DESKS_BOOKING_DELETE_SERIES_LOADING" : "APP.CONCIERGE.DESKS_BOOKING_DELETE_LOADING"));
    const query = series ? { instance: true, start_time: booking.instance } : {};
    await nextValueFrom(removeBooking(booking.id, query)).catch((e) => {
      notifyError(i18n("APP.CONCIERGE.DESKS_BOOKING_DELETE_ERROR", { error: e }));
      result.close();
      throw e;
    });
    notifySuccess(i18n("APP.CONCIERGE.DESKS_BOOKING_DELETE_SUCCESS"));
    result.close();
    this.setFilters({});
  }
  async giveAccess(desk) {
    const status = await saveBooking(new Booking(__spreadProps(__spreadValues({}, desk), { access: true }))).toPromise().catch((_) => ({ failed: true, error: _ }));
    if (status.failed) {
      return notifyError(i18n("APP.CONCIERGE.DESKS_ACCESS_ERROR", {
        error: status.error
      }));
    }
    notifySuccess(i18n("APP.CONCIERGE.DESKS_ACCESS_SUCCESS"));
    this.setFilters({});
  }
  async rejectAllDesks() {
    const list = this.bookings();
    if (list.length <= 0)
      return notifyInfo("No desks to reject for the selected date");
    const resp = await openConfirmModal({
      title: i18n("APP.CONCIERGE.DESKS_REJECT_ALL_TITLE"),
      content: i18n("APP.CONCIERGE.DESKS_REJECT_ALL_MSG"),
      icon: {
        type: "icon",
        class: "material-symbols-rounded",
        content: "delete"
      }
    }, this._dialog);
    if (resp.reason !== "done")
      return;
    resp.loading(i18n("APP.CONCIERGE.DESKS_REJECT_ALL_LOADING"));
    await Promise.all(list.map((desk) => rejectBooking(desk.id).toPromise())).catch((e) => {
      notifyError(i18n("APP.CONCIERGE.DESKS_REJECT_ALL_ERROR", { error: e }));
      throw e;
    });
    notifySuccess(i18n("APP.CONCIERGE.DESKS_REJECT_ALL_SUCCESS"));
    this.setFilters({});
    resp.close();
  }
  async _clearAssignedBooking(desk) {
    const booking_list = await lastValueFrom(queryBookings({
      period_start: getUnixTime(startOfDay(Date.now())),
      period_end: getUnixTime(endOfDay(Date.now())),
      type: "desk",
      email: desk.assigned_to,
      include_checked_out: true
    }));
    const filtered = booking_list.filter((_) => _.asset_id === desk.id);
    await Promise.all(filtered.map((_) => lastValueFrom(removeBooking(_.id))));
  }
};
_DesksStateService.\u0275fac = function DesksStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DesksStateService)();
};
_DesksStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DesksStateService, factory: _DesksStateService.\u0275fac, providedIn: "root" });
var DesksStateService = _DesksStateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DesksStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  DesksStateService
};
//# sourceMappingURL=chunk-BBHQEBVI.js.map
