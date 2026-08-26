import {
  FullscreenEmbedComponent
} from "./chunk-F277ZASO.js";
import {
  DateFieldComponent
} from "./chunk-MGKI6E3G.js";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger,
  UserSearchFieldComponent
} from "./chunk-LQQ4SHS4.js";
import "./chunk-W2CUMD5Q.js";
import {
  ParkingService
} from "./chunk-IOKTHD62.js";
import {
  BookingFormService
} from "./chunk-SD4VE6LK.js";
import {
  SettingsToggleComponent
} from "./chunk-5K5HESAP.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-4ZIGIBK3.js";
import "./chunk-YBV3VPEZ.js";
import {
  AsyncHandler,
  CdkScrollable,
  FormField,
  IconComponent,
  MatDialog,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule,
  MatSelect,
  MatSelectModule,
  MatSelectTrigger,
  OrganisationService,
  SafePipe,
  SanitizePipe,
  SettingsService,
  UploadsService,
  bookedResourceList,
  currentUser,
  generateCalendarFileLink,
  generateGoogleCalendarLink,
  generateMicrosoftCalendarLink,
  getUnixTime,
  queryBookings,
  settingSignal
} from "./chunk-4CSOAYF2.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  DefaultValueAccessor,
  FormsModule,
  Injector,
  Input,
  MatOption,
  MatRipple,
  MatRippleModule,
  NgControlStatus,
  NgModel,
  Pn,
  Router,
  RouterLink,
  RouterModule,
  TranslatePipe,
  addDays,
  addMinutes,
  computed,
  effect,
  endOfDay,
  getFormTimeSyncHandle,
  getInvalidSignalFields,
  getTimeInTimezone,
  inject,
  input,
  notifyError,
  randomString,
  roundToNearestMinutes,
  runInInjectionContext,
  setClassMetadata,
  signal,
  startOfDay,
  startOfDayInTimezone,
  startOfWeek,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-XUPR3QCE.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/workplace/src/app/book/parking-request-flow/parking-request-form-details.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ weeks: a0 });
function _forTrack0($index, $item) {
  return this.trackById($item);
}
var _forTrack1 = ($index, $item) => $item.index;
var _forTrack2 = ($index, $item) => $item.value;
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 21);
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 21);
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Conditional_21_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Conditional_21_For_6_Template_button_click_0_listener($event) {
      const day_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r2.toggleDay(day_r5.index));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("border-info", ctx_r2.isDaySelected(day_r5.index))("bg-info", ctx_r2.isDaySelected(day_r5.index))("text-info-content", ctx_r2.isDaySelected(day_r5.index))("border-base-300", !ctx_r2.isDaySelected(day_r5.index));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 9, day_r5.date, "EEE"), " ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Conditional_21_Conditional_7_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Conditional_21_Conditional_7_For_5_Template_button_click_0_listener($event) {
      const w_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r2.setNumWeeks(w_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const w_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("border-info", ctx_r2.num_weeks() === w_r7)("bg-info", ctx_r2.num_weeks() === w_r7)("text-info-content", ctx_r2.num_weeks() === w_r7)("border-base-300", ctx_r2.num_weeks() !== w_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 9, w_r7 === 1 ? "BOOKINGS.PARKING_FREQUENCY_WEEK" : "BOOKINGS.PARKING_FREQUENCY_WEEKS", \u0275\u0275pureFunction1(12, _c1, w_r7)), " ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Conditional_21_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 26);
    \u0275\u0275repeaterCreate(4, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Conditional_21_Conditional_7_For_5_Template, 3, 14, "button", 31, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "BOOKINGS.PARKING_FREQUENCY_NUM_WEEKS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.week_options());
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Conditional_21_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "div", 33);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, day_r8, "EEEE, d MMMM yyyy"), " ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 26);
    \u0275\u0275repeaterCreate(5, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Conditional_21_For_6_Template, 3, 12, "button", 27, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Conditional_21_Conditional_7_Template, 6, 3);
    \u0275\u0275elementStart(8, "div", 25);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 28);
    \u0275\u0275repeaterCreate(12, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Conditional_21_For_13_Template, 4, 4, "div", 29, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "BOOKINGS.PARKING_FREQUENCY_SELECT_DAYS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.WEEKDAY_OPTIONS);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.max_weeks() > 1 ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 5, "BOOKINGS.PARKING_FREQUENCY_DATES_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.weekdays);
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 19);
    \u0275\u0275listener("click", function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setBookingFrequency("single"));
    });
    \u0275\u0275elementStart(2, "div", 20);
    \u0275\u0275conditionalCreate(3, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Conditional_3_Template, 1, 0, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "div", 22);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 23);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 19);
    \u0275\u0275listener("click", function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Template_div_click_11_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setBookingFrequency("daily"));
    });
    \u0275\u0275elementStart(12, "div", 20);
    \u0275\u0275conditionalCreate(13, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Conditional_13_Template, 1, 0, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 12)(15, "div", 22);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 23);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Conditional_21_Template, 14, 7, "div", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-info", ctx_r2.booking_frequency() === "single")("border-base-300", ctx_r2.booking_frequency() !== "single");
    \u0275\u0275advance();
    \u0275\u0275classProp("border-info", ctx_r2.booking_frequency() === "single")("border-base-300", ctx_r2.booking_frequency() !== "single");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.booking_frequency() === "single" ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 23, "BOOKINGS.PARKING_FREQUENCY_SINGLE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 25, "BOOKINGS.PARKING_FREQUENCY_SINGLE_DESC"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("border-info", ctx_r2.booking_frequency() === "daily")("border-base-300", ctx_r2.booking_frequency() !== "daily");
    \u0275\u0275advance();
    \u0275\u0275classProp("border-info", ctx_r2.booking_frequency() === "daily")("border-base-300", ctx_r2.booking_frequency() !== "daily");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.booking_frequency() === "daily" ? 13 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 27, "BOOKINGS.PARKING_FREQUENCY_DAILY"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 29, "BOOKINGS.PARKING_FREQUENCY_DAILY_DESC"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.booking_frequency() === "daily" ? 21 : -1);
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_For_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 21);
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_For_19_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, type_r10.badge));
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275listener("click", function ParkingRequestFormDetailsComponent_Conditional_0_For_19_Template_div_click_0_listener() {
      const type_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setRequestType(type_r10.id));
    });
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275conditionalCreate(2, ParkingRequestFormDetailsComponent_Conditional_0_For_19_Conditional_2_Template, 1, 0, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 34)(5, "span", 22);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, ParkingRequestFormDetailsComponent_Conditional_0_For_19_Conditional_8_Template, 3, 3, "span", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 23);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const type_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("border-info", ctx_r2.model().request_type === type_r10.id)("border-base-300", ctx_r2.model().request_type !== type_r10.id);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-info", ctx_r2.model().request_type === type_r10.id)("border-base-300", ctx_r2.model().request_type !== type_r10.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.model().request_type === type_r10.id ? 2 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 12, type_r10.name));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(type_r10.badge ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 14, type_r10.description), " ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "h4", 25);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "a-user-search-field", 36);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "BOOKINGS.REQUEST_SPACE_FOR"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r2.form().user)("guests", ctx_r2.allow_any_host() || ctx_r2.can_book_for_anyone() && ctx_r2.host_book_as() !== "internals")("guests_only", !ctx_r2.allow_any_host() && ctx_r2.can_book_for_anyone() && ctx_r2.host_book_as() === "externals")("disable_search", !ctx_r2.allow_any_host() && ctx_r2.can_book_for_anyone() && ctx_r2.host_book_as() === "externals")("allow_externals", ctx_r2.allow_any_host() || ctx_r2.can_book_for_anyone() && ctx_r2.host_book_as() !== "internals");
    \u0275\u0275control();
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "label", 25);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 14);
    \u0275\u0275element(5, "textarea", 37);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "FORM.NOTES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r2.form().notes);
    \u0275\u0275control();
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_22_Conditional_30_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 51)(4, "button", 52);
    \u0275\u0275listener("click", function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_22_Conditional_30_For_2_Template_button_click_4_listener() {
      const $index_r13 = \u0275\u0275restoreView(_r12).$index;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.previewSupportingDoc($index_r13));
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 52);
    \u0275\u0275listener("click", function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_22_Conditional_30_For_2_Template_button_click_7_listener() {
      const $index_r13 = \u0275\u0275restoreView(_r12).$index;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.removeSupportingDoc($index_r13));
    });
    \u0275\u0275elementStart(8, "icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const file_name_r14 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", file_name_r14, " ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_22_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275repeaterCreate(1, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_22_Conditional_30_For_2_Template, 10, 1, "div", 49, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.supporting_doc_names());
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "icon");
    \u0275\u0275text(2, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 39)(7, "div")(8, "label", 40);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementStart(11, "span", 41);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "textarea", 42);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div")(16, "div", 43);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "label", 44)(20, "icon", 45);
    \u0275\u0275text(21, "upload_file");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div")(23, "div", 22);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 46);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "input", 47);
    \u0275\u0275listener("change", function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_22_Template_input_change_29_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onSupportingDocsSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(30, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_22_Conditional_30_Template, 3, 0, "div", 48);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 7, "BOOKINGS.P2_SPECIAL_NEEDS_DETAILS"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 9, "BOOKINGS.P2_REASON_FOR_REQUEST"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(14, 11, "BOOKINGS.P2_REASON_PLACEHOLDER"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 13, "BOOKINGS.P2_ATTACH_SUPPORTING_DOCS"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 15, "BOOKINGS.P2_UPLOAD_FILE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 17, "BOOKINGS.P2_ACCEPTED_FORMATS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.supporting_doc_names().length ? 30 : -1);
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const forced_time_r15 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(2, 3, ctx_r2.selected_request_type()?.name), ": ", \u0275\u0275pipeBind2(3, 5, ctx_r2.shiftTime(forced_time_r15.start_time), ctx_r2.time_format), " - ", \u0275\u0275pipeBind2(4, 8, ctx_r2.shiftTime(forced_time_r15.end_time), ctx_r2.time_format), " ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_31_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "date");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate2(" : ", \u0275\u0275pipeBind2(1, 2, ctx_r2.shiftTime(ctx_r2.all_day_shift_window().start_time), ctx_r2.time_format), " - ", \u0275\u0275pipeBind2(2, 5, ctx_r2.shiftTime(ctx_r2.all_day_shift_window().end_time), ctx_r2.time_format), " ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275conditionalCreate(3, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_31_Conditional_3_Template, 3, 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "BOOKINGS.PARKING_SHIFT_ALL_DAY"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.show_all_day_shift_window() ? 3 : -1);
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
  }
  if (rf & 2) {
    const option_r17 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(1, 3, option_r17.name), " (", \u0275\u0275pipeBind2(2, 5, ctx_r2.shiftTime(option_r17.start_time), ctx_r2.time_format), " - ", \u0275\u0275pipeBind2(3, 8, ctx_r2.shiftTime(option_r17.end_time), ctx_r2.time_format), ") ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(1, 3, "BOOKINGS.PARKING_SHIFT_CUSTOM"), " (", \u0275\u0275pipeBind2(2, 5, ctx_r2.shiftTime(ctx_r2.start_time_mins()), ctx_r2.time_format), " - ", \u0275\u0275pipeBind2(3, 8, ctx_r2.shiftTime(ctx_r2.end_time_mins()), ctx_r2.time_format), ") ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_2_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r18 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("value", option_r18.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(2, 4, option_r18.name), " (", \u0275\u0275pipeBind2(3, 6, ctx_r2.shiftTime(option_r18.start_time), ctx_r2.time_format), " - ", \u0275\u0275pipeBind2(4, 9, ctx_r2.shiftTime(option_r18.end_time), ctx_r2.time_format), ") ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("value", ctx_r2.CUSTOM_SHIFT_ID);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(2, 4, "BOOKINGS.PARKING_SHIFT_CUSTOM"), " (", \u0275\u0275pipeBind2(3, 6, ctx_r2.shiftTime(ctx_r2.custom_start_time_mins()), ctx_r2.time_format), " - ", \u0275\u0275pipeBind2(4, 9, ctx_r2.shiftTime(ctx_r2.custom_end_time_mins()), ctx_r2.time_format), ") ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 14)(4, "mat-select", 54);
    \u0275\u0275listener("selectionChange", function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_2_Template_mat_select_selectionChange_4_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setShiftType($event.value));
    });
    \u0275\u0275elementStart(5, "mat-select-trigger");
    \u0275\u0275conditionalCreate(6, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_2_Conditional_6_Template, 4, 11)(7, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_2_Conditional_7_Template, 4, 11);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(8, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_2_For_9_Template, 5, 12, "mat-option", 16, _forTrack0, true);
    \u0275\u0275conditionalCreate(10, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_2_Conditional_10_Template, 5, 12, "mat-option", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, "BOOKINGS.PARKING_SHIFT_TYPE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r2.shift_type());
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_6_0 = ctx_r2.selected_shift_option()) ? 6 : 7, tmp_6_0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.shift_options());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.allow_custom_shift() ? 10 : -1);
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "date");
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r19 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, "BOOKINGS.PARKING_SHIFT_TYPE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(5, 6, option_r19.name), " (", \u0275\u0275pipeBind2(6, 8, ctx_r2.shiftTime(option_r19.start_time), ctx_r2.time_format), " - ", \u0275\u0275pipeBind2(7, 11, ctx_r2.shiftTime(option_r19.end_time), ctx_r2.time_format), ") ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_4_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r21 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("value", opt_r21.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 2, ctx_r2.shiftTime(opt_r21.value), ctx_r2.time_format));
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_4_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r22 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("value", opt_r22.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 2, ctx_r2.shiftTime(opt_r22.value), ctx_r2.time_format));
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 12)(2, "label", 13);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-form-field", 14)(6, "mat-select", 54);
    \u0275\u0275listener("selectionChange", function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_4_Template_mat_select_selectionChange_6_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setStartTime($event.value));
    });
    \u0275\u0275repeaterCreate(7, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_4_For_8_Template, 3, 5, "mat-option", 16, _forTrack2);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 12)(10, "label", 13);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-form-field", 14)(14, "mat-select", 54);
    \u0275\u0275listener("selectionChange", function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_4_Template_mat_select_selectionChange_14_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setEndTime($event.value));
    });
    \u0275\u0275repeaterCreate(15, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_4_For_16_Template, 3, 5, "mat-option", 16, _forTrack2);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "FORM.TIME_START"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r2.start_time_mins());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.time_options());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 6, "FORM.TIME_END"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r2.end_time_mins());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.time_options());
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div");
    \u0275\u0275conditionalCreate(2, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_2_Template, 11, 6)(3, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_3_Template, 8, 14);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Conditional_4_Template, 17, 8, "div", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.show_shift_select() ? 2 : (tmp_3_0 = ctx_r2.selected_shift_option()) ? 3 : -1, tmp_3_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.show_custom_time_inputs() ? 4 : -1);
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.region_name, " ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_For_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 21);
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_For_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "icon", 60);
    \u0275\u0275text(2, "desk");
    \u0275\u0275elementEnd()();
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_For_10_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r24 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getBayInfo(bld_r24), " ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_For_10_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275text(1, " Checking... ");
    \u0275\u0275elementEnd();
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_For_10_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "icon", 62);
    \u0275\u0275text(3, "car_lock");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 63);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(5);
    const percent_r25 = ctx_r2.usage_ratio();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r2.spaces_in_use_count(), " of ", ctx_r2.total_space_count(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-error", percent_r25 === 1)("text-error-content", percent_r25 === 1)("bg-warning", percent_r25 > 0.5 && percent_r25 < 1)("text-warning-content", percent_r25 > 0.5 && percent_r25 < 1)("bg-success", percent_r25 < 0.5)("text-success-content", percent_r25 < 0.5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 15, percent_r25 * 100, "1.0-0"), "% ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_For_10_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275conditionalCreate(1, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_For_10_Conditional_9_Conditional_1_Template, 2, 0, "div", 61)(2, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_For_10_Conditional_9_Conditional_2_Template, 7, 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.availability_loading() ? 1 : ctx_r2.available_space_count() !== null ? 2 : -1);
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275listener("click", function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_For_10_Template_div_click_0_listener() {
      const bld_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setBuilding(bld_r24));
    });
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275conditionalCreate(2, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_For_10_Conditional_2_Template, 1, 0, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_For_10_Conditional_3_Template, 3, 0, "div", 57);
    \u0275\u0275elementStart(4, "div", 58)(5, "div")(6, "div", 22);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_For_10_Conditional_8_Template, 2, 1, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_For_10_Conditional_9_Template, 3, 1, "div", 59);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bld_r24 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("border-info", ctx_r2.building()?.id === bld_r24.id)("border-base-300", ctx_r2.building()?.id !== bld_r24.id);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-info", ctx_r2.building()?.id === bld_r24.id)("border-base-300", ctx_r2.building()?.id !== bld_r24.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.building()?.id === bld_r24.id ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.desk_booking_building_id() === bld_r24.id ? 3 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", bld_r24.display_name || bld_r24.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.getBayInfo(bld_r24) ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.building()?.id === bld_r24.id && !ctx_r2.hide_availability_counter() ? 9 : -1);
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "settings-toggle", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formField", ctx_r2.form().prefer_booked_location_first);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "BOOKINGS.PARKING_PREFER_BOOKED_LOCATION_FIRST"), " ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "icon");
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 3);
    \u0275\u0275conditionalCreate(7, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_Conditional_7_Template, 2, 1, "div", 25);
    \u0275\u0275elementStart(8, "div", 5);
    \u0275\u0275repeaterCreate(9, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_For_10_Template, 10, 13, "div", 55, _forTrack0, true);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_Conditional_11_Template, 3, 4, "settings-toggle", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 3, "BOOKINGS.PARKING_LOCATION_PREFERENCE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.region_name ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.building_list());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.hide_prefer_toggle() ? 11 : -1);
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_34_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getBayInfo(ctx_r2.building()), " ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_34_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275text(1, " Checking... ");
    \u0275\u0275elementEnd();
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_34_Conditional_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "icon", 62);
    \u0275\u0275text(3, "car_lock");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 63);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    const percent_r26 = ctx_r2.usage_ratio();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r2.spaces_in_use_count() || 0, " of ", ctx_r2.total_space_count() || 0, " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-error", percent_r26 === 1)("text-error-content", percent_r26 === 1)("bg-warning", percent_r26 > 0.5 && percent_r26 < 1)("text-warning-content", percent_r26 > 0.5 && percent_r26 < 1)("bg-success", percent_r26 < 0.5)("text-success-content", percent_r26 < 0.5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 15, percent_r26 * 100, "2.0-0"), "% ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_34_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275conditionalCreate(1, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_34_Conditional_11_Conditional_1_Template, 2, 0, "div", 68)(2, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_34_Conditional_11_Conditional_2_Template, 7, 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.availability_loading() ? 1 : 2);
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h3", 64)(2, "icon", 65);
    \u0275\u0275text(3, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 66)(7, "div")(8, "div", 22);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_34_Conditional_10_Template, 2, 1, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_34_Conditional_11_Template, 3, 1, "div", 67);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, "BOOKINGS.PARKING_LOCATION_PREFERENCE"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.building()?.display_name || ctx_r2.building()?.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.getBayInfo(ctx_r2.building()) ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.hide_availability_counter() ? 11 : -1);
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_For_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vtype_r27 = ctx.$implicit;
    \u0275\u0275property("value", vtype_r27.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, vtype_r27.name));
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_For_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 16)(1, "div", 69)(2, "span", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 70);
    \u0275\u0275listener("mousedown", function ParkingRequestFormDetailsComponent_Conditional_0_For_62_Template_button_mousedown_4_listener($event) {
      return $event.stopPropagation();
    })("click", function ParkingRequestFormDetailsComponent_Conditional_0_For_62_Template_button_click_4_listener($event) {
      const plate_number_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removePlateNumber($event, plate_number_r29));
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const plate_number_r29 = ctx.$implicit;
    \u0275\u0275property("value", plate_number_r29);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(plate_number_r29);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Remove " + plate_number_r29);
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "BOOKINGS.PARKING_PLATE_NUMBER_REQUIRED"), " ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_64_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r30 = ctx.$implicit;
    \u0275\u0275property("value", option_r30.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, option_r30.name));
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "h3", 71)(2, "icon", 65);
    \u0275\u0275text(3, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 14)(7, "mat-select", 72);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275repeaterCreate(9, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_64_For_10_Template, 3, 4, "mat-option", 16, _forTrack0, true);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 3, "BOOKINGS.PARKING_APPROVER_GROUP_TITLE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r2.form().approver_group)("placeholder", \u0275\u0275pipeBind1(8, 5, "BOOKINGS.PARKING_APPROVER_GROUP_PLACEHOLDER"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.filtered_approver_group_options());
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_65_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_65_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-button", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r31 = ctx.$implicit;
    \u0275\u0275property("value", option_r31.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, option_r31.name), " ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_65_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 77);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "BOOKINGS.PARKING_SPACE_RESTRICTION_REQUIRED"), " ");
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_65_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-group", 76);
    \u0275\u0275repeaterCreate(1, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_65_Conditional_11_For_2_Template, 3, 4, "mat-radio-button", 16, _forTrack0, true);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(3, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_65_Conditional_11_Conditional_3_Template, 3, 3, "p", 77);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formField", ctx_r2.form().space_restrictions);
    \u0275\u0275attribute("aria-required", ctx_r2.require_space_restriction())("aria-invalid", ctx_r2.form().space_restrictions().invalid());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.space_restriction_options());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.require_space_restriction() && ctx_r2.form().space_restrictions().touched() && ctx_r2.form().space_restrictions().invalid() ? 3 : -1);
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_65_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 79);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("ngModelChange", function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_65_Conditional_12_For_2_Template_settings_toggle_ngModelChange_0_listener($event) {
      const option_r33 = \u0275\u0275restoreView(_r32).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.setExtraRestriction(option_r33.id, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const option_r33 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 3, option_r33.name))("ngModel", ctx_r2.isExtraRestrictionSelected(option_r33.id))("ngModelOptions", \u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275control();
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_65_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275repeaterCreate(1, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_65_Conditional_12_For_2_Template, 2, 6, "settings-toggle", 78, _forTrack0, true);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.extra_space_restriction_options());
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "icon");
    \u0275\u0275text(2, "tune");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 73);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275conditionalCreate(6, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_65_Conditional_6_Template, 2, 0, "span", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 3)(8, "p", 23);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_65_Conditional_11_Template, 4, 4);
    \u0275\u0275conditionalCreate(12, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_65_Conditional_12_Template, 3, 0, "div", 75);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, "BOOKINGS.PARKING_SPACE_RESTRICTIONS_TITLE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.require_space_restriction() ? 6 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 7, "BOOKINGS.PARKING_SPACE_RESTRICTIONS_DESC"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.space_restriction_options().length ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.extra_space_restriction_options().length ? 12 : -1);
  }
}
function ParkingRequestFormDetailsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "icon");
    \u0275\u0275text(3, "date_range");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 3);
    \u0275\u0275element(8, "a-date-field", 4);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(9, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_9_Template, 22, 31, "div", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 2)(11, "icon");
    \u0275\u0275text(12, "ballot");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 3)(17, "div", 5);
    \u0275\u0275repeaterCreate(18, ParkingRequestFormDetailsComponent_Conditional_0_For_19_Template, 12, 16, "div", 6, _forTrack0, true);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(20, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_20_Template, 5, 8, "div", 7);
    \u0275\u0275conditionalCreate(21, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_21_Template, 6, 4, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(22, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_22_Template, 31, 19);
    \u0275\u0275elementStart(23, "div", 2)(24, "icon");
    \u0275\u0275text(25, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 3);
    \u0275\u0275conditionalCreate(30, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_30_Template, 5, 11, "div", 8)(31, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_31_Template, 4, 4, "div", 8)(32, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_32_Template, 5, 2, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(33, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_33_Template, 12, 5)(34, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_34_Template, 12, 6, "div", 10);
    \u0275\u0275elementStart(35, "div", 2)(36, "icon");
    \u0275\u0275text(37, "directions_car");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 3)(42, "div", 11)(43, "div", 12)(44, "label", 13);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "mat-form-field", 14)(48, "mat-select", 15);
    \u0275\u0275repeaterCreate(49, ParkingRequestFormDetailsComponent_Conditional_0_For_50_Template, 3, 4, "mat-option", 16, _forTrack0, true);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 12)(52, "label", 13);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275conditionalCreate(55, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_55_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "mat-form-field", 14)(57, "input", 17);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275listener("ngModelChange", function ParkingRequestFormDetailsComponent_Conditional_0_Template_input_ngModelChange_57_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setPlateNumber($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(59, "mat-autocomplete", null, 0);
    \u0275\u0275repeaterCreate(61, ParkingRequestFormDetailsComponent_Conditional_0_For_62_Template, 7, 3, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(63, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_63_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(64, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_64_Template, 11, 7, "div", 18);
    \u0275\u0275conditionalCreate(65, ParkingRequestFormDetailsComponent_Conditional_0_Conditional_65_Template, 13, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_14_0;
    const plate_number_auto_r34 = \u0275\u0275reference(60);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 24, "BOOKINGS.PARKING_BOOKING_FREQUENCY"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r2.form().date)("to", ctx_r2.end_date())("timezone", ctx_r2.timezone);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.allow_recurrence() ? 9 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 26, "BOOKINGS.PARKING_REQUEST_TYPE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.request_types());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.show_host_select() ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.show_notes() ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.model().request_type === "special" && ctx_r2.show_special_needs() ? 22 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 28, "BOOKINGS.PARKING_SHIFT_SELECTION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_14_0 = ctx_r2.forced_request_time()) ? 30 : ctx_r2.is_all_day_forced() ? 31 : 32, tmp_14_0);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.hasMultipleBuildings(ctx_r2.building_list()) ? 33 : 34);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 30, "BOOKINGS.PARKING_VEHICLE_DETAILS"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(46, 32, "BOOKINGS.PARKING_VEHICLE_TYPE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r2.form().vehicle_type);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.vehicle_type_options());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(54, 34, "BOOKINGS.PARKING_REGISTRATION"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.require_plate_number() ? 55 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r2.model().plate_number)("ngModelOptions", \u0275\u0275pureFunction0(38, _c0))("matAutocomplete", plate_number_auto_r34)("placeholder", \u0275\u0275pipeBind1(58, 36, "BOOKINGS.PARKING_REGISTRATION_PLACEHOLDER"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.plate_number_options());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.showPlateNumberError() ? 63 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.filtered_approver_group_options().length && !ctx_r2.is_auto_approved() ? 64 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.space_restriction_options().length || ctx_r2.extra_space_restriction_options().length ? 65 : -1);
  }
}
var SHIFT_PRESETS = {
  day_worker: { start: 420, end: 1020 },
  day_shift_12hr: { start: 330, end: 1110 },
  night_shift_12hr: { start: 1050, end: 390 },
  half_day_am: { start: 420, end: 720 },
  half_day_pm: { start: 750, end: 1020 }
};
var CUSTOM_SHIFT_ID = "custom";
var ALL_DAY_SHIFT_ID = "all_day";
var ALL_DAY_START_MINS = 0;
var ALL_DAY_END_MINS = 1440;
var DEFAULT_DAY_DURATION_MINS = 540;
var DEFAULT_SHIFT_OPTIONS = [
  {
    id: "day_worker",
    name: "BOOKINGS.PARKING_SHIFT_DAY_WORKER",
    start_time: SHIFT_PRESETS.day_worker.start,
    end_time: SHIFT_PRESETS.day_worker.end
  },
  {
    id: "day_shift_12hr",
    name: "BOOKINGS.PARKING_SHIFT_DAY_12HR",
    start_time: SHIFT_PRESETS.day_shift_12hr.start,
    end_time: SHIFT_PRESETS.day_shift_12hr.end
  },
  {
    id: "night_shift_12hr",
    name: "BOOKINGS.PARKING_SHIFT_NIGHT_12HR",
    start_time: SHIFT_PRESETS.night_shift_12hr.start,
    end_time: SHIFT_PRESETS.night_shift_12hr.end
  },
  {
    id: "half_day_am",
    name: "BOOKINGS.PARKING_SHIFT_HALF_DAY_AM",
    start_time: SHIFT_PRESETS.half_day_am.start,
    end_time: SHIFT_PRESETS.half_day_am.end
  },
  {
    id: "half_day_pm",
    name: "BOOKINGS.PARKING_SHIFT_HALF_DAY_PM",
    start_time: SHIFT_PRESETS.half_day_pm.start,
    end_time: SHIFT_PRESETS.half_day_pm.end
  }
];
var DEFAULT_VEHICLE_TYPE_OPTIONS = [
  { id: "car", name: "BOOKINGS.PARKING_VEHICLE_CAR" },
  { id: "bike", name: "BOOKINGS.PARKING_VEHICLE_BIKE" },
  { id: "van", name: "BOOKINGS.PARKING_VEHICLE_VAN" },
  { id: "truck", name: "BOOKINGS.PARKING_VEHICLE_TRUCK" },
  { id: "other", name: "BOOKINGS.PARKING_VEHICLE_OTHER" }
];
var ParkingRequestFormDetailsComponent = class _ParkingRequestFormDetailsComponent extends AsyncHandler {
  constructor() {
    super();
    this._prefilled_plate_number = "";
    this._parking = inject(ParkingService);
    this._injector = inject(Injector);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._uploads = inject(UploadsService);
    this._dialog = inject(MatDialog);
    this._saved_shift_state = null;
    this._removed_plate_numbers = signal(
      [],
      ...ngDevMode ? [{ debugName: "_removed_plate_numbers" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._selected_shift_duration = signal(
      0,
      ...ngDevMode ? [{ debugName: "_selected_shift_duration" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._user_selected_shift = false;
    this.form = input(
      void 0,
      ...ngDevMode ? [{ debugName: "form" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.model_input = input(
      void 0,
      ...ngDevMode ? [{ debugName: "model_input" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_special_needs = input(
      true,
      ...ngDevMode ? [{ debugName: "show_special_needs" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.force_show_host_select = input(
      false,
      ...ngDevMode ? [{ debugName: "force_show_host_select" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.force_allow_any_host = input(
      false,
      ...ngDevMode ? [{ debugName: "force_allow_any_host" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.building = this._org.active_building;
    this.hidden_buildings = settingSignal("parking.hidden_buildings", []);
    this.building_list = computed(
      () => {
        const hidden_ids = new Set(this.hidden_buildings() || []);
        const levels = this._org.level_list();
        return (this._org.active_buildings() || []).filter((bld) => !hidden_ids.has(bld.id) && (levels || []).some((lvl) => lvl.parent_id === bld.id && lvl.tags.includes("parking")));
      },
      ...ngDevMode ? [{ debugName: "building_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.desk_booking_building_id = signal(
      "",
      ...ngDevMode ? [{ debugName: "desk_booking_building_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.available_space_count = signal(
      0,
      ...ngDevMode ? [{ debugName: "available_space_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.total_space_count = signal(
      0,
      ...ngDevMode ? [{ debugName: "total_space_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.availability_loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "availability_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.spaces_in_use_count = computed(
      () => {
        const available = this.available_space_count();
        const total = this.total_space_count();
        if (available === null || total === null)
          return null;
        return Math.max(total - available, 0);
      },
      ...ngDevMode ? [{ debugName: "spaces_in_use_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.usage_percentage = computed(
      () => {
        const used = this.spaces_in_use_count();
        const total = this.total_space_count();
        if (used === null || total === null || total <= 0)
          return 0;
        return Math.round(used / total * 100);
      },
      ...ngDevMode ? [{ debugName: "usage_percentage" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.usage_ratio = computed(
      () => {
        const used = this.spaces_in_use_count();
        const total = this.total_space_count();
        if (used === null || total === null || total <= 0)
          return 0;
        return used / total;
      },
      ...ngDevMode ? [{ debugName: "usage_ratio" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_book_for_anyone = computed(
      () => settingSignal("parking.can_book_for_anyone")() ?? settingSignal("bookings.can_book_for_anyone")(),
      ...ngDevMode ? [{ debugName: "can_book_for_anyone" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_book_for_others = computed(
      () => settingSignal("parking.can_book_for_others")() ?? settingSignal("bookings.can_book_for_others")(),
      ...ngDevMode ? [{ debugName: "can_book_for_others" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.available_days = settingSignal("parking.available_period", 14);
    this.allow_recurrence = settingSignal("parking.allow_recurrence", true);
    this.shift_options_setting = settingSignal("parking.request_shift_options", DEFAULT_SHIFT_OPTIONS);
    this.hide_custom_shift = settingSignal("parking.hide_custom_shift", false);
    this.space_restriction_options_setting = settingSignal("parking.request_space_restrictions", []);
    this.extra_space_restriction_options_setting = settingSignal("parking.extra_space_restrictions", []);
    this.approver_groups_setting = settingSignal("parking.approver_groups", []);
    this.vehicle_type_options_setting = settingSignal("parking.vehicle_types", DEFAULT_VEHICLE_TYPE_OPTIONS);
    this.hide_prefer_toggle = settingSignal("parking.hide_prefer_toggle", false);
    this.hide_availability_counter = settingSignal("parking.hide_availability_counter", false);
    this.default_location_from_desk_booking = settingSignal("parking.default_location_from_desk_booking", false);
    this.require_plate_number = settingSignal("parking.require_plate_number", false);
    this.require_space_restriction = settingSignal("parking.require_space_restriction", false);
    this.auto_approved_groups_setting = settingSignal("parking.auto_approved_groups", []);
    this.is_auto_approved = computed(
      () => {
        const auto_groups = this.auto_approved_groups_setting();
        if (!auto_groups?.length)
          return false;
        const user_groups = currentUser()?.groups || [];
        return auto_groups.some((g) => user_groups.includes(g));
      },
      ...ngDevMode ? [{ debugName: "is_auto_approved" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.end_date = computed(
      () => endOfDay(addDays(Date.now(), this.available_days())).valueOf(),
      ...ngDevMode ? [{ debugName: "end_date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.booking_frequency = signal(
      "single",
      ...ngDevMode ? [{ debugName: "booking_frequency" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_days = signal(
      /* @__PURE__ */ new Set([1, 2, 3, 4, 5]),
      ...ngDevMode ? [{ debugName: "selected_days" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.num_weeks = signal(
      1,
      ...ngDevMode ? [{ debugName: "num_weeks" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.max_weeks = computed(
      () => Math.max(1, Math.floor(this.available_days() / 7)),
      ...ngDevMode ? [{ debugName: "max_weeks" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.week_options = computed(
      () => Array.from({ length: this.max_weeks() }, (_, i) => i + 1),
      ...ngDevMode ? [{ debugName: "week_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.CUSTOM_SHIFT_ID = CUSTOM_SHIFT_ID;
    this.shift_type = signal(
      CUSTOM_SHIFT_ID,
      ...ngDevMode ? [{ debugName: "shift_type" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.start_time_mins = signal(
      480,
      ...ngDevMode ? [{ debugName: "start_time_mins" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.end_time_mins = signal(
      1020,
      ...ngDevMode ? [{ debugName: "end_time_mins" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.supporting_doc_names = signal(
      [],
      ...ngDevMode ? [{ debugName: "supporting_doc_names" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.custom_start_time_mins = signal(
      480,
      ...ngDevMode ? [{ debugName: "custom_start_time_mins" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.custom_end_time_mins = signal(
      600,
      ...ngDevMode ? [{ debugName: "custom_end_time_mins" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.shift_options = computed(
      () => {
        const user_groups = currentUser()?.groups || [];
        return this._normaliseShiftOptions(this.shift_options_setting()).filter((option) => {
          if (option.groups?.length) {
            return option.groups.some((group) => user_groups.includes(group));
          }
          return true;
        });
      },
      ...ngDevMode ? [{ debugName: "shift_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_shift_option = computed(
      () => this.shift_options().find((_) => _.id === this.shift_type()),
      ...ngDevMode ? [{ debugName: "selected_shift_option" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_preset_shifts = computed(
      () => this.shift_options().length > 0,
      ...ngDevMode ? [{ debugName: "has_preset_shifts" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.all_day_shift_window = computed(
      () => {
        const [first_option] = this._normaliseShiftOptions(this.shift_options_setting());
        return first_option || {
          start_time: ALL_DAY_START_MINS,
          end_time: ALL_DAY_END_MINS
        };
      },
      ...ngDevMode ? [{ debugName: "all_day_shift_window" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_all_day_shift_window = computed(
      () => this._normaliseShiftOptions(this.shift_options_setting()).length > 0,
      ...ngDevMode ? [{ debugName: "show_all_day_shift_window" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.allow_custom_shift = computed(
      () => !this.hide_custom_shift(),
      ...ngDevMode ? [{ debugName: "allow_custom_shift" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_all_day_forced = computed(
      () => !this.has_preset_shifts() && !this.allow_custom_shift(),
      ...ngDevMode ? [{ debugName: "is_all_day_forced" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_shift_select = computed(
      () => {
        if (this.forced_request_time())
          return false;
        if (this.is_all_day_forced())
          return false;
        const preset_count = this.shift_options().length;
        const custom_count = this.allow_custom_shift() ? 1 : 0;
        return preset_count + custom_count > 1;
      },
      ...ngDevMode ? [{ debugName: "show_shift_select" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_custom_time_inputs = computed(
      () => !this.forced_request_time() && this.shift_type() === CUSTOM_SHIFT_ID && this.allow_custom_shift(),
      ...ngDevMode ? [{ debugName: "show_custom_time_inputs" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.vehicle_type_options = computed(
      () => this._normaliseOptions(this.vehicle_type_options_setting()),
      ...ngDevMode ? [{ debugName: "vehicle_type_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.plate_number_options = computed(
      () => {
        const saved_plate_numbers = this._settings.get("plate_numbers");
        const preferred_plate_number = this._settings.get("plate_number");
        const removed_plate_numbers = new Set(this._removed_plate_numbers());
        const plate_numbers = [
          ...typeof preferred_plate_number === "string" ? [preferred_plate_number] : [],
          ...Array.isArray(saved_plate_numbers) ? saved_plate_numbers : []
        ];
        const search = `${this.model?.()?.plate_number || ""}`.trim().toLowerCase();
        return plate_numbers.filter((_) => typeof _ === "string" && _.trim()).map((_) => _.trim()).filter((plate_number, index, list) => list.findIndex((_) => _.toLowerCase() === plate_number.toLowerCase()) === index && plate_number.toLowerCase().includes(search) && !removed_plate_numbers.has(plate_number.toLowerCase()));
      },
      ...ngDevMode ? [{ debugName: "plate_number_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.space_restriction_options = computed(
      () => this._normaliseOptions(this.space_restriction_options_setting()),
      ...ngDevMode ? [{ debugName: "space_restriction_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.extra_space_restriction_options = computed(
      () => this._normaliseOptions(this.extra_space_restriction_options_setting()),
      ...ngDevMode ? [{ debugName: "extra_space_restriction_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_request_type_id = signal(
      "standard",
      ...ngDevMode ? [{ debugName: "selected_request_type_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_request_type = computed(
      () => this.request_types().find((_) => _.id === this.selected_request_type_id()),
      ...ngDevMode ? [{ debugName: "selected_request_type" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.forced_request_time = computed(
      () => this.selected_request_type()?.forced_time || null,
      ...ngDevMode ? [{ debugName: "forced_request_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_notes = computed(
      () => !!this.selected_request_type()?.show_notes,
      ...ngDevMode ? [{ debugName: "show_notes" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.host_book_as = computed(
      () => {
        const book_as = this.selected_request_type()?.book_as;
        return book_as === "internals" || book_as === "externals" || book_as === "both" ? book_as : null;
      },
      ...ngDevMode ? [{ debugName: "host_book_as" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_host_select = computed(
      () => !!this.force_show_host_select() || this.can_book_for_anyone() && !!this.host_book_as(),
      ...ngDevMode ? [{ debugName: "show_host_select" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.allow_any_host = computed(
      () => !!this.force_allow_any_host() && !!this.can_book_for_anyone(),
      ...ngDevMode ? [{ debugName: "allow_any_host" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.approver_group_options = computed(
      () => this._normaliseOptions(this.approver_groups_setting()),
      ...ngDevMode ? [{ debugName: "approver_group_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered_approver_group_options = computed(
      () => {
        const all_options = this.approver_group_options();
        const allowed_ids = this.selected_request_type()?.approver_groups;
        if (!allowed_ids?.length)
          return all_options;
        return all_options.filter((_) => allowed_ids.includes(_.id));
      },
      ...ngDevMode ? [{ debugName: "filtered_approver_group_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_space_restriction = computed(
      () => {
        const value = this.model()?.space_restrictions;
        if (typeof value === "string" && value)
          return value;
        return false;
      },
      ...ngDevMode ? [{ debugName: "selected_space_restriction" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.WEEKDAY_OPTIONS = [1, 2, 3, 4, 5, 6, 7].map((index) => ({
      index,
      date: addDays(startOfWeek(Date.now(), { weekStartsOn: 1 }), index - 1)
    }));
    this._default_request_types = [
      {
        id: "standard",
        name: "BOOKINGS.PARKING_REQUEST_STANDARD_TITLE",
        description: "BOOKINGS.PARKING_REQUEST_STANDARD_DESC",
        book_as: "internals"
      },
      {
        id: "special",
        name: "BOOKINGS.PARKING_REQUEST_SPECIAL_TITLE",
        description: "BOOKINGS.PARKING_REQUEST_SPECIAL_DESC",
        badge: "BOOKINGS.PARKING_REQUIRES_APPROVAL"
      },
      {
        id: "after_hours",
        name: "BOOKINGS.PARKING_REQUEST_AFTER_HOURS_TITLE",
        description: "BOOKINGS.PARKING_REQUEST_AFTER_HOURS_DESC",
        badge: "BOOKINGS.PARKING_REQUIRES_APPROVAL",
        book_as: "externals"
      }
    ];
    this.request_types_setting = settingSignal("parking.request_types", null);
    this.request_types = computed(
      () => {
        const custom_types = this._normaliseRequestTypes(this.request_types_setting());
        const all_types = custom_types?.length > 0 ? custom_types : this._default_request_types;
        const user_groups = currentUser()?.groups || [];
        return all_types.filter((t) => {
          if (t.groups?.length)
            return t.groups.some((g) => user_groups.includes(g));
          return true;
        });
      },
      ...ngDevMode ? [{ debugName: "request_types" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.time_options = computed(
      () => {
        const values = new Set(Array.from({ length: 48 }, (_, i) => i * 30));
        values.add(this.start_time_mins());
        values.add(this.end_time_mins());
        return [...values].filter((value) => value >= 0 && value < 1440).sort((left, right) => left - right).map((value) => ({ value }));
      },
      ...ngDevMode ? [{ debugName: "time_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      this.shift_options();
      this.allow_custom_shift();
      const form = this.form();
      if (!form)
        return;
      if (this._user_selected_shift)
        return;
      if (this.forced_request_time())
        return;
      this._applyPreferredShift();
    });
    effect(() => {
      const form = this.form();
      const model = this.model;
      if (!form || !model)
        return;
      const requires_manual_approval = !!this.selected_request_type()?.requires_manual_approval;
      if (model().requires_manual_approval === requires_manual_approval)
        return;
      model.update((m) => __spreadProps(__spreadValues({}, m), { requires_manual_approval }));
    });
    effect(() => {
      const form = this.form();
      const model = this.model;
      const duration = this._selected_shift_duration();
      if (!form || !model || !duration)
        return;
      const value = model();
      const date = value.date || Date.now();
      const date_end = date + duration * 60 * 1e3;
      if (value.duration === duration && value.date_end === date_end)
        return;
      this._timeSync(model)?.updateOptions({
        bookable_hours: null,
        default_duration: duration,
        timezone: this.timezone
      });
      model.update((m) => __spreadProps(__spreadValues({}, m), {
        duration,
        date_end
      }));
    });
  }
  /** Writable signal holding the raw booking form value */
  get model() {
    return this.model_input();
  }
  get weekdays() {
    if (this.booking_frequency() !== "daily")
      return [];
    return this._computeRecurrenceDates();
  }
  get region_name() {
    return this._org.region?.display_name || this._org.region?.name || "";
  }
  get timezone() {
    return this._settings.get("app.bookings.use_building_timezone") || this._settings.get("app.parking.use_building_timezone") ? this._org.building?.timezone : "";
  }
  get time_format() {
    return this._settings.time_format;
  }
  async ngOnInit() {
    await this._org.waitUntilInitialised();
    const form = this.form();
    const model = this.model;
    if (!form || !model)
      return;
    this.supporting_doc_names.set((model().attachments || []).map((url) => this._fileNameFromUrl(url)));
    runInInjectionContext(this._injector, () => effect((onCleanup) => {
      const buildings = this.building_list();
      const bld = this.building();
      let active = true;
      let timeout = null;
      onCleanup(() => {
        active = false;
        if (timeout)
          clearTimeout(timeout);
      });
      if (buildings.length > 0 && !buildings.some((_) => _.id === bld?.id)) {
        timeout = setTimeout(() => {
          if (active)
            this._org.building = buildings[0];
        });
      }
    }));
    const availability_window = computed(() => {
      const v = model();
      return { date: v.date, duration: v.duration };
    }, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "availability_window" } : (
      /* istanbul ignore next */
      {}
    )), { equal: (a, b) => a.date === b.date && a.duration === b.duration }));
    runInInjectionContext(this._injector, () => effect((onCleanup) => {
      if (this.hide_availability_counter()) {
        this.availability_loading.set(false);
        return;
      }
      const bld = this.building();
      const spaces = this._parking.spaces();
      const { date, duration } = availability_window();
      let active = true;
      const timeout = setTimeout(async () => {
        if (!active)
          return;
        if (!bld?.id) {
          this.availability_loading.set(false);
          return;
        }
        const space_ids = new Set(spaces.filter((space) => space.bookable !== false).map((space) => space.id));
        this.total_space_count.set(space_ids.size);
        if (!space_ids.size) {
          this.available_space_count.set(0);
          this.availability_loading.set(false);
          return;
        }
        if (Pn()) {
          this.available_space_count.set(space_ids.size);
          this.availability_loading.set(false);
          return;
        }
        const start_date = date || Date.now();
        const window_duration = duration || 540;
        this.availability_loading.set(true);
        const booked_assets = await bookedResourceList({
          period_start: getUnixTime(start_date),
          period_end: getUnixTime(addMinutes(start_date, window_duration)),
          type: "parking",
          zones: bld.id,
          rejected: false
        }).catch(() => []);
        if (!active)
          return;
        const booked_ids = new Set(booked_assets.filter((id) => space_ids.has(id)));
        this.available_space_count.set([...space_ids].filter((id) => !booked_ids.has(id)).length);
        this.availability_loading.set(false);
      }, 300);
      onCleanup(() => {
        active = false;
        clearTimeout(timeout);
      });
    }));
    const desk_lookup_inputs = computed(() => {
      const { date, user, id } = model();
      return { date, email: user?.email || "", id };
    }, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "desk_lookup_inputs" } : (
      /* istanbul ignore next */
      {}
    )), { equal: (a, b) => a.date === b.date && a.email === b.email && a.id === b.id }));
    runInInjectionContext(this._injector, () => effect(async () => {
      const buildings = this.building_list();
      const { date, email: model_email, id } = desk_lookup_inputs();
      if (!this.default_location_from_desk_booking() || Pn() || id || !date || buildings?.length <= 1) {
        this.desk_booking_building_id.set("");
        return;
      }
      const email = model_email || currentUser()?.email || "";
      if (!email)
        return;
      const period_start = getUnixTime(startOfDay(date));
      const period_end = getUnixTime(endOfDay(date));
      const bookings = await queryBookings({
        type: "desk",
        period_start,
        period_end,
        email,
        rejected: false
      }).catch(() => []);
      const booking = bookings.find((_) => _.user_email?.toLowerCase() === email.toLowerCase());
      const building = booking ? this._buildingForBookingZones(booking.zones, buildings) : null;
      this.desk_booking_building_id.set(building?.id || "");
      if (building && building.id !== this._org.building?.id) {
        this._org.building = building;
      }
    }));
    this._initShiftStateFromForm(model);
    if (model().request_type) {
      this.selected_request_type_id.set(model().request_type);
    }
    this._syncRequestTypeTime();
    this._syncRequestTypeUser(model);
    this._syncPrefilledPlateNumber(model);
    this._syncPlateNumberUser(model);
    if (this.filtered_approver_group_options().length && !this.is_auto_approved()) {
      const current = model().approver_group;
      if (!current || !this.filtered_approver_group_options().find((_) => _.id === current)) {
        model.update((m) => __spreadProps(__spreadValues({}, m), {
          approver_group: this.filtered_approver_group_options()[0].id
        }));
      }
    }
    if (this.space_restriction_options().length) {
      const current = model().space_restrictions;
      if (current === true || typeof current === "string" && !this.space_restriction_options().find((_) => _.id === current)) {
        this.setSpaceRestriction(false);
      }
    }
    const is_daily = this.allow_recurrence() && model().recurrence_type === "daily";
    this.booking_frequency.set(is_daily ? "daily" : "single");
    if (!this.allow_recurrence() && model().recurrence_type !== "none") {
      model.update((m) => __spreadProps(__spreadValues({}, m), {
        recurrence_type: "none",
        recurrence_days: null,
        recurrence_interval: null,
        recurrence_end: null
      }));
    }
    if (is_daily) {
      if (model().recurrence_days) {
        const days = /* @__PURE__ */ new Set();
        for (let i = 1; i <= 7; i++) {
          if (model().recurrence_days & 1 << i)
            days.add(i);
        }
        if (days.size > 0)
          this.selected_days.set(days);
      }
      const raw_date = model().date;
      if (model().recurrence_end && raw_date) {
        const recurrence_end = model().recurrence_end < 1e12 ? model().recurrence_end * 1e3 : model().recurrence_end;
        const reference = startOfDay(raw_date);
        const ref_dow = reference.getDay() === 0 ? 7 : reference.getDay();
        const selected = [...this.selected_days()];
        const max_offset_days = selected.length ? Math.max(...selected.map((d) => (d - ref_dow + 7) % 7)) : 0;
        const day_ms = 24 * 60 * 60 * 1e3;
        const diff_days = Math.floor((startOfDay(recurrence_end).valueOf() - reference.valueOf()) / day_ms);
        const weeks = Math.max(1, Math.floor((diff_days - max_offset_days) / 7) + 1);
        this.num_weeks.set(Math.min(weeks, this.max_weeks()));
      }
    }
  }
  isDaySelected(day_index) {
    return this.selected_days().has(day_index);
  }
  toggleDay(day_index) {
    const days = new Set(this.selected_days());
    if (days.has(day_index)) {
      if (days.size > 1)
        days.delete(day_index);
    } else {
      days.add(day_index);
    }
    this.selected_days.set(days);
    this._updateRecurrenceDays();
    this._updateRecurrenceEnd();
  }
  setNumWeeks(weeks) {
    this.num_weeks.set(weeks);
    this._updateRecurrenceEnd();
  }
  setRequestType(type_id) {
    this.selected_request_type_id.set(type_id);
    const model = this.model;
    if (!model)
      return;
    model.update((m) => __spreadProps(__spreadValues({}, m), { request_type: type_id }));
    this._syncRequestTypeTime();
    this._syncRequestTypeUser(model);
    const options = this.filtered_approver_group_options();
    if (options.length && !this.is_auto_approved()) {
      const current = model().approver_group;
      if (!current || !options.find((_) => _.id === current)) {
        model.update((m) => __spreadProps(__spreadValues({}, m), { approver_group: options[0].id }));
      }
    }
  }
  setBookingFrequency(freq) {
    if (freq === "daily" && !this.allow_recurrence())
      return;
    this.booking_frequency.set(freq);
    const model = this.model;
    if (!model)
      return;
    if (freq === "single") {
      model.update((m) => __spreadProps(__spreadValues({}, m), {
        recurrence_type: "none",
        recurrence_days: null,
        recurrence_interval: null,
        recurrence_end: null
      }));
    } else {
      this.selected_days.set(/* @__PURE__ */ new Set([1, 2, 3, 4, 5]));
      this.num_weeks.set(1);
      model.update((m) => __spreadProps(__spreadValues({}, m), {
        recurrence_type: "daily",
        recurrence_interval: 1,
        recurrence_days: this._computeDaysBitmask()
      }));
      this._updateRecurrenceEnd();
    }
  }
  /**
   * Public entry point for shift selection — wired to the dropdown
   * `(selectionChange)` handler. Marks the shift as user-chosen so the
   * settings-load effect won't override it.
   */
  setShiftType(type) {
    this._user_selected_shift = true;
    this._applyShift(type);
  }
  /**
   * Internal shift application — used by auto-init paths
   * (`_applyPreferredShift`, `_restoreShiftState`, etc.) that should not
   * count as a user selection.
   */
  _applyShift(type) {
    if (type === ALL_DAY_SHIFT_ID) {
      const { start_time, end_time } = this.all_day_shift_window();
      this.shift_type.set(ALL_DAY_SHIFT_ID);
      this.start_time_mins.set(start_time);
      this.end_time_mins.set(end_time);
      this._updateFormTimes(start_time, end_time);
      return;
    }
    if (type === CUSTOM_SHIFT_ID) {
      this.shift_type.set(CUSTOM_SHIFT_ID);
      const { start_time, end_time } = this._normaliseShiftTime(this.custom_start_time_mins(), this.custom_end_time_mins());
      this.custom_start_time_mins.set(start_time);
      this.custom_end_time_mins.set(end_time);
      this.start_time_mins.set(start_time);
      this.end_time_mins.set(end_time);
      this._updateFormTimes(start_time, end_time);
      return;
    }
    const preset = this.shift_options().find((_) => _.id === type);
    if (!preset)
      return;
    this.shift_type.set(type);
    this.start_time_mins.set(preset.start_time);
    this.end_time_mins.set(preset.end_time);
    this._updateFormTimes(preset.start_time, preset.end_time);
  }
  setStartTime(mins) {
    this._user_selected_shift = true;
    this._applyCustomShift(mins, this.end_time_mins());
  }
  setEndTime(mins) {
    this._user_selected_shift = true;
    this._applyCustomShift(this.start_time_mins(), mins);
  }
  _applyCustomShift(start_mins, end_mins) {
    const { start_time, end_time } = this._normaliseShiftTime(start_mins, end_mins);
    this.start_time_mins.set(start_time);
    this.end_time_mins.set(end_time);
    this.custom_start_time_mins.set(start_time);
    this.custom_end_time_mins.set(end_time);
    this.shift_type.set(CUSTOM_SHIFT_ID);
    this._updateFormTimes(start_time, end_time);
  }
  setSpaceRestriction(value) {
    const model = this.model;
    if (!model)
      return;
    model.update((m) => __spreadProps(__spreadValues({}, m), {
      space_restrictions: value || false
    }));
  }
  isExtraRestrictionSelected(id) {
    const value = this.model?.()?.extra_space_restrictions;
    return Array.isArray(value) && value.includes(id);
  }
  setExtraRestriction(id, enabled) {
    const model = this.model;
    if (!model)
      return;
    const current = model()?.extra_space_restrictions;
    const list = Array.isArray(current) ? [...current] : [];
    const index = list.indexOf(id);
    if (enabled && index === -1)
      list.push(id);
    if (!enabled && index !== -1)
      list.splice(index, 1);
    model.update((m) => __spreadProps(__spreadValues({}, m), { extra_space_restrictions: list }));
  }
  setBuilding(bld) {
    this.desk_booking_building_id.set("");
    this._org.building = bld;
  }
  async onSupportingDocsSelected(event) {
    const input2 = event.target;
    const files = Array.from(input2.files || []);
    const valid_files = files.filter((file) => file.size <= 10 * 1024 * 1024);
    if (valid_files.length !== files.length) {
      notifyError("Some files exceeded 10MB and were skipped.");
    }
    const model = this.model;
    const existing_urls = model?.().attachments || [];
    const existing_names = this.supporting_doc_names();
    const new_urls = [];
    const uploaded_names = [];
    for (const file of valid_files) {
      const upload_id = await this._uploads.uploadFile(file, true).catch(() => "");
      if (!upload_id)
        continue;
      uploaded_names.push(file.name);
      new_urls.push(`${location.origin}/api/engine/v2/uploads/${encodeURIComponent(upload_id)}/url`);
    }
    const names = [...existing_names, ...uploaded_names];
    const urls = [...existing_urls, ...new_urls];
    this.supporting_doc_names.set(names);
    model?.update((m) => __spreadProps(__spreadValues({}, m), {
      attachments: urls
    }));
    input2.value = "";
  }
  removeSupportingDoc(index) {
    const model = this.model;
    const names = [...this.supporting_doc_names()];
    const urls = [...model?.().attachments || []];
    if (index < 0 || index >= names.length)
      return;
    names.splice(index, 1);
    if (index < urls.length)
      urls.splice(index, 1);
    this.supporting_doc_names.set(names);
    model?.update((m) => __spreadProps(__spreadValues({}, m), {
      attachments: urls
    }));
  }
  previewSupportingDoc(index) {
    const urls = [...this.model?.().attachments || []];
    const url = urls[index];
    if (!url)
      return;
    this._dialog.open(FullscreenEmbedComponent, { data: url });
  }
  _fileNameFromUrl(url) {
    const last_part = `${url || ""}`.split("/").pop() || "";
    return decodeURIComponent(last_part || "Uploaded file");
  }
  shiftTime(mins) {
    const raw_date = this.model?.()?.date || Date.now();
    const tz = this.timezone;
    return startOfDayInTimezone(raw_date, tz) + mins * 60 * 1e3;
  }
  getBayInfo(bld) {
    if (!bld)
      return "";
    const metadata = bld.metadata || {};
    const parking = metadata.parking?.details || {};
    const car_bays = parking.car_bays;
    const motorcycle_bays = parking.motorcycle_bays;
    const parts = [];
    if (car_bays)
      parts.push(`${car_bays} Car bays`);
    if (motorcycle_bays)
      parts.push(`${motorcycle_bays} Motorcycle bays`);
    return parts.join(" + ") || "";
  }
  hasMultipleBuildings(buildings) {
    const ids = new Set((buildings || []).filter(Boolean).map((_) => _.id));
    return ids.size > 1;
  }
  trackById(item) {
    return item?.id || item?.value || item?.name || item;
  }
  setPlateNumber(plate_number) {
    const model = this.model;
    if (!model || model().plate_number === plate_number)
      return;
    model.update((m) => __spreadProps(__spreadValues({}, m), { plate_number }));
  }
  removePlateNumber(event, plate_number) {
    event.preventDefault();
    event.stopPropagation();
    const key = plate_number.trim().toLowerCase();
    const saved_plate_numbers = this._settings.get("plate_numbers");
    this._settings.saveUserSetting("plate_numbers", Array.isArray(saved_plate_numbers) ? saved_plate_numbers.filter((_) => typeof _ !== "string" || _.trim().toLowerCase() !== key) : []);
    const preferred_plate_number = this._settings.get("plate_number");
    if (typeof preferred_plate_number === "string" && preferred_plate_number.trim().toLowerCase() === key) {
      this._settings.saveUserSetting("plate_number", "");
    }
    this._removed_plate_numbers.update((removed) => [...removed, key]);
  }
  _timeSync(model = this.model) {
    return model?._time_sync || getFormTimeSyncHandle(this.form());
  }
  showPlateNumberError() {
    const field = this.form()?.plate_number;
    const state = field?.();
    return !!state?.touched?.() && !!state?.invalid?.();
  }
  _buildingForBookingZones(zones, buildings) {
    const zone_ids = new Set((zones || []).filter((_) => !!_));
    return (buildings || []).find((bld) => zone_ids.has(bld.id) || bld.levels?.some((level) => zone_ids.has(level.id)));
  }
  _updateFormTimes(start_mins, end_mins) {
    const model = this.model;
    if (!model)
      return;
    const current = untracked(model);
    const raw_date = current.date || Date.now();
    const tz = this.timezone;
    const day = startOfDayInTimezone(raw_date, tz);
    let new_date = day + start_mins * 60 * 1e3;
    const raw_duration = end_mins > start_mins ? end_mins - start_mins : end_mins + 1440 - start_mins;
    const duration = Math.max(raw_duration, 30);
    this._selected_shift_duration.set(duration);
    if (!current.id) {
      while (new_date + duration * 60 * 1e3 <= Date.now()) {
        new_date = addDays(new_date, 1).valueOf();
      }
    }
    const new_date_end = new_date + duration * 60 * 1e3;
    if (current.all_day === false && current.date === new_date && current.date_end === new_date_end && current.duration === duration) {
      return;
    }
    this._timeSync(model)?.updateOptions({
      bookable_hours: null,
      default_duration: duration,
      timezone: this.timezone
    });
    model.update((m) => __spreadProps(__spreadValues(__spreadValues({}, m), m.all_day ? { all_day: false } : {}), {
      date: new_date,
      date_end: new_date_end,
      duration
    }));
    this.timeout("parking-request-shift-duration", () => {
      const value = untracked(model);
      if (value.date !== new_date || value.duration === duration && value.date_end === new_date_end) {
        return;
      }
      model.update((m) => __spreadProps(__spreadValues({}, m), {
        duration,
        date_end: new_date_end
      }));
    }, 0);
  }
  _computeDaysBitmask() {
    let bitmask = 0;
    this.selected_days().forEach((day) => bitmask |= 1 << day);
    return bitmask;
  }
  _updateRecurrenceDays() {
    const model = this.model;
    if (!model || this.booking_frequency() !== "daily")
      return;
    model.update((m) => __spreadProps(__spreadValues({}, m), {
      recurrence_days: this._computeDaysBitmask()
    }));
  }
  _updateRecurrenceEnd() {
    const model = this.model;
    if (!model || this.booking_frequency() !== "daily")
      return;
    const dates = this._computeRecurrenceDates();
    if (!dates.length)
      return;
    model.update((m) => __spreadProps(__spreadValues({}, m), {
      recurrence_end: getUnixTime(endOfDay(dates[dates.length - 1]))
    }));
  }
  _computeRecurrenceDates() {
    const model = this.model;
    if (!model)
      return [];
    const raw_date = model()?.date || Date.now();
    const reference = startOfDay(raw_date);
    const latest_date = this.end_date();
    const ref_dow = reference.getDay() === 0 ? 7 : reference.getDay();
    const selected = [...this.selected_days()].sort((a, b) => a - b);
    const weeks = Math.max(1, this.num_weeks());
    const dates = [];
    for (const day of selected) {
      const offset = (day - ref_dow + 7) % 7;
      for (let w = 0; w < weeks; w++) {
        dates.push(addDays(reference, offset + w * 7).valueOf());
      }
    }
    return dates.filter((date) => date <= latest_date).sort((a, b) => a - b);
  }
  _defaultCustomShift() {
    const tz = this.timezone;
    const { hours, minutes } = getTimeInTimezone(Date.now(), tz || void 0);
    const current_mins = hours * 60 + minutes;
    const start_time = Math.min((Math.floor(current_mins / 30) + 1) * 30, 1410);
    return {
      start_time,
      end_time: Math.min(start_time + 120, 1439)
    };
  }
  _normaliseShiftTime(start_mins, end_mins) {
    return {
      start_time: Math.max(0, Math.min(start_mins, 1439)),
      end_time: Math.max(0, Math.min(end_mins, 1439))
    };
  }
  _normaliseShiftOptions(options) {
    return (options || []).filter((option) => !!option?.id && option.id !== CUSTOM_SHIFT_ID && option.id !== ALL_DAY_SHIFT_ID && typeof option.start_time === "number" && typeof option.end_time === "number").map((option) => __spreadProps(__spreadValues({
      id: option.id,
      name: option.name || option.id
    }, this._normaliseShiftTime(option.start_time, option.end_time)), {
      groups: option.groups?.filter((group) => !!group)
    }));
  }
  _normaliseOptions(options) {
    return (options || []).filter((option) => !!option?.id).map((option) => ({
      id: option.id,
      name: option.name || option.id
    }));
  }
  _normaliseRequestTypes(request_types) {
    return (request_types || []).map((type) => {
      const id = type?.id || type?.value;
      if (!id)
        return null;
      const forced_time = typeof type.forced_time?.start_time === "number" && typeof type.forced_time?.end_time === "number" ? this._normaliseShiftTime(type.forced_time.start_time, type.forced_time.end_time) : void 0;
      return {
        id,
        name: type.name || type.label || id,
        description: type.description,
        badge: type.badge,
        groups: type.groups?.filter((group) => !!group),
        approver_groups: type.approver_groups?.filter((group) => !!group),
        book_as: type.book_as === "internals" || type.book_as === "externals" || type.book_as === "both" ? type.book_as : void 0,
        show_notes: !!type.show_notes,
        requires_manual_approval: !!type.requires_manual_approval,
        forced_time
      };
    }).filter((type) => !!type) || [];
  }
  /**
   * Seed the shift state from the form's current date/duration and then
   * pick the preferred shift for the active configuration. Called once
   * on initialisation.
   */
  _initShiftStateFromForm(model) {
    const default_custom_shift = this._defaultCustomShift();
    this.custom_start_time_mins.set(default_custom_shift.start_time);
    this.custom_end_time_mins.set(default_custom_shift.end_time);
    const date = model().date;
    if (date) {
      const { hours, minutes } = getTimeInTimezone(date, this.timezone || void 0);
      const start = hours * 60 + minutes;
      const duration = model().duration || DEFAULT_DAY_DURATION_MINS;
      this.start_time_mins.set(start);
      this.end_time_mins.set(start + duration);
      const { start_time, end_time } = this._normaliseShiftTime(start, (start + duration) % 1440);
      this.custom_start_time_mins.set(start_time);
      this.custom_end_time_mins.set(end_time);
    } else {
      this.start_time_mins.set(default_custom_shift.start_time);
      this.end_time_mins.set(default_custom_shift.end_time);
    }
    this._applyPreferredShift();
  }
  /**
   * Pick and apply the best shift for the active configuration. The
   * resolution order matches the user-facing rules:
   *
   * 1. No presets and no custom → force all-day.
   * 2. Presets exist → prefer a preset matching the current start/end
   *    times, otherwise default to the first preset. Custom is only
   *    reached via an explicit user action against the dropdown — auto
   *    initialisation must always land on a preset when one is offered.
   * 3. No presets but custom is allowed → custom.
   */
  _applyPreferredShift() {
    if (this.is_all_day_forced()) {
      this._applyShift(ALL_DAY_SHIFT_ID);
      return;
    }
    if (this.has_preset_shifts()) {
      const matching_preset = this.shift_options().find((_) => this._matchesShiftOption(_, this.start_time_mins(), this.end_time_mins()));
      this._applyShift((matching_preset || this.shift_options()[0]).id);
      return;
    }
    this._applyShift(CUSTOM_SHIFT_ID);
  }
  _syncRequestTypeTime() {
    const forced_time = this.forced_request_time();
    if (forced_time) {
      if (!this._saved_shift_state) {
        this._saved_shift_state = {
          type: this.shift_type(),
          start_time: this.start_time_mins(),
          end_time: this.end_time_mins()
        };
      }
      this.custom_start_time_mins.set(forced_time.start_time);
      this.custom_end_time_mins.set(forced_time.end_time);
      this.start_time_mins.set(forced_time.start_time);
      this.end_time_mins.set(forced_time.end_time);
      this.shift_type.set(CUSTOM_SHIFT_ID);
      this._updateFormTimes(forced_time.start_time, forced_time.end_time);
      return;
    }
    if (this._saved_shift_state) {
      const saved_shift = this._saved_shift_state;
      this._saved_shift_state = null;
      this._restoreShiftState(saved_shift);
      return;
    }
    this._applyPreferredShift();
  }
  _restoreShiftState(shift) {
    if (this.is_all_day_forced()) {
      this._applyShift(ALL_DAY_SHIFT_ID);
      return;
    }
    const preset = shift.type !== CUSTOM_SHIFT_ID && this.shift_options().find((_) => _.id === shift.type) || this.shift_options().find((_) => this._matchesShiftOption(_, shift.start_time, shift.end_time));
    if (preset) {
      this._applyShift(preset.id);
      return;
    }
    if (!this.allow_custom_shift()) {
      this._applyShift(this.shift_options()[0].id);
      return;
    }
    const { start_time, end_time } = this._normaliseShiftTime(shift.start_time, shift.end_time);
    this.custom_start_time_mins.set(start_time);
    this.custom_end_time_mins.set(end_time);
    this._applyShift(CUSTOM_SHIFT_ID);
  }
  _matchesShiftOption(option, start_time, end_time) {
    return option.start_time === start_time && this._shiftDuration(option.start_time, option.end_time) === this._shiftDuration(start_time, end_time);
  }
  _shiftDuration(start_time, end_time) {
    return end_time > start_time ? end_time - start_time : 1440 - start_time + end_time;
  }
  _syncRequestTypeUser(model) {
    const current_user = currentUser();
    const selected_user = model().user;
    if (this.allow_any_host())
      return;
    if (!this.can_book_for_anyone() || !this.host_book_as()) {
      if (this.force_show_host_select()) {
        if (selected_user?.is_external) {
          model.update((m) => __spreadProps(__spreadValues({}, m), { user: current_user || null }));
        }
        return;
      }
      if (current_user && selected_user?.email !== current_user.email) {
        model.update((m) => __spreadProps(__spreadValues({}, m), { user: current_user }));
      }
      return;
    }
    if (this.host_book_as() === "externals" && !selected_user?.is_external) {
      model.update((m) => __spreadProps(__spreadValues({}, m), { user: null }));
      return;
    }
    if (this.host_book_as() === "internals" && selected_user?.is_external) {
      model.update((m) => __spreadProps(__spreadValues({}, m), { user: current_user || null }));
    }
  }
  _syncPrefilledPlateNumber(model) {
    runInInjectionContext(this._injector, () => effect(() => {
      const plate_number = model().plate_number;
      if (this._prefilled_plate_number)
        return;
      if (this._userEmail(model().user) !== this._userEmail(currentUser())) {
        return;
      }
      if (!plate_number)
        return;
      this._prefilled_plate_number = plate_number;
    }));
  }
  _syncPlateNumberUser(model) {
    let previous_email = this._userEmail(model().user);
    runInInjectionContext(this._injector, () => effect(() => {
      const selected_user = model().user;
      const current_email = this._userEmail(currentUser());
      const selected_email = this._userEmail(selected_user);
      const user_changed = selected_email !== previous_email;
      previous_email = selected_email;
      if (!user_changed || !current_email || !selected_email)
        return;
      if (selected_email === current_email) {
        if (this._prefilled_plate_number && model().plate_number !== this._prefilled_plate_number) {
          model.update((m) => __spreadProps(__spreadValues({}, m), {
            plate_number: this._prefilled_plate_number
          }));
        }
        return;
      }
      if (!model().plate_number)
        return;
      model.update((m) => __spreadProps(__spreadValues({}, m), { plate_number: "" }));
    }));
  }
  _userEmail(user) {
    return user?.email?.trim().toLowerCase() || "";
  }
  static {
    this.\u0275fac = function ParkingRequestFormDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingRequestFormDetailsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingRequestFormDetailsComponent, selectors: [["parking-request-form-details"]], inputs: { form: [1, "form"], model_input: [1, "model_input"], show_special_needs: [1, "show_special_needs"], force_show_host_select: [1, "force_show_host_select"], force_allow_any_host: [1, "force_allow_any_host"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [["plate_number_auto", "matAutocomplete"], [1, "flex", "flex-col", "gap-2", "sm:gap-4"], [1, "gradient", "border-base-content", "flex", "items-center", "space-x-2", "border-l-8", "px-4", "py-3", "font-medium"], [1, "space-y-3", "p-4"], [3, "formField", "to", "timezone"], [1, "space-y-2"], [1, "flex", "cursor-pointer", "items-start", "gap-3", "rounded-lg", "border", "p-4", "transition-colors", 3, "border-info", "border-base-300"], [1, "border-base-300", "space-y-3", "border-t", "pt-3"], [1, "border-base-300", "bg-base-200", "rounded-lg", "border", "px-4", "py-3"], [1, "space-y-3"], [1, "border-base-300", "mx-4", "space-y-3", "rounded-lg", "border", "p-4"], [1, "flex", "flex-col", "gap-3", "sm:flex-row", "sm:gap-4"], [1, "flex-1"], [1, "mb-1", "block", "text-sm", "font-medium"], ["appearance", "outline", 1, "w-full"], [3, "formField"], [3, "value"], ["matInput", "", "autocomplete", "off", 3, "ngModelChange", "ngModel", "ngModelOptions", "matAutocomplete", "placeholder"], [1, "border-base-300", "space-y-3", "rounded-lg", "border", "p-4"], [1, "flex", "cursor-pointer", "items-start", "gap-3", "rounded-lg", "border", "p-4", "transition-colors", 3, "click"], [1, "mt-0.5", "flex", "h-5", "w-5", "shrink-0", "items-center", "justify-center", "rounded-full", "border-2"], [1, "bg-info", "h-2.5", "w-2.5", "rounded-full"], [1, "font-medium"], [1, "text-sm", "opacity-60"], [1, "border-base-300", "mt-3", "space-y-3", "rounded-lg", "border", "p-3"], [1, "text-sm", "font-medium"], [1, "flex", "gap-2"], ["type", "button", 1, "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full", "border-2", "text-sm", "font-medium", "transition-colors", 3, "border-info", "bg-info", "text-info-content", "border-base-300"], [1, "space-y-1"], [1, "flex", "items-center", "gap-2", "text-sm"], ["type", "button", 1, "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full", "border-2", "text-sm", "font-medium", "transition-colors", 3, "click"], ["type", "button", 1, "flex", "h-10", "min-w-10", "items-center", "justify-center", "rounded-full", "border-2", "px-3", "text-sm", "font-medium", "transition-colors", 3, "border-info", "bg-info", "text-info-content", "border-base-300"], ["type", "button", 1, "flex", "h-10", "min-w-10", "items-center", "justify-center", "rounded-full", "border-2", "px-3", "text-sm", "font-medium", "transition-colors", 3, "click"], [1, "bg-success", "h-2", "w-2", "rounded-full"], [1, "flex", "items-center", "gap-2"], [1, "bg-base-200", "rounded", "px-2", "py-0.5", "text-center", "text-xs"], [3, "formField", "guests", "guests_only", "disable_search", "allow_externals"], ["matInput", "", "rows", "3", 3, "formField"], [1, "gradient", "border-base-content", "text-warning", "flex", "items-center", "space-x-2", "border-l-8", "px-4", "py-3", "font-medium"], [1, "space-y-6", "p-4"], [1, "mb-2", "block", "text-sm", "font-medium"], [1, "text-error"], ["matInput", "", "formControlName", "notes", "rows", "6", 1, "border-base-content", "w-full", "rounded-lg", "border", "p-4", "text-base", 3, "placeholder"], [1, "mb-2", "text-sm", "font-medium"], ["for", "p2-supporting-docs", 1, "border-base-300", "hover:border-info", "flex", "cursor-pointer", "items-start", "gap-3", "rounded-lg", "border", "p-4", "transition-colors"], [1, "mt-0.5", "text-xl"], [1, "text-sm", "opacity-70"], ["id", "p2-supporting-docs", "type", "file", "multiple", "", "accept", ".pdf,.doc,.docx,.jpg,.jpeg,.png", 1, "hidden", 3, "change"], [1, "mt-3", "space-y-2"], [1, "border-base-300", "bg-base-100", "flex", "items-center", "justify-between", "rounded-lg", "border", "p-1"], [1, "truncate", "px-4", "py-2", "text-sm"], [1, "flex", "items-center"], ["icon", "", "type", "button", "matRipple", "", 3, "click"], [1, "flex", "gap-4"], [3, "selectionChange", "value"], [1, "flex", "min-h-15", "cursor-pointer", "items-center", "gap-3", "rounded-lg", "border", "px-4", "py-2", "transition-colors", 3, "border-info", "border-base-300"], [1, "flex", "min-h-15", "cursor-pointer", "items-center", "gap-3", "rounded-lg", "border", "px-4", "py-2", "transition-colors", 3, "click"], ["matTooltip", "Matched to desk booking", 1, "bg-info", "text-info-content", "flex", "h-6", "w-6", "shrink-0", "items-center", "justify-center", "rounded-full"], [1, "flex", "flex-1", "items-center", "justify-between", "gap-3"], [1, "border-base-300", "flex", "shrink-0", "items-center", "space-x-2", "rounded-md", "border", "py-1", "pr-1", "pl-3", "text-sm"], [1, "text-base!"], [1, "p-2", "text-sm", "font-medium", "opacity-60"], [1, "ml-1!", "text-lg"], [1, "rounded-sm", "px-2", "py-1", "font-mono", "text-xs"], [1, "text-success", "flex", "items-center", "gap-2", "text-sm", "font-bold", "tracking-wider", "uppercase"], [1, "text-lg"], [1, "flex", "items-center", "justify-between", "gap-3"], [1, "border-base-300", "mr-2", "flex", "shrink-0", "items-center", "space-x-2", "rounded-md", "border", "py-1", "pr-1", "pl-3", "text-sm"], [1, "pr-2", "text-sm", "font-medium", "opacity-60"], [1, "flex", "w-full", "items-center", "gap-2"], ["icon", "", "default", "", "error", "", "type", "button", 1, "text-xs", 3, "mousedown", "click"], [1, "text-info", "flex", "items-center", "gap-2", "text-sm", "font-bold", "tracking-wider", "uppercase"], [3, "formField", "placeholder"], ["id", "parking-space-restrictions-label"], ["aria-hidden", "true"], [1, "flex", "flex-col", "gap-2"], ["aria-labelledby", "parking-space-restrictions-label", 1, "flex", "flex-col", "gap-2", 3, "formField"], ["role", "alert", 1, "text-error", "text-sm"], [3, "label", "ngModel", "ngModelOptions"], [3, "ngModelChange", "label", "ngModel", "ngModelOptions"]], template: function ParkingRequestFormDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ParkingRequestFormDetailsComponent_Conditional_0_Template, 66, 39, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.form() && ctx.model ? 0 : -1);
      }
    }, dependencies: [
      CommonModule,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      FormField,
      MatAutocompleteModule,
      MatAutocomplete,
      MatOption,
      MatAutocompleteTrigger,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      MatRadioModule,
      MatRadioGroup,
      MatRadioButton,
      MatSelectModule,
      MatSelect,
      MatSelectTrigger,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      DateFieldComponent,
      UserSearchFieldComponent,
      SettingsToggleComponent,
      MatRippleModule,
      MatRipple,
      DecimalPipe,
      DatePipe,
      TranslatePipe
    ], styles: ["\n.gradient[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      105deg,\n      var(--base-200) 0%,\n      var(--base-200) 50%,\n      var(--base-100) 100%);\n}\n/*# sourceMappingURL=parking-request-form-details.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingRequestFormDetailsComponent, [{
    type: Component,
    args: [{ selector: "parking-request-form-details", template: `
        @if (form() && model) {
            <div class="flex flex-col gap-2 sm:gap-4">
                <!-- BOOKING FREQUENCY -->
                <div
                    class="gradient border-base-content flex items-center space-x-2 border-l-8 px-4 py-3 font-medium"
                >
                    <icon>date_range</icon>
                    <div>
                        {{ 'BOOKINGS.PARKING_BOOKING_FREQUENCY' | translate }}
                    </div>
                </div>
                <div class="space-y-3 p-4">
                    <a-date-field
                        [formField]="form().date"
                        [to]="end_date()"
                        [timezone]="timezone"
                    ></a-date-field>
                    @if (allow_recurrence()) {
                        <div class="space-y-2">
                            <div
                                class="flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors"
                                [class.border-info]="
                                    booking_frequency() === 'single'
                                "
                                [class.border-base-300]="
                                    booking_frequency() !== 'single'
                                "
                                (click)="setBookingFrequency('single')"
                            >
                                <div
                                    class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2"
                                    [class.border-info]="
                                        booking_frequency() === 'single'
                                    "
                                    [class.border-base-300]="
                                        booking_frequency() !== 'single'
                                    "
                                >
                                    @if (booking_frequency() === 'single') {
                                        <div
                                            class="bg-info h-2.5 w-2.5 rounded-full"
                                        ></div>
                                    }
                                </div>
                                <div>
                                    <div class="font-medium">
                                        {{
                                            'BOOKINGS.PARKING_FREQUENCY_SINGLE'
                                                | translate
                                        }}
                                    </div>
                                    <div class="text-sm opacity-60">
                                        {{
                                            'BOOKINGS.PARKING_FREQUENCY_SINGLE_DESC'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </div>
                            <div
                                class="flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors"
                                [class.border-info]="
                                    booking_frequency() === 'daily'
                                "
                                [class.border-base-300]="
                                    booking_frequency() !== 'daily'
                                "
                                (click)="setBookingFrequency('daily')"
                            >
                                <div
                                    class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2"
                                    [class.border-info]="
                                        booking_frequency() === 'daily'
                                    "
                                    [class.border-base-300]="
                                        booking_frequency() !== 'daily'
                                    "
                                >
                                    @if (booking_frequency() === 'daily') {
                                        <div
                                            class="bg-info h-2.5 w-2.5 rounded-full"
                                        ></div>
                                    }
                                </div>
                                <div class="flex-1">
                                    <div class="font-medium">
                                        {{
                                            'BOOKINGS.PARKING_FREQUENCY_DAILY'
                                                | translate
                                        }}
                                    </div>
                                    <div class="text-sm opacity-60">
                                        {{
                                            'BOOKINGS.PARKING_FREQUENCY_DAILY_DESC'
                                                | translate
                                        }}
                                    </div>
                                    @if (booking_frequency() === 'daily') {
                                        <div
                                            class="border-base-300 mt-3 space-y-3 rounded-lg border p-3"
                                        >
                                            <div class="text-sm font-medium">
                                                {{
                                                    'BOOKINGS.PARKING_FREQUENCY_SELECT_DAYS'
                                                        | translate
                                                }}
                                            </div>
                                            <div class="flex gap-2">
                                                @for (
                                                    day of WEEKDAY_OPTIONS;
                                                    track day.index
                                                ) {
                                                    <button
                                                        type="button"
                                                        class="flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-medium transition-colors"
                                                        [class.border-info]="
                                                            isDaySelected(
                                                                day.index
                                                            )
                                                        "
                                                        [class.bg-info]="
                                                            isDaySelected(
                                                                day.index
                                                            )
                                                        "
                                                        [class.text-info-content]="
                                                            isDaySelected(
                                                                day.index
                                                            )
                                                        "
                                                        [class.border-base-300]="
                                                            !isDaySelected(
                                                                day.index
                                                            )
                                                        "
                                                        (click)="
                                                            $event.stopPropagation();
                                                            toggleDay(day.index)
                                                        "
                                                    >
                                                        {{
                                                            day.date
                                                                | date: 'EEE'
                                                        }}
                                                    </button>
                                                }
                                            </div>
                                            @if (max_weeks() > 1) {
                                                <div
                                                    class="text-sm font-medium"
                                                >
                                                    {{
                                                        'BOOKINGS.PARKING_FREQUENCY_NUM_WEEKS'
                                                            | translate
                                                    }}
                                                </div>
                                                <div class="flex gap-2">
                                                    @for (
                                                        w of week_options();
                                                        track w
                                                    ) {
                                                        <button
                                                            type="button"
                                                            class="flex h-10 min-w-10 items-center justify-center rounded-full border-2 px-3 text-sm font-medium transition-colors"
                                                            [class.border-info]="
                                                                num_weeks() ===
                                                                w
                                                            "
                                                            [class.bg-info]="
                                                                num_weeks() ===
                                                                w
                                                            "
                                                            [class.text-info-content]="
                                                                num_weeks() ===
                                                                w
                                                            "
                                                            [class.border-base-300]="
                                                                num_weeks() !==
                                                                w
                                                            "
                                                            (click)="
                                                                $event.stopPropagation();
                                                                setNumWeeks(w)
                                                            "
                                                        >
                                                            {{
                                                                (w === 1
                                                                    ? 'BOOKINGS.PARKING_FREQUENCY_WEEK'
                                                                    : 'BOOKINGS.PARKING_FREQUENCY_WEEKS'
                                                                )
                                                                    | translate
                                                                        : {
                                                                              weeks: w,
                                                                          }
                                                            }}
                                                        </button>
                                                    }
                                                </div>
                                            }
                                            <div class="text-sm font-medium">
                                                {{
                                                    'BOOKINGS.PARKING_FREQUENCY_DATES_HEADER'
                                                        | translate
                                                }}
                                            </div>
                                            <div class="space-y-1">
                                                @for (
                                                    day of weekdays;
                                                    track $index
                                                ) {
                                                    <div
                                                        class="flex items-center gap-2 text-sm"
                                                    >
                                                        <div
                                                            class="bg-success h-2 w-2 rounded-full"
                                                        ></div>
                                                        {{
                                                            day
                                                                | date
                                                                    : 'EEEE, d MMMM yyyy'
                                                        }}
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    }
                </div>

                <!-- REQUEST TYPE -->
                <div
                    class="gradient border-base-content flex items-center space-x-2 border-l-8 px-4 py-3 font-medium"
                >
                    <icon>ballot</icon>
                    <div>
                        {{ 'BOOKINGS.PARKING_REQUEST_TYPE' | translate }}
                    </div>
                </div>
                <div class="space-y-3 p-4">
                    <div class="space-y-2">
                        @for (type of request_types(); track trackById(type)) {
                            <div
                                class="flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors"
                                [class.border-info]="
                                    model().request_type === type.id
                                "
                                [class.border-base-300]="
                                    model().request_type !== type.id
                                "
                                (click)="setRequestType(type.id)"
                            >
                                <div
                                    class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2"
                                    [class.border-info]="
                                        model().request_type === type.id
                                    "
                                    [class.border-base-300]="
                                        model().request_type !== type.id
                                    "
                                >
                                    @if (model().request_type === type.id) {
                                        <div
                                            class="bg-info h-2.5 w-2.5 rounded-full"
                                        ></div>
                                    }
                                </div>
                                <div>
                                    <div class="flex items-center gap-2">
                                        <span class="font-medium">{{
                                            type.name | translate
                                        }}</span>
                                        @if (type.badge) {
                                            <span
                                                class="bg-base-200 rounded px-2 py-0.5 text-center text-xs"
                                                >{{
                                                    type.badge | translate
                                                }}</span
                                            >
                                        }
                                    </div>
                                    <div class="text-sm opacity-60">
                                        {{ type.description | translate }}
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    @if (show_host_select()) {
                        <div class="border-base-300 space-y-3 border-t pt-3">
                            <h4 class="text-sm font-medium">
                                {{ 'BOOKINGS.REQUEST_SPACE_FOR' | translate }}
                            </h4>
                            <a-user-search-field
                                [formField]="form().user"
                                [guests]="
                                    allow_any_host() ||
                                    (can_book_for_anyone() &&
                                        host_book_as() !== 'internals')
                                "
                                [guests_only]="
                                    !allow_any_host() &&
                                    can_book_for_anyone() &&
                                    host_book_as() === 'externals'
                                "
                                [disable_search]="
                                    !allow_any_host() &&
                                    can_book_for_anyone() &&
                                    host_book_as() === 'externals'
                                "
                                [allow_externals]="
                                    allow_any_host() ||
                                    (can_book_for_anyone() &&
                                        host_book_as() !== 'internals')
                                "
                            ></a-user-search-field>
                        </div>
                    }
                    @if (show_notes()) {
                        <div class="border-base-300 space-y-3 border-t pt-3">
                            <label class="text-sm font-medium">
                                {{ 'FORM.NOTES' | translate }}
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <textarea
                                    matInput
                                    [formField]="form().notes"
                                    rows="3"
                                ></textarea>
                            </mat-form-field>
                        </div>
                    }
                </div>
                @if (
                    model().request_type === 'special' && show_special_needs()
                ) {
                    <!-- P2 SPECIAL NEEDS DETAILS -->
                    <div
                        class="gradient border-base-content text-warning flex items-center space-x-2 border-l-8 px-4 py-3 font-medium"
                    >
                        <icon>description</icon>
                        <div>
                            {{
                                'BOOKINGS.P2_SPECIAL_NEEDS_DETAILS' | translate
                            }}
                        </div>
                    </div>
                    <div class="space-y-6 p-4">
                        <div>
                            <label class="mb-2 block text-sm font-medium">
                                {{
                                    'BOOKINGS.P2_REASON_FOR_REQUEST' | translate
                                }}
                                <span class="text-error">*</span>
                            </label>
                            <textarea
                                matInput
                                formControlName="notes"
                                rows="6"
                                class="border-base-content w-full rounded-lg border p-4 text-base"
                                [placeholder]="
                                    'BOOKINGS.P2_REASON_PLACEHOLDER' | translate
                                "
                            ></textarea>
                        </div>

                        <div>
                            <div class="mb-2 text-sm font-medium">
                                {{
                                    'BOOKINGS.P2_ATTACH_SUPPORTING_DOCS'
                                        | translate
                                }}
                            </div>
                            <label
                                class="border-base-300 hover:border-info flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors"
                                for="p2-supporting-docs"
                            >
                                <icon class="mt-0.5 text-xl">upload_file</icon>
                                <div>
                                    <div class="font-medium">
                                        {{
                                            'BOOKINGS.P2_UPLOAD_FILE'
                                                | translate
                                        }}
                                    </div>
                                    <div class="text-sm opacity-70">
                                        {{
                                            'BOOKINGS.P2_ACCEPTED_FORMATS'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </label>
                            <input
                                id="p2-supporting-docs"
                                type="file"
                                class="hidden"
                                multiple
                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                (change)="onSupportingDocsSelected($event)"
                            />
                            @if (supporting_doc_names().length) {
                                <div class="mt-3 space-y-2">
                                    @for (
                                        file_name of supporting_doc_names();
                                        track $index
                                    ) {
                                        <div
                                            class="border-base-300 bg-base-100 flex items-center justify-between rounded-lg border p-1"
                                        >
                                            <div
                                                class="truncate px-4 py-2 text-sm"
                                            >
                                                {{ file_name }}
                                            </div>
                                            <div class="flex items-center">
                                                <button
                                                    icon
                                                    type="button"
                                                    matRipple
                                                    (click)="
                                                        previewSupportingDoc(
                                                            $index
                                                        )
                                                    "
                                                >
                                                    <icon>open_in_new</icon>
                                                </button>
                                                <button
                                                    icon
                                                    type="button"
                                                    matRipple
                                                    (click)="
                                                        removeSupportingDoc(
                                                            $index
                                                        )
                                                    "
                                                >
                                                    <icon>close</icon>
                                                </button>
                                            </div>
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                }

                <!-- SHIFT SELECTION -->
                <div
                    class="gradient border-base-content flex items-center space-x-2 border-l-8 px-4 py-3 font-medium"
                >
                    <icon>schedule</icon>
                    <div>
                        {{ 'BOOKINGS.PARKING_SHIFT_SELECTION' | translate }}
                    </div>
                </div>
                <div class="space-y-3 p-4">
                    @if (forced_request_time(); as forced_time) {
                        <div
                            class="border-base-300 bg-base-200 rounded-lg border px-4 py-3"
                        >
                            {{ selected_request_type()?.name | translate }}:
                            {{
                                shiftTime(forced_time.start_time)
                                    | date: time_format
                            }}
                            -
                            {{
                                shiftTime(forced_time.end_time)
                                    | date: time_format
                            }}
                        </div>
                    } @else if (is_all_day_forced()) {
                        <div
                            class="border-base-300 bg-base-200 rounded-lg border px-4 py-3"
                        >
                            {{ 'BOOKINGS.PARKING_SHIFT_ALL_DAY' | translate }}
                            @if (show_all_day_shift_window()) {
                                :
                                {{
                                    shiftTime(all_day_shift_window().start_time)
                                        | date: time_format
                                }}
                                -
                                {{
                                    shiftTime(all_day_shift_window().end_time)
                                        | date: time_format
                                }}
                            }
                        </div>
                    } @else {
                        <div class="space-y-3">
                            <div>
                                @if (show_shift_select()) {
                                    <label
                                        class="mb-1 block text-sm font-medium"
                                    >
                                        {{
                                            'BOOKINGS.PARKING_SHIFT_TYPE'
                                                | translate
                                        }}
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            [value]="shift_type()"
                                            (selectionChange)="
                                                setShiftType($event.value)
                                            "
                                        >
                                            <mat-select-trigger>
                                                @if (
                                                    selected_shift_option();
                                                    as option
                                                ) {
                                                    {{
                                                        option.name | translate
                                                    }}
                                                    ({{
                                                        shiftTime(
                                                            option.start_time
                                                        ) | date: time_format
                                                    }}
                                                    -
                                                    {{
                                                        shiftTime(
                                                            option.end_time
                                                        ) | date: time_format
                                                    }})
                                                } @else {
                                                    {{
                                                        'BOOKINGS.PARKING_SHIFT_CUSTOM'
                                                            | translate
                                                    }}
                                                    ({{
                                                        shiftTime(
                                                            start_time_mins()
                                                        ) | date: time_format
                                                    }}
                                                    -
                                                    {{
                                                        shiftTime(
                                                            end_time_mins()
                                                        ) | date: time_format
                                                    }})
                                                }
                                            </mat-select-trigger>
                                            @for (
                                                option of shift_options();
                                                track trackById(option)
                                            ) {
                                                <mat-option [value]="option.id">
                                                    {{
                                                        option.name | translate
                                                    }}
                                                    ({{
                                                        shiftTime(
                                                            option.start_time
                                                        ) | date: time_format
                                                    }}
                                                    -
                                                    {{
                                                        shiftTime(
                                                            option.end_time
                                                        ) | date: time_format
                                                    }})
                                                </mat-option>
                                            }
                                            @if (allow_custom_shift()) {
                                                <mat-option
                                                    [value]="CUSTOM_SHIFT_ID"
                                                >
                                                    {{
                                                        'BOOKINGS.PARKING_SHIFT_CUSTOM'
                                                            | translate
                                                    }}
                                                    ({{
                                                        shiftTime(
                                                            custom_start_time_mins()
                                                        ) | date: time_format
                                                    }}
                                                    -
                                                    {{
                                                        shiftTime(
                                                            custom_end_time_mins()
                                                        ) | date: time_format
                                                    }})
                                                </mat-option>
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                } @else if (
                                    selected_shift_option();
                                    as option
                                ) {
                                    <label
                                        class="mb-1 block text-sm font-medium"
                                    >
                                        {{
                                            'BOOKINGS.PARKING_SHIFT_TYPE'
                                                | translate
                                        }}
                                    </label>
                                    <div
                                        class="border-base-300 bg-base-200 rounded-lg border px-4 py-3"
                                    >
                                        {{ option.name | translate }}
                                        ({{
                                            shiftTime(option.start_time)
                                                | date: time_format
                                        }}
                                        -
                                        {{
                                            shiftTime(option.end_time)
                                                | date: time_format
                                        }})
                                    </div>
                                }
                            </div>
                            @if (show_custom_time_inputs()) {
                                <div class="flex gap-4">
                                    <div class="flex-1">
                                        <label
                                            class="mb-1 block text-sm font-medium"
                                        >
                                            {{ 'FORM.TIME_START' | translate }}
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [value]="start_time_mins()"
                                                (selectionChange)="
                                                    setStartTime($event.value)
                                                "
                                            >
                                                @for (
                                                    opt of time_options();
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            shiftTime(opt.value)
                                                                | date
                                                                    : time_format
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                    <div class="flex-1">
                                        <label
                                            class="mb-1 block text-sm font-medium"
                                        >
                                            {{ 'FORM.TIME_END' | translate }}
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [value]="end_time_mins()"
                                                (selectionChange)="
                                                    setEndTime($event.value)
                                                "
                                            >
                                                @for (
                                                    opt of time_options();
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            shiftTime(opt.value)
                                                                | date
                                                                    : time_format
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                </div>
                            }
                        </div>
                    }
                </div>

                <!-- LOCATION PREFERENCE -->
                @if (hasMultipleBuildings(building_list())) {
                    <div
                        class="gradient border-base-content flex items-center space-x-2 border-l-8 px-4 py-3 font-medium"
                    >
                        <icon>place</icon>
                        <div>
                            {{
                                'BOOKINGS.PARKING_LOCATION_PREFERENCE'
                                    | translate
                            }}
                        </div>
                    </div>
                    <div class="space-y-3 p-4">
                        @if (region_name) {
                            <div class="text-sm font-medium">
                                {{ region_name }}
                            </div>
                        }
                        <div class="space-y-2">
                            @for (
                                bld of building_list();
                                track trackById(bld)
                            ) {
                                <div
                                    class="flex min-h-15 cursor-pointer items-center gap-3 rounded-lg border px-4 py-2 transition-colors"
                                    [class.border-info]="
                                        building()?.id === bld.id
                                    "
                                    [class.border-base-300]="
                                        building()?.id !== bld.id
                                    "
                                    (click)="setBuilding(bld)"
                                >
                                    <div
                                        class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2"
                                        [class.border-info]="
                                            building()?.id === bld.id
                                        "
                                        [class.border-base-300]="
                                            building()?.id !== bld.id
                                        "
                                    >
                                        @if (building()?.id === bld.id) {
                                            <div
                                                class="bg-info h-2.5 w-2.5 rounded-full"
                                            ></div>
                                        }
                                    </div>
                                    @if (
                                        desk_booking_building_id() === bld.id
                                    ) {
                                        <div
                                            class="bg-info text-info-content flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                                            matTooltip="Matched to desk booking"
                                        >
                                            <icon class="text-base!">desk</icon>
                                        </div>
                                    }
                                    <div
                                        class="flex flex-1 items-center justify-between gap-3"
                                    >
                                        <div>
                                            <div class="font-medium">
                                                {{
                                                    bld.display_name || bld.name
                                                }}
                                            </div>
                                            @if (getBayInfo(bld)) {
                                                <div class="text-sm opacity-60">
                                                    {{ getBayInfo(bld) }}
                                                </div>
                                            }
                                        </div>
                                        @if (
                                            building()?.id === bld.id &&
                                            !hide_availability_counter()
                                        ) {
                                            <div
                                                class="border-base-300 flex shrink-0 items-center space-x-2 rounded-md border py-1 pr-1 pl-3 text-sm"
                                            >
                                                @if (availability_loading()) {
                                                    <div
                                                        class="p-2 text-sm font-medium opacity-60"
                                                    >
                                                        Checking...
                                                    </div>
                                                } @else if (
                                                    available_space_count() !==
                                                    null
                                                ) {
                                                    @let percent =
                                                        usage_ratio();
                                                    <div
                                                        class="flex items-center"
                                                    >
                                                        {{
                                                            spaces_in_use_count()
                                                        }}
                                                        of
                                                        {{
                                                            total_space_count()
                                                        }}
                                                        <icon
                                                            class="ml-1! text-lg"
                                                            >car_lock</icon
                                                        >
                                                    </div>
                                                    <div
                                                        class="rounded-sm px-2 py-1 font-mono text-xs"
                                                        [class.bg-error]="
                                                            percent === 1
                                                        "
                                                        [class.text-error-content]="
                                                            percent === 1
                                                        "
                                                        [class.bg-warning]="
                                                            percent > 0.5 &&
                                                            percent < 1
                                                        "
                                                        [class.text-warning-content]="
                                                            percent > 0.5 &&
                                                            percent < 1
                                                        "
                                                        [class.bg-success]="
                                                            percent < 0.5
                                                        "
                                                        [class.text-success-content]="
                                                            percent < 0.5
                                                        "
                                                    >
                                                        {{
                                                            percent * 100
                                                                | number
                                                                    : '1.0-0'
                                                        }}%
                                                    </div>
                                                }
                                            </div>
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                        @if (!hide_prefer_toggle()) {
                            <settings-toggle
                                [formField]="
                                    form().prefer_booked_location_first
                                "
                            >
                                {{
                                    'BOOKINGS.PARKING_PREFER_BOOKED_LOCATION_FIRST'
                                        | translate
                                }}
                            </settings-toggle>
                        }
                    </div>
                } @else {
                    <div
                        class="border-base-300 mx-4 space-y-3 rounded-lg border p-4"
                    >
                        <h3
                            class="text-success flex items-center gap-2 text-sm font-bold tracking-wider uppercase"
                        >
                            <icon class="text-lg">place</icon>
                            {{
                                'BOOKINGS.PARKING_LOCATION_PREFERENCE'
                                    | translate
                            }}
                        </h3>
                        <div class="flex items-center justify-between gap-3">
                            <div>
                                <div class="font-medium">
                                    {{
                                        building()?.display_name ||
                                            building()?.name
                                    }}
                                </div>
                                @if (getBayInfo(building())) {
                                    <div class="text-sm opacity-60">
                                        {{ getBayInfo(building()) }}
                                    </div>
                                }
                            </div>
                            @if (!hide_availability_counter()) {
                                <div
                                    class="border-base-300 mr-2 flex shrink-0 items-center space-x-2 rounded-md border py-1 pr-1 pl-3 text-sm"
                                >
                                    @if (availability_loading()) {
                                        <div
                                            class="pr-2 text-sm font-medium opacity-60"
                                        >
                                            Checking...
                                        </div>
                                    } @else {
                                        @let percent = usage_ratio();
                                        <div class="flex items-center">
                                            {{ spaces_in_use_count() || 0 }} of
                                            {{ total_space_count() || 0 }}
                                            <icon class="ml-1! text-lg"
                                                >car_lock</icon
                                            >
                                        </div>
                                        <div
                                            class="rounded-sm px-2 py-1 font-mono text-xs"
                                            [class.bg-error]="percent === 1"
                                            [class.text-error-content]="
                                                percent === 1
                                            "
                                            [class.bg-warning]="
                                                percent > 0.5 && percent < 1
                                            "
                                            [class.text-warning-content]="
                                                percent > 0.5 && percent < 1
                                            "
                                            [class.bg-success]="percent < 0.5"
                                            [class.text-success-content]="
                                                percent < 0.5
                                            "
                                        >
                                            {{
                                                percent * 100 | number: '2.0-0'
                                            }}%
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                }
                <!-- VEHICLE DETAILS -->
                <div
                    class="gradient border-base-content flex items-center space-x-2 border-l-8 px-4 py-3 font-medium"
                >
                    <icon>directions_car</icon>
                    <div>
                        {{ 'BOOKINGS.PARKING_VEHICLE_DETAILS' | translate }}
                    </div>
                </div>
                <div class="space-y-3 p-4">
                    <div class="flex flex-col gap-3 sm:flex-row sm:gap-4">
                        <div class="flex-1">
                            <label class="mb-1 block text-sm font-medium">
                                {{
                                    'BOOKINGS.PARKING_VEHICLE_TYPE' | translate
                                }}
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select [formField]="form().vehicle_type">
                                    @for (
                                        vtype of vehicle_type_options();
                                        track trackById(vtype)
                                    ) {
                                        <mat-option [value]="vtype.id">{{
                                            vtype.name | translate
                                        }}</mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                        <div class="flex-1">
                            <label class="mb-1 block text-sm font-medium">
                                {{
                                    'BOOKINGS.PARKING_REGISTRATION' | translate
                                }}
                                @if (require_plate_number()) {
                                    <span>*</span>
                                }
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    autocomplete="off"
                                    [ngModel]="model().plate_number"
                                    [ngModelOptions]="{ standalone: true }"
                                    (ngModelChange)="setPlateNumber($event)"
                                    [matAutocomplete]="plate_number_auto"
                                    [placeholder]="
                                        'BOOKINGS.PARKING_REGISTRATION_PLACEHOLDER'
                                            | translate
                                    "
                                />
                                <mat-autocomplete
                                    #plate_number_auto="matAutocomplete"
                                >
                                    @for (
                                        plate_number of plate_number_options();
                                        track plate_number
                                    ) {
                                        <mat-option [value]="plate_number">
                                            <div
                                                class="flex w-full items-center gap-2"
                                            >
                                                <span class="flex-1">{{
                                                    plate_number
                                                }}</span>
                                                <button
                                                    icon
                                                    default
                                                    error
                                                    type="button"
                                                    class="text-xs"
                                                    [attr.aria-label]="
                                                        'Remove ' + plate_number
                                                    "
                                                    (mousedown)="
                                                        $event.stopPropagation()
                                                    "
                                                    (click)="
                                                        removePlateNumber(
                                                            $event,
                                                            plate_number
                                                        )
                                                    "
                                                >
                                                    <icon>close</icon>
                                                </button>
                                            </div>
                                        </mat-option>
                                    }
                                </mat-autocomplete>
                                @if (showPlateNumberError()) {
                                    <mat-error>
                                        {{
                                            'BOOKINGS.PARKING_PLATE_NUMBER_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                }
                            </mat-form-field>
                        </div>
                    </div>
                </div>

                <!-- APPROVER GROUP -->
                @if (
                    filtered_approver_group_options().length &&
                    !is_auto_approved()
                ) {
                    <div
                        class="border-base-300 space-y-3 rounded-lg border p-4"
                    >
                        <h3
                            class="text-info flex items-center gap-2 text-sm font-bold tracking-wider uppercase"
                        >
                            <icon class="text-lg">group</icon>
                            {{
                                'BOOKINGS.PARKING_APPROVER_GROUP_TITLE'
                                    | translate
                            }}
                        </h3>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                [formField]="form().approver_group"
                                [placeholder]="
                                    'BOOKINGS.PARKING_APPROVER_GROUP_PLACEHOLDER'
                                        | translate
                                "
                            >
                                @for (
                                    option of filtered_approver_group_options();
                                    track trackById(option)
                                ) {
                                    <mat-option [value]="option.id">{{
                                        option.name | translate
                                    }}</mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }

                <!-- SPACE RESTRICTIONS -->
                @if (
                    space_restriction_options().length ||
                    extra_space_restriction_options().length
                ) {
                    <div
                        class="gradient border-base-content flex items-center space-x-2 border-l-8 px-4 py-3 font-medium"
                    >
                        <icon>tune</icon>
                        <div id="parking-space-restrictions-label">
                            {{
                                'BOOKINGS.PARKING_SPACE_RESTRICTIONS_TITLE'
                                    | translate
                            }}
                            @if (require_space_restriction()) {
                                <span aria-hidden="true">*</span>
                            }
                        </div>
                    </div>
                    <div class="space-y-3 p-4">
                        <p class="text-sm opacity-60">
                            {{
                                'BOOKINGS.PARKING_SPACE_RESTRICTIONS_DESC'
                                    | translate
                            }}
                        </p>
                        @if (space_restriction_options().length) {
                            <mat-radio-group
                                class="flex flex-col gap-2"
                                aria-labelledby="parking-space-restrictions-label"
                                [attr.aria-required]="
                                    require_space_restriction()
                                "
                                [attr.aria-invalid]="
                                    form().space_restrictions().invalid()
                                "
                                [formField]="form().space_restrictions"
                            >
                                @for (
                                    option of space_restriction_options();
                                    track trackById(option)
                                ) {
                                    <mat-radio-button [value]="option.id">
                                        {{ option.name | translate }}
                                    </mat-radio-button>
                                }
                            </mat-radio-group>
                            @if (
                                require_space_restriction() &&
                                form().space_restrictions().touched() &&
                                form().space_restrictions().invalid()
                            ) {
                                <p class="text-error text-sm" role="alert">
                                    {{
                                        'BOOKINGS.PARKING_SPACE_RESTRICTION_REQUIRED'
                                            | translate
                                    }}
                                </p>
                            }
                        }
                        @if (extra_space_restriction_options().length) {
                            <div class="flex flex-col gap-2">
                                @for (
                                    option of extra_space_restriction_options();
                                    track trackById(option)
                                ) {
                                    <settings-toggle
                                        [label]="option.name | translate"
                                        [ngModel]="
                                            isExtraRestrictionSelected(
                                                option.id
                                            )
                                        "
                                        (ngModelChange)="
                                            setExtraRestriction(
                                                option.id,
                                                $event
                                            )
                                        "
                                        [ngModelOptions]="{ standalone: true }"
                                    ></settings-toggle>
                                }
                            </div>
                        }
                    </div>
                }
            </div>
        }
    `, imports: [
      CommonModule,
      FormsModule,
      FormField,
      MatAutocompleteModule,
      MatFormFieldModule,
      MatInputModule,
      MatRadioModule,
      MatSelectModule,
      MatTooltipModule,
      TranslatePipe,
      IconComponent,
      DateFieldComponent,
      UserSearchFieldComponent,
      SettingsToggleComponent,
      MatRippleModule
    ], styles: ["/* angular:styles/component:css;3969732fa8a6995c9449a9ed86fb4979a28ba38038cac555e3a6a8befda2e8d7;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/book/parking-request-flow/parking-request-form-details.component.ts */\n.gradient {\n  background:\n    linear-gradient(\n      105deg,\n      var(--base-200) 0%,\n      var(--base-200) 50%,\n      var(--base-100) 100%);\n}\n/*# sourceMappingURL=parking-request-form-details.component.css.map */\n"] }]
  }], () => [], { form: [{ type: Input, args: [{ isSignal: true, alias: "form", required: false }] }], model_input: [{ type: Input, args: [{ isSignal: true, alias: "model_input", required: false }] }], show_special_needs: [{ type: Input, args: [{ isSignal: true, alias: "show_special_needs", required: false }] }], force_show_host_select: [{ type: Input, args: [{ isSignal: true, alias: "force_show_host_select", required: false }] }], force_allow_any_host: [{ type: Input, args: [{ isSignal: true, alias: "force_allow_any_host", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingRequestFormDetailsComponent, { className: "ParkingRequestFormDetailsComponent", filePath: "apps/workplace/src/app/book/parking-request-flow/parking-request-form-details.component.ts", lineNumber: 1364 });
})();

// apps/workplace/src/app/book/parking-request-flow/parking-request-form.component.ts
var _c02 = (a0) => ({ days: a0 });
function ParkingRequestFormComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "icon", 15);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 26);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "BOOKINGS.PARKING_AFTER_HOURS_WARNING"));
  }
}
function ParkingRequestFormComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 22);
    \u0275\u0275text(1, "progress_activity");
    \u0275\u0275elementEnd();
  }
}
function ParkingRequestFormComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 18);
    \u0275\u0275text(1, "send");
    \u0275\u0275elementEnd();
  }
}
function ParkingRequestFormComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 24);
    \u0275\u0275text(1, "keyboard_arrow_right");
    \u0275\u0275elementEnd();
  }
}
function ParkingRequestFormComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "div", 27);
    \u0275\u0275pipe(2, "sanitize");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(2, 1, ctx_r0.submission_notes_html()), \u0275\u0275sanitizeHtml);
  }
}
var ParkingRequestFormComponent = class _ParkingRequestFormComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(BookingFormService);
    this._parking = inject(ParkingService);
    this._settings = inject(SettingsService);
    this._router = inject(Router);
    this._org = inject(OrganisationService);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_special_needs = signal(
      true,
      ...ngDevMode ? [{ debugName: "show_special_needs" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.available_days = settingSignal("parking.available_period", 14);
    this.submission_notes_html = computed(
      () => settingSignal("parking.request_submission_notes_html", "")().trim(),
      ...ngDevMode ? [{ debugName: "submission_notes_html" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.clearForm = () => this._state.resetForm();
    this.submitRequest = async () => {
      const { date } = this.model();
      if (!date) {
        this.model.update((m) => __spreadProps(__spreadValues({}, m), {
          date: roundToNearestMinutes(Date.now(), {
            nearestTo: 5,
            roundingMethod: "ceil"
          }).valueOf()
        }));
      }
      this.model.update((m) => __spreadProps(__spreadValues({}, m), {
        asset_id: `unallocated-${randomString(8)}`,
        asset_name: "Parking Request",
        description: "Parking Request",
        title: m.title || "Parking Request",
        plate_number: `${m.plate_number || ""}`.trim()
      }));
      if (this.model().request_type === "special" && !`${this.model().notes || ""}`.trim()) {
        return notifyError("Reason for request is required for P2 Special Needs Request.");
      }
      const building = this._org.building;
      const location2 = building?.display_name || building?.name || this.model().location;
      const extension_data = __spreadProps(__spreadValues({}, this.model().extension_data || {}), {
        location: location2
      });
      this.model.update((m) => __spreadProps(__spreadValues({}, m), {
        zones: [
          this._org.organisation.id,
          this._org.region?.id,
          building?.id
        ].filter(Boolean),
        location: location2,
        extension_data
      }));
      if (!this.form().valid())
        return notifyError(`Some fields are invalid. [${getInvalidSignalFields(this.form, this.model).join(", ")}]`);
      const plate_number = this.model().plate_number;
      this.loading.set(true);
      try {
        const r = await this._state.postForm().catch((_) => {
          notifyError(`Unable to submit parking request. ${_}`);
          return null;
        });
        if (!r)
          return;
        this._savePlateNumber(plate_number);
        this._router.navigate(["/book", "parking-request", "success"]);
        this._state.setView("success");
      } finally {
        this.loading.set(false);
      }
    };
  }
  get form() {
    return this._state.form;
  }
  get model() {
    return this._state.model;
  }
  get user_name() {
    const user = this.model().user;
    return user?.name || user?.email || "";
  }
  async ngOnInit() {
    this._state.setOptions({ type: "parking" });
    const user = currentUser();
    const now = roundToNearestMinutes(Date.now(), {
      nearestTo: 5,
      roundingMethod: "ceil"
    }).valueOf();
    const defaults = {
      user,
      title: "Parking Request",
      request_type: "standard",
      vehicle_type: "car",
      space_restrictions: false,
      extra_space_restrictions: [],
      prefer_booked_location_first: false,
      attachments: [],
      recurrence_type: "none"
    };
    if (!this.model().id) {
      const day_start = startOfDay(now);
      defaults.date = day_start.valueOf() + 7 * 60 * 60 * 1e3;
      defaults.duration = 600;
    }
    this.model.update((m) => __spreadValues(__spreadValues({}, m), defaults));
    const parking_user = this._parking.user_details();
    if (parking_user?.email) {
      if (!this.model().plate_number) {
        this.model.update((m) => __spreadProps(__spreadValues({}, m), {
          plate_number: this._settings.get("plate_number") || parking_user.plate_number || ""
        }));
      }
      this.show_special_needs.set(!!parking_user.special_needs || true);
    }
  }
  _savePlateNumber(plate_number) {
    if (!plate_number)
      return;
    const saved_plate_numbers = this._settings.get("plate_numbers");
    const plate_numbers = Array.isArray(saved_plate_numbers) ? saved_plate_numbers : [];
    this._settings.saveUserSetting("plate_numbers", [
      plate_number,
      ...plate_numbers.filter((_) => typeof _ === "string" && _.trim().toLowerCase() !== plate_number.toLowerCase())
    ]);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275ParkingRequestFormComponent_BaseFactory;
      return function ParkingRequestFormComponent_Factory(__ngFactoryType__) {
        return (\u0275ParkingRequestFormComponent_BaseFactory || (\u0275ParkingRequestFormComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ParkingRequestFormComponent)))(__ngFactoryType__ || _ParkingRequestFormComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingRequestFormComponent, selectors: [["parking-request-form"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 59, vars: 38, consts: [["cdkScrollable", "", 1, "bg-base-200", "relative", "z-0", "flex", "h-full", "w-full", "flex-col", "overflow-auto"], [1, "mx-auto", "min-h-full", "w-[80rem]", "max-w-full", "flex-1", "space-y-2", "px-2", "pt-2", "sm:space-y-4", "sm:px-4", "sm:pt-4"], [1, "border-base-300", "bg-base-100", "flex", "w-full", "flex-col", "overflow-hidden", "rounded-xl", "border"], [1, "gradient", "border-base-content", "relative", "flex", "items-center", "space-x-2", "border-l-8", "px-4", "py-3", "text-xl", "font-medium"], [1, "px-6", "py-4"], [1, "opacity-60"], [3, "form", "model_input", "show_special_needs"], [1, "gradient", "border-base-content", "flex", "items-center", "space-x-2", "border-l-8", "px-4", "py-3", "font-medium"], [1, "space-y-4", "p-4"], [1, "bg-base-200", "border-base-300", "flex", "items-start", "gap-3", "rounded-lg", "border", "p-4"], [1, "text-warning", "mt-0.5", "shrink-0", "text-xl"], [1, "text-sm", 3, "innerHTML"], [1, "space-y-2"], [1, "flex", "items-center", "gap-2"], [1, "text-success", "text-lg"], [1, "text-warning", "text-lg"], [1, "border-base-300", "bg-base-100", "sticky", "bottom-0", "z-20", "flex", "justify-between", "gap-2", "rounded-t-xl", "border-x", "border-t", "p-3", "text-sm", "sm:text-base"], ["btn", "", "matRipple", "", 1, "inverse", "flex", "items-center", "gap-2", 3, "click"], [1, "text-xl"], [1, "pr-2"], ["btn", "", "matRipple", "", 3, "click", "disabled"], [1, "flex", "items-center", "space-x-2"], [1, "animate-spin", "text-2xl"], [1, "flex-1", "pr-4"], [1, "text-2xl"], [1, "border-base-300", "bg-base-100", "rounded-xl", "border", "p-4"], [1, "text-sm"], [1, "prose", "prose-sm", "max-w-none", 3, "innerHTML"]], template: function ParkingRequestFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "icon");
        \u0275\u0275text(5, "local_parking");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div");
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 4)(10, "p", 5);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(13, "parking-request-form-details", 6);
        \u0275\u0275elementStart(14, "div", 7)(15, "icon");
        \u0275\u0275text(16, "info");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div");
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 8)(21, "div", 9)(22, "icon", 10);
        \u0275\u0275text(23, "campaign");
        \u0275\u0275elementEnd();
        \u0275\u0275element(24, "p", 11);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 12)(27, "div", 13)(28, "icon", 14);
        \u0275\u0275text(29, "check_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275element(30, "span", 11);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 13)(33, "icon", 14);
        \u0275\u0275text(34, "check_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275element(35, "span", 11);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 13)(38, "icon", 15);
        \u0275\u0275text(39, "warning");
        \u0275\u0275elementEnd();
        \u0275\u0275element(40, "span", 11);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(42, ParkingRequestFormComponent_Conditional_42_Template, 6, 3, "div", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "div", 16)(44, "button", 17);
        \u0275\u0275listener("click", function ParkingRequestFormComponent_Template_button_click_44_listener() {
          return ctx.clearForm();
        });
        \u0275\u0275elementStart(45, "icon", 18);
        \u0275\u0275text(46, "close");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 19);
        \u0275\u0275text(48);
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "button", 20);
        \u0275\u0275listener("click", function ParkingRequestFormComponent_Template_button_click_50_listener() {
          return ctx.submitRequest();
        });
        \u0275\u0275elementStart(51, "div", 21);
        \u0275\u0275conditionalCreate(52, ParkingRequestFormComponent_Conditional_52_Template, 2, 0, "icon", 22)(53, ParkingRequestFormComponent_Conditional_53_Template, 2, 0, "icon", 18);
        \u0275\u0275elementStart(54, "div", 23);
        \u0275\u0275text(55);
        \u0275\u0275pipe(56, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(57, ParkingRequestFormComponent_Conditional_57_Template, 2, 0, "icon", 24);
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(58, ParkingRequestFormComponent_Conditional_58_Template, 3, 3, "div", 25);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 17, ctx.model().id ? "APP.WORKPLACE.PARKING_REQUEST_EDIT_HEADER" : "BOOKINGS.PARKING_REQUEST_TITLE"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 19, "BOOKINGS.PARKING_REQUEST_SUBTITLE"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("form", ctx.form)("model_input", ctx.model)("show_special_needs", ctx.show_special_needs());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 21, "BOOKINGS.PARKING_SUMMARY_TITLE"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(25, 23, "BOOKINGS.PARKING_ALLOCATION_INFO"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind2(31, 25, "BOOKINGS.PARKING_ADVANCE_DAYS", \u0275\u0275pureFunction1(36, _c02, ctx.available_days())), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(5);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(36, 28, "BOOKINGS.PARKING_APPROVAL_GROUP"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(5);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(41, 30, "BOOKINGS.PARKING_MANUAL_APPROVAL"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.model().request_type === "after_hours" ? 42 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 32, "BOOKINGS.PARKING_CANCEL"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading() ? 52 : 53);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(56, 34, "BOOKINGS.PARKING_SUBMIT_REQUEST"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 57 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.submission_notes_html() ? 58 : -1);
      }
    }, dependencies: [
      CdkScrollable,
      MatRippleModule,
      MatRipple,
      IconComponent,
      ParkingRequestFormDetailsComponent,
      TranslatePipe,
      SanitizePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.gradient[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      105deg,\n      var(--base-200) 0%,\n      var(--base-200) 50%,\n      var(--base-100) 100%);\n}\n/*# sourceMappingURL=parking-request-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingRequestFormComponent, [{
    type: Component,
    args: [{ selector: "parking-request-form", template: `
        <div
            cdkScrollable
            class="bg-base-200 relative z-0 flex h-full w-full flex-col overflow-auto"
        >
            <div
                class="mx-auto min-h-full w-[80rem] max-w-full flex-1 space-y-2 px-2 pt-2 sm:space-y-4 sm:px-4 sm:pt-4"
            >
                <div
                    class="border-base-300 bg-base-100 flex w-full flex-col overflow-hidden rounded-xl border"
                >
                    <!-- Gradient Header -->
                    <div
                        class="gradient border-base-content relative flex items-center space-x-2 border-l-8 px-4 py-3 text-xl font-medium"
                    >
                        <icon>local_parking</icon>
                        <div>
                            {{
                                (model().id
                                    ? 'APP.WORKPLACE.PARKING_REQUEST_EDIT_HEADER'
                                    : 'BOOKINGS.PARKING_REQUEST_TITLE'
                                ) | translate
                            }}
                        </div>
                    </div>
                    <div class="px-6 py-4">
                        <p class="opacity-60">
                            {{
                                'BOOKINGS.PARKING_REQUEST_SUBTITLE' | translate
                            }}
                        </p>
                    </div>

                    <!-- Form Details -->
                    <parking-request-form-details
                        [form]="form"
                        [model_input]="model"
                        [show_special_needs]="show_special_needs()"
                    ></parking-request-form-details>

                    <!-- SUMMARY SECTION -->
                    <div
                        class="gradient border-base-content flex items-center space-x-2 border-l-8 px-4 py-3 font-medium"
                    >
                        <icon>info</icon>
                        <div>
                            {{ 'BOOKINGS.PARKING_SUMMARY_TITLE' | translate }}
                        </div>
                    </div>
                    <div class="space-y-4 p-4">
                        <!-- Allocation info box -->
                        <div
                            class="bg-base-200 border-base-300 flex items-start gap-3 rounded-lg border p-4"
                        >
                            <icon class="text-warning mt-0.5 shrink-0 text-xl"
                                >campaign</icon
                            >
                            <p
                                class="text-sm"
                                [innerHTML]="
                                    'BOOKINGS.PARKING_ALLOCATION_INFO'
                                        | translate
                                "
                            ></p>
                        </div>

                        <!-- Info bullets -->
                        <div class="space-y-2">
                            <div class="flex items-center gap-2">
                                <icon class="text-success text-lg"
                                    >check_circle</icon
                                >
                                <span
                                    class="text-sm"
                                    [innerHTML]="
                                        'BOOKINGS.PARKING_ADVANCE_DAYS'
                                            | translate
                                                : {
                                                      days: available_days(),
                                                  }
                                    "
                                ></span>
                            </div>
                            <div class="flex items-center gap-2">
                                <icon class="text-success text-lg"
                                    >check_circle</icon
                                >
                                <span
                                    class="text-sm"
                                    [innerHTML]="
                                        'BOOKINGS.PARKING_APPROVAL_GROUP'
                                            | translate
                                    "
                                ></span>
                            </div>
                            <div class="flex items-center gap-2">
                                <icon class="text-warning text-lg"
                                    >warning</icon
                                >
                                <span
                                    class="text-sm"
                                    [innerHTML]="
                                        'BOOKINGS.PARKING_MANUAL_APPROVAL'
                                            | translate
                                    "
                                ></span>
                            </div>
                        </div>

                        <!-- Conditional after-hours warning -->
                        @if (model().request_type === 'after_hours') {
                            <div class="flex items-center gap-2">
                                <icon class="text-warning text-lg">error</icon>
                                <span class="text-sm">{{
                                    'BOOKINGS.PARKING_AFTER_HOURS_WARNING'
                                        | translate
                                }}</span>
                            </div>
                        }
                    </div>
                </div>

                <!-- Sticky bottom bar -->
                <div
                    class="border-base-300 bg-base-100 sticky bottom-0 z-20 flex justify-between gap-2 rounded-t-xl border-x border-t p-3 text-sm sm:text-base"
                >
                    <button
                        btn
                        matRipple
                        class="inverse flex items-center gap-2"
                        (click)="clearForm()"
                    >
                        <icon class="text-xl">close</icon>
                        <div class="pr-2">
                            {{ 'BOOKINGS.PARKING_CANCEL' | translate }}
                        </div>
                    </button>
                    <button
                        btn
                        matRipple
                        (click)="submitRequest()"
                        [disabled]="loading()"
                    >
                        <div class="flex items-center space-x-2">
                            @if (loading()) {
                                <icon class="animate-spin text-2xl"
                                    >progress_activity</icon
                                >
                            } @else {
                                <icon class="text-xl">send</icon>
                            }
                            <div class="flex-1 pr-4">
                                {{
                                    'BOOKINGS.PARKING_SUBMIT_REQUEST'
                                        | translate
                                }}
                            </div>
                            @if (!loading()) {
                                <icon class="text-2xl"
                                    >keyboard_arrow_right</icon
                                >
                            }
                        </div>
                    </button>
                </div>
                @if (submission_notes_html()) {
                    <div
                        class="border-base-300 bg-base-100 rounded-xl border p-4"
                    >
                        <div
                            class="prose prose-sm max-w-none"
                            [innerHTML]="submission_notes_html() | sanitize"
                        ></div>
                    </div>
                }
            </div>
        </div>
    `, imports: [
      CdkScrollable,
      MatRippleModule,
      TranslatePipe,
      SanitizePipe,
      IconComponent,
      ParkingRequestFormDetailsComponent
    ], styles: ["/* angular:styles/component:css;919852813613464840a7d2077c918cfcb937d6606492f2eda58b97a420fca396;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/book/parking-request-flow/parking-request-form.component.ts */\n:host {\n  width: 100%;\n  height: 100%;\n}\n.gradient {\n  background:\n    linear-gradient(\n      105deg,\n      var(--base-200) 0%,\n      var(--base-200) 50%,\n      var(--base-100) 100%);\n}\n/*# sourceMappingURL=parking-request-form.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingRequestFormComponent, { className: "ParkingRequestFormComponent", filePath: "apps/workplace/src/app/book/parking-request-flow/parking-request-form.component.ts", lineNumber: 231 });
})();

// apps/workplace/src/app/book/parking-request-flow/parking-request-success.component.ts
var _c03 = (a0, a1) => ({ date: a0, time: a1 });
var _c12 = () => ["/"];
function ParkingRequestSuccessComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "a", 8);
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
    \u0275\u0275pipe(14, "safe");
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
var ParkingRequestSuccessComponent = class _ParkingRequestSuccessComponent {
  constructor() {
    this._state = inject(BookingFormService);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this.outlook_link = signal(
      "",
      ...ngDevMode ? [{ debugName: "outlook_link" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.google_link = signal(
      "",
      ...ngDevMode ? [{ debugName: "google_link" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.ical_link = signal(
      "",
      ...ngDevMode ? [{ debugName: "ical_link" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  get location() {
    if (!this.last_event)
      return "Unknown";
    const building = this._org.buildings.find((_) => this.last_event.zones.includes(_.id));
    return building ? `${building.display_name || building.name}` : "";
  }
  get last_event() {
    return this._state.last_success;
  }
  get time_format() {
    return this._settings.time_format;
  }
  get show_links() {
    return this._settings.get("app.parking.show_calendar_links");
  }
  ngOnInit() {
    const event = __spreadProps(__spreadValues({}, this.last_event), {
      location: `${this.location}`
    });
    this.outlook_link.set(generateMicrosoftCalendarLink(event));
    this.google_link.set(generateGoogleCalendarLink(event));
    this.ical_link.set(generateCalendarFileLink(event));
  }
  static {
    this.\u0275fac = function ParkingRequestSuccessComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingRequestSuccessComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingRequestSuccessComponent, selectors: [["parking-request-success"]], decls: 17, vars: 25, consts: [[1, "bg-base-100", "absolute", "inset-0", "z-50", "flex", "flex-col", "overflow-auto"], [1, "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "pb-4", "text-2xl", "font-medium"], [1, "max-w-lg", "text-center"], ["src", "assets/icons/parking-success.svg", 1, "h-80"], [1, "relative", "flex", "flex-col", "items-center", "space-y-4", "p-4"], [1, "border-base-200", "bg-base-100", "sticky", "bottom-0", "mt-4", "flex", "w-full", "items-center", "justify-center", "border-t", "p-2"], ["btn", "", "matRipple", "", 1, "w-full", "max-w-lg", 3, "routerLink"], ["btn", "", "matRipple", "", "name", "parking-request-outlook-link", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded-sm", "p-2", "pr-4", 3, "href"], ["src", "assets/icons/outlook.svg", 1, "w-6"], ["btn", "", "matRipple", "", "name", "parking-request-google-link", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded-sm", "p-2", "pr-4", 3, "href"], ["src", "assets/icons/gcal.svg", 1, "w-6"], ["btn", "", "matRipple", "", "name", "parking-request-ical-link", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded-sm", "p-2", "pr-4", 3, "href"], [1, "text-xl"]], template: function ParkingRequestSuccessComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "main", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "date");
        \u0275\u0275pipe(8, "date");
        \u0275\u0275pipe(9, "date");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "img", 4);
        \u0275\u0275conditionalCreate(12, ParkingRequestSuccessComponent_Conditional_12_Template, 20, 21, "div", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "footer", 6)(14, "a", 7);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, "APP.WORKPLACE.PARKING_REQUEST_SUCCESS_HEADER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 16, "APP.WORKPLACE.PARKING_REQUEST_SUCCESS_MSG", \u0275\u0275pureFunction2(21, _c03, \u0275\u0275pipeBind2(7, 7, ctx.last_event.date, "mediumDate"), \u0275\u0275pipeBind2(8, 10, ctx.last_event.date, ctx.time_format) + " - " + \u0275\u0275pipeBind2(9, 13, ctx.last_event.date + ctx.last_event.duration * 60 * 1e3, ctx.time_format))), " ");
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.show_links ? 12 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(24, _c12));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 19, "APP.WORKPLACE.BOOKING_FINISHED"), " ");
      }
    }, dependencies: [
      CommonModule,
      RouterModule,
      RouterLink,
      MatRippleModule,
      MatRipple,
      IconComponent,
      DatePipe,
      TranslatePipe,
      SafePipe,
      SanitizePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingRequestSuccessComponent, [{
    type: Component,
    args: [{ selector: "parking-request-success", template: `
        <div
            class="bg-base-100 absolute inset-0 z-50 flex flex-col overflow-auto"
        >
            <main
                class="flex flex-1 flex-col items-center justify-center space-y-2 p-8"
            >
                <h2 class="pb-4 text-2xl font-medium">
                    {{
                        'APP.WORKPLACE.PARKING_REQUEST_SUCCESS_HEADER'
                            | translate
                    }}
                </h2>
                <p class="max-w-lg text-center">
                    {{
                        'APP.WORKPLACE.PARKING_REQUEST_SUCCESS_MSG'
                            | translate
                                : {
                                      date:
                                          last_event.date | date: 'mediumDate',
                                      time:
                                          (last_event.date
                                              | date: time_format) +
                                          ' - ' +
                                          (last_event.date +
                                              last_event.duration * 60 * 1000
                                              | date: time_format),
                                  }
                    }}
                </p>
                <img class="h-80" src="assets/icons/parking-success.svg" />
                @if (show_links) {
                    <div
                        class="relative flex flex-col items-center space-y-4 p-4"
                    >
                        <a
                            btn
                            matRipple
                            name="parking-request-outlook-link"
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
                            name="parking-request-google-link"
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
                            name="parking-request-ical-link"
                            class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                            [href]="ical_link() | safe: 'url'"
                            target="_blank"
                            rel="noopener noreferer"
                        >
                            <icon class="text-xl">download</icon>
                            <span>{{ 'BOOKINGS.LINK_ICAL' | translate }}</span>
                        </a>
                    </div>
                }
            </main>
            <footer
                class="border-base-200 bg-base-100 sticky bottom-0 mt-4 flex w-full items-center justify-center border-t p-2"
            >
                <a btn matRipple class="w-full max-w-lg" [routerLink]="['/']">
                    {{ 'APP.WORKPLACE.BOOKING_FINISHED' | translate }}
                </a>
            </footer>
        </div>
    `, imports: [
      CommonModule,
      RouterModule,
      TranslatePipe,
      MatRippleModule,
      SafePipe,
      SanitizePipe,
      IconComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingRequestSuccessComponent, { className: "ParkingRequestSuccessComponent", filePath: "apps/workplace/src/app/book/parking-request-flow/parking-request-success.component.ts", lineNumber: 119 });
})();

// apps/workplace/src/app/book/parking-request-flow.component.ts
function ParkingRequestFlowComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "img", 2);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.WORKPLACE.PARKING_HOME_LOCATION_RESTRICTED"), " ");
  }
}
function ParkingRequestFlowComponent_Conditional_1_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "parking-request-success");
  }
}
function ParkingRequestFlowComponent_Conditional_1_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "parking-request-form");
  }
}
function ParkingRequestFlowComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275conditionalCreate(1, ParkingRequestFlowComponent_Conditional_1_Case_1_Template, 1, 0, "parking-request-success")(2, ParkingRequestFlowComponent_Conditional_1_Case_2_Template, 1, 0, "parking-request-form");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_1_0 = ctx_r0.view()) === "success" ? 1 : 2);
  }
}
var ParkingRequestFlowComponent = class _ParkingRequestFlowComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(BookingFormService);
    this._route = inject(ActivatedRoute);
    this._parking = inject(ParkingService);
    this.is_home_location = this._parking.is_home_location;
    this.view = this._state.view;
  }
  ngOnInit() {
    this._parking.loadBookings();
    this._state.loadForm("parking");
    this._state.setOptions({ type: "parking" });
    if (!this._state.model().id)
      this._state.newForm("parking");
    this._state.model.update((m) => __spreadProps(__spreadValues({}, m), { booking_type: "parking" }));
    this.subscription("route.params", this._route.paramMap.subscribe((param) => {
      if (param.has("step"))
        this._state.setView(param.get("step"));
    }));
    this.subscription("route.query", this._route.queryParamMap.subscribe((param) => {
      if (param.has("success"))
        this._state.setView("success");
    }));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275ParkingRequestFlowComponent_BaseFactory;
      return function ParkingRequestFlowComponent_Factory(__ngFactoryType__) {
        return (\u0275ParkingRequestFlowComponent_BaseFactory || (\u0275ParkingRequestFlowComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ParkingRequestFlowComponent)))(__ngFactoryType__ || _ParkingRequestFlowComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingRequestFlowComponent, selectors: [["placeos-parking-request-flow"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 1, consts: [[1, "bg-base-100", "z-50", "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-4"], [1, "bg-base-100", "z-50", "h-full", "w-full"], ["src", "assets/icons/permission-none.svg", 1, "h-64", "w-64"]], template: function ParkingRequestFlowComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ParkingRequestFlowComponent_Conditional_0_Template, 5, 3, "div", 0)(1, ParkingRequestFlowComponent_Conditional_1_Template, 3, 1, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.is_home_location() ? 0 : 1);
      }
    }, dependencies: [
      CommonModule,
      ParkingRequestSuccessComponent,
      ParkingRequestFormComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=parking-request-flow.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingRequestFlowComponent, [{
    type: Component,
    args: [{ selector: "placeos-parking-request-flow", template: `
        @if (is_home_location()) {
            <div
                class="bg-base-100 z-50 flex h-full w-full flex-col items-center justify-center space-y-4"
            >
                <img src="assets/icons/permission-none.svg" class="h-64 w-64" />
                <p>
                    {{
                        'APP.WORKPLACE.PARKING_HOME_LOCATION_RESTRICTED'
                            | translate
                    }}
                </p>
            </div>
        } @else {
            <div class="bg-base-100 z-50 h-full w-full">
                @switch (view()) {
                    @case ('success') {
                        <parking-request-success></parking-request-success>
                    }
                    @default {
                        <parking-request-form></parking-request-form>
                    }
                }
            </div>
        }
    `, imports: [
      CommonModule,
      TranslatePipe,
      ParkingRequestSuccessComponent,
      ParkingRequestFormComponent
    ], styles: ["/* angular:styles/component:css;8f663144e307d97d7c6361d75534b712825c70421a65c587eccbcb19333fd199;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/book/parking-request-flow.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=parking-request-flow.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingRequestFlowComponent, { className: "ParkingRequestFlowComponent", filePath: "apps/workplace/src/app/book/parking-request-flow.component.ts", lineNumber: 53 });
})();
export {
  ParkingRequestFlowComponent
};
//# sourceMappingURL=parking-request-flow.component-ZCGQ7BYD.js.map
