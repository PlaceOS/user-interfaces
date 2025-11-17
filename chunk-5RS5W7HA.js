import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteOrigin,
  MatAutocompleteTrigger,
  NewUserModalComponent
} from "./chunk-ISUINKPX.js";
import {
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  COMMA,
  CommonModule,
  Component,
  DefaultValueAccessor,
  ENTER,
  FormsModule,
  IconComponent,
  Jc,
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatChipsModule,
  MatDialog,
  MatFormField,
  MatFormFieldModule,
  MatOption,
  MatRipple,
  MatRippleModule,
  MatSuffix,
  MatTooltip,
  MatTooltipModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  Pipe,
  SettingsService,
  StaffUser,
  TranslatePipe,
  USER_DOMAIN,
  User,
  UserAvatarComponent,
  Yc,
  __spreadProps,
  __spreadValues,
  catchError,
  combineLatest,
  csvToJson,
  currentUser,
  debounceTime,
  downloadFile,
  first,
  forwardRef,
  inject,
  input,
  kt,
  map,
  model,
  notifyError,
  of,
  output,
  searchGuests,
  searchStaff,
  setClassMetadata,
  switchMap,
  tap,
  unique,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-2A5OUH7P.js";

// libs/form-fields/src/lib/place-user.pipe.ts
var USER_LIST = [];
var EMPTY_USER = {};
var _PlaceUserPipe = class _PlaceUserPipe {
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
    user = await Jc(user_id).toPromise().catch(() => null);
    if (user) {
      user = new StaffUser(user);
      USER_LIST.push(user);
      return user;
    }
    return EMPTY_USER;
  }
};
_PlaceUserPipe.\u0275fac = function PlaceUserPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PlaceUserPipe)();
};
_PlaceUserPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "placeuser", type: _PlaceUserPipe, pure: true });
var PlaceUserPipe = _PlaceUserPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceUserPipe, [{
    type: Pipe,
    args: [{
      name: "placeuser"
    }]
  }], null, null);
})();

// libs/form-fields/src/lib/user-list-field.component.ts
var _c0 = ["search_field"];
var _c1 = (a0) => ({ name: a0 });
var _c2 = (a0) => ({ email: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function UserListFieldComponent_For_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 15);
    \u0275\u0275pipe(1, "placeuser");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "placeuser");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_15_0;
    let tmp_16_0;
    const item_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", (tmp_15_0 = \u0275\u0275pipeBind1(2, 4, \u0275\u0275pipeBind1(1, 2, item_r3 == null ? null : item_r3.email))) == null ? null : tmp_15_0.location_name_time(ctx_r3.time()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (tmp_16_0 = \u0275\u0275pipeBind1(5, 8, \u0275\u0275pipeBind1(4, 6, item_r3 == null ? null : item_r3.email))) == null ? null : tmp_16_0.location_icon(ctx_r3.time()), " ");
  }
}
function UserListFieldComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 13);
    \u0275\u0275listener("removed", function UserListFieldComponent_For_7_Template_mat_chip_row_removed_0_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeUser(item_r3));
    });
    \u0275\u0275elementStart(1, "div", 14)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, UserListFieldComponent_For_7_Conditional_4_Template, 6, 10, "icon", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 16);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275classProp("bg-warning", item_r3.is_external);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.name || item_r3.email);
    \u0275\u0275advance();
    \u0275\u0275conditional(!item_r3.is_external ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(6, 5, "COMMON.REMOVE_ITEM", \u0275\u0275pureFunction1(8, _c1, item_r3.name || item_r3.email)));
  }
}
function UserListFieldComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 10);
  }
}
function UserListFieldComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 17);
    \u0275\u0275listener("click", function UserListFieldComponent_Conditional_15_Template_mat_option_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addUserFromEmail());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "FORM.USER_LIST_ADD_EXTERNAL", \u0275\u0275pureFunction1(4, _c2, ctx_r3.search$.getValue())), " ");
  }
}
function UserListFieldComponent_For_17_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " (");
    \u0275\u0275elementStart(1, "span", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, ") ");
  }
  if (rf & 2) {
    const user_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r7.username);
  }
}
function UserListFieldComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 18);
    \u0275\u0275listener("click", function UserListFieldComponent_For_17_Template_mat_option_click_0_listener() {
      const user_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addUser(user_r7));
    });
    \u0275\u0275elementStart(1, "div", 14);
    \u0275\u0275element(2, "a-user-avatar", 19);
    \u0275\u0275elementStart(3, "div", 11)(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 20);
    \u0275\u0275text(7);
    \u0275\u0275conditionalCreate(8, UserListFieldComponent_For_17_Conditional_8_Template, 4, 1);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const user_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("user", user_r7);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r7.email, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(user_r7.username && user_r7.username !== user_r7.email ? 8 : -1);
  }
}
function UserListFieldComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "button", 22);
    \u0275\u0275listener("click", function UserListFieldComponent_Conditional_19_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openNewUserModal());
    });
    \u0275\u0275elementStart(2, "div", 23)(3, "span", 24);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 25);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "button", 26)(10, "div", 23)(11, "span", 24);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 25);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "input", 27);
    \u0275\u0275listener("change", function UserListFieldComponent_Conditional_19_Template_input_change_17_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addUsersFromFile($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 28);
    \u0275\u0275listener("click", function UserListFieldComponent_Conditional_19_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.downloadCSVTemplate();
      return \u0275\u0275resetView(ctx_r3.download.emit());
    });
    \u0275\u0275elementStart(19, "div", 23)(20, "span", 24);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 25);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 6, "FORM.USER_BTN_ADD_EXTERNAL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 8, "FORM.USER_BTN_ADD_EXTERNAL_SIMPLE"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 10, "FORM.USER_BTN_UPLOAD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 12, "FORM.USER_BTN_UPLOAD_SIMPLE"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 14, "FORM.USER_BTN_TEMPLATE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 16, "FORM.USER_BTN_TEMPLATE_SIMPLE"), " ");
  }
}
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
var ACCEPTED_FILE_TYPES = ["text/csv", "text/plain"];
var DENIED_FILE_TYPES = [
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
];
var _UserListFieldComponent = class _UserListFieldComponent extends AsyncHandler {
  searchStaff(q) {
    return this._settings.get("app.basic_user_search") ? Yc({ q, authority_id: kt()?.id }).pipe(map((_) => _.data.map((u) => new User(u)))) : searchStaff(q);
  }
  get search_valid_email() {
    return validateEmail(this.search$.getValue());
  }
  constructor() {
    super();
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this.time = input(Date.now());
    this.disabled = model(void 0);
    this.limit = input(3);
    this.guests = input(false);
    this.guests_only = input(false);
    this.hide_actions = input(false);
    this.custom_template = input(false);
    this.filter = input(void 0);
    this.new_user = output();
    this.download = output();
    this.separatorKeysCodes = [ENTER, COMMA];
    this.loading = false;
    this.search$ = new BehaviorSubject("");
    this._search_el = viewChild("search_field");
    this.user_list$ = this.search$.pipe(debounceTime(300), switchMap((_) => {
      this.loading = true;
      return (_ ? this.guests() ? combineLatest([
        this.searchStaff(_),
        searchGuests(_)
      ]).pipe(map(([staff, guests]) => {
        if (this.guests_only())
          staff = [];
        const visitors_list = [];
        const visitors = this._settings.get("visitor-invitees") || [];
        for (const item of visitors) {
          const [email, name, company] = item.split("|");
          visitors_list.push({
            email,
            name,
            company
          });
        }
        return unique(staff.concat(guests).concat(visitors_list), "email");
      })) : this.searchStaff(_) : of([])).pipe(catchError((_2) => of([])));
    }), tap((_) => this.loading = false));
    this.active_list = [];
    this.validFn = (s) => validateEmail(s);
    this.emptyClick = () => this.openNewUserModal(new User());
  }
  updateSearch(new_value = "") {
    this.timeout("search", () => this.search$.next(new_value));
  }
  addUserFromEmail(email = "") {
    if (!email)
      email = this.search$.getValue();
    if (!validateEmail(email))
      return;
    const user = new User({ id: email, email, name: email.split("@")[0] });
    this.addUser(user);
    const { name, organisation } = user;
    const visitor_details = `${email}|${name}|${organisation}`;
    const old_visitors = this._settings.get("visitor-invitees") || [];
    this._settings.saveUserSetting("visitor-invitees", [
      ...old_visitors.filter((_) => !_.includes(email)),
      visitor_details
    ]);
    this.timeout("clear_search", () => {
      this.search$.next("");
      this._search_el().nativeElement.value = "";
    }, 100);
  }
  /**
   * Add user to the user list
   * @param user
   */
  addUser(user) {
    const list = this.active_list?.filter((_) => _.id !== user.id) || [];
    this.setValue([
      ...list,
      new User(__spreadProps(__spreadValues({}, user), {
        id: user.id || user.email,
        visit_expected: (!user.id && user.is_external !== true ? user.visit_expected : null) ?? true
      }))
    ]);
    this.timeout("clear_search", () => {
      this.search$.next("");
      this._search_el().nativeElement.value = "";
    }, 100);
  }
  /**
   * Remove user from the user list
   * @param user
   */
  removeUser(user) {
    const list = this.active_list.filter((a_user) => a_user.id !== user.id);
    this.setValue(list);
  }
  /**
   * Load CSV file and populate the user list with the contents
   * @param event File input field event
   */
  addUsersFromFile(event) {
    if (event.target) {
      const file = event.target.files[0];
      if (file) {
        if (!ACCEPTED_FILE_TYPES.includes(file.type) || DENIED_FILE_TYPES.includes(file.type)) {
          notifyError("Only CSV files are supported");
          return;
        }
        const reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.addEventListener("load", (evt) => {
          this.processCsvData(evt.srcElement.result);
          event.target.value = "";
        });
        reader.addEventListener("error", (_) => notifyError("Error reading file."));
      }
    }
  }
  /**
   * Process raw CSV data and save user data to attendee list
   * @param data CSV data
   */
  processCsvData(data) {
    const list = csvToJson(data) || [];
    const id = currentUser()?.staff_id || "unknown";
    for (const el of list) {
      el.name = el.name || `${el.first_name} ${el.last_name}`;
      const display = (el.name || `${Math.floor(Math.random() * 99999999)}`).split(" ").join("_").toLowerCase();
      if (!el.email) {
        el.email = `${display}+${id}@guest.${USER_DOMAIN}`;
      }
      const internal_emails = this._settings.get("app.bookings.internal_emails") || ["place.tech"];
      el.visit_expected = el.visit_expected ?? !internal_emails.find((_) => el.email.endsWith(_));
      el.phone = "" + el.phone;
      this.addUser(new User(el));
    }
  }
  /* istanbul ignore next */
  /** Download template CSV file */
  downloadCSVTemplate() {
    if (this.custom_template())
      return;
    const template = `Organisation,First Name,Last Name,Email,Phone,Assistance Required,Visit Expected
Fake Org,John,Smith,john.smith@example.com,01234567898,false,true`;
    downloadFile("template.csv", template);
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.active_list = new_value;
    if (this._onChange) {
      this._onChange(new_value);
    }
  }
  /* istanbul ignore next */
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.active_list = value;
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
  displayFn(item) {
    return item?.name || "";
  }
  /**
   * Open modal to add or update user details
   */
  openNewUserModal(user = new User()) {
    const ref = this._dialog.open(NewUserModalComponent, {
      width: "auto",
      height: "auto",
      data: { user }
    });
    ref.componentInstance?.event.pipe(first((_) => _.reason === "done")).subscribe((event) => {
      this.addUser(event.metadata);
      ref.close();
    });
  }
};
_UserListFieldComponent.\u0275fac = function UserListFieldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserListFieldComponent)();
};
_UserListFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserListFieldComponent, selectors: [["a-user-list-field"]], viewQuery: function UserListFieldComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._search_el, _c0, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, inputs: { time: [1, "time"], disabled: [1, "disabled"], limit: [1, "limit"], guests: [1, "guests"], guests_only: [1, "guests_only"], hide_actions: [1, "hide_actions"], custom_template: [1, "custom_template"], filter: [1, "filter"] }, outputs: { disabled: "disabledChange", new_user: "new_user", download: "download" }, features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _UserListFieldComponent),
    multi: true
  }
]), \u0275\u0275InheritDefinitionFeature], decls: 20, vars: 15, consts: [["origin", "matAutocompleteOrigin"], ["chipList", ""], ["search_field", ""], ["auto", "matAutocomplete"], ["form-field", "", 1, "mb-4"], ["search", ""], ["appearance", "outline", "matAutocompleteOrigin", "", 1, "w-full"], ["aria-label", "User Seleciom"], ["user", "", 3, "bg-warning"], ["name", "user_email", 3, "ngModelChange", "matChipInputTokenEnd", "placeholder", "ngModel", "matAutocomplete", "matChipInputFor", "matChipInputSeparatorKeyCodes"], ["diameter", "24", "matSuffix", ""], [1, "leading-tight"], ["actions", "", 1, "-mt-4", "flex", "items-center", "space-x-2"], ["user", "", 3, "removed"], [1, "flex", "items-center", "space-x-2"], [3, "matTooltip"], ["matChipRemove", "", "remove", ""], [3, "click"], [1, "leading-tight", 3, "click"], [1, "-ml-2", 3, "user"], [1, "text-xs", "opacity-30"], [1, "truncate"], ["btn", "", "matRipple", "", "type", "button", "name", "new-contact", 1, "inverse", "flex-1", "sm:flex-none", 3, "click"], [1, "flex", "items-center", "justify-center"], [1, "hidden", "sm:inline"], [1, "inline", "sm:hidden"], ["btn", "", "matRipple", "", "type", "button", "name", "upload-csv", 1, "inverse", "relative", "flex-1", "sm:flex-none"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"], ["btn", "", "matRipple", "", "type", "button", "name", "download-template", 1, "inverse", "flex-1", "sm:flex-none", 3, "click"]], template: function UserListFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "mat-form-field", 6, 0)(4, "mat-chip-grid", 7, 1);
    \u0275\u0275repeaterCreate(6, UserListFieldComponent_For_7_Template, 9, 10, "mat-chip-row", 8, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 9, 2);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "async");
    \u0275\u0275listener("ngModelChange", function UserListFieldComponent_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.updateSearch($event));
    })("matChipInputTokenEnd", function UserListFieldComponent_Template_input_matChipInputTokenEnd_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.addUserFromEmail($event.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, UserListFieldComponent_Conditional_12_Template, 1, 0, "mat-spinner", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-autocomplete", null, 3);
    \u0275\u0275conditionalCreate(15, UserListFieldComponent_Conditional_15_Template, 3, 6, "mat-option");
    \u0275\u0275repeaterCreate(16, UserListFieldComponent_For_17_Template, 9, 4, "mat-option", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(18, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(19, UserListFieldComponent_Conditional_19_Template, 26, 18, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const chipList_r9 = \u0275\u0275reference(5);
    const auto_r10 = \u0275\u0275reference(14);
    \u0275\u0275attribute("disabled", ctx.disabled());
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx.active_list);
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(10, 9, "FORM.USER_LIST_PLACEHOLDER"))("ngModel", \u0275\u0275pipeBind1(11, 11, ctx.search$))("matAutocomplete", auto_r10)("matChipInputFor", chipList_r9)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.loading ? 12 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.search_valid_email ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(18, 13, ctx.user_list$));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx.hide_actions() ? 19 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  MatFormFieldModule,
  MatFormField,
  MatSuffix,
  MatChipsModule,
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatAutocompleteModule,
  MatAutocomplete,
  MatOption,
  MatAutocompleteTrigger,
  MatAutocompleteOrigin,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  MatRippleModule,
  MatRipple,
  TranslatePipe,
  IconComponent,
  PlaceUserPipe,
  MatTooltipModule,
  MatTooltip,
  UserAvatarComponent
], encapsulation: 2 });
var UserListFieldComponent = _UserListFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserListFieldComponent, [{
    type: Component,
    args: [{ selector: "a-user-list-field", template: `
        <div class="mb-4" form-field [attr.disabled]="disabled()">
            <div search>
                <mat-form-field
                    class="w-full"
                    appearance="outline"
                    matAutocompleteOrigin
                    #origin="matAutocompleteOrigin"
                >
                    <mat-chip-grid #chipList aria-label="User Seleciom">
                        @for (item of active_list; track item.id) {
                            <mat-chip-row
                                user
                                [class.bg-warning]="item.is_external"
                                (removed)="removeUser(item)"
                            >
                                <div class="flex items-center space-x-2">
                                    <div>{{ item.name || item.email }}</div>
                                    @if (!item.is_external) {
                                        <icon
                                            [matTooltip]="
                                                (
                                                    item?.email
                                                    | placeuser
                                                    | async
                                                )?.location_name_time(time())
                                            "
                                        >
                                            {{
                                                (
                                                    item?.email
                                                    | placeuser
                                                    | async
                                                )?.location_icon(time())
                                            }}
                                        </icon>
                                    }
                                </div>
                                <button
                                    matChipRemove
                                    remove
                                    [attr.aria-label]="
                                        'COMMON.REMOVE_ITEM'
                                            | translate
                                                : {
                                                      name:
                                                          item.name ||
                                                          item.email,
                                                  }
                                    "
                                >
                                    <icon>cancel</icon>
                                </button>
                            </mat-chip-row>
                        }
                    </mat-chip-grid>
                    <input
                        #search_field
                        [placeholder]="'FORM.USER_LIST_PLACEHOLDER' | translate"
                        name="user_email"
                        [ngModel]="search$ | async"
                        (ngModelChange)="updateSearch($event)"
                        [matAutocomplete]="auto"
                        [matChipInputFor]="chipList"
                        [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
                        (matChipInputTokenEnd)="addUserFromEmail($event.value)"
                    />
                    @if (loading) {
                        <mat-spinner diameter="24" matSuffix></mat-spinner>
                    }
                </mat-form-field>
                <mat-autocomplete #auto="matAutocomplete">
                    @if (search_valid_email) {
                        <mat-option (click)="addUserFromEmail()">
                            {{
                                'FORM.USER_LIST_ADD_EXTERNAL'
                                    | translate: { email: search$.getValue() }
                            }}
                        </mat-option>
                    }
                    @for (user of user_list$ | async; track user) {
                        <mat-option
                            (click)="addUser(user)"
                            class="leading-tight"
                        >
                            <div class="flex items-center space-x-2">
                                <a-user-avatar class="-ml-2" [user]="user" />
                                <div class="leading-tight">
                                    <div>{{ user.name }}</div>
                                    <div class="text-xs opacity-30">
                                        {{ user.email }}
                                        @if (
                                            user.username &&
                                            user.username !== user.email
                                        ) {
                                            (<span class="truncate">{{
                                                user.username
                                            }}</span
                                            >)
                                        }
                                    </div>
                                </div>
                            </div>
                        </mat-option>
                    }
                </mat-autocomplete>
            </div>
            @if (!hide_actions()) {
                <div class="-mt-4 flex items-center space-x-2" actions>
                    <button
                        btn
                        matRipple
                        type="button"
                        name="new-contact"
                        class="inverse flex-1 sm:flex-none"
                        (click)="openNewUserModal()"
                    >
                        <div class="flex items-center justify-center">
                            <span class="hidden sm:inline">
                                {{ 'FORM.USER_BTN_ADD_EXTERNAL' | translate }}
                            </span>
                            <span class="inline sm:hidden">
                                {{
                                    'FORM.USER_BTN_ADD_EXTERNAL_SIMPLE'
                                        | translate
                                }}
                            </span>
                        </div>
                    </button>
                    <button
                        btn
                        matRipple
                        type="button"
                        name="upload-csv"
                        class="inverse relative flex-1 sm:flex-none"
                    >
                        <div class="flex items-center justify-center">
                            <span class="hidden sm:inline">
                                {{ 'FORM.USER_BTN_UPLOAD' | translate }}
                            </span>
                            <span class="inline sm:hidden">
                                {{ 'FORM.USER_BTN_UPLOAD_SIMPLE' | translate }}
                            </span>
                        </div>
                        <input
                            class="absolute inset-0 opacity-0"
                            type="file"
                            (change)="addUsersFromFile($event)"
                        />
                    </button>
                    <button
                        btn
                        matRipple
                        type="button"
                        name="download-template"
                        class="inverse flex-1 sm:flex-none"
                        (click)="downloadCSVTemplate(); download.emit()"
                    >
                        <div class="flex items-center justify-center">
                            <span class="hidden sm:inline">
                                {{ 'FORM.USER_BTN_TEMPLATE' | translate }}
                            </span>
                            <span class="inline sm:hidden">
                                {{
                                    'FORM.USER_BTN_TEMPLATE_SIMPLE' | translate
                                }}
                            </span>
                        </div>
                    </button>
                </div>
            }
        </div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => UserListFieldComponent),
        multi: true
      }
    ], imports: [
      CommonModule,
      MatFormFieldModule,
      MatChipsModule,
      MatAutocompleteModule,
      FormsModule,
      MatRippleModule,
      TranslatePipe,
      IconComponent,
      PlaceUserPipe,
      MatTooltipModule,
      UserAvatarComponent
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserListFieldComponent, { className: "UserListFieldComponent", filePath: "libs/form-fields/src/lib/user-list-field.component.ts", lineNumber: 264 });
})();

export {
  UserListFieldComponent
};
//# sourceMappingURL=chunk-5RS5W7HA.js.map
