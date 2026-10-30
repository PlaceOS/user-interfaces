import {
  CateringListFieldComponent,
  CateringOrderStateService,
  MeetingFlowSuccessComponent
} from "./chunk-ZRISLNYK.js";
import {
  FindAvailabilityModalComponent
} from "./chunk-DJZVYAEC.js";
import {
  HostSelectFieldComponent
} from "./chunk-IQCG3FHO.js";
import {
  RichTextInputComponent
} from "./chunk-5GR6LZDA.js";
import {
  SpacesService
} from "./chunk-UFXUSO4O.js";
import {
  AssetListFieldComponent,
  RecurrenceFieldComponent
} from "./chunk-OJT33AZH.js";
import "./chunk-YQ6X7FO3.js";
import {
  UserListFieldComponent
} from "./chunk-GSSBFF2H.js";
import "./chunk-QLEMKVFT.js";
import {
  LevelPipe
} from "./chunk-ZYHCHWAP.js";
import {
  BuildingPipe
} from "./chunk-NDWNNJVZ.js";
import {
  DEFAULT_COLOURS
} from "./chunk-VZXPZQZD.js";
import {
  InteractiveMapComponent
} from "./chunk-JSNP7MRQ.js";
import {
  DurationFieldComponent
} from "./chunk-S3IDJ7TZ.js";
import {
  DateFieldComponent
} from "./chunk-AFV6PWVA.js";
import "./chunk-3WFINGS4.js";
import "./chunk-5EGL6PUB.js";
import "./chunk-R7ZSP4JA.js";
import "./chunk-XCC4AVVI.js";
import {
  TimeFieldComponent
} from "./chunk-HIOO4OM6.js";
import {
  AuthenticatedImageDirective
} from "./chunk-A4ULKLG5.js";
import "./chunk-6W45JX5A.js";
import {
  EventFormService,
  multipleSpacesEnabled
} from "./chunk-ORLV5Z2U.js";
import "./chunk-TQWVRBSO.js";
import {
  MatCheckbox,
  MatCheckboxModule,
  MatDialog,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSelect,
  MatSelectModule,
  SettingsToggleComponent,
  openConfirmModal
} from "./chunk-2EHUPV2S.js";
import "./chunk-4ZPX43DB.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule
} from "./chunk-C6L5P757.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-LMAIQ4DZ.js";
import "./chunk-UEIA54UA.js";
import "./chunk-H2GPFJZZ.js";
import {
  MatOption
} from "./chunk-TWPPCAYQ.js";
import "./chunk-3GIHF5YT.js";
import "./chunk-DLMEBJIG.js";
import "./chunk-KCAODCN5.js";
import "./chunk-3JQPS2OO.js";
import {
  FormField
} from "./chunk-SQO5Y5ZU.js";
import {
  TranslatePipe
} from "./chunk-QGI2HD4I.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  OrganisationService,
  SETTING_KEYS,
  SettingsService,
  currentUser,
  formatRecurrence,
  fromEventRecurrence,
  settingSignal
} from "./chunk-GRXVKFOQ.js";
import {
  IconComponent
} from "./chunk-ABUJTHF5.js";
import {
  AsyncHandler
} from "./chunk-NCRUSG7A.js";
import {
  addDays,
  endOfDay,
  flatten,
  getInvalidSignalFields,
  i18n,
  notifyError,
  notifySuccess,
  toggleListItem,
  unique
} from "./chunk-WSQPQHCZ.js";
import {
  CdkScrollable
} from "./chunk-AWPFSUBU.js";
import "./chunk-J4TWZHWN.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-JJMLMF3T.js";
import "./chunk-HXQPKKM6.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-CJAQVJ62.js";
import {
  CommonModule,
  Component,
  DatePipe,
  Input,
  Output,
  SlicePipe,
  ViewChild,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  model,
  output,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-UL33YUHR.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/workplace/src/app/book/meeting-flow-new/room-capacity.ts
var ROOM_CAPACITY_OPTIONS = [
  { value: -1, label: "COMMON.CAPACITY_ANY", icon: "person" },
  { value: 1, max: 2, label: "CALENDAR_EVENT.ROOM_SIZE_1_2", icon: "person" },
  { value: 3, max: 4, label: "CALENDAR_EVENT.ROOM_SIZE_3_4", icon: "group" },
  { value: 5, max: 8, label: "CALENDAR_EVENT.ROOM_SIZE_5_8", icon: "groups" },
  { value: 9, label: "CALENDAR_EVENT.ROOM_SIZE_9_PLUS", icon: "groups" }
];
function roomCapacityFilters(capacity) {
  const option = ROOM_CAPACITY_OPTIONS.find((_) => _.value === capacity);
  return { capacity, capacity_max: option?.max };
}

// apps/workplace/src/app/book/meeting-flow-new/meeting-flow-details.component.ts
var _c0 = ["title_input"];
var _c1 = () => ({ standalone: true });
var _forTrack0 = ($index, $item) => $item.value;
function MeetingFlowDetailsComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formField", ctx_r0.form.all_day);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "COMMON.ALL_DAY"), " ");
  }
}
function MeetingFlowDetailsComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "label", 27);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "duration-field", 28);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 11, "FORM.DURATION"));
    \u0275\u0275advance(2);
    \u0275\u0275property("time", ctx_r0.form_value().date)("max", ctx_r0.max_duration())("min", ctx_r0.min_duration())("step", ctx_r0.duration_step())("custom_options", ctx_r0.custom_duration_options())("use_24hr", ctx_r0.use_24hr())("end_time", ctx_r0.bookable_hours()?.end)("timezone", ctx_r0.timezone)("formField", ctx_r0.form.duration)("disabled", ctx_r0.form_value().all_day);
    \u0275\u0275control();
  }
}
function MeetingFlowDetailsComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 14)(2, "label", 29);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "date-field", 30);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 14)(7, "label", 31);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "time-field", 32);
    \u0275\u0275listener("ngModelChange", function MeetingFlowDetailsComponent_Conditional_34_Template_time_field_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.model.update((m) => __spreadProps(__spreadValues({}, m), { date_end: $event })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 12, "FORM.DATE_END"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r0.form.date_end)("from", ctx_r0.form_value().date)("to", ctx_r0.end_date());
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 14, "FORM.TIME_END"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r0.form_value().date_end)("ngModelOptions", \u0275\u0275pureFunction0(16, _c1))("from", ctx_r0.form_value().date)("range", ctx_r0.bookable_hours())("use_24hr", ctx_r0.use_24hr())("timezone", ctx_r0.timezone)("disabled", ctx_r0.form_value().all_day);
    \u0275\u0275control();
  }
}
function MeetingFlowDetailsComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "label", 33);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "host-select-field", 34);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "FORM.HOST"));
    \u0275\u0275advance(4);
    \u0275\u0275property("formField", ctx_r0.form.organiser);
    \u0275\u0275control();
  }
}
function MeetingFlowDetailsComponent_Conditional_36_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 34);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formField", ctx_r0.form.update_master);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "FORM.UPDATE_FUTURE"), " ");
  }
}
function MeetingFlowDetailsComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "label", 35);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "recurrence-field", 36);
    \u0275\u0275listener("first_instance", function MeetingFlowDetailsComponent_Conditional_36_Template_recurrence_field_first_instance_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFirstInstanceChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(7, MeetingFlowDetailsComponent_Conditional_36_Conditional_7_Template, 3, 4, "mat-checkbox", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "FORM.RECURRENCE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("date", ctx_r0.model().date)("available_days", ctx_r0.allowed_future_days())("formField", ctx_r0.form.recurrence);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.model().id ? 7 : -1);
  }
}
function MeetingFlowDetailsComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 37);
    \u0275\u0275listener("ngModelChange", function MeetingFlowDetailsComponent_Conditional_37_Template_settings_toggle_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.model.update((m) => __spreadProps(__spreadValues({}, m), { meeting_provider: $event ? "teamsForBusiness" : null })));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r0.form_value().meeting_provider === "teamsForBusiness")("ngModelOptions", \u0275\u0275pureFunction0(5, _c1));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "CALENDAR_EVENT.TEAMS_MEETING"), " ");
  }
}
function MeetingFlowDetailsComponent_For_47_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 39);
    \u0275\u0275text(1, "task_alt");
    \u0275\u0275elementEnd();
  }
}
function MeetingFlowDetailsComponent_For_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function MeetingFlowDetailsComponent_For_47_Template_button_click_0_listener() {
      const option_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setCapacity(option_r6.value));
    });
    \u0275\u0275elementStart(1, "div", 24)(2, "icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, MeetingFlowDetailsComponent_For_47_Conditional_7_Template, 2, 0, "icon", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r6 = ctx.$implicit;
    \u0275\u0275nextContext();
    const capacity_r7 = \u0275\u0275readContextLet(45);
    \u0275\u0275classProp("inverse", capacity_r7 !== option_r6.value);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(option_r6.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, option_r6.label));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(capacity_r7 === option_r6.value ? 7 : -1);
  }
}
var MeetingFlowDetailsComponent = class _MeetingFlowDetailsComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._event_form = inject(EventFormService);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this.options = this._event_form.filters;
    this.form_value = this._event_form.model;
    this.allow_all_day = settingSignal("events.allow_all_day", false);
    this.min_duration = settingSignal("events.min_duration", 30);
    this.max_duration = settingSignal("events.max_duration", 8 * 60);
    this.duration_step = settingSignal("events.duration_step", 15);
    this.use_24hr = settingSignal("use_24_hour_time", false);
    this.custom_duration_options = settingSignal("events.custom_duration_options", []);
    this.allowed_future_days = settingSignal("events.allowed_future_days", 180);
    this.end_date = computed(
      () => endOfDay(addDays(Date.now(), this.allowed_future_days())).valueOf(),
      ...ngDevMode ? [{ debugName: "end_date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_book_for_others = settingSignal("events.can_book_for_others", false);
    this._allow_multiday = settingSignal("events.allow_multiday", false);
    this.allow_multiday = computed(
      () => this._allow_multiday() || this._event_form.is_multiday,
      ...ngDevMode ? [{ debugName: "allow_multiday" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.capacity_options = ROOM_CAPACITY_OPTIONS;
    this.recurrence_enabled = settingSignal("events.allow_recurrence", false);
    this.allow_online_meetings = settingSignal("events.allow_online_meetings", false);
    this.bookable_hours = settingSignal("events.bookable_hours", void 0);
    this.has_title = computed(
      () => !!this.form_value()?.title?.trim(),
      ...ngDevMode ? [{ debugName: "has_title" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.title_error = {
      isErrorState: () => this.form.title().touched() && !this.has_title()
    };
    this._title_input = viewChild(
      "title_input",
      ...ngDevMode ? [{ debugName: "_title_input" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.start_time_disabled = computed(
      () => this.form_value().all_day || this.form.date().disabled(),
      ...ngDevMode ? [{ debugName: "start_time_disabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.setCapacity = (capacity) => {
      this._event_form.setFilters(roomCapacityFilters(capacity));
    };
    this.allow_recurrence = computed(
      () => this.recurrence_enabled() && this.form_value().duration <= 24 * 60,
      ...ngDevMode ? [{ debugName: "allow_recurrence" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  get form() {
    return this._event_form.form;
  }
  get model() {
    return this._event_form.model;
  }
  get timezone() {
    return this._settings.get("app.events.use_building_timezone") ? this._org.building.timezone : "";
  }
  onFirstInstanceChange(date) {
    this.model.update((m) => __spreadProps(__spreadValues({}, m), { date }));
  }
  searchRooms() {
    if (!this.has_title()) {
      this.form.title().markAsTouched();
      this._title_input()?.nativeElement.focus();
      return;
    }
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: { view: 1 },
      queryParamsHandling: "merge"
    });
  }
  static {
    this.\u0275fac = function MeetingFlowDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MeetingFlowDetailsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MeetingFlowDetailsComponent, selectors: [["meeting-flow-details"]], viewQuery: function MeetingFlowDetailsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._title_input, _c0, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, decls: 60, vars: 42, consts: [["title_input", ""], [1, "h-full", "w-full"], [1, "border-base-300", "bg-base-100", "flex", "w-full", "flex-col", "overflow-hidden", "rounded-xl", "border"], [1, "gradient", "border-base-content", "relative", "flex", "items-center", "space-x-2", "border-l-8", "px-4", "py-3", "text-xl", "font-medium"], [1, "flex", "flex-col", "p-4"], [1, "uppercase"], ["required", ""], ["appearance", "outline"], ["matInput", "", 3, "formField", "errorStateMatcher", "placeholder"], [1, "flex", "flex-col", "space-y-2", "sm:flex-row", "sm:space-y-0", "sm:space-x-2"], [1, "relative", "flex-1"], ["for", "date", 1, "uppercase"], [3, "formField", "to"], [1, "absolute", "-top-2", "right-2", 3, "formField"], [1, "flex-1"], ["for", "time", 1, "uppercase"], ["name", "time", 3, "ngModelChange", "ngModel", "ngModelOptions", "range", "use_24hr", "timezone", "disabled"], [1, "flex", "w-full", "flex-col"], [3, "ngModel", "ngModelOptions"], [1, "-mx-1", "flex", "flex-wrap", "p-4"], ["btn", "", "matRipple", "", 1, "m-1", "min-w-40", "flex-1", 3, "inverse"], [1, "min-h-4", "sm:min-h-[calc(100vh-44.25rem)]"], [1, "border-base-300", "bg-base-100", "sticky", "bottom-0", "z-20", "flex", "justify-between", "rounded-t-xl", "border-x", "border-t", "p-3"], ["btn", "", "matRipple", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "flex-1", "pr-4"], ["for", "duration", 1, "uppercase"], [3, "time", "max", "min", "step", "custom_options", "use_24hr", "end_time", "timezone", "formField", "disabled"], ["for", "date-end", 1, "uppercase"], [3, "formField", "from", "to"], ["for", "end-time", 1, "uppercase"], ["name", "end-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "from", "range", "use_24hr", "timezone", "disabled"], ["for", "host", 1, "uppercase"], [3, "formField"], ["for", "recurrence", 1, "uppercase"], ["type", "event", 3, "first_instance", "date", "available_days", "formField"], [3, "ngModelChange", "ngModel", "ngModelOptions"], ["btn", "", "matRipple", "", 1, "m-1", "min-w-40", "flex-1", 3, "click"], [1, "absolute", "top-0", "right-0"]], template: function MeetingFlowDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "icon");
        \u0275\u0275text(4, "info");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div");
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 4)(9, "label", 5);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementStart(12, "span", 6);
        \u0275\u0275text(13, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "mat-form-field", 7);
        \u0275\u0275element(15, "input", 8, 0);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(18, "mat-error");
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 9)(22, "div", 10)(23, "label", 11);
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(26, "date-field", 12);
        \u0275\u0275controlCreate();
        \u0275\u0275conditionalCreate(27, MeetingFlowDetailsComponent_Conditional_27_Template, 3, 4, "mat-checkbox", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 14)(29, "label", 15);
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "time-field", 16);
        \u0275\u0275listener("ngModelChange", function MeetingFlowDetailsComponent_Template_time_field_ngModelChange_32_listener($event) {
          return ctx.model.update((m) => __spreadProps(__spreadValues({}, m), { date: $event }));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(33, MeetingFlowDetailsComponent_Conditional_33_Template, 5, 13, "div", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(34, MeetingFlowDetailsComponent_Conditional_34_Template, 11, 17, "div", 9);
        \u0275\u0275conditionalCreate(35, MeetingFlowDetailsComponent_Conditional_35_Template, 7, 4, "div", 17);
        \u0275\u0275conditionalCreate(36, MeetingFlowDetailsComponent_Conditional_36_Template, 8, 7, "div", 17);
        \u0275\u0275conditionalCreate(37, MeetingFlowDetailsComponent_Conditional_37_Template, 3, 6, "settings-toggle", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 3)(39, "icon");
        \u0275\u0275text(40, "info");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div");
        \u0275\u0275text(42);
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 19);
        \u0275\u0275declareLet(45);
        \u0275\u0275repeaterCreate(46, MeetingFlowDetailsComponent_For_47_Template, 8, 7, "button", 20, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(48, "div", 21);
        \u0275\u0275elementStart(49, "div", 22);
        \u0275\u0275element(50, "div");
        \u0275\u0275elementStart(51, "button", 23);
        \u0275\u0275listener("click", function MeetingFlowDetailsComponent_Template_button_click_51_listener() {
          return ctx.searchRooms();
        });
        \u0275\u0275elementStart(52, "div", 24)(53, "icon", 25);
        \u0275\u0275text(54, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "div", 26);
        \u0275\u0275text(56);
        \u0275\u0275pipe(57, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "icon", 25);
        \u0275\u0275text(59, "keyboard_arrow_right");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 24, "CALENDAR_EVENT.MEETING_DETAILS_HEADER"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(11, 26, "CALENDAR_EVENT.MEETING_TITLE_LABEL"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.title)("errorStateMatcher", ctx.title_error)("placeholder", \u0275\u0275pipeBind1(17, 28, "CALENDAR_EVENT.TITLE_PLACEHOLDER"));
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 30, "FORM.TITLE_REQUIRED"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 32, "FORM.DATE"));
        \u0275\u0275advance(2);
        \u0275\u0275property("formField", ctx.form.date)("to", ctx.end_date());
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.allow_all_day() ? 27 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 34, "FORM.TIME"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.form_value().date)("ngModelOptions", \u0275\u0275pureFunction0(41, _c1))("range", ctx.bookable_hours())("use_24hr", ctx.use_24hr())("timezone", ctx.timezone)("disabled", ctx.start_time_disabled());
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.allow_multiday() ? 33 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.allow_multiday() ? 34 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.can_book_for_others() ? 35 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.allow_recurrence() ? 36 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.allow_online_meetings() ? 37 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 36, "CALENDAR_EVENT.ROOM_SIZE_LABEL"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275storeLet(ctx.options()?.capacity || -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.capacity_options);
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(57, 39, "CALENDAR_EVENT.SEARCH_ROOMS_BUTTON"), " ");
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      IconComponent,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      DateFieldComponent,
      DurationFieldComponent,
      RecurrenceFieldComponent,
      TimeFieldComponent,
      FormsModule,
      NgControlStatus,
      NgModel,
      FormField,
      RouterModule,
      SettingsToggleComponent,
      MatCheckboxModule,
      MatCheckbox,
      HostSelectFieldComponent,
      TranslatePipe
    ], styles: ["\n.gradient[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      105deg,\n      var(--%NS%base-200) 0%,\n      var(--%NS%base-200) 50%,\n      var(--%NS%base-100) 100%);\n}\n/*# sourceMappingURL=meeting-flow-details.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeetingFlowDetailsComponent, [{
    type: Component,
    args: [{ selector: "meeting-flow-details", template: `
        <div class="h-full w-full">
            <div
                class="border-base-300 bg-base-100 flex w-full flex-col overflow-hidden rounded-xl border"
            >
                <div
                    class="gradient border-base-content relative flex items-center space-x-2 border-l-8 px-4 py-3 text-xl font-medium"
                >
                    <icon>info</icon>
                    <div>
                        {{
                            'CALENDAR_EVENT.MEETING_DETAILS_HEADER' | translate
                        }}
                    </div>
                </div>
                <div class="flex flex-col p-4">
                    <label class="uppercase"
                        >{{ 'CALENDAR_EVENT.MEETING_TITLE_LABEL' | translate }}
                        <span required>*</span></label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            #title_input
                            matInput
                            [formField]="form.title"
                            [errorStateMatcher]="title_error"
                            [placeholder]="
                                'CALENDAR_EVENT.TITLE_PLACEHOLDER' | translate
                            "
                        />
                        <mat-error>{{
                            'FORM.TITLE_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                    <div
                        class="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2"
                    >
                        <div class="relative flex-1">
                            <label for="date" class="uppercase">{{
                                'FORM.DATE' | translate
                            }}</label>
                            <date-field
                                [formField]="form.date"
                                [to]="end_date()"
                            />
                            @if (allow_all_day()) {
                                <mat-checkbox
                                    [formField]="form.all_day"
                                    class="absolute -top-2 right-2"
                                >
                                    {{ 'COMMON.ALL_DAY' | translate }}
                                </mat-checkbox>
                            }
                        </div>
                        <div class="flex-1">
                            <label for="time" class="uppercase">{{
                                'FORM.TIME' | translate
                            }}</label>
                            <time-field
                                name="time"
                                [ngModel]="form_value().date"
                                (ngModelChange)="
                                    model.update((m) => ({
                                        ...m,
                                        date: $event,
                                    }))
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [range]="bookable_hours()"
                                [use_24hr]="use_24hr()"
                                [timezone]="timezone"
                                [disabled]="start_time_disabled()"
                            />
                        </div>
                        @if (!allow_multiday()) {
                            <div class="flex-1">
                                <label for="duration" class="uppercase">{{
                                    'FORM.DURATION' | translate
                                }}</label>
                                <duration-field
                                    [time]="form_value().date"
                                    [max]="max_duration()"
                                    [min]="min_duration()"
                                    [step]="duration_step()"
                                    [custom_options]="custom_duration_options()"
                                    [use_24hr]="use_24hr()"
                                    [end_time]="bookable_hours()?.end"
                                    [timezone]="timezone"
                                    [formField]="form.duration"
                                    [disabled]="form_value().all_day"
                                />
                            </div>
                        }
                    </div>
                    @if (allow_multiday()) {
                        <div
                            class="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2"
                        >
                            <div class="flex-1">
                                <label for="date-end" class="uppercase">{{
                                    'FORM.DATE_END' | translate
                                }}</label>
                                <date-field
                                    [formField]="form.date_end"
                                    [from]="form_value().date"
                                    [to]="end_date()"
                                />
                            </div>
                            <div class="flex-1">
                                <label for="end-time" class="uppercase">{{
                                    'FORM.TIME_END' | translate
                                }}</label>
                                <time-field
                                    name="end-time"
                                    [ngModel]="form_value().date_end"
                                    (ngModelChange)="
                                        model.update((m) => ({
                                            ...m,
                                            date_end: $event,
                                        }))
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                    [from]="form_value().date"
                                    [range]="bookable_hours()"
                                    [use_24hr]="use_24hr()"
                                    [timezone]="timezone"
                                    [disabled]="form_value().all_day"
                                />
                            </div>
                        </div>
                    }
                    @if (can_book_for_others()) {
                        <div class="flex w-full flex-col">
                            <label for="host" class="uppercase">
                                {{ 'FORM.HOST' | translate }}<span>*</span>
                            </label>
                            <host-select-field
                                [formField]="form.organiser"
                            ></host-select-field>
                        </div>
                    }
                    @if (allow_recurrence()) {
                        <div class="flex w-full flex-col">
                            <label for="recurrence" class="uppercase">
                                {{ 'FORM.RECURRENCE' | translate
                                }}<span>*</span>
                            </label>
                            <recurrence-field
                                type="event"
                                [date]="model().date"
                                [available_days]="allowed_future_days()"
                                (first_instance)="onFirstInstanceChange($event)"
                                [formField]="form.recurrence"
                            ></recurrence-field>
                            @if (model().id) {
                                <mat-checkbox [formField]="form.update_master">
                                    {{ 'FORM.UPDATE_FUTURE' | translate }}
                                </mat-checkbox>
                            }
                        </div>
                    }
                    @if (allow_online_meetings()) {
                        <settings-toggle
                            [ngModel]="
                                form_value().meeting_provider ===
                                'teamsForBusiness'
                            "
                            (ngModelChange)="
                                model.update((m) => ({
                                    ...m,
                                    meeting_provider: $event
                                        ? 'teamsForBusiness'
                                        : null,
                                }))
                            "
                            [ngModelOptions]="{ standalone: true }"
                        >
                            {{ 'CALENDAR_EVENT.TEAMS_MEETING' | translate }}
                        </settings-toggle>
                    }
                </div>
                <div
                    class="gradient border-base-content relative flex items-center space-x-2 border-l-8 px-4 py-3 text-xl font-medium"
                >
                    <icon>info</icon>
                    <div>
                        {{ 'CALENDAR_EVENT.ROOM_SIZE_LABEL' | translate }}
                    </div>
                </div>
                <div class="-mx-1 flex flex-wrap p-4">
                    @let capacity = options()?.capacity || -1;
                    @for (option of capacity_options; track option.value) {
                        <button
                            btn
                            matRipple
                            class="m-1 min-w-40 flex-1"
                            [class.inverse]="capacity !== option.value"
                            (click)="setCapacity(option.value)"
                        >
                            <div class="flex items-center space-x-2">
                                <icon>{{ option.icon }}</icon>
                                <div>{{ option.label | translate }}</div>
                            </div>
                            @if (capacity === option.value) {
                                <icon class="absolute top-0 right-0"
                                    >task_alt</icon
                                >
                            }
                        </button>
                    }
                </div>
            </div>
            <div class="min-h-4 sm:min-h-[calc(100vh-44.25rem)]"></div>
            <div
                class="border-base-300 bg-base-100 sticky bottom-0 z-20 flex justify-between rounded-t-xl border-x border-t p-3"
            >
                <div></div>
                <button btn matRipple (click)="searchRooms()">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">search</icon>
                        <div class="flex-1 pr-4">
                            {{
                                'CALENDAR_EVENT.SEARCH_ROOMS_BUTTON' | translate
                            }}
                        </div>
                        <icon class="text-2xl">keyboard_arrow_right</icon>
                    </div>
                </button>
            </div>
        </div>
    `, imports: [
      MatRippleModule,
      IconComponent,
      MatFormFieldModule,
      MatInputModule,
      DateFieldComponent,
      DurationFieldComponent,
      RecurrenceFieldComponent,
      TimeFieldComponent,
      FormsModule,
      FormField,
      RouterModule,
      TranslatePipe,
      SettingsToggleComponent,
      MatCheckboxModule,
      HostSelectFieldComponent
    ], styles: ["/* angular:styles/component:css;3969732fa8a6995c9449a9ed86fb4979a28ba38038cac555e3a6a8befda2e8d7;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/book/meeting-flow-new/meeting-flow-details.component.ts */\n.gradient {\n  background:\n    linear-gradient(\n      105deg,\n      var(--base-200) 0%,\n      var(--base-200) 50%,\n      var(--base-100) 100%);\n}\n/*# sourceMappingURL=meeting-flow-details.component.css.map */\n"] }]
  }], null, { _title_input: [{ type: ViewChild, args: ["title_input", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MeetingFlowDetailsComponent, { className: "MeetingFlowDetailsComponent", filePath: "apps/workplace/src/app/book/meeting-flow-new/meeting-flow-details.component.ts", lineNumber: 299 });
})();

// apps/workplace/src/app/book/meeting-flow-new/meeting-flow-options.component.ts
var _c02 = ["input"];
var _c12 = () => [];
var _c2 = () => ({ view: 1 });
var _c3 = (a0) => ({ capacity: a0 });
var _c4 = () => ({ standalone: true });
var _c5 = (a0, a1, a2, a3, a4) => ({ date: a0, duration: a1, all_day: a2, zone_id: a3, resources: a4 });
var _c6 = (a0, a1, a2, a3) => ({ date: a0, duration: a1, all_day: a2, zone_id: a3 });
var _forTrack02 = ($index, $item) => $item.id;
function MeetingFlowOptionsComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "icon", 6);
    \u0275\u0275text(2, "update");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.formatted_recurrence);
  }
}
function MeetingFlowOptionsComponent_Conditional_29_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(", ", \u0275\u0275pipeBind2(1, 1, ctx_r0.form_value().date, ctx_r0.time_format));
  }
}
function MeetingFlowOptionsComponent_Conditional_29_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(", ", \u0275\u0275pipeBind2(1, 1, ctx_r0.form_value().date_end, ctx_r0.time_format));
  }
}
function MeetingFlowOptionsComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275conditionalCreate(2, MeetingFlowOptionsComponent_Conditional_29_Conditional_2_Template, 2, 4);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275conditionalCreate(5, MeetingFlowOptionsComponent_Conditional_29_Conditional_5_Template, 2, 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 4, ctx_r0.form_value().date, "MMM d"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.form_value().all_day ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" - ", \u0275\u0275pipeBind2(4, 7, ctx_r0.form_value().date_end, "MMM d"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.form_value().all_day ? 5 : -1);
  }
}
function MeetingFlowOptionsComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "COMMON.ALL_DAY"), " ");
  }
}
function MeetingFlowOptionsComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind2(1, 3, ctx_r0.form_value().date, ctx_r0.time_format), " - ", \u0275\u0275pipeBind2(2, 6, ctx_r0.form_value().date_end, ctx_r0.time_format), " (", \u0275\u0275pipeBind2(3, 9, ctx_r0.form_value().date, "zzzz"), ") ");
  }
}
function MeetingFlowOptionsComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind3(2, 3, ctx_r0.form_value().date, ctx_r0.time_format, ctx_r0.timezone), " - ", \u0275\u0275pipeBind3(3, 7, ctx_r0.form_value().date_end, ctx_r0.time_format, ctx_r0.timezone), " (", \u0275\u0275pipeBind3(4, 11, ctx_r0.form_value().date, "zzzz", ctx_r0.timezone), ") ");
  }
}
function MeetingFlowOptionsComponent_Conditional_33_For_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "icon", 6);
    \u0275\u0275text(2, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const space_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 1, "CALENDAR_EVENT.CAPACITY_PEOPLE", \u0275\u0275pureFunction1(4, _c3, space_r2.capacity)), " ");
  }
}
function MeetingFlowOptionsComponent_Conditional_33_For_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "icon", 6);
    \u0275\u0275text(2, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const space_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.getSpaceLocation(space_r2));
  }
}
function MeetingFlowOptionsComponent_Conditional_33_For_10_Conditional_7_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feature_r3, " ");
  }
}
function MeetingFlowOptionsComponent_Conditional_33_For_10_Conditional_7_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const space_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" +", space_r2.features.length - 5, " ", \u0275\u0275pipeBind1(2, 2, "CALENDAR_EVENT.FEATURES_MORE"), " ");
  }
}
function MeetingFlowOptionsComponent_Conditional_33_For_10_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "icon", 6);
    \u0275\u0275text(2, "feature_search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 23);
    \u0275\u0275repeaterCreate(4, MeetingFlowOptionsComponent_Conditional_33_For_10_Conditional_7_For_5_Template, 2, 1, "span", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(6, MeetingFlowOptionsComponent_Conditional_33_For_10_Conditional_7_Conditional_6_Template, 3, 4, "span", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const space_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275repeater(space_r2.features.slice(0, 5));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(space_r2.features.length > 5 ? 6 : -1);
  }
}
function MeetingFlowOptionsComponent_Conditional_33_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "icon", 6);
    \u0275\u0275text(2, "room_preferences");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, MeetingFlowOptionsComponent_Conditional_33_For_10_Conditional_5_Template, 6, 6, "div", 9);
    \u0275\u0275conditionalCreate(6, MeetingFlowOptionsComponent_Conditional_33_For_10_Conditional_6_Template, 5, 1, "div", 9);
    \u0275\u0275conditionalCreate(7, MeetingFlowOptionsComponent_Conditional_33_For_10_Conditional_7_Template, 7, 1, "div", 22);
  }
  if (rf & 2) {
    const space_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", space_r2.display_name || space_r2.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(space_r2.capacity ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.getSpaceLocation(space_r2) ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(space_r2.features?.length ? 7 : -1);
  }
}
function MeetingFlowOptionsComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 4)(2, "div", 5)(3, "icon", 6);
    \u0275\u0275text(4, "done");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h3", 7);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 8);
    \u0275\u0275repeaterCreate(9, MeetingFlowOptionsComponent_Conditional_33_For_10_Template, 8, 4, null, null, _forTrack02);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 1, "CALENDAR_EVENT.SELECTED_ROOM_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.form_value().resources);
  }
}
function MeetingFlowOptionsComponent_Conditional_41_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 31);
    \u0275\u0275twoWayListener("ngModelChange", function MeetingFlowOptionsComponent_Conditional_41_Conditional_11_Template_mat_checkbox_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.notify_new_attendees_only, $event) || (ctx_r0.notify_new_attendees_only = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.notify_new_attendees_only);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(5, _c4));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "CALENDAR_EVENT.NOTIFY_NEW_ATTENDEES_ONLY"), " ");
  }
}
function MeetingFlowOptionsComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h3", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a-user-list-field", 26)(4, "button", 27);
    \u0275\u0275listener("click", function MeetingFlowOptionsComponent_Conditional_41_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.findAvailableTime());
    });
    \u0275\u0275elementStart(5, "div", 28);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 29);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(11, MeetingFlowOptionsComponent_Conditional_41_Conditional_11_Template, 3, 6, "mat-checkbox", 30);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 8, "CALENDAR_EVENT.ATTENDEES"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r0.form.attendees)("time", ctx_r0.form_value().date)("guests", ctx_r0.allow_externals())("flags", true);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 10, "CALENDAR_EVENT.FIND_AVAILABILITY"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 12, "COMMON.AVAILABILITY"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.can_notify_new_attendees_only() ? 11 : -1);
  }
}
function MeetingFlowOptionsComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.CAPACITY_WARNING"), " ");
  }
}
function MeetingFlowOptionsComponent_Conditional_43_Conditional_4_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const code_r7 = ctx.$implicit;
    \u0275\u0275property("value", code_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", code_r7, " ");
  }
}
function MeetingFlowOptionsComponent_Conditional_43_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 36);
    \u0275\u0275listener("openedChange", function MeetingFlowOptionsComponent_Conditional_43_Conditional_4_Template_mat_form_field_openedChange_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.focusInput());
    });
    \u0275\u0275elementStart(1, "mat-select", 37);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "input", 38, 0);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("ngModelChange", function MeetingFlowOptionsComponent_Conditional_43_Conditional_4_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.code_filter.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275element(6, "mat-option", 39);
    \u0275\u0275repeaterCreate(7, MeetingFlowOptionsComponent_Conditional_43_Conditional_4_For_8_Template, 2, 2, "mat-option", 40, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r0.form.catering_charge_code)("placeholder", \u0275\u0275pipeBind1(2, 6, "CALENDAR_EVENT.CATERING_CHARGE_CODE"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r0.code_filter())("ngModelOptions", \u0275\u0275pureFunction0(12, _c4))("placeholder", \u0275\u0275pipeBind1(5, 8, "CALENDAR_EVENT.CATERING_CHARGE_CODE_SEARCH"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.filtered_codes());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 10, "CALENDAR_EVENT.CATERING_CHARGE_CODE_REQUIRED"), " ");
  }
}
function MeetingFlowOptionsComponent_Conditional_43_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 41);
    \u0275\u0275element(1, "textarea", 42);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(3, "mat-error");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("mt-2", !(ctx_r0.form_value().catering?.length && ctx_r0.has_codes()));
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r0.form.catering_notes)("placeholder", \u0275\u0275pipeBind1(2, 5, "CALENDAR_EVENT.CATERING_NOTES"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 7, "CALENDAR_EVENT.CATERING_NOTES_REQUIRED"), " ");
  }
}
function MeetingFlowOptionsComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 32);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "catering-list-field", 33);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(4, MeetingFlowOptionsComponent_Conditional_43_Conditional_4_Template, 12, 13, "mat-form-field", 34);
    \u0275\u0275conditionalCreate(5, MeetingFlowOptionsComponent_Conditional_43_Conditional_5_Template, 6, 9, "mat-form-field", 35);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 5, "CALENDAR_EVENT.CATERING"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r0.form.catering)("options", \u0275\u0275pureFunction5(7, _c5, ctx_r0.form_value().date, ctx_r0.form_value().duration, ctx_r0.form_value().all_day, ctx_r0.form_value().resources?.length ? ctx_r0.form_value().resources[0]?.level?.parent_id : "", ctx_r0.form_value().resources));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form_value().catering?.length && ctx_r0.has_codes() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form_value().catering?.length ? 5 : -1);
  }
}
function MeetingFlowOptionsComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 32);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "asset-list-field", 43);
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, "RESOURCE.ASSETS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("options", \u0275\u0275pureFunction4(6, _c6, ctx_r0.form_value().date, ctx_r0.form_value().duration, ctx_r0.form_value().all_day, ctx_r0.form_value()?.resources?.length ? ctx_r0.form_value()?.resources[0]?.level?.parent_id : ""))("rejected_ids", ctx_r0.invalid_assets)("formField", ctx_r0.form.assets);
    \u0275\u0275control();
  }
}
function MeetingFlowOptionsComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 32);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "rich-text-input", 37);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "CALENDAR_EVENT.NOTES_HEADER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r0.form.body)("placeholder", \u0275\u0275pipeBind1(4, 5, "CALENDAR_EVENT.NOTES_INFO"));
    \u0275\u0275control();
  }
}
function MeetingFlowOptionsComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 19);
    \u0275\u0275text(1, "progress_activity");
    \u0275\u0275elementEnd();
  }
}
function MeetingFlowOptionsComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 6);
    \u0275\u0275text(1, "task_alt");
    \u0275\u0275elementEnd();
  }
}
function MeetingFlowOptionsComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 6);
    \u0275\u0275text(1, "keyboard_arrow_right");
    \u0275\u0275elementEnd();
  }
}
var MeetingFlowOptionsComponent = class _MeetingFlowOptionsComponent {
  constructor() {
    this._event_form = inject(EventFormService);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._catering = inject(CateringOrderStateService);
    this._dialog = inject(MatDialog);
    this._router = inject(Router);
    this.form_value = this._event_form.model;
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_notify_new_attendees_only = this._event_form.can_notify_new_attendees_only;
    this.notify_new_attendees_only = this._event_form.notify_new_attendees_only;
    this.allow_externals = settingSignal("events.allow_externals", false);
    this.has_assets = settingSignal("events.has_assets", false);
    this.hide_notes = settingSignal("events.hide_notes", false);
    this.hide_attendees = settingSignal("events.hide_attendees", false);
    this.strict_capacity_check = settingSignal("events.strict_capacity_check", false);
    this.no_standalone = settingSignal("events.no_standalone", false);
    this.booking_unavailable = settingSignal("events.booking_unavailable", false);
    this.code_filter = signal(
      "",
      ...ngDevMode ? [{ debugName: "code_filter" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.invalid_assets = [];
    this.total_capacity = computed(
      () => (this.form_value().resources || []).reduce((total, space) => total + (space.capacity || 0), 0),
      ...ngDevMode ? [{ debugName: "total_capacity" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.attendee_count = computed(
      () => {
        const attendees = this.form_value().attendees || [];
        const email = currentUser()?.email?.toLowerCase();
        const has_user = attendees.some((_) => _.email?.toLowerCase() === email);
        return attendees.length + (has_user ? 0 : 1);
      },
      ...ngDevMode ? [{ debugName: "attendee_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_capacity_warning = computed(
      () => !this.strict_capacity_check() && this.total_capacity() > 0 && this.total_capacity() <= (this.form_value().attendees?.length || 0),
      ...ngDevMode ? [{ debugName: "show_capacity_warning" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_catering = computed(
      () => this._catering.available_menu().length > 0,
      ...ngDevMode ? [{ debugName: "has_catering" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_codes = computed(
      () => this._catering.charge_codes().length > 0,
      ...ngDevMode ? [{ debugName: "has_codes" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered_codes = computed(
      () => {
        const search = this.code_filter().toLowerCase();
        return this._catering.charge_codes().filter((_) => _.toLowerCase().includes(search));
      },
      ...ngDevMode ? [{ debugName: "filtered_codes" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.allow_daily_allday_recurrence = settingSignal("events.allow_daily_allday_recurrence", false);
  }
  get form() {
    return this._event_form.form;
  }
  get model() {
    return this._event_form.model;
  }
  get is_multiday() {
    return this.form_value().duration > 24 * 60;
  }
  get time_format() {
    return this._settings.time_format;
  }
  get timezone() {
    return this._settings.get("app.events.use_building_timezone") ? this._org.building.timezone : "";
  }
  get formatted_recurrence() {
    const value = this.form_value();
    return formatRecurrence(fromEventRecurrence(__spreadProps(__spreadValues({}, value.recurrence), {
      start: value.recurrence.start || value.date
    })), value.recurrence.start || value.date);
  }
  getSpaceLocation(space) {
    if (!space)
      return "";
    const parts = [];
    if (space.level) {
      const level = this._org.levelWithID([
        typeof space.level === "string" ? space.level : space.level.id
      ]);
      if (level) {
        parts.push(level.display_name || level.name);
      }
    }
    if (space.zones?.length) {
      const building = this._org.buildings.find((b) => space.zones.includes(b.id));
      if (building) {
        parts.push(building.display_name || building.name);
      }
    }
    return parts.filter(Boolean).join(", ");
  }
  focusInput() {
    setTimeout(() => this._input?.nativeElement?.focus(), 100);
  }
  async confirmBooking() {
    const value = this.form_value();
    const space = value.resources[0];
    if (!value.host) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), { host: currentUser()?.email }));
    }
    if (this.strict_capacity_check() && this.attendee_count() > this.total_capacity()) {
      return notifyError(i18n("CALENDAR_EVENT.CAPACITY_ERROR"));
    }
    if (!this.allow_daily_allday_recurrence() && value.all_day && // "None" keeps pattern 'daily' with _pattern 'none'.
    value.recurrence?.pattern === "daily" && value.recurrence._pattern !== "none") {
      return notifyError(i18n("CALENDAR_EVENT.DAILY_RECURR_ERROR"));
    }
    this.form().markAsTouched();
    if (!this.form().valid()) {
      return notifyError(i18n("FORM.INVALID_FIELDS", {
        field_list: getInvalidSignalFields(this.form, this.model).join(", ")
      }));
    }
    if (this.no_standalone() && !space) {
      return notifyError(i18n("CALENDAR_EVENT.ROOM_REQUIRED"));
    }
    if (this.booking_unavailable()) {
      return this._event_form.openEventLinkModal();
    }
    if (!space) {
      const result = await openConfirmModal({
        title: i18n("APP.WORKPLACE.MEETING_WITHOUT_ROOM_TITLE"),
        content: i18n("APP.WORKPLACE.MEETING_WITHOUT_ROOM_MSG"),
        icon: { content: "event_available" }
      }, this._dialog);
      if (result.reason !== "done")
        return;
    }
    this.loading.set(true);
    try {
      await this._event_form.postForm().catch((_) => {
        notifyError(_);
        throw _;
      });
      this._router.navigate(["/book", "meeting", "success"]);
      notifySuccess(i18n("APP.WORKPLACE.MEETING_BOOKED"));
    } finally {
      this.loading.set(false);
    }
  }
  findAvailableTime() {
    const { attendees, organiser, date, duration } = this.model();
    const ref = this._dialog.open(FindAvailabilityModalComponent, {
      data: {
        users: attendees ?? [],
        host: organiser || currentUser(),
        date,
        duration
      }
    });
    ref.afterClosed().subscribe((d) => {
      if (!d)
        return;
      this.model.update((m) => __spreadProps(__spreadValues({}, m), {
        date: ref.componentInstance.date(),
        attendees: ref.componentInstance.users(),
        duration: ref.componentInstance.duration()
      }));
    });
  }
  static {
    this.\u0275fac = function MeetingFlowOptionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MeetingFlowOptionsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MeetingFlowOptionsComponent, selectors: [["meeting-flow-options"]], viewQuery: function MeetingFlowOptionsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._input = _t.first);
      }
    }, decls: 59, vars: 37, consts: [["input", ""], [1, "relative", "z-0", "flex", "w-full", "flex-col", "overflow-hidden", "rounded-xl", "border", "border-base-300", "bg-base-100"], [1, "gradient", "relative", "flex", "items-center", "space-x-2", "border-l-8", "border-base-content", "px-4", "py-3", "text-xl", "font-medium"], [1, "grid", "grid-cols-1", "gap-4", "p-4", "sm:grid-cols-2"], [1, "mb-2", "flex", "items-center", "space-x-4"], [1, "flex", "items-center", "justify-center", "rounded-full", "border", "border-success", "text-success"], [1, "text-2xl"], [1, "text-xl"], [1, "space-y-1", "pl-10"], [1, "flex", "items-center", "space-x-2"], ["date", ""], [1, "flex", "flex-col", "leading-tight"], ["time", ""], [1, "text-xs", "opacity-30"], [1, "p-4"], ["capacity-warning", "", 1, "bg-warning", "text-warning-content", "my-2", "inline-flex", "rounded-sm", "p-2", "text-xs", "shadow-sm"], [1, "sticky", "bottom-0", "mt-4", "flex", "justify-between", "rounded-t-xl", "border-x", "border-t", "border-base-300", "bg-base-100", "p-3"], ["btn", "", "matRipple", "", 1, "inverse", "w-40", "cursor-pointer", 3, "routerLink", "queryParams"], ["btn", "", "matRipple", "", 1, "", 3, "click", "disabled"], [1, "animate-spin", "text-2xl"], [1, "flex-1", "pr-4"], [1, "font-medium"], [1, "flex", "items-start", "space-x-2"], [1, "flex", "flex-wrap", "gap-1"], [1, "rounded-full", "bg-base-200", "px-2", "py-0.5", "text-xs"], [1, "flex", "items-center", "space-x-2", "text-xl"], [3, "formField", "time", "guests", "flags"], ["btn", "", "matRipple", "", 1, "inverse", "min-w-1/4", "flex-1", "sm:flex-none", 3, "click"], [1, "hidden", "sm:flex"], [1, "flex", "sm:hidden"], ["name", "notify-new-attendees-only", 3, "ngModel", "ngModelOptions"], ["name", "notify-new-attendees-only", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "mb-2", "mt-4", "flex", "items-center", "space-x-2", "text-xl"], [3, "formField", "options"], ["appearance", "outline", 1, "mt-2", "w-full"], ["appearance", "outline", 1, "w-full", 3, "mt-2"], ["appearance", "outline", 1, "mt-2", "w-full", 3, "openedChange"], [3, "formField", "placeholder"], [1, "sticky", "top-0", "z-50", "w-full", "rounded-none", "border-x-0", "border-b", "border-t-0", "border-base-200", "bg-base-100", "px-4", "py-3", "text-base", "focus:border-b", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [1, "hidden"], [3, "value"], ["appearance", "outline", 1, "w-full"], ["matInput", "", 3, "formField", "placeholder"], [3, "options", "rejected_ids", "formField"]], template: function MeetingFlowOptionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "icon");
        \u0275\u0275text(3, "task_alt");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div");
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 3)(8, "div")(9, "div", 4)(10, "div", 5)(11, "icon", 6);
        \u0275\u0275text(12, "done");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "h3", 7);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 8)(17, "div", 9)(18, "icon", 6);
        \u0275\u0275text(19, "today");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 10);
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(23, MeetingFlowOptionsComponent_Conditional_23_Template, 5, 1, "div", 9);
        \u0275\u0275elementStart(24, "div", 9)(25, "icon", 6);
        \u0275\u0275text(26, "schedule");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 11)(28, "div", 12);
        \u0275\u0275conditionalCreate(29, MeetingFlowOptionsComponent_Conditional_29_Template, 6, 10)(30, MeetingFlowOptionsComponent_Conditional_30_Template, 2, 3)(31, MeetingFlowOptionsComponent_Conditional_31_Template, 4, 12);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(32, MeetingFlowOptionsComponent_Conditional_32_Template, 5, 15, "div", 13);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(33, MeetingFlowOptionsComponent_Conditional_33_Template, 11, 3, "div");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 2)(35, "icon");
        \u0275\u0275text(36, "fork_right");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div");
        \u0275\u0275text(38);
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "div", 14);
        \u0275\u0275conditionalCreate(41, MeetingFlowOptionsComponent_Conditional_41_Template, 12, 14);
        \u0275\u0275conditionalCreate(42, MeetingFlowOptionsComponent_Conditional_42_Template, 3, 3, "div", 15);
        \u0275\u0275conditionalCreate(43, MeetingFlowOptionsComponent_Conditional_43_Template, 6, 13);
        \u0275\u0275conditionalCreate(44, MeetingFlowOptionsComponent_Conditional_44_Template, 4, 11);
        \u0275\u0275conditionalCreate(45, MeetingFlowOptionsComponent_Conditional_45_Template, 5, 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 16)(47, "a", 17);
        \u0275\u0275text(48);
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "button", 18);
        \u0275\u0275listener("click", function MeetingFlowOptionsComponent_Template_button_click_50_listener() {
          return ctx.confirmBooking();
        });
        \u0275\u0275elementStart(51, "div", 9);
        \u0275\u0275conditionalCreate(52, MeetingFlowOptionsComponent_Conditional_52_Template, 2, 0, "icon", 19)(53, MeetingFlowOptionsComponent_Conditional_53_Template, 2, 0, "icon", 6);
        \u0275\u0275elementStart(54, "div", 20);
        \u0275\u0275text(55);
        \u0275\u0275pipe(56, "translate");
        \u0275\u0275pipe(57, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(58, MeetingFlowOptionsComponent_Conditional_58_Template, 2, 0, "icon", 6);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 20, "CALENDAR_EVENT.REVIEW_CONFIRM_HEADER"), " ");
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1(" ", ctx.form_value().title || \u0275\u0275pipeBind1(15, 22, "CALENDAR_EVENT.MEETING_DETAILS_HEADER"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 24, ctx.form_value().date, "fullDate"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.form_value().recurrence?.pattern ? 23 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.is_multiday ? 29 : ctx.form_value().all_day ? 30 : 31);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.timezone ? 32 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.form_value().resources?.length ? 33 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 27, "CALENDAR_EVENT.OPTIONAL_EXTRAS_HEADER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx.hide_attendees() ? 41 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show_capacity_warning() ? 42 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.has_catering() ? 43 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.has_assets() ? 44 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.hide_notes() ? 45 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(35, _c12))("queryParams", \u0275\u0275pureFunction0(36, _c2));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 29, "COMMON.BACK"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading() ? 52 : 53);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.loading() ? \u0275\u0275pipeBind1(56, 31, "COMMON.CONFIRMING") : \u0275\u0275pipeBind1(57, 33, "COMMON.CONFIRM"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx.loading() ? 58 : -1);
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      UserListFieldComponent,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      FormField,
      MatCheckboxModule,
      MatCheckbox,
      MatRippleModule,
      MatRipple,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      CateringListFieldComponent,
      AssetListFieldComponent,
      RichTextInputComponent,
      RouterModule,
      RouterLink,
      DatePipe,
      TranslatePipe
    ], styles: ["\n.gradient[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      105deg,\n      var(--%NS%base-200) 0%,\n      var(--%NS%base-200) 50%,\n      var(--%NS%base-100) 100%);\n}\n/*# sourceMappingURL=meeting-flow-options.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeetingFlowOptionsComponent, [{
    type: Component,
    args: [{ selector: "meeting-flow-options", template: `
        <div
            class="relative z-0 flex w-full flex-col overflow-hidden rounded-xl border border-base-300 bg-base-100"
        >
            <div
                class="gradient relative flex items-center space-x-2 border-l-8 border-base-content px-4 py-3 text-xl font-medium"
            >
                <icon>task_alt</icon>
                <div>
                    {{ 'CALENDAR_EVENT.REVIEW_CONFIRM_HEADER' | translate }}
                </div>
            </div>
            <div class="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2">
                <div>
                    <div class="mb-2 flex items-center space-x-4">
                        <div
                            class="flex items-center justify-center rounded-full border border-success text-success"
                        >
                            <icon class="text-2xl">done</icon>
                        </div>
                        <h3 class="text-xl">
                            {{
                                form_value().title ||
                                    ('CALENDAR_EVENT.MEETING_DETAILS_HEADER'
                                        | translate)
                            }}
                        </h3>
                    </div>
                    <div class="space-y-1 pl-10">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">today</icon>
                            <div date>{{ form_value().date | date: 'fullDate' }}</div>
                        </div>
                        @if (form_value().recurrence?.pattern) {
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">update</icon>
                                <div date>{{ formatted_recurrence }}</div>
                            </div>
                        }
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">schedule</icon>
                            <div class="flex flex-col leading-tight">
                                <div time>
                                    @if (is_multiday) {
                                        {{ form_value().date | date: 'MMM d' }}@if (!form_value().all_day) {, {{ form_value().date | date: time_format }}}
                                        -
                                        {{ form_value().date_end | date: 'MMM d' }}@if (!form_value().all_day) {, {{ form_value().date_end | date: time_format }}}
                                    } @else if (form_value().all_day) {
                                        {{ 'COMMON.ALL_DAY' | translate }}
                                    } @else {
                                        {{ form_value().date | date: time_format }} - {{ form_value().date_end | date: time_format }} ({{ form_value().date | date: 'zzzz' }})
                                    }
                                </div>
                                @if (timezone) {
                                    <div class="text-xs opacity-30">
                                        {{ form_value().date | date: time_format : timezone }} - {{ form_value().date_end | date: time_format : timezone }} ({{ form_value().date | date: 'zzzz' : timezone }})
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                @if (form_value().resources?.length) {
                    <div>
                        <div class="mb-2 flex items-center space-x-4">
                            <div
                                class="flex items-center justify-center rounded-full border border-success text-success"
                            >
                                <icon class="text-2xl">done</icon>
                            </div>
                            <h3 class="text-xl">
                                {{
                                    'CALENDAR_EVENT.SELECTED_ROOM_HEADER'
                                        | translate
                                }}
                            </h3>
                        </div>
                        <div class="space-y-1 pl-10">
                            @for (space of form_value().resources; track space.id) {
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl"
                                        >room_preferences</icon
                                    >
                                    <div class="font-medium">
                                        {{ space.display_name || space.name }}
                                    </div>
                                </div>
                                @if (space.capacity) {
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl">group</icon>
                                        <div>
                                            {{
                                                'CALENDAR_EVENT.CAPACITY_PEOPLE'
                                                    | translate
                                                        : {
                                                              capacity:
                                                                  space.capacity,
                                                          }
                                            }}
                                        </div>
                                    </div>
                                }
                                @if (getSpaceLocation(space)) {
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl"
                                            >location_on</icon
                                        >
                                        <div>{{ getSpaceLocation(space) }}</div>
                                    </div>
                                }
                                @if (space.features?.length) {
                                    <div class="flex items-start space-x-2">
                                        <icon class="text-2xl"
                                            >feature_search</icon
                                        >
                                        <div class="flex flex-wrap gap-1">
                                            @for (
                                                feature of space.features.slice(
                                                    0,
                                                    5
                                                );
                                                track feature
                                            ) {
                                                <span
                                                    class="rounded-full bg-base-200 px-2 py-0.5 text-xs"
                                                >
                                                    {{ feature }}
                                                </span>
                                            }
                                            @if (space.features.length > 5) {
                                                <span
                                                    class="rounded-full bg-base-200 px-2 py-0.5 text-xs"
                                                >
                                                    +{{
                                                        space.features.length -
                                                            5
                                                    }}
                                                    {{
                                                        'CALENDAR_EVENT.FEATURES_MORE'
                                                            | translate
                                                    }}
                                                </span>
                                            }
                                        </div>
                                    </div>
                                }
                            }
                        </div>
                    </div>
                }
            </div>
            <div
                class="gradient relative flex items-center space-x-2 border-l-8 border-base-content px-4 py-3 text-xl font-medium"
            >
                <icon>fork_right</icon>
                <div>
                    {{ 'CALENDAR_EVENT.OPTIONAL_EXTRAS_HEADER' | translate }}
                </div>
            </div>
            <div class="p-4">
                @if (!hide_attendees()) {
                    <h3 class="flex items-center space-x-2 text-xl">
                        {{ 'CALENDAR_EVENT.ATTENDEES' | translate }}
                    </h3>
                    <a-user-list-field
                        [formField]="form.attendees"
                        [time]="form_value().date"
                        [guests]="allow_externals()"
                        [flags]="true"
                    >
                        <button
                            btn
                            matRipple
                            class="inverse min-w-1/4 flex-1 sm:flex-none"
                            (click)="findAvailableTime()"
                        >
                            <div class="hidden sm:flex">
                                {{ 'CALENDAR_EVENT.FIND_AVAILABILITY' | translate }}
                            </div>
                            <div class="flex sm:hidden">
                                {{ 'COMMON.AVAILABILITY' | translate }}
                            </div>
                        </button>
                    </a-user-list-field>
                    @if (can_notify_new_attendees_only()) {
                        <mat-checkbox
                            name="notify-new-attendees-only"
                            [(ngModel)]="notify_new_attendees_only"
                            [ngModelOptions]="{
                                standalone: true,
                            }"
                        >
                            {{
                                'CALENDAR_EVENT.NOTIFY_NEW_ATTENDEES_ONLY'
                                    | translate
                            }}
                        </mat-checkbox>
                    }
                }
                @if (show_capacity_warning()) {
                    <div
                        capacity-warning
                        class="bg-warning text-warning-content my-2 inline-flex rounded-sm p-2 text-xs shadow-sm"
                    >
                        {{ 'CALENDAR_EVENT.CAPACITY_WARNING' | translate }}
                    </div>
                }
                @if (has_catering()) {
                    <h3 class="mb-2 mt-4 flex items-center space-x-2 text-xl">
                        {{ 'CALENDAR_EVENT.CATERING' | translate }}
                    </h3>
                    <catering-list-field
                        [formField]="form.catering"
                        [options]="{
                            date: form_value().date,
                            duration: form_value().duration,
                            all_day: form_value().all_day,
                            zone_id: form_value().resources?.length
                                ? form_value().resources[0]?.level?.parent_id
                                : '',
                            resources: form_value().resources,
                        }"
                    ></catering-list-field>
                    @if (form_value().catering?.length && has_codes()) {
                        <mat-form-field
                            appearance="outline"
                            class="mt-2 w-full"
                            (openedChange)="focusInput()"
                        >
                            <mat-select
                                [formField]="form.catering_charge_code"
                                [placeholder]="
                                    'CALENDAR_EVENT.CATERING_CHARGE_CODE'
                                        | translate
                                "
                            >
                                <input
                                    #input
                                    class="sticky top-0 z-50 w-full rounded-none border-x-0 border-b border-t-0 border-base-200 bg-base-100 px-4 py-3 text-base focus:border-b"
                                    [ngModel]="code_filter()"
                                    (ngModelChange)="code_filter.set($event)"
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
                    @if (form_value().catering?.length) {
                        <mat-form-field
                            appearance="outline"
                            class="w-full"
                            [class.mt-2]="
                                !(form_value().catering?.length && has_codes())
                            "
                        >
                            <textarea
                                matInput
                                [formField]="form.catering_notes"
                                [placeholder]="
                                    'CALENDAR_EVENT.CATERING_NOTES' | translate
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
                }
                @if (has_assets()) {
                    <h3 class="mb-2 mt-4 flex items-center space-x-2 text-xl">
                        {{ 'RESOURCE.ASSETS' | translate }}
                    </h3>
                    <asset-list-field
                        [options]="{
                            date: form_value().date,
                            duration: form_value().duration,
                            all_day: form_value().all_day,
                            zone_id: form_value()?.resources?.length
                                ? form_value()?.resources[0]?.level?.parent_id
                                : '',
                        }"
                        [rejected_ids]="invalid_assets"
                        [formField]="form.assets"
                    />
                }
                @if (!hide_notes()) {
                    <h3 class="mb-2 mt-4 flex items-center space-x-2 text-xl">
                        {{ 'CALENDAR_EVENT.NOTES_HEADER' | translate }}
                    </h3>
                    <rich-text-input
                        [formField]="form.body"
                        [placeholder]="'CALENDAR_EVENT.NOTES_INFO' | translate"
                    />
                }
            </div>
        </div>
        <div
            class="sticky bottom-0 mt-4 flex justify-between rounded-t-xl border-x border-t border-base-300 bg-base-100 p-3"
        >
            <a
                btn
                matRipple
                class="inverse w-40 cursor-pointer"
                [routerLink]="[]"
                [queryParams]="{ view: 1 }"
            >
                {{ 'COMMON.BACK' | translate }}
            </a>
            <button
                btn
                matRipple
                class=""
                (click)="confirmBooking()"
                [disabled]="loading()"
            >
                <div class="flex items-center space-x-2">
                    @if (loading()) {
                        <icon class="animate-spin text-2xl"
                            >progress_activity</icon
                        >
                    } @else {
                        <icon class="text-2xl">task_alt</icon>
                    }
                    <div class="flex-1 pr-4">
                        {{
                            loading()
                                ? ('COMMON.CONFIRMING' | translate)
                                : ('COMMON.CONFIRM' | translate)
                        }}
                    </div>
                    @if (!loading()) {
                        <icon class="text-2xl">keyboard_arrow_right</icon>
                    }
                </div>
            </button>
        </div>
    `, imports: [
      CommonModule,
      IconComponent,
      TranslatePipe,
      UserListFieldComponent,
      FormsModule,
      FormField,
      MatCheckboxModule,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      CateringListFieldComponent,
      AssetListFieldComponent,
      RichTextInputComponent,
      RouterModule
    ], styles: ["/* angular:styles/component:css;3969732fa8a6995c9449a9ed86fb4979a28ba38038cac555e3a6a8befda2e8d7;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/book/meeting-flow-new/meeting-flow-options.component.ts */\n.gradient {\n  background:\n    linear-gradient(\n      105deg,\n      var(--base-200) 0%,\n      var(--base-200) 50%,\n      var(--base-100) 100%);\n}\n/*# sourceMappingURL=meeting-flow-options.component.css.map */\n"] }]
  }], null, { _input: [{
    type: ViewChild,
    args: ["input"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MeetingFlowOptionsComponent, { className: "MeetingFlowOptionsComponent", filePath: "apps/workplace/src/app/book/meeting-flow-new/meeting-flow-options.component.ts", lineNumber: 446 });
})();

// apps/workplace/src/app/book/meeting-flow-new/meeting-flow-space-list.component.ts
var _c03 = (a0) => ({ name: a0 });
var _c13 = (a0) => ({ count: a0 });
var _c22 = (a0, a1) => ({ page: a0, total: a1 });
var _forTrack03 = ($index, $item) => $item.id;
function MeetingFlowSpaceListComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "p", 3);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 4);
    \u0275\u0275listener("click", function MeetingFlowSpaceListComponent_Conditional_0_Conditional_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.retry());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.LOAD_ERROR"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, "COMMON.RETRY"), " ");
  }
}
function MeetingFlowSpaceListComponent_Conditional_0_Conditional_1_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 12);
    \u0275\u0275text(1, "task_alt");
    \u0275\u0275elementEnd();
  }
}
function MeetingFlowSpaceListComponent_Conditional_0_Conditional_1_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 13);
  }
  if (rf & 2) {
    const space_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", space_r4.images[0]);
  }
}
function MeetingFlowSpaceListComponent_Conditional_0_Conditional_1_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 14);
  }
}
function MeetingFlowSpaceListComponent_Conditional_0_Conditional_1_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275listener("click", function MeetingFlowSpaceListComponent_Conditional_0_Conditional_1_For_2_Conditional_7_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const space_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bg-error", ctx_r1.room_alerts()[space_r4.id][0] === "closed")("bg-info", ctx_r1.room_alerts()[space_r4.id][0] === "info")("bg-warning", ctx_r1.room_alerts()[space_r4.id][0] === "warn")("text-error-content", ctx_r1.room_alerts()[space_r4.id][0] === "closed")("text-info-content", ctx_r1.room_alerts()[space_r4.id][0] === "info")("text-warning-content", ctx_r1.room_alerts()[space_r4.id][0] === "warn");
    \u0275\u0275property("matTooltip", ctx_r1.room_alerts()[space_r4.id][1]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.room_alerts()[space_r4.id][0] === "warn" ? "warning" : ctx_r1.room_alerts()[space_r4.id][0] === "info" ? "info" : "close");
  }
}
function MeetingFlowSpaceListComponent_Conditional_0_Conditional_1_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.ROOM_CLOSED"), " ");
  }
}
function MeetingFlowSpaceListComponent_Conditional_0_Conditional_1_For_2_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "icon", 20);
    \u0275\u0275text(2, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const space_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 1, "CALENDAR_EVENT.CAPACITY_COUNT", \u0275\u0275pureFunction1(4, _c13, space_r4.capacity)), " ");
  }
}
function MeetingFlowSpaceListComponent_Conditional_0_Conditional_1_For_2_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.APPROVAL_REQUIRED"), " ");
  }
}
function MeetingFlowSpaceListComponent_Conditional_0_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 8)(1, "div", 9)(2, "button", 10);
    \u0275\u0275listener("click", function MeetingFlowSpaceListComponent_Conditional_0_Conditional_1_For_2_Template_button_click_2_listener() {
      const space_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.space_selected.emit(space_r4));
    });
    \u0275\u0275elementStart(3, "div", 11);
    \u0275\u0275conditionalCreate(4, MeetingFlowSpaceListComponent_Conditional_0_Conditional_1_For_2_Conditional_4_Template, 2, 0, "icon", 12);
    \u0275\u0275conditionalCreate(5, MeetingFlowSpaceListComponent_Conditional_0_Conditional_1_For_2_Conditional_5_Template, 1, 1, "img", 13)(6, MeetingFlowSpaceListComponent_Conditional_0_Conditional_1_For_2_Conditional_6_Template, 1, 0, "img", 14);
    \u0275\u0275conditionalCreate(7, MeetingFlowSpaceListComponent_Conditional_0_Conditional_1_For_2_Conditional_7_Template, 3, 14, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 16)(9, "div", 17);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, MeetingFlowSpaceListComponent_Conditional_0_Conditional_1_For_2_Conditional_12_Template, 3, 3, "div", 18);
    \u0275\u0275elementStart(13, "div", 19)(14, "icon", 20);
    \u0275\u0275text(15, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 21);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "level");
    \u0275\u0275pipe(19, "level");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(20, MeetingFlowSpaceListComponent_Conditional_0_Conditional_1_For_2_Conditional_20_Template, 6, 6, "div", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "button", 23);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275listener("click", function MeetingFlowSpaceListComponent_Conditional_0_Conditional_1_For_2_Template_button_click_21_listener() {
      const space_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleFavourite(space_r4));
    });
    \u0275\u0275elementStart(23, "icon", 24);
    \u0275\u0275text(24, "favorite");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(25, MeetingFlowSpaceListComponent_Conditional_0_Conditional_1_For_2_Conditional_25_Template, 3, 3, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const space_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    const closed_r5 = ctx_r1.room_alerts()[space_r4.id]?.[0] === "closed";
    \u0275\u0275classProp("!border-success", ctx_r1.selected_spaces().includes(space_r4.id))("!bg-error-light", closed_r5);
    \u0275\u0275advance();
    \u0275\u0275property("matRippleDisabled", closed_r5);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", closed_r5);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.selected_spaces().includes(space_r4.id) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(space_r4.images?.length ? 5 : 6);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.room_alerts()[space_r4.id] ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", space_r4.display_name || space_r4.name || \u0275\u0275pipeBind1(11, 19, "CALENDAR_EVENT.MEETING_SPACE_DEFAULT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(closed_r5 ? 12 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 21, space_r4.zones)?.display_name || \u0275\u0275pipeBind1(19, 23, space_r4.zones)?.name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(space_r4.capacity > 0 ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-info", ctx_r1.favourites().includes(space_r4.id));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(22, 25, "CALENDAR_EVENT.SPACE_FAVOURITE", \u0275\u0275pureFunction1(28, _c03, space_r4.display_name || space_r4.name)))("aria-pressed", ctx_r1.favourites().includes(space_r4.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("className", ctx_r1.favourites().includes(space_r4.id) ? "material-symbols-rounded" : "material-symbols-outlined");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(space_r4.approval ? 25 : -1);
  }
}
function MeetingFlowSpaceListComponent_Conditional_0_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 28);
    \u0275\u0275elementStart(4, "div", 29);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 30);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275listener("click", function MeetingFlowSpaceListComponent_Conditional_0_Conditional_1_Conditional_4_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.page.set(ctx_r1.active_page() - 1));
    });
    \u0275\u0275elementStart(9, "icon");
    \u0275\u0275text(10, "keyboard_arrow_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 30);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275listener("click", function MeetingFlowSpaceListComponent_Conditional_0_Conditional_1_Conditional_4_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.page.set(ctx_r1.active_page() + 1));
    });
    \u0275\u0275elementStart(13, "icon");
    \u0275\u0275text(14, "keyboard_arrow_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    const range_r7 = ctx_r1.active_range();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", range_r7[0], " - ", range_r7[1], " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 7, "CALENDAR_EVENT.SPACE_LIST_PAGE", \u0275\u0275pureFunction2(14, _c22, ctx_r1.active_page() + 1, ctx_r1.max_pages())), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.active_page() <= 0);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(8, 10, "COMMON.PREVIOUS"));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.active_page() + 1 >= ctx_r1.max_pages());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(12, 12, "COMMON.NEXT"));
  }
}
function MeetingFlowSpaceListComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 5);
    \u0275\u0275repeaterCreate(1, MeetingFlowSpaceListComponent_Conditional_0_Conditional_1_For_2_Template, 26, 30, "li", 6, _forTrack03);
    \u0275\u0275pipe(3, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, MeetingFlowSpaceListComponent_Conditional_0_Conditional_1_Conditional_4_Template, 15, 17, "div", 7);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind3(3, 1, ctx_r1.available_spaces(), ctx_r1.active_page() * ctx_r1.page_size(), ctx_r1.active_page() * ctx_r1.page_size() + ctx_r1.page_size()));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.available_spaces().length > ctx_r1.page_size() ? 4 : -1);
  }
}
function MeetingFlowSpaceListComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "p", 31);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "CALENDAR_EVENT.SPACE_SELECT_EMPTY"), " ");
  }
}
function MeetingFlowSpaceListComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MeetingFlowSpaceListComponent_Conditional_0_Conditional_0_Template, 7, 6, "div", 1)(1, MeetingFlowSpaceListComponent_Conditional_0_Conditional_1_Template, 5, 5)(2, MeetingFlowSpaceListComponent_Conditional_0_Conditional_2_Template, 4, 3, "div", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.load_failed() ? 0 : ctx_r1.available_spaces()?.length ? 1 : 2);
  }
}
function MeetingFlowSpaceListComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "mat-spinner", 32);
    \u0275\u0275elementStart(2, "p", 33);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "CALENDAR_EVENT.SPACE_SELECT_LOADING"), " ");
  }
}
var MeetingFlowSpaceListComponent = class _MeetingFlowSpaceListComponent {
  constructor() {
    this._event_form = inject(EventFormService);
    this._settings = inject(SettingsService);
    this.selected_spaces = model(
      [],
      ...ngDevMode ? [{ debugName: "selected_spaces" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.space_selected = output();
    this.loading = this._event_form.loading;
    this.available_spaces = this._event_form.available_spaces;
    this.room_alerts = this._event_form.room_alerts;
    this.load_failed = this._event_form.spaces_load_failed;
    this.retry = () => this._event_form.reloadSpaces();
    this.page = signal(
      0,
      ...ngDevMode ? [{ debugName: "page" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.page_size = signal(
      10,
      ...ngDevMode ? [{ debugName: "page_size" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.max_pages = computed(
      () => Math.ceil(this.available_spaces().length / this.page_size()),
      ...ngDevMode ? [{ debugName: "max_pages" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_page = computed(
      () => Math.max(0, Math.min(this.page(), this.max_pages() - 1)),
      ...ngDevMode ? [{ debugName: "active_page" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_range = computed(
      () => [
        this.active_page() * this.page_size() + 1,
        Math.min(this.active_page() * this.page_size() + this.page_size(), this.available_spaces()?.length)
      ],
      ...ngDevMode ? [{ debugName: "active_range" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.favourites = settingSignal(SETTING_KEYS.FAVORITE_ROOMS, [], true);
  }
  toggleFavourite(space) {
    const updated = toggleListItem(this.favourites(), space.id);
    this.favourites.set(updated);
    this._settings.saveUserSetting(SETTING_KEYS.FAVORITE_ROOMS, updated);
  }
  static {
    this.\u0275fac = function MeetingFlowSpaceListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MeetingFlowSpaceListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MeetingFlowSpaceListComponent, selectors: [["meeting-flow-space-list"]], inputs: { selected_spaces: [1, "selected_spaces"] }, outputs: { selected_spaces: "selected_spacesChange", space_selected: "space_selected" }, decls: 2, vars: 1, consts: [["loading", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], ["load-error", "", "role", "alert", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-4", "p-16"], ["empty", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], [1, "text-center"], ["btn", "", "matRipple", "", 1, "inverse", 3, "click"], [1, "list-style-none", "space-y-2"], ["space", "", 1, "relative", "w-full", "rounded-lg", "border", "border-base-200", "bg-base-100", "shadow", "hover:border-info", 3, "!border-success", "!bg-error-light"], [1, "mt-2", "flex", "w-full", "items-center", "space-x-2", "rounded-xl", "border", "border-base-300", "bg-base-100", "p-1"], ["space", "", 1, "relative", "w-full", "rounded-lg", "border", "border-base-200", "bg-base-100", "shadow", "hover:border-info"], ["matRipple", "", 1, "p-2", 3, "matRippleDisabled"], ["name", "select-space", 1, "flex", "h-full", "w-full", "items-center", "rounded", 3, "click", "disabled"], [1, "relative", "mr-4", "flex", "h-20", "w-20", "min-w-[5rem]", "items-center", "justify-center", "overflow-hidden", "rounded-xl", "bg-base-200"], [1, "absolute", "left-1", "top-1", "rounded-full", "bg-base-200"], ["auth", "", 1, "h-full", "object-cover", 3, "source"], ["src", "assets/icons/room-placeholder.svg", 1, "m-auto"], [1, "pointer-events-auto", "absolute", "bottom-1", "left-1", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", 3, "matTooltip", "bg-error", "bg-info", "bg-warning", "text-error-content", "text-info-content", "text-warning-content"], [1, "max-w-[calc(100%-6rem)]", "space-y-2"], [1, "mr-10", "truncate", "text-left", "font-medium"], ["closed", "", 1, "w-fit", "rounded", "bg-error", "px-2", "py-0.5", "text-xs", "font-medium", "text-error-content"], [1, "flex", "items-center", "space-x-2", "text-sm"], [1, "text-info"], [1, "truncate"], ["capacity", "", 1, "flex", "items-center", "space-x-2", "text-sm"], ["icon", "", "matRipple", "", "name", "toggle-space-favourite", 1, "absolute", "right-1", "top-1", 3, "click"], [3, "className"], [1, "absolute", "bottom-1", "right-1", "w-14", "rounded", "bg-warning", "px-2", "py-1", "text-center", "text-[0.625rem]", "font-medium", "leading-tight", "text-warning-content"], [1, "pointer-events-auto", "absolute", "bottom-1", "left-1", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", 3, "click", "matTooltip"], [1, "!ml-2", "rounded-md", "bg-base-200", "px-2", "py-1", "font-mono", "text-xs"], [1, "flex-1"], [1, "p-2"], ["icon", "", "matRipple", "", 1, "rounded-xl", "border", "border-base-300", 3, "click", "disabled"], [1, "text-center", "opacity-30"], [3, "diameter"], [1, "opacity-30"]], template: function MeetingFlowSpaceListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, MeetingFlowSpaceListComponent_Conditional_0_Template, 3, 1)(1, MeetingFlowSpaceListComponent_Conditional_1_Template, 5, 4, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.loading() ? 0 : 1);
      }
    }, dependencies: [
      CommonModule,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      AuthenticatedImageDirective,
      SlicePipe,
      TranslatePipe,
      LevelPipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n/*# sourceMappingURL=meeting-flow-space-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeetingFlowSpaceListComponent, [{
    type: Component,
    args: [{ selector: "meeting-flow-space-list", template: `
        @if (!loading()) {
            @if (load_failed()) {
                <div
                    load-error
                    role="alert"
                    class="flex flex-col items-center justify-center space-y-4 p-16"
                >
                    <p class="text-center">
                        {{ 'COMMON.LOAD_ERROR' | translate }}
                    </p>
                    <button btn matRipple class="inverse" (click)="retry()">
                        {{ 'COMMON.RETRY' | translate }}
                    </button>
                </div>
            } @else if (available_spaces()?.length) {
                <ul class="list-style-none space-y-2">
                    @for (
                        space of available_spaces()
                            | slice
                                : active_page() * page_size()
                                : active_page() * page_size() + page_size();
                        track space.id
                    ) {
                        @let closed =
                            room_alerts()[space.id]?.[0] === 'closed';
                        <li
                            space
                            [class.!border-success]="
                                selected_spaces().includes(space.id)
                            "
                            class="relative w-full rounded-lg border border-base-200 bg-base-100 shadow hover:border-info"
                            [class.!bg-error-light]="closed"
                        >
                            <div
                                matRipple
                                class="p-2"
                                [matRippleDisabled]="closed"
                            >
                                <button
                                    name="select-space"
                                    class="flex h-full w-full items-center rounded"
                                    [disabled]="closed"
                                    (click)="space_selected.emit(space)"
                                >
                                    <div
                                        class="relative mr-4 flex h-20 w-20 min-w-[5rem] items-center justify-center overflow-hidden rounded-xl bg-base-200"
                                    >
                                        @if (
                                            selected_spaces().includes(space.id)
                                        ) {
                                            <icon
                                                class="absolute left-1 top-1 rounded-full bg-base-200"
                                                >task_alt</icon
                                            >
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
                                                src="assets/icons/room-placeholder.svg"
                                            />
                                        }
                                        @if (room_alerts()[space.id]) {
                                            <div
                                                class="pointer-events-auto absolute bottom-1 left-1 flex h-6 w-6 items-center justify-center rounded-full"
                                                [matTooltip]="
                                                    room_alerts()[space.id][1]
                                                "
                                                [class.bg-error]="
                                                    room_alerts()[space.id][0] ===
                                                    'closed'
                                                "
                                                [class.bg-info]="
                                                    room_alerts()[space.id][0] ===
                                                    'info'
                                                "
                                                [class.bg-warning]="
                                                    room_alerts()[space.id][0] ===
                                                    'warn'
                                                "
                                                [class.text-error-content]="
                                                    room_alerts()[space.id][0] ===
                                                    'closed'
                                                "
                                                [class.text-info-content]="
                                                    room_alerts()[space.id][0] ===
                                                    'info'
                                                "
                                                [class.text-warning-content]="
                                                    room_alerts()[space.id][0] ===
                                                    'warn'
                                                "
                                                (click)="
                                                    $event.stopPropagation()
                                                "
                                            >
                                                <icon>{{
                                                    room_alerts()[space.id][0] ===
                                                    'warn'
                                                        ? 'warning'
                                                        : room_alerts()[
                                                                space.id
                                                            ][0] === 'info'
                                                          ? 'info'
                                                          : 'close'
                                                }}</icon>
                                            </div>
                                        }
                                    </div>
                                    <div class="max-w-[calc(100%-6rem)] space-y-2">
                                        <div
                                            class="mr-10 truncate text-left font-medium"
                                        >
                                            {{
                                                space.display_name ||
                                                    space.name ||
                                                    ('CALENDAR_EVENT.MEETING_SPACE_DEFAULT'
                                                        | translate)
                                            }}
                                        </div>
                                        @if (closed) {
                                            <div
                                                closed
                                                class="w-fit rounded bg-error px-2 py-0.5 text-xs font-medium text-error-content"
                                            >
                                                {{
                                                    'CALENDAR_EVENT.ROOM_CLOSED'
                                                        | translate
                                                }}
                                            </div>
                                        }
                                        <div
                                            class="flex items-center space-x-2 text-sm"
                                        >
                                            <icon class="text-info">place</icon>
                                            <p class="truncate">
                                                {{
                                                    (space.zones | level)
                                                        ?.display_name ||
                                                        (space.zones | level)
                                                            ?.name
                                                }}
                                            </p>
                                        </div>
                                        @if (space.capacity > 0) {
                                            <div
                                                capacity
                                                class="flex items-center space-x-2 text-sm"
                                            >
                                                <icon class="text-info"
                                                    >people</icon
                                                >
                                                <p>
                                                    {{
                                                        'CALENDAR_EVENT.CAPACITY_COUNT'
                                                            | translate
                                                                : {
                                                                      count: space.capacity,
                                                                  }
                                                    }}
                                                </p>
                                            </div>
                                        }
                                    </div>
                                </button>
                            </div>
                            <button
                                icon
                                matRipple
                                name="toggle-space-favourite"
                                class="absolute right-1 top-1"
                                [class.text-info]="
                                    favourites().includes(space.id)
                                "
                                [attr.aria-label]="
                                    'CALENDAR_EVENT.SPACE_FAVOURITE'
                                        | translate
                                            : {
                                                  name:
                                                      space.display_name ||
                                                      space.name,
                                              }
                                "
                                [attr.aria-pressed]="
                                    favourites().includes(space.id)
                                "
                                (click)="toggleFavourite(space)"
                            >
                                <icon
                                    [className]="
                                        favourites().includes(space.id)
                                            ? 'material-symbols-rounded'
                                            : 'material-symbols-outlined'
                                    "
                                    >favorite</icon
                                >
                            </button>
                            @if (space.approval) {
                                <div
                                    class="absolute bottom-1 right-1 w-14 rounded bg-warning px-2 py-1 text-center text-[0.625rem] font-medium leading-tight text-warning-content"
                                >
                                    {{ 'COMMON.APPROVAL_REQUIRED' | translate }}
                                </div>
                            }
                        </li>
                    }
                </ul>
                @if (available_spaces().length > page_size()) {
                    <div
                        class="mt-2 flex w-full items-center space-x-2 rounded-xl border border-base-300 bg-base-100 p-1"
                    >
                        <div
                            class="!ml-2 rounded-md bg-base-200 px-2 py-1 font-mono text-xs"
                        >
                            @let range = active_range();
                            {{ range[0] }} - {{ range[1] }}
                        </div>
                        <div class="flex-1"></div>
                        <div class="p-2">
                            {{
                                'CALENDAR_EVENT.SPACE_LIST_PAGE'
                                    | translate
                                        : {
                                              page: active_page() + 1,
                                              total: max_pages(),
                                          }
                            }}
                        </div>
                        <button
                            icon
                            matRipple
                            [disabled]="active_page() <= 0"
                            [attr.aria-label]="'COMMON.PREVIOUS' | translate"
                            (click)="page.set(active_page() - 1)"
                            class="rounded-xl border border-base-300"
                        >
                            <icon>keyboard_arrow_left</icon>
                        </button>
                        <button
                            icon
                            matRipple
                            [disabled]="active_page() + 1 >= max_pages()"
                            [attr.aria-label]="'COMMON.NEXT' | translate"
                            (click)="page.set(active_page() + 1)"
                            class="rounded-xl border border-base-300"
                        >
                            <icon>keyboard_arrow_right</icon>
                        </button>
                    </div>
                }
            } @else {
                <div
                    empty
                    class="flex flex-col items-center justify-center space-y-2 p-16"
                >
                    <p class="text-center opacity-30">
                        {{ 'CALENDAR_EVENT.SPACE_SELECT_EMPTY' | translate }}
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
                    {{ 'CALENDAR_EVENT.SPACE_SELECT_LOADING' | translate }}
                    <!-- <br />
  {{ loading | async | json }} -->
                </p>
            </div>
        }
    `, imports: [
      CommonModule,
      TranslatePipe,
      MatProgressSpinnerModule,
      LevelPipe,
      IconComponent,
      MatRippleModule,
      MatTooltipModule,
      AuthenticatedImageDirective
    ], styles: ["/* angular:styles/component:css;16acf1d9baeea8a52dbebd8012c2041b0495c58e0446b770da3b170e181f97ad;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/book/meeting-flow-new/meeting-flow-space-list.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n/*# sourceMappingURL=meeting-flow-space-list.component.css.map */\n"] }]
  }], null, { selected_spaces: [{ type: Input, args: [{ isSignal: true, alias: "selected_spaces", required: false }] }, { type: Output, args: ["selected_spacesChange"] }], space_selected: [{ type: Output, args: ["space_selected"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MeetingFlowSpaceListComponent, { className: "MeetingFlowSpaceListComponent", filePath: "apps/workplace/src/app/book/meeting-flow-new/meeting-flow-space-list.component.ts", lineNumber: 326 });
})();

// apps/workplace/src/app/book/meeting-flow-new/meeting-flow-space-map.component.ts
var _c04 = () => ({ controls: true });
var _c14 = () => ({ standalone: true });
function MeetingFlowSpaceMapComponent_Conditional_0_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 9);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lvl_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, lvl_r3?.parent_id)?.display_name, " ");
  }
}
function MeetingFlowSpaceMapComponent_Conditional_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6)(1, "div", 7);
    \u0275\u0275conditionalCreate(2, MeetingFlowSpaceMapComponent_Conditional_0_For_5_Conditional_2_Template, 5, 3, "div", 8);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lvl_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", lvl_r3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region() ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lvl_r3.display_name || lvl_r3.name);
  }
}
function MeetingFlowSpaceMapComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field", 4)(2, "mat-select", 5);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("ngModelChange", function MeetingFlowSpaceMapComponent_Conditional_0_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setLevel($event));
    });
    \u0275\u0275repeaterCreate(4, MeetingFlowSpaceMapComponent_Conditional_0_For_5_Template, 5, 3, "mat-option", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.level())("ngModelOptions", \u0275\u0275pureFunction0(5, _c14))("placeholder", \u0275\u0275pipeBind1(3, 3, "COMMON.LEVEL_ANY"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.levels());
  }
}
function MeetingFlowSpaceMapComponent_Conditional_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("source", ctx_r1.selected_space().images[0]);
  }
}
function MeetingFlowSpaceMapComponent_Conditional_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 13);
  }
}
function MeetingFlowSpaceMapComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 10)(2, "icon", 11);
    \u0275\u0275text(3, "task_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, MeetingFlowSpaceMapComponent_Conditional_3_Conditional_4_Template, 1, 1, "img", 12)(5, MeetingFlowSpaceMapComponent_Conditional_3_Conditional_5_Template, 1, 0, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 14)(7, "div", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 16)(10, "icon", 17);
    \u0275\u0275text(11, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 18);
    \u0275\u0275declareLet(13);
    \u0275\u0275pipe(14, "level");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 19);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.selected_space().images?.length ? 4 : 5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selected_space().display_name || ctx_r1.selected_space().name || ctx_r1.selected_space().id, " ");
    const lvl_r4 = \u0275\u0275pipeBind1(14, 4, ctx_r1.selected_space().zones);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", lvl_r4?.display_name || lvl_r4?.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 6, "COMMON.SELECTED"), " ");
  }
}
var MeetingFlowSpaceMapComponent = class _MeetingFlowSpaceMapComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._event_form = inject(EventFormService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.selected_spaces = input(
      [],
      ...ngDevMode ? [{ debugName: "selected_spaces" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active = input(
      void 0,
      ...ngDevMode ? [{ debugName: "active" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_displayed = input(
      false,
      ...ngDevMode ? [{ debugName: "is_displayed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.space_selected = output();
    this.zoom = signal(
      1,
      ...ngDevMode ? [{ debugName: "zoom" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.center = signal(
      { x: 0.5, y: 0.5 },
      ...ngDevMode ? [{ debugName: "center" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.coordinates = signal(
      void 0,
      ...ngDevMode ? [{ debugName: "coordinates" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._selectedSpace = (s) => () => this.space_selected.emit(s);
    this.setOptions = (o) => this._event_form.setOptions(o);
    this.level = signal(
      null,
      ...ngDevMode ? [{ debugName: "level" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.use_region = settingSignal("use_region", false);
    this.available_spaces = this._event_form.available_spaces;
    this.map_url = computed(
      () => this.level()?.map_id || "",
      ...ngDevMode ? [{ debugName: "map_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.space_list = this._event_form.spaces;
    this.features = signal(
      [],
      ...ngDevMode ? [{ debugName: "features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.levels = computed(
      () => {
        const region = this._org.active_region();
        const bld = this._org.active_building();
        const spaces = this._event_form.spaces();
        const level_list = this.use_region() ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld);
        const level_ids = new Set(flatten(spaces.map((space) => space.zones || [])));
        return level_list.filter((lvl) => !lvl.tags.includes("parking") && level_ids.has(lvl.id)).sort((a, b) => a.parent_id.localeCompare(b.parent_id) || (a.display_name || "").localeCompare(b.display_name || ""));
      },
      ...ngDevMode ? [{ debugName: "levels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_space = computed(
      () => {
        const selected_ids = this.selected_spaces();
        if (!selected_ids?.length)
          return null;
        const available = this.available_spaces();
        return available.find((space) => selected_ids.includes(space.id)) || null;
      },
      ...ngDevMode ? [{ debugName: "selected_space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.actions = computed(
      () => this.available_spaces().map((space) => ({
        id: space.map_id,
        action: ["touchend", "mouseup"],
        callback: this._selectedSpace(space)
      })),
      ...ngDevMode ? [{ debugName: "actions" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.styles = computed(
      () => {
        const free_spaces = this.available_spaces();
        const spaces = this.space_list();
        return spaces.reduce((styles, space) => {
          const colours = this._settings.get("app.explore.colors") || {};
          const status = free_spaces.find((_) => _.id === space.id) ? this.selected_spaces().includes(space.id) ? "pending" : "free" : "busy";
          styles[`#${space.map_id || space.id}`] = {
            fill: colours[`space-${status}`] || colours[`${status}`] || DEFAULT_COLOURS[`${status}`]
          };
          return styles;
        }, {});
      },
      ...ngDevMode ? [{ debugName: "styles" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._levels_update = effect(
      () => {
        const { zones } = this._event_form.options();
        const level = this._org.levelWithID(zones);
        if (level)
          this.level.set(level);
      },
      ...ngDevMode ? [{ debugName: "_levels_update" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  setLevel(level) {
    this.setOptions({ zones: [level?.id] });
    const bld = this._org.buildings.find((_) => _.id === level?.parent_id);
    if (bld) {
      const [latitude, longitude] = (level.location || bld.location).split(",").map((_) => parseFloat(_));
      this.coordinates.set({ latitude, longitude });
    }
    this.level.set(level);
  }
  setZoom(new_zoom) {
    this.zoom.set(Math.max(0.5, Math.min(10, new_zoom)));
  }
  resetMap() {
    this.zoom.set(1);
    this.center.set({ x: 0.5, y: 0.5 });
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MeetingFlowSpaceMapComponent_BaseFactory;
      return function MeetingFlowSpaceMapComponent_Factory(__ngFactoryType__) {
        return (\u0275MeetingFlowSpaceMapComponent_BaseFactory || (\u0275MeetingFlowSpaceMapComponent_BaseFactory = \u0275\u0275getInheritedFactory(_MeetingFlowSpaceMapComponent)))(__ngFactoryType__ || _MeetingFlowSpaceMapComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MeetingFlowSpaceMapComponent, selectors: [["meeting-flow-space-map"]], inputs: { selected_spaces: [1, "selected_spaces"], active: [1, "active"], is_displayed: [1, "is_displayed"] }, outputs: { space_selected: "space_selected" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 10, consts: [[1, "absolute", "top-2", "right-2", "left-2", "z-10", "rounded", "border", "border-base-300", "bg-base-100", "p-2", "shadow"], [1, "absolute", "inset-0", "w-full", "flex-1"], [3, "zoomChange", "centerChange", "src", "zoom", "center", "styles", "features", "actions", "options"], [1, "absolute", "bottom-4", "left-4", "right-16", "z-10", "flex", "items-center", "rounded-lg", "border", "border-success", "bg-base-100", "p-2", "shadow-lg"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], [1, "relative", "mr-2", "flex", "h-12", "w-12", "min-w-[3rem]", "items-center", "justify-center", "overflow-hidden", "rounded-lg", "bg-base-200"], [1, "absolute", "left-0", "top-0", "rounded-full", "bg-base-200", "text-success"], ["auth", "", 1, "h-full", "object-cover", 3, "source"], ["src", "assets/icons/room-placeholder.svg", 1, "m-auto", "max-h-8", "max-w-8"], [1, "min-w-0", "flex-1"], [1, "truncate", "font-medium"], [1, "flex", "items-center", "text-sm", "opacity-60"], [1, "-ml-1", "text-lg"], [1, "truncate"], [1, "ml-2", "text-xs", "font-medium", "text-success"]], template: function MeetingFlowSpaceMapComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, MeetingFlowSpaceMapComponent_Conditional_0_Template, 6, 6, "div", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "interactive-map", 2);
        \u0275\u0275twoWayListener("zoomChange", function MeetingFlowSpaceMapComponent_Template_interactive_map_zoomChange_2_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.zoom, $event) || (ctx.zoom = $event);
          return $event;
        })("centerChange", function MeetingFlowSpaceMapComponent_Template_interactive_map_centerChange_2_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.center, $event) || (ctx.center = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(3, MeetingFlowSpaceMapComponent_Conditional_3_Template, 19, 8, "div", 3);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.levels()?.length ? 0 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("src", ctx.map_url());
        \u0275\u0275twoWayProperty("zoom", ctx.zoom)("center", ctx.center);
        \u0275\u0275property("styles", ctx.styles())("features", ctx.features())("actions", ctx.actions())("options", \u0275\u0275pureFunction0(9, _c04));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.selected_space() ? 3 : -1);
      }
    }, dependencies: [
      CommonModule,
      InteractiveMapComponent,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      FormsModule,
      NgControlStatus,
      NgModel,
      IconComponent,
      AuthenticatedImageDirective,
      TranslatePipe,
      LevelPipe,
      BuildingPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeetingFlowSpaceMapComponent, [{
    type: Component,
    args: [{ selector: "meeting-flow-space-map", template: `
        @if (levels()?.length) {
            <div
                class="absolute top-2 right-2 left-2 z-10 rounded border border-base-300 bg-base-100 p-2 shadow"
            >
                <mat-form-field appearance="outline" class="no-subscript w-full">
                    <mat-select
                        name="location"
                        [ngModel]="level()"
                        (ngModelChange)="setLevel($event)"
                        [ngModelOptions]="{ standalone: true }"
                        [placeholder]="'COMMON.LEVEL_ANY' | translate"
                    >
                        @for (lvl of levels(); track lvl) {
                            <mat-option [value]="lvl">
                                <div class="flex flex-col-reverse">
                                    @if (use_region()) {
                                        <div class="text-xs opacity-30">
                                            {{
                                                (lvl?.parent_id | building)
                                                    ?.display_name
                                            }}
                                            <span class="opacity-0"> - </span>
                                        </div>
                                    }
                                    <div>{{ lvl.display_name || lvl.name }}</div>
                                </div>
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>
        }
        <div class="absolute inset-0 w-full flex-1">
            <interactive-map
                [src]="map_url()"
                [(zoom)]="zoom"
                [(center)]="center"
                [styles]="styles()"
                [features]="features()"
                [actions]="actions()"
                [options]="{ controls: true }"
            ></interactive-map>
        </div>
        @if (selected_space()) {
            <div
                class="absolute bottom-4 left-4 right-16 z-10 flex items-center rounded-lg border border-success bg-base-100 p-2 shadow-lg"
            >
                <div
                    class="relative mr-2 flex h-12 w-12 min-w-[3rem] items-center justify-center overflow-hidden rounded-lg bg-base-200"
                >
                    <icon
                        class="absolute left-0 top-0 rounded-full bg-base-200 text-success"
                        >task_alt</icon
                    >
                    @if (selected_space().images?.length) {
                        <img
                            auth
                            class="h-full object-cover"
                            [source]="selected_space().images[0]"
                        />
                    } @else {
                        <img
                            class="m-auto max-h-8 max-w-8"
                            src="assets/icons/room-placeholder.svg"
                        />
                    }
                </div>
                <div class="min-w-0 flex-1">
                    <div class="truncate font-medium">
                        {{
                            selected_space().display_name ||
                                selected_space().name ||
                                selected_space().id
                        }}
                    </div>
                    <div class="flex items-center text-sm opacity-60">
                        <icon class="-ml-1 text-lg">place</icon>
                        <p class="truncate">
                            @let lvl = selected_space().zones | level;
                            {{
                                lvl?.display_name || lvl?.name
                            }}
                        </p>
                    </div>
                </div>
                <div class="ml-2 text-xs font-medium text-success">
                    {{ 'COMMON.SELECTED' | translate }}
                </div>
            </div>
        }
    `, imports: [
      CommonModule,
      InteractiveMapComponent,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule,
      IconComponent,
      TranslatePipe,
      LevelPipe,
      BuildingPipe,
      AuthenticatedImageDirective
    ] }]
  }], null, { selected_spaces: [{ type: Input, args: [{ isSignal: true, alias: "selected_spaces", required: false }] }], active: [{ type: Input, args: [{ isSignal: true, alias: "active", required: false }] }], is_displayed: [{ type: Input, args: [{ isSignal: true, alias: "is_displayed", required: false }] }], space_selected: [{ type: Output, args: ["space_selected"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MeetingFlowSpaceMapComponent, { className: "MeetingFlowSpaceMapComponent", filePath: "apps/workplace/src/app/book/meeting-flow-new/meeting-flow-space-map.component.ts", lineNumber: 142 });
})();

// apps/workplace/src/app/book/meeting-flow-new/meeting-flow-space-select.component.ts
var _c05 = () => ({ standalone: true });
var _c15 = () => [];
var _c23 = () => ({ view: 0 });
var _c32 = (a0) => ({ count: a0 });
var _c42 = (a0) => ({ name: a0 });
var _forTrack04 = ($index, $item) => $item.value;
function MeetingFlowSpaceSelectComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275listener("click", function MeetingFlowSpaceSelectComponent_Conditional_12_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filters_open.set(false));
    });
    \u0275\u0275elementEnd();
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_23_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14);
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
function MeetingFlowSpaceSelectComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 11)(1, "mat-select", 45);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function MeetingFlowSpaceSelectComponent_Conditional_23_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setRegion($event));
    });
    \u0275\u0275repeaterCreate(3, MeetingFlowSpaceSelectComponent_Conditional_23_For_4_Template, 2, 2, "mat-option", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.region)("ngModelOptions", \u0275\u0275pureFunction0(5, _c05))("placeholder", \u0275\u0275pipeBind1(2, 3, "COMMON.REGION_ANY"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.regions());
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_24_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14);
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
function MeetingFlowSpaceSelectComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 11)(1, "mat-select", 46);
    \u0275\u0275listener("ngModelChange", function MeetingFlowSpaceSelectComponent_Conditional_24_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setBuilding($event));
    });
    \u0275\u0275repeaterCreate(2, MeetingFlowSpaceSelectComponent_Conditional_24_For_3_Template, 2, 2, "mat-option", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.building())("ngModelOptions", \u0275\u0275pureFunction0(3, _c05))("placeholder", ctx_r1.building()?.display_name || ctx_r1.building()?.name);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.buildings());
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_25_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 50);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lvl_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, lvl_r8?.parent_id)?.display_name, " ");
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_25_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14)(1, "div", 48);
    \u0275\u0275conditionalCreate(2, MeetingFlowSpaceSelectComponent_Conditional_25_For_4_Conditional_2_Template, 5, 3, "div", 49);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lvl_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", lvl_r8.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region() ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", lvl_r8.display_name || lvl_r8.name, " ");
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 11)(1, "mat-select", 47);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function MeetingFlowSpaceSelectComponent_Conditional_25_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ zones: $event }));
    });
    \u0275\u0275repeaterCreate(3, MeetingFlowSpaceSelectComponent_Conditional_25_For_4_Template, 5, 3, "mat-option", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.options()?.zones)("ngModelOptions", \u0275\u0275pureFunction0(6, _c05))("placeholder", \u0275\u0275pipeBind1(2, 4, "COMMON.LEVEL_ANY"))("multiple", true);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.levels());
  }
}
function MeetingFlowSpaceSelectComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r9 = ctx.$implicit;
    \u0275\u0275property("value", opt_r9.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, opt_r9.label), " ");
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "settings-toggle", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formField", ctx_r1.form.all_day);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "COMMON.ALL_DAY"));
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_38_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "duration-field", 53);
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formField", ctx_r1.form.duration)("time", ctx_r1.field("date"))("max", ctx_r1.max_duration())("min", ctx_r1.min_duration())("step", ctx_r1.duration_step())("custom_options", ctx_r1.custom_duration_options())("end_time", ctx_r1.bookable_hours()?.end)("use_24hr", ctx_r1.use_24hr())("timezone", ctx_r1.timezone);
    \u0275\u0275control();
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 51)(4, "time-field", 52);
    \u0275\u0275listener("ngModelChange", function MeetingFlowSpaceSelectComponent_Conditional_38_Template_time_field_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.model.update((m) => __spreadProps(__spreadValues({}, m), { date: $event })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(5, MeetingFlowSpaceSelectComponent_Conditional_38_Conditional_5_Template, 1, 9, "duration-field", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 8, "FORM.TIME"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.field("date"))("ngModelOptions", \u0275\u0275pureFunction0(10, _c05))("disabled", ctx_r1.form.date().disabled())("range", ctx_r1.bookable_hours())("use_24hr", ctx_r1.use_24hr())("timezone", ctx_r1.timezone);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.allow_multiday() ? 5 : -1);
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_39_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 56);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "time-field", 57);
    \u0275\u0275listener("ngModelChange", function MeetingFlowSpaceSelectComponent_Conditional_39_Conditional_4_Template_time_field_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.model.update((m) => __spreadProps(__spreadValues({}, m), { date_end: $event })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 7, "FORM.TIME_END"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.field("date_end"))("ngModelOptions", \u0275\u0275pureFunction0(9, _c05))("from", ctx_r1.field("date"))("range", ctx_r1.bookable_hours())("use_24hr", ctx_r1.use_24hr())("timezone", ctx_r1.timezone);
    \u0275\u0275control();
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 54);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "date-field", 55);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(4, MeetingFlowSpaceSelectComponent_Conditional_39_Conditional_4_Template, 4, 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 5, "FORM.DATE_END"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r1.form.date_end)("from", ctx_r1.field("date"))("to", ctx_r1.end_date());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.field("all_day") ? 4 : -1);
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 58);
    \u0275\u0275listener("ngModelChange", function MeetingFlowSpaceSelectComponent_Conditional_40_Template_settings_toggle_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFilters({ show_fav: $event }));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r1.filters()?.show_fav)("ngModelOptions", \u0275\u0275pureFunction0(5, _c05));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "COMMON.FAVOURITES_ONLY"));
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_41_Conditional_0_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 62);
    \u0275\u0275listener("ngModelChange", function MeetingFlowSpaceSelectComponent_Conditional_41_Conditional_0_For_5_Conditional_0_Template_settings_toggle_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const feat_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleFeature(feat_r14, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const feat_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", ctx_r1.feature_display()[feat_r14] || feat_r14)("ngModel", ctx_r1.filters()?.features?.includes(feat_r14))("ngModelOptions", \u0275\u0275pureFunction0(3, _c05));
    \u0275\u0275control();
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_41_Conditional_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MeetingFlowSpaceSelectComponent_Conditional_41_Conditional_0_For_5_Conditional_0_Template, 1, 4, "settings-toggle", 61);
  }
  if (rf & 2) {
    const feat_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(!ctx_r1.hide_features().includes(feat_r14) ? 0 : -1);
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_41_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 59);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 60);
    \u0275\u0275repeaterCreate(4, MeetingFlowSpaceSelectComponent_Conditional_41_Conditional_0_For_5_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.FACILITIES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.features());
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MeetingFlowSpaceSelectComponent_Conditional_41_Conditional_0_Template, 6, 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.features()?.length ? 0 : -1);
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275listener("click", function MeetingFlowSpaceSelectComponent_Conditional_51_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeAllFeatures());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.FILTERS_CLEAR"), " ");
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const location_r16 = \u0275\u0275readContextLet(50);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", location_r16, " ");
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "date");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const event_r17 = \u0275\u0275readContextLet(46);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, event_r17.date, ctx_r1.time_format), " \u2014 ", \u0275\u0275pipeBind2(2, 5, event_r17.date_end, ctx_r1.time_format), " ");
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "COMMON.ALL_DAY"), " ");
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "COMMON.CAPACITY_ANY"), " ");
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const capacity_r18 = \u0275\u0275readContextLet(45);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "CALENDAR_EVENT.SPACE_SELECT_SIZE_X", \u0275\u0275pureFunction1(4, _c32, capacity_r18)), " ");
  }
}
function MeetingFlowSpaceSelectComponent_For_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "p", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 65);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("click", function MeetingFlowSpaceSelectComponent_For_63_Template_button_click_3_listener() {
      const feat_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeFeature(feat_r20));
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feat_r20 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feat_r20);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(4, 2, "CALENDAR_EVENT.FILTER_REMOVE", \u0275\u0275pureFunction1(5, _c42, feat_r20)));
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "icon", 66);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "CALENDAR_EVENT.SELECTED_ROOM_UNAVAILABLE"), " ");
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "meeting-flow-space-map", 67);
    \u0275\u0275listener("space_selected", function MeetingFlowSpaceSelectComponent_Conditional_79_Template_meeting_flow_space_map_space_selected_0_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSpace($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("selected_spaces", ctx_r1.selected());
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "meeting-flow-space-list", 67);
    \u0275\u0275listener("space_selected", function MeetingFlowSpaceSelectComponent_Conditional_80_Template_meeting_flow_space_list_space_selected_0_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSpace($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("selected_spaces", ctx_r1.selected());
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_94_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reg_r24 = ctx.$implicit;
    \u0275\u0275property("value", reg_r24);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reg_r24.display_name || reg_r24.name, " ");
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 11)(1, "mat-select", 45);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function MeetingFlowSpaceSelectComponent_Conditional_94_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setRegion($event));
    });
    \u0275\u0275repeaterCreate(3, MeetingFlowSpaceSelectComponent_Conditional_94_For_4_Template, 2, 2, "mat-option", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.region)("ngModelOptions", \u0275\u0275pureFunction0(5, _c05))("placeholder", \u0275\u0275pipeBind1(2, 3, "COMMON.REGION_ANY"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.regions());
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_95_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r26 = ctx.$implicit;
    \u0275\u0275property("value", bld_r26);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r26.display_name || bld_r26.name, " ");
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_95_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 11)(1, "mat-select", 46);
    \u0275\u0275listener("ngModelChange", function MeetingFlowSpaceSelectComponent_Conditional_95_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setBuilding($event));
    });
    \u0275\u0275repeaterCreate(2, MeetingFlowSpaceSelectComponent_Conditional_95_For_3_Template, 2, 2, "mat-option", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.building())("ngModelOptions", \u0275\u0275pureFunction0(3, _c05))("placeholder", ctx_r1.building()?.display_name || ctx_r1.building()?.name);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.buildings());
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_96_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 50);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lvl_r28 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, lvl_r28?.parent_id)?.display_name, " ");
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_96_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14)(1, "div", 48);
    \u0275\u0275conditionalCreate(2, MeetingFlowSpaceSelectComponent_Conditional_96_For_4_Conditional_2_Template, 5, 3, "div", 49);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lvl_r28 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", lvl_r28.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region() ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", lvl_r28.display_name || lvl_r28.name, " ");
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 11)(1, "mat-select", 68);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function MeetingFlowSpaceSelectComponent_Conditional_96_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ zones: $event }));
    });
    \u0275\u0275repeaterCreate(3, MeetingFlowSpaceSelectComponent_Conditional_96_For_4_Template, 5, 3, "mat-option", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.options()?.zones)("ngModelOptions", \u0275\u0275pureFunction0(6, _c05))("placeholder", \u0275\u0275pipeBind1(2, 4, "COMMON.LEVEL_ANY"))("multiple", true);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.levels());
  }
}
function MeetingFlowSpaceSelectComponent_For_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r29 = ctx.$implicit;
    \u0275\u0275property("value", opt_r29.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, opt_r29.label), " ");
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "settings-toggle", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formField", ctx_r1.form.all_day);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "COMMON.ALL_DAY"));
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_109_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "duration-field", 53);
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formField", ctx_r1.form.duration)("time", ctx_r1.field("date"))("max", ctx_r1.max_duration())("min", ctx_r1.min_duration())("step", ctx_r1.duration_step())("custom_options", ctx_r1.custom_duration_options())("end_time", ctx_r1.bookable_hours()?.end)("use_24hr", ctx_r1.use_24hr())("timezone", ctx_r1.timezone);
    \u0275\u0275control();
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_109_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 51)(4, "time-field", 52);
    \u0275\u0275listener("ngModelChange", function MeetingFlowSpaceSelectComponent_Conditional_109_Template_time_field_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.model.update((m) => __spreadProps(__spreadValues({}, m), { date: $event })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(5, MeetingFlowSpaceSelectComponent_Conditional_109_Conditional_5_Template, 1, 9, "duration-field", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 8, "FORM.TIME"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.field("date"))("ngModelOptions", \u0275\u0275pureFunction0(10, _c05))("disabled", ctx_r1.form.date().disabled())("range", ctx_r1.bookable_hours())("use_24hr", ctx_r1.use_24hr())("timezone", ctx_r1.timezone);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.allow_multiday() ? 5 : -1);
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_110_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 56);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "time-field", 57);
    \u0275\u0275listener("ngModelChange", function MeetingFlowSpaceSelectComponent_Conditional_110_Conditional_4_Template_time_field_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.model.update((m) => __spreadProps(__spreadValues({}, m), { date_end: $event })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 7, "FORM.TIME_END"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.field("date_end"))("ngModelOptions", \u0275\u0275pureFunction0(9, _c05))("from", ctx_r1.field("date"))("range", ctx_r1.bookable_hours())("use_24hr", ctx_r1.use_24hr())("timezone", ctx_r1.timezone);
    \u0275\u0275control();
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 54);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "date-field", 55);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(4, MeetingFlowSpaceSelectComponent_Conditional_110_Conditional_4_Template, 4, 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 5, "FORM.DATE_END"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r1.form.date_end)("from", ctx_r1.field("date"))("to", ctx_r1.end_date());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.field("all_day") ? 4 : -1);
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_111_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 58);
    \u0275\u0275listener("ngModelChange", function MeetingFlowSpaceSelectComponent_Conditional_111_Template_settings_toggle_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFilters({ show_fav: $event }));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r1.filters()?.show_fav)("ngModelOptions", \u0275\u0275pureFunction0(5, _c05));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "COMMON.FAVOURITES_ONLY"));
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_112_Conditional_0_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 62);
    \u0275\u0275listener("ngModelChange", function MeetingFlowSpaceSelectComponent_Conditional_112_Conditional_0_For_5_Conditional_0_Template_settings_toggle_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r33);
      const feat_r34 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleFeature(feat_r34, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const feat_r34 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", ctx_r1.feature_display()[feat_r34] || feat_r34)("ngModel", ctx_r1.filters()?.features?.includes(feat_r34))("ngModelOptions", \u0275\u0275pureFunction0(3, _c05));
    \u0275\u0275control();
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_112_Conditional_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MeetingFlowSpaceSelectComponent_Conditional_112_Conditional_0_For_5_Conditional_0_Template, 1, 4, "settings-toggle", 61);
  }
  if (rf & 2) {
    const feat_r34 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(!ctx_r1.hide_features().includes(feat_r34) ? 0 : -1);
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_112_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 59);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 60);
    \u0275\u0275repeaterCreate(4, MeetingFlowSpaceSelectComponent_Conditional_112_Conditional_0_For_5_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.FACILITIES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.features());
  }
}
function MeetingFlowSpaceSelectComponent_Conditional_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MeetingFlowSpaceSelectComponent_Conditional_112_Conditional_0_Template, 6, 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.features()?.length ? 0 : -1);
  }
}
var MeetingFlowSpaceSelectComponent = class _MeetingFlowSpaceSelectComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._event_form = inject(EventFormService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._spaces = inject(SpacesService);
    this.prev = output();
    this.next = output();
    this.use_24hr = settingSignal("use_24_hour_time", false);
    this.use_region = settingSignal("use_region", false);
    this.min_duration = settingSignal("events.min_duration", 30);
    this.max_duration = settingSignal("events.max_duration", 8 * 60);
    this.duration_step = settingSignal("events.duration_step", 15);
    this.custom_duration_options = settingSignal("events.custom_duration_options", []);
    this.allow_all_day = settingSignal("events.allow_all_day", false);
    this.feature_display = settingSignal("events.feature_decriptions", {});
    this.hide_features = settingSignal("events.hide_features", []);
    this.view = signal(
      "list",
      ...ngDevMode ? [{ debugName: "view" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filters_open = signal(
      false,
      ...ngDevMode ? [{ debugName: "filters_open" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.allowed_future_days = settingSignal("events.allowed_future_days", 180);
    this.end_date = computed(
      () => endOfDay(addDays(Date.now(), this.allowed_future_days())).valueOf(),
      ...ngDevMode ? [{ debugName: "end_date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.bookable_hours = settingSignal("events.bookable_hours", void 0);
    this._allow_multiday = settingSignal("events.allow_multiday", false);
    this.allow_multiday = computed(
      () => this._allow_multiday() || this._event_form.is_multiday,
      ...ngDevMode ? [{ debugName: "allow_multiday" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.capacity_options = ROOM_CAPACITY_OPTIONS;
    this.form_value = this._event_form.model;
    this.selected = computed(
      () => {
        const resources = this.form_value().resources || [];
        return resources.map(({ id }) => id);
      },
      ...ngDevMode ? [{ debugName: "selected" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_space = computed(
      () => !!this.form_value()?.resources && this.form_value()?.resources.length > 0,
      ...ngDevMode ? [{ debugName: "has_space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.unavailable_selection = this._event_form.unavailable_resources;
    this.options = this._event_form.options;
    this.filters = this._event_form.filters;
    this.building = this._org.active_building;
    this.buildings = this._org.active_buildings;
    this.region = this._org.active_region;
    this.regions = this._org.region_list;
    this.setBuilding = (bld) => this._org.building = bld;
    this.setRegion = (region) => this._org.region = region;
    this.setOptions = (o) => this._event_form.setOptions(o);
    this.setFilters = (f) => this._event_form.setFilters(f);
    this.setCapacity = (capacity) => this._event_form.setFilters(roomCapacityFilters(capacity));
    this.loading = this._event_form.loading;
    this.room_alerts = this._event_form.room_alerts;
    this.active = signal(
      "",
      ...ngDevMode ? [{ debugName: "active" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.bookable_spaces = this._event_form.spaces;
    this.levels = computed(
      () => {
        const region = this._org.active_region();
        const bld = this._org.active_building();
        const spaces = this._event_form.spaces();
        const level_list = this.use_region() ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld);
        const level_ids = new Set(flatten(spaces.map((space) => space.zones || [])));
        const viewable_levels = level_list.filter((lvl) => !lvl.tags.includes("parking") && level_ids.has(lvl.id));
        return viewable_levels.sort((a, b) => a.parent_id.localeCompare(b.parent_id) || (a.name || "").localeCompare(b.name || "") || (a.display_name || "").localeCompare(b.display_name || ""));
      },
      ...ngDevMode ? [{ debugName: "levels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.features = computed(
      () => {
        const features = this._spaces.features();
        const spaces = this._event_form.available_spaces();
        return unique(features.concat(flatten(spaces.map((_) => _.features))));
      },
      ...ngDevMode ? [{ debugName: "features" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  get form() {
    return this._event_form.form;
  }
  get model() {
    return this._event_form.model;
  }
  get timezone() {
    return this._settings.get("app.events.use_building_timezone") ? this._org.building.timezone : "";
  }
  get time_format() {
    return this.use_24hr() ? "HH:mm" : "h:mm a";
  }
  field(name) {
    return this.model()?.[name];
  }
  async toggleFeature(feat, state) {
    const { features } = this._event_form.filters();
    const new_list = (features || []).filter((_) => feat !== _);
    if (state)
      new_list.push(feat);
    this._event_form.setFilters({ features: new_list });
  }
  removeFeature(feat) {
    const { features } = this._event_form.filters();
    const new_list = (features || []).filter((_) => feat !== _);
    this._event_form.setFilters({ features: new_list });
  }
  removeAllFeatures() {
    this._event_form.setFilters({ features: [] });
  }
  setMapView() {
    this.view.set("map");
    const level_list = this.use_region() ? this._org.levelsForRegion(this._org.region) : this._org.levelsForBuilding(this._org.building);
    const level_ids = new Set(flatten(this.bookable_spaces().map((space) => space.zones || [])));
    const viewable_levels = level_list.filter((lvl) => !lvl.tags.includes("parking") && level_ids.has(lvl.id));
    if (viewable_levels.length) {
      const current_zones = this._event_form.options()?.zones || [];
      const current_zone_valid = current_zones.some((zone) => viewable_levels.some((lvl) => lvl.id === zone));
      if (current_zone_valid) {
        const valid_zone = current_zones.find((zone) => viewable_levels.some((lvl) => lvl.id === zone));
        this.setOptions({ zones: [valid_zone] });
      } else {
        const first_level = viewable_levels.sort((a, b) => a.parent_id.localeCompare(b.parent_id) || (a.display_name || "").localeCompare(b.display_name || ""))[0];
        this.setOptions({ zones: [first_level.id] });
      }
    }
  }
  toggleSpace(space) {
    const resources = this.field("resources") || [];
    if (multipleSpacesEnabled(this._settings)) {
      const new_resources = resources.find(({ id }) => id === space.id) ? resources.filter(({ id }) => id !== space.id) : [...resources, space];
      this.model.update((m) => __spreadProps(__spreadValues({}, m), { resources: new_resources }));
    } else {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), { resources: [space] }));
      this.filters_open.set(false);
    }
  }
  continue() {
    if (!this.has_space()) {
      notifyError(i18n("CALENDAR_EVENT.ERROR_ROOM_REQUIRED"));
      return;
    }
    if (this.unavailable_selection().length)
      return;
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: { view: 2 },
      queryParamsHandling: "merge"
    });
  }
  static {
    this.\u0275fac = function MeetingFlowSpaceSelectComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MeetingFlowSpaceSelectComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MeetingFlowSpaceSelectComponent, selectors: [["meeting-flow-space-select"]], outputs: { prev: "prev", next: "next" }, decls: 121, vars: 113, consts: [[1, "border-base-300", "bg-base-100", "relative", "w-full", "overflow-hidden", "rounded-lg", "border"], [1, "gradient", "border-base-content", "relative", "flex", "items-center", "justify-between", "space-x-2", "border-l-8", "px-4", "py-3", "text-xl", "font-medium"], [1, "flex", "items-center", "space-x-2"], ["icon", "", "matRipple", "", 1, "sm:hidden", 3, "click"], [1, "fixed", "inset-0", "z-20", "bg-black/50", "sm:hidden"], [1, "relative", "flex", "w-full", "overflow-hidden", "p-2", "sm:space-x-2"], [1, "hidden", "sm:sticky", "sm:top-0", "sm:block", "sm:w-[20rem]", "sm:max-w-[20rem]"], [1, "flex", "w-full", "items-center", "justify-between", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["cdkScrollable", "", 1, "flex", "flex-col", "overflow-y-auto", "p-4"], ["for", "location"], ["appearance", "outline", 1, "w-full"], ["for", "capacity"], ["name", "capacity", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], ["for", "date"], [3, "formField", "to"], [1, "mb-2", 3, "formField"], [1, "mb-4", 3, "ngModel", "ngModelOptions"], [1, "flex", "min-w-0", "flex-1", "flex-col"], [1, "mb-2", "flex", "space-x-2"], ["filters", "", 1, "border-base-300", "bg-base-100", "flex", "flex-1", "flex-wrap", "rounded-lg", "border", "p-2"], ["btn", "", "matRipple", "", "name", "clear-space-filters", 1, "mr-2", "mb-2", "min-h-8"], ["filter-item", "", "zone", ""], ["filter-item", "", "date", ""], ["filter-item", "", "time", ""], ["filter-item", "", "count", ""], ["filter-item", ""], [1, "space-y-2"], ["btn", "", "matRipple", "", 1, "w-full", "space-x-2", 3, "click"], [1, "text-2xl"], [1, "pr-2"], [1, "border-base-300", "bg-base-200", "relative", "flex", "flex-col", "overflow-hidden", "rounded-lg", "border", "p-2"], ["unavailable-warning", "", "role", "alert", 1, "bg-warning", "text-warning-content", "mb-2", "flex", "items-center", "space-x-2", "rounded-lg", "p-2", "text-sm"], [3, "selected_spaces"], [1, "filters-panel-mobile", "border-base-300", "bg-base-100", "fixed", "right-0", "bottom-0", "left-0", "z-30", "w-full", "border-t", "shadow-lg", "transition-transform", "duration-300", "sm:hidden"], [1, "border-base-300", "flex", "w-full", "items-center", "justify-between", "border-b", "p-2"], ["icon", "", "matRipple", "", 3, "click"], ["cdkScrollable", "", 1, "flex", "max-h-[60vh]", "flex-col", "overflow-y-auto", "p-4"], ["name", "capacity-mobile", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "h-4"], [1, "border-base-300", "bg-base-100", "sticky", "bottom-0", "z-10", "flex", "justify-between", "rounded-t-xl", "border-x", "border-t", "p-3", "sm:z-40"], ["btn", "", "matRipple", "", 1, "inverse", "w-40", "cursor-pointer", 3, "routerLink", "queryParams"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click", "disabled"], [1, "fixed", "inset-0", "z-20", "bg-black/50", "sm:hidden", 3, "click"], ["name", "region", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], ["name", "building", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], ["name", "location-multi", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder", "multiple"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], [1, "flex", "space-x-2"], [1, "flex-1", 3, "ngModelChange", "ngModel", "ngModelOptions", "disabled", "range", "use_24hr", "timezone"], [1, "w-1/3", "flex-1", 3, "formField", "time", "max", "min", "step", "custom_options", "end_time", "use_24hr", "timezone"], ["for", "date-end"], [3, "formField", "from", "to"], ["for", "end-time"], [3, "ngModelChange", "ngModel", "ngModelOptions", "from", "range", "use_24hr", "timezone"], [1, "mb-4", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "text-lg", "font-medium"], [1, "mb-4", "flex", "flex-col", "space-y-2"], [1, "w-full", 3, "label", "ngModel", "ngModelOptions"], [1, "w-full", 3, "ngModelChange", "label", "ngModel", "ngModelOptions"], ["btn", "", "matRipple", "", "name", "clear-space-filters", 1, "mr-2", "mb-2", "min-h-8", 3, "click"], [1, "truncate"], ["icon", "", "matRipple", "", "name", "remove-space-filter", 1, "-mr-4", 3, "click"], [1, "text-xl"], [3, "space_selected", "selected_spaces"], ["name", "location-multi-mobile", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder", "multiple"]], template: function MeetingFlowSpaceSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "icon");
        \u0275\u0275text(4, "info");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div");
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "button", 3);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275listener("click", function MeetingFlowSpaceSelectComponent_Template_button_click_8_listener() {
          return ctx.filters_open.set(!ctx.filters_open());
        });
        \u0275\u0275elementStart(10, "icon");
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(12, MeetingFlowSpaceSelectComponent_Conditional_12_Template, 1, 0, "div", 4);
        \u0275\u0275elementStart(13, "div", 5)(14, "div", 6)(15, "div", 7)(16, "h3", 8);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 9)(20, "label", 10);
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(23, MeetingFlowSpaceSelectComponent_Conditional_23_Template, 5, 6, "mat-form-field", 11);
        \u0275\u0275conditionalCreate(24, MeetingFlowSpaceSelectComponent_Conditional_24_Template, 4, 4, "mat-form-field", 11);
        \u0275\u0275conditionalCreate(25, MeetingFlowSpaceSelectComponent_Conditional_25_Template, 5, 7, "mat-form-field", 11);
        \u0275\u0275elementStart(26, "label", 12);
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "mat-form-field", 11)(30, "mat-select", 13);
        \u0275\u0275listener("ngModelChange", function MeetingFlowSpaceSelectComponent_Template_mat_select_ngModelChange_30_listener($event) {
          return ctx.setCapacity($event);
        });
        \u0275\u0275repeaterCreate(31, MeetingFlowSpaceSelectComponent_For_32_Template, 3, 4, "mat-option", 14, _forTrack04);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "label", 15);
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(36, "date-field", 16);
        \u0275\u0275controlCreate();
        \u0275\u0275conditionalCreate(37, MeetingFlowSpaceSelectComponent_Conditional_37_Template, 3, 4, "settings-toggle", 17);
        \u0275\u0275conditionalCreate(38, MeetingFlowSpaceSelectComponent_Conditional_38_Template, 6, 11);
        \u0275\u0275conditionalCreate(39, MeetingFlowSpaceSelectComponent_Conditional_39_Template, 5, 7);
        \u0275\u0275conditionalCreate(40, MeetingFlowSpaceSelectComponent_Conditional_40_Template, 3, 6, "settings-toggle", 18);
        \u0275\u0275conditionalCreate(41, MeetingFlowSpaceSelectComponent_Conditional_41_Template, 1, 1);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 19)(43, "div", 20)(44, "div", 21);
        \u0275\u0275declareLet(45)(46)(47);
        \u0275\u0275pipe(48, "level");
        \u0275\u0275pipe(49, "building");
        \u0275\u0275declareLet(50);
        \u0275\u0275conditionalCreate(51, MeetingFlowSpaceSelectComponent_Conditional_51_Template, 3, 3, "button", 22);
        \u0275\u0275conditionalCreate(52, MeetingFlowSpaceSelectComponent_Conditional_52_Template, 2, 1, "div", 23);
        \u0275\u0275elementStart(53, "div", 24);
        \u0275\u0275text(54);
        \u0275\u0275pipe(55, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "div", 25);
        \u0275\u0275conditionalCreate(57, MeetingFlowSpaceSelectComponent_Conditional_57_Template, 3, 8);
        \u0275\u0275conditionalCreate(58, MeetingFlowSpaceSelectComponent_Conditional_58_Template, 2, 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "div", 26);
        \u0275\u0275conditionalCreate(60, MeetingFlowSpaceSelectComponent_Conditional_60_Template, 2, 3)(61, MeetingFlowSpaceSelectComponent_Conditional_61_Template, 2, 6);
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(62, MeetingFlowSpaceSelectComponent_For_63_Template, 7, 7, "div", 27, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "div", 28)(65, "button", 29);
        \u0275\u0275listener("click", function MeetingFlowSpaceSelectComponent_Template_button_click_65_listener() {
          return ctx.view.set("list");
        });
        \u0275\u0275elementStart(66, "icon", 30);
        \u0275\u0275text(67, "list");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "div", 31);
        \u0275\u0275text(69);
        \u0275\u0275pipe(70, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(71, "button", 29);
        \u0275\u0275listener("click", function MeetingFlowSpaceSelectComponent_Template_button_click_71_listener() {
          return ctx.setMapView();
        });
        \u0275\u0275elementStart(72, "icon", 30);
        \u0275\u0275text(73, "map");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "div", 31);
        \u0275\u0275text(75);
        \u0275\u0275pipe(76, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(77, "div", 32);
        \u0275\u0275conditionalCreate(78, MeetingFlowSpaceSelectComponent_Conditional_78_Template, 6, 3, "div", 33);
        \u0275\u0275conditionalCreate(79, MeetingFlowSpaceSelectComponent_Conditional_79_Template, 1, 1, "meeting-flow-space-map", 34)(80, MeetingFlowSpaceSelectComponent_Conditional_80_Template, 1, 1, "meeting-flow-space-list", 34);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(81, "div", 35)(82, "div", 36)(83, "h3", 8);
        \u0275\u0275text(84);
        \u0275\u0275pipe(85, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "button", 37);
        \u0275\u0275pipe(87, "translate");
        \u0275\u0275listener("click", function MeetingFlowSpaceSelectComponent_Template_button_click_86_listener() {
          return ctx.filters_open.set(false);
        });
        \u0275\u0275elementStart(88, "icon");
        \u0275\u0275text(89, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(90, "div", 38)(91, "label", 10);
        \u0275\u0275text(92);
        \u0275\u0275pipe(93, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(94, MeetingFlowSpaceSelectComponent_Conditional_94_Template, 5, 6, "mat-form-field", 11);
        \u0275\u0275conditionalCreate(95, MeetingFlowSpaceSelectComponent_Conditional_95_Template, 4, 4, "mat-form-field", 11);
        \u0275\u0275conditionalCreate(96, MeetingFlowSpaceSelectComponent_Conditional_96_Template, 5, 7, "mat-form-field", 11);
        \u0275\u0275elementStart(97, "label", 12);
        \u0275\u0275text(98);
        \u0275\u0275pipe(99, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "mat-form-field", 11)(101, "mat-select", 39);
        \u0275\u0275listener("ngModelChange", function MeetingFlowSpaceSelectComponent_Template_mat_select_ngModelChange_101_listener($event) {
          return ctx.setCapacity($event);
        });
        \u0275\u0275repeaterCreate(102, MeetingFlowSpaceSelectComponent_For_103_Template, 3, 4, "mat-option", 14, _forTrack04);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "label", 15);
        \u0275\u0275text(105);
        \u0275\u0275pipe(106, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(107, "date-field", 16);
        \u0275\u0275controlCreate();
        \u0275\u0275conditionalCreate(108, MeetingFlowSpaceSelectComponent_Conditional_108_Template, 3, 4, "settings-toggle", 17);
        \u0275\u0275conditionalCreate(109, MeetingFlowSpaceSelectComponent_Conditional_109_Template, 6, 11);
        \u0275\u0275conditionalCreate(110, MeetingFlowSpaceSelectComponent_Conditional_110_Template, 5, 7);
        \u0275\u0275conditionalCreate(111, MeetingFlowSpaceSelectComponent_Conditional_111_Template, 3, 6, "settings-toggle", 18);
        \u0275\u0275conditionalCreate(112, MeetingFlowSpaceSelectComponent_Conditional_112_Template, 1, 1);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(113, "div", 40);
        \u0275\u0275elementStart(114, "div", 41)(115, "a", 42);
        \u0275\u0275text(116);
        \u0275\u0275pipe(117, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "button", 43);
        \u0275\u0275listener("click", function MeetingFlowSpaceSelectComponent_Template_button_click_118_listener() {
          return ctx.continue();
        });
        \u0275\u0275text(119);
        \u0275\u0275pipe(120, "translate");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 67, "CALENDAR_EVENT.SELECT_ROOM_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(9, 69, "COMMON.FILTERS"))("aria-expanded", ctx.filters_open());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.filters_open() ? "close" : "filter_list");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.filters_open() ? 12 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 71, "COMMON.FILTERS"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 73, "COMMON.LOCATION"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.use_region() && ctx.regions()?.length ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.use_region() && ctx.buildings()?.length > 1 ? 24 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.view() === "list" ? 25 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 75, "COMMON.CAPACITY"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.filters()?.capacity ?? -1)("ngModelOptions", \u0275\u0275pureFunction0(107, _c05));
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.capacity_options);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 77, "FORM.DATE"));
        \u0275\u0275advance(2);
        \u0275\u0275property("formField", ctx.form.date)("to", ctx.end_date());
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.allow_all_day() ? 37 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.field("all_day") ? 38 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.allow_multiday() ? 39 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.view() === "list" ? 40 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.view() === "list" ? 41 : -1);
        const feature_list_r35 = ctx.filters()?.features || \u0275\u0275pureFunction0(108, _c15);
        const zones_r36 = ctx.options()?.zones || \u0275\u0275pureFunction0(109, _c15);
        \u0275\u0275advance(4);
        const capacity_r37 = \u0275\u0275storeLet(ctx.filters()?.capacity || -1);
        \u0275\u0275advance();
        const event_r38 = \u0275\u0275storeLet(ctx.model());
        const zone_r39 = \u0275\u0275pipeBind1(48, 81, zones_r36) || \u0275\u0275pipeBind1(49, 83, zones_r36);
        \u0275\u0275advance(4);
        const location_r40 = \u0275\u0275storeLet(zone_r39?.display_name || zone_r39?.name || "");
        \u0275\u0275advance();
        \u0275\u0275conditional(feature_list_r35.length > 1 ? 51 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(location_r40 ? 52 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(55, 86, event_r38.date, "mediumDate"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!event_r38.all_day ? 57 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(event_r38.all_day ? 58 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(capacity_r37 < 0 ? 60 : 61);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(feature_list_r35);
        \u0275\u0275advance(3);
        \u0275\u0275classProp("inverse", ctx.view() !== "list");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(70, 89, "COMMON.LIST"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("inverse", ctx.view() !== "map");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(76, 91, "COMMON.MAP"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("flex-1", ctx.view() !== "map")("h-[600px]", ctx.view() === "map")("min-h-[600px]", ctx.view() === "map");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.unavailable_selection().length ? 78 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.view() === "map" ? 79 : 80);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("translate-y-full", !ctx.filters_open())("translate-y-0", ctx.filters_open());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(85, 93, "COMMON.FILTERS"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(87, 95, "COMMON.CLOSE"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(93, 97, "COMMON.LOCATION"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.use_region() && ctx.regions()?.length ? 94 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.use_region() && ctx.buildings()?.length > 1 ? 95 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.view() === "list" ? 96 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(99, 99, "COMMON.CAPACITY"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.filters()?.capacity ?? -1)("ngModelOptions", \u0275\u0275pureFunction0(110, _c05));
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.capacity_options);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(106, 101, "FORM.DATE"));
        \u0275\u0275advance(2);
        \u0275\u0275property("formField", ctx.form.date)("to", ctx.end_date());
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.allow_all_day() ? 108 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.field("all_day") ? 109 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.allow_multiday() ? 110 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.view() === "list" ? 111 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.view() === "list" ? 112 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(111, _c15))("queryParams", \u0275\u0275pureFunction0(112, _c23));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(117, 103, "COMMON.BACK"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.unavailable_selection().length > 0);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(120, 105, "COMMON.CONTINUE"), " ");
      }
    }, dependencies: [
      CdkScrollable,
      CommonModule,
      MatRippleModule,
      MatRipple,
      IconComponent,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      DateFieldComponent,
      TimeFieldComponent,
      DurationFieldComponent,
      FormsModule,
      NgControlStatus,
      NgModel,
      FormField,
      SettingsToggleComponent,
      MeetingFlowSpaceListComponent,
      MeetingFlowSpaceMapComponent,
      RouterModule,
      RouterLink,
      DatePipe,
      TranslatePipe,
      BuildingPipe,
      LevelPipe
    ], styles: ["\n.gradient[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      105deg,\n      var(--%NS%base-200) 0%,\n      var(--%NS%base-200) 50%,\n      var(--%NS%base-100) 100%);\n}\n.filters-panel-mobile[_ngcontent-%COMP%] {\n  border-radius: 1rem 1rem 0 0;\n  max-height: 70vh;\n}\n[filter-item][_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  min-height: 2rem;\n  height: 2rem;\n  font-size: 0.875rem;\n  border: 1px solid var(--%NS%base-300);\n  border-radius: 1.25rem;\n  margin: 0.25rem;\n  max-width: 100%;\n  text-align: center;\n}\n[filter-item][_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n[filter-item][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=meeting-flow-space-select.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeetingFlowSpaceSelectComponent, [{
    type: Component,
    args: [{ selector: "meeting-flow-space-select", template: `
        <div
            class="border-base-300 bg-base-100 relative w-full overflow-hidden rounded-lg border"
        >
            <div
                class="gradient border-base-content relative flex items-center justify-between space-x-2 border-l-8 px-4 py-3 text-xl font-medium"
            >
                <div class="flex items-center space-x-2">
                    <icon>info</icon>
                    <div>
                        {{ 'CALENDAR_EVENT.SELECT_ROOM_HEADER' | translate }}
                    </div>
                </div>
                <button
                    icon
                    matRipple
                    class="sm:hidden"
                    [attr.aria-label]="'COMMON.FILTERS' | translate"
                    [attr.aria-expanded]="filters_open()"
                    (click)="filters_open.set(!filters_open())"
                >
                    <icon>{{ filters_open() ? 'close' : 'filter_list' }}</icon>
                </button>
            </div>
            <!-- Mobile backdrop -->
            @if (filters_open()) {
                <div
                    class="fixed inset-0 z-20 bg-black/50 sm:hidden"
                    (click)="filters_open.set(false)"
                ></div>
            }
            <div
                class="relative flex w-full overflow-hidden p-2 sm:space-x-2"
            >
                <!-- Filters Sidebar - Desktop -->
                <div
                    class="hidden sm:sticky sm:top-0 sm:block sm:w-[20rem] sm:max-w-[20rem]"
                >
                    <div class="flex w-full items-center justify-between p-2">
                        <h3 class="px-2 text-xl font-medium">
                            {{ 'COMMON.FILTERS' | translate }}
                        </h3>
                    </div>
                    <div cdkScrollable class="flex flex-col overflow-y-auto p-4">
                        <label for="location">{{
                            'COMMON.LOCATION' | translate
                        }}</label>
                        @if (use_region() && regions()?.length) {
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    name="region"
                                    [ngModel]="region"
                                    (ngModelChange)="setRegion($event)"
                                    [ngModelOptions]="{ standalone: true }"
                                    [placeholder]="
                                        'COMMON.REGION_ANY'
                                            | translate
                                    "
                                >
                                    @for (reg of regions(); track reg) {
                                        <mat-option [value]="reg">
                                            {{ reg.display_name || reg.name }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                        @if (!use_region() && (buildings())?.length > 1) {
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    name="building"
                                    [ngModel]="building()"
                                    (ngModelChange)="setBuilding($event)"
                                    [ngModelOptions]="{ standalone: true }"
                                    [placeholder]="
                                        (building())?.display_name ||
                                        (building())?.name
                                    "
                                >
                                    @for (bld of buildings(); track bld) {
                                        <mat-option [value]="bld">
                                            {{ bld.display_name || bld.name }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                        @if (view() === 'list') {
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    name="location-multi"
                                    [ngModel]="options()?.zones"
                                    (ngModelChange)="
                                        setOptions({ zones: $event })
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                    [placeholder]="
                                        'COMMON.LEVEL_ANY' | translate
                                    "
                                    [multiple]="true"
                                >
                                    @for (lvl of levels(); track lvl) {
                                        <mat-option [value]="lvl.id">
                                            <div class="flex flex-col-reverse">
                                                @if (use_region()) {
                                                    <div
                                                        class="text-xs opacity-30"
                                                    >
                                                        {{
                                                            (
                                                                lvl?.parent_id
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
                        <label for="capacity">{{
                            'COMMON.CAPACITY' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="capacity"
                                [ngModel]="filters()?.capacity ?? -1"
                                (ngModelChange)="setCapacity($event)"
                                [ngModelOptions]="{ standalone: true }"
                            >
                                @for (opt of capacity_options; track opt.value) {
                                    <mat-option [value]="opt.value">
                                        {{ opt.label | translate }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                        <label for="date">{{ 'FORM.DATE' | translate }}</label>
                        <date-field [formField]="form.date" [to]="end_date()" />
                        @if (allow_all_day()) {
                            <settings-toggle
                                class="mb-2"
                                [formField]="form.all_day"
                                >{{
                                    'COMMON.ALL_DAY' | translate
                                }}</settings-toggle
                            >
                        }
                        @if (!field('all_day')) {
                            <label for="date">{{
                                'FORM.TIME' | translate
                            }}</label>
                            <div class="flex space-x-2">
                                <time-field
                                    class="flex-1"
                                    [ngModel]="field('date')"
                                    (ngModelChange)="
                                        model.update((m) => ({ ...m, date: $event }))
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                    [disabled]="form.date().disabled()"
                                    [range]="bookable_hours()"
                                    [use_24hr]="use_24hr()"
                                    [timezone]="timezone"
                                />
                                @if (!allow_multiday()) {
                                    <duration-field
                                        class="w-1/3 flex-1"
                                        [formField]="form.duration"
                                        [time]="field('date')"
                                        [max]="max_duration()"
                                        [min]="min_duration()"
                                        [step]="duration_step()"
                                        [custom_options]="
                                            custom_duration_options()
                                        "
                                        [end_time]="bookable_hours()?.end"
                                        [use_24hr]="use_24hr()"
                                        [timezone]="timezone"
                                    />
                                }
                            </div>
                        }
                        @if (allow_multiday()) {
                            <label for="date-end">{{
                                'FORM.DATE_END' | translate
                            }}</label>
                            <date-field
                                [formField]="form.date_end"
                                [from]="field('date')"
                                [to]="end_date()"
                            />
                            @if (!field('all_day')) {
                                <label for="end-time">{{
                                    'FORM.TIME_END' | translate
                                }}</label>
                                <time-field
                                    [ngModel]="field('date_end')"
                                    (ngModelChange)="
                                        model.update((m) => ({
                                            ...m,
                                            date_end: $event,
                                        }))
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                    [from]="field('date')"
                                    [range]="bookable_hours()"
                                    [use_24hr]="use_24hr()"
                                    [timezone]="timezone"
                                />
                            }
                        }
                        @if (view() === 'list') {
                            <settings-toggle
                                class="mb-4"
                                [ngModel]="filters()?.show_fav"
                                (ngModelChange)="setFilters({ show_fav: $event })"
                                [ngModelOptions]="{ standalone: true }"
                                >{{
                                    'COMMON.FAVOURITES_ONLY' | translate
                                }}</settings-toggle
                            >
                        }
                        @if (view() === 'list') {
                            @if (features()?.length) {
                                <h2 class="text-lg font-medium">
                                    {{ 'CALENDAR_EVENT.FACILITIES' | translate }}
                                </h2>
                                <div class="mb-4 flex flex-col space-y-2">
                                    @for (feat of features(); track feat) {
                                        @if (!hide_features().includes(feat)) {
                                            <settings-toggle
                                                class="w-full"
                                                [label]="
                                                    feature_display()[feat] || feat
                                                "
                                                [ngModel]="
                                                    filters()?.features?.includes(feat)
                                                "
                                                (ngModelChange)="
                                                    toggleFeature(feat, $event)
                                                "
                                                [ngModelOptions]="{
                                                    standalone: true,
                                                }"
                                            ></settings-toggle>
                                        }
                                    }
                                </div>
                            }
                        }
                    </div>
                </div>
                <!-- Main content area -->
                <div class="flex min-w-0 flex-1 flex-col">
                    <div class="mb-2 flex space-x-2">
                        <div
                            filters
                            class="border-base-300 bg-base-100 flex flex-1 flex-wrap rounded-lg border p-2"
                        >
                            @let feature_list =
                                filters()?.features || [];
                            @let zones = options()?.zones || [];
                            @let capacity = filters()?.capacity || -1;
                            @let event = model();
                            @let zone = (zones | level) || (zones | building);
                            @let location =
                                zone?.display_name || zone?.name || '';
                            @if (feature_list.length > 1) {
                                <button
                                    btn
                                    matRipple
                                    name="clear-space-filters"
                                    class="mr-2 mb-2 min-h-8"
                                    (click)="removeAllFeatures()"
                                >
                                    {{ 'COMMON.FILTERS_CLEAR' | translate }}
                                </button>
                            }
                            @if (location) {
                                <div filter-item zone>
                                    {{ location }}
                                </div>
                            }
                            <div filter-item date>
                                {{ event.date | date: 'mediumDate' }}
                            </div>
                            <div filter-item time>
                                @if (!event.all_day) {
                                    {{ event.date | date: time_format }} &mdash;
                                    {{ event.date_end | date: time_format }}
                                }
                                @if (event.all_day) {
                                    {{ 'COMMON.ALL_DAY' | translate }}
                                }
                            </div>
                            <div filter-item count>
                                @if (capacity < 0) {
                                    {{ 'COMMON.CAPACITY_ANY' | translate }}
                                } @else {
                                    {{
                                        'CALENDAR_EVENT.SPACE_SELECT_SIZE_X'
                                            | translate
                                                : {
                                                      count: capacity,
                                                  }
                                    }}
                                }
                            </div>
                            @for (feat of feature_list; track feat) {
                                <div filter-item>
                                    <p class="truncate">{{ feat }}</p>
                                    <button
                                        icon
                                        matRipple
                                        name="remove-space-filter"
                                        class="-mr-4"
                                        [attr.aria-label]="
                                            'CALENDAR_EVENT.FILTER_REMOVE'
                                                | translate: { name: feat }
                                        "
                                        (click)="removeFeature(feat)"
                                    >
                                        <icon>close</icon>
                                    </button>
                                </div>
                            }
                        </div>
                        <div class="space-y-2">
                            <button
                                btn
                                matRipple
                                class="w-full space-x-2"
                                [class.inverse]="view() !== 'list'"
                                (click)="view.set('list')"
                            >
                                <icon class="text-2xl">list</icon>
                                <div class="pr-2">
                                    {{ 'COMMON.LIST' | translate }}
                                </div>
                            </button>
                            <button
                                btn
                                matRipple
                                class="w-full space-x-2"
                                [class.inverse]="view() !== 'map'"
                                (click)="setMapView()"
                            >
                                <icon class="text-2xl">map</icon>
                                <div class="pr-2">
                                    {{ 'COMMON.MAP' | translate }}
                                </div>
                            </button>
                        </div>
                    </div>
                    <div
                        class="border-base-300 bg-base-200 relative flex flex-col overflow-hidden rounded-lg border p-2"
                        [class.flex-1]="view() !== 'map'"
                        [class.h-[600px]]="view() === 'map'"
                        [class.min-h-[600px]]="view() === 'map'"
                    >
                        @if (unavailable_selection().length) {
                            <div
                                unavailable-warning
                                role="alert"
                                class="bg-warning text-warning-content mb-2 flex items-center space-x-2 rounded-lg p-2 text-sm"
                            >
                                <icon class="text-xl">warning</icon>
                                <p>
                                    {{
                                        'CALENDAR_EVENT.SELECTED_ROOM_UNAVAILABLE'
                                            | translate
                                    }}
                                </p>
                            </div>
                        }
                        @if (view() === 'map') {
                            <meeting-flow-space-map
                                [selected_spaces]="selected()"
                                (space_selected)="toggleSpace($event)"
                            />
                        } @else {
                            <meeting-flow-space-list
                                [selected_spaces]="selected()"
                                (space_selected)="toggleSpace($event)"
                            />
                        }
                    </div>
                </div>
            </div>
            <!-- Mobile Filters Panel - Bottom Sheet -->
            <div
                class="filters-panel-mobile border-base-300 bg-base-100 fixed right-0 bottom-0 left-0 z-30 w-full border-t shadow-lg transition-transform duration-300 sm:hidden"
                [class.translate-y-full]="!filters_open()"
                [class.translate-y-0]="filters_open()"
            >
                <div
                    class="border-base-300 flex w-full items-center justify-between border-b p-2"
                >
                    <h3 class="px-2 text-xl font-medium">
                        {{ 'COMMON.FILTERS' | translate }}
                    </h3>
                    <button
                        icon
                        matRipple
                        [attr.aria-label]="'COMMON.CLOSE' | translate"
                        (click)="filters_open.set(false)"
                    >
                        <icon>close</icon>
                    </button>
                </div>
                <div
                    cdkScrollable
                    class="flex max-h-[60vh] flex-col overflow-y-auto p-4"
                >
                    <label for="location">{{
                        'COMMON.LOCATION' | translate
                    }}</label>
                    @if (use_region() && (regions())?.length) {
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="region"
                                [ngModel]="region"
                                (ngModelChange)="setRegion($event)"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="
                                    'COMMON.REGION_ANY'
                                        | translate
                                "
                            >
                                @for (reg of regions(); track reg) {
                                    <mat-option [value]="reg">
                                        {{ reg.display_name || reg.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    }
                    @if (!use_region() && (buildings())?.length > 1) {
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="building"
                                [ngModel]="building()"
                                (ngModelChange)="setBuilding($event)"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="
                                    (building())?.display_name ||
                                    (building())?.name
                                "
                            >
                                @for (bld of buildings(); track bld) {
                                    <mat-option [value]="bld">
                                        {{ bld.display_name || bld.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    }
                    @if (view() === 'list') {
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="location-multi-mobile"
                                [ngModel]="options()?.zones"
                                (ngModelChange)="setOptions({ zones: $event })"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="'COMMON.LEVEL_ANY' | translate"
                                [multiple]="true"
                            >
                                @for (lvl of levels(); track lvl) {
                                    <mat-option [value]="lvl.id">
                                        <div class="flex flex-col-reverse">
                                            @if (use_region()) {
                                                <div class="text-xs opacity-30">
                                                    {{
                                                        (
                                                            lvl?.parent_id
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
                    <label for="capacity">{{
                        'COMMON.CAPACITY' | translate
                    }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <mat-select
                            name="capacity-mobile"
                            [ngModel]="filters()?.capacity ?? -1"
                            (ngModelChange)="setCapacity($event)"
                            [ngModelOptions]="{ standalone: true }"
                        >
                            @for (opt of capacity_options; track opt.value) {
                                <mat-option [value]="opt.value">
                                    {{ opt.label | translate }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                    <label for="date">{{ 'FORM.DATE' | translate }}</label>
                    <date-field [formField]="form.date" [to]="end_date()" />
                    @if (allow_all_day()) {
                        <settings-toggle
                            class="mb-2"
                            [formField]="form.all_day"
                            >{{ 'COMMON.ALL_DAY' | translate }}</settings-toggle
                        >
                    }
                    @if (!field('all_day')) {
                        <label for="date">{{ 'FORM.TIME' | translate }}</label>
                        <div class="flex space-x-2">
                            <time-field
                                class="flex-1"
                                [ngModel]="field('date')"
                                (ngModelChange)="
                                    model.update((m) => ({ ...m, date: $event }))
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [disabled]="form.date().disabled()"
                                [range]="bookable_hours()"
                                [use_24hr]="use_24hr()"
                                [timezone]="timezone"
                            />
                            @if (!allow_multiday()) {
                                <duration-field
                                    class="w-1/3 flex-1"
                                    [formField]="form.duration"
                                    [time]="field('date')"
                                    [max]="max_duration()"
                                    [min]="min_duration()"
                                    [step]="duration_step()"
                                    [custom_options]="custom_duration_options()"
                                    [end_time]="bookable_hours()?.end"
                                    [use_24hr]="use_24hr()"
                                    [timezone]="timezone"
                                />
                            }
                        </div>
                    }
                    @if (allow_multiday()) {
                        <label for="date-end">{{
                            'FORM.DATE_END' | translate
                        }}</label>
                        <date-field
                            [formField]="form.date_end"
                            [from]="field('date')"
                            [to]="end_date()"
                        />
                        @if (!field('all_day')) {
                            <label for="end-time">{{
                                'FORM.TIME_END' | translate
                            }}</label>
                            <time-field
                                [ngModel]="field('date_end')"
                                (ngModelChange)="
                                    model.update((m) => ({
                                        ...m,
                                        date_end: $event,
                                    }))
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [from]="field('date')"
                                [range]="bookable_hours()"
                                [use_24hr]="use_24hr()"
                                [timezone]="timezone"
                            />
                        }
                    }
                    @if (view() === 'list') {
                        <settings-toggle
                            class="mb-4"
                            [ngModel]="filters()?.show_fav"
                            (ngModelChange)="setFilters({ show_fav: $event })"
                            [ngModelOptions]="{ standalone: true }"
                            >{{
                                'COMMON.FAVOURITES_ONLY' | translate
                            }}</settings-toggle
                        >
                    }
                    @if (view() === 'list') {
                        @if (features()?.length) {
                            <h2 class="text-lg font-medium">
                                {{ 'CALENDAR_EVENT.FACILITIES' | translate }}
                            </h2>
                            <div class="mb-4 flex flex-col space-y-2">
                                @for (feat of features(); track feat) {
                                    @if (!hide_features().includes(feat)) {
                                        <settings-toggle
                                            class="w-full"
                                            [label]="feature_display()[feat] || feat"
                                            [ngModel]="
                                                filters()?.features?.includes(feat)
                                            "
                                            (ngModelChange)="
                                                toggleFeature(feat, $event)
                                            "
                                            [ngModelOptions]="{ standalone: true }"
                                        ></settings-toggle>
                                    }
                                }
                            </div>
                        }
                    }
                </div>
            </div>
        </div>
        <div class="h-4"></div>
        <div
            class="border-base-300 bg-base-100 sticky bottom-0 z-10 flex justify-between rounded-t-xl border-x border-t p-3 sm:z-40"
        >
            <a
                btn
                matRipple
                class="inverse w-40 cursor-pointer"
                [routerLink]="[]"
                [queryParams]="{ view: 0 }"
            >
                {{ 'COMMON.BACK' | translate }}
            </a>
            <button
                btn
                matRipple
                class="w-40"
                [disabled]="unavailable_selection().length > 0"
                (click)="continue()"
            >
                {{ 'COMMON.CONTINUE' | translate }}
            </button>
        </div>
    `, imports: [
      CdkScrollable,
      CommonModule,
      MatRippleModule,
      IconComponent,
      MatFormFieldModule,
      MatSelectModule,
      DateFieldComponent,
      TimeFieldComponent,
      DurationFieldComponent,
      FormsModule,
      FormField,
      SettingsToggleComponent,
      TranslatePipe,
      BuildingPipe,
      LevelPipe,
      MeetingFlowSpaceListComponent,
      MeetingFlowSpaceMapComponent,
      RouterModule
    ], styles: ["/* angular:styles/component:css;896b7c96383ff8e533a151cf50d1d4c30cbb966af6de5b0a84ec91a98c0ba33b;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/book/meeting-flow-new/meeting-flow-space-select.component.ts */\n.gradient {\n  background:\n    linear-gradient(\n      105deg,\n      var(--base-200) 0%,\n      var(--base-200) 50%,\n      var(--base-100) 100%);\n}\n.filters-panel-mobile {\n  border-radius: 1rem 1rem 0 0;\n  max-height: 70vh;\n}\n[filter-item] {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  min-height: 2rem;\n  height: 2rem;\n  font-size: 0.875rem;\n  border: 1px solid var(--base-300);\n  border-radius: 1.25rem;\n  margin: 0.25rem;\n  max-width: 100%;\n  text-align: center;\n}\n[filter-item]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n[filter-item] > * + * {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=meeting-flow-space-select.component.css.map */\n"] }]
  }], null, { prev: [{ type: Output, args: ["prev"] }], next: [{ type: Output, args: ["next"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MeetingFlowSpaceSelectComponent, { className: "MeetingFlowSpaceSelectComponent", filePath: "apps/workplace/src/app/book/meeting-flow-new/meeting-flow-space-select.component.ts", lineNumber: 759 });
})();

// apps/workplace/src/app/book/meeting-flow-new/meeting-flow.component.ts
var _c06 = () => [];
var _c16 = () => ({ view: 0 });
function MeetingFlowNewComponent_Conditional_0_Case_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "meeting-flow-details");
  }
}
function MeetingFlowNewComponent_Conditional_0_Case_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "meeting-flow-space-select", 13);
    \u0275\u0275listener("prev", function MeetingFlowNewComponent_Conditional_0_Case_35_Template_meeting_flow_space_select_prev_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.previous());
    })("next", function MeetingFlowNewComponent_Conditional_0_Case_35_Template_meeting_flow_space_select_next_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.next());
    });
    \u0275\u0275elementEnd();
  }
}
function MeetingFlowNewComponent_Conditional_0_Case_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "meeting-flow-options");
  }
}
function MeetingFlowNewComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 4)(7, "a", 5);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "div", 6)(10, "icon");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 7);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "div", 8);
    \u0275\u0275elementStart(16, "button", 9);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275listener("click", function MeetingFlowNewComponent_Conditional_0_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateToView(1));
    });
    \u0275\u0275elementStart(18, "div", 10)(19, "icon");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 7);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(24, "div", 8);
    \u0275\u0275elementStart(25, "button", 11);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275listener("click", function MeetingFlowNewComponent_Conditional_0_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateToView(2));
    });
    \u0275\u0275elementStart(27, "div", 10)(28, "icon");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 7);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "div", 12);
    \u0275\u0275conditionalCreate(34, MeetingFlowNewComponent_Conditional_0_Case_34_Template, 1, 0, "meeting-flow-details")(35, MeetingFlowNewComponent_Conditional_0_Case_35_Template, 1, 0, "meeting-flow-space-select")(36, MeetingFlowNewComponent_Conditional_0_Case_36_Template, 1, 0, "meeting-flow-options");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_31_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 46, ctx_r1.form_value()?.id ? "APP.WORKPLACE.MEETING_BOOK_EDIT_HEADER" : "CALENDAR_EVENT.MEETING_FLOW_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(60, _c06))("queryParams", \u0275\u0275pureFunction0(61, _c16));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(8, 48, "COMMON.DETAILS"))("aria-current", ctx_r1.view() === 0 ? "step" : null);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-base-200", ctx_r1.view() < 0)("bg-info", ctx_r1.view() === 0)("text-info-content", ctx_r1.view() === 0)("bg-success", ctx_r1.view() > 0)("text-success-content", ctx_r1.view() > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.view() > 0 ? "done" : "edit");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 50, "COMMON.DETAILS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(17, 52, "CALENDAR_EVENT.MEETING_FLOW_STEP_SELECT_ROOM"))("aria-current", ctx_r1.view() === 1 ? "step" : null);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-base-200", ctx_r1.view() < 1)("bg-info", ctx_r1.view() === 1)("text-info-content", ctx_r1.view() === 1)("bg-success", ctx_r1.view() > 1)("text-success-content", ctx_r1.view() > 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.view() > 1 ? "done" : "room_preferences");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 54, "CALENDAR_EVENT.MEETING_FLOW_STEP_SELECT_ROOM"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(26, 56, "CALENDAR_EVENT.MEETING_FLOW_STEP_CONFIRM"))("aria-current", ctx_r1.view() === 2 ? "step" : null);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-base-200", ctx_r1.view() < 2)("bg-info", ctx_r1.view() === 2)("text-info-content", ctx_r1.view() === 2)("bg-success", ctx_r1.view() > 2)("text-success-content", ctx_r1.view() > 2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.view() > 2 ? "done" : "task_alt");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 58, "CALENDAR_EVENT.MEETING_FLOW_STEP_CONFIRM"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_31_0 = ctx_r1.view()) === 0 ? 34 : tmp_31_0 === 1 ? 35 : tmp_31_0 === 2 ? 36 : -1);
  }
}
function MeetingFlowNewComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "meeting-flow-success");
  }
}
var MeetingFlowNewComponent = class _MeetingFlowNewComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._event_form = inject(EventFormService);
    this._scroller = viewChild(
      CdkScrollable,
      ...ngDevMode ? [{ debugName: "_scroller" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.view = signal(
      0,
      ...ngDevMode ? [{ debugName: "view" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.flow_view = this._event_form.view;
    this.form_value = this._event_form.model;
    this.has_title = computed(
      () => !!this.form_value()?.title?.trim(),
      ...ngDevMode ? [{ debugName: "has_title" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_space = computed(
      () => !!this.form_value()?.resources && this.form_value()?.resources.length > 0,
      ...ngDevMode ? [{ debugName: "has_space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.previous = () => this.view.update((u) => Math.max(0, u - 1));
    this.next = () => this.view.update((u) => u + 1);
  }
  navigateToView(target_view) {
    if (target_view === 1 && !this.has_title()) {
      notifyError(i18n("CALENDAR_EVENT.ERROR_TITLE_REQUIRED_SELECT"));
      return;
    }
    if (target_view === 2 && !this.has_space()) {
      notifyError(i18n("CALENDAR_EVENT.ERROR_ROOM_REQUIRED"));
      return;
    }
    if (target_view === 2 && this._event_form.unavailable_resources().length) {
      notifyError(i18n("CALENDAR_EVENT.SELECTED_ROOM_UNAVAILABLE"));
      return;
    }
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: { view: target_view },
      queryParamsHandling: "merge"
    });
  }
  ngOnInit() {
    this._event_form.loadForm();
    this.subscription("route.params", this._route.paramMap.subscribe((param) => {
      if (param.has("step"))
        this._event_form.setView(param.get("step"));
    }));
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("view")) {
        const view = +params.get("view");
        if (Number.isNaN(view) || view === this.view())
          return;
        this.view.set(view);
        this._scroller()?.scrollTo({ top: 0 });
      }
    }));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MeetingFlowNewComponent_BaseFactory;
      return function MeetingFlowNewComponent_Factory(__ngFactoryType__) {
        return (\u0275MeetingFlowNewComponent_BaseFactory || (\u0275MeetingFlowNewComponent_BaseFactory = \u0275\u0275getInheritedFactory(_MeetingFlowNewComponent)))(__ngFactoryType__ || _MeetingFlowNewComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MeetingFlowNewComponent, selectors: [["meeting-flow-new"]], viewQuery: function MeetingFlowNewComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._scroller, CdkScrollable, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 1, consts: [["cdkScrollable", "", 1, "h-full", "w-full", "overflow-auto", "bg-base-200"], [1, "mx-auto", "min-h-full", "w-[80rem]", "max-w-full", "space-y-4", "px-4", "pt-4"], [1, "w-full", "rounded-xl", "border", "border-base-300", "bg-base-100", "p-4"], [1, "mb-4", "text-2xl", "font-medium"], [1, "flex", "items-center", "justify-center", "space-x-2"], ["name", "step-details", "matRipple", "", 1, "flex", "items-center", "space-x-2", "rounded", "p-2", 3, "routerLink", "queryParams"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full"], [1, "hidden", "sm:block"], [1, "h-0.5", "w-16", "bg-base-200"], ["type", "button", "name", "step-select-room", "matRipple", "", 1, "flex", "cursor-pointer", "items-center", "space-x-2", "rounded", "p-2", 3, "click"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "bg-base-200"], ["type", "button", "name", "step-confirm", "matRipple", "", 1, "flex", "cursor-pointer", "items-center", "space-x-2", "rounded", "p-2", 3, "click"], [1, "w-full"], [3, "prev", "next"]], template: function MeetingFlowNewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, MeetingFlowNewComponent_Conditional_0_Template, 37, 62, "div", 0)(1, MeetingFlowNewComponent_Conditional_1_Template, 1, 0, "meeting-flow-success");
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.flow_view() !== "success" ? 0 : 1);
      }
    }, dependencies: [
      CdkScrollable,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MeetingFlowDetailsComponent,
      MeetingFlowSpaceSelectComponent,
      MeetingFlowOptionsComponent,
      RouterModule,
      RouterLink,
      MeetingFlowSuccessComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=meeting-flow.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeetingFlowNewComponent, [{
    type: Component,
    args: [{ selector: "meeting-flow-new", template: `
        @if (flow_view() !== 'success') {
            <div cdkScrollable class="h-full w-full overflow-auto bg-base-200">
                <div
                    class="mx-auto min-h-full w-[80rem] max-w-full space-y-4 px-4 pt-4"
                >
                    <div
                        class="w-full rounded-xl border border-base-300 bg-base-100 p-4"
                    >
                        <h3 class="mb-4 text-2xl font-medium">
                            {{
                                (form_value()?.id
                                    ? 'APP.WORKPLACE.MEETING_BOOK_EDIT_HEADER'
                                    : 'CALENDAR_EVENT.MEETING_FLOW_HEADER'
                                ) | translate
                            }}
                        </h3>
                        <div class="flex items-center justify-center space-x-2">
                            <a
                                name="step-details"
                                matRipple
                                class="flex items-center space-x-2 rounded p-2"
                                [routerLink]="[]"
                                [queryParams]="{ view: 0 }"
                                [attr.aria-label]="'COMMON.DETAILS' | translate"
                                [attr.aria-current]="
                                    view() === 0 ? 'step' : null
                                "
                            >
                                <div
                                    class="flex h-8 w-8 items-center justify-center rounded-full"
                                    [class.bg-base-200]="view() < 0"
                                    [class.bg-info]="view() === 0"
                                    [class.text-info-content]="view() === 0"
                                    [class.bg-success]="view() > 0"
                                    [class.text-success-content]="view() > 0"
                                >
                                    <icon>{{
                                        view() > 0 ? 'done' : 'edit'
                                    }}</icon>
                                </div>
                                <div class="hidden sm:block">
                                    {{ 'COMMON.DETAILS' | translate }}
                                </div>
                            </a>
                            <div class="h-0.5 w-16 bg-base-200"></div>
                            <button
                                type="button"
                                name="step-select-room"
                                matRipple
                                class="flex cursor-pointer items-center space-x-2 rounded p-2"
                                [attr.aria-label]="
                                    'CALENDAR_EVENT.MEETING_FLOW_STEP_SELECT_ROOM'
                                        | translate
                                "
                                [attr.aria-current]="
                                    view() === 1 ? 'step' : null
                                "
                                (click)="navigateToView(1)"
                            >
                                <div
                                    class="flex h-8 w-8 items-center justify-center rounded-full bg-base-200"
                                    [class.bg-base-200]="view() < 1"
                                    [class.bg-info]="view() === 1"
                                    [class.text-info-content]="view() === 1"
                                    [class.bg-success]="view() > 1"
                                    [class.text-success-content]="view() > 1"
                                >
                                    <icon>{{
                                        view() > 1 ? 'done' : 'room_preferences'
                                    }}</icon>
                                </div>
                                <div class="hidden sm:block">
                                    {{
                                        'CALENDAR_EVENT.MEETING_FLOW_STEP_SELECT_ROOM'
                                            | translate
                                    }}
                                </div>
                            </button>
                            <div class="h-0.5 w-16 bg-base-200"></div>
                            <button
                                type="button"
                                name="step-confirm"
                                matRipple
                                class="flex cursor-pointer items-center space-x-2 rounded p-2"
                                [attr.aria-label]="
                                    'CALENDAR_EVENT.MEETING_FLOW_STEP_CONFIRM'
                                        | translate
                                "
                                [attr.aria-current]="
                                    view() === 2 ? 'step' : null
                                "
                                (click)="navigateToView(2)"
                            >
                                <div
                                    class="flex h-8 w-8 items-center justify-center rounded-full bg-base-200"
                                    [class.bg-base-200]="view() < 2"
                                    [class.bg-info]="view() === 2"
                                    [class.text-info-content]="view() === 2"
                                    [class.bg-success]="view() > 2"
                                    [class.text-success-content]="view() > 2"
                                >
                                    <icon>{{
                                        view() > 2 ? 'done' : 'task_alt'
                                    }}</icon>
                                </div>
                                <div class="hidden sm:block">
                                    {{
                                        'CALENDAR_EVENT.MEETING_FLOW_STEP_CONFIRM'
                                            | translate
                                    }}
                                </div>
                            </button>
                        </div>
                    </div>
                    <div class="w-full">
                        @switch (view()) {
                            @case (0) {
                                <meeting-flow-details />
                            }
                            @case (1) {
                                <meeting-flow-space-select
                                    (prev)="previous()"
                                    (next)="next()"
                                />
                            }
                            @case (2) {
                                <meeting-flow-options />
                            }
                        }
                    </div>
                </div>
            </div>
        } @else {
            <meeting-flow-success />
        }
    `, imports: [
      CdkScrollable,
      IconComponent,
      MatRippleModule,
      MeetingFlowDetailsComponent,
      MeetingFlowSpaceSelectComponent,
      MeetingFlowOptionsComponent,
      RouterModule,
      TranslatePipe,
      MeetingFlowSuccessComponent
    ], styles: ["/* angular:styles/component:css;53020ecd9eec6f24fc2e7595a27ffc73aeee295082b36352e0ab4548108a08a2;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/book/meeting-flow-new/meeting-flow.component.ts */\n:host {\n  height: 100%;\n}\n/*# sourceMappingURL=meeting-flow.component.css.map */\n"] }]
  }], null, { _scroller: [{ type: ViewChild, args: [forwardRef(() => CdkScrollable), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MeetingFlowNewComponent, { className: "MeetingFlowNewComponent", filePath: "apps/workplace/src/app/book/meeting-flow-new/meeting-flow.component.ts", lineNumber: 178 });
})();
export {
  MeetingFlowNewComponent
};
//# debugId=1ffb79a8-254e-5554-a996-ba694b73e541
//# sourceMappingURL=meeting-flow.component-X7QVRM24.js.map
