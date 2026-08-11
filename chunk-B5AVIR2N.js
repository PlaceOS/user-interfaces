import {
  AssetStateService,
  AsyncHandler,
  Booking,
  CalendarService,
  Desk,
  FormField,
  IconComponent,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule,
  MatSelect,
  MatSelectModule,
  OrganisationService,
  SETTING_KEYS,
  SafePipe,
  SanitizePipe,
  SettingsService,
  User,
  addYears,
  bookedResourceList,
  bookingAttachments,
  bookingFormValue,
  bookingHostUser,
  currentUser,
  currentUserIsLoaded,
  currentUserLoaded,
  findBookingClashes,
  findNearbyFeature,
  findOldestByName,
  firstValueWhere,
  form,
  generateBookingForm,
  generateCalendarFileLink,
  generateGoogleCalendarLink,
  generateMicrosoftCalendarLink,
  getUnixTime,
  isEmptyUser,
  loadLockerResources,
  openConfirmModal,
  openRecurringClashModal,
  queryBookings,
  removeBooking,
  rulesForResource,
  saveAssetCategory,
  saveAssetType,
  saveBooking,
  settingSignal,
  validateAssetRequestsForResource
} from "./chunk-HKXGJKRS.js";
import {
  AsyncPipe,
  CommonModule,
  Component,
  CurrencyPipe,
  DatePipe,
  DefaultValueAccessor,
  EventEmitter,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  Injectable,
  Injector,
  Ju,
  MatOption,
  MatRipple,
  MatRippleModule,
  MaxLengthValidator,
  NG_VALUE_ACCESSOR,
  Na,
  NavigationEnd,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  Output,
  ReactiveFormsModule,
  Router,
  Sn,
  TranslatePipe,
  Validators,
  ViewChild,
  Vs,
  Wu,
  Zh,
  addDays,
  addMinutes,
  cl,
  computed,
  debounced,
  effect,
  endOfDay,
  flatten,
  format,
  forwardRef,
  getAllDayTimeRange,
  getInvalidSignalFields,
  i18n,
  inject,
  isWithinBookableHours,
  notifyError,
  notifyWarn,
  output,
  resource,
  setClassMetadata,
  setMonth,
  signal,
  sl,
  unique,
  untracked,
  viewChild,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
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
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-SMKVCUEU.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/assets/src/lib/parking-assets.fn.ts
var PARKING_CATEGORY_NAME = "_PARKING_";
var PARKING_TYPE_NAME = "_PARKING_SPACES_";
var _parking_type_id = null;
var _parking_type_id_promise = null;
var _hidden_categories_promise = null;
var _types_for_category_promises = /* @__PURE__ */ new Map();
function normalise_name(name = "") {
  return name.trim().toLowerCase();
}
async function query_hidden_categories() {
  if (!_hidden_categories_promise) {
    _hidden_categories_promise = cl({
      hidden: true,
      limit: 500
    }).then((_) => _.data).catch(() => []);
  }
  return _hidden_categories_promise;
}
async function query_types_for_category(category_id) {
  if (!_types_for_category_promises.has(category_id)) {
    _types_for_category_promises.set(category_id, sl({ category_id, limit: 500 }).then((_) => _.data).catch(() => []));
  }
  return _types_for_category_promises.get(category_id);
}
function reset_hidden_categories_cache() {
  _hidden_categories_promise = null;
}
function reset_types_cache(category_ids) {
  category_ids.forEach((category_id) => _types_for_category_promises.delete(category_id));
}
async function query_types_for_categories(category_ids) {
  const list = await Promise.all(category_ids.map((category_id) => query_types_for_category(category_id)));
  return list.flat();
}
async function ensure_hidden_category(name) {
  let category = findOldestByName(await query_hidden_categories(), name);
  if (category)
    return category;
  reset_hidden_categories_cache();
  category = findOldestByName(await query_hidden_categories(), name);
  if (category)
    return category;
  try {
    const category2 = await saveAssetCategory({
      name,
      hidden: true
    });
    reset_hidden_categories_cache();
    return category2;
  } catch (error) {
    reset_hidden_categories_cache();
    category = findOldestByName(await query_hidden_categories(), name);
    if (category)
      return category;
    throw error;
  }
}
async function move_type_to_category(type, category_id, name) {
  if (type.category_id === category_id && normalise_name(type.name) === normalise_name(name)) {
    return type;
  }
  try {
    const updated_type = await saveAssetType({
      id: type.id,
      name,
      brand: type.brand || "PlaceOS",
      category_id
    });
    reset_types_cache([category_id]);
    return updated_type;
  } catch (error) {
    reset_types_cache([category_id]);
    const types = await query_types_for_category(category_id);
    const existing_type = findOldestByName(types, name);
    if (existing_type)
      return existing_type;
    throw error;
  }
}
async function ensure_type(category_id, name, legacy_category_ids = []) {
  let type = findOldestByName(await query_types_for_categories([
    category_id,
    ...legacy_category_ids.filter((_) => _ !== category_id)
  ]), name);
  if (type)
    return move_type_to_category(type, category_id, name);
  try {
    const type2 = await saveAssetType({
      name,
      brand: "PlaceOS",
      category_id
    });
    reset_types_cache([category_id]);
    return type2;
  } catch (error) {
    reset_types_cache([category_id, ...legacy_category_ids]);
    type = findOldestByName(await query_types_for_categories([
      category_id,
      ...legacy_category_ids.filter((_) => _ !== category_id)
    ]), name);
    if (type)
      return move_type_to_category(type, category_id, name);
    throw error;
  }
}
async function bootstrap_asset_type(type_name) {
  const category = await ensure_hidden_category(PARKING_CATEGORY_NAME);
  const type = await ensure_type(category.id, type_name);
  return type.id;
}
function resolveParkingTypeId() {
  if (_parking_type_id)
    return Promise.resolve(_parking_type_id);
  if (!_parking_type_id_promise) {
    _parking_type_id_promise = _bootstrapParkingType().then((id) => {
      _parking_type_id = id;
      return id;
    });
  }
  return _parking_type_id_promise;
}
async function _bootstrapParkingType() {
  return bootstrap_asset_type(PARKING_TYPE_NAME);
}
async function queryParkingSpacesForZones(zone_ids) {
  if (!zone_ids?.length)
    return [];
  const type_id = await resolveParkingTypeId();
  const results = await Promise.all(zone_ids.map((zone_id) => Zh({ zone_id, type_id, limit: 500 }).then((_) => _.data)));
  return flatten(results);
}
var PARKING_USER_TYPE_NAME = "_PARKING_USERS_";
var _parking_user_type_id = null;
var _parking_user_type_id_promise = null;
function resolveParkingUserTypeId() {
  if (_parking_user_type_id)
    return Promise.resolve(_parking_user_type_id);
  if (!_parking_user_type_id_promise) {
    _parking_user_type_id_promise = _bootstrapParkingUserType().then((id) => {
      _parking_user_type_id = id;
      return id;
    });
  }
  return _parking_user_type_id_promise;
}
async function _bootstrapParkingUserType() {
  return bootstrap_asset_type(PARKING_USER_TYPE_NAME);
}
function toParkingUser(asset) {
  const data = asset.other_data || {};
  return {
    id: asset.id,
    name: asset.identifier || "",
    email: data.email || "",
    car_model: data.car_model || "",
    car_colour: data.car_colour || "",
    plate_number: data.plate_number || "",
    phone: data.phone || "",
    notes: asset.notes || "",
    deny: String(data.deny) === "true",
    special_needs: String(data.special_needs) === "true"
  };
}
async function queryParkingUsers(zone_id) {
  const type_id = await resolveParkingUserTypeId();
  const assets = await Zh({ zone_id, type_id, limit: 500 });
  return assets.data.map(toParkingUser);
}

// libs/bookings/src/lib/booking-link-modal.component.ts
var BookingLinkModalComponent = class _BookingLinkModalComponent {
  constructor() {
    this._event = inject(MAT_DIALOG_DATA);
    this._settings = inject(SettingsService);
    this.outlook_link = generateMicrosoftCalendarLink(this._event);
    this.google_link = generateGoogleCalendarLink(this._event);
    this.ical_link = generateCalendarFileLink(this._event);
  }
  static {
    this.\u0275fac = function BookingLinkModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookingLinkModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingLinkModalComponent, selectors: [["booking-link-modal"]], decls: 26, vars: 24, consts: [[1, "w-full", "p-4", "pb-2"], [1, "relative", "flex", "flex-col", "items-center", "space-y-4", "p-4"], ["btn", "", "matRipple", "", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded-sm", "p-2", "pr-4", 3, "href"], ["src", "assets/icons/outlook.svg", 1, "w-6"], ["src", "assets/icons/gcal.svg", 1, "w-6"], [1, "text-xl"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "top-2", "right-0"]], template: function BookingLinkModalComponent_Template(rf, ctx) {
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
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      TranslatePipe,
      SafePipe,
      SanitizePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=booking-link-modal.component.css.map */"] });
  }
};
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
                class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
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
                class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
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
                class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                [href]="ical_link | safe: 'url'"
                target="_blank"
                rel="noopener noreferer"
            >
                <icon class="text-xl">download</icon>
                <span>{{ 'BOOKING.LINK_ICAL' | translate }}</span>
            </a>
        </div>
        <button icon matRipple mat-dialog-close class="absolute top-2 right-0">
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
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 4)(15, "label");
    \u0275\u0275text(16, " Are you unwell or experiencing any cold or flu-like symptoms?");
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-radio-group", 5)(20, "mat-radio-button", 6);
    \u0275\u0275text(21, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "mat-radio-button", 6);
    \u0275\u0275text(23, "No");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 7)(25, "label");
    \u0275\u0275text(26, " Have you had contact with anyone with suspected COVID-19?");
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "mat-radio-group", 5)(30, "mat-radio-button", 6);
    \u0275\u0275text(31, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-radio-button", 6);
    \u0275\u0275text(33, "No");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "footer", 8)(35, "button", 9);
    \u0275\u0275listener("click", function DeskQuestionsModalComponent_Conditional_0_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275text(36, "Submit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "button", 10)(38, "icon");
    \u0275\u0275text(39, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("formField", ctx_r1.form.travelled);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("value", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", false);
    \u0275\u0275advance(7);
    \u0275\u0275property("formField", ctx_r1.form.unwell);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("value", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", false);
    \u0275\u0275advance(7);
    \u0275\u0275property("formField", ctx_r1.form.contact);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("value", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", false);
  }
}
function DeskQuestionsModalComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 1)(1, "p", 3);
    \u0275\u0275text(2, " Your request to work from the office has been rejected based on your response to the compulsory Covid-19 questions. Please feel free to submit a new request when circumstances change in a way that changes your answer to the questions. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 10)(4, "icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
}
var DeskQuestionsModalComponent = class _DeskQuestionsModalComponent {
  constructor() {
    this.event = new EventEmitter();
    this.model = signal(
      {
        travelled: false,
        unwell: false,
        contact: false
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model);
    this.failure = signal(
      false,
      ...ngDevMode ? [{ debugName: "failure" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  submit() {
    this.form().markAsTouched();
    if (Object.values(this.model()).find((value) => value === true || value === "true")) {
      this.failure.set(true);
      return;
    }
    this.event.emit({ reason: "done" });
  }
  static {
    this.\u0275fac = function DeskQuestionsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskQuestionsModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskQuestionsModalComponent, selectors: [["desk-question-modal"]], outputs: { event: "event" }, decls: 2, vars: 1, consts: [[1, "relative"], ["failure", "", 1, "relative", "pt-8"], [1, "p-4", "text-xl"], [1, "p-4"], [1, "mb-4", "flex", "flex-col"], [1, "space-x-2", 3, "formField"], [3, "value"], [1, "flex", "flex-col"], [1, "flex", "items-center", "justify-center", "p-2"], ["btn", "", "matRipple", "", 3, "click"], ["close", "", "icon", "", "matRipple", "", "mat-dialog-close", ""]], template: function DeskQuestionsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, DeskQuestionsModalComponent_Conditional_0_Template, 40, 9, "div", 0)(1, DeskQuestionsModalComponent_Conditional_1_Template, 6, 0, "main", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.failure() ? 0 : 1);
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
      FormField
    ], styles: ["\nmain[_ngcontent-%COMP%] {\n  width: 24rem;\n  max-width: calc(100vw - 4.5rem);\n}\n[close][_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n}\n/*# sourceMappingURL=desk-questions-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskQuestionsModalComponent, [{
    type: Component,
    args: [{ selector: "desk-question-modal", template: `
        @if (!failure()) {
            <div class="relative">
                <h2 class="p-4 text-xl">COVID-19 Questionnaire</h2>
                <main class="p-4">
                    <div class="mb-4 flex flex-col">
                        <label>
                            Have you travelled overseas within the last 14
                            days?<span>*</span>
                        </label>
                        <mat-radio-group
                            [formField]="form.travelled"
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
                            [formField]="form.unwell"
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
                            [formField]="form.contact"
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
      FormField
    ], styles: ["/* angular:styles/component:css;c7f37c1e60a5fae4a31dda6fbae0d3cc845b39f17b3f09824fe872f6bf4e7f79;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/desk-questions-modal.component.ts */\nmain {\n  width: 24rem;\n  max-width: calc(100vw - 4.5rem);\n}\n[close] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n}\n/*# sourceMappingURL=desk-questions-modal.component.css.map */\n"] }]
  }], null, { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskQuestionsModalComponent, { className: "DeskQuestionsModalComponent", filePath: "libs/bookings/src/lib/desk-questions-modal.component.ts", lineNumber: 111 });
})();

// libs/payments/src/lib/card-input-field.component.ts
var _c0 = ["input"];
function CardInputFieldComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", "assets/icons/" + ctx_r0.card_type() + ".svg", \u0275\u0275sanitizeUrl);
  }
}
function CardInputFieldComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275property("value", item_r2[0]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", item_r2[1], " (", item_r2[0], ") ");
  }
}
function CardInputFieldComponent_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275property("value", item_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3);
  }
}
var BLANK_CARD = { card_number: "                ", cardholder: "", cvv: "" };
var DATE_PIPE = new DatePipe("en-us", "");
var CardInputFieldComponent = class _CardInputFieldComponent extends AsyncHandler {
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
    this._index = signal(
      0,
      ...ngDevMode ? [{ debugName: "_index" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._card_number = signal(
      BLANK_CARD.card_number,
      ...ngDevMode ? [{ debugName: "_card_number" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.card_focused = signal(
      false,
      ...ngDevMode ? [{ debugName: "card_focused" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._input_el = viewChild.required("input");
    this.is_amex = computed(
      () => {
        const no = this._card_number();
        return no.startsWith("3");
      },
      ...ngDevMode ? [{ debugName: "is_amex" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.card_type = computed(
      () => {
        const no = this._card_number();
        if (no.startsWith("3"))
          return "amex";
        if (no.startsWith("4"))
          return "visa";
        if (no.startsWith("5"))
          return "mastercard";
        return "";
      },
      ...ngDevMode ? [{ debugName: "card_type" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.card_display = computed(
      () => {
        let no = this._card_number();
        if (this.card_focused()) {
          const index = this._index();
          no = no.substring(0, index) + "\u2BD0" + no.substring(index + 1);
        }
        return this.is_amex() ? `${no.substring(0, 4)}-${no.substring(4, 10)}-${no.substring(10)}` : `${no.substring(0, 4)}-${no.substring(4, 8)}-${no.substring(8, 12)}-${no.substring(12)}`;
      },
      ...ngDevMode ? [{ debugName: "card_display" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
    this.setDisabledState = (s) => this.disabled = s;
  }
  ngOnInit() {
    this.subscription("changes", this.details.valueChanges.subscribe(() => this.timeout("update", () => {
      const value = this.details.getRawValue();
      this._card_number.set(value.card_number || "");
      this.setValue(value);
    })));
  }
  focusInput() {
    this._input_el().nativeElement.focus();
    this.card_focused.set(true);
    this._index.set(this._input_el().nativeElement.selectionStart || 0);
  }
  blurInput() {
    this.card_focused.set(false);
  }
  onInput(event) {
    if (!event || !this.card_focused())
      return;
    const idx = this._index();
    if (idx < 0 || idx > 16)
      return;
    let card_number = this.details.value.card_number;
    if ((event.code.startsWith("Digit") || event.code.startsWith("Numpad")) && idx < (this.is_amex() ? 15 : 16)) {
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
    this._index.set(Math.min(16, Math.max(0, idx + dir)));
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
    const details = value || BLANK_CARD;
    this._card_number.set(details.card_number || "");
    this.details.patchValue(details);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275CardInputFieldComponent_BaseFactory;
      return function CardInputFieldComponent_Factory(__ngFactoryType__) {
        return (\u0275CardInputFieldComponent_BaseFactory || (\u0275CardInputFieldComponent_BaseFactory = \u0275\u0275getInheritedFactory(_CardInputFieldComponent)))(__ngFactoryType__ || _CardInputFieldComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardInputFieldComponent, selectors: [["card-input-field"]], viewQuery: function CardInputFieldComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._input_el, _c0, 5);
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
    ]), \u0275\u0275InheritDefinitionFeature], decls: 43, vars: 4, consts: [["input", ""], [3, "keyup", "formGroup"], [1, "flex", "flex-col"], ["for", "card-number"], ["tabindex", "0", 1, "border-base-200", "focus-within:border-base-200", "relative", "mb-4", "flex", "h-12", "w-full", "items-center", "rounded-sm", "border", "p-2", "font-mono", "focus-within:shadow-sm", 3, "focus", "focusout"], [1, "flex-1"], ["type", "tel", "maxlength", "17", 1, "absolute", "hidden", 3, "keydown", "value"], [1, "h-8", 3, "src"], [1, "flex", "flex-1", "flex-col"], ["for", "cardholder"], ["appearance", "outline"], ["name", "cardholder", "matInput", "", "placeholder", "Mr John Smith", "formControlName", "cardholder"], [1, "flex", "items-center", "space-x-2"], [1, "flex", "w-1/4", "flex-1", "flex-col"], ["placeholder", "MM", "formControlName", "exp_month"], [3, "value"], ["placeholder", "YYYY", "formControlName", "exp_year"], ["for", "cvv"], ["appearance", "outline", 1, "w-20"], ["name", "cvv", "matInput", "", "formControlName", "cvv", "maxlength", "4"]], template: function CardInputFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "form", 1);
        \u0275\u0275listener("keyup", function CardInputFieldComponent_Template_form_keyup_0_listener($event) {
          return ctx.onInput($event);
        }, \u0275\u0275resolveWindow);
        \u0275\u0275elementStart(1, "div", 2)(2, "label", 3);
        \u0275\u0275text(3, "Card Number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275listener("focus", function CardInputFieldComponent_Template_div_focus_4_listener() {
          return ctx.focusInput();
        })("focusout", function CardInputFieldComponent_Template_div_focusout_4_listener() {
          return ctx.blurInput();
        });
        \u0275\u0275elementStart(5, "pre", 5);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "input", 6, 0);
        \u0275\u0275listener("keydown", function CardInputFieldComponent_Template_input_keydown_7_listener() {
          return false;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(9, CardInputFieldComponent_Conditional_9_Template, 1, 1, "img", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 8)(11, "label", 9);
        \u0275\u0275text(12, "Name on Card");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-form-field", 10);
        \u0275\u0275element(14, "input", 11);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(15, "mat-error");
        \u0275\u0275text(16, "Cardholder name is required");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 12)(18, "div", 13)(19, "label", 9);
        \u0275\u0275text(20, "Expiry Month");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "mat-form-field", 10)(22, "mat-select", 14);
        \u0275\u0275repeaterCreate(23, CardInputFieldComponent_For_24_Template, 2, 3, "mat-option", 15, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(25, "mat-error");
        \u0275\u0275text(26, "Expiry month is required");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "div", 13)(28, "label", 9);
        \u0275\u0275text(29, "Expiry Year");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "mat-form-field", 10)(31, "mat-select", 16);
        \u0275\u0275repeaterCreate(32, CardInputFieldComponent_For_33_Template, 2, 2, "mat-option", 15, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(34, "mat-error");
        \u0275\u0275text(35, "Expiry year is required");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "div", 2)(37, "label", 17);
        \u0275\u0275text(38, "CVV");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "mat-form-field", 18);
        \u0275\u0275element(40, "input", 19);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(41, "mat-error");
        \u0275\u0275text(42, "Invalid security code");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("formGroup", ctx.details);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.card_display());
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx.details.value.card_number?.trim());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.card_type() ? 9 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275control();
        \u0275\u0275advance(8);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.months);
        \u0275\u0275advance(8);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.years);
        \u0275\u0275advance(8);
        \u0275\u0275control();
      }
    }, dependencies: [MatFormFieldModule, MatFormField, MatError, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName], styles: ["\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25rem;\n}\n/*# sourceMappingURL=card-input-field.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardInputFieldComponent, [{
    type: Component,
    args: [{ selector: "card-input-field", template: `
        <form [formGroup]="details" (window:keyup)="onInput($event)">
            <div class="flex flex-col">
                <label for="card-number">Card Number</label>
                <div
                    tabindex="0"
                    class="border-base-200 focus-within:border-base-200 relative mb-4 flex h-12 w-full items-center rounded-sm border p-2 font-mono focus-within:shadow-sm"
                    (focus)="focusInput()"
                    (focusout)="blurInput()"
                >
                    <pre class="flex-1">{{ card_display() }}</pre>
                    <input
                        #input
                        class="absolute hidden"
                        type="tel"
                        [value]="details.value.card_number?.trim()"
                        (keydown)="(false)"
                        maxlength="17"
                    />
                    @if (card_type()) {
                        <img
                            [src]="'assets/icons/' + card_type() + '.svg'"
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
  }], null, { _input_el: [{ type: ViewChild, args: ["input", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardInputFieldComponent, { className: "CardInputFieldComponent", filePath: "libs/payments/src/lib/card-input-field.component.ts", lineNumber: 146 });
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
    \u0275\u0275text(9, "Your booking will cost:");
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
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 9, ctx_r1.details.amount / 100, ctx_r1.code()));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.card_details);
    \u0275\u0275control();
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
    \u0275\u0275textInterpolate1(" Ref #", ctx_r1.transaction_id(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 6, ctx_r1.details.amount / 100, ctx_r1.code()), " paid. ");
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
    \u0275\u0275conditional(!ctx_r1.success() ? 1 : 2);
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
var PaymentModalComponent = class _PaymentModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._org = inject(OrganisationService);
    this.event = output();
    this.details = this._data;
    this.loading = this._data.loading;
    this.card_details = signal(
      void 0,
      ...ngDevMode ? [{ debugName: "card_details" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.success = signal(
      false,
      ...ngDevMode ? [{ debugName: "success" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.transaction_id = signal(
      "12345678",
      ...ngDevMode ? [{ debugName: "transaction_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.code = computed(
      () => this._org.currency_code,
      ...ngDevMode ? [{ debugName: "code" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async processPayment() {
    const details = this.card_details();
    if (!details || !this._validCardDetails())
      return;
    this.event.emit(details);
    await this._data.makePayment(details);
    this.success.set(true);
  }
  _validCardDetails() {
    const details = this.card_details();
    return (details?.cardholder.length || 0) > 0 && (details?.cvv.length || 0) >= 3;
  }
  static {
    this.\u0275fac = function PaymentModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaymentModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentModalComponent, selectors: [["payment-modal"]], outputs: { event: "event" }, decls: 3, vars: 3, consts: [[1, "relative", "max-h-screen", "overflow-auto"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "p-8"], [1, "relative", "flex", "w-[24rem]", "flex-col", "items-center", "space-y-2", "px-4", "pt-8"], [1, "text-2xl", "font-medium"], ["src", "assets/icons/cost.svg", 1, "w-1/2"], [1, "pb-2", "text-center", "text-sm"], [1, "text-sm"], [1, "text-center", "text-lg", "font-medium"], [1, "w-full", 3, "ngModelChange", "ngModel"], [1, "p-4"], ["matRipple", "", 1, "w-full", 3, "click"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "top-1", "left-1"], [1, "material-symbols-rounded", "text-2xl"], [1, "relative", "flex", "w-[24rem]", "flex-col", "px-8", "pt-8"], [1, "mb-2", "text-xl", "font-medium"], ["src", "assets/icons/payment-confirmed.svg", 1, "w-full"], [1, "border-base-200", "border-t", "p-4"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "w-full"], ["diameter", "32"]], template: function PaymentModalComponent_Template(rf, ctx) {
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
      FormsModule,
      NgControlStatus,
      NgModel,
      CardInputFieldComponent,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      AsyncPipe,
      CurrencyPipe,
      DatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentModalComponent, [{
    type: Component,
    args: [{ selector: "payment-modal", template: `
        @if (!(loading | async)) {
            <div class="relative max-h-screen overflow-auto">
                @if (!success()) {
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
                        <p class="text-sm">Your booking will cost:</p>
                        <p class="text-center text-lg font-medium">
                            <strong>{{
                                details.amount / 100 | currency: code()
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
                        class="absolute top-1 left-1"
                    >
                        <i class="material-symbols-rounded text-2xl">close</i>
                    </button>
                } @else {
                    <main class="relative flex w-[24rem] flex-col px-8 pt-8">
                        <h2 class="text-2xl font-medium">Payment Successful</h2>
                        <h3 class="mb-2 text-xl font-medium">
                            Ref #{{ transaction_id() }}
                        </h3>
                        <p>
                            {{ details.amount / 100 | currency: code() }} paid.
                        </p>
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
                    <footer class="border-base-200 border-t p-4">
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
      FormsModule,
      CardInputFieldComponent,
      MatProgressSpinnerModule,
      MatRippleModule,
      MatDialogModule
    ] }]
  }], null, { event: [{ type: Output, args: ["event"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentModalComponent, { className: "PaymentModalComponent", filePath: "libs/payments/src/lib/payment-modal.component.ts", lineNumber: 131 });
})();

// libs/payments/src/lib/payments.service.ts
var STRIPE_MODULE = "Payment";
var PaymentsService = class _PaymentsService {
  constructor() {
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._dialog = inject(MatDialog);
    this._loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._active_card = signal(
      "",
      ...ngDevMode ? [{ debugName: "_active_card" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._payment_sources = signal(
      [],
      ...ngDevMode ? [{ debugName: "_payment_sources" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = this._loading.asReadonly();
    this.payment_sources = this._payment_sources.asReadonly();
    this.loadPaymentSources();
  }
  get enabled() {
    if (!this._org.module)
      return false;
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
        this._loading.set("");
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
    await new Promise((resolve) => ref.afterClosed().subscribe(() => resolve(null)));
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
    this._loading.set("Checking payment method...");
    console.log("Getting payment method...");
    const source = card_details ? await this._addPaymentMethod(card_details) : this._active_card();
    if (!source)
      throw "No payment source selected";
    this._loading.set("Processing payment...");
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
    this._loading.set("");
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
  async loadPaymentSources() {
    if (!this._org.module)
      return;
    const mod = this._org.module("payments", STRIPE_MODULE);
    const list = mod ? await mod.execute("list_payment_methods", ["card"]).catch(() => []) : [];
    if (list[0])
      this._active_card.set(list[0].id);
    this._payment_sources.set(list);
  }
  static {
    this.\u0275fac = function PaymentsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaymentsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PaymentsService, factory: _PaymentsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/bookings/src/lib/booking-form.service.ts
var BOOKING_TYPES = ["desk", "parking", "locker", "catering"];
var PERSISTED_BOOKING_CONTEXT_URLS = ["landing"];
var STORAGE_KEYS = {
  booking_form: "PLACEOS.booking_form",
  booking_form_options: "PLACEOS.booking_form_options",
  booking_form_filters: "PLACEOS.booking_form_filters",
  last_booked_booking: "PLACEOS.last_booked_booking",
  last_booked_count: "PLACEOS.last_booked_count",
  last_group_booking_ids: "PLACEOS.last_group_booking_ids",
  last_group_booking_errors: "PLACEOS.last_group_booking_errors"
};
function bookingOptionsMatch(a, b) {
  const keys = Array.from(/* @__PURE__ */ new Set([
    ...Object.keys(a),
    ...Object.keys(b)
  ]));
  return keys.every((key) => a[key] === b[key]);
}
var AVAILABILITY_SELECTION_FIELDS = /* @__PURE__ */ new Set([
  "resources",
  "booking_asset",
  "asset_id",
  "asset_name",
  "map_id",
  "name",
  "description",
  "zones"
]);
function availabilityFormMatch(a, b) {
  if (!a || !b)
    return a === b;
  const keys = /* @__PURE__ */ new Set([...Object.keys(a), ...Object.keys(b)]);
  return [...keys].every((key) => AVAILABILITY_SELECTION_FIELDS.has(key) || Object.is(a[key], b[key]));
}
function assetDateValue(date) {
  const date_value = date instanceof Date ? date.valueOf() : Number(date);
  return Number.isFinite(date_value) ? date_value : null;
}
function assetDurationValue(duration) {
  const duration_value = Number(duration);
  return Number.isFinite(duration_value) ? duration_value : null;
}
function assetWindowKey(date, duration) {
  const date_value = assetDateValue(date);
  const duration_value = assetDurationValue(duration);
  return date_value && duration_value ? `${date_value}:${duration_value}` : "";
}
var BOOKING_MODEL_KEYS = new Set(Object.keys(new Booking()));
var BOOKING_FORM_KEYS = new Set(Object.keys(bookingFormValue(new Booking())));
var BOOKING_EXTENSION_FIELD_BLACKLIST = /* @__PURE__ */ new Set([
  "resources",
  "assets",
  "level"
]);
function formExtensionData(data = {}) {
  const extra = {};
  for (const key in data) {
    if (BOOKING_FORM_KEYS.has(key) && !BOOKING_MODEL_KEYS.has(key) && !BOOKING_EXTENSION_FIELD_BLACKLIST.has(key)) {
      extra[key] = data[key];
    }
  }
  return extra;
}
function formBookingData(value) {
  const data = {};
  for (const key in value) {
    if (key === "extension_data") {
      data.extension_data = formExtensionData(value.extension_data);
    } else if (
      // `asset_ids` is spread into the form model from the booking being
      // edited and never updated when `asset_id` changes, so sending it
      // back would overwrite the new resource with the old one. The
      // `Booking` constructor rebuilds it from `asset_id`.
      key !== "asset_ids" && !BOOKING_EXTENSION_FIELD_BLACKLIST.has(key) && (BOOKING_FORM_KEYS.has(key) || BOOKING_MODEL_KEYS.has(key))
    ) {
      data[key] = value[key];
    }
  }
  return data;
}
function isCrossTypeEdit(booking, type) {
  return !!booking?.id && !!booking.booking_type && booking.booking_type !== type;
}
function buildBookingExtensionData(value, group_members) {
  const type = value.booking_type;
  return __spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadProps(__spreadValues(__spreadValues({}, formExtensionData(value.extension_data)), value.extension_data?.invoice ? {
    invoice: value.extension_data.invoice,
    invoice_id: value.extension_data.invoice_id
  } : {}), {
    // `group` is a getter on `Booking`, so the constructor skips the
    // top-level form value — it has to be set into `extension_data` here.
    group: value.group,
    // `assets` is ignored by the constructor's auto-copy, so map it here.
    assets: value.assets.map((_) => _.toJSON())
  }), type === "desk" ? {
    assigned_asset_id: value.asset_id,
    assigned_asset_name: value.asset_name || value.asset_id
  } : {}), type === "visitor" ? {
    international: !!value.international,
    visitor_name: value.asset_name || value.asset_id || ""
  } : {}), type === "parking" ? {
    requires_manual_approval: !!value.requires_manual_approval,
    user_groups: [
      ...value.user ? value.user.groups || [] : currentUser()?.groups || []
    ]
  } : {}), group_members.length ? { group_members } : {}), {
    department: value.user?.department || currentUser()?.department
  });
}
var BookingFormService = class _BookingFormService extends AsyncHandler {
  get last_count() {
    return parseInt(sessionStorage.getItem(STORAGE_KEYS.last_booked_count) || "1", 10);
  }
  set last_count(value) {
    sessionStorage.setItem(STORAGE_KEYS.last_booked_count, String(value));
  }
  /** Apply a partial patch to the booking form model. */
  _patch(value, _opts) {
    this.model.update((m) => __spreadValues(__spreadValues({}, m), value));
  }
  /**
   * The fields the user has actually edited, with their current values.
   *
   * Reads the signal-forms dirty flags rather than diffing against a
   * default. Programmatic writes (`_patch`, `model.set`) do not mark a field
   * dirty, so this returns genuine user input and nothing else — which is
   * what makes it safe to replay over a freshly loaded booking.
   */
  _userEditedValues() {
    const form2 = this.form;
    if (!form2)
      return {};
    const model = untracked(this.model);
    const edits = {};
    for (const key of Object.keys(model || {})) {
      const field = form2[key];
      if (typeof field !== "function")
        continue;
      try {
        if (field()?.dirty?.())
          edits[key] = model[key];
      } catch {
        continue;
      }
    }
    return edits;
  }
  /**
   * Stash the user's in-progress edits for the reset that is about to run.
   *
   * Merges rather than replaces. A flow resets twice in a row — `loadForm`
   * then `newForm` — and the first `form().reset()` clears the dirty flags
   * `_userEditedValues` reads, so a plain assignment would overwrite a real
   * capture with an empty one on the second call.
   */
  _captureUserEdits() {
    const edits = __spreadValues(__spreadValues({}, this._pending_user_edits || {}), this._userEditedValues());
    this._pending_user_edits = Object.keys(edits).length ? edits : null;
  }
  _syncAssetOptions() {
    const { date, duration } = untracked(this.model);
    const next_asset_window = assetWindowKey(date, duration);
    if (!next_asset_window || this._asset_window === next_asset_window) {
      return;
    }
    const date_value = assetDateValue(date);
    const duration_value = assetDurationValue(duration);
    if (!date_value || !duration_value)
      return;
    this._asset_window = next_asset_window;
    this._assets.setOptions({
      date: date_value,
      duration: duration_value
    });
  }
  _startNetwork() {
    this._network_requested = true;
    this._network_consumed.set(true);
  }
  get booking() {
    return this._booking();
  }
  /** Resolve with the resources for the current booking type once loaded */
  async listResources() {
    this._startNetwork();
    await this._whenSettled(this._resources_resource);
    return this.resources();
  }
  /** Resolve with the available resources for the current selection */
  async listAvailableResources() {
    this._startNetwork();
    const [resources] = await Promise.all([
      this.listResources(),
      this._whenSettled(this._booking_rules_resource)
    ]);
    return this._computeAvailableResources(this._options(), resources, this.booking_rules(), this.model());
  }
  /** Resolve once the given resource has finished loading */
  _whenSettled(ref) {
    return firstValueWhere(ref.isLoading, (loading) => !loading, this._injector);
  }
  /** Load the resource list for the given booking type */
  _loadResourcesForType(type) {
    switch (type) {
      case "desk":
        this._loading.set(i18n("BOOKINGS.DESKS_LOADING"));
        return this._finishResourceLoad(this.loadResourceList("desks"));
      case "parking":
        this._loading.set(i18n("BOOKINGS.PARKING_LOADING"));
        return this._finishResourceLoad(this.loadParkingResources());
      case "locker":
        this._loading.set(i18n("BOOKINGS.LOCKERS_LOADING"));
        return this._finishResourceLoad(this._loadLockerResources());
    }
    return Promise.resolve([]);
  }
  _finishResourceLoad(load) {
    return load.catch(() => []).then((list) => {
      this._loading.set("");
      return list;
    });
  }
  async _computeHasAssignedDesk(user_email = currentUser()?.email) {
    const buildings = this._org.building_list();
    if (!(buildings?.length > 0))
      return false;
    const email = user_email?.toLowerCase();
    if (!email)
      return false;
    const map_metadata = (meta) => (meta?.metadata?.desks?.details instanceof Array ? meta.metadata.desks.details : []).map((desk) => new Desk(__spreadProps(__spreadValues({}, desk), { zone: meta.zone })));
    const desk_lists = await Promise.all(buildings.map((building) => Ju(building.id, { name: "desks" }).then((data) => flatten(data.map(map_metadata))).catch(() => [])));
    return flatten(desk_lists).some((desk) => desk.assigned_to?.toLowerCase() === email);
  }
  /**
   * Whether the given user has a resource of `type` reserved (assigned) to
   * them. Only desk/parking/locker support assignment; any other type resolves
   * to `false` so it is never blocked by the reserved-resource restriction.
   */
  async _computeHasAssignedResource(type, user_email = currentUser()?.email) {
    if (type === "desk")
      return this._computeHasAssignedDesk(user_email);
    const email = user_email?.toLowerCase();
    if (!email)
      return false;
    const resources = await this._loadRawResourcesForType(type).catch(() => []);
    return resources.some((resource2) => resource2.assigned_to?.toLowerCase() === email);
  }
  /**
   * Load the resource list for `type` without the loading-message side effects
   * of `_loadResourcesForType`, so it can be used for background checks (e.g.
   * detecting an assigned resource during submission).
   */
  _loadRawResourcesForType(type) {
    switch (type) {
      case "parking":
        return this.loadParkingResources();
      case "locker":
        return this._loadLockerResources();
    }
    return Promise.resolve([]);
  }
  async _computeAvailableResources(options, resources, restrictions, raw) {
    const { all_day, user } = raw;
    let { date, duration } = raw;
    if (all_day) {
      ({ date, duration } = this._allDayTimeRange(date));
    }
    const favourites = this._favourites[options.type]?.() || [];
    const default_zone = (this._settings.get("app.use_region") ? this._org.region?.id : this._org.building?.id) || this._org.organisation.id;
    const zones = options.zones?.length ? options.zones.join(",") : options.zone_id || default_zone;
    let booked_ids = [];
    if (!Sn()) {
      booked_ids = await this._bookedResourceList({
        period_start: getUnixTime(date),
        period_end: getUnixTime(addMinutes(date, duration)),
        type: options.type,
        zones
      }, resources.length);
      if (options.type === "desk" && raw.recurrence_type && raw.recurrence_type !== "none") {
        const recurring_clashes = await this._recurringBookedResourceList(resources, zones, raw);
        booked_ids = unique([...booked_ids, ...recurring_clashes]);
      }
    }
    this._resource_use = {};
    for (const id of booked_ids) {
      this._resource_use[id] = " ";
    }
    return resources.filter((asset) => {
      const is_restricted = rulesForResource({
        date,
        duration,
        resource: asset,
        host: this._bookingRulesHost(user)
      }, restrictions[asset.zone?.id] || restrictions[asset.zone?.parent_id] || restrictions[this._org.building?.id] || []).hidden;
      const zone_filter = options.zones?.length ? options.zones.some((zone_id) => zone_id === asset.zone?.id || zone_id === asset.zone?.parent_id) : options.zone_id ? options.zone_id === asset.zone?.id || options.zone_id === asset.zone?.parent_id : true;
      return !is_restricted && (!options.show_fav || favourites.includes(asset.id)) && (!asset.groups?.length || asset.groups.some((grp) => currentUser().groups.includes(grp))) && asset.bookable !== false && (!options.features || options.features?.every((_) => asset.features.includes(_))) && zone_filter && !booked_ids.includes(asset.id);
    });
  }
  _bookedResourceList(query, resource_count) {
    const key = JSON.stringify(__spreadProps(__spreadValues({}, query), { resource_count }));
    const existing = this._booked_resource_requests.get(key);
    if (existing)
      return existing;
    const request = new Promise((resolve, reject) => {
      this._booked_resource_debounce.push({
        query,
        resource_count,
        resolve,
        reject
      });
      this.timeout("booked-resource", () => {
        const queue = this._booked_resource_debounce;
        this._booked_resource_debounce = [];
        const latest = queue[queue.length - 1];
        bookedResourceList(latest.query, latest.resource_count).then((result) => queue.forEach((item) => item.resolve(result)), (error) => queue.forEach((item) => item.reject(error)));
      });
    }).finally(() => this._booked_resource_requests.delete(key));
    this._booked_resource_requests.set(key, request);
    return request;
  }
  resourceUserName(id) {
    return this._resource_use[id];
  }
  get timezone() {
    const use_building_timezone = this.setting("use_building_timezone");
    return use_building_timezone ? this._org.building?.timezone || "" : "";
  }
  newForm(type, booking = new Booking({})) {
    if (!currentUserIsLoaded()) {
      currentUserLoaded().then(() => {
        this._captureUserEdits();
        this.newForm(type, booking);
      });
      return;
    }
    const user_edits = this._pending_user_edits;
    this._pending_user_edits = null;
    if (isCrossTypeEdit(booking, type))
      booking = new Booking({});
    this._startNetwork();
    this._calendar.loadCalendars();
    if (type !== this._options().type) {
      this._clearStoredForm();
    }
    this.setOptions({ type });
    this._asset_window = untracked(() => {
      const { date, duration } = this._assets.getOptions();
      return assetWindowKey(date, duration);
    });
    const initial_date = booking.date;
    const initial_duration = booking.duration;
    if (!booking.id) {
      booking.all_day = this.setting("all_day_default");
    }
    this.model.set(bookingFormValue(new Booking()));
    this.form().reset();
    this._patch(Vs(__spreadProps(__spreadValues(__spreadProps(__spreadValues({}, booking.extension_data), {
      attachments: bookingAttachments(booking)
    }), booking), {
      _in_progress: booking.state === "started" || booking.state === "in_progress",
      // `Booking` has no `user` object, only the flat `user_*`
      // fields, so the host has to be rebuilt from those. Without
      // it the form keeps the signed-in user and editing a
      // delegate booking reassigns the host on save.
      user: bookingHostUser(booking)
    }), [null, void 0, ""]), { emitEvent: false });
    if (user_edits && Object.keys(user_edits).length) {
      this._patch(user_edits, { emitEvent: false });
    }
    this.applyDurationSettings();
    this._syncAssetOptions();
    const form_change = effect(() => {
      this._form_value.set(this.model());
      this._syncAssetOptions();
      this.storeForm();
    }, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "form_change" } : (
      /* istanbul ignore next */
      {}
    )), { injector: this._injector }));
    this.subscription("form_change", {
      unsubscribe: () => form_change.destroy()
    });
    this._syncWindowIfUnchanged("date", initial_date, initial_duration, booking.date, booking.duration);
    this._booking.set(new Booking(booking));
    this._options.set({ type: this._options().type });
    this.storeForm();
    this.timeout("set-resource", async () => {
      const resources = this.model().resources;
      if (!resources?.length)
        return;
      const item_list = await this.listResources();
      const new_list = resources.map((asset) => item_list.find((_) => _.id == asset.id) || asset);
      this._patch({ resources: new_list });
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
    this._calendar = inject(CalendarService);
    this._injector = inject(Injector);
    this._options = signal(
      {
        type: "desk"
      },
      ...ngDevMode ? [{ debugName: "_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._booking = signal(
      null,
      ...ngDevMode ? [{ debugName: "_booking" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._resource_use = {};
    this._loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._favourites = {
      " ": settingSignal("favorites", [], true),
      room: settingSignal(SETTING_KEYS.FAVORITE_ROOMS, [], true),
      group: signal([]),
      desk: settingSignal(SETTING_KEYS.FAVORITE_DESKS, [], true),
      locker: settingSignal(SETTING_KEYS.FAVORITE_LOCKERS, [], true),
      parking: settingSignal(SETTING_KEYS.FAVORITE_PARKING_SPACES, [], true),
      staff: settingSignal("favorites", [], true),
      visitor: settingSignal("favorites", [], true),
      "group-event": settingSignal("favorites", [], true),
      "asset-request": settingSignal("favorites", [], true),
      "catering-order": settingSignal("favorites", [], true)
    };
    this._network_requested = false;
    this._network_consumed = signal(
      false,
      ...ngDevMode ? [{ debugName: "_network_consumed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._booked_resource_requests = /* @__PURE__ */ new Map();
    this._booked_resource_debounce = [];
    this._recurring_clash_requests = /* @__PURE__ */ new Map();
    this.last_success = new Booking(JSON.parse(sessionStorage.getItem(STORAGE_KEYS.last_booked_booking) || "{}"));
    this.loading = this._loading.asReadonly();
    this.options = this._options.asReadonly();
    this._form_ref = generateBookingForm(new Booking(), this._injector);
    this.form = this._form_ref.form;
    this.model = this._form_ref.model;
    this._asset_window = "";
    this.view = signal(
      "form",
      ...ngDevMode ? [{ debugName: "view" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._pending_user_edits = null;
    this._requests_ready = computed(
      () => {
        const region = this._org.active_region();
        const building = this._org.active_building();
        const overrides = this._settings.overrides();
        const required_overrides = (this._org.settings?.length || 0) + 2;
        return this._org.initialised() && (!this._org.regions.length || !!region?.id) && !!building?.id && // The override count can be satisfied by placeholder `{}` building
        // settings before `loadBuildingData` populates them, so also wait
        // for the active building's metadata to actually land. Otherwise
        // building/region-level settings (e.g. assigned_resource_booking)
        // read as their defaults during the load window.
        this._org.active_building_loaded() && overrides.length >= required_overrides;
      },
      ...ngDevMode ? [{ debugName: "_requests_ready" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._form_value = signal(
      null,
      ...ngDevMode ? [{ debugName: "_form_value" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._form_value_debounced = debounced(this._form_value, 500, {
      injector: this._injector,
      equal: availabilityFormMatch
    });
    this._resource_params = computed(
      () => {
        const building = this._org.active_building();
        if (!building?.id)
          return void 0;
        return { building: building.id, type: this._options().type };
      },
      ...ngDevMode ? [{ debugName: "_resource_params" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._resource_params_debounced = debounced(this._resource_params, 300, { injector: this._injector, equal: Object.is });
    this._resources_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_resources_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._network_consumed() && this._requests_ready() ? this._resource_params_debounced.value() : void 0,
      loader: ({ params }) => this._loadResourcesForType(params.type)
    }));
    this.resources = computed(
      () => {
        return this._resources_resource.value() ?? [];
      },
      ...ngDevMode ? [{ debugName: "resources" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.features = computed(
      () => {
        const list = [];
        for (const { features } of this.resources()) {
          features instanceof Array ? features.forEach((_) => list.push(_)) : null;
        }
        return unique(list).sort((a, b) => a.localeCompare(b));
      },
      ...ngDevMode ? [{ debugName: "features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._booking_rules_params = computed(
      () => {
        const list = this._org.building_list();
        const { type } = this._options();
        return list.length ? { ids: list.map((bld) => bld.id), type } : void 0;
      },
      ...ngDevMode ? [{ debugName: "_booking_rules_params" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._booking_rules_params_debounced = debounced(this._booking_rules_params, 300, { injector: this._injector, equal: Object.is });
    this._booking_rules_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_booking_rules_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._network_consumed() && this._requests_ready() ? this._booking_rules_params_debounced.value() : void 0,
      loader: ({ params }) => {
        const { ids, type } = params;
        return Promise.all(ids.map((id) => Wu(id, `${type}_booking_rules`))).then((building_rules) => {
          const mapping = {};
          for (const rules of building_rules) {
            mapping[rules.id] = rules.details instanceof Array ? rules.details : [];
          }
          return mapping;
        }).catch(() => ({}));
      }
    }));
    this.booking_rules = computed(
      () => {
        return this._booking_rules_resource.value() ?? {};
      },
      ...ngDevMode ? [{ debugName: "booking_rules" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._has_assigned_desk_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_has_assigned_desk_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        if (!this._network_consumed() || !this._requests_ready()) {
          return void 0;
        }
        const buildings = this._org.building_list();
        const email = currentUser()?.email;
        return buildings.length && email ? { buildings, email } : void 0;
      },
      loader: () => this._computeHasAssignedDesk()
    }));
    this.has_assigned_desk = computed(
      () => {
        return this._has_assigned_desk_resource.value() ?? false;
      },
      ...ngDevMode ? [{ debugName: "has_assigned_desk" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._available_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_available_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        if (!this._network_consumed() || !this._requests_ready()) {
          return void 0;
        }
        if (this._resources_resource.isLoading() || this._booking_rules_resource.isLoading()) {
          return void 0;
        }
        return {
          options: this._options(),
          resources: this.resources(),
          rules: this.booking_rules(),
          form: this._form_value_debounced.value()
        };
      },
      loader: ({ params: { options, resources, rules, form: form2 } }) => {
        const raw = form2;
        if (!(raw?.date > 0 && raw?.duration > 0)) {
          return Promise.resolve([]);
        }
        if (!resources.length)
          return Promise.resolve([]);
        this._loading.set(i18n("BOOKINGS.LOADING_AVAILABILITY", { type: options.type }));
        return this._computeAvailableResources(options, resources, rules, raw).catch(() => []).then((available) => {
          this._loading.set("");
          return available;
        });
      }
    }));
    this.available_resources = computed(
      () => {
        return this._available_resource.value() ?? [];
      },
      ...ngDevMode ? [{ debugName: "available_resources" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.grouped_availability = computed(
      () => {
        const options = this._options();
        const resource2 = this.available_resources();
        const groups = [];
        const asset_list = [...resource2].sort((a, b) => a.zone?.id?.localeCompare(b.zone?.id));
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
      },
      ...ngDevMode ? [{ debugName: "grouped_availability" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.subscription("router.bookings", this._router.events.subscribe((booking) => {
      const url = booking instanceof NavigationEnd ? booking.urlAfterRedirects || booking.url : "";
      if (booking instanceof NavigationEnd && !url.includes("book") && !BOOKING_TYPES.find((_) => url.includes(_)) && !PERSISTED_BOOKING_CONTEXT_URLS.find((_) => url.includes(_))) {
        this.clearForm();
      }
    }));
    this._org.waitUntilInitialised().then(() => this.setOptions({}));
    this._form_value.set(this.model());
    effect(() => {
      const overrides = this._settings.overrides();
      if (overrides?.length)
        this.applyDurationSettings();
    });
  }
  /** Push the current building's duration and bookable-hours settings into the time sync. */
  applyDurationSettings() {
    const handle = this._form_ref.time_sync;
    const period = this.setting("all_day_period");
    handle?.updateOptions({
      min_duration: this.setting("min_duration") ?? 30,
      max_duration: this.setting("max_duration") ?? 0,
      default_duration: this.setting("default_duration") ?? 60,
      custom_duration_options: this.setting("custom_duration_options") ?? [],
      bookable_hours: this.setting("bookable_hours") ?? null,
      timezone: this.timezone,
      all_day_start: period?.start,
      all_day_end: period?.end
    });
  }
  _allDayTimeRange(date) {
    const period = this.setting("all_day_period");
    return getAllDayTimeRange(date, this.timezone, period?.start, period?.end);
  }
  /**
   * Re-apply the supplied booking window after async form setup only if no
   * other consumer has already changed it.
   */
  _syncWindowIfUnchanged(timeout_name, initial_date, initial_duration, date, duration) {
    this.timeout(timeout_name, async () => {
      const window = this.model();
      if (window.date !== initial_date || window.duration !== initial_duration) {
        return;
      }
      this._patch({ date, duration });
    });
  }
  setView(value) {
    this.view.set(value);
  }
  setOptions(value) {
    const current = this._options();
    const next = __spreadValues(__spreadValues({}, current), value);
    if (bookingOptionsMatch(current, next))
      return;
    this._options.set(next);
  }
  setFeature(feature, enable) {
    if (!feature?.length)
      return;
    const features = this._options()?.features || [];
    if (enable && !features.includes(feature)) {
      this.setOptions({ features: [...features, feature] });
    }
    if (!enable && features.includes(feature)) {
      this.setOptions({
        features: features.filter((e) => e !== feature)
      });
    }
  }
  resetForm() {
    if (!currentUserIsLoaded()) {
      currentUserLoaded().then(() => this.resetForm());
      return;
    }
    if (!sessionStorage.getItem(STORAGE_KEYS.booking_form)) {
      return this.newForm(this._options().type);
    }
    const booking = this._booking();
    this.model.set(__spreadProps(__spreadValues({}, bookingFormValue(new Booking())), {
      user: currentUser(),
      booked_by: currentUser()
    }));
    this.form().reset();
    this._patch(Vs(__spreadProps(__spreadValues(__spreadValues({}, booking || {}), booking?.extension_data || {}), {
      attachments: bookingAttachments(booking),
      user: bookingHostUser(booking),
      _in_progress: booking?.state === "started"
    }), [null, void 0, ""]));
    this._options.set({ type: this._options().type });
  }
  clearForm() {
    this._clearStoredForm();
    this.newForm(this._options().type);
  }
  _clearStoredForm() {
    sessionStorage.removeItem(STORAGE_KEYS.booking_form);
    sessionStorage.removeItem(STORAGE_KEYS.booking_form_options);
    sessionStorage.removeItem(STORAGE_KEYS.booking_form_filters);
  }
  storeForm() {
    sessionStorage.setItem(STORAGE_KEYS.booking_form, JSON.stringify(__spreadValues(__spreadValues({}, this._booking()), Vs(__spreadValues({}, this.model()), [null, void 0, ""]))));
    sessionStorage.setItem(STORAGE_KEYS.booking_form_filters, JSON.stringify(this._options() || {}));
  }
  loadForm(expected_type) {
    if (!currentUserIsLoaded()) {
      currentUserLoaded().then(() => this.loadForm(expected_type));
      return;
    }
    this._captureUserEdits();
    const user_edits = this._pending_user_edits;
    queueMicrotask(() => this._pending_user_edits = null);
    this._startNetwork();
    this._calendar.loadCalendars();
    const data = JSON.parse(sessionStorage.getItem(STORAGE_KEYS.booking_form) || "{}");
    const booking = new Booking(data);
    if (expected_type && isCrossTypeEdit(booking, expected_type)) {
      return this.newForm(expected_type);
    }
    const initial_date = booking.date;
    const initial_duration = booking.duration;
    this.setOptions(__spreadValues({}, JSON.parse(sessionStorage.getItem(STORAGE_KEYS.booking_form_filters) || "{}")));
    this._booking.set(booking);
    this.model.set(__spreadProps(__spreadValues({}, bookingFormValue(new Booking())), {
      user: currentUser(),
      booked_by: currentUser()
    }));
    this.form().reset();
    const booking_data = Vs(__spreadProps(__spreadValues(__spreadValues(__spreadValues({}, data), booking || {}), booking?.extension_data || {}), {
      attachments: bookingAttachments(booking),
      user: bookingHostUser(booking),
      _in_progress: booking?.state === "started"
    }), [null, void 0, ""]);
    this._patch(booking_data, { emitEvent: false });
    if (user_edits && Object.keys(user_edits).length) {
      this._patch(user_edits, { emitEvent: false });
    }
    this.applyDurationSettings();
    this._form_value.set(this.model());
    this._syncAssetOptions();
    this.storeForm();
    this._syncWindowIfUnchanged("load-date", initial_date, initial_duration, booking.date, booking.duration);
    this.setOptions(__spreadValues({}, JSON.parse(sessionStorage.getItem(STORAGE_KEYS.booking_form_filters) || "{}")));
  }
  clearOldState() {
    sessionStorage.removeItem(STORAGE_KEYS.last_booked_booking);
    sessionStorage.removeItem(STORAGE_KEYS.last_booked_count);
    this._loading.set("");
    this.last_success = new Booking();
  }
  openBookingLinkModal(force = false) {
    this.form().markAsTouched();
    if (!this.form().valid() && !force)
      return;
    const event = new Booking(__spreadValues(__spreadValues({}, this.booking), this.model()));
    this._dialog.open(BookingLinkModalComponent, { data: event });
  }
  async confirmPost() {
    await this.checkQuestions();
    const options = this._options();
    const value = this.model();
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
        notifyError(this._error_message(_));
        details.close();
        throw _;
      });
    } else
      await this.postForm().catch((_) => {
        notifyError(this._error_message(_));
        details.close();
        throw _;
      });
    details.close();
  }
  async postForm(ignore_check = false, reset_form = true) {
    if (!this.form)
      throw "No form for booking";
    if (isEmptyUser(this.model().user)) {
      this._patch({ user: currentUser(), booked_by: currentUser() });
    }
    if (this.model().all_day && this.model().date) {
      const { date, duration, date_end } = this._allDayTimeRange(this.model().date);
      this._patch({ date, duration, date_end });
    }
    if (!this.form().valid()) {
      const invalid_fields = getInvalidSignalFields(this.form, this.model, this._invalid_field_mappings());
      throw i18n("FORM.INVALID_FIELDS", {
        field_list: invalid_fields.join(", ")
      });
    }
    this._patch({
      booking_type: this.model().booking_type || this._options().type
    });
    localStorage.removeItem("PLACEOS.last_group_booking_ids");
    const value = this.model();
    const effective_timezone = this.timezone || value.timezone;
    const booking = this._booking() || new Booking();
    const all_day_period = value.all_day ? this._allDayTimeRange(value.date) : {
      date: value.date,
      duration: value.duration,
      date_end: value.date_end
    };
    const bookable_hours = this.setting("bookable_hours");
    if (!isWithinBookableHours(value.date, bookable_hours, effective_timezone)) {
      throw i18n("FORM.BOOKABLE_HOURS_ERROR");
    }
    const host = value.user?.email || value.user_email || currentUser()?.email;
    const selected_booking_type = value.booking_type || this._options().type;
    if (ignore_check) {
      await this._checkAssignedResourceRestriction(host, selected_booking_type);
    } else {
      if (selected_booking_type !== "visitor") {
        await this._checkResourceAvailable(__spreadProps(__spreadValues(__spreadValues({}, booking), value), {
          user_email: host
        }), selected_booking_type);
      }
      await this._checkResourceRules(value.resources, all_day_period.date, all_day_period.duration, host);
      await this._checkRecurringClashes(__spreadProps(__spreadValues(__spreadValues({}, booking), value), {
        date: all_day_period.date,
        duration: all_day_period.duration,
        date_end: all_day_period.date_end,
        user_email: host,
        timezone: effective_timezone
      }), selected_booking_type);
    }
    if (this._payments.enabled) {
      const receipt = await this._payments.makePayment({
        type: this._options().type,
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
    const selected_zones = [
      ...value?.zones || [],
      ...value.booking_asset?.zones || []
    ].filter((_) => _);
    value.zones = unique(selected_zones.length ? selected_zones : [...this._booking()?.zones || []]);
    this._loading.set("Saving booking");
    delete value.booking_asset;
    value.timezone = effective_timezone;
    if (value.all_day) {
      value.date = all_day_period.date;
      value.duration = all_day_period.duration;
      value.date_end = all_day_period.date_end;
    }
    delete value.booking_start;
    delete value.booking_end;
    const { event_id, parent_id } = value;
    delete value.event_id;
    const resources = value.resources || [];
    const zone = this._org.levelWithID(resources[0]?.zone_id) || resources[0]?.zone;
    const zones = unique([
      this._org.organisation?.id,
      this._org.region?.id,
      ...zone && zone instanceof Object ? [zone.parent_id, zone.id] : [this._org.building?.id],
      ...value.zones || []
    ].filter((_) => _));
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
    const group_members = this._options().group && this._options().members?.length ? this.mapGroupMembers(value.booking_type, this._options().members) : [];
    const result = await saveBooking(new Booking(__spreadProps(__spreadValues({
      type: this._options().type
    }, formBookingData(value)), {
      description: value.booking_type === "visitor" ? value.description || value.title || value.asset_name : value.asset_name || value.description,
      user_id: value.user?.id ?? value.user_id,
      user_name: value.user?.name || value.user_name,
      user_email: value.user?.email || value.user_email,
      extension_data: buildBookingExtensionData(value, group_members),
      approved: this._settings.get("app.bookings.no_approval") === true,
      zones: unique([...zones, ...value.zones || []]).filter((_) => _)
    })).toJSON(), q).catch((e) => {
      this._loading.set("");
      const error = e?.error || e;
      if (e?.status) {
        if (typeof error === "object" && error !== null) {
          error.status = e.status;
        } else {
          if (this._isPermissionError(e))
            this._clearSavedHostChange();
          throw { message: error, status: e.status };
        }
      }
      if (this._isPermissionError(error))
        this._clearSavedHostChange();
      throw error;
    });
    if (value.assets?.length || booking.extension_data.assets?.length) {
      const requests = await validateAssetRequestsForResource(__spreadProps(__spreadValues({}, result), { from_booking: true }), {
        date: value.date,
        duration: value.duration,
        all_day: value.all_day,
        host: value.booked_by_email,
        zones
      }, value.assets).catch((e) => {
        console.error("Couldn't update asset requests", e);
        if (e?.status === 409) {
          notifyError(i18n("BOOKINGS.ASSETS_CLASH_ERROR"));
        }
        this._loading.set("");
        throw e?.error || e;
      });
      if (!requests)
        throw i18n("BOOKINGS.ASSETS_INVALID_ERROR");
      await requests();
    }
    this._loading.set("");
    const { booking_type } = value;
    if (reset_form) {
      this.clearForm();
      this._patch({ booking_type });
    }
    this.last_success = result;
    sessionStorage.setItem(STORAGE_KEYS.last_booked_booking, JSON.stringify(result));
    if (reset_form)
      this.setView("success");
    return result;
  }
  setting(key) {
    return this.settingForType(this._options().type, key);
  }
  /**
   * Resolve a setting for a specific booking type. Prefer this over `setting()`
   * when the relevant type is known (e.g. at submission), since this service is
   * a shared singleton and `setting()` resolves against whichever flow's
   * `_options().type` happens to be active.
   */
  settingForType(type, key) {
    return this._settings.get(`app.${type}.${key}`) ?? this._settings.get(`app.${type}s.${key}`) ?? this._settings.get(`app.bookings.${key}`);
  }
  /** Whether auto-allocation is enabled for the current booking type */
  get auto_allocation() {
    return !!this.setting("auto_allocation");
  }
  /**
   * Auto-allocate a desk from the active building.
   * Prefers desks with tags and homebase matching the user's groups, then
   * picks the level with the most available desks and selects one at random.
   */
  async autoAllocateDesk() {
    const available = await this.listAvailableResources();
    if (!available?.length) {
      throw i18n("BOOKINGS.DESK_AVAILABLE_ERROR");
    }
    const user_groups = currentUser()?.groups || [];
    const tag_matched = user_groups.length ? available.filter((asset) => asset.tags?.length && asset.tags.some((tag) => user_groups.includes(tag))) : [];
    const homebase_matched = user_groups.length ? available.filter((asset) => asset.homebase && user_groups.includes(asset.homebase)) : [];
    const both_matched = tag_matched.filter((asset) => asset.homebase && user_groups.includes(asset.homebase));
    const pool = both_matched.length ? both_matched : homebase_matched.length ? homebase_matched : tag_matched.length ? tag_matched : available;
    const zone_map = {};
    for (const asset of pool) {
      const zone_id = asset.zone?.id || "unknown";
      if (!zone_map[zone_id])
        zone_map[zone_id] = [];
      zone_map[zone_id].push(asset);
    }
    let best_zone_id = "";
    let best_count = 0;
    for (const zone_id in zone_map) {
      if (zone_map[zone_id].length > best_count) {
        best_count = zone_map[zone_id].length;
        best_zone_id = zone_id;
      }
    }
    const candidates = zone_map[best_zone_id];
    const selected = candidates[Math.floor(Math.random() * candidates.length)];
    const zone = selected.zone;
    this._patch({
      resources: [selected],
      asset_id: selected.id,
      asset_name: selected.name || selected.id,
      map_id: selected.map_id || selected.id,
      booking_asset: selected,
      zones: (zone ? unique([
        this._org.organisation.id,
        this._org.region?.id,
        zone.parent_id,
        zone.id
      ]) : [this._org.organisation.id, this._org.region?.id]).filter((_) => _)
    });
  }
  async postFormForGroup() {
    const { members, group, type } = this._options();
    if (!group)
      throw i18n("BOOKINGS.GROUP_NOT_SET");
    const rollback_on_group_error = this.setting("rollback_group_bookings") === true;
    localStorage.removeItem(STORAGE_KEYS.last_group_booking_errors);
    const member_list = members || [];
    const extra_members = member_list.filter((_) => _.email !== currentUser().email);
    if (extra_members.length <= 0)
      throw i18n("BOOKINGS.GROUP_NO_MEMBERS");
    const form2 = this.model();
    const group_members = unique([currentUser(), ...extra_members], "email");
    const resources = await this._resolveDeskGroupResources(group_members, form2);
    const unavailable_errors = [];
    const booking_failures = [];
    const available = await Promise.all(group_members.map(async (member, idx) => {
      const resource2 = resources[idx];
      if (!resource2) {
        const message = i18n("BOOKINGS.GROUP_MEMBER_NO_RESOURCE");
        unavailable_errors.push(`${member.name || member.email}: ${message}`);
        booking_failures.push({
          email: member.email,
          name: member.name || member.email,
          error: message
        });
        return false;
      }
      try {
        return await this._checkResourceAvailable(__spreadProps(__spreadValues({}, form2), {
          asset_id: resource2.id,
          user_email: member.email
        }), type);
      } catch (error) {
        const message = this._error_message(error);
        unavailable_errors.push(`${member.name || member.email}: ${message}`);
        booking_failures.push({
          email: member.email,
          name: member.name || member.email,
          asset_id: resource2.id,
          asset_name: resource2.name || resource2.id,
          error: message
        });
        return false;
      }
    }));
    const unavailable = group_members.filter((_, idx) => !available[idx]);
    const group_name = this._groupName();
    const group_error = i18n("BOOKINGS.GROUP_SOME_HAVE_BOOKINGS", {
      members: unavailable.map((_) => _.name || _.email)?.join(", ")
    });
    let user_booking = null;
    const booking_ids = [];
    const booking_errors = [];
    let parent_id = "";
    try {
      if (available.some((_) => _)) {
        const group_booking = await this.createGroupContainerBooking(form2, group_name, group_members, type);
        parent_id = group_booking.id;
        if (parent_id)
          booking_ids.push(parent_id);
      }
      for (let i = 0; i < group_members.length; i++) {
        if (!available[i])
          continue;
        const user = group_members[i];
        const asset = resources[i];
        const assets = user.email == currentUser().email ? form2.assets : [];
        const zones = unique([
          this._org.organisation?.id,
          this._org.region?.id,
          asset?.zone?.parent_id,
          asset?.zone?.id,
          ...form2.zones
        ].filter((_) => _));
        this._patch(__spreadProps(__spreadValues(__spreadProps(__spreadValues({}, form2), {
          assets,
          parent_id,
          user,
          user_email: user.email,
          user_id: user.id
        }), this._resourceFormData(asset)), {
          group: group_name,
          zones
        }));
        const bkn = await this.postForm(true, false).catch((error) => {
          const message = this._error_message(error);
          const error_message = `${user.name || user.email}: ${message}`;
          if (rollback_on_group_error)
            throw error_message;
          booking_errors.push(error_message);
          booking_failures.push({
            email: user.email,
            name: user.name || user.email,
            asset_id: asset.id,
            asset_name: asset.name || asset.id,
            error: message
          });
          return null;
        });
        if (bkn?.id)
          booking_ids.push(bkn.id);
        if (bkn?.user_email?.toLowerCase() === currentUser().email?.toLowerCase())
          user_booking = bkn;
      }
      if (unavailable.length) {
        const unavailable_error = unavailable_errors.length ? unavailable_errors.join("\n") : group_error;
        if (rollback_on_group_error) {
          await this.rollbackGroupBookings(booking_ids);
          throw unavailable_error;
        }
        notifyWarn(unavailable_error);
      }
      if (booking_errors.length) {
        notifyWarn(booking_errors.join("\n"));
      }
    } catch (error) {
      if (rollback_on_group_error && booking_ids.length) {
        await this.rollbackGroupBookings(booking_ids);
      }
      throw this._error_message(error);
    }
    if (user_booking) {
      this.last_success = user_booking;
      sessionStorage.setItem(STORAGE_KEYS.last_booked_booking, JSON.stringify(user_booking));
    }
    if (booking_ids.length > 1) {
      localStorage.setItem(STORAGE_KEYS.last_group_booking_ids, JSON.stringify(booking_ids));
    }
    if (booking_failures.length) {
      localStorage.setItem(STORAGE_KEYS.last_group_booking_errors, JSON.stringify(booking_failures));
    }
    this._finishGroupFlow(type);
    return user_booking;
  }
  async postFormForVisitorGroup() {
    const { members, group } = this._options();
    if (!group)
      throw i18n("BOOKINGS.GROUP_NOT_SET");
    if (!members?.length)
      throw i18n("BOOKINGS.GROUP_NO_MEMBERS");
    const rollback_on_group_error = this.setting("rollback_group_bookings") === true;
    const form2 = this.model();
    const group_name = this._groupName();
    const booking_ids = [];
    let parent_id = "";
    let first_booking = null;
    try {
      const group_booking = await this.createGroupContainerBooking(form2, group_name, members, "visitor");
      parent_id = group_booking.id;
      if (parent_id)
        booking_ids.push(parent_id);
      for (const visitor of members) {
        if (!visitor.email)
          continue;
        this._patch(this._visitorMemberPatch(visitor, form2, {
          id: "",
          parent_id,
          group_name
        }));
        const bkn = await this.postForm(true, false).catch((error) => {
          throw `${visitor.name || visitor.email}: ${this._error_message(error)}`;
        });
        if (bkn?.id)
          booking_ids.push(bkn.id);
        if (bkn?.id && !first_booking)
          first_booking = bkn;
      }
    } catch (error) {
      if (rollback_on_group_error && booking_ids.length) {
        await this.rollbackGroupBookings(booking_ids);
      }
      throw this._error_message(error);
    }
    this._finishGroupFlow("visitor");
    return first_booking;
  }
  async loadGroupSiblings(booking) {
    if (!booking?.id)
      return [];
    const parent_id = booking.parent_id || booking.id;
    const group_ref = `${booking.group || ""}`.trim();
    const legacy_group = `${booking.description || ""}`.startsWith("grp-") ? booking.description : "";
    const { type } = this._options();
    const list = await queryBookings({
      period_start: getUnixTime(booking.date),
      period_end: getUnixTime(addMinutes(booking.date, booking.duration)),
      type,
      include_booked_by: true
    });
    return list.filter((b) => b.id === parent_id || b.parent_id === parent_id || !!group_ref && `${b.group || ""}`.trim() === group_ref || !!legacy_group && b.description === legacy_group);
  }
  async loadGroupMembersForBooking(booking) {
    if (!booking?.id)
      return [];
    const type = this._options().type || booking.booking_type || "desk";
    const is_visitor = type === "visitor";
    const sibling_list = await this.loadGroupSiblings(booking);
    if (sibling_list.length) {
      return this.mapGroupMembersFromBookings(sibling_list, is_visitor);
    }
    return this.mapGroupMembersFromExtension(booking.extension_data?.group_members || [], is_visitor);
  }
  async editFormForGroup(existing_siblings) {
    const { members, type } = this._options();
    if (!members?.length)
      throw i18n("BOOKINGS.GROUP_NO_MEMBERS");
    const form2 = this.model();
    const base_form = __spreadProps(__spreadValues({}, form2), { id: "" });
    let parent_id = form2.parent_id || form2.id;
    const group_name = this._groupName(form2.group);
    const is_visitor = type === "visitor";
    const needs_group_container_parent = is_visitor && !form2.parent_id;
    const has_group_container_parent = !!form2.parent_id && !existing_siblings.some((s) => s.id === form2.parent_id);
    const sibling_map = {};
    for (const s of existing_siblings) {
      const key = is_visitor ? s.asset_id : s.user_email;
      if (key)
        sibling_map[key] = s;
    }
    const member_keys = new Set(members.map((m) => m.email));
    const to_delete = existing_siblings.filter((s) => {
      const key = is_visitor ? s.asset_id : s.user_email;
      return key && !member_keys.has(key);
    });
    await Promise.all(to_delete.map((s) => removeBooking(s.id)));
    const desk_resources = !is_visitor && type === "desk" ? await this._resolveDeskGroupResources(members, form2, [
      ...existing_siblings.filter((s) => !to_delete.find((item) => item.id === s.id))
    ]) : [];
    let first_result = null;
    try {
      if (needs_group_container_parent) {
        const group_booking = await this.createGroupContainerBooking(form2, group_name, members, type);
        parent_id = group_booking.id;
      } else if (has_group_container_parent) {
        await this.saveGroupContainerBooking(form2, group_name, members, type, parent_id);
      }
      for (let index = 0; index < members.length; index++) {
        const member = members[index];
        if (!member.email)
          continue;
        const existing = sibling_map[member.email];
        const booking_id = existing?.id || "";
        if (is_visitor) {
          this._patch(this._visitorMemberPatch(member, base_form, {
            id: booking_id,
            parent_id: booking_id === parent_id ? "" : parent_id,
            group_name,
            existing_zones: existing?.zones
          }));
        } else {
          const asset = desk_resources[index];
          this._patch(__spreadValues(__spreadProps(__spreadValues({}, base_form), {
            id: booking_id,
            parent_id: booking_id === parent_id ? "" : parent_id,
            group: group_name,
            user: member,
            user_email: member.email,
            user_id: member.id
          }), asset ? this._resourceFormData(asset) : {}));
        }
        const bkn = await this.postForm(true, false);
        if (!first_result)
          first_result = bkn;
      }
    } catch (error) {
      throw this._error_message(error);
    }
    this._finishGroupFlow(type);
    return first_result;
  }
  /** Build the group identifier, reusing an existing one when supplied. */
  _groupName(existing) {
    return existing || `${currentUser().email}[${format(Date.now(), "yyyy-MM-dd")}]`;
  }
  /** Form patch for a single visitor in a group flow. */
  _visitorMemberPatch(member, base_form, opts) {
    const member_name = member.name || member.email;
    return __spreadProps(__spreadValues({}, base_form), {
      id: opts.id,
      parent_id: opts.parent_id,
      group: opts.group_name,
      asset_id: member.email,
      asset_name: member_name,
      international: member.international || !!member.extension_data?.international,
      company: member.company || member.organisation,
      phone: member.phone,
      zones: unique([
        this._org.organisation?.id,
        this._org.region?.id,
        ...base_form.zones?.length ? base_form.zones : opts.existing_zones?.length ? opts.existing_zones : this._booking()?.zones || []
      ].filter((_) => _)),
      assets: [],
      attendees: [
        new User({
          name: member_name,
          email: member.email,
          organisation: member.company || member.organisation,
          phone: member.phone
        })
      ]
    });
  }
  /** Shared success tail for every group flow: reset, retag, show success. */
  _finishGroupFlow(booking_type) {
    this.clearForm();
    this._patch({ booking_type });
    this.setView("success");
  }
  _resourceFormData(asset) {
    return {
      resources: asset ? [asset] : [],
      booking_asset: asset || null,
      asset_id: asset?.id,
      asset_name: asset?.name || asset?.id,
      name: asset?.display_name || asset?.name || asset?.id,
      description: asset?.name || asset?.id,
      map_id: asset?.map_id || asset?.id,
      zones: (asset?.zone ? unique([
        this._org.organisation.id,
        this._org.region?.id,
        asset.zone?.parent_id,
        asset.zone?.id
      ]) : [this._org.organisation.id, this._org.region?.id]).filter((_) => _)
    };
  }
  async createGroupContainerBooking(form2, group_name, members, resource_type) {
    return this.saveGroupContainerBooking(form2, group_name, members, resource_type);
  }
  async saveGroupContainerBooking(form2, group_name, members, resource_type, id = "") {
    const group_members = this.mapGroupMembers(resource_type, members);
    const _a = form2, { group_members: _stale_group_members } = _a, form_data = __objRest(_a, ["group_members"]);
    const zones = unique([
      ...form2.zones || [],
      this._org.organisation.id,
      this._org.region?.id
    ].filter((_) => _));
    return saveBooking(new Booking(__spreadProps(__spreadValues({}, formBookingData(form_data)), {
      id,
      parent_id: "",
      asset_id: group_name,
      asset_name: "Group Booking",
      booking_type: "group",
      type: "group",
      description: form2.title || "Group Booking",
      title: form2.title || "Group Booking",
      user_name: form2.user?.name || form2.user_name,
      user_email: form2.user?.email || form2.user_email,
      user_id: form2.user?.id || form2.user_id,
      approved: this._settings.get("app.bookings.no_approval") === true,
      zones,
      extension_data: __spreadProps(__spreadValues({}, formExtensionData(form2.extension_data)), {
        group: group_name,
        group_members,
        group_resource_type: resource_type
      })
    })).toJSON()).catch((error) => {
      this._loading.set("");
      throw error;
    });
  }
  _error_message(error) {
    if (typeof error === "string")
      return error;
    if (error instanceof Error && error.message)
      return error.message;
    if (typeof error?.error === "string")
      return error.error;
    if (typeof error?.message === "string")
      return error.message;
    if (typeof error?.error?.message === "string") {
      return error.error.message;
    }
    return i18n("BOOKINGS.ERROR_GENERIC");
  }
  _isPermissionError(error) {
    const status = error?.status || error?.error?.status;
    if (status === 403)
      return true;
    const message = this._error_message(error).toLowerCase();
    return /forbidden|permission|authori[sz]ed|not permitted/.test(message);
  }
  _clearSavedHostChange() {
    const user = currentUser();
    if (!user)
      return;
    const host_data = {
      user,
      user_id: user.id,
      user_email: user.email,
      user_name: user.name
    };
    this._patch(host_data, { emitEvent: false });
    const saved_form = JSON.parse(sessionStorage.getItem(STORAGE_KEYS.booking_form) || "{}");
    sessionStorage.setItem(STORAGE_KEYS.booking_form, JSON.stringify(__spreadValues(__spreadValues({}, saved_form), host_data)));
  }
  _invalid_field_mappings() {
    const resource_label = this._resource_type_label();
    return {
      date: "Start Time",
      duration: "Duration",
      asset_id: resource_label
    };
  }
  _resource_type_label() {
    const form_booking_type = this.model().booking_type;
    const booking_type = form_booking_type && form_booking_type !== " " ? form_booking_type : this._options().type;
    switch (booking_type) {
      case "desk":
        return "Desk";
      case "parking":
        return "Parking Space";
      case "locker":
        return "Locker";
      case "room":
      case "group-event":
        return "Room";
      case "visitor":
        return "Visitor";
      default:
        return "Resource";
    }
  }
  mapGroupMembers(type, members = []) {
    const user_list = unique(type === "visitor" ? members || [] : [currentUser(), ...members || []], "email");
    return user_list.filter((member) => !!member?.email).map((member) => ({
      id: member.id || "",
      name: member.name || member.email,
      email: member.email,
      company: member.company || member.organisation || "",
      phone: member.phone || "",
      international: !!member.international || !!member.extension_data?.international
    }));
  }
  mapGroupMembersFromBookings(bookings = [], is_visitor = false) {
    return unique(bookings.map((booking) => {
      const group_member = (booking.extension_data?.group_members || []).find((member) => member?.email === booking.asset_id);
      return is_visitor ? new User({
        name: group_member?.name || booking.extension_data?.visitor_name || booking.asset_name || booking.asset_id,
        email: booking.asset_id,
        organisation: group_member?.company || booking.extension_data?.company,
        phone: group_member?.phone || booking.extension_data?.phone,
        extension_data: {
          international: !!(group_member?.international || booking.extension_data?.international)
        }
      }) : new User({
        id: booking.user_id,
        name: booking.user_name || booking.user_email,
        email: booking.user_email,
        organisation: booking.extension_data?.company,
        phone: booking.extension_data?.phone
      });
    }).filter((member) => !!member?.email), "email");
  }
  mapGroupMembersFromExtension(members = [], is_visitor = false) {
    return unique((members || []).filter((member) => !!member?.email).map((member) => new User({
      id: member.id || "",
      name: member.name || member.email,
      email: member.email,
      organisation: member.company || member.organisation || "",
      phone: member.phone || "",
      extension_data: __spreadProps(__spreadValues({}, member.extension_data || {}), {
        international: !!member.international
      }),
      international: is_visitor ? !!member.international : false
    })), "email");
  }
  async rollbackGroupBookings(booking_ids) {
    const rollback_errors = (await Promise.allSettled(booking_ids.map((id) => removeBooking(id)))).filter((_) => _.status === "rejected");
    if (rollback_errors.length) {
      console.error("Failed to rollback group bookings", rollback_errors);
    }
  }
  async checkQuestions() {
    if (this._settings.get("app.desks.ignore_questions") !== false)
      return;
    const ref = this._dialog.open(DeskQuestionsModalComponent);
    const result = await new Promise((resolve) => {
      const subs = [];
      const finish = (value) => {
        subs.forEach((s) => s.unsubscribe());
        resolve(value);
      };
      subs.push(ref.componentInstance.event.subscribe((event) => {
        if (event?.reason === "done")
          finish(event);
      }));
      subs.push(ref.afterClosed().subscribe((event) => finish(event)));
    });
    if (result?.reason !== "done")
      throw "User cancelled";
    const form2 = ref.componentInstance.model();
    for (const key in form2) {
      if (form2[key])
        throw "User failed questionaire";
    }
    ref.close();
  }
  assignedResourceBooking(type) {
    const setting = this.settingForType(type, "assigned_resource_booking");
    return setting === "allow" || setting === "deny" || setting === "other_only" ? setting : "other_only";
  }
  /**
   * Enforce the assigned-resource restriction for any assignable resource type
   * (desk/parking/locker).
   *
   * `other_only` is evaluated here at submission so the form remains available
   * for booking on behalf of others. `deny` blanket-blocks the form in the UI.
   */
  async _checkAssignedResourceRestriction(user_email, type) {
    const is_self = !user_email || user_email.toLowerCase() === currentUser()?.email?.toLowerCase();
    const setting = this.assignedResourceBooking(type);
    if (setting === "allow")
      return true;
    if (setting === "deny" && !is_self && await this._computeHasAssignedResource(type)) {
      throw `You have an assigned ${type} and cannot book another ${type}.`;
    }
    if (await this._computeHasAssignedResource(type, user_email)) {
      throw `${is_self ? "You have" : "This user has"} an assigned ${type} and cannot book another ${type}.`;
    }
    return true;
  }
  /** Check if the given resource is available for the selected user to book */
  async _checkResourceAvailable({ id, asset_id, date, duration, all_day, user_email }, type) {
    if (!user_email)
      throw i18n("BOOKINGS.NO_USER");
    if (type === "group-event")
      return true;
    await this._checkAssignedResourceRestriction(user_email, type);
    const period = all_day ? this._allDayTimeRange(date) : { date, date_end: date + duration * 60 * 1e3 };
    const bookings = await queryBookings({
      period_start: getUnixTime(period.date),
      period_end: getUnixTime(period.date_end),
      type,
      email: user_email,
      limit: 1e3
    });
    const active_bookings = bookings.filter((_) => _.status !== "declined" && _.status !== "cancelled" && !_.rejected);
    if (active_bookings.find((_) => _.asset_id === asset_id && id !== _.id)) {
      throw i18n(asset_id.includes("@") ? "BOOKINGS.VISITOR_BOOKED" : "BOOKINGS.RESOURCE_BOOKED", { name: asset_id });
    }
    const is_self = user_email.toLowerCase() === currentUser()?.email?.toLowerCase();
    if (this.assignedResourceBooking(type) !== "allow" && active_bookings.some((_) => _.id !== id && _.extension_data?.is_assigned)) {
      throw `${is_self ? "You have" : "This user has"} an assigned ${type} and cannot book another ${type}.`;
    }
    const allowed_bookings = this._settings.get(`app.bookings.allowed_daily_${type}_count`) ?? 1;
    if (allowed_bookings > 0 && active_bookings.filter((_) => _.user_email.toLowerCase() === (user_email || currentUser()?.email || "").toLowerCase() && _.id !== id).length >= allowed_bookings) {
      const current = user_email === currentUser()?.email;
      throw i18n(current ? "BOOKINGS.CLASH_CURRENT_USER" : "BOOKINGS.CLASH_OTHER_USER", { name: user_email });
    }
    return true;
  }
  async _checkResourceRules(assets, date, duration, host) {
    const user = await this._loadBookingRulesHost(host);
    if (!assets?.length)
      return true;
    await this._whenSettled(this._booking_rules_resource);
    const rules = this.booking_rules();
    const resource_rules = assets?.filter((s) => s?.zone)?.map((space) => {
      const bld = this._org.buildings.find((b) => space.zone?.parent_id === b.id);
      return rulesForResource({
        date,
        duration,
        host: new User(user),
        resource: space
      }, rules[bld?.id] || []);
    });
    if (!resource_rules.every((_) => !_.hidden)) {
      throw i18n("BOOKINGS.RULES_HIDDEN", { type: this._options().type || "resource" }, assets.length);
    }
    return true;
  }
  _useCurrentUserForBookingRules() {
    return this._settings.get("app.bookings.force_current_user_for_booking_rules") === true || this._settings.get("app.basic_user_search") === false;
  }
  _bookingRulesHost(user) {
    return this._useCurrentUserForBookingRules() ? currentUser() : user || currentUser();
  }
  async _loadBookingRulesHost(host) {
    const current_user = currentUser();
    if (this._useCurrentUserForBookingRules() || current_user.email === host) {
      return current_user;
    }
    return Na(host).catch(() => ({ email: host }));
  }
  /**
   * Check for clashing bookings in a recurring booking series
   * @param booking The booking to check for clashes
   * @param type The booking type
   * @returns true if no clashes or user confirmed to continue
   * @throws Error if first instance clashes or clashes not allowed
   */
  async _checkRecurringClashes(booking, type) {
    if (!booking.recurrence_type || booking.recurrence_type === "none") {
      return true;
    }
    const temp_booking = new Booking(__spreadProps(__spreadValues({}, booking), {
      booking_type: type
    }));
    const clashes = await findBookingClashes(temp_booking, {
      include_clash_time: true
    });
    if (!clashes?.length) {
      return true;
    }
    const sorted_clashes = [...clashes].sort((a, b) => a.booking_start - b.booking_start);
    const booking_start_unix = Math.floor(booking.date / 1e3);
    const first_clash = sorted_clashes[0];
    const is_first_instance_clash = first_clash.booking_start === booking_start_unix;
    if (is_first_instance_clash) {
      throw i18n("BOOKINGS.FIRST_INSTANCE_CLASH");
    }
    const allow_clashes = this.setting("allow_recurring_instance_clashes") ?? true;
    if (!allow_clashes) {
      throw i18n("BOOKINGS.RECURRING_CLASHES_NOT_ALLOWED", {
        count: clashes.length
      });
    }
    const result = await openRecurringClashModal({ clashes: sorted_clashes }, this._dialog);
    if (result?.reason !== "done") {
      throw "User cancelled";
    }
    return true;
  }
  async _recurringBookedResourceList(resources, zones, value) {
    const effective_timezone = this.timezone || value.timezone;
    const booking = new Booking(__spreadProps(__spreadValues({}, value), {
      booking_type: "desk",
      zones: [zones],
      asset_ids: resources.map((_) => _.id),
      timezone: effective_timezone
    }));
    const key = JSON.stringify({
      date: booking.date,
      duration: booking.duration,
      timezone: effective_timezone,
      recurrence_type: booking.recurrence_type,
      recurrence_end: booking.recurrence_end,
      zones,
      asset_ids: resources.map((_) => _.id)
    });
    const existing = this._recurring_clash_requests.get(key);
    if (existing)
      return existing;
    const request = findBookingClashes(booking).then((ids) => ids).catch(() => []).finally(() => this._recurring_clash_requests.delete(key));
    this._recurring_clash_requests.set(key, request);
    return request;
  }
  /** Load the locker resources for the active building or region */
  _loadLockerResources() {
    const use_region = this._settings.get("app.use_region");
    const scope_id = use_region ? this._org.region?.id : this._org.building?.id;
    return loadLockerResources(this._org, scope_id);
  }
  async loadParkingResources() {
    const use_region = this._settings.get("app.use_region");
    const levels = (use_region ? this._org.levelsForRegion() : this._org.levelsForBuilding()).filter((_) => _.tags.includes("parking"));
    const spaces = await queryParkingSpacesForZones(levels.map((l) => l.id));
    return spaces.map((s) => __spreadProps(__spreadValues({}, s), {
      id: s.id || s.map_id,
      groups: s.place_groups,
      zone: this._org.levelWithID([s.zone_id])
    }));
  }
  async loadResourceList(type) {
    const use_region = this._settings.get("app.use_region");
    const map_metadata = (_) => (_?.metadata[type]?.details instanceof Array ? _.metadata[type].details : []).map((d) => __spreadProps(__spreadValues({}, d), {
      id: d.id || d.map_id,
      zone: _.zone
    }));
    const id = use_region ? this._org.building?.parent_id : this._org.building?.id;
    if (!id)
      return [];
    if (use_region) {
      const id2 = this._org.building.parent_id;
      const buildings = this._org.buildings.filter((_) => _.parent_id === id2);
      const lists = await Promise.all(buildings.map((_) => Ju(_.id, { name: type }).then((data2) => flatten(data2.map(map_metadata)))));
      return flatten(lists);
    }
    const data = await Ju(this._org.building.id, {
      name: type
    });
    return flatten(data.map(map_metadata));
  }
  async _getNearbyResources(map_url, id, resources, count, reserved_ids = /* @__PURE__ */ new Set()) {
    const nearby_resources = [];
    let asset_list = resources.filter((_) => !this._resourceReserved(_, reserved_ids) && !this._resourceMatches(_, id));
    for (let i = 0; i < count; i++) {
      const item = await findNearbyFeature(map_url, id, asset_list.map((_) => _.map_id || _.id));
      if (item) {
        const resource2 = resources.find((_) => this._resourceMatches(_, item));
        if (!resource2 || this._resourceReserved(resource2, reserved_ids)) {
          asset_list = asset_list.filter((_) => !this._resourceMatches(_, item));
          continue;
        }
        nearby_resources.push(resource2);
        this._reserveResource(resource2, reserved_ids);
        asset_list = asset_list.filter((_) => !this._resourceMatches(_, item));
      }
    }
    return nearby_resources;
  }
  async _resolveDeskGroupResources(group_members, form2, existing_siblings = []) {
    const available_resources = await this.listAvailableResources();
    const all_resources = await this.listResources();
    const preferred_id = `${form2.map_id || form2.asset_id || ""}`;
    const existing_map = {};
    for (const booking of existing_siblings) {
      if (booking.user_email)
        existing_map[booking.user_email] = booking;
    }
    const selected_resource = this._findResourceById(available_resources, preferred_id);
    const preferred_resource = selected_resource || (existing_siblings.length ? this._findResourceById(all_resources, preferred_id) : null);
    if (!selected_resource && !existing_siblings.length) {
      throw i18n("BOOKINGS.DESK_AVAILABLE_ERROR");
    }
    const anchor_resource = preferred_resource || this._findResourceById(all_resources, existing_siblings[0]?.asset_id || "");
    const level = this._org.levelWithID([anchor_resource?.zone?.id]);
    if (!level?.map_id) {
      throw i18n("BOOKINGS.GROUP_MAP_UNAVAILABLE");
    }
    const reserved_ids = /* @__PURE__ */ new Set();
    const resolved = group_members.map((member) => {
      const booking = existing_map[member.email];
      const resource_id = member.email === currentUser().email ? preferred_id : booking?.asset_id || "";
      const resource2 = this._findResourceById(all_resources, resource_id) || this._findResourceById(available_resources, resource_id);
      if (!resource2 || this._resourceReserved(resource2, reserved_ids)) {
        return null;
      }
      this._reserveResource(resource2, reserved_ids);
      return resource2;
    });
    const missing_count = resolved.filter((_) => !_).length;
    const nearby_resources = missing_count ? await this._getNearbyResources(level.map_id, anchor_resource?.map_id || anchor_resource?.id || preferred_id, available_resources, missing_count, reserved_ids) : [];
    let available = resolved.filter((_) => !!_).length;
    let nearby_index = 0;
    const final_resources = resolved.map((resource2) => {
      if (resource2)
        return resource2;
      const next_resource = nearby_resources[nearby_index++];
      if (next_resource)
        available++;
      return next_resource || null;
    });
    if (final_resources.some((_) => !_)) {
      throw i18n("BOOKINGS.GROUP_INSUFFICIENT_RESOURCES", {
        available,
        members: group_members.length
      }, available);
    }
    return final_resources;
  }
  _findResourceById(resources, id) {
    return (resources || []).find((_) => this._resourceMatches(_, id));
  }
  _resourceMatches(resource2, id) {
    if (!resource2 || !id)
      return false;
    return resource2.id === id || resource2.map_id === id;
  }
  _resourceReserved(resource2, reserved_ids) {
    return !!(resource2 && (resource2.id && reserved_ids.has(resource2.id) || resource2.map_id && reserved_ids.has(resource2.map_id)));
  }
  _reserveResource(resource2, reserved_ids) {
    if (!resource2)
      return;
    if (resource2.id)
      reserved_ids.add(resource2.id);
    if (resource2.map_id)
      reserved_ids.add(resource2.map_id);
  }
  static {
    this.\u0275fac = function BookingFormService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookingFormService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BookingFormService, factory: _BookingFormService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingFormService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  queryParkingSpacesForZones,
  queryParkingUsers,
  DeskQuestionsModalComponent,
  BookingFormService
};
//# sourceMappingURL=chunk-B5AVIR2N.js.map
