import {
  UploadButtonComponent
} from "./chunk-KP35MBC5.js";
import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-V3GMS2ED.js";
import {
  DurationFieldComponent
} from "./chunk-WYADL7OH.js";
import {
  LevelPipe
} from "./chunk-KAR5TU44.js";
import {
  getMapDetails
} from "./chunk-4Q6CIK4K.js";
import {
  openConfirmModal
} from "./chunk-IW4P4ANK.js";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger
} from "./chunk-NHRH6ZA7.js";
import {
  SimpleTableComponent
} from "./chunk-3364OFJD.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AuthenticatedImageDirective,
  FullscreenModalShellComponent,
  MatCheckbox,
  MatCheckboxModule,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSelect,
  MatSelectModule,
  SettingsToggleComponent,
  TimeFieldComponent,
  WFHSettingsModalComponent,
  setDay
} from "./chunk-PEQWGAJ2.js";
import {
  setMinutes
} from "./chunk-Q5AD4WWX.js";
import {
  setHours
} from "./chunk-OQVZP6UW.js";
import {
  isValidUrl,
  requestSpacesForZone
} from "./chunk-ZROJCKMZ.js";
import "./chunk-JRJWUN4V.js";
import "./chunk-YLTESZRF.js";
import {
  ActivatedRoute,
  AsyncHandler,
  CheckboxControlValueAccessor,
  Clipboard,
  CommonModule,
  Component,
  DatePipe,
  DefaultValueAccessor,
  FormField,
  FormsModule,
  He,
  IconComponent,
  Injectable,
  Injector,
  Input,
  Kt,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatInput,
  MatInputModule,
  MatOption,
  MatPrefix,
  MatRipple,
  MatRippleModule,
  MatSuffix,
  MatTooltip,
  MatTooltipModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  OrganisationService,
  Output,
  Qu,
  Router,
  Rt,
  SettingsService,
  TIMEZONES_IANA,
  TranslatePipe,
  UploadsService,
  VERSION,
  Va,
  Vc,
  Wu,
  Xa,
  Ya,
  buildCurrencyOptions,
  computed,
  currentUser,
  debounced,
  ea,
  effect,
  form,
  format,
  getInvalidSignalFields,
  i18n,
  inject,
  input,
  linkedSignal,
  min,
  nextValueFrom,
  notifyError,
  notifySuccess,
  onFieldChange,
  output,
  qe,
  required,
  resource,
  set,
  setClassMetadata,
  signal,
  startOfDay,
  startOfMinute,
  ta,
  validate,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
  ɵɵpureFunction3,
  ɵɵpureFunction5,
  ɵɵpureFunction6,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BR6UWVYE.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/concierge/src/app/ui/app-settings-modal.component.ts
var _c0 = () => ({ standalone: true });
function AppSettingsModalComponent_Conditional_4_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function AppSettingsModalComponent_Conditional_4_For_13_Template_button_click_0_listener() {
      const feature_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFeature(feature_r4));
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "mat-checkbox", 12);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.feature_descriptions[feature_r4], " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.active_features()[feature_r4])("ngModelOptions", \u0275\u0275pureFunction0(3, _c0));
    \u0275\u0275control();
  }
}
function AppSettingsModalComponent_Conditional_4_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function AppSettingsModalComponent_Conditional_4_For_18_Template_button_click_0_listener() {
      const feature_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFeature(feature_r6));
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "mat-checkbox", 12);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.feature_descriptions[feature_r6], " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.active_features()[feature_r6])("ngModelOptions", \u0275\u0275pureFunction0(3, _c0));
    \u0275\u0275control();
  }
}
function AppSettingsModalComponent_Conditional_4_Conditional_19_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function AppSettingsModalComponent_Conditional_4_Conditional_19_For_5_Template_button_click_0_listener() {
      const feature_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleEventFeature(feature_r8));
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "mat-checkbox", 12);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.feature_descriptions[feature_r8], " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.model().events[feature_r8])("ngModelOptions", \u0275\u0275pureFunction0(3, _c0));
    \u0275\u0275control();
  }
}
function AppSettingsModalComponent_Conditional_4_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h3", 8);
    \u0275\u0275text(2, " Room Bookings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9);
    \u0275\u0275repeaterCreate(4, AppSettingsModalComponent_Conditional_4_Conditional_19_For_5_Template, 4, 4, "button", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.room_features);
  }
}
function AppSettingsModalComponent_Conditional_4_Conditional_20_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function AppSettingsModalComponent_Conditional_4_Conditional_20_For_5_Template_button_click_0_listener() {
      const feature_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleDeskFeature(feature_r10));
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "mat-checkbox", 12);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.feature_descriptions[feature_r10], " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.model().desks[feature_r10])("ngModelOptions", \u0275\u0275pureFunction0(3, _c0));
    \u0275\u0275control();
  }
}
function AppSettingsModalComponent_Conditional_4_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3", 8);
    \u0275\u0275text(2, " Desk Bookings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9);
    \u0275\u0275repeaterCreate(4, AppSettingsModalComponent_Conditional_4_Conditional_20_For_5_Template, 4, 4, "button", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.desk_features);
  }
}
function AppSettingsModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 3)(1, "div", 7)(2, "h3", 8);
    \u0275\u0275text(3, "General Features");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9)(5, "button", 10);
    \u0275\u0275listener("click", function AppSettingsModalComponent_Conditional_4_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFeature("use_24_hour_time"));
    });
    \u0275\u0275elementStart(6, "div", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "mat-checkbox", 12);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "h3", 8);
    \u0275\u0275text(10, "Features");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 9);
    \u0275\u0275repeaterCreate(12, AppSettingsModalComponent_Conditional_4_For_13_Template, 4, 4, "button", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "h3", 8);
    \u0275\u0275text(15, "Landing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 9);
    \u0275\u0275repeaterCreate(17, AppSettingsModalComponent_Conditional_4_For_18_Template, 4, 4, "button", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, AppSettingsModalComponent_Conditional_4_Conditional_19_Template, 6, 0, "ng-container");
    \u0275\u0275conditionalCreate(20, AppSettingsModalComponent_Conditional_4_Conditional_20_Template, 6, 0, "div");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.feature_descriptions["use_24_hour_time"], " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.active_features()["use_24_hour_time"])("ngModelOptions", \u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.available_features);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.landing_features);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.active_features()["spaces"] ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.active_features()["desks"] ? 20 : -1);
  }
}
function AppSettingsModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 4);
    \u0275\u0275element(1, "mat-spinner", 14);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.loading());
  }
}
function AppSettingsModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 5)(1, "button", 15);
    \u0275\u0275text(2, " Discard ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 16);
    \u0275\u0275listener("click", function AppSettingsModalComponent_Conditional_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(4, " Save ");
    \u0275\u0275elementEnd()();
  }
}
function AppSettingsModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 6)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
var AppSettingsModalComponent = class _AppSettingsModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.zone = this._data.zone;
    this.workplace_key = this._settings.get("app.workplace_metadata_key") || "workplace_app";
    this.available_features = [
      "spaces",
      "desks",
      "explore",
      "parking",
      "help",
      "schedule",
      "wfh"
    ];
    this.landing_features = [
      "show_quick_links",
      "hide_availability",
      "hide_colleagues",
      "hide_landing_sidebar",
      "hide_rooms",
      "hide_spaces"
    ];
    this.room_features = [
      "allow_all_day",
      "booking_unavailable",
      "can_book_for_others",
      "has_assets",
      "has_catering",
      "allow_externals",
      "hide_notes",
      "allow_recurrence"
    ];
    this.desk_features = ["allow_all_day"];
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.combined_settings = {};
    this.active_features = signal(
      {},
      ...ngDevMode ? [{ debugName: "active_features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.feature_descriptions = {
      use_24_hour_time: "Use 24 Hour Time",
      spaces: "Book Rooms",
      desks: "Book Desks",
      explore: "Explore Maps",
      parking: "Book Parking",
      help: "Help Desk",
      schedule: "Your Bookings",
      wfh: "Work from Home",
      //Landing Features
      show_quick_links: "Show Quick Links",
      hide_availability: "Hide Availability Section",
      hide_colleagues: "Hide Colleagues Listing",
      hide_landing_sidebar: "Hide Sidebar",
      hide_rooms: "Hide Rooms Section",
      hide_spaces: "Hide Spaces Section",
      // Room Features
      allow_all_day: "All Day Bookings",
      booking_unavailable: "No event calendar",
      can_book_for_others: "Can book for others",
      has_assets: "Asset Booking",
      has_catering: "Event Catering",
      allow_externals: "Allow external attendees",
      hide_notes: "Hide notes field",
      allow_recurrence: "Allow recurring bookings"
    };
    this.model = signal(
      {
        use_24_hour_time: false,
        features: [],
        general: {
          show_quick_links: false,
          hide_availability: false,
          hide_colleagues: false,
          hide_landing_sidebar: false,
          hide_rooms: false,
          hide_spaces: false
        },
        events: {
          allow_all_day: false,
          booking_unavailable: false,
          can_book_for_others: false,
          has_assets: false,
          has_catering: false,
          allow_externals: false,
          hide_notes: false,
          allow_recurrence: false
        },
        desks: {
          allow_all_day: false,
          has_assets: false
        },
        bookings: {
          allow_all_day: false
        }
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  toggleFeature(feature) {
    this.active_features.update((f) => __spreadProps(__spreadValues({}, f), {
      [feature]: !f[feature]
    }));
  }
  toggleEventFeature(feature) {
    this.model.update((m) => __spreadProps(__spreadValues({}, m), {
      events: __spreadProps(__spreadValues({}, m.events), { [feature]: !m.events[feature] })
    }));
  }
  toggleDeskFeature(feature) {
    this.model.update((m) => __spreadProps(__spreadValues({}, m), {
      desks: __spreadProps(__spreadValues({}, m.desks), { [feature]: !m.desks[feature] })
    }));
  }
  async ngOnInit() {
    this.loading.set("Loading settings...");
    this._dialog_ref.disableClose = true;
    const zone_settings = (await Wu(this.zone.id, `${this.workplace_key}`).catch(() => ({ details: {} }))).details;
    const parent_settings = (await Wu(this.zone.parent_id, `${this.workplace_key}`).catch(() => ({ details: {} }))).details;
    const org_settings = (await Wu(this._org.organisation.id, `${this.workplace_key}`).catch(() => ({ details: {} }))).details;
    const combined_settings = __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, org_settings), parent_settings), zone_settings), {
      general: __spreadValues(__spreadValues(__spreadValues({}, org_settings.general), parent_settings.general), zone_settings.general),
      events: __spreadValues(__spreadValues(__spreadValues({}, org_settings.events), parent_settings.events), zone_settings.events),
      desks: __spreadValues(__spreadValues(__spreadValues({}, org_settings.desks), parent_settings.desks), zone_settings.desks),
      bookings: __spreadValues(__spreadValues(__spreadValues({}, org_settings.bookings), parent_settings.bookings), zone_settings.bookings)
    });
    this.model.update((m) => __spreadProps(__spreadValues({}, m), {
      use_24_hour_time: combined_settings.use_24_hour_time ?? m.use_24_hour_time,
      features: combined_settings.features ?? m.features,
      general: __spreadValues(__spreadValues({}, m.general), combined_settings.general || {}),
      events: __spreadValues(__spreadValues({}, m.events), combined_settings.events || {}),
      desks: __spreadValues(__spreadValues({}, m.desks), combined_settings.desks || {}),
      bookings: __spreadValues(__spreadValues({}, m.bookings), combined_settings.bookings || {})
    }));
    const active_features = {};
    for (const key in combined_settings) {
      if (typeof combined_settings[key] === "object") {
        for (const sub_key in combined_settings[key]) {
          if (typeof combined_settings[key][sub_key] === "boolean") {
            active_features[sub_key] = combined_settings[key][sub_key];
          }
        }
      } else if (typeof combined_settings[key] === "boolean") {
        active_features[key] = combined_settings[key];
      }
    }
    for (const feature of combined_settings.features || []) {
      active_features[feature] = true;
    }
    this.active_features.set(active_features);
    this.combined_settings = combined_settings;
    this.loading.set("");
    this._dialog_ref.disableClose = false;
  }
  async save() {
    const details = this.buildSettings();
    this.loading.set("Saving settings...");
    this._dialog_ref.disableClose = true;
    try {
      await Qu(this.zone.id, {
        name: `${this.workplace_key}`,
        details,
        description: "Workplace Application Settings"
      });
    } catch (e) {
      console.error(e);
      this._dialog_ref.disableClose = false;
      this.loading.set("");
      notifyError(`Failed to save settings: ${e.message || e.error || e}`);
      throw e;
    }
    this._dialog_ref.disableClose = false;
    this._dialog_ref.close();
    notifySuccess("Successfully saved settings");
  }
  buildSettings() {
    const form_values = JSON.parse(JSON.stringify(this.model()));
    for (const key in form_values) {
      if (form_values[key] && typeof form_values[key] === "object" && !Array.isArray(form_values[key])) {
        if (key === "events" || key === "desks" || key === "bookings")
          continue;
        for (const sub_key in form_values[key]) {
          if (typeof form_values[key][sub_key] === "boolean") {
            form_values[key][sub_key] = this.active_features()[sub_key];
          }
        }
      } else if (typeof form_values[key] === "boolean") {
        form_values[key] = this.active_features()[key];
      }
    }
    form_values.bookings = form_values.desks;
    form_values.features = Object.keys(this.active_features()).filter((key) => this.active_features()[key]).filter((key) => this.available_features.includes(key));
    return form_values;
  }
  static {
    this.\u0275fac = function AppSettingsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppSettingsModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppSettingsModalComponent, selectors: [["app-settings-modal"]], decls: 8, vars: 4, consts: [[1, "bg-base-100", "flex", "h-screen", "w-screen", "flex-col"], [1, "sticky", "top-0", "z-10", "mx-auto", "w-full", "max-w-[640px]", "border-none", "px-0", "py-2"], [1, "text-2xl", "font-medium"], [1, "z-0", "h-1/2", "flex-1", "space-y-2", "overflow-auto", "p-2"], [1, "z-0", "flex", "h-1/2", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "overflow-auto", "p-2"], [1, "bg-base-100", "sticky", "bottom-0", "z-10", "mx-auto", "flex", "w-full", "max-w-[640px]", "items-center", "justify-end", "space-x-2", "p-2"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "top-2", "right-2"], [1, "mx-auto", "w-full", "max-w-[640px]"], [1, "text-lg", "font-medium"], [1, "-mx-2", "flex", "flex-wrap", "items-center", "py-2"], ["matRipple", "", 1, "border-base-200", "m-2", "flex", "w-[calc(50%-1rem)]", "items-center", "space-x-2", "border", "p-2", 3, "click"], [1, "ml-2", "flex-1", "text-left"], [1, "pointer-events-none", 3, "ngModel", "ngModelOptions"], ["matRipple", "", 1, "border-base-200", "m-2", "flex", "w-[calc(50%-1rem)]", "items-center", "space-x-2", "border", "p-2"], [3, "diameter"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse", "w-32"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"]], template: function AppSettingsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(4, AppSettingsModalComponent_Conditional_4_Template, 21, 6, "main", 3)(5, AppSettingsModalComponent_Conditional_5_Template, 4, 2, "main", 4);
        \u0275\u0275conditionalCreate(6, AppSettingsModalComponent_Conditional_6_Template, 5, 0, "footer", 5);
        \u0275\u0275conditionalCreate(7, AppSettingsModalComponent_Conditional_7_Template, 3, 0, "button", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" App Configuration - ", ctx.zone.display_name, " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 4 : 5);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 7 : -1);
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, MatRippleModule, MatRipple, MatDialogModule, MatDialogClose, MatProgressSpinnerModule, MatProgressSpinner, MatCheckboxModule, MatCheckbox, IconComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppSettingsModalComponent, [{
    type: Component,
    args: [{ selector: "app-settings-modal", template: `
        <div class="bg-base-100 flex h-screen w-screen flex-col">
            <header
                class="sticky top-0 z-10 mx-auto w-full max-w-[640px] border-none px-0 py-2"
            >
                <h2 class="text-2xl font-medium">
                    App Configuration - {{ zone.display_name }}
                </h2>
            </header>
            @if (!loading()) {
                <main class="z-0 h-1/2 flex-1 space-y-2 overflow-auto p-2">
                    <div class="mx-auto w-full max-w-[640px]">
                        <h3 class="text-lg font-medium">General Features</h3>
                        <div class="-mx-2 flex flex-wrap items-center py-2">
                            <button
                                matRipple
                                class="border-base-200 m-2 flex w-[calc(50%-1rem)] items-center space-x-2 border p-2"
                                (click)="toggleFeature('use_24_hour_time')"
                            >
                                <div class="ml-2 flex-1 text-left">
                                    {{
                                        feature_descriptions['use_24_hour_time']
                                    }}
                                </div>
                                <mat-checkbox
                                    [ngModel]="
                                        active_features()['use_24_hour_time']
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                    class="pointer-events-none"
                                ></mat-checkbox>
                            </button>
                        </div>
                        <h3 class="text-lg font-medium">Features</h3>
                        <div class="-mx-2 flex flex-wrap items-center py-2">
                            @for (
                                feature of available_features;
                                track feature
                            ) {
                                <button
                                    matRipple
                                    class="border-base-200 m-2 flex w-[calc(50%-1rem)] items-center space-x-2 border p-2"
                                    (click)="toggleFeature(feature)"
                                >
                                    <div class="ml-2 flex-1 text-left">
                                        {{ feature_descriptions[feature] }}
                                    </div>
                                    <mat-checkbox
                                        [ngModel]="active_features()[feature]"
                                        [ngModelOptions]="{ standalone: true }"
                                        class="pointer-events-none"
                                    ></mat-checkbox>
                                </button>
                            }
                        </div>
                        <h3 class="text-lg font-medium">Landing</h3>
                        <div class="-mx-2 flex flex-wrap items-center py-2">
                            @for (feature of landing_features; track feature) {
                                <button
                                    matRipple
                                    class="border-base-200 m-2 flex w-[calc(50%-1rem)] items-center space-x-2 border p-2"
                                    (click)="toggleFeature(feature)"
                                >
                                    <div class="ml-2 flex-1 text-left">
                                        {{ feature_descriptions[feature] }}
                                    </div>
                                    <mat-checkbox
                                        [ngModel]="active_features()[feature]"
                                        [ngModelOptions]="{ standalone: true }"
                                        class="pointer-events-none"
                                    ></mat-checkbox>
                                </button>
                            }
                        </div>
                        @if (active_features()['spaces']) {
                            <ng-container>
                                <h3 class="text-lg font-medium">
                                    Room Bookings
                                </h3>
                                <div
                                    class="-mx-2 flex flex-wrap items-center py-2"
                                >
                                    @for (
                                        feature of room_features;
                                        track feature
                                    ) {
                                        <button
                                            matRipple
                                            class="border-base-200 m-2 flex w-[calc(50%-1rem)] items-center space-x-2 border p-2"
                                            (click)="toggleEventFeature(feature)"
                                        >
                                            <div class="ml-2 flex-1 text-left">
                                                {{
                                                    feature_descriptions[
                                                        feature
                                                    ]
                                                }}
                                            </div>
                                            <mat-checkbox
                                                [ngModel]="
                                                    model().events[feature]
                                                "
                                                [ngModelOptions]="{
                                                    standalone: true,
                                                }"
                                                class="pointer-events-none"
                                            ></mat-checkbox>
                                        </button>
                                    }
                                </div>
                            </ng-container>
                        }
                        @if (active_features()['desks']) {
                            <div>
                                <h3 class="text-lg font-medium">
                                    Desk Bookings
                                </h3>
                                <div
                                    class="-mx-2 flex flex-wrap items-center py-2"
                                >
                                    @for (
                                        feature of desk_features;
                                        track feature
                                    ) {
                                        <button
                                            matRipple
                                            class="border-base-200 m-2 flex w-[calc(50%-1rem)] items-center space-x-2 border p-2"
                                            (click)="toggleDeskFeature(feature)"
                                        >
                                            <div class="ml-2 flex-1 text-left">
                                                {{
                                                    feature_descriptions[
                                                        feature
                                                    ]
                                                }}
                                            </div>
                                            <mat-checkbox
                                                [ngModel]="
                                                    model().desks[feature]
                                                "
                                                [ngModelOptions]="{
                                                    standalone: true,
                                                }"
                                                class="pointer-events-none"
                                            ></mat-checkbox>
                                        </button>
                                    }
                                </div>
                            </div>
                        }
                    </div>
                </main>
            } @else {
                <main
                    class="z-0 flex h-1/2 flex-1 flex-col items-center justify-center space-y-2 overflow-auto p-2"
                >
                    <mat-spinner [diameter]="32"></mat-spinner>
                    <p>{{ loading() }}</p>
                </main>
            }
            @if (!loading()) {
                <footer
                    class="bg-base-100 sticky bottom-0 z-10 mx-auto flex w-full max-w-[640px] items-center justify-end space-x-2 p-2"
                >
                    <button btn matRipple class="inverse w-32" mat-dialog-close>
                        Discard
                    </button>
                    <button btn matRipple class="w-32" (click)="save()">
                        Save
                    </button>
                </footer>
            }
            @if (!loading()) {
                <button
                    icon
                    matRipple
                    mat-dialog-close
                    class="absolute top-2 right-2"
                >
                    <icon>close</icon>
                </button>
            }
        </div>
    `, imports: [
      FormsModule,
      MatRippleModule,
      MatDialogModule,
      MatProgressSpinnerModule,
      MatCheckboxModule,
      IconComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppSettingsModalComponent, { className: "AppSettingsModalComponent", filePath: "apps/concierge/src/app/ui/app-settings-modal.component.ts", lineNumber: 216 });
})();

// node_modules/yaml/browser/dist/nodes/identity.js
var ALIAS = /* @__PURE__ */ Symbol.for("yaml.alias");
var DOC = /* @__PURE__ */ Symbol.for("yaml.document");
var MAP = /* @__PURE__ */ Symbol.for("yaml.map");
var PAIR = /* @__PURE__ */ Symbol.for("yaml.pair");
var SCALAR = /* @__PURE__ */ Symbol.for("yaml.scalar");
var SEQ = /* @__PURE__ */ Symbol.for("yaml.seq");
var NODE_TYPE = /* @__PURE__ */ Symbol.for("yaml.node.type");
var isAlias = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === ALIAS;
var isDocument = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === DOC;
var isMap = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === MAP;
var isPair = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === PAIR;
var isScalar = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === SCALAR;
var isSeq = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === SEQ;
function isCollection(node) {
  if (node && typeof node === "object")
    switch (node[NODE_TYPE]) {
      case MAP:
      case SEQ:
        return true;
    }
  return false;
}
function isNode(node) {
  if (node && typeof node === "object")
    switch (node[NODE_TYPE]) {
      case ALIAS:
      case MAP:
      case SCALAR:
      case SEQ:
        return true;
    }
  return false;
}
var hasAnchor = (node) => (isScalar(node) || isCollection(node)) && !!node.anchor;

// node_modules/yaml/browser/dist/visit.js
var BREAK = /* @__PURE__ */ Symbol("break visit");
var SKIP = /* @__PURE__ */ Symbol("skip children");
var REMOVE = /* @__PURE__ */ Symbol("remove node");
function visit(node, visitor) {
  const visitor_ = initVisitor(visitor);
  if (isDocument(node)) {
    const cd = visit_(null, node.contents, visitor_, Object.freeze([node]));
    if (cd === REMOVE)
      node.contents = null;
  } else
    visit_(null, node, visitor_, Object.freeze([]));
}
visit.BREAK = BREAK;
visit.SKIP = SKIP;
visit.REMOVE = REMOVE;
function visit_(key, node, visitor, path) {
  const ctrl = callVisitor(key, node, visitor, path);
  if (isNode(ctrl) || isPair(ctrl)) {
    replaceNode(key, path, ctrl);
    return visit_(key, ctrl, visitor, path);
  }
  if (typeof ctrl !== "symbol") {
    if (isCollection(node)) {
      path = Object.freeze(path.concat(node));
      for (let i = 0; i < node.items.length; ++i) {
        const ci = visit_(i, node.items[i], visitor, path);
        if (typeof ci === "number")
          i = ci - 1;
        else if (ci === BREAK)
          return BREAK;
        else if (ci === REMOVE) {
          node.items.splice(i, 1);
          i -= 1;
        }
      }
    } else if (isPair(node)) {
      path = Object.freeze(path.concat(node));
      const ck = visit_("key", node.key, visitor, path);
      if (ck === BREAK)
        return BREAK;
      else if (ck === REMOVE)
        node.key = null;
      const cv = visit_("value", node.value, visitor, path);
      if (cv === BREAK)
        return BREAK;
      else if (cv === REMOVE)
        node.value = null;
    }
  }
  return ctrl;
}
async function visitAsync(node, visitor) {
  const visitor_ = initVisitor(visitor);
  if (isDocument(node)) {
    const cd = await visitAsync_(null, node.contents, visitor_, Object.freeze([node]));
    if (cd === REMOVE)
      node.contents = null;
  } else
    await visitAsync_(null, node, visitor_, Object.freeze([]));
}
visitAsync.BREAK = BREAK;
visitAsync.SKIP = SKIP;
visitAsync.REMOVE = REMOVE;
async function visitAsync_(key, node, visitor, path) {
  const ctrl = await callVisitor(key, node, visitor, path);
  if (isNode(ctrl) || isPair(ctrl)) {
    replaceNode(key, path, ctrl);
    return visitAsync_(key, ctrl, visitor, path);
  }
  if (typeof ctrl !== "symbol") {
    if (isCollection(node)) {
      path = Object.freeze(path.concat(node));
      for (let i = 0; i < node.items.length; ++i) {
        const ci = await visitAsync_(i, node.items[i], visitor, path);
        if (typeof ci === "number")
          i = ci - 1;
        else if (ci === BREAK)
          return BREAK;
        else if (ci === REMOVE) {
          node.items.splice(i, 1);
          i -= 1;
        }
      }
    } else if (isPair(node)) {
      path = Object.freeze(path.concat(node));
      const ck = await visitAsync_("key", node.key, visitor, path);
      if (ck === BREAK)
        return BREAK;
      else if (ck === REMOVE)
        node.key = null;
      const cv = await visitAsync_("value", node.value, visitor, path);
      if (cv === BREAK)
        return BREAK;
      else if (cv === REMOVE)
        node.value = null;
    }
  }
  return ctrl;
}
function initVisitor(visitor) {
  if (typeof visitor === "object" && (visitor.Collection || visitor.Node || visitor.Value)) {
    return Object.assign({
      Alias: visitor.Node,
      Map: visitor.Node,
      Scalar: visitor.Node,
      Seq: visitor.Node
    }, visitor.Value && {
      Map: visitor.Value,
      Scalar: visitor.Value,
      Seq: visitor.Value
    }, visitor.Collection && {
      Map: visitor.Collection,
      Seq: visitor.Collection
    }, visitor);
  }
  return visitor;
}
function callVisitor(key, node, visitor, path) {
  if (typeof visitor === "function")
    return visitor(key, node, path);
  if (isMap(node))
    return visitor.Map?.(key, node, path);
  if (isSeq(node))
    return visitor.Seq?.(key, node, path);
  if (isPair(node))
    return visitor.Pair?.(key, node, path);
  if (isScalar(node))
    return visitor.Scalar?.(key, node, path);
  if (isAlias(node))
    return visitor.Alias?.(key, node, path);
  return void 0;
}
function replaceNode(key, path, node) {
  const parent = path[path.length - 1];
  if (isCollection(parent)) {
    parent.items[key] = node;
  } else if (isPair(parent)) {
    if (key === "key")
      parent.key = node;
    else
      parent.value = node;
  } else if (isDocument(parent)) {
    parent.contents = node;
  } else {
    const pt = isAlias(parent) ? "alias" : "scalar";
    throw new Error(`Cannot replace node with ${pt} parent`);
  }
}

// node_modules/yaml/browser/dist/doc/directives.js
var escapeChars = {
  "!": "%21",
  ",": "%2C",
  "[": "%5B",
  "]": "%5D",
  "{": "%7B",
  "}": "%7D"
};
var escapeTagName = (tn) => tn.replace(/[!,[\]{}]/g, (ch) => escapeChars[ch]);
var Directives = class _Directives {
  constructor(yaml, tags) {
    this.docStart = null;
    this.docEnd = false;
    this.yaml = Object.assign({}, _Directives.defaultYaml, yaml);
    this.tags = Object.assign({}, _Directives.defaultTags, tags);
  }
  clone() {
    const copy = new _Directives(this.yaml, this.tags);
    copy.docStart = this.docStart;
    return copy;
  }
  /**
   * During parsing, get a Directives instance for the current document and
   * update the stream state according to the current version's spec.
   */
  atDocument() {
    const res = new _Directives(this.yaml, this.tags);
    switch (this.yaml.version) {
      case "1.1":
        this.atNextDocument = true;
        break;
      case "1.2":
        this.atNextDocument = false;
        this.yaml = {
          explicit: _Directives.defaultYaml.explicit,
          version: "1.2"
        };
        this.tags = Object.assign({}, _Directives.defaultTags);
        break;
    }
    return res;
  }
  /**
   * @param onError - May be called even if the action was successful
   * @returns `true` on success
   */
  add(line, onError) {
    if (this.atNextDocument) {
      this.yaml = { explicit: _Directives.defaultYaml.explicit, version: "1.1" };
      this.tags = Object.assign({}, _Directives.defaultTags);
      this.atNextDocument = false;
    }
    const parts = line.trim().split(/[ \t]+/);
    const name = parts.shift();
    switch (name) {
      case "%TAG": {
        if (parts.length !== 2) {
          onError(0, "%TAG directive should contain exactly two parts");
          if (parts.length < 2)
            return false;
        }
        const [handle, prefix] = parts;
        this.tags[handle] = prefix;
        return true;
      }
      case "%YAML": {
        this.yaml.explicit = true;
        if (parts.length !== 1) {
          onError(0, "%YAML directive should contain exactly one part");
          return false;
        }
        const [version] = parts;
        if (version === "1.1" || version === "1.2") {
          this.yaml.version = version;
          return true;
        } else {
          const isValid = /^\d+\.\d+$/.test(version);
          onError(6, `Unsupported YAML version ${version}`, isValid);
          return false;
        }
      }
      default:
        onError(0, `Unknown directive ${name}`, true);
        return false;
    }
  }
  /**
   * Resolves a tag, matching handles to those defined in %TAG directives.
   *
   * @returns Resolved tag, which may also be the non-specific tag `'!'` or a
   *   `'!local'` tag, or `null` if unresolvable.
   */
  tagName(source, onError) {
    if (source === "!")
      return "!";
    if (source[0] !== "!") {
      onError(`Not a valid tag: ${source}`);
      return null;
    }
    if (source[1] === "<") {
      const verbatim = source.slice(2, -1);
      if (verbatim === "!" || verbatim === "!!") {
        onError(`Verbatim tags aren't resolved, so ${source} is invalid.`);
        return null;
      }
      if (source[source.length - 1] !== ">")
        onError("Verbatim tags must end with a >");
      return verbatim;
    }
    const [, handle, suffix] = source.match(/^(.*!)([^!]*)$/s);
    if (!suffix)
      onError(`The ${source} tag has no suffix`);
    const prefix = this.tags[handle];
    if (prefix) {
      try {
        return prefix + decodeURIComponent(suffix);
      } catch (error) {
        onError(String(error));
        return null;
      }
    }
    if (handle === "!")
      return source;
    onError(`Could not resolve tag: ${source}`);
    return null;
  }
  /**
   * Given a fully resolved tag, returns its printable string form,
   * taking into account current tag prefixes and defaults.
   */
  tagString(tag) {
    for (const [handle, prefix] of Object.entries(this.tags)) {
      if (tag.startsWith(prefix))
        return handle + escapeTagName(tag.substring(prefix.length));
    }
    return tag[0] === "!" ? tag : `!<${tag}>`;
  }
  toString(doc) {
    const lines = this.yaml.explicit ? [`%YAML ${this.yaml.version || "1.2"}`] : [];
    const tagEntries = Object.entries(this.tags);
    let tagNames;
    if (doc && tagEntries.length > 0 && isNode(doc.contents)) {
      const tags = {};
      visit(doc.contents, (_key, node) => {
        if (isNode(node) && node.tag)
          tags[node.tag] = true;
      });
      tagNames = Object.keys(tags);
    } else
      tagNames = [];
    for (const [handle, prefix] of tagEntries) {
      if (handle === "!!" && prefix === "tag:yaml.org,2002:")
        continue;
      if (!doc || tagNames.some((tn) => tn.startsWith(prefix)))
        lines.push(`%TAG ${handle} ${prefix}`);
    }
    return lines.join("\n");
  }
};
Directives.defaultYaml = { explicit: false, version: "1.2" };
Directives.defaultTags = { "!!": "tag:yaml.org,2002:" };

// node_modules/yaml/browser/dist/doc/anchors.js
function anchorIsValid(anchor) {
  if (/[\x00-\x19\s,[\]{}]/.test(anchor)) {
    const sa = JSON.stringify(anchor);
    const msg = `Anchor must not contain whitespace or control characters: ${sa}`;
    throw new Error(msg);
  }
  return true;
}
function anchorNames(root) {
  const anchors = /* @__PURE__ */ new Set();
  visit(root, {
    Value(_key, node) {
      if (node.anchor)
        anchors.add(node.anchor);
    }
  });
  return anchors;
}
function findNewAnchor(prefix, exclude) {
  for (let i = 1; true; ++i) {
    const name = `${prefix}${i}`;
    if (!exclude.has(name))
      return name;
  }
}
function createNodeAnchors(doc, prefix) {
  const aliasObjects = [];
  const sourceObjects = /* @__PURE__ */ new Map();
  let prevAnchors = null;
  return {
    onAnchor: (source) => {
      aliasObjects.push(source);
      prevAnchors ?? (prevAnchors = anchorNames(doc));
      const anchor = findNewAnchor(prefix, prevAnchors);
      prevAnchors.add(anchor);
      return anchor;
    },
    /**
     * With circular references, the source node is only resolved after all
     * of its child nodes are. This is why anchors are set only after all of
     * the nodes have been created.
     */
    setAnchors: () => {
      for (const source of aliasObjects) {
        const ref = sourceObjects.get(source);
        if (typeof ref === "object" && ref.anchor && (isScalar(ref.node) || isCollection(ref.node))) {
          ref.node.anchor = ref.anchor;
        } else {
          const error = new Error("Failed to resolve repeated object (this should not happen)");
          error.source = source;
          throw error;
        }
      }
    },
    sourceObjects
  };
}

// node_modules/yaml/browser/dist/doc/applyReviver.js
function applyReviver(reviver, obj, key, val) {
  if (val && typeof val === "object") {
    if (Array.isArray(val)) {
      for (let i = 0, len = val.length; i < len; ++i) {
        const v0 = val[i];
        const v1 = applyReviver(reviver, val, String(i), v0);
        if (v1 === void 0)
          delete val[i];
        else if (v1 !== v0)
          val[i] = v1;
      }
    } else if (val instanceof Map) {
      for (const k of Array.from(val.keys())) {
        const v0 = val.get(k);
        const v1 = applyReviver(reviver, val, k, v0);
        if (v1 === void 0)
          val.delete(k);
        else if (v1 !== v0)
          val.set(k, v1);
      }
    } else if (val instanceof Set) {
      for (const v0 of Array.from(val)) {
        const v1 = applyReviver(reviver, val, v0, v0);
        if (v1 === void 0)
          val.delete(v0);
        else if (v1 !== v0) {
          val.delete(v0);
          val.add(v1);
        }
      }
    } else {
      for (const [k, v0] of Object.entries(val)) {
        const v1 = applyReviver(reviver, val, k, v0);
        if (v1 === void 0)
          delete val[k];
        else if (v1 !== v0)
          val[k] = v1;
      }
    }
  }
  return reviver.call(obj, key, val);
}

// node_modules/yaml/browser/dist/nodes/toJS.js
function toJS(value, arg, ctx) {
  if (Array.isArray(value))
    return value.map((v, i) => toJS(v, String(i), ctx));
  if (value && typeof value.toJSON === "function") {
    if (!ctx || !hasAnchor(value))
      return value.toJSON(arg, ctx);
    const data = { aliasCount: 0, count: 1, res: void 0 };
    ctx.anchors.set(value, data);
    ctx.onCreate = (res2) => {
      data.res = res2;
      delete ctx.onCreate;
    };
    const res = value.toJSON(arg, ctx);
    if (ctx.onCreate)
      ctx.onCreate(res);
    return res;
  }
  if (typeof value === "bigint" && !ctx?.keep)
    return Number(value);
  return value;
}

// node_modules/yaml/browser/dist/nodes/Node.js
var NodeBase = class {
  constructor(type) {
    Object.defineProperty(this, NODE_TYPE, { value: type });
  }
  /** Create a copy of this node.  */
  clone() {
    const copy = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
    if (this.range)
      copy.range = this.range.slice();
    return copy;
  }
  /** A plain JavaScript representation of this node. */
  toJS(doc, { mapAsMap, maxAliasCount, onAnchor, reviver } = {}) {
    if (!isDocument(doc))
      throw new TypeError("A document argument is required");
    const ctx = {
      anchors: /* @__PURE__ */ new Map(),
      doc,
      keep: true,
      mapAsMap: mapAsMap === true,
      mapKeyWarned: false,
      maxAliasCount: typeof maxAliasCount === "number" ? maxAliasCount : 100
    };
    const res = toJS(this, "", ctx);
    if (typeof onAnchor === "function")
      for (const { count, res: res2 } of ctx.anchors.values())
        onAnchor(res2, count);
    return typeof reviver === "function" ? applyReviver(reviver, { "": res }, "", res) : res;
  }
};

// node_modules/yaml/browser/dist/nodes/Alias.js
var Alias = class extends NodeBase {
  constructor(source) {
    super(ALIAS);
    this.source = source;
    Object.defineProperty(this, "tag", {
      set() {
        throw new Error("Alias nodes cannot have tags");
      }
    });
  }
  /**
   * Resolve the value of this alias within `doc`, finding the last
   * instance of the `source` anchor before this node.
   */
  resolve(doc, ctx) {
    if (ctx?.maxAliasCount === 0)
      throw new ReferenceError("Alias resolution is disabled");
    let nodes;
    if (ctx?.aliasResolveCache) {
      nodes = ctx.aliasResolveCache;
    } else {
      nodes = [];
      visit(doc, {
        Node: (_key, node) => {
          if (isAlias(node) || hasAnchor(node))
            nodes.push(node);
        }
      });
      if (ctx)
        ctx.aliasResolveCache = nodes;
    }
    let found = void 0;
    for (const node of nodes) {
      if (node === this)
        break;
      if (node.anchor === this.source)
        found = node;
    }
    return found;
  }
  toJSON(_arg, ctx) {
    if (!ctx)
      return { source: this.source };
    const { anchors, doc, maxAliasCount } = ctx;
    const source = this.resolve(doc, ctx);
    if (!source) {
      const msg = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
      throw new ReferenceError(msg);
    }
    let data = anchors.get(source);
    if (!data) {
      toJS(source, null, ctx);
      data = anchors.get(source);
    }
    if (data?.res === void 0) {
      const msg = "This should not happen: Alias anchor was not resolved?";
      throw new ReferenceError(msg);
    }
    if (maxAliasCount >= 0) {
      data.count += 1;
      if (data.aliasCount === 0)
        data.aliasCount = getAliasCount(doc, source, anchors);
      if (data.count * data.aliasCount > maxAliasCount) {
        const msg = "Excessive alias count indicates a resource exhaustion attack";
        throw new ReferenceError(msg);
      }
    }
    return data.res;
  }
  toString(ctx, _onComment, _onChompKeep) {
    const src = `*${this.source}`;
    if (ctx) {
      anchorIsValid(this.source);
      if (ctx.options.verifyAliasOrder && !ctx.anchors.has(this.source)) {
        const msg = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
        throw new Error(msg);
      }
      if (ctx.implicitKey)
        return `${src} `;
    }
    return src;
  }
};
function getAliasCount(doc, node, anchors) {
  if (isAlias(node)) {
    const source = node.resolve(doc);
    const anchor = anchors && source && anchors.get(source);
    return anchor ? anchor.count * anchor.aliasCount : 0;
  } else if (isCollection(node)) {
    let count = 0;
    for (const item of node.items) {
      const c = getAliasCount(doc, item, anchors);
      if (c > count)
        count = c;
    }
    return count;
  } else if (isPair(node)) {
    const kc = getAliasCount(doc, node.key, anchors);
    const vc = getAliasCount(doc, node.value, anchors);
    return Math.max(kc, vc);
  }
  return 1;
}

// node_modules/yaml/browser/dist/nodes/Scalar.js
var isScalarValue = (value) => !value || typeof value !== "function" && typeof value !== "object";
var Scalar = class extends NodeBase {
  constructor(value) {
    super(SCALAR);
    this.value = value;
  }
  toJSON(arg, ctx) {
    return ctx?.keep ? this.value : toJS(this.value, arg, ctx);
  }
  toString() {
    return String(this.value);
  }
};
Scalar.BLOCK_FOLDED = "BLOCK_FOLDED";
Scalar.BLOCK_LITERAL = "BLOCK_LITERAL";
Scalar.PLAIN = "PLAIN";
Scalar.QUOTE_DOUBLE = "QUOTE_DOUBLE";
Scalar.QUOTE_SINGLE = "QUOTE_SINGLE";

// node_modules/yaml/browser/dist/doc/createNode.js
var defaultTagPrefix = "tag:yaml.org,2002:";
function findTagObject(value, tagName, tags) {
  if (tagName) {
    const match = tags.filter((t) => t.tag === tagName);
    const tagObj = match.find((t) => !t.format) ?? match[0];
    if (!tagObj)
      throw new Error(`Tag ${tagName} not found`);
    return tagObj;
  }
  return tags.find((t) => t.identify?.(value) && !t.format);
}
function createNode(value, tagName, ctx) {
  if (isDocument(value))
    value = value.contents;
  if (isNode(value))
    return value;
  if (isPair(value)) {
    const map2 = ctx.schema[MAP].createNode?.(ctx.schema, null, ctx);
    map2.items.push(value);
    return map2;
  }
  if (value instanceof String || value instanceof Number || value instanceof Boolean || typeof BigInt !== "undefined" && value instanceof BigInt) {
    value = value.valueOf();
  }
  const { aliasDuplicateObjects, onAnchor, onTagObj, schema: schema4, sourceObjects } = ctx;
  let ref = void 0;
  if (aliasDuplicateObjects && value && typeof value === "object") {
    ref = sourceObjects.get(value);
    if (ref) {
      ref.anchor ?? (ref.anchor = onAnchor(value));
      return new Alias(ref.anchor);
    } else {
      ref = { anchor: null, node: null };
      sourceObjects.set(value, ref);
    }
  }
  if (tagName?.startsWith("!!"))
    tagName = defaultTagPrefix + tagName.slice(2);
  let tagObj = findTagObject(value, tagName, schema4.tags);
  if (!tagObj) {
    if (value && typeof value.toJSON === "function") {
      value = value.toJSON();
    }
    if (!value || typeof value !== "object") {
      const node2 = new Scalar(value);
      if (ref)
        ref.node = node2;
      return node2;
    }
    tagObj = value instanceof Map ? schema4[MAP] : Symbol.iterator in Object(value) ? schema4[SEQ] : schema4[MAP];
  }
  if (onTagObj) {
    onTagObj(tagObj);
    delete ctx.onTagObj;
  }
  const node = tagObj?.createNode ? tagObj.createNode(ctx.schema, value, ctx) : typeof tagObj?.nodeClass?.from === "function" ? tagObj.nodeClass.from(ctx.schema, value, ctx) : new Scalar(value);
  if (tagName)
    node.tag = tagName;
  else if (!tagObj.default)
    node.tag = tagObj.tag;
  if (ref)
    ref.node = node;
  return node;
}

// node_modules/yaml/browser/dist/nodes/Collection.js
function collectionFromPath(schema4, path, value) {
  let v = value;
  for (let i = path.length - 1; i >= 0; --i) {
    const k = path[i];
    if (typeof k === "number" && Number.isInteger(k) && k >= 0) {
      const a = [];
      a[k] = v;
      v = a;
    } else {
      v = /* @__PURE__ */ new Map([[k, v]]);
    }
  }
  return createNode(v, void 0, {
    aliasDuplicateObjects: false,
    keepUndefined: false,
    onAnchor: () => {
      throw new Error("This should not happen, please report a bug.");
    },
    schema: schema4,
    sourceObjects: /* @__PURE__ */ new Map()
  });
}
var isEmptyPath = (path) => path == null || typeof path === "object" && !!path[Symbol.iterator]().next().done;
var Collection = class extends NodeBase {
  constructor(type, schema4) {
    super(type);
    Object.defineProperty(this, "schema", {
      value: schema4,
      configurable: true,
      enumerable: false,
      writable: true
    });
  }
  /**
   * Create a copy of this collection.
   *
   * @param schema - If defined, overwrites the original's schema
   */
  clone(schema4) {
    const copy = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
    if (schema4)
      copy.schema = schema4;
    copy.items = copy.items.map((it) => isNode(it) || isPair(it) ? it.clone(schema4) : it);
    if (this.range)
      copy.range = this.range.slice();
    return copy;
  }
  /**
   * Adds a value to the collection. For `!!map` and `!!omap` the value must
   * be a Pair instance or a `{ key, value }` object, which may not have a key
   * that already exists in the map.
   */
  addIn(path, value) {
    if (isEmptyPath(path))
      this.add(value);
    else {
      const [key, ...rest] = path;
      const node = this.get(key, true);
      if (isCollection(node))
        node.addIn(rest, value);
      else if (node === void 0 && this.schema)
        this.set(key, collectionFromPath(this.schema, rest, value));
      else
        throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
    }
  }
  /**
   * Removes a value from the collection.
   * @returns `true` if the item was found and removed.
   */
  deleteIn(path) {
    const [key, ...rest] = path;
    if (rest.length === 0)
      return this.delete(key);
    const node = this.get(key, true);
    if (isCollection(node))
      return node.deleteIn(rest);
    else
      throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
  }
  /**
   * Returns item at `key`, or `undefined` if not found. By default unwraps
   * scalar values from their surrounding node; to disable set `keepScalar` to
   * `true` (collections are always returned intact).
   */
  getIn(path, keepScalar) {
    const [key, ...rest] = path;
    const node = this.get(key, true);
    if (rest.length === 0)
      return !keepScalar && isScalar(node) ? node.value : node;
    else
      return isCollection(node) ? node.getIn(rest, keepScalar) : void 0;
  }
  hasAllNullValues(allowScalar) {
    return this.items.every((node) => {
      if (!isPair(node))
        return false;
      const n = node.value;
      return n == null || allowScalar && isScalar(n) && n.value == null && !n.commentBefore && !n.comment && !n.tag;
    });
  }
  /**
   * Checks if the collection includes a value with the key `key`.
   */
  hasIn(path) {
    const [key, ...rest] = path;
    if (rest.length === 0)
      return this.has(key);
    const node = this.get(key, true);
    return isCollection(node) ? node.hasIn(rest) : false;
  }
  /**
   * Sets a value in this collection. For `!!set`, `value` needs to be a
   * boolean to add/remove the item from the set.
   */
  setIn(path, value) {
    const [key, ...rest] = path;
    if (rest.length === 0) {
      this.set(key, value);
    } else {
      const node = this.get(key, true);
      if (isCollection(node))
        node.setIn(rest, value);
      else if (node === void 0 && this.schema)
        this.set(key, collectionFromPath(this.schema, rest, value));
      else
        throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
    }
  }
};

// node_modules/yaml/browser/dist/stringify/stringifyComment.js
var stringifyComment = (str) => str.replace(/^(?!$)(?: $)?/gm, "#");
function indentComment(comment, indent) {
  if (/^\n+$/.test(comment))
    return comment.substring(1);
  return indent ? comment.replace(/^(?! *$)/gm, indent) : comment;
}
var lineComment = (str, indent, comment) => str.endsWith("\n") ? indentComment(comment, indent) : comment.includes("\n") ? "\n" + indentComment(comment, indent) : (str.endsWith(" ") ? "" : " ") + comment;

// node_modules/yaml/browser/dist/stringify/foldFlowLines.js
var FOLD_FLOW = "flow";
var FOLD_BLOCK = "block";
var FOLD_QUOTED = "quoted";
function foldFlowLines(text, indent, mode = "flow", { indentAtStart, lineWidth = 80, minContentWidth = 20, onFold, onOverflow } = {}) {
  if (!lineWidth || lineWidth < 0)
    return text;
  if (lineWidth < minContentWidth)
    minContentWidth = 0;
  const endStep = Math.max(1 + minContentWidth, 1 + lineWidth - indent.length);
  if (text.length <= endStep)
    return text;
  const folds = [];
  const escapedFolds = {};
  let end = lineWidth - indent.length;
  if (typeof indentAtStart === "number") {
    if (indentAtStart > lineWidth - Math.max(2, minContentWidth))
      folds.push(0);
    else
      end = lineWidth - indentAtStart;
  }
  let split = void 0;
  let prev = void 0;
  let overflow = false;
  let i = -1;
  let escStart = -1;
  let escEnd = -1;
  if (mode === FOLD_BLOCK) {
    i = consumeMoreIndentedLines(text, i, indent.length);
    if (i !== -1)
      end = i + endStep;
  }
  for (let ch; ch = text[i += 1]; ) {
    if (mode === FOLD_QUOTED && ch === "\\") {
      escStart = i;
      switch (text[i + 1]) {
        case "x":
          i += 3;
          break;
        case "u":
          i += 5;
          break;
        case "U":
          i += 9;
          break;
        default:
          i += 1;
      }
      escEnd = i;
    }
    if (ch === "\n") {
      if (mode === FOLD_BLOCK)
        i = consumeMoreIndentedLines(text, i, indent.length);
      end = i + indent.length + endStep;
      split = void 0;
    } else {
      if (ch === " " && prev && prev !== " " && prev !== "\n" && prev !== "	") {
        const next = text[i + 1];
        if (next && next !== " " && next !== "\n" && next !== "	")
          split = i;
      }
      if (i >= end) {
        if (split) {
          folds.push(split);
          end = split + endStep;
          split = void 0;
        } else if (mode === FOLD_QUOTED) {
          while (prev === " " || prev === "	") {
            prev = ch;
            ch = text[i += 1];
            overflow = true;
          }
          const j = i > escEnd + 1 ? i - 2 : escStart - 1;
          if (escapedFolds[j])
            return text;
          folds.push(j);
          escapedFolds[j] = true;
          end = j + endStep;
          split = void 0;
        } else {
          overflow = true;
        }
      }
    }
    prev = ch;
  }
  if (overflow && onOverflow)
    onOverflow();
  if (folds.length === 0)
    return text;
  if (onFold)
    onFold();
  let res = text.slice(0, folds[0]);
  for (let i2 = 0; i2 < folds.length; ++i2) {
    const fold = folds[i2];
    const end2 = folds[i2 + 1] || text.length;
    if (fold === 0)
      res = `
${indent}${text.slice(0, end2)}`;
    else {
      if (mode === FOLD_QUOTED && escapedFolds[fold])
        res += `${text[fold]}\\`;
      res += `
${indent}${text.slice(fold + 1, end2)}`;
    }
  }
  return res;
}
function consumeMoreIndentedLines(text, i, indent) {
  let end = i;
  let start = i + 1;
  let ch = text[start];
  while (ch === " " || ch === "	") {
    if (i < start + indent) {
      ch = text[++i];
    } else {
      do {
        ch = text[++i];
      } while (ch && ch !== "\n");
      end = i;
      start = i + 1;
      ch = text[start];
    }
  }
  return end;
}

// node_modules/yaml/browser/dist/stringify/stringifyString.js
var getFoldOptions = (ctx, isBlock2) => ({
  indentAtStart: isBlock2 ? ctx.indent.length : ctx.indentAtStart,
  lineWidth: ctx.options.lineWidth,
  minContentWidth: ctx.options.minContentWidth
});
var containsDocumentMarker = (str) => /^(%|---|\.\.\.)/m.test(str);
function lineLengthOverLimit(str, lineWidth, indentLength) {
  if (!lineWidth || lineWidth < 0)
    return false;
  const limit = lineWidth - indentLength;
  const strLen = str.length;
  if (strLen <= limit)
    return false;
  for (let i = 0, start = 0; i < strLen; ++i) {
    if (str[i] === "\n") {
      if (i - start > limit)
        return true;
      start = i + 1;
      if (strLen - start <= limit)
        return false;
    }
  }
  return true;
}
function doubleQuotedString(value, ctx) {
  const json = JSON.stringify(value);
  if (ctx.options.doubleQuotedAsJSON)
    return json;
  const { implicitKey } = ctx;
  const minMultiLineLength = ctx.options.doubleQuotedMinMultiLineLength;
  const indent = ctx.indent || (containsDocumentMarker(value) ? "  " : "");
  let str = "";
  let start = 0;
  for (let i = 0, ch = json[i]; ch; ch = json[++i]) {
    if (ch === " " && json[i + 1] === "\\" && json[i + 2] === "n") {
      str += json.slice(start, i) + "\\ ";
      i += 1;
      start = i;
      ch = "\\";
    }
    if (ch === "\\")
      switch (json[i + 1]) {
        case "u":
          {
            str += json.slice(start, i);
            const code = json.substr(i + 2, 4);
            switch (code) {
              case "0000":
                str += "\\0";
                break;
              case "0007":
                str += "\\a";
                break;
              case "000b":
                str += "\\v";
                break;
              case "001b":
                str += "\\e";
                break;
              case "0085":
                str += "\\N";
                break;
              case "00a0":
                str += "\\_";
                break;
              case "2028":
                str += "\\L";
                break;
              case "2029":
                str += "\\P";
                break;
              default:
                if (code.substr(0, 2) === "00")
                  str += "\\x" + code.substr(2);
                else
                  str += json.substr(i, 6);
            }
            i += 5;
            start = i + 1;
          }
          break;
        case "n":
          if (implicitKey || json[i + 2] === '"' || json.length < minMultiLineLength) {
            i += 1;
          } else {
            str += json.slice(start, i) + "\n\n";
            while (json[i + 2] === "\\" && json[i + 3] === "n" && json[i + 4] !== '"') {
              str += "\n";
              i += 2;
            }
            str += indent;
            if (json[i + 2] === " ")
              str += "\\";
            i += 1;
            start = i + 1;
          }
          break;
        default:
          i += 1;
      }
  }
  str = start ? str + json.slice(start) : json;
  return implicitKey ? str : foldFlowLines(str, indent, FOLD_QUOTED, getFoldOptions(ctx, false));
}
function singleQuotedString(value, ctx) {
  if (ctx.options.singleQuote === false || ctx.implicitKey && value.includes("\n") || /[ \t]\n|\n[ \t]/.test(value))
    return doubleQuotedString(value, ctx);
  const indent = ctx.indent || (containsDocumentMarker(value) ? "  " : "");
  const res = "'" + value.replace(/'/g, "''").replace(/\n+/g, `$&
${indent}`) + "'";
  return ctx.implicitKey ? res : foldFlowLines(res, indent, FOLD_FLOW, getFoldOptions(ctx, false));
}
function quotedString(value, ctx) {
  const { singleQuote } = ctx.options;
  let qs;
  if (singleQuote === false)
    qs = doubleQuotedString;
  else {
    const hasDouble = value.includes('"');
    const hasSingle = value.includes("'");
    if (hasDouble && !hasSingle)
      qs = singleQuotedString;
    else if (hasSingle && !hasDouble)
      qs = doubleQuotedString;
    else
      qs = singleQuote ? singleQuotedString : doubleQuotedString;
  }
  return qs(value, ctx);
}
var blockEndNewlines;
try {
  blockEndNewlines = new RegExp("(^|(?<!\n))\n+(?!\n|$)", "g");
} catch {
  blockEndNewlines = /\n+(?!\n|$)/g;
}
function blockString({ comment, type, value }, ctx, onComment, onChompKeep) {
  const { blockQuote, commentString, lineWidth } = ctx.options;
  if (!blockQuote || /\n[\t ]+$/.test(value)) {
    return quotedString(value, ctx);
  }
  const indent = ctx.indent || (ctx.forceBlockIndent || containsDocumentMarker(value) ? "  " : "");
  const literal = blockQuote === "literal" ? true : blockQuote === "folded" || type === Scalar.BLOCK_FOLDED ? false : type === Scalar.BLOCK_LITERAL ? true : !lineLengthOverLimit(value, lineWidth, indent.length);
  if (!value)
    return literal ? "|\n" : ">\n";
  let chomp;
  let endStart;
  for (endStart = value.length; endStart > 0; --endStart) {
    const ch = value[endStart - 1];
    if (ch !== "\n" && ch !== "	" && ch !== " ")
      break;
  }
  let end = value.substring(endStart);
  const endNlPos = end.indexOf("\n");
  if (endNlPos === -1) {
    chomp = "-";
  } else if (value === end || endNlPos !== end.length - 1) {
    chomp = "+";
    if (onChompKeep)
      onChompKeep();
  } else {
    chomp = "";
  }
  if (end) {
    value = value.slice(0, -end.length);
    if (end[end.length - 1] === "\n")
      end = end.slice(0, -1);
    end = end.replace(blockEndNewlines, `$&${indent}`);
  }
  let startWithSpace = false;
  let startEnd;
  let startNlPos = -1;
  for (startEnd = 0; startEnd < value.length; ++startEnd) {
    const ch = value[startEnd];
    if (ch === " ")
      startWithSpace = true;
    else if (ch === "\n")
      startNlPos = startEnd;
    else
      break;
  }
  let start = value.substring(0, startNlPos < startEnd ? startNlPos + 1 : startEnd);
  if (start) {
    value = value.substring(start.length);
    start = start.replace(/\n+/g, `$&${indent}`);
  }
  const indentSize = indent ? "2" : "1";
  let header = (startWithSpace ? indentSize : "") + chomp;
  if (comment) {
    header += " " + commentString(comment.replace(/ ?[\r\n]+/g, " "));
    if (onComment)
      onComment();
  }
  if (!literal) {
    const foldedValue = value.replace(/\n+/g, "\n$&").replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, "$1$2").replace(/\n+/g, `$&${indent}`);
    let literalFallback = false;
    const foldOptions = getFoldOptions(ctx, true);
    if (blockQuote !== "folded" && type !== Scalar.BLOCK_FOLDED) {
      foldOptions.onOverflow = () => {
        literalFallback = true;
      };
    }
    const body = foldFlowLines(`${start}${foldedValue}${end}`, indent, FOLD_BLOCK, foldOptions);
    if (!literalFallback)
      return `>${header}
${indent}${body}`;
  }
  value = value.replace(/\n+/g, `$&${indent}`);
  return `|${header}
${indent}${start}${value}${end}`;
}
function plainString(item, ctx, onComment, onChompKeep) {
  const { type, value } = item;
  const { actualString, implicitKey, indent, indentStep, inFlow } = ctx;
  if (implicitKey && value.includes("\n") || inFlow && /[[\]{},]/.test(value)) {
    return quotedString(value, ctx);
  }
  if (/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(value)) {
    return implicitKey || inFlow || !value.includes("\n") ? quotedString(value, ctx) : blockString(item, ctx, onComment, onChompKeep);
  }
  if (!implicitKey && !inFlow && type !== Scalar.PLAIN && value.includes("\n")) {
    return blockString(item, ctx, onComment, onChompKeep);
  }
  if (containsDocumentMarker(value)) {
    if (indent === "") {
      ctx.forceBlockIndent = true;
      return blockString(item, ctx, onComment, onChompKeep);
    } else if (implicitKey && indent === indentStep) {
      return quotedString(value, ctx);
    }
  }
  const str = value.replace(/\n+/g, `$&
${indent}`);
  if (actualString) {
    const test = (tag) => tag.default && tag.tag !== "tag:yaml.org,2002:str" && tag.test?.test(str);
    const { compat, tags } = ctx.doc.schema;
    if (tags.some(test) || compat?.some(test))
      return quotedString(value, ctx);
  }
  return implicitKey ? str : foldFlowLines(str, indent, FOLD_FLOW, getFoldOptions(ctx, false));
}
function stringifyString(item, ctx, onComment, onChompKeep) {
  const { implicitKey, inFlow } = ctx;
  const ss = typeof item.value === "string" ? item : Object.assign({}, item, { value: String(item.value) });
  let { type } = item;
  if (type !== Scalar.QUOTE_DOUBLE) {
    if (/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(ss.value))
      type = Scalar.QUOTE_DOUBLE;
  }
  const _stringify = (_type) => {
    switch (_type) {
      case Scalar.BLOCK_FOLDED:
      case Scalar.BLOCK_LITERAL:
        return implicitKey || inFlow ? quotedString(ss.value, ctx) : blockString(ss, ctx, onComment, onChompKeep);
      case Scalar.QUOTE_DOUBLE:
        return doubleQuotedString(ss.value, ctx);
      case Scalar.QUOTE_SINGLE:
        return singleQuotedString(ss.value, ctx);
      case Scalar.PLAIN:
        return plainString(ss, ctx, onComment, onChompKeep);
      default:
        return null;
    }
  };
  let res = _stringify(type);
  if (res === null) {
    const { defaultKeyType, defaultStringType } = ctx.options;
    const t = implicitKey && defaultKeyType || defaultStringType;
    res = _stringify(t);
    if (res === null)
      throw new Error(`Unsupported default string type ${t}`);
  }
  return res;
}

// node_modules/yaml/browser/dist/stringify/stringify.js
function createStringifyContext(doc, options) {
  const opt = Object.assign({
    blockQuote: true,
    commentString: stringifyComment,
    defaultKeyType: null,
    defaultStringType: "PLAIN",
    directives: null,
    doubleQuotedAsJSON: false,
    doubleQuotedMinMultiLineLength: 40,
    falseStr: "false",
    flowCollectionPadding: true,
    indentSeq: true,
    lineWidth: 80,
    minContentWidth: 20,
    nullStr: "null",
    simpleKeys: false,
    singleQuote: null,
    trailingComma: false,
    trueStr: "true",
    verifyAliasOrder: true
  }, doc.schema.toStringOptions, options);
  let inFlow;
  switch (opt.collectionStyle) {
    case "block":
      inFlow = false;
      break;
    case "flow":
      inFlow = true;
      break;
    default:
      inFlow = null;
  }
  return {
    anchors: /* @__PURE__ */ new Set(),
    doc,
    flowCollectionPadding: opt.flowCollectionPadding ? " " : "",
    indent: "",
    indentStep: typeof opt.indent === "number" ? " ".repeat(opt.indent) : "  ",
    inFlow,
    options: opt
  };
}
function getTagObject(tags, item) {
  if (item.tag) {
    const match = tags.filter((t) => t.tag === item.tag);
    if (match.length > 0)
      return match.find((t) => t.format === item.format) ?? match[0];
  }
  let tagObj = void 0;
  let obj;
  if (isScalar(item)) {
    obj = item.value;
    let match = tags.filter((t) => t.identify?.(obj));
    if (match.length > 1) {
      const testMatch = match.filter((t) => t.test);
      if (testMatch.length > 0)
        match = testMatch;
    }
    tagObj = match.find((t) => t.format === item.format) ?? match.find((t) => !t.format);
  } else {
    obj = item;
    tagObj = tags.find((t) => t.nodeClass && obj instanceof t.nodeClass);
  }
  if (!tagObj) {
    const name = obj?.constructor?.name ?? (obj === null ? "null" : typeof obj);
    throw new Error(`Tag not resolved for ${name} value`);
  }
  return tagObj;
}
function stringifyProps(node, tagObj, { anchors, doc }) {
  if (!doc.directives)
    return "";
  const props = [];
  const anchor = (isScalar(node) || isCollection(node)) && node.anchor;
  if (anchor && anchorIsValid(anchor)) {
    anchors.add(anchor);
    props.push(`&${anchor}`);
  }
  const tag = node.tag ?? (tagObj.default ? null : tagObj.tag);
  if (tag)
    props.push(doc.directives.tagString(tag));
  return props.join(" ");
}
function stringify(item, ctx, onComment, onChompKeep) {
  if (isPair(item))
    return item.toString(ctx, onComment, onChompKeep);
  if (isAlias(item)) {
    if (ctx.doc.directives)
      return item.toString(ctx);
    if (ctx.resolvedAliases?.has(item)) {
      throw new TypeError(`Cannot stringify circular structure without alias nodes`);
    } else {
      if (ctx.resolvedAliases)
        ctx.resolvedAliases.add(item);
      else
        ctx.resolvedAliases = /* @__PURE__ */ new Set([item]);
      item = item.resolve(ctx.doc);
    }
  }
  let tagObj = void 0;
  const node = isNode(item) ? item : ctx.doc.createNode(item, { onTagObj: (o) => tagObj = o });
  tagObj ?? (tagObj = getTagObject(ctx.doc.schema.tags, node));
  const props = stringifyProps(node, tagObj, ctx);
  if (props.length > 0)
    ctx.indentAtStart = (ctx.indentAtStart ?? 0) + props.length + 1;
  const str = typeof tagObj.stringify === "function" ? tagObj.stringify(node, ctx, onComment, onChompKeep) : isScalar(node) ? stringifyString(node, ctx, onComment, onChompKeep) : node.toString(ctx, onComment, onChompKeep);
  if (!props)
    return str;
  return isScalar(node) || str[0] === "{" || str[0] === "[" ? `${props} ${str}` : `${props}
${ctx.indent}${str}`;
}

// node_modules/yaml/browser/dist/stringify/stringifyPair.js
function stringifyPair({ key, value }, ctx, onComment, onChompKeep) {
  const { allNullValues, doc, indent, indentStep, options: { commentString, indentSeq, simpleKeys } } = ctx;
  let keyComment = isNode(key) && key.comment || null;
  if (simpleKeys) {
    if (keyComment) {
      throw new Error("With simple keys, key nodes cannot have comments");
    }
    if (isCollection(key) || !isNode(key) && typeof key === "object") {
      const msg = "With simple keys, collection cannot be used as a key value";
      throw new Error(msg);
    }
  }
  let explicitKey = !simpleKeys && (!key || keyComment && value == null && !ctx.inFlow || isCollection(key) || (isScalar(key) ? key.type === Scalar.BLOCK_FOLDED || key.type === Scalar.BLOCK_LITERAL : typeof key === "object"));
  ctx = Object.assign({}, ctx, {
    allNullValues: false,
    implicitKey: !explicitKey && (simpleKeys || !allNullValues),
    indent: indent + indentStep
  });
  let keyCommentDone = false;
  let chompKeep = false;
  let str = stringify(key, ctx, () => keyCommentDone = true, () => chompKeep = true);
  if (!explicitKey && !ctx.inFlow && str.length > 1024) {
    if (simpleKeys)
      throw new Error("With simple keys, single line scalar must not span more than 1024 characters");
    explicitKey = true;
  }
  if (ctx.inFlow) {
    if (allNullValues || value == null) {
      if (keyCommentDone && onComment)
        onComment();
      return str === "" ? "?" : explicitKey ? `? ${str}` : str;
    }
  } else if (allNullValues && !simpleKeys || value == null && explicitKey) {
    str = `? ${str}`;
    if (keyComment && !keyCommentDone) {
      str += lineComment(str, ctx.indent, commentString(keyComment));
    } else if (chompKeep && onChompKeep)
      onChompKeep();
    return str;
  }
  if (keyCommentDone)
    keyComment = null;
  if (explicitKey) {
    if (keyComment)
      str += lineComment(str, ctx.indent, commentString(keyComment));
    str = `? ${str}
${indent}:`;
  } else {
    str = `${str}:`;
    if (keyComment)
      str += lineComment(str, ctx.indent, commentString(keyComment));
  }
  let vsb, vcb, valueComment;
  if (isNode(value)) {
    vsb = !!value.spaceBefore;
    vcb = value.commentBefore;
    valueComment = value.comment;
  } else {
    vsb = false;
    vcb = null;
    valueComment = null;
    if (value && typeof value === "object")
      value = doc.createNode(value);
  }
  ctx.implicitKey = false;
  if (!explicitKey && !keyComment && isScalar(value))
    ctx.indentAtStart = str.length + 1;
  chompKeep = false;
  if (!indentSeq && indentStep.length >= 2 && !ctx.inFlow && !explicitKey && isSeq(value) && !value.flow && !value.tag && !value.anchor) {
    ctx.indent = ctx.indent.substring(2);
  }
  let valueCommentDone = false;
  const valueStr = stringify(value, ctx, () => valueCommentDone = true, () => chompKeep = true);
  let ws = " ";
  if (keyComment || vsb || vcb) {
    ws = vsb ? "\n" : "";
    if (vcb) {
      const cs = commentString(vcb);
      ws += `
${indentComment(cs, ctx.indent)}`;
    }
    if (valueStr === "" && !ctx.inFlow) {
      if (ws === "\n" && valueComment)
        ws = "\n\n";
    } else {
      ws += `
${ctx.indent}`;
    }
  } else if (!explicitKey && isCollection(value)) {
    const vs0 = valueStr[0];
    const nl0 = valueStr.indexOf("\n");
    const hasNewline = nl0 !== -1;
    const flow = ctx.inFlow ?? value.flow ?? value.items.length === 0;
    if (hasNewline || !flow) {
      let hasPropsLine = false;
      if (hasNewline && (vs0 === "&" || vs0 === "!")) {
        let sp0 = valueStr.indexOf(" ");
        if (vs0 === "&" && sp0 !== -1 && sp0 < nl0 && valueStr[sp0 + 1] === "!") {
          sp0 = valueStr.indexOf(" ", sp0 + 1);
        }
        if (sp0 === -1 || nl0 < sp0)
          hasPropsLine = true;
      }
      if (!hasPropsLine)
        ws = `
${ctx.indent}`;
    }
  } else if (valueStr === "" || valueStr[0] === "\n") {
    ws = "";
  }
  str += ws + valueStr;
  if (ctx.inFlow) {
    if (valueCommentDone && onComment)
      onComment();
  } else if (valueComment && !valueCommentDone) {
    str += lineComment(str, ctx.indent, commentString(valueComment));
  } else if (chompKeep && onChompKeep) {
    onChompKeep();
  }
  return str;
}

// node_modules/yaml/browser/dist/log.js
function warn(logLevel, warning) {
  if (logLevel === "debug" || logLevel === "warn") {
    console.warn(warning);
  }
}

// node_modules/yaml/browser/dist/schema/yaml-1.1/merge.js
var MERGE_KEY = "<<";
var merge = {
  identify: (value) => value === MERGE_KEY || typeof value === "symbol" && value.description === MERGE_KEY,
  default: "key",
  tag: "tag:yaml.org,2002:merge",
  test: /^<<$/,
  resolve: () => Object.assign(new Scalar(Symbol(MERGE_KEY)), {
    addToJSMap: addMergeToJSMap
  }),
  stringify: () => MERGE_KEY
};
var isMergeKey = (ctx, key) => (merge.identify(key) || isScalar(key) && (!key.type || key.type === Scalar.PLAIN) && merge.identify(key.value)) && ctx?.doc.schema.tags.some((tag) => tag.tag === merge.tag && tag.default);
function addMergeToJSMap(ctx, map2, value) {
  const source = resolveAliasValue(ctx, value);
  if (isSeq(source))
    for (const it of source.items)
      mergeValue(ctx, map2, it);
  else if (Array.isArray(source))
    for (const it of source)
      mergeValue(ctx, map2, it);
  else
    mergeValue(ctx, map2, source);
}
function mergeValue(ctx, map2, value) {
  const source = resolveAliasValue(ctx, value);
  if (!isMap(source))
    throw new Error("Merge sources must be maps or map aliases");
  const srcMap = source.toJSON(null, ctx, Map);
  for (const [key, value2] of srcMap) {
    if (map2 instanceof Map) {
      if (!map2.has(key))
        map2.set(key, value2);
    } else if (map2 instanceof Set) {
      map2.add(key);
    } else if (!Object.prototype.hasOwnProperty.call(map2, key)) {
      Object.defineProperty(map2, key, {
        value: value2,
        writable: true,
        enumerable: true,
        configurable: true
      });
    }
  }
  return map2;
}
function resolveAliasValue(ctx, value) {
  return ctx && isAlias(value) ? value.resolve(ctx.doc, ctx) : value;
}

// node_modules/yaml/browser/dist/nodes/addPairToJSMap.js
function addPairToJSMap(ctx, map2, { key, value }) {
  if (isNode(key) && key.addToJSMap)
    key.addToJSMap(ctx, map2, value);
  else if (isMergeKey(ctx, key))
    addMergeToJSMap(ctx, map2, value);
  else {
    const jsKey = toJS(key, "", ctx);
    if (map2 instanceof Map) {
      map2.set(jsKey, toJS(value, jsKey, ctx));
    } else if (map2 instanceof Set) {
      map2.add(jsKey);
    } else {
      const stringKey = stringifyKey(key, jsKey, ctx);
      const jsValue = toJS(value, stringKey, ctx);
      if (stringKey in map2)
        Object.defineProperty(map2, stringKey, {
          value: jsValue,
          writable: true,
          enumerable: true,
          configurable: true
        });
      else
        map2[stringKey] = jsValue;
    }
  }
  return map2;
}
function stringifyKey(key, jsKey, ctx) {
  if (jsKey === null)
    return "";
  if (typeof jsKey !== "object")
    return String(jsKey);
  if (isNode(key) && ctx?.doc) {
    const strCtx = createStringifyContext(ctx.doc, {});
    strCtx.anchors = /* @__PURE__ */ new Set();
    for (const node of ctx.anchors.keys())
      strCtx.anchors.add(node.anchor);
    strCtx.inFlow = true;
    strCtx.inStringifyKey = true;
    const strKey = key.toString(strCtx);
    if (!ctx.mapKeyWarned) {
      let jsonStr = JSON.stringify(strKey);
      if (jsonStr.length > 40)
        jsonStr = jsonStr.substring(0, 36) + '..."';
      warn(ctx.doc.options.logLevel, `Keys with collection values will be stringified due to JS Object restrictions: ${jsonStr}. Set mapAsMap: true to use object keys.`);
      ctx.mapKeyWarned = true;
    }
    return strKey;
  }
  return JSON.stringify(jsKey);
}

// node_modules/yaml/browser/dist/nodes/Pair.js
function createPair(key, value, ctx) {
  const k = createNode(key, void 0, ctx);
  const v = createNode(value, void 0, ctx);
  return new Pair(k, v);
}
var Pair = class _Pair {
  constructor(key, value = null) {
    Object.defineProperty(this, NODE_TYPE, { value: PAIR });
    this.key = key;
    this.value = value;
  }
  clone(schema4) {
    let { key, value } = this;
    if (isNode(key))
      key = key.clone(schema4);
    if (isNode(value))
      value = value.clone(schema4);
    return new _Pair(key, value);
  }
  toJSON(_, ctx) {
    const pair = ctx?.mapAsMap ? /* @__PURE__ */ new Map() : {};
    return addPairToJSMap(ctx, pair, this);
  }
  toString(ctx, onComment, onChompKeep) {
    return ctx?.doc ? stringifyPair(this, ctx, onComment, onChompKeep) : JSON.stringify(this);
  }
};

// node_modules/yaml/browser/dist/stringify/stringifyCollection.js
function stringifyCollection(collection, ctx, options) {
  const flow = ctx.inFlow ?? collection.flow;
  const stringify4 = flow ? stringifyFlowCollection : stringifyBlockCollection;
  return stringify4(collection, ctx, options);
}
function stringifyBlockCollection({ comment, items }, ctx, { blockItemPrefix, flowChars, itemIndent, onChompKeep, onComment }) {
  const { indent, options: { commentString } } = ctx;
  const itemCtx = Object.assign({}, ctx, { indent: itemIndent, type: null });
  let chompKeep = false;
  const lines = [];
  for (let i = 0; i < items.length; ++i) {
    const item = items[i];
    let comment2 = null;
    if (isNode(item)) {
      if (!chompKeep && item.spaceBefore)
        lines.push("");
      addCommentBefore(ctx, lines, item.commentBefore, chompKeep);
      if (item.comment)
        comment2 = item.comment;
    } else if (isPair(item)) {
      const ik = isNode(item.key) ? item.key : null;
      if (ik) {
        if (!chompKeep && ik.spaceBefore)
          lines.push("");
        addCommentBefore(ctx, lines, ik.commentBefore, chompKeep);
      }
    }
    chompKeep = false;
    let str2 = stringify(item, itemCtx, () => comment2 = null, () => chompKeep = true);
    if (comment2)
      str2 += lineComment(str2, itemIndent, commentString(comment2));
    if (chompKeep && comment2)
      chompKeep = false;
    lines.push(blockItemPrefix + str2);
  }
  let str;
  if (lines.length === 0) {
    str = flowChars.start + flowChars.end;
  } else {
    str = lines[0];
    for (let i = 1; i < lines.length; ++i) {
      const line = lines[i];
      str += line ? `
${indent}${line}` : "\n";
    }
  }
  if (comment) {
    str += "\n" + indentComment(commentString(comment), indent);
    if (onComment)
      onComment();
  } else if (chompKeep && onChompKeep)
    onChompKeep();
  return str;
}
function stringifyFlowCollection({ items }, ctx, { flowChars, itemIndent }) {
  const { indent, indentStep, flowCollectionPadding: fcPadding, options: { commentString } } = ctx;
  itemIndent += indentStep;
  const itemCtx = Object.assign({}, ctx, {
    indent: itemIndent,
    inFlow: true,
    type: null
  });
  let reqNewline = false;
  let linesAtValue = 0;
  const lines = [];
  for (let i = 0; i < items.length; ++i) {
    const item = items[i];
    let comment = null;
    if (isNode(item)) {
      if (item.spaceBefore)
        lines.push("");
      addCommentBefore(ctx, lines, item.commentBefore, false);
      if (item.comment)
        comment = item.comment;
    } else if (isPair(item)) {
      const ik = isNode(item.key) ? item.key : null;
      if (ik) {
        if (ik.spaceBefore)
          lines.push("");
        addCommentBefore(ctx, lines, ik.commentBefore, false);
        if (ik.comment)
          reqNewline = true;
      }
      const iv = isNode(item.value) ? item.value : null;
      if (iv) {
        if (iv.comment)
          comment = iv.comment;
        if (iv.commentBefore)
          reqNewline = true;
      } else if (item.value == null && ik?.comment) {
        comment = ik.comment;
      }
    }
    if (comment)
      reqNewline = true;
    let str = stringify(item, itemCtx, () => comment = null);
    reqNewline || (reqNewline = lines.length > linesAtValue || str.includes("\n"));
    if (i < items.length - 1) {
      str += ",";
    } else if (ctx.options.trailingComma) {
      if (ctx.options.lineWidth > 0) {
        reqNewline || (reqNewline = lines.reduce((sum, line) => sum + line.length + 2, 2) + (str.length + 2) > ctx.options.lineWidth);
      }
      if (reqNewline) {
        str += ",";
      }
    }
    if (comment)
      str += lineComment(str, itemIndent, commentString(comment));
    lines.push(str);
    linesAtValue = lines.length;
  }
  const { start, end } = flowChars;
  if (lines.length === 0) {
    return start + end;
  } else {
    if (!reqNewline) {
      const len = lines.reduce((sum, line) => sum + line.length + 2, 2);
      reqNewline = ctx.options.lineWidth > 0 && len > ctx.options.lineWidth;
    }
    if (reqNewline) {
      let str = start;
      for (const line of lines)
        str += line ? `
${indentStep}${indent}${line}` : "\n";
      return `${str}
${indent}${end}`;
    } else {
      return `${start}${fcPadding}${lines.join(" ")}${fcPadding}${end}`;
    }
  }
}
function addCommentBefore({ indent, options: { commentString } }, lines, comment, chompKeep) {
  if (comment && chompKeep)
    comment = comment.replace(/^\n+/, "");
  if (comment) {
    const ic = indentComment(commentString(comment), indent);
    lines.push(ic.trimStart());
  }
}

// node_modules/yaml/browser/dist/nodes/YAMLMap.js
function findPair(items, key) {
  const k = isScalar(key) ? key.value : key;
  for (const it of items) {
    if (isPair(it)) {
      if (it.key === key || it.key === k)
        return it;
      if (isScalar(it.key) && it.key.value === k)
        return it;
    }
  }
  return void 0;
}
var YAMLMap = class extends Collection {
  static get tagName() {
    return "tag:yaml.org,2002:map";
  }
  constructor(schema4) {
    super(MAP, schema4);
    this.items = [];
  }
  /**
   * A generic collection parsing method that can be extended
   * to other node classes that inherit from YAMLMap
   */
  static from(schema4, obj, ctx) {
    const { keepUndefined, replacer } = ctx;
    const map2 = new this(schema4);
    const add = (key, value) => {
      if (typeof replacer === "function")
        value = replacer.call(obj, key, value);
      else if (Array.isArray(replacer) && !replacer.includes(key))
        return;
      if (value !== void 0 || keepUndefined)
        map2.items.push(createPair(key, value, ctx));
    };
    if (obj instanceof Map) {
      for (const [key, value] of obj)
        add(key, value);
    } else if (obj && typeof obj === "object") {
      for (const key of Object.keys(obj))
        add(key, obj[key]);
    }
    if (typeof schema4.sortMapEntries === "function") {
      map2.items.sort(schema4.sortMapEntries);
    }
    return map2;
  }
  /**
   * Adds a value to the collection.
   *
   * @param overwrite - If not set `true`, using a key that is already in the
   *   collection will throw. Otherwise, overwrites the previous value.
   */
  add(pair, overwrite) {
    let _pair;
    if (isPair(pair))
      _pair = pair;
    else if (!pair || typeof pair !== "object" || !("key" in pair)) {
      _pair = new Pair(pair, pair?.value);
    } else
      _pair = new Pair(pair.key, pair.value);
    const prev = findPair(this.items, _pair.key);
    const sortEntries = this.schema?.sortMapEntries;
    if (prev) {
      if (!overwrite)
        throw new Error(`Key ${_pair.key} already set`);
      if (isScalar(prev.value) && isScalarValue(_pair.value))
        prev.value.value = _pair.value;
      else
        prev.value = _pair.value;
    } else if (sortEntries) {
      const i = this.items.findIndex((item) => sortEntries(_pair, item) < 0);
      if (i === -1)
        this.items.push(_pair);
      else
        this.items.splice(i, 0, _pair);
    } else {
      this.items.push(_pair);
    }
  }
  delete(key) {
    const it = findPair(this.items, key);
    if (!it)
      return false;
    const del = this.items.splice(this.items.indexOf(it), 1);
    return del.length > 0;
  }
  get(key, keepScalar) {
    const it = findPair(this.items, key);
    const node = it?.value;
    return (!keepScalar && isScalar(node) ? node.value : node) ?? void 0;
  }
  has(key) {
    return !!findPair(this.items, key);
  }
  set(key, value) {
    this.add(new Pair(key, value), true);
  }
  /**
   * @param ctx - Conversion context, originally set in Document#toJS()
   * @param {Class} Type - If set, forces the returned collection type
   * @returns Instance of Type, Map, or Object
   */
  toJSON(_, ctx, Type) {
    const map2 = Type ? new Type() : ctx?.mapAsMap ? /* @__PURE__ */ new Map() : {};
    if (ctx?.onCreate)
      ctx.onCreate(map2);
    for (const item of this.items)
      addPairToJSMap(ctx, map2, item);
    return map2;
  }
  toString(ctx, onComment, onChompKeep) {
    if (!ctx)
      return JSON.stringify(this);
    for (const item of this.items) {
      if (!isPair(item))
        throw new Error(`Map items must all be pairs; found ${JSON.stringify(item)} instead`);
    }
    if (!ctx.allNullValues && this.hasAllNullValues(false))
      ctx = Object.assign({}, ctx, { allNullValues: true });
    return stringifyCollection(this, ctx, {
      blockItemPrefix: "",
      flowChars: { start: "{", end: "}" },
      itemIndent: ctx.indent || "",
      onChompKeep,
      onComment
    });
  }
};

// node_modules/yaml/browser/dist/schema/common/map.js
var map = {
  collection: "map",
  default: true,
  nodeClass: YAMLMap,
  tag: "tag:yaml.org,2002:map",
  resolve(map2, onError) {
    if (!isMap(map2))
      onError("Expected a mapping for this tag");
    return map2;
  },
  createNode: (schema4, obj, ctx) => YAMLMap.from(schema4, obj, ctx)
};

// node_modules/yaml/browser/dist/nodes/YAMLSeq.js
var YAMLSeq = class extends Collection {
  static get tagName() {
    return "tag:yaml.org,2002:seq";
  }
  constructor(schema4) {
    super(SEQ, schema4);
    this.items = [];
  }
  add(value) {
    this.items.push(value);
  }
  /**
   * Removes a value from the collection.
   *
   * `key` must contain a representation of an integer for this to succeed.
   * It may be wrapped in a `Scalar`.
   *
   * @returns `true` if the item was found and removed.
   */
  delete(key) {
    const idx = asItemIndex(key);
    if (typeof idx !== "number")
      return false;
    const del = this.items.splice(idx, 1);
    return del.length > 0;
  }
  get(key, keepScalar) {
    const idx = asItemIndex(key);
    if (typeof idx !== "number")
      return void 0;
    const it = this.items[idx];
    return !keepScalar && isScalar(it) ? it.value : it;
  }
  /**
   * Checks if the collection includes a value with the key `key`.
   *
   * `key` must contain a representation of an integer for this to succeed.
   * It may be wrapped in a `Scalar`.
   */
  has(key) {
    const idx = asItemIndex(key);
    return typeof idx === "number" && idx < this.items.length;
  }
  /**
   * Sets a value in this collection. For `!!set`, `value` needs to be a
   * boolean to add/remove the item from the set.
   *
   * If `key` does not contain a representation of an integer, this will throw.
   * It may be wrapped in a `Scalar`.
   */
  set(key, value) {
    const idx = asItemIndex(key);
    if (typeof idx !== "number")
      throw new Error(`Expected a valid index, not ${key}.`);
    const prev = this.items[idx];
    if (isScalar(prev) && isScalarValue(value))
      prev.value = value;
    else
      this.items[idx] = value;
  }
  toJSON(_, ctx) {
    const seq2 = [];
    if (ctx?.onCreate)
      ctx.onCreate(seq2);
    let i = 0;
    for (const item of this.items)
      seq2.push(toJS(item, String(i++), ctx));
    return seq2;
  }
  toString(ctx, onComment, onChompKeep) {
    if (!ctx)
      return JSON.stringify(this);
    return stringifyCollection(this, ctx, {
      blockItemPrefix: "- ",
      flowChars: { start: "[", end: "]" },
      itemIndent: (ctx.indent || "") + "  ",
      onChompKeep,
      onComment
    });
  }
  static from(schema4, obj, ctx) {
    const { replacer } = ctx;
    const seq2 = new this(schema4);
    if (obj && Symbol.iterator in Object(obj)) {
      let i = 0;
      for (let it of obj) {
        if (typeof replacer === "function") {
          const key = obj instanceof Set ? it : String(i++);
          it = replacer.call(obj, key, it);
        }
        seq2.items.push(createNode(it, void 0, ctx));
      }
    }
    return seq2;
  }
};
function asItemIndex(key) {
  let idx = isScalar(key) ? key.value : key;
  if (idx && typeof idx === "string")
    idx = Number(idx);
  return typeof idx === "number" && Number.isInteger(idx) && idx >= 0 ? idx : null;
}

// node_modules/yaml/browser/dist/schema/common/seq.js
var seq = {
  collection: "seq",
  default: true,
  nodeClass: YAMLSeq,
  tag: "tag:yaml.org,2002:seq",
  resolve(seq2, onError) {
    if (!isSeq(seq2))
      onError("Expected a sequence for this tag");
    return seq2;
  },
  createNode: (schema4, obj, ctx) => YAMLSeq.from(schema4, obj, ctx)
};

// node_modules/yaml/browser/dist/schema/common/string.js
var string = {
  identify: (value) => typeof value === "string",
  default: true,
  tag: "tag:yaml.org,2002:str",
  resolve: (str) => str,
  stringify(item, ctx, onComment, onChompKeep) {
    ctx = Object.assign({ actualString: true }, ctx);
    return stringifyString(item, ctx, onComment, onChompKeep);
  }
};

// node_modules/yaml/browser/dist/schema/common/null.js
var nullTag = {
  identify: (value) => value == null,
  createNode: () => new Scalar(null),
  default: true,
  tag: "tag:yaml.org,2002:null",
  test: /^(?:~|[Nn]ull|NULL)?$/,
  resolve: () => new Scalar(null),
  stringify: ({ source }, ctx) => typeof source === "string" && nullTag.test.test(source) ? source : ctx.options.nullStr
};

// node_modules/yaml/browser/dist/schema/core/bool.js
var boolTag = {
  identify: (value) => typeof value === "boolean",
  default: true,
  tag: "tag:yaml.org,2002:bool",
  test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
  resolve: (str) => new Scalar(str[0] === "t" || str[0] === "T"),
  stringify({ source, value }, ctx) {
    if (source && boolTag.test.test(source)) {
      const sv = source[0] === "t" || source[0] === "T";
      if (value === sv)
        return source;
    }
    return value ? ctx.options.trueStr : ctx.options.falseStr;
  }
};

// node_modules/yaml/browser/dist/stringify/stringifyNumber.js
function stringifyNumber({ format: format2, minFractionDigits, tag, value }) {
  if (typeof value === "bigint")
    return String(value);
  const num = typeof value === "number" ? value : Number(value);
  if (!isFinite(num))
    return isNaN(num) ? ".nan" : num < 0 ? "-.inf" : ".inf";
  let n = Object.is(value, -0) ? "-0" : JSON.stringify(value);
  if (!format2 && minFractionDigits && (!tag || tag === "tag:yaml.org,2002:float") && /^-?\d/.test(n) && !n.includes("e")) {
    let i = n.indexOf(".");
    if (i < 0) {
      i = n.length;
      n += ".";
    }
    let d = minFractionDigits - (n.length - i - 1);
    while (d-- > 0)
      n += "0";
  }
  return n;
}

// node_modules/yaml/browser/dist/schema/core/float.js
var floatNaN = {
  identify: (value) => typeof value === "number",
  default: true,
  tag: "tag:yaml.org,2002:float",
  test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
  resolve: (str) => str.slice(-3).toLowerCase() === "nan" ? NaN : str[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
  stringify: stringifyNumber
};
var floatExp = {
  identify: (value) => typeof value === "number",
  default: true,
  tag: "tag:yaml.org,2002:float",
  format: "EXP",
  test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
  resolve: (str) => parseFloat(str),
  stringify(node) {
    const num = Number(node.value);
    return isFinite(num) ? num.toExponential() : stringifyNumber(node);
  }
};
var float = {
  identify: (value) => typeof value === "number",
  default: true,
  tag: "tag:yaml.org,2002:float",
  test: /^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,
  resolve(str) {
    const node = new Scalar(parseFloat(str));
    const dot = str.indexOf(".");
    if (dot !== -1 && str[str.length - 1] === "0")
      node.minFractionDigits = str.length - dot - 1;
    return node;
  },
  stringify: stringifyNumber
};

// node_modules/yaml/browser/dist/schema/core/int.js
var intIdentify = (value) => typeof value === "bigint" || Number.isInteger(value);
var intResolve = (str, offset, radix, { intAsBigInt }) => intAsBigInt ? BigInt(str) : parseInt(str.substring(offset), radix);
function intStringify(node, radix, prefix) {
  const { value } = node;
  if (intIdentify(value) && value >= 0)
    return prefix + value.toString(radix);
  return stringifyNumber(node);
}
var intOct = {
  identify: (value) => intIdentify(value) && value >= 0,
  default: true,
  tag: "tag:yaml.org,2002:int",
  format: "OCT",
  test: /^0o[0-7]+$/,
  resolve: (str, _onError, opt) => intResolve(str, 2, 8, opt),
  stringify: (node) => intStringify(node, 8, "0o")
};
var int = {
  identify: intIdentify,
  default: true,
  tag: "tag:yaml.org,2002:int",
  test: /^[-+]?[0-9]+$/,
  resolve: (str, _onError, opt) => intResolve(str, 0, 10, opt),
  stringify: stringifyNumber
};
var intHex = {
  identify: (value) => intIdentify(value) && value >= 0,
  default: true,
  tag: "tag:yaml.org,2002:int",
  format: "HEX",
  test: /^0x[0-9a-fA-F]+$/,
  resolve: (str, _onError, opt) => intResolve(str, 2, 16, opt),
  stringify: (node) => intStringify(node, 16, "0x")
};

// node_modules/yaml/browser/dist/schema/core/schema.js
var schema = [
  map,
  seq,
  string,
  nullTag,
  boolTag,
  intOct,
  int,
  intHex,
  floatNaN,
  floatExp,
  float
];

// node_modules/yaml/browser/dist/schema/json/schema.js
function intIdentify2(value) {
  return typeof value === "bigint" || Number.isInteger(value);
}
var stringifyJSON = ({ value }) => JSON.stringify(value);
var jsonScalars = [
  {
    identify: (value) => typeof value === "string",
    default: true,
    tag: "tag:yaml.org,2002:str",
    resolve: (str) => str,
    stringify: stringifyJSON
  },
  {
    identify: (value) => value == null,
    createNode: () => new Scalar(null),
    default: true,
    tag: "tag:yaml.org,2002:null",
    test: /^null$/,
    resolve: () => null,
    stringify: stringifyJSON
  },
  {
    identify: (value) => typeof value === "boolean",
    default: true,
    tag: "tag:yaml.org,2002:bool",
    test: /^true$|^false$/,
    resolve: (str) => str === "true",
    stringify: stringifyJSON
  },
  {
    identify: intIdentify2,
    default: true,
    tag: "tag:yaml.org,2002:int",
    test: /^-?(?:0|[1-9][0-9]*)$/,
    resolve: (str, _onError, { intAsBigInt }) => intAsBigInt ? BigInt(str) : parseInt(str, 10),
    stringify: ({ value }) => intIdentify2(value) ? value.toString() : JSON.stringify(value)
  },
  {
    identify: (value) => typeof value === "number",
    default: true,
    tag: "tag:yaml.org,2002:float",
    test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
    resolve: (str) => parseFloat(str),
    stringify: stringifyJSON
  }
];
var jsonError = {
  default: true,
  tag: "",
  test: /^/,
  resolve(str, onError) {
    onError(`Unresolved plain scalar ${JSON.stringify(str)}`);
    return str;
  }
};
var schema2 = [map, seq].concat(jsonScalars, jsonError);

// node_modules/yaml/browser/dist/schema/yaml-1.1/binary.js
var binary = {
  identify: (value) => value instanceof Uint8Array,
  // Buffer inherits from Uint8Array
  default: false,
  tag: "tag:yaml.org,2002:binary",
  /**
   * Returns a Buffer in node and an Uint8Array in browsers
   *
   * To use the resulting buffer as an image, you'll want to do something like:
   *
   *   const blob = new Blob([buffer], { type: 'image/jpeg' })
   *   document.querySelector('#photo').src = URL.createObjectURL(blob)
   */
  resolve(src, onError) {
    if (typeof atob === "function") {
      const str = atob(src.replace(/[\n\r]/g, ""));
      const buffer = new Uint8Array(str.length);
      for (let i = 0; i < str.length; ++i)
        buffer[i] = str.charCodeAt(i);
      return buffer;
    } else {
      onError("This environment does not support reading binary tags; either Buffer or atob is required");
      return src;
    }
  },
  stringify({ comment, type, value }, ctx, onComment, onChompKeep) {
    if (!value)
      return "";
    const buf = value;
    let str;
    if (typeof btoa === "function") {
      let s = "";
      for (let i = 0; i < buf.length; ++i)
        s += String.fromCharCode(buf[i]);
      str = btoa(s);
    } else {
      throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");
    }
    type ?? (type = Scalar.BLOCK_LITERAL);
    if (type !== Scalar.QUOTE_DOUBLE) {
      const lineWidth = Math.max(ctx.options.lineWidth - ctx.indent.length, ctx.options.minContentWidth);
      const n = Math.ceil(str.length / lineWidth);
      const lines = new Array(n);
      for (let i = 0, o = 0; i < n; ++i, o += lineWidth) {
        lines[i] = str.substr(o, lineWidth);
      }
      str = lines.join(type === Scalar.BLOCK_LITERAL ? "\n" : " ");
    }
    return stringifyString({ comment, type, value: str }, ctx, onComment, onChompKeep);
  }
};

// node_modules/yaml/browser/dist/schema/yaml-1.1/pairs.js
function resolvePairs(seq2, onError) {
  if (isSeq(seq2)) {
    for (let i = 0; i < seq2.items.length; ++i) {
      let item = seq2.items[i];
      if (isPair(item))
        continue;
      else if (isMap(item)) {
        if (item.items.length > 1)
          onError("Each pair must have its own sequence indicator");
        const pair = item.items[0] || new Pair(new Scalar(null));
        if (item.commentBefore)
          pair.key.commentBefore = pair.key.commentBefore ? `${item.commentBefore}
${pair.key.commentBefore}` : item.commentBefore;
        if (item.comment) {
          const cn = pair.value ?? pair.key;
          cn.comment = cn.comment ? `${item.comment}
${cn.comment}` : item.comment;
        }
        item = pair;
      }
      seq2.items[i] = isPair(item) ? item : new Pair(item);
    }
  } else
    onError("Expected a sequence for this tag");
  return seq2;
}
function createPairs(schema4, iterable, ctx) {
  const { replacer } = ctx;
  const pairs2 = new YAMLSeq(schema4);
  pairs2.tag = "tag:yaml.org,2002:pairs";
  let i = 0;
  if (iterable && Symbol.iterator in Object(iterable))
    for (let it of iterable) {
      if (typeof replacer === "function")
        it = replacer.call(iterable, String(i++), it);
      let key, value;
      if (Array.isArray(it)) {
        if (it.length === 2) {
          key = it[0];
          value = it[1];
        } else
          throw new TypeError(`Expected [key, value] tuple: ${it}`);
      } else if (it && it instanceof Object) {
        const keys = Object.keys(it);
        if (keys.length === 1) {
          key = keys[0];
          value = it[key];
        } else {
          throw new TypeError(`Expected tuple with one key, not ${keys.length} keys`);
        }
      } else {
        key = it;
      }
      pairs2.items.push(createPair(key, value, ctx));
    }
  return pairs2;
}
var pairs = {
  collection: "seq",
  default: false,
  tag: "tag:yaml.org,2002:pairs",
  resolve: resolvePairs,
  createNode: createPairs
};

// node_modules/yaml/browser/dist/schema/yaml-1.1/omap.js
var YAMLOMap = class _YAMLOMap extends YAMLSeq {
  constructor() {
    super();
    this.add = YAMLMap.prototype.add.bind(this);
    this.delete = YAMLMap.prototype.delete.bind(this);
    this.get = YAMLMap.prototype.get.bind(this);
    this.has = YAMLMap.prototype.has.bind(this);
    this.set = YAMLMap.prototype.set.bind(this);
    this.tag = _YAMLOMap.tag;
  }
  /**
   * If `ctx` is given, the return type is actually `Map<unknown, unknown>`,
   * but TypeScript won't allow widening the signature of a child method.
   */
  toJSON(_, ctx) {
    if (!ctx)
      return super.toJSON(_);
    const map2 = /* @__PURE__ */ new Map();
    if (ctx?.onCreate)
      ctx.onCreate(map2);
    for (const pair of this.items) {
      let key, value;
      if (isPair(pair)) {
        key = toJS(pair.key, "", ctx);
        value = toJS(pair.value, key, ctx);
      } else {
        key = toJS(pair, "", ctx);
      }
      if (map2.has(key))
        throw new Error("Ordered maps must not include duplicate keys");
      map2.set(key, value);
    }
    return map2;
  }
  static from(schema4, iterable, ctx) {
    const pairs2 = createPairs(schema4, iterable, ctx);
    const omap2 = new this();
    omap2.items = pairs2.items;
    return omap2;
  }
};
YAMLOMap.tag = "tag:yaml.org,2002:omap";
var omap = {
  collection: "seq",
  identify: (value) => value instanceof Map,
  nodeClass: YAMLOMap,
  default: false,
  tag: "tag:yaml.org,2002:omap",
  resolve(seq2, onError) {
    const pairs2 = resolvePairs(seq2, onError);
    const seenKeys = [];
    for (const { key } of pairs2.items) {
      if (isScalar(key)) {
        if (seenKeys.includes(key.value)) {
          onError(`Ordered maps must not include duplicate keys: ${key.value}`);
        } else {
          seenKeys.push(key.value);
        }
      }
    }
    return Object.assign(new YAMLOMap(), pairs2);
  },
  createNode: (schema4, iterable, ctx) => YAMLOMap.from(schema4, iterable, ctx)
};

// node_modules/yaml/browser/dist/schema/yaml-1.1/bool.js
function boolStringify({ value, source }, ctx) {
  const boolObj = value ? trueTag : falseTag;
  if (source && boolObj.test.test(source))
    return source;
  return value ? ctx.options.trueStr : ctx.options.falseStr;
}
var trueTag = {
  identify: (value) => value === true,
  default: true,
  tag: "tag:yaml.org,2002:bool",
  test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
  resolve: () => new Scalar(true),
  stringify: boolStringify
};
var falseTag = {
  identify: (value) => value === false,
  default: true,
  tag: "tag:yaml.org,2002:bool",
  test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,
  resolve: () => new Scalar(false),
  stringify: boolStringify
};

// node_modules/yaml/browser/dist/schema/yaml-1.1/float.js
var floatNaN2 = {
  identify: (value) => typeof value === "number",
  default: true,
  tag: "tag:yaml.org,2002:float",
  test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
  resolve: (str) => str.slice(-3).toLowerCase() === "nan" ? NaN : str[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
  stringify: stringifyNumber
};
var floatExp2 = {
  identify: (value) => typeof value === "number",
  default: true,
  tag: "tag:yaml.org,2002:float",
  format: "EXP",
  test: /^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,
  resolve: (str) => parseFloat(str.replace(/_/g, "")),
  stringify(node) {
    const num = Number(node.value);
    return isFinite(num) ? num.toExponential() : stringifyNumber(node);
  }
};
var float2 = {
  identify: (value) => typeof value === "number",
  default: true,
  tag: "tag:yaml.org,2002:float",
  test: /^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,
  resolve(str) {
    const node = new Scalar(parseFloat(str.replace(/_/g, "")));
    const dot = str.indexOf(".");
    if (dot !== -1) {
      const f = str.substring(dot + 1).replace(/_/g, "");
      if (f[f.length - 1] === "0")
        node.minFractionDigits = f.length;
    }
    return node;
  },
  stringify: stringifyNumber
};

// node_modules/yaml/browser/dist/schema/yaml-1.1/int.js
var intIdentify3 = (value) => typeof value === "bigint" || Number.isInteger(value);
function intResolve2(str, offset, radix, { intAsBigInt }) {
  const sign = str[0];
  if (sign === "-" || sign === "+")
    offset += 1;
  str = str.substring(offset).replace(/_/g, "");
  if (intAsBigInt) {
    switch (radix) {
      case 2:
        str = `0b${str}`;
        break;
      case 8:
        str = `0o${str}`;
        break;
      case 16:
        str = `0x${str}`;
        break;
    }
    const n2 = BigInt(str);
    return sign === "-" ? BigInt(-1) * n2 : n2;
  }
  const n = parseInt(str, radix);
  return sign === "-" ? -1 * n : n;
}
function intStringify2(node, radix, prefix) {
  const { value } = node;
  if (intIdentify3(value)) {
    const str = value.toString(radix);
    return value < 0 ? "-" + prefix + str.substr(1) : prefix + str;
  }
  return stringifyNumber(node);
}
var intBin = {
  identify: intIdentify3,
  default: true,
  tag: "tag:yaml.org,2002:int",
  format: "BIN",
  test: /^[-+]?0b[0-1_]+$/,
  resolve: (str, _onError, opt) => intResolve2(str, 2, 2, opt),
  stringify: (node) => intStringify2(node, 2, "0b")
};
var intOct2 = {
  identify: intIdentify3,
  default: true,
  tag: "tag:yaml.org,2002:int",
  format: "OCT",
  test: /^[-+]?0[0-7_]+$/,
  resolve: (str, _onError, opt) => intResolve2(str, 1, 8, opt),
  stringify: (node) => intStringify2(node, 8, "0")
};
var int2 = {
  identify: intIdentify3,
  default: true,
  tag: "tag:yaml.org,2002:int",
  test: /^[-+]?[0-9][0-9_]*$/,
  resolve: (str, _onError, opt) => intResolve2(str, 0, 10, opt),
  stringify: stringifyNumber
};
var intHex2 = {
  identify: intIdentify3,
  default: true,
  tag: "tag:yaml.org,2002:int",
  format: "HEX",
  test: /^[-+]?0x[0-9a-fA-F_]+$/,
  resolve: (str, _onError, opt) => intResolve2(str, 2, 16, opt),
  stringify: (node) => intStringify2(node, 16, "0x")
};

// node_modules/yaml/browser/dist/schema/yaml-1.1/set.js
var YAMLSet = class _YAMLSet extends YAMLMap {
  constructor(schema4) {
    super(schema4);
    this.tag = _YAMLSet.tag;
  }
  add(key) {
    let pair;
    if (isPair(key))
      pair = key;
    else if (key && typeof key === "object" && "key" in key && "value" in key && key.value === null)
      pair = new Pair(key.key, null);
    else
      pair = new Pair(key, null);
    const prev = findPair(this.items, pair.key);
    if (!prev)
      this.items.push(pair);
  }
  /**
   * If `keepPair` is `true`, returns the Pair matching `key`.
   * Otherwise, returns the value of that Pair's key.
   */
  get(key, keepPair) {
    const pair = findPair(this.items, key);
    return !keepPair && isPair(pair) ? isScalar(pair.key) ? pair.key.value : pair.key : pair;
  }
  set(key, value) {
    if (typeof value !== "boolean")
      throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof value}`);
    const prev = findPair(this.items, key);
    if (prev && !value) {
      this.items.splice(this.items.indexOf(prev), 1);
    } else if (!prev && value) {
      this.items.push(new Pair(key));
    }
  }
  toJSON(_, ctx) {
    return super.toJSON(_, ctx, Set);
  }
  toString(ctx, onComment, onChompKeep) {
    if (!ctx)
      return JSON.stringify(this);
    if (this.hasAllNullValues(true))
      return super.toString(Object.assign({}, ctx, { allNullValues: true }), onComment, onChompKeep);
    else
      throw new Error("Set items must all have null values");
  }
  static from(schema4, iterable, ctx) {
    const { replacer } = ctx;
    const set3 = new this(schema4);
    if (iterable && Symbol.iterator in Object(iterable))
      for (let value of iterable) {
        if (typeof replacer === "function")
          value = replacer.call(iterable, value, value);
        set3.items.push(createPair(value, null, ctx));
      }
    return set3;
  }
};
YAMLSet.tag = "tag:yaml.org,2002:set";
var set2 = {
  collection: "map",
  identify: (value) => value instanceof Set,
  nodeClass: YAMLSet,
  default: false,
  tag: "tag:yaml.org,2002:set",
  createNode: (schema4, iterable, ctx) => YAMLSet.from(schema4, iterable, ctx),
  resolve(map2, onError) {
    if (isMap(map2)) {
      if (map2.hasAllNullValues(true))
        return Object.assign(new YAMLSet(), map2);
      else
        onError("Set items must all have null values");
    } else
      onError("Expected a mapping for this tag");
    return map2;
  }
};

// node_modules/yaml/browser/dist/schema/yaml-1.1/timestamp.js
function parseSexagesimal(str, asBigInt) {
  const sign = str[0];
  const parts = sign === "-" || sign === "+" ? str.substring(1) : str;
  const num = (n) => asBigInt ? BigInt(n) : Number(n);
  const res = parts.replace(/_/g, "").split(":").reduce((res2, p) => res2 * num(60) + num(p), num(0));
  return sign === "-" ? num(-1) * res : res;
}
function stringifySexagesimal(node) {
  let { value } = node;
  let num = (n) => n;
  if (typeof value === "bigint")
    num = (n) => BigInt(n);
  else if (isNaN(value) || !isFinite(value))
    return stringifyNumber(node);
  let sign = "";
  if (value < 0) {
    sign = "-";
    value *= num(-1);
  }
  const _60 = num(60);
  const parts = [value % _60];
  if (value < 60) {
    parts.unshift(0);
  } else {
    value = (value - parts[0]) / _60;
    parts.unshift(value % _60);
    if (value >= 60) {
      value = (value - parts[0]) / _60;
      parts.unshift(value);
    }
  }
  return sign + parts.map((n) => String(n).padStart(2, "0")).join(":").replace(/000000\d*$/, "");
}
var intTime = {
  identify: (value) => typeof value === "bigint" || Number.isInteger(value),
  default: true,
  tag: "tag:yaml.org,2002:int",
  format: "TIME",
  test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,
  resolve: (str, _onError, { intAsBigInt }) => parseSexagesimal(str, intAsBigInt),
  stringify: stringifySexagesimal
};
var floatTime = {
  identify: (value) => typeof value === "number",
  default: true,
  tag: "tag:yaml.org,2002:float",
  format: "TIME",
  test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,
  resolve: (str) => parseSexagesimal(str, false),
  stringify: stringifySexagesimal
};
var timestamp = {
  identify: (value) => value instanceof Date,
  default: true,
  tag: "tag:yaml.org,2002:timestamp",
  // If the time zone is omitted, the timestamp is assumed to be specified in UTC. The time part
  // may be omitted altogether, resulting in a date format. In such a case, the time part is
  // assumed to be 00:00:00Z (start of day, UTC).
  test: RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),
  resolve(str) {
    const match = str.match(timestamp.test);
    if (!match)
      throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");
    const [, year, month, day, hour, minute, second] = match.map(Number);
    const millisec = match[7] ? Number((match[7] + "00").substr(1, 3)) : 0;
    let date = Date.UTC(year, month - 1, day, hour || 0, minute || 0, second || 0, millisec);
    const tz = match[8];
    if (tz && tz !== "Z") {
      let d = parseSexagesimal(tz, false);
      if (Math.abs(d) < 30)
        d *= 60;
      date -= 6e4 * d;
    }
    return new Date(date);
  },
  stringify: ({ value }) => value?.toISOString().replace(/(T00:00:00)?\.000Z$/, "") ?? ""
};

// node_modules/yaml/browser/dist/schema/yaml-1.1/schema.js
var schema3 = [
  map,
  seq,
  string,
  nullTag,
  trueTag,
  falseTag,
  intBin,
  intOct2,
  int2,
  intHex2,
  floatNaN2,
  floatExp2,
  float2,
  binary,
  merge,
  omap,
  pairs,
  set2,
  intTime,
  floatTime,
  timestamp
];

// node_modules/yaml/browser/dist/schema/tags.js
var schemas = /* @__PURE__ */ new Map([
  ["core", schema],
  ["failsafe", [map, seq, string]],
  ["json", schema2],
  ["yaml11", schema3],
  ["yaml-1.1", schema3]
]);
var tagsByName = {
  binary,
  bool: boolTag,
  float,
  floatExp,
  floatNaN,
  floatTime,
  int,
  intHex,
  intOct,
  intTime,
  map,
  merge,
  null: nullTag,
  omap,
  pairs,
  seq,
  set: set2,
  timestamp
};
var coreKnownTags = {
  "tag:yaml.org,2002:binary": binary,
  "tag:yaml.org,2002:merge": merge,
  "tag:yaml.org,2002:omap": omap,
  "tag:yaml.org,2002:pairs": pairs,
  "tag:yaml.org,2002:set": set2,
  "tag:yaml.org,2002:timestamp": timestamp
};
function getTags(customTags, schemaName, addMergeTag) {
  const schemaTags = schemas.get(schemaName);
  if (schemaTags && !customTags) {
    return addMergeTag && !schemaTags.includes(merge) ? schemaTags.concat(merge) : schemaTags.slice();
  }
  let tags = schemaTags;
  if (!tags) {
    if (Array.isArray(customTags))
      tags = [];
    else {
      const keys = Array.from(schemas.keys()).filter((key) => key !== "yaml11").map((key) => JSON.stringify(key)).join(", ");
      throw new Error(`Unknown schema "${schemaName}"; use one of ${keys} or define customTags array`);
    }
  }
  if (Array.isArray(customTags)) {
    for (const tag of customTags)
      tags = tags.concat(tag);
  } else if (typeof customTags === "function") {
    tags = customTags(tags.slice());
  }
  if (addMergeTag)
    tags = tags.concat(merge);
  return tags.reduce((tags2, tag) => {
    const tagObj = typeof tag === "string" ? tagsByName[tag] : tag;
    if (!tagObj) {
      const tagName = JSON.stringify(tag);
      const keys = Object.keys(tagsByName).map((key) => JSON.stringify(key)).join(", ");
      throw new Error(`Unknown custom tag ${tagName}; use one of ${keys}`);
    }
    if (!tags2.includes(tagObj))
      tags2.push(tagObj);
    return tags2;
  }, []);
}

// node_modules/yaml/browser/dist/schema/Schema.js
var sortMapEntriesByKey = (a, b) => a.key < b.key ? -1 : a.key > b.key ? 1 : 0;
var Schema = class _Schema {
  constructor({ compat, customTags, merge: merge2, resolveKnownTags, schema: schema4, sortMapEntries, toStringDefaults }) {
    this.compat = Array.isArray(compat) ? getTags(compat, "compat") : compat ? getTags(null, compat) : null;
    this.name = typeof schema4 === "string" && schema4 || "core";
    this.knownTags = resolveKnownTags ? coreKnownTags : {};
    this.tags = getTags(customTags, this.name, merge2);
    this.toStringOptions = toStringDefaults ?? null;
    Object.defineProperty(this, MAP, { value: map });
    Object.defineProperty(this, SCALAR, { value: string });
    Object.defineProperty(this, SEQ, { value: seq });
    this.sortMapEntries = typeof sortMapEntries === "function" ? sortMapEntries : sortMapEntries === true ? sortMapEntriesByKey : null;
  }
  clone() {
    const copy = Object.create(_Schema.prototype, Object.getOwnPropertyDescriptors(this));
    copy.tags = this.tags.slice();
    return copy;
  }
};

// node_modules/yaml/browser/dist/stringify/stringifyDocument.js
function stringifyDocument(doc, options) {
  const lines = [];
  let hasDirectives = options.directives === true;
  if (options.directives !== false && doc.directives) {
    const dir = doc.directives.toString(doc);
    if (dir) {
      lines.push(dir);
      hasDirectives = true;
    } else if (doc.directives.docStart)
      hasDirectives = true;
  }
  if (hasDirectives)
    lines.push("---");
  const ctx = createStringifyContext(doc, options);
  const { commentString } = ctx.options;
  if (doc.commentBefore) {
    if (lines.length !== 1)
      lines.unshift("");
    const cs = commentString(doc.commentBefore);
    lines.unshift(indentComment(cs, ""));
  }
  let chompKeep = false;
  let contentComment = null;
  if (doc.contents) {
    if (isNode(doc.contents)) {
      if (doc.contents.spaceBefore && hasDirectives)
        lines.push("");
      if (doc.contents.commentBefore) {
        const cs = commentString(doc.contents.commentBefore);
        lines.push(indentComment(cs, ""));
      }
      ctx.forceBlockIndent = !!doc.comment;
      contentComment = doc.contents.comment;
    }
    const onChompKeep = contentComment ? void 0 : () => chompKeep = true;
    let body = stringify(doc.contents, ctx, () => contentComment = null, onChompKeep);
    if (contentComment)
      body += lineComment(body, "", commentString(contentComment));
    if ((body[0] === "|" || body[0] === ">") && lines[lines.length - 1] === "---") {
      lines[lines.length - 1] = `--- ${body}`;
    } else
      lines.push(body);
  } else {
    lines.push(stringify(doc.contents, ctx));
  }
  if (doc.directives?.docEnd) {
    if (doc.comment) {
      const cs = commentString(doc.comment);
      if (cs.includes("\n")) {
        lines.push("...");
        lines.push(indentComment(cs, ""));
      } else {
        lines.push(`... ${cs}`);
      }
    } else {
      lines.push("...");
    }
  } else {
    let dc = doc.comment;
    if (dc && chompKeep)
      dc = dc.replace(/^\n+/, "");
    if (dc) {
      if ((!chompKeep || contentComment) && lines[lines.length - 1] !== "")
        lines.push("");
      lines.push(indentComment(commentString(dc), ""));
    }
  }
  return lines.join("\n") + "\n";
}

// node_modules/yaml/browser/dist/doc/Document.js
var Document = class _Document {
  constructor(value, replacer, options) {
    this.commentBefore = null;
    this.comment = null;
    this.errors = [];
    this.warnings = [];
    Object.defineProperty(this, NODE_TYPE, { value: DOC });
    let _replacer = null;
    if (typeof replacer === "function" || Array.isArray(replacer)) {
      _replacer = replacer;
    } else if (options === void 0 && replacer) {
      options = replacer;
      replacer = void 0;
    }
    const opt = Object.assign({
      intAsBigInt: false,
      keepSourceTokens: false,
      logLevel: "warn",
      prettyErrors: true,
      strict: true,
      stringKeys: false,
      uniqueKeys: true,
      version: "1.2"
    }, options);
    this.options = opt;
    let { version } = opt;
    if (options?._directives) {
      this.directives = options._directives.atDocument();
      if (this.directives.yaml.explicit)
        version = this.directives.yaml.version;
    } else
      this.directives = new Directives({ version });
    this.setSchema(version, options);
    this.contents = value === void 0 ? null : this.createNode(value, _replacer, options);
  }
  /**
   * Create a deep copy of this Document and its contents.
   *
   * Custom Node values that inherit from `Object` still refer to their original instances.
   */
  clone() {
    const copy = Object.create(_Document.prototype, {
      [NODE_TYPE]: { value: DOC }
    });
    copy.commentBefore = this.commentBefore;
    copy.comment = this.comment;
    copy.errors = this.errors.slice();
    copy.warnings = this.warnings.slice();
    copy.options = Object.assign({}, this.options);
    if (this.directives)
      copy.directives = this.directives.clone();
    copy.schema = this.schema.clone();
    copy.contents = isNode(this.contents) ? this.contents.clone(copy.schema) : this.contents;
    if (this.range)
      copy.range = this.range.slice();
    return copy;
  }
  /** Adds a value to the document. */
  add(value) {
    if (assertCollection(this.contents))
      this.contents.add(value);
  }
  /** Adds a value to the document. */
  addIn(path, value) {
    if (assertCollection(this.contents))
      this.contents.addIn(path, value);
  }
  /**
   * Create a new `Alias` node, ensuring that the target `node` has the required anchor.
   *
   * If `node` already has an anchor, `name` is ignored.
   * Otherwise, the `node.anchor` value will be set to `name`,
   * or if an anchor with that name is already present in the document,
   * `name` will be used as a prefix for a new unique anchor.
   * If `name` is undefined, the generated anchor will use 'a' as a prefix.
   */
  createAlias(node, name) {
    if (!node.anchor) {
      const prev = anchorNames(this);
      node.anchor = // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
      !name || prev.has(name) ? findNewAnchor(name || "a", prev) : name;
    }
    return new Alias(node.anchor);
  }
  createNode(value, replacer, options) {
    let _replacer = void 0;
    if (typeof replacer === "function") {
      value = replacer.call({ "": value }, "", value);
      _replacer = replacer;
    } else if (Array.isArray(replacer)) {
      const keyToStr = (v) => typeof v === "number" || v instanceof String || v instanceof Number;
      const asStr = replacer.filter(keyToStr).map(String);
      if (asStr.length > 0)
        replacer = replacer.concat(asStr);
      _replacer = replacer;
    } else if (options === void 0 && replacer) {
      options = replacer;
      replacer = void 0;
    }
    const { aliasDuplicateObjects, anchorPrefix, flow, keepUndefined, onTagObj, tag } = options ?? {};
    const { onAnchor, setAnchors, sourceObjects } = createNodeAnchors(
      this,
      // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
      anchorPrefix || "a"
    );
    const ctx = {
      aliasDuplicateObjects: aliasDuplicateObjects ?? true,
      keepUndefined: keepUndefined ?? false,
      onAnchor,
      onTagObj,
      replacer: _replacer,
      schema: this.schema,
      sourceObjects
    };
    const node = createNode(value, tag, ctx);
    if (flow && isCollection(node))
      node.flow = true;
    setAnchors();
    return node;
  }
  /**
   * Convert a key and a value into a `Pair` using the current schema,
   * recursively wrapping all values as `Scalar` or `Collection` nodes.
   */
  createPair(key, value, options = {}) {
    const k = this.createNode(key, null, options);
    const v = this.createNode(value, null, options);
    return new Pair(k, v);
  }
  /**
   * Removes a value from the document.
   * @returns `true` if the item was found and removed.
   */
  delete(key) {
    return assertCollection(this.contents) ? this.contents.delete(key) : false;
  }
  /**
   * Removes a value from the document.
   * @returns `true` if the item was found and removed.
   */
  deleteIn(path) {
    if (isEmptyPath(path)) {
      if (this.contents == null)
        return false;
      this.contents = null;
      return true;
    }
    return assertCollection(this.contents) ? this.contents.deleteIn(path) : false;
  }
  /**
   * Returns item at `key`, or `undefined` if not found. By default unwraps
   * scalar values from their surrounding node; to disable set `keepScalar` to
   * `true` (collections are always returned intact).
   */
  get(key, keepScalar) {
    return isCollection(this.contents) ? this.contents.get(key, keepScalar) : void 0;
  }
  /**
   * Returns item at `path`, or `undefined` if not found. By default unwraps
   * scalar values from their surrounding node; to disable set `keepScalar` to
   * `true` (collections are always returned intact).
   */
  getIn(path, keepScalar) {
    if (isEmptyPath(path))
      return !keepScalar && isScalar(this.contents) ? this.contents.value : this.contents;
    return isCollection(this.contents) ? this.contents.getIn(path, keepScalar) : void 0;
  }
  /**
   * Checks if the document includes a value with the key `key`.
   */
  has(key) {
    return isCollection(this.contents) ? this.contents.has(key) : false;
  }
  /**
   * Checks if the document includes a value at `path`.
   */
  hasIn(path) {
    if (isEmptyPath(path))
      return this.contents !== void 0;
    return isCollection(this.contents) ? this.contents.hasIn(path) : false;
  }
  /**
   * Sets a value in this document. For `!!set`, `value` needs to be a
   * boolean to add/remove the item from the set.
   */
  set(key, value) {
    if (this.contents == null) {
      this.contents = collectionFromPath(this.schema, [key], value);
    } else if (assertCollection(this.contents)) {
      this.contents.set(key, value);
    }
  }
  /**
   * Sets a value in this document. For `!!set`, `value` needs to be a
   * boolean to add/remove the item from the set.
   */
  setIn(path, value) {
    if (isEmptyPath(path)) {
      this.contents = value;
    } else if (this.contents == null) {
      this.contents = collectionFromPath(this.schema, Array.from(path), value);
    } else if (assertCollection(this.contents)) {
      this.contents.setIn(path, value);
    }
  }
  /**
   * Change the YAML version and schema used by the document.
   * A `null` version disables support for directives, explicit tags, anchors, and aliases.
   * It also requires the `schema` option to be given as a `Schema` instance value.
   *
   * Overrides all previously set schema options.
   */
  setSchema(version, options = {}) {
    if (typeof version === "number")
      version = String(version);
    let opt;
    switch (version) {
      case "1.1":
        if (this.directives)
          this.directives.yaml.version = "1.1";
        else
          this.directives = new Directives({ version: "1.1" });
        opt = { resolveKnownTags: false, schema: "yaml-1.1" };
        break;
      case "1.2":
      case "next":
        if (this.directives)
          this.directives.yaml.version = version;
        else
          this.directives = new Directives({ version });
        opt = { resolveKnownTags: true, schema: "core" };
        break;
      case null:
        if (this.directives)
          delete this.directives;
        opt = null;
        break;
      default: {
        const sv = JSON.stringify(version);
        throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${sv}`);
      }
    }
    if (options.schema instanceof Object)
      this.schema = options.schema;
    else if (opt)
      this.schema = new Schema(Object.assign(opt, options));
    else
      throw new Error(`With a null YAML version, the { schema: Schema } option is required`);
  }
  // json & jsonArg are only used from toJSON()
  toJS({ json, jsonArg, mapAsMap, maxAliasCount, onAnchor, reviver } = {}) {
    const ctx = {
      anchors: /* @__PURE__ */ new Map(),
      doc: this,
      keep: !json,
      mapAsMap: mapAsMap === true,
      mapKeyWarned: false,
      maxAliasCount: typeof maxAliasCount === "number" ? maxAliasCount : 100
    };
    const res = toJS(this.contents, jsonArg ?? "", ctx);
    if (typeof onAnchor === "function")
      for (const { count, res: res2 } of ctx.anchors.values())
        onAnchor(res2, count);
    return typeof reviver === "function" ? applyReviver(reviver, { "": res }, "", res) : res;
  }
  /**
   * A JSON representation of the document `contents`.
   *
   * @param jsonArg Used by `JSON.stringify` to indicate the array index or
   *   property name.
   */
  toJSON(jsonArg, onAnchor) {
    return this.toJS({ json: true, jsonArg, mapAsMap: false, onAnchor });
  }
  /** A YAML representation of the document. */
  toString(options = {}) {
    if (this.errors.length > 0)
      throw new Error("Document with errors cannot be stringified");
    if ("indent" in options && (!Number.isInteger(options.indent) || Number(options.indent) <= 0)) {
      const s = JSON.stringify(options.indent);
      throw new Error(`"indent" option must be a positive integer, not ${s}`);
    }
    return stringifyDocument(this, options);
  }
};
function assertCollection(contents) {
  if (isCollection(contents))
    return true;
  throw new Error("Expected a YAML collection as document contents");
}

// node_modules/yaml/browser/dist/errors.js
var YAMLError = class extends Error {
  constructor(name, pos, code, message) {
    super();
    this.name = name;
    this.code = code;
    this.message = message;
    this.pos = pos;
  }
};
var YAMLParseError = class extends YAMLError {
  constructor(pos, code, message) {
    super("YAMLParseError", pos, code, message);
  }
};
var YAMLWarning = class extends YAMLError {
  constructor(pos, code, message) {
    super("YAMLWarning", pos, code, message);
  }
};
var prettifyError = (src, lc) => (error) => {
  if (error.pos[0] === -1)
    return;
  error.linePos = error.pos.map((pos) => lc.linePos(pos));
  const { line, col } = error.linePos[0];
  error.message += ` at line ${line}, column ${col}`;
  let ci = col - 1;
  let lineStr = src.substring(lc.lineStarts[line - 1], lc.lineStarts[line]).replace(/[\n\r]+$/, "");
  if (ci >= 60 && lineStr.length > 80) {
    const trimStart = Math.min(ci - 39, lineStr.length - 79);
    lineStr = "\u2026" + lineStr.substring(trimStart);
    ci -= trimStart - 1;
  }
  if (lineStr.length > 80)
    lineStr = lineStr.substring(0, 79) + "\u2026";
  if (line > 1 && /^ *$/.test(lineStr.substring(0, ci))) {
    let prev = src.substring(lc.lineStarts[line - 2], lc.lineStarts[line - 1]);
    if (prev.length > 80)
      prev = prev.substring(0, 79) + "\u2026\n";
    lineStr = prev + lineStr;
  }
  if (/[^ ]/.test(lineStr)) {
    let count = 1;
    const end = error.linePos[1];
    if (end?.line === line && end.col > col) {
      count = Math.max(1, Math.min(end.col - col, 80 - ci));
    }
    const pointer = " ".repeat(ci) + "^".repeat(count);
    error.message += `:

${lineStr}
${pointer}
`;
  }
};

// node_modules/yaml/browser/dist/compose/resolve-props.js
function resolveProps(tokens, { flow, indicator, next, offset, onError, parentIndent, startOnNewline }) {
  let spaceBefore = false;
  let atNewline = startOnNewline;
  let hasSpace = startOnNewline;
  let comment = "";
  let commentSep = "";
  let hasNewline = false;
  let reqSpace = false;
  let tab = null;
  let anchor = null;
  let tag = null;
  let newlineAfterProp = null;
  let comma = null;
  let found = null;
  let start = null;
  for (const token of tokens) {
    if (reqSpace) {
      if (token.type !== "space" && token.type !== "newline" && token.type !== "comma")
        onError(token.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space");
      reqSpace = false;
    }
    if (tab) {
      if (atNewline && token.type !== "comment" && token.type !== "newline") {
        onError(tab, "TAB_AS_INDENT", "Tabs are not allowed as indentation");
      }
      tab = null;
    }
    switch (token.type) {
      case "space":
        if (!flow && (indicator !== "doc-start" || next?.type !== "flow-collection") && token.source.includes("	")) {
          tab = token;
        }
        hasSpace = true;
        break;
      case "comment": {
        if (!hasSpace)
          onError(token, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
        const cb = token.source.substring(1) || " ";
        if (!comment)
          comment = cb;
        else
          comment += commentSep + cb;
        commentSep = "";
        atNewline = false;
        break;
      }
      case "newline":
        if (atNewline) {
          if (comment)
            comment += token.source;
          else if (!found || indicator !== "seq-item-ind")
            spaceBefore = true;
        } else
          commentSep += token.source;
        atNewline = true;
        hasNewline = true;
        if (anchor || tag)
          newlineAfterProp = token;
        hasSpace = true;
        break;
      case "anchor":
        if (anchor)
          onError(token, "MULTIPLE_ANCHORS", "A node can have at most one anchor");
        if (token.source.endsWith(":"))
          onError(token.offset + token.source.length - 1, "BAD_ALIAS", "Anchor ending in : is ambiguous", true);
        anchor = token;
        start ?? (start = token.offset);
        atNewline = false;
        hasSpace = false;
        reqSpace = true;
        break;
      case "tag": {
        if (tag)
          onError(token, "MULTIPLE_TAGS", "A node can have at most one tag");
        tag = token;
        start ?? (start = token.offset);
        atNewline = false;
        hasSpace = false;
        reqSpace = true;
        break;
      }
      case indicator:
        if (anchor || tag)
          onError(token, "BAD_PROP_ORDER", `Anchors and tags must be after the ${token.source} indicator`);
        if (found)
          onError(token, "UNEXPECTED_TOKEN", `Unexpected ${token.source} in ${flow ?? "collection"}`);
        found = token;
        atNewline = indicator === "seq-item-ind" || indicator === "explicit-key-ind";
        hasSpace = false;
        break;
      case "comma":
        if (flow) {
          if (comma)
            onError(token, "UNEXPECTED_TOKEN", `Unexpected , in ${flow}`);
          comma = token;
          atNewline = false;
          hasSpace = false;
          break;
        }
      // else fallthrough
      default:
        onError(token, "UNEXPECTED_TOKEN", `Unexpected ${token.type} token`);
        atNewline = false;
        hasSpace = false;
    }
  }
  const last = tokens[tokens.length - 1];
  const end = last ? last.offset + last.source.length : offset;
  if (reqSpace && next && next.type !== "space" && next.type !== "newline" && next.type !== "comma" && (next.type !== "scalar" || next.source !== "")) {
    onError(next.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space");
  }
  if (tab && (atNewline && tab.indent <= parentIndent || next?.type === "block-map" || next?.type === "block-seq"))
    onError(tab, "TAB_AS_INDENT", "Tabs are not allowed as indentation");
  return {
    comma,
    found,
    spaceBefore,
    comment,
    hasNewline,
    anchor,
    tag,
    newlineAfterProp,
    end,
    start: start ?? end
  };
}

// node_modules/yaml/browser/dist/compose/util-contains-newline.js
function containsNewline(key) {
  if (!key)
    return null;
  switch (key.type) {
    case "alias":
    case "scalar":
    case "double-quoted-scalar":
    case "single-quoted-scalar":
      if (key.source.includes("\n"))
        return true;
      if (key.end) {
        for (const st of key.end)
          if (st.type === "newline")
            return true;
      }
      return false;
    case "flow-collection":
      for (const it of key.items) {
        for (const st of it.start)
          if (st.type === "newline")
            return true;
        if (it.sep) {
          for (const st of it.sep)
            if (st.type === "newline")
              return true;
        }
        if (containsNewline(it.key) || containsNewline(it.value))
          return true;
      }
      return false;
    default:
      return true;
  }
}

// node_modules/yaml/browser/dist/compose/util-flow-indent-check.js
function flowIndentCheck(indent, fc, onError) {
  if (fc?.type === "flow-collection") {
    const end = fc.end[0];
    if (end.indent === indent && (end.source === "]" || end.source === "}") && containsNewline(fc)) {
      const msg = "Flow end indicator should be more indented than parent";
      onError(end, "BAD_INDENT", msg, true);
    }
  }
}

// node_modules/yaml/browser/dist/compose/util-map-includes.js
function mapIncludes(ctx, items, search) {
  const { uniqueKeys } = ctx.options;
  if (uniqueKeys === false)
    return false;
  const isEqual = typeof uniqueKeys === "function" ? uniqueKeys : (a, b) => a === b || isScalar(a) && isScalar(b) && a.value === b.value;
  return items.some((pair) => isEqual(pair.key, search));
}

// node_modules/yaml/browser/dist/compose/resolve-block-map.js
var startColMsg = "All mapping items must start at the same column";
function resolveBlockMap({ composeNode: composeNode2, composeEmptyNode: composeEmptyNode2 }, ctx, bm, onError, tag) {
  const NodeClass = tag?.nodeClass ?? YAMLMap;
  const map2 = new NodeClass(ctx.schema);
  if (ctx.atRoot)
    ctx.atRoot = false;
  let offset = bm.offset;
  let commentEnd = null;
  for (const collItem of bm.items) {
    const { start, key, sep, value } = collItem;
    const keyProps = resolveProps(start, {
      indicator: "explicit-key-ind",
      next: key ?? sep?.[0],
      offset,
      onError,
      parentIndent: bm.indent,
      startOnNewline: true
    });
    const implicitKey = !keyProps.found;
    if (implicitKey) {
      if (key) {
        if (key.type === "block-seq")
          onError(offset, "BLOCK_AS_IMPLICIT_KEY", "A block sequence may not be used as an implicit map key");
        else if ("indent" in key && key.indent !== bm.indent)
          onError(offset, "BAD_INDENT", startColMsg);
      }
      if (!keyProps.anchor && !keyProps.tag && !sep) {
        commentEnd = keyProps.end;
        if (keyProps.comment) {
          if (map2.comment)
            map2.comment += "\n" + keyProps.comment;
          else
            map2.comment = keyProps.comment;
        }
        continue;
      }
      if (keyProps.newlineAfterProp || containsNewline(key)) {
        onError(key ?? start[start.length - 1], "MULTILINE_IMPLICIT_KEY", "Implicit keys need to be on a single line");
      }
    } else if (keyProps.found?.indent !== bm.indent) {
      onError(offset, "BAD_INDENT", startColMsg);
    }
    ctx.atKey = true;
    const keyStart = keyProps.end;
    const keyNode = key ? composeNode2(ctx, key, keyProps, onError) : composeEmptyNode2(ctx, keyStart, start, null, keyProps, onError);
    if (ctx.schema.compat)
      flowIndentCheck(bm.indent, key, onError);
    ctx.atKey = false;
    if (mapIncludes(ctx, map2.items, keyNode))
      onError(keyStart, "DUPLICATE_KEY", "Map keys must be unique");
    const valueProps = resolveProps(sep ?? [], {
      indicator: "map-value-ind",
      next: value,
      offset: keyNode.range[2],
      onError,
      parentIndent: bm.indent,
      startOnNewline: !key || key.type === "block-scalar"
    });
    offset = valueProps.end;
    if (valueProps.found) {
      if (implicitKey) {
        if (value?.type === "block-map" && !valueProps.hasNewline)
          onError(offset, "BLOCK_AS_IMPLICIT_KEY", "Nested mappings are not allowed in compact mappings");
        if (ctx.options.strict && keyProps.start < valueProps.found.offset - 1024)
          onError(keyNode.range, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit block mapping key");
      }
      const valueNode = value ? composeNode2(ctx, value, valueProps, onError) : composeEmptyNode2(ctx, offset, sep, null, valueProps, onError);
      if (ctx.schema.compat)
        flowIndentCheck(bm.indent, value, onError);
      offset = valueNode.range[2];
      const pair = new Pair(keyNode, valueNode);
      if (ctx.options.keepSourceTokens)
        pair.srcToken = collItem;
      map2.items.push(pair);
    } else {
      if (implicitKey)
        onError(keyNode.range, "MISSING_CHAR", "Implicit map keys need to be followed by map values");
      if (valueProps.comment) {
        if (keyNode.comment)
          keyNode.comment += "\n" + valueProps.comment;
        else
          keyNode.comment = valueProps.comment;
      }
      const pair = new Pair(keyNode);
      if (ctx.options.keepSourceTokens)
        pair.srcToken = collItem;
      map2.items.push(pair);
    }
  }
  if (commentEnd && commentEnd < offset)
    onError(commentEnd, "IMPOSSIBLE", "Map comment with trailing content");
  map2.range = [bm.offset, offset, commentEnd ?? offset];
  return map2;
}

// node_modules/yaml/browser/dist/compose/resolve-block-seq.js
function resolveBlockSeq({ composeNode: composeNode2, composeEmptyNode: composeEmptyNode2 }, ctx, bs, onError, tag) {
  const NodeClass = tag?.nodeClass ?? YAMLSeq;
  const seq2 = new NodeClass(ctx.schema);
  if (ctx.atRoot)
    ctx.atRoot = false;
  if (ctx.atKey)
    ctx.atKey = false;
  let offset = bs.offset;
  let commentEnd = null;
  for (const { start, value } of bs.items) {
    const props = resolveProps(start, {
      indicator: "seq-item-ind",
      next: value,
      offset,
      onError,
      parentIndent: bs.indent,
      startOnNewline: true
    });
    if (!props.found) {
      if (props.anchor || props.tag || value) {
        if (value?.type === "block-seq")
          onError(props.end, "BAD_INDENT", "All sequence items must start at the same column");
        else
          onError(offset, "MISSING_CHAR", "Sequence item without - indicator");
      } else {
        commentEnd = props.end;
        if (props.comment)
          seq2.comment = props.comment;
        continue;
      }
    }
    const node = value ? composeNode2(ctx, value, props, onError) : composeEmptyNode2(ctx, props.end, start, null, props, onError);
    if (ctx.schema.compat)
      flowIndentCheck(bs.indent, value, onError);
    offset = node.range[2];
    seq2.items.push(node);
  }
  seq2.range = [bs.offset, offset, commentEnd ?? offset];
  return seq2;
}

// node_modules/yaml/browser/dist/compose/resolve-end.js
function resolveEnd(end, offset, reqSpace, onError) {
  let comment = "";
  if (end) {
    let hasSpace = false;
    let sep = "";
    for (const token of end) {
      const { source, type } = token;
      switch (type) {
        case "space":
          hasSpace = true;
          break;
        case "comment": {
          if (reqSpace && !hasSpace)
            onError(token, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
          const cb = source.substring(1) || " ";
          if (!comment)
            comment = cb;
          else
            comment += sep + cb;
          sep = "";
          break;
        }
        case "newline":
          if (comment)
            sep += source;
          hasSpace = true;
          break;
        default:
          onError(token, "UNEXPECTED_TOKEN", `Unexpected ${type} at node end`);
      }
      offset += source.length;
    }
  }
  return { comment, offset };
}

// node_modules/yaml/browser/dist/compose/resolve-flow-collection.js
var blockMsg = "Block collections are not allowed within flow collections";
var isBlock = (token) => token && (token.type === "block-map" || token.type === "block-seq");
function resolveFlowCollection({ composeNode: composeNode2, composeEmptyNode: composeEmptyNode2 }, ctx, fc, onError, tag) {
  const isMap2 = fc.start.source === "{";
  const fcName = isMap2 ? "flow map" : "flow sequence";
  const NodeClass = tag?.nodeClass ?? (isMap2 ? YAMLMap : YAMLSeq);
  const coll = new NodeClass(ctx.schema);
  coll.flow = true;
  const atRoot = ctx.atRoot;
  if (atRoot)
    ctx.atRoot = false;
  if (ctx.atKey)
    ctx.atKey = false;
  let offset = fc.offset + fc.start.source.length;
  for (let i = 0; i < fc.items.length; ++i) {
    const collItem = fc.items[i];
    const { start, key, sep, value } = collItem;
    const props = resolveProps(start, {
      flow: fcName,
      indicator: "explicit-key-ind",
      next: key ?? sep?.[0],
      offset,
      onError,
      parentIndent: fc.indent,
      startOnNewline: false
    });
    if (!props.found) {
      if (!props.anchor && !props.tag && !sep && !value) {
        if (i === 0 && props.comma)
          onError(props.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${fcName}`);
        else if (i < fc.items.length - 1)
          onError(props.start, "UNEXPECTED_TOKEN", `Unexpected empty item in ${fcName}`);
        if (props.comment) {
          if (coll.comment)
            coll.comment += "\n" + props.comment;
          else
            coll.comment = props.comment;
        }
        offset = props.end;
        continue;
      }
      if (!isMap2 && ctx.options.strict && containsNewline(key))
        onError(
          key,
          // checked by containsNewline()
          "MULTILINE_IMPLICIT_KEY",
          "Implicit keys of flow sequence pairs need to be on a single line"
        );
    }
    if (i === 0) {
      if (props.comma)
        onError(props.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${fcName}`);
    } else {
      if (!props.comma)
        onError(props.start, "MISSING_CHAR", `Missing , between ${fcName} items`);
      if (props.comment) {
        let prevItemComment = "";
        loop: for (const st of start) {
          switch (st.type) {
            case "comma":
            case "space":
              break;
            case "comment":
              prevItemComment = st.source.substring(1);
              break loop;
            default:
              break loop;
          }
        }
        if (prevItemComment) {
          let prev = coll.items[coll.items.length - 1];
          if (isPair(prev))
            prev = prev.value ?? prev.key;
          if (prev.comment)
            prev.comment += "\n" + prevItemComment;
          else
            prev.comment = prevItemComment;
          props.comment = props.comment.substring(prevItemComment.length + 1);
        }
      }
    }
    if (!isMap2 && !sep && !props.found) {
      const valueNode = value ? composeNode2(ctx, value, props, onError) : composeEmptyNode2(ctx, props.end, sep, null, props, onError);
      coll.items.push(valueNode);
      offset = valueNode.range[2];
      if (isBlock(value))
        onError(valueNode.range, "BLOCK_IN_FLOW", blockMsg);
    } else {
      ctx.atKey = true;
      const keyStart = props.end;
      const keyNode = key ? composeNode2(ctx, key, props, onError) : composeEmptyNode2(ctx, keyStart, start, null, props, onError);
      if (isBlock(key))
        onError(keyNode.range, "BLOCK_IN_FLOW", blockMsg);
      ctx.atKey = false;
      const valueProps = resolveProps(sep ?? [], {
        flow: fcName,
        indicator: "map-value-ind",
        next: value,
        offset: keyNode.range[2],
        onError,
        parentIndent: fc.indent,
        startOnNewline: false
      });
      if (valueProps.found) {
        if (!isMap2 && !props.found && ctx.options.strict) {
          if (sep)
            for (const st of sep) {
              if (st === valueProps.found)
                break;
              if (st.type === "newline") {
                onError(st, "MULTILINE_IMPLICIT_KEY", "Implicit keys of flow sequence pairs need to be on a single line");
                break;
              }
            }
          if (props.start < valueProps.found.offset - 1024)
            onError(valueProps.found, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit flow sequence key");
        }
      } else if (value) {
        if ("source" in value && value.source?.[0] === ":")
          onError(value, "MISSING_CHAR", `Missing space after : in ${fcName}`);
        else
          onError(valueProps.start, "MISSING_CHAR", `Missing , or : between ${fcName} items`);
      }
      const valueNode = value ? composeNode2(ctx, value, valueProps, onError) : valueProps.found ? composeEmptyNode2(ctx, valueProps.end, sep, null, valueProps, onError) : null;
      if (valueNode) {
        if (isBlock(value))
          onError(valueNode.range, "BLOCK_IN_FLOW", blockMsg);
      } else if (valueProps.comment) {
        if (keyNode.comment)
          keyNode.comment += "\n" + valueProps.comment;
        else
          keyNode.comment = valueProps.comment;
      }
      const pair = new Pair(keyNode, valueNode);
      if (ctx.options.keepSourceTokens)
        pair.srcToken = collItem;
      if (isMap2) {
        const map2 = coll;
        if (mapIncludes(ctx, map2.items, keyNode))
          onError(keyStart, "DUPLICATE_KEY", "Map keys must be unique");
        map2.items.push(pair);
      } else {
        const map2 = new YAMLMap(ctx.schema);
        map2.flow = true;
        map2.items.push(pair);
        const endRange = (valueNode ?? keyNode).range;
        map2.range = [keyNode.range[0], endRange[1], endRange[2]];
        coll.items.push(map2);
      }
      offset = valueNode ? valueNode.range[2] : valueProps.end;
    }
  }
  const expectedEnd = isMap2 ? "}" : "]";
  const [ce, ...ee] = fc.end;
  let cePos = offset;
  if (ce?.source === expectedEnd)
    cePos = ce.offset + ce.source.length;
  else {
    const name = fcName[0].toUpperCase() + fcName.substring(1);
    const msg = atRoot ? `${name} must end with a ${expectedEnd}` : `${name} in block collection must be sufficiently indented and end with a ${expectedEnd}`;
    onError(offset, atRoot ? "MISSING_CHAR" : "BAD_INDENT", msg);
    if (ce && ce.source.length !== 1)
      ee.unshift(ce);
  }
  if (ee.length > 0) {
    const end = resolveEnd(ee, cePos, ctx.options.strict, onError);
    if (end.comment) {
      if (coll.comment)
        coll.comment += "\n" + end.comment;
      else
        coll.comment = end.comment;
    }
    coll.range = [fc.offset, cePos, end.offset];
  } else {
    coll.range = [fc.offset, cePos, cePos];
  }
  return coll;
}

// node_modules/yaml/browser/dist/compose/compose-collection.js
function resolveCollection(CN2, ctx, token, onError, tagName, tag) {
  const coll = token.type === "block-map" ? resolveBlockMap(CN2, ctx, token, onError, tag) : token.type === "block-seq" ? resolveBlockSeq(CN2, ctx, token, onError, tag) : resolveFlowCollection(CN2, ctx, token, onError, tag);
  const Coll = coll.constructor;
  if (tagName === "!" || tagName === Coll.tagName) {
    coll.tag = Coll.tagName;
    return coll;
  }
  if (tagName)
    coll.tag = tagName;
  return coll;
}
function composeCollection(CN2, ctx, token, props, onError) {
  const tagToken = props.tag;
  const tagName = !tagToken ? null : ctx.directives.tagName(tagToken.source, (msg) => onError(tagToken, "TAG_RESOLVE_FAILED", msg));
  if (token.type === "block-seq") {
    const { anchor, newlineAfterProp: nl } = props;
    const lastProp = anchor && tagToken ? anchor.offset > tagToken.offset ? anchor : tagToken : anchor ?? tagToken;
    if (lastProp && (!nl || nl.offset < lastProp.offset)) {
      const message = "Missing newline after block sequence props";
      onError(lastProp, "MISSING_CHAR", message);
    }
  }
  const expType = token.type === "block-map" ? "map" : token.type === "block-seq" ? "seq" : token.start.source === "{" ? "map" : "seq";
  if (!tagToken || !tagName || tagName === "!" || tagName === YAMLMap.tagName && expType === "map" || tagName === YAMLSeq.tagName && expType === "seq") {
    return resolveCollection(CN2, ctx, token, onError, tagName);
  }
  let tag = ctx.schema.tags.find((t) => t.tag === tagName && t.collection === expType);
  if (!tag) {
    const kt = ctx.schema.knownTags[tagName];
    if (kt?.collection === expType) {
      ctx.schema.tags.push(Object.assign({}, kt, { default: false }));
      tag = kt;
    } else {
      if (kt) {
        onError(tagToken, "BAD_COLLECTION_TYPE", `${kt.tag} used for ${expType} collection, but expects ${kt.collection ?? "scalar"}`, true);
      } else {
        onError(tagToken, "TAG_RESOLVE_FAILED", `Unresolved tag: ${tagName}`, true);
      }
      return resolveCollection(CN2, ctx, token, onError, tagName);
    }
  }
  const coll = resolveCollection(CN2, ctx, token, onError, tagName, tag);
  const res = tag.resolve?.(coll, (msg) => onError(tagToken, "TAG_RESOLVE_FAILED", msg), ctx.options) ?? coll;
  const node = isNode(res) ? res : new Scalar(res);
  node.range = coll.range;
  node.tag = tagName;
  if (tag?.format)
    node.format = tag.format;
  return node;
}

// node_modules/yaml/browser/dist/compose/resolve-block-scalar.js
function resolveBlockScalar(ctx, scalar, onError) {
  const start = scalar.offset;
  const header = parseBlockScalarHeader(scalar, ctx.options.strict, onError);
  if (!header)
    return { value: "", type: null, comment: "", range: [start, start, start] };
  const type = header.mode === ">" ? Scalar.BLOCK_FOLDED : Scalar.BLOCK_LITERAL;
  const lines = scalar.source ? splitLines(scalar.source) : [];
  let chompStart = lines.length;
  for (let i = lines.length - 1; i >= 0; --i) {
    const content = lines[i][1];
    if (content === "" || content === "\r")
      chompStart = i;
    else
      break;
  }
  if (chompStart === 0) {
    const value2 = header.chomp === "+" && lines.length > 0 ? "\n".repeat(Math.max(1, lines.length - 1)) : "";
    let end2 = start + header.length;
    if (scalar.source)
      end2 += scalar.source.length;
    return { value: value2, type, comment: header.comment, range: [start, end2, end2] };
  }
  let trimIndent = scalar.indent + header.indent;
  let offset = scalar.offset + header.length;
  let contentStart = 0;
  for (let i = 0; i < chompStart; ++i) {
    const [indent, content] = lines[i];
    if (content === "" || content === "\r") {
      if (header.indent === 0 && indent.length > trimIndent)
        trimIndent = indent.length;
    } else {
      if (indent.length < trimIndent) {
        const message = "Block scalars with more-indented leading empty lines must use an explicit indentation indicator";
        onError(offset + indent.length, "MISSING_CHAR", message);
      }
      if (header.indent === 0)
        trimIndent = indent.length;
      contentStart = i;
      if (trimIndent === 0 && !ctx.atRoot) {
        const message = "Block scalar values in collections must be indented";
        onError(offset, "BAD_INDENT", message);
      }
      break;
    }
    offset += indent.length + content.length + 1;
  }
  for (let i = lines.length - 1; i >= chompStart; --i) {
    if (lines[i][0].length > trimIndent)
      chompStart = i + 1;
  }
  let value = "";
  let sep = "";
  let prevMoreIndented = false;
  for (let i = 0; i < contentStart; ++i)
    value += lines[i][0].slice(trimIndent) + "\n";
  for (let i = contentStart; i < chompStart; ++i) {
    let [indent, content] = lines[i];
    offset += indent.length + content.length + 1;
    const crlf = content[content.length - 1] === "\r";
    if (crlf)
      content = content.slice(0, -1);
    if (content && indent.length < trimIndent) {
      const src = header.indent ? "explicit indentation indicator" : "first line";
      const message = `Block scalar lines must not be less indented than their ${src}`;
      onError(offset - content.length - (crlf ? 2 : 1), "BAD_INDENT", message);
      indent = "";
    }
    if (type === Scalar.BLOCK_LITERAL) {
      value += sep + indent.slice(trimIndent) + content;
      sep = "\n";
    } else if (indent.length > trimIndent || content[0] === "	") {
      if (sep === " ")
        sep = "\n";
      else if (!prevMoreIndented && sep === "\n")
        sep = "\n\n";
      value += sep + indent.slice(trimIndent) + content;
      sep = "\n";
      prevMoreIndented = true;
    } else if (content === "") {
      if (sep === "\n")
        value += "\n";
      else
        sep = "\n";
    } else {
      value += sep + content;
      sep = " ";
      prevMoreIndented = false;
    }
  }
  switch (header.chomp) {
    case "-":
      break;
    case "+":
      for (let i = chompStart; i < lines.length; ++i)
        value += "\n" + lines[i][0].slice(trimIndent);
      if (value[value.length - 1] !== "\n")
        value += "\n";
      break;
    default:
      value += "\n";
  }
  const end = start + header.length + scalar.source.length;
  return { value, type, comment: header.comment, range: [start, end, end] };
}
function parseBlockScalarHeader({ offset, props }, strict, onError) {
  if (props[0].type !== "block-scalar-header") {
    onError(props[0], "IMPOSSIBLE", "Block scalar header not found");
    return null;
  }
  const { source } = props[0];
  const mode = source[0];
  let indent = 0;
  let chomp = "";
  let error = -1;
  for (let i = 1; i < source.length; ++i) {
    const ch = source[i];
    if (!chomp && (ch === "-" || ch === "+"))
      chomp = ch;
    else {
      const n = Number(ch);
      if (!indent && n)
        indent = n;
      else if (error === -1)
        error = offset + i;
    }
  }
  if (error !== -1)
    onError(error, "UNEXPECTED_TOKEN", `Block scalar header includes extra characters: ${source}`);
  let hasSpace = false;
  let comment = "";
  let length = source.length;
  for (let i = 1; i < props.length; ++i) {
    const token = props[i];
    switch (token.type) {
      case "space":
        hasSpace = true;
      // fallthrough
      case "newline":
        length += token.source.length;
        break;
      case "comment":
        if (strict && !hasSpace) {
          const message = "Comments must be separated from other tokens by white space characters";
          onError(token, "MISSING_CHAR", message);
        }
        length += token.source.length;
        comment = token.source.substring(1);
        break;
      case "error":
        onError(token, "UNEXPECTED_TOKEN", token.message);
        length += token.source.length;
        break;
      /* istanbul ignore next should not happen */
      default: {
        const message = `Unexpected token in block scalar header: ${token.type}`;
        onError(token, "UNEXPECTED_TOKEN", message);
        const ts = token.source;
        if (ts && typeof ts === "string")
          length += ts.length;
      }
    }
  }
  return { mode, indent, chomp, comment, length };
}
function splitLines(source) {
  const split = source.split(/\n( *)/);
  const first = split[0];
  const m = first.match(/^( *)/);
  const line0 = m?.[1] ? [m[1], first.slice(m[1].length)] : ["", first];
  const lines = [line0];
  for (let i = 1; i < split.length; i += 2)
    lines.push([split[i], split[i + 1]]);
  return lines;
}

// node_modules/yaml/browser/dist/compose/resolve-flow-scalar.js
function resolveFlowScalar(scalar, strict, onError) {
  const { offset, type, source, end } = scalar;
  let _type;
  let value;
  const _onError = (rel, code, msg) => onError(offset + rel, code, msg);
  switch (type) {
    case "scalar":
      _type = Scalar.PLAIN;
      value = plainValue(source, _onError);
      break;
    case "single-quoted-scalar":
      _type = Scalar.QUOTE_SINGLE;
      value = singleQuotedValue(source, _onError);
      break;
    case "double-quoted-scalar":
      _type = Scalar.QUOTE_DOUBLE;
      value = doubleQuotedValue(source, _onError);
      break;
    /* istanbul ignore next should not happen */
    default:
      onError(scalar, "UNEXPECTED_TOKEN", `Expected a flow scalar value, but found: ${type}`);
      return {
        value: "",
        type: null,
        comment: "",
        range: [offset, offset + source.length, offset + source.length]
      };
  }
  const valueEnd = offset + source.length;
  const re = resolveEnd(end, valueEnd, strict, onError);
  return {
    value,
    type: _type,
    comment: re.comment,
    range: [offset, valueEnd, re.offset]
  };
}
function plainValue(source, onError) {
  let badChar = "";
  switch (source[0]) {
    /* istanbul ignore next should not happen */
    case "	":
      badChar = "a tab character";
      break;
    case ",":
      badChar = "flow indicator character ,";
      break;
    case "%":
      badChar = "directive indicator character %";
      break;
    case "|":
    case ">": {
      badChar = `block scalar indicator ${source[0]}`;
      break;
    }
    case "@":
    case "`": {
      badChar = `reserved character ${source[0]}`;
      break;
    }
  }
  if (badChar)
    onError(0, "BAD_SCALAR_START", `Plain value cannot start with ${badChar}`);
  return foldLines(source);
}
function singleQuotedValue(source, onError) {
  if (source[source.length - 1] !== "'" || source.length === 1)
    onError(source.length, "MISSING_CHAR", "Missing closing 'quote");
  return foldLines(source.slice(1, -1)).replace(/''/g, "'");
}
function foldLines(source) {
  let first, line;
  try {
    first = new RegExp("(.*?)(?<![ 	])[ 	]*\r?\n", "sy");
    line = new RegExp("[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?\n", "sy");
  } catch {
    first = /(.*?)[ \t]*\r?\n/sy;
    line = /[ \t]*(.*?)[ \t]*\r?\n/sy;
  }
  let match = first.exec(source);
  if (!match)
    return source;
  let res = match[1];
  let sep = " ";
  let pos = first.lastIndex;
  line.lastIndex = pos;
  while (match = line.exec(source)) {
    if (match[1] === "") {
      if (sep === "\n")
        res += sep;
      else
        sep = "\n";
    } else {
      res += sep + match[1];
      sep = " ";
    }
    pos = line.lastIndex;
  }
  const last = /[ \t]*(.*)/sy;
  last.lastIndex = pos;
  match = last.exec(source);
  return res + sep + (match?.[1] ?? "");
}
function doubleQuotedValue(source, onError) {
  let res = "";
  for (let i = 1; i < source.length - 1; ++i) {
    const ch = source[i];
    if (ch === "\r" && source[i + 1] === "\n")
      continue;
    if (ch === "\n") {
      const { fold, offset } = foldNewline(source, i);
      res += fold;
      i = offset;
    } else if (ch === "\\") {
      let next = source[++i];
      const cc = escapeCodes[next];
      if (cc)
        res += cc;
      else if (next === "\n") {
        next = source[i + 1];
        while (next === " " || next === "	")
          next = source[++i + 1];
      } else if (next === "\r" && source[i + 1] === "\n") {
        next = source[++i + 1];
        while (next === " " || next === "	")
          next = source[++i + 1];
      } else if (next === "x" || next === "u" || next === "U") {
        const length = next === "x" ? 2 : next === "u" ? 4 : 8;
        res += parseCharCode(source, i + 1, length, onError);
        i += length;
      } else {
        const raw = source.substr(i - 1, 2);
        onError(i - 1, "BAD_DQ_ESCAPE", `Invalid escape sequence ${raw}`);
        res += raw;
      }
    } else if (ch === " " || ch === "	") {
      const wsStart = i;
      let next = source[i + 1];
      while (next === " " || next === "	")
        next = source[++i + 1];
      if (next !== "\n" && !(next === "\r" && source[i + 2] === "\n"))
        res += i > wsStart ? source.slice(wsStart, i + 1) : ch;
    } else {
      res += ch;
    }
  }
  if (source[source.length - 1] !== '"' || source.length === 1)
    onError(source.length, "MISSING_CHAR", 'Missing closing "quote');
  return res;
}
function foldNewline(source, offset) {
  let fold = "";
  let ch = source[offset + 1];
  while (ch === " " || ch === "	" || ch === "\n" || ch === "\r") {
    if (ch === "\r" && source[offset + 2] !== "\n")
      break;
    if (ch === "\n")
      fold += "\n";
    offset += 1;
    ch = source[offset + 1];
  }
  if (!fold)
    fold = " ";
  return { fold, offset };
}
var escapeCodes = {
  "0": "\0",
  // null character
  a: "\x07",
  // bell character
  b: "\b",
  // backspace
  e: "\x1B",
  // escape character
  f: "\f",
  // form feed
  n: "\n",
  // line feed
  r: "\r",
  // carriage return
  t: "	",
  // horizontal tab
  v: "\v",
  // vertical tab
  N: "\x85",
  // Unicode next line
  _: "\xA0",
  // Unicode non-breaking space
  L: "\u2028",
  // Unicode line separator
  P: "\u2029",
  // Unicode paragraph separator
  " ": " ",
  '"': '"',
  "/": "/",
  "\\": "\\",
  "	": "	"
};
function parseCharCode(source, offset, length, onError) {
  const cc = source.substr(offset, length);
  const ok = cc.length === length && /^[0-9a-fA-F]+$/.test(cc);
  const code = ok ? parseInt(cc, 16) : NaN;
  try {
    return String.fromCodePoint(code);
  } catch {
    const raw = source.substr(offset - 2, length + 2);
    onError(offset - 2, "BAD_DQ_ESCAPE", `Invalid escape sequence ${raw}`);
    return raw;
  }
}

// node_modules/yaml/browser/dist/compose/compose-scalar.js
function composeScalar(ctx, token, tagToken, onError) {
  const { value, type, comment, range } = token.type === "block-scalar" ? resolveBlockScalar(ctx, token, onError) : resolveFlowScalar(token, ctx.options.strict, onError);
  const tagName = tagToken ? ctx.directives.tagName(tagToken.source, (msg) => onError(tagToken, "TAG_RESOLVE_FAILED", msg)) : null;
  let tag;
  if (ctx.options.stringKeys && ctx.atKey) {
    tag = ctx.schema[SCALAR];
  } else if (tagName)
    tag = findScalarTagByName(ctx.schema, value, tagName, tagToken, onError);
  else if (token.type === "scalar")
    tag = findScalarTagByTest(ctx, value, token, onError);
  else
    tag = ctx.schema[SCALAR];
  let scalar;
  try {
    const res = tag.resolve(value, (msg) => onError(tagToken ?? token, "TAG_RESOLVE_FAILED", msg), ctx.options);
    scalar = isScalar(res) ? res : new Scalar(res);
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    onError(tagToken ?? token, "TAG_RESOLVE_FAILED", msg);
    scalar = new Scalar(value);
  }
  scalar.range = range;
  scalar.source = value;
  if (type)
    scalar.type = type;
  if (tagName)
    scalar.tag = tagName;
  if (tag.format)
    scalar.format = tag.format;
  if (comment)
    scalar.comment = comment;
  return scalar;
}
function findScalarTagByName(schema4, value, tagName, tagToken, onError) {
  if (tagName === "!")
    return schema4[SCALAR];
  const matchWithTest = [];
  for (const tag of schema4.tags) {
    if (!tag.collection && tag.tag === tagName) {
      if (tag.default && tag.test)
        matchWithTest.push(tag);
      else
        return tag;
    }
  }
  for (const tag of matchWithTest)
    if (tag.test?.test(value))
      return tag;
  const kt = schema4.knownTags[tagName];
  if (kt && !kt.collection) {
    schema4.tags.push(Object.assign({}, kt, { default: false, test: void 0 }));
    return kt;
  }
  onError(tagToken, "TAG_RESOLVE_FAILED", `Unresolved tag: ${tagName}`, tagName !== "tag:yaml.org,2002:str");
  return schema4[SCALAR];
}
function findScalarTagByTest({ atKey, directives, schema: schema4 }, value, token, onError) {
  const tag = schema4.tags.find((tag2) => (tag2.default === true || atKey && tag2.default === "key") && tag2.test?.test(value)) || schema4[SCALAR];
  if (schema4.compat) {
    const compat = schema4.compat.find((tag2) => tag2.default && tag2.test?.test(value)) ?? schema4[SCALAR];
    if (tag.tag !== compat.tag) {
      const ts = directives.tagString(tag.tag);
      const cs = directives.tagString(compat.tag);
      const msg = `Value may be parsed as either ${ts} or ${cs}`;
      onError(token, "TAG_RESOLVE_FAILED", msg, true);
    }
  }
  return tag;
}

// node_modules/yaml/browser/dist/compose/util-empty-scalar-position.js
function emptyScalarPosition(offset, before, pos) {
  if (before) {
    pos ?? (pos = before.length);
    for (let i = pos - 1; i >= 0; --i) {
      let st = before[i];
      switch (st.type) {
        case "space":
        case "comment":
        case "newline":
          offset -= st.source.length;
          continue;
      }
      st = before[++i];
      while (st?.type === "space") {
        offset += st.source.length;
        st = before[++i];
      }
      break;
    }
  }
  return offset;
}

// node_modules/yaml/browser/dist/compose/compose-node.js
var CN = { composeNode, composeEmptyNode };
function composeNode(ctx, token, props, onError) {
  const atKey = ctx.atKey;
  const { spaceBefore, comment, anchor, tag } = props;
  let node;
  let isSrcToken = true;
  switch (token.type) {
    case "alias":
      node = composeAlias(ctx, token, onError);
      if (anchor || tag)
        onError(token, "ALIAS_PROPS", "An alias node must not specify any properties");
      break;
    case "scalar":
    case "single-quoted-scalar":
    case "double-quoted-scalar":
    case "block-scalar":
      node = composeScalar(ctx, token, tag, onError);
      if (anchor)
        node.anchor = anchor.source.substring(1);
      break;
    case "block-map":
    case "block-seq":
    case "flow-collection":
      try {
        node = composeCollection(CN, ctx, token, props, onError);
        if (anchor)
          node.anchor = anchor.source.substring(1);
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        onError(token, "RESOURCE_EXHAUSTION", message);
      }
      break;
    default: {
      const message = token.type === "error" ? token.message : `Unsupported token (type: ${token.type})`;
      onError(token, "UNEXPECTED_TOKEN", message);
      isSrcToken = false;
    }
  }
  node ?? (node = composeEmptyNode(ctx, token.offset, void 0, null, props, onError));
  if (anchor && node.anchor === "")
    onError(anchor, "BAD_ALIAS", "Anchor cannot be an empty string");
  if (atKey && ctx.options.stringKeys && (!isScalar(node) || typeof node.value !== "string" || node.tag && node.tag !== "tag:yaml.org,2002:str")) {
    const msg = "With stringKeys, all keys must be strings";
    onError(tag ?? token, "NON_STRING_KEY", msg);
  }
  if (spaceBefore)
    node.spaceBefore = true;
  if (comment) {
    if (token.type === "scalar" && token.source === "")
      node.comment = comment;
    else
      node.commentBefore = comment;
  }
  if (ctx.options.keepSourceTokens && isSrcToken)
    node.srcToken = token;
  return node;
}
function composeEmptyNode(ctx, offset, before, pos, { spaceBefore, comment, anchor, tag, end }, onError) {
  const token = {
    type: "scalar",
    offset: emptyScalarPosition(offset, before, pos),
    indent: -1,
    source: ""
  };
  const node = composeScalar(ctx, token, tag, onError);
  if (anchor) {
    node.anchor = anchor.source.substring(1);
    if (node.anchor === "")
      onError(anchor, "BAD_ALIAS", "Anchor cannot be an empty string");
  }
  if (spaceBefore)
    node.spaceBefore = true;
  if (comment) {
    node.comment = comment;
    node.range[2] = end;
  }
  return node;
}
function composeAlias({ options }, { offset, source, end }, onError) {
  const alias = new Alias(source.substring(1));
  if (alias.source === "")
    onError(offset, "BAD_ALIAS", "Alias cannot be an empty string");
  if (alias.source.endsWith(":"))
    onError(offset + source.length - 1, "BAD_ALIAS", "Alias ending in : is ambiguous", true);
  const valueEnd = offset + source.length;
  const re = resolveEnd(end, valueEnd, options.strict, onError);
  alias.range = [offset, valueEnd, re.offset];
  if (re.comment)
    alias.comment = re.comment;
  return alias;
}

// node_modules/yaml/browser/dist/compose/compose-doc.js
function composeDoc(options, directives, { offset, start, value, end }, onError) {
  const opts = Object.assign({ _directives: directives }, options);
  const doc = new Document(void 0, opts);
  const ctx = {
    atKey: false,
    atRoot: true,
    directives: doc.directives,
    options: doc.options,
    schema: doc.schema
  };
  const props = resolveProps(start, {
    indicator: "doc-start",
    next: value ?? end?.[0],
    offset,
    onError,
    parentIndent: 0,
    startOnNewline: true
  });
  if (props.found) {
    doc.directives.docStart = true;
    if (value && (value.type === "block-map" || value.type === "block-seq") && !props.hasNewline)
      onError(props.end, "MISSING_CHAR", "Block collection cannot start on same line with directives-end marker");
  }
  doc.contents = value ? composeNode(ctx, value, props, onError) : composeEmptyNode(ctx, props.end, start, null, props, onError);
  const contentEnd = doc.contents.range[2];
  const re = resolveEnd(end, contentEnd, false, onError);
  if (re.comment)
    doc.comment = re.comment;
  doc.range = [offset, contentEnd, re.offset];
  return doc;
}

// node_modules/yaml/browser/dist/compose/composer.js
function getErrorPos(src) {
  if (typeof src === "number")
    return [src, src + 1];
  if (Array.isArray(src))
    return src.length === 2 ? src : [src[0], src[1]];
  const { offset, source } = src;
  return [offset, offset + (typeof source === "string" ? source.length : 1)];
}
function parsePrelude(prelude) {
  let comment = "";
  let atComment = false;
  let afterEmptyLine = false;
  for (let i = 0; i < prelude.length; ++i) {
    const source = prelude[i];
    switch (source[0]) {
      case "#":
        comment += (comment === "" ? "" : afterEmptyLine ? "\n\n" : "\n") + (source.substring(1) || " ");
        atComment = true;
        afterEmptyLine = false;
        break;
      case "%":
        if (prelude[i + 1]?.[0] !== "#")
          i += 1;
        atComment = false;
        break;
      default:
        if (!atComment)
          afterEmptyLine = true;
        atComment = false;
    }
  }
  return { comment, afterEmptyLine };
}
var Composer = class {
  constructor(options = {}) {
    this.doc = null;
    this.atDirectives = false;
    this.prelude = [];
    this.errors = [];
    this.warnings = [];
    this.onError = (source, code, message, warning) => {
      const pos = getErrorPos(source);
      if (warning)
        this.warnings.push(new YAMLWarning(pos, code, message));
      else
        this.errors.push(new YAMLParseError(pos, code, message));
    };
    this.directives = new Directives({ version: options.version || "1.2" });
    this.options = options;
  }
  decorate(doc, afterDoc) {
    const { comment, afterEmptyLine } = parsePrelude(this.prelude);
    if (comment) {
      const dc = doc.contents;
      if (afterDoc) {
        doc.comment = doc.comment ? `${doc.comment}
${comment}` : comment;
      } else if (afterEmptyLine || doc.directives.docStart || !dc) {
        doc.commentBefore = comment;
      } else if (isCollection(dc) && !dc.flow && dc.items.length > 0) {
        let it = dc.items[0];
        if (isPair(it))
          it = it.key;
        const cb = it.commentBefore;
        it.commentBefore = cb ? `${comment}
${cb}` : comment;
      } else {
        const cb = dc.commentBefore;
        dc.commentBefore = cb ? `${comment}
${cb}` : comment;
      }
    }
    if (afterDoc) {
      for (let i = 0; i < this.errors.length; ++i)
        doc.errors.push(this.errors[i]);
      for (let i = 0; i < this.warnings.length; ++i)
        doc.warnings.push(this.warnings[i]);
    } else {
      doc.errors = this.errors;
      doc.warnings = this.warnings;
    }
    this.prelude = [];
    this.errors = [];
    this.warnings = [];
  }
  /**
   * Current stream status information.
   *
   * Mostly useful at the end of input for an empty stream.
   */
  streamInfo() {
    return {
      comment: parsePrelude(this.prelude).comment,
      directives: this.directives,
      errors: this.errors,
      warnings: this.warnings
    };
  }
  /**
   * Compose tokens into documents.
   *
   * @param forceDoc - If the stream contains no document, still emit a final document including any comments and directives that would be applied to a subsequent document.
   * @param endOffset - Should be set if `forceDoc` is also set, to set the document range end and to indicate errors correctly.
   */
  *compose(tokens, forceDoc = false, endOffset = -1) {
    for (const token of tokens)
      yield* this.next(token);
    yield* this.end(forceDoc, endOffset);
  }
  /** Advance the composer by one CST token. */
  *next(token) {
    switch (token.type) {
      case "directive":
        this.directives.add(token.source, (offset, message, warning) => {
          const pos = getErrorPos(token);
          pos[0] += offset;
          this.onError(pos, "BAD_DIRECTIVE", message, warning);
        });
        this.prelude.push(token.source);
        this.atDirectives = true;
        break;
      case "document": {
        const doc = composeDoc(this.options, this.directives, token, this.onError);
        if (this.atDirectives && !doc.directives.docStart)
          this.onError(token, "MISSING_CHAR", "Missing directives-end/doc-start indicator line");
        this.decorate(doc, false);
        if (this.doc)
          yield this.doc;
        this.doc = doc;
        this.atDirectives = false;
        break;
      }
      case "byte-order-mark":
      case "space":
        break;
      case "comment":
      case "newline":
        this.prelude.push(token.source);
        break;
      case "error": {
        const msg = token.source ? `${token.message}: ${JSON.stringify(token.source)}` : token.message;
        const error = new YAMLParseError(getErrorPos(token), "UNEXPECTED_TOKEN", msg);
        if (this.atDirectives || !this.doc)
          this.errors.push(error);
        else
          this.doc.errors.push(error);
        break;
      }
      case "doc-end": {
        if (!this.doc) {
          const msg = "Unexpected doc-end without preceding document";
          this.errors.push(new YAMLParseError(getErrorPos(token), "UNEXPECTED_TOKEN", msg));
          break;
        }
        this.doc.directives.docEnd = true;
        const end = resolveEnd(token.end, token.offset + token.source.length, this.doc.options.strict, this.onError);
        this.decorate(this.doc, true);
        if (end.comment) {
          const dc = this.doc.comment;
          this.doc.comment = dc ? `${dc}
${end.comment}` : end.comment;
        }
        this.doc.range[2] = end.offset;
        break;
      }
      default:
        this.errors.push(new YAMLParseError(getErrorPos(token), "UNEXPECTED_TOKEN", `Unsupported token ${token.type}`));
    }
  }
  /**
   * Call at end of input to yield any remaining document.
   *
   * @param forceDoc - If the stream contains no document, still emit a final document including any comments and directives that would be applied to a subsequent document.
   * @param endOffset - Should be set if `forceDoc` is also set, to set the document range end and to indicate errors correctly.
   */
  *end(forceDoc = false, endOffset = -1) {
    if (this.doc) {
      this.decorate(this.doc, true);
      yield this.doc;
      this.doc = null;
    } else if (forceDoc) {
      const opts = Object.assign({ _directives: this.directives }, this.options);
      const doc = new Document(void 0, opts);
      if (this.atDirectives)
        this.onError(endOffset, "MISSING_CHAR", "Missing directives-end indicator line");
      doc.range = [0, endOffset, endOffset];
      this.decorate(doc, false);
      yield doc;
    }
  }
};

// node_modules/yaml/browser/dist/parse/cst-visit.js
var BREAK2 = /* @__PURE__ */ Symbol("break visit");
var SKIP2 = /* @__PURE__ */ Symbol("skip children");
var REMOVE2 = /* @__PURE__ */ Symbol("remove item");
function visit2(cst, visitor) {
  if ("type" in cst && cst.type === "document")
    cst = { start: cst.start, value: cst.value };
  _visit(Object.freeze([]), cst, visitor);
}
visit2.BREAK = BREAK2;
visit2.SKIP = SKIP2;
visit2.REMOVE = REMOVE2;
visit2.itemAtPath = (cst, path) => {
  let item = cst;
  for (const [field, index] of path) {
    const tok = item?.[field];
    if (tok && "items" in tok) {
      item = tok.items[index];
    } else
      return void 0;
  }
  return item;
};
visit2.parentCollection = (cst, path) => {
  const parent = visit2.itemAtPath(cst, path.slice(0, -1));
  const field = path[path.length - 1][0];
  const coll = parent?.[field];
  if (coll && "items" in coll)
    return coll;
  throw new Error("Parent collection not found");
};
function _visit(path, item, visitor) {
  let ctrl = visitor(item, path);
  if (typeof ctrl === "symbol")
    return ctrl;
  for (const field of ["key", "value"]) {
    const token = item[field];
    if (token && "items" in token) {
      for (let i = 0; i < token.items.length; ++i) {
        const ci = _visit(Object.freeze(path.concat([[field, i]])), token.items[i], visitor);
        if (typeof ci === "number")
          i = ci - 1;
        else if (ci === BREAK2)
          return BREAK2;
        else if (ci === REMOVE2) {
          token.items.splice(i, 1);
          i -= 1;
        }
      }
      if (typeof ctrl === "function" && field === "key")
        ctrl = ctrl(item, path);
    }
  }
  return typeof ctrl === "function" ? ctrl(item, path) : ctrl;
}

// node_modules/yaml/browser/dist/parse/cst.js
var BOM = "\uFEFF";
var DOCUMENT = "";
var FLOW_END = "";
var SCALAR2 = "";
function tokenType(source) {
  switch (source) {
    case BOM:
      return "byte-order-mark";
    case DOCUMENT:
      return "doc-mode";
    case FLOW_END:
      return "flow-error-end";
    case SCALAR2:
      return "scalar";
    case "---":
      return "doc-start";
    case "...":
      return "doc-end";
    case "":
    case "\n":
    case "\r\n":
      return "newline";
    case "-":
      return "seq-item-ind";
    case "?":
      return "explicit-key-ind";
    case ":":
      return "map-value-ind";
    case "{":
      return "flow-map-start";
    case "}":
      return "flow-map-end";
    case "[":
      return "flow-seq-start";
    case "]":
      return "flow-seq-end";
    case ",":
      return "comma";
  }
  switch (source[0]) {
    case " ":
    case "	":
      return "space";
    case "#":
      return "comment";
    case "%":
      return "directive-line";
    case "*":
      return "alias";
    case "&":
      return "anchor";
    case "!":
      return "tag";
    case "'":
      return "single-quoted-scalar";
    case '"':
      return "double-quoted-scalar";
    case "|":
    case ">":
      return "block-scalar-header";
  }
  return null;
}

// node_modules/yaml/browser/dist/parse/lexer.js
function isEmpty(ch) {
  switch (ch) {
    case void 0:
    case " ":
    case "\n":
    case "\r":
    case "	":
      return true;
    default:
      return false;
  }
}
var hexDigits = new Set("0123456789ABCDEFabcdef");
var tagChars = new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()");
var flowIndicatorChars = new Set(",[]{}");
var invalidAnchorChars = new Set(" ,[]{}\n\r	");
var isNotAnchorChar = (ch) => !ch || invalidAnchorChars.has(ch);
var Lexer = class {
  constructor() {
    this.atEnd = false;
    this.blockScalarIndent = -1;
    this.blockScalarKeep = false;
    this.buffer = "";
    this.flowKey = false;
    this.flowLevel = 0;
    this.indentNext = 0;
    this.indentValue = 0;
    this.lineEndPos = null;
    this.next = null;
    this.pos = 0;
  }
  /**
   * Generate YAML tokens from the `source` string. If `incomplete`,
   * a part of the last line may be left as a buffer for the next call.
   *
   * @returns A generator of lexical tokens
   */
  *lex(source, incomplete = false) {
    if (source) {
      if (typeof source !== "string")
        throw TypeError("source is not a string");
      this.buffer = this.buffer ? this.buffer + source : source;
      this.lineEndPos = null;
    }
    this.atEnd = !incomplete;
    let next = this.next ?? "stream";
    while (next && (incomplete || this.hasChars(1)))
      next = yield* this.parseNext(next);
  }
  atLineEnd() {
    let i = this.pos;
    let ch = this.buffer[i];
    while (ch === " " || ch === "	")
      ch = this.buffer[++i];
    if (!ch || ch === "#" || ch === "\n")
      return true;
    if (ch === "\r")
      return this.buffer[i + 1] === "\n";
    return false;
  }
  charAt(n) {
    return this.buffer[this.pos + n];
  }
  continueScalar(offset) {
    let ch = this.buffer[offset];
    if (this.indentNext > 0) {
      let indent = 0;
      while (ch === " ")
        ch = this.buffer[++indent + offset];
      if (ch === "\r") {
        const next = this.buffer[indent + offset + 1];
        if (next === "\n" || !next && !this.atEnd)
          return offset + indent + 1;
      }
      return ch === "\n" || indent >= this.indentNext || !ch && !this.atEnd ? offset + indent : -1;
    }
    if (ch === "-" || ch === ".") {
      const dt = this.buffer.substr(offset, 3);
      if ((dt === "---" || dt === "...") && isEmpty(this.buffer[offset + 3]))
        return -1;
    }
    return offset;
  }
  getLine() {
    let end = this.lineEndPos;
    if (typeof end !== "number" || end !== -1 && end < this.pos) {
      end = this.buffer.indexOf("\n", this.pos);
      this.lineEndPos = end;
    }
    if (end === -1)
      return this.atEnd ? this.buffer.substring(this.pos) : null;
    if (this.buffer[end - 1] === "\r")
      end -= 1;
    return this.buffer.substring(this.pos, end);
  }
  hasChars(n) {
    return this.pos + n <= this.buffer.length;
  }
  setNext(state) {
    this.buffer = this.buffer.substring(this.pos);
    this.pos = 0;
    this.lineEndPos = null;
    this.next = state;
    return null;
  }
  peek(n) {
    return this.buffer.substr(this.pos, n);
  }
  *parseNext(next) {
    switch (next) {
      case "stream":
        return yield* this.parseStream();
      case "line-start":
        return yield* this.parseLineStart();
      case "block-start":
        return yield* this.parseBlockStart();
      case "doc":
        return yield* this.parseDocument();
      case "flow":
        return yield* this.parseFlowCollection();
      case "quoted-scalar":
        return yield* this.parseQuotedScalar();
      case "block-scalar":
        return yield* this.parseBlockScalar();
      case "plain-scalar":
        return yield* this.parsePlainScalar();
    }
  }
  *parseStream() {
    let line = this.getLine();
    if (line === null)
      return this.setNext("stream");
    if (line[0] === BOM) {
      yield* this.pushCount(1);
      line = line.substring(1);
    }
    if (line[0] === "%") {
      let dirEnd = line.length;
      let cs = line.indexOf("#");
      while (cs !== -1) {
        const ch = line[cs - 1];
        if (ch === " " || ch === "	") {
          dirEnd = cs - 1;
          break;
        } else {
          cs = line.indexOf("#", cs + 1);
        }
      }
      while (true) {
        const ch = line[dirEnd - 1];
        if (ch === " " || ch === "	")
          dirEnd -= 1;
        else
          break;
      }
      const n = (yield* this.pushCount(dirEnd)) + (yield* this.pushSpaces(true));
      yield* this.pushCount(line.length - n);
      this.pushNewline();
      return "stream";
    }
    if (this.atLineEnd()) {
      const sp = yield* this.pushSpaces(true);
      yield* this.pushCount(line.length - sp);
      yield* this.pushNewline();
      return "stream";
    }
    yield DOCUMENT;
    return yield* this.parseLineStart();
  }
  *parseLineStart() {
    const ch = this.charAt(0);
    if (!ch && !this.atEnd)
      return this.setNext("line-start");
    if (ch === "-" || ch === ".") {
      if (!this.atEnd && !this.hasChars(4))
        return this.setNext("line-start");
      const s = this.peek(3);
      if ((s === "---" || s === "...") && isEmpty(this.charAt(3))) {
        yield* this.pushCount(3);
        this.indentValue = 0;
        this.indentNext = 0;
        return s === "---" ? "doc" : "stream";
      }
    }
    this.indentValue = yield* this.pushSpaces(false);
    if (this.indentNext > this.indentValue && !isEmpty(this.charAt(1)))
      this.indentNext = this.indentValue;
    return yield* this.parseBlockStart();
  }
  *parseBlockStart() {
    const [ch0, ch1] = this.peek(2);
    if (!ch1 && !this.atEnd)
      return this.setNext("block-start");
    if ((ch0 === "-" || ch0 === "?" || ch0 === ":") && isEmpty(ch1)) {
      const n = (yield* this.pushCount(1)) + (yield* this.pushSpaces(true));
      this.indentNext = this.indentValue + 1;
      this.indentValue += n;
      return "block-start";
    }
    return "doc";
  }
  *parseDocument() {
    yield* this.pushSpaces(true);
    const line = this.getLine();
    if (line === null)
      return this.setNext("doc");
    let n = yield* this.pushIndicators();
    switch (line[n]) {
      case "#":
        yield* this.pushCount(line.length - n);
      // fallthrough
      case void 0:
        yield* this.pushNewline();
        return yield* this.parseLineStart();
      case "{":
      case "[":
        yield* this.pushCount(1);
        this.flowKey = false;
        this.flowLevel = 1;
        return "flow";
      case "}":
      case "]":
        yield* this.pushCount(1);
        return "doc";
      case "*":
        yield* this.pushUntil(isNotAnchorChar);
        return "doc";
      case '"':
      case "'":
        return yield* this.parseQuotedScalar();
      case "|":
      case ">":
        n += yield* this.parseBlockScalarHeader();
        n += yield* this.pushSpaces(true);
        yield* this.pushCount(line.length - n);
        yield* this.pushNewline();
        return yield* this.parseBlockScalar();
      default:
        return yield* this.parsePlainScalar();
    }
  }
  *parseFlowCollection() {
    let nl, sp;
    let indent = -1;
    do {
      nl = yield* this.pushNewline();
      if (nl > 0) {
        sp = yield* this.pushSpaces(false);
        this.indentValue = indent = sp;
      } else {
        sp = 0;
      }
      sp += yield* this.pushSpaces(true);
    } while (nl + sp > 0);
    const line = this.getLine();
    if (line === null)
      return this.setNext("flow");
    if (indent !== -1 && indent < this.indentNext && line[0] !== "#" || indent === 0 && (line.startsWith("---") || line.startsWith("...")) && isEmpty(line[3])) {
      const atFlowEndMarker = indent === this.indentNext - 1 && this.flowLevel === 1 && (line[0] === "]" || line[0] === "}");
      if (!atFlowEndMarker) {
        this.flowLevel = 0;
        yield FLOW_END;
        return yield* this.parseLineStart();
      }
    }
    let n = 0;
    while (line[n] === ",") {
      n += yield* this.pushCount(1);
      n += yield* this.pushSpaces(true);
      this.flowKey = false;
    }
    n += yield* this.pushIndicators();
    switch (line[n]) {
      case void 0:
        return "flow";
      case "#":
        yield* this.pushCount(line.length - n);
        return "flow";
      case "{":
      case "[":
        yield* this.pushCount(1);
        this.flowKey = false;
        this.flowLevel += 1;
        return "flow";
      case "}":
      case "]":
        yield* this.pushCount(1);
        this.flowKey = true;
        this.flowLevel -= 1;
        return this.flowLevel ? "flow" : "doc";
      case "*":
        yield* this.pushUntil(isNotAnchorChar);
        return "flow";
      case '"':
      case "'":
        this.flowKey = true;
        return yield* this.parseQuotedScalar();
      case ":": {
        const next = this.charAt(1);
        if (this.flowKey || isEmpty(next) || next === ",") {
          this.flowKey = false;
          yield* this.pushCount(1);
          yield* this.pushSpaces(true);
          return "flow";
        }
      }
      // fallthrough
      default:
        this.flowKey = false;
        return yield* this.parsePlainScalar();
    }
  }
  *parseQuotedScalar() {
    const quote = this.charAt(0);
    let end = this.buffer.indexOf(quote, this.pos + 1);
    if (quote === "'") {
      while (end !== -1 && this.buffer[end + 1] === "'")
        end = this.buffer.indexOf("'", end + 2);
    } else {
      while (end !== -1) {
        let n = 0;
        while (this.buffer[end - 1 - n] === "\\")
          n += 1;
        if (n % 2 === 0)
          break;
        end = this.buffer.indexOf('"', end + 1);
      }
    }
    const qb = this.buffer.substring(0, end);
    let nl = qb.indexOf("\n", this.pos);
    if (nl !== -1) {
      while (nl !== -1) {
        const cs = this.continueScalar(nl + 1);
        if (cs === -1)
          break;
        nl = qb.indexOf("\n", cs);
      }
      if (nl !== -1) {
        end = nl - (qb[nl - 1] === "\r" ? 2 : 1);
      }
    }
    if (end === -1) {
      if (!this.atEnd)
        return this.setNext("quoted-scalar");
      end = this.buffer.length;
    }
    yield* this.pushToIndex(end + 1, false);
    return this.flowLevel ? "flow" : "doc";
  }
  *parseBlockScalarHeader() {
    this.blockScalarIndent = -1;
    this.blockScalarKeep = false;
    let i = this.pos;
    while (true) {
      const ch = this.buffer[++i];
      if (ch === "+")
        this.blockScalarKeep = true;
      else if (ch > "0" && ch <= "9")
        this.blockScalarIndent = Number(ch) - 1;
      else if (ch !== "-")
        break;
    }
    return yield* this.pushUntil((ch) => isEmpty(ch) || ch === "#");
  }
  *parseBlockScalar() {
    let nl = this.pos - 1;
    let indent = 0;
    let ch;
    loop: for (let i2 = this.pos; ch = this.buffer[i2]; ++i2) {
      switch (ch) {
        case " ":
          indent += 1;
          break;
        case "\n":
          nl = i2;
          indent = 0;
          break;
        case "\r": {
          const next = this.buffer[i2 + 1];
          if (!next && !this.atEnd)
            return this.setNext("block-scalar");
          if (next === "\n")
            break;
        }
        // fallthrough
        default:
          break loop;
      }
    }
    if (!ch && !this.atEnd)
      return this.setNext("block-scalar");
    if (indent >= this.indentNext) {
      if (this.blockScalarIndent === -1)
        this.indentNext = indent;
      else {
        this.indentNext = this.blockScalarIndent + (this.indentNext === 0 ? 1 : this.indentNext);
      }
      do {
        const cs = this.continueScalar(nl + 1);
        if (cs === -1)
          break;
        nl = this.buffer.indexOf("\n", cs);
      } while (nl !== -1);
      if (nl === -1) {
        if (!this.atEnd)
          return this.setNext("block-scalar");
        nl = this.buffer.length;
      }
    }
    let i = nl + 1;
    ch = this.buffer[i];
    while (ch === " ")
      ch = this.buffer[++i];
    if (ch === "	") {
      while (ch === "	" || ch === " " || ch === "\r" || ch === "\n")
        ch = this.buffer[++i];
      nl = i - 1;
    } else if (!this.blockScalarKeep) {
      do {
        let i2 = nl - 1;
        let ch2 = this.buffer[i2];
        if (ch2 === "\r")
          ch2 = this.buffer[--i2];
        const lastChar = i2;
        while (ch2 === " ")
          ch2 = this.buffer[--i2];
        if (ch2 === "\n" && i2 >= this.pos && i2 + 1 + indent > lastChar)
          nl = i2;
        else
          break;
      } while (true);
    }
    yield SCALAR2;
    yield* this.pushToIndex(nl + 1, true);
    return yield* this.parseLineStart();
  }
  *parsePlainScalar() {
    const inFlow = this.flowLevel > 0;
    let end = this.pos - 1;
    let i = this.pos - 1;
    let ch;
    while (ch = this.buffer[++i]) {
      if (ch === ":") {
        const next = this.buffer[i + 1];
        if (isEmpty(next) || inFlow && flowIndicatorChars.has(next))
          break;
        end = i;
      } else if (isEmpty(ch)) {
        let next = this.buffer[i + 1];
        if (ch === "\r") {
          if (next === "\n") {
            i += 1;
            ch = "\n";
            next = this.buffer[i + 1];
          } else
            end = i;
        }
        if (next === "#" || inFlow && flowIndicatorChars.has(next))
          break;
        if (ch === "\n") {
          const cs = this.continueScalar(i + 1);
          if (cs === -1)
            break;
          i = Math.max(i, cs - 2);
        }
      } else {
        if (inFlow && flowIndicatorChars.has(ch))
          break;
        end = i;
      }
    }
    if (!ch && !this.atEnd)
      return this.setNext("plain-scalar");
    yield SCALAR2;
    yield* this.pushToIndex(end + 1, true);
    return inFlow ? "flow" : "doc";
  }
  *pushCount(n) {
    if (n > 0) {
      yield this.buffer.substr(this.pos, n);
      this.pos += n;
      return n;
    }
    return 0;
  }
  *pushToIndex(i, allowEmpty) {
    const s = this.buffer.slice(this.pos, i);
    if (s) {
      yield s;
      this.pos += s.length;
      return s.length;
    } else if (allowEmpty)
      yield "";
    return 0;
  }
  *pushIndicators() {
    let n = 0;
    loop: while (true) {
      switch (this.charAt(0)) {
        case "!":
          n += yield* this.pushTag();
          n += yield* this.pushSpaces(true);
          continue loop;
        case "&":
          n += yield* this.pushUntil(isNotAnchorChar);
          n += yield* this.pushSpaces(true);
          continue loop;
        case "-":
        // this is an error
        case "?":
        // this is an error outside flow collections
        case ":": {
          const inFlow = this.flowLevel > 0;
          const ch1 = this.charAt(1);
          if (isEmpty(ch1) || inFlow && flowIndicatorChars.has(ch1)) {
            if (!inFlow)
              this.indentNext = this.indentValue + 1;
            else if (this.flowKey)
              this.flowKey = false;
            n += yield* this.pushCount(1);
            n += yield* this.pushSpaces(true);
            continue loop;
          }
        }
      }
      break loop;
    }
    return n;
  }
  *pushTag() {
    if (this.charAt(1) === "<") {
      let i = this.pos + 2;
      let ch = this.buffer[i];
      while (!isEmpty(ch) && ch !== ">")
        ch = this.buffer[++i];
      return yield* this.pushToIndex(ch === ">" ? i + 1 : i, false);
    } else {
      let i = this.pos + 1;
      let ch = this.buffer[i];
      while (ch) {
        if (tagChars.has(ch))
          ch = this.buffer[++i];
        else if (ch === "%" && hexDigits.has(this.buffer[i + 1]) && hexDigits.has(this.buffer[i + 2])) {
          ch = this.buffer[i += 3];
        } else
          break;
      }
      return yield* this.pushToIndex(i, false);
    }
  }
  *pushNewline() {
    const ch = this.buffer[this.pos];
    if (ch === "\n")
      return yield* this.pushCount(1);
    else if (ch === "\r" && this.charAt(1) === "\n")
      return yield* this.pushCount(2);
    else
      return 0;
  }
  *pushSpaces(allowTabs) {
    let i = this.pos - 1;
    let ch;
    do {
      ch = this.buffer[++i];
    } while (ch === " " || allowTabs && ch === "	");
    const n = i - this.pos;
    if (n > 0) {
      yield this.buffer.substr(this.pos, n);
      this.pos = i;
    }
    return n;
  }
  *pushUntil(test) {
    let i = this.pos;
    let ch = this.buffer[i];
    while (!test(ch))
      ch = this.buffer[++i];
    return yield* this.pushToIndex(i, false);
  }
};

// node_modules/yaml/browser/dist/parse/line-counter.js
var LineCounter = class {
  constructor() {
    this.lineStarts = [];
    this.addNewLine = (offset) => this.lineStarts.push(offset);
    this.linePos = (offset) => {
      let low = 0;
      let high = this.lineStarts.length;
      while (low < high) {
        const mid = low + high >> 1;
        if (this.lineStarts[mid] < offset)
          low = mid + 1;
        else
          high = mid;
      }
      if (this.lineStarts[low] === offset)
        return { line: low + 1, col: 1 };
      if (low === 0)
        return { line: 0, col: offset };
      const start = this.lineStarts[low - 1];
      return { line: low, col: offset - start + 1 };
    };
  }
};

// node_modules/yaml/browser/dist/parse/parser.js
function includesToken(list, type) {
  for (let i = 0; i < list.length; ++i)
    if (list[i].type === type)
      return true;
  return false;
}
function findNonEmptyIndex(list) {
  for (let i = 0; i < list.length; ++i) {
    switch (list[i].type) {
      case "space":
      case "comment":
      case "newline":
        break;
      default:
        return i;
    }
  }
  return -1;
}
function isFlowToken(token) {
  switch (token?.type) {
    case "alias":
    case "scalar":
    case "single-quoted-scalar":
    case "double-quoted-scalar":
    case "flow-collection":
      return true;
    default:
      return false;
  }
}
function getPrevProps(parent) {
  switch (parent.type) {
    case "document":
      return parent.start;
    case "block-map": {
      const it = parent.items[parent.items.length - 1];
      return it.sep ?? it.start;
    }
    case "block-seq":
      return parent.items[parent.items.length - 1].start;
    /* istanbul ignore next should not happen */
    default:
      return [];
  }
}
function getFirstKeyStartProps(prev) {
  if (prev.length === 0)
    return [];
  let i = prev.length;
  loop: while (--i >= 0) {
    switch (prev[i].type) {
      case "doc-start":
      case "explicit-key-ind":
      case "map-value-ind":
      case "seq-item-ind":
      case "newline":
        break loop;
    }
  }
  while (prev[++i]?.type === "space") {
  }
  return prev.splice(i, prev.length);
}
function arrayPushArray(target, source) {
  if (source.length < 1e5)
    Array.prototype.push.apply(target, source);
  else
    for (let i = 0; i < source.length; ++i)
      target.push(source[i]);
}
function fixFlowSeqItems(fc) {
  if (fc.start.type === "flow-seq-start") {
    for (const it of fc.items) {
      if (it.sep && !it.value && !includesToken(it.start, "explicit-key-ind") && !includesToken(it.sep, "map-value-ind")) {
        if (it.key)
          it.value = it.key;
        delete it.key;
        if (isFlowToken(it.value)) {
          if (it.value.end)
            arrayPushArray(it.value.end, it.sep);
          else
            it.value.end = it.sep;
        } else
          arrayPushArray(it.start, it.sep);
        delete it.sep;
      }
    }
  }
}
var Parser = class {
  /**
   * @param onNewLine - If defined, called separately with the start position of
   *   each new line (in `parse()`, including the start of input).
   */
  constructor(onNewLine) {
    this.atNewLine = true;
    this.atScalar = false;
    this.indent = 0;
    this.offset = 0;
    this.onKeyLine = false;
    this.stack = [];
    this.source = "";
    this.type = "";
    this.lexer = new Lexer();
    this.onNewLine = onNewLine;
  }
  /**
   * Parse `source` as a YAML stream.
   * If `incomplete`, a part of the last line may be left as a buffer for the next call.
   *
   * Errors are not thrown, but yielded as `{ type: 'error', message }` tokens.
   *
   * @returns A generator of tokens representing each directive, document, and other structure.
   */
  *parse(source, incomplete = false) {
    if (this.onNewLine && this.offset === 0)
      this.onNewLine(0);
    for (const lexeme of this.lexer.lex(source, incomplete))
      yield* this.next(lexeme);
    if (!incomplete)
      yield* this.end();
  }
  /**
   * Advance the parser by the `source` of one lexical token.
   */
  *next(source) {
    this.source = source;
    if (this.atScalar) {
      this.atScalar = false;
      yield* this.step();
      this.offset += source.length;
      return;
    }
    const type = tokenType(source);
    if (!type) {
      const message = `Not a YAML token: ${source}`;
      yield* this.pop({ type: "error", offset: this.offset, message, source });
      this.offset += source.length;
    } else if (type === "scalar") {
      this.atNewLine = false;
      this.atScalar = true;
      this.type = "scalar";
    } else {
      this.type = type;
      yield* this.step();
      switch (type) {
        case "newline":
          this.atNewLine = true;
          this.indent = 0;
          if (this.onNewLine)
            this.onNewLine(this.offset + source.length);
          break;
        case "space":
          if (this.atNewLine && source[0] === " ")
            this.indent += source.length;
          break;
        case "explicit-key-ind":
        case "map-value-ind":
        case "seq-item-ind":
          if (this.atNewLine)
            this.indent += source.length;
          break;
        case "doc-mode":
        case "flow-error-end":
          return;
        default:
          this.atNewLine = false;
      }
      this.offset += source.length;
    }
  }
  /** Call at end of input to push out any remaining constructions */
  *end() {
    while (this.stack.length > 0)
      yield* this.pop();
  }
  get sourceToken() {
    const st = {
      type: this.type,
      offset: this.offset,
      indent: this.indent,
      source: this.source
    };
    return st;
  }
  *step() {
    const top = this.peek(1);
    if (this.type === "doc-end" && top?.type !== "doc-end") {
      while (this.stack.length > 0)
        yield* this.pop();
      this.stack.push({
        type: "doc-end",
        offset: this.offset,
        source: this.source
      });
      return;
    }
    if (!top)
      return yield* this.stream();
    switch (top.type) {
      case "document":
        return yield* this.document(top);
      case "alias":
      case "scalar":
      case "single-quoted-scalar":
      case "double-quoted-scalar":
        return yield* this.scalar(top);
      case "block-scalar":
        return yield* this.blockScalar(top);
      case "block-map":
        return yield* this.blockMap(top);
      case "block-seq":
        return yield* this.blockSequence(top);
      case "flow-collection":
        return yield* this.flowCollection(top);
      case "doc-end":
        return yield* this.documentEnd(top);
    }
    yield* this.pop();
  }
  peek(n) {
    return this.stack[this.stack.length - n];
  }
  *pop(error) {
    const token = error ?? this.stack.pop();
    if (!token) {
      const message = "Tried to pop an empty stack";
      yield { type: "error", offset: this.offset, source: "", message };
    } else if (this.stack.length === 0) {
      yield token;
    } else {
      const top = this.peek(1);
      if (token.type === "block-scalar") {
        token.indent = "indent" in top ? top.indent : 0;
      } else if (token.type === "flow-collection" && top.type === "document") {
        token.indent = 0;
      }
      if (token.type === "flow-collection")
        fixFlowSeqItems(token);
      switch (top.type) {
        case "document":
          top.value = token;
          break;
        case "block-scalar":
          top.props.push(token);
          break;
        case "block-map": {
          const it = top.items[top.items.length - 1];
          if (it.value) {
            top.items.push({ start: [], key: token, sep: [] });
            this.onKeyLine = true;
            return;
          } else if (it.sep) {
            it.value = token;
          } else {
            Object.assign(it, { key: token, sep: [] });
            this.onKeyLine = !it.explicitKey;
            return;
          }
          break;
        }
        case "block-seq": {
          const it = top.items[top.items.length - 1];
          if (it.value)
            top.items.push({ start: [], value: token });
          else
            it.value = token;
          break;
        }
        case "flow-collection": {
          const it = top.items[top.items.length - 1];
          if (!it || it.value)
            top.items.push({ start: [], key: token, sep: [] });
          else if (it.sep)
            it.value = token;
          else
            Object.assign(it, { key: token, sep: [] });
          return;
        }
        /* istanbul ignore next should not happen */
        default:
          yield* this.pop();
          yield* this.pop(token);
      }
      if ((top.type === "document" || top.type === "block-map" || top.type === "block-seq") && (token.type === "block-map" || token.type === "block-seq")) {
        const last = token.items[token.items.length - 1];
        if (last && !last.sep && !last.value && last.start.length > 0 && findNonEmptyIndex(last.start) === -1 && (token.indent === 0 || last.start.every((st) => st.type !== "comment" || st.indent < token.indent))) {
          if (top.type === "document")
            top.end = last.start;
          else
            top.items.push({ start: last.start });
          token.items.splice(-1, 1);
        }
      }
    }
  }
  *stream() {
    switch (this.type) {
      case "directive-line":
        yield { type: "directive", offset: this.offset, source: this.source };
        return;
      case "byte-order-mark":
      case "space":
      case "comment":
      case "newline":
        yield this.sourceToken;
        return;
      case "doc-mode":
      case "doc-start": {
        const doc = {
          type: "document",
          offset: this.offset,
          start: []
        };
        if (this.type === "doc-start")
          doc.start.push(this.sourceToken);
        this.stack.push(doc);
        return;
      }
    }
    yield {
      type: "error",
      offset: this.offset,
      message: `Unexpected ${this.type} token in YAML stream`,
      source: this.source
    };
  }
  *document(doc) {
    if (doc.value)
      return yield* this.lineEnd(doc);
    switch (this.type) {
      case "doc-start": {
        if (findNonEmptyIndex(doc.start) !== -1) {
          yield* this.pop();
          yield* this.step();
        } else
          doc.start.push(this.sourceToken);
        return;
      }
      case "anchor":
      case "tag":
      case "space":
      case "comment":
      case "newline":
        doc.start.push(this.sourceToken);
        return;
    }
    const bv = this.startBlockValue(doc);
    if (bv)
      this.stack.push(bv);
    else {
      yield {
        type: "error",
        offset: this.offset,
        message: `Unexpected ${this.type} token in YAML document`,
        source: this.source
      };
    }
  }
  *scalar(scalar) {
    if (this.type === "map-value-ind") {
      const prev = getPrevProps(this.peek(2));
      const start = getFirstKeyStartProps(prev);
      let sep;
      if (scalar.end) {
        sep = scalar.end;
        sep.push(this.sourceToken);
        delete scalar.end;
      } else
        sep = [this.sourceToken];
      const map2 = {
        type: "block-map",
        offset: scalar.offset,
        indent: scalar.indent,
        items: [{ start, key: scalar, sep }]
      };
      this.onKeyLine = true;
      this.stack[this.stack.length - 1] = map2;
    } else
      yield* this.lineEnd(scalar);
  }
  *blockScalar(scalar) {
    switch (this.type) {
      case "space":
      case "comment":
      case "newline":
        scalar.props.push(this.sourceToken);
        return;
      case "scalar":
        scalar.source = this.source;
        this.atNewLine = true;
        this.indent = 0;
        if (this.onNewLine) {
          let nl = this.source.indexOf("\n") + 1;
          while (nl !== 0) {
            this.onNewLine(this.offset + nl);
            nl = this.source.indexOf("\n", nl) + 1;
          }
        }
        yield* this.pop();
        break;
      /* istanbul ignore next should not happen */
      default:
        yield* this.pop();
        yield* this.step();
    }
  }
  *blockMap(map2) {
    const it = map2.items[map2.items.length - 1];
    switch (this.type) {
      case "newline":
        this.onKeyLine = false;
        if (it.value) {
          const end = "end" in it.value ? it.value.end : void 0;
          const last = Array.isArray(end) ? end[end.length - 1] : void 0;
          if (last?.type === "comment")
            end?.push(this.sourceToken);
          else
            map2.items.push({ start: [this.sourceToken] });
        } else if (it.sep) {
          it.sep.push(this.sourceToken);
        } else {
          it.start.push(this.sourceToken);
        }
        return;
      case "space":
      case "comment":
        if (it.value) {
          map2.items.push({ start: [this.sourceToken] });
        } else if (it.sep) {
          it.sep.push(this.sourceToken);
        } else {
          if (this.atIndentedComment(it.start, map2.indent)) {
            const prev = map2.items[map2.items.length - 2];
            const end = prev?.value?.end;
            if (Array.isArray(end)) {
              arrayPushArray(end, it.start);
              end.push(this.sourceToken);
              map2.items.pop();
              return;
            }
          }
          it.start.push(this.sourceToken);
        }
        return;
    }
    if (this.indent >= map2.indent) {
      const atMapIndent = !this.onKeyLine && this.indent === map2.indent;
      const atNextItem = atMapIndent && (it.sep || it.explicitKey) && this.type !== "seq-item-ind";
      let start = [];
      if (atNextItem && it.sep && !it.value) {
        const nl = [];
        for (let i = 0; i < it.sep.length; ++i) {
          const st = it.sep[i];
          switch (st.type) {
            case "newline":
              nl.push(i);
              break;
            case "space":
              break;
            case "comment":
              if (st.indent > map2.indent)
                nl.length = 0;
              break;
            default:
              nl.length = 0;
          }
        }
        if (nl.length >= 2)
          start = it.sep.splice(nl[1]);
      }
      switch (this.type) {
        case "anchor":
        case "tag":
          if (atNextItem || it.value) {
            start.push(this.sourceToken);
            map2.items.push({ start });
            this.onKeyLine = true;
          } else if (it.sep) {
            it.sep.push(this.sourceToken);
          } else {
            it.start.push(this.sourceToken);
          }
          return;
        case "explicit-key-ind":
          if (!it.sep && !it.explicitKey) {
            it.start.push(this.sourceToken);
            it.explicitKey = true;
          } else if (atNextItem || it.value) {
            start.push(this.sourceToken);
            map2.items.push({ start, explicitKey: true });
          } else {
            this.stack.push({
              type: "block-map",
              offset: this.offset,
              indent: this.indent,
              items: [{ start: [this.sourceToken], explicitKey: true }]
            });
          }
          this.onKeyLine = true;
          return;
        case "map-value-ind":
          if (it.explicitKey) {
            if (!it.sep) {
              if (includesToken(it.start, "newline")) {
                Object.assign(it, { key: null, sep: [this.sourceToken] });
              } else {
                const start2 = getFirstKeyStartProps(it.start);
                this.stack.push({
                  type: "block-map",
                  offset: this.offset,
                  indent: this.indent,
                  items: [{ start: start2, key: null, sep: [this.sourceToken] }]
                });
              }
            } else if (it.value) {
              map2.items.push({ start: [], key: null, sep: [this.sourceToken] });
            } else if (includesToken(it.sep, "map-value-ind")) {
              this.stack.push({
                type: "block-map",
                offset: this.offset,
                indent: this.indent,
                items: [{ start, key: null, sep: [this.sourceToken] }]
              });
            } else if (isFlowToken(it.key) && !includesToken(it.sep, "newline")) {
              const start2 = getFirstKeyStartProps(it.start);
              const key = it.key;
              const sep = it.sep;
              sep.push(this.sourceToken);
              delete it.key;
              delete it.sep;
              this.stack.push({
                type: "block-map",
                offset: this.offset,
                indent: this.indent,
                items: [{ start: start2, key, sep }]
              });
            } else if (start.length > 0) {
              it.sep = it.sep.concat(start, this.sourceToken);
            } else {
              it.sep.push(this.sourceToken);
            }
          } else {
            if (!it.sep) {
              Object.assign(it, { key: null, sep: [this.sourceToken] });
            } else if (it.value || atNextItem) {
              map2.items.push({ start, key: null, sep: [this.sourceToken] });
            } else if (includesToken(it.sep, "map-value-ind")) {
              this.stack.push({
                type: "block-map",
                offset: this.offset,
                indent: this.indent,
                items: [{ start: [], key: null, sep: [this.sourceToken] }]
              });
            } else {
              it.sep.push(this.sourceToken);
            }
          }
          this.onKeyLine = true;
          return;
        case "alias":
        case "scalar":
        case "single-quoted-scalar":
        case "double-quoted-scalar": {
          const fs = this.flowScalar(this.type);
          if (atNextItem || it.value) {
            map2.items.push({ start, key: fs, sep: [] });
            this.onKeyLine = true;
          } else if (it.sep) {
            this.stack.push(fs);
          } else {
            Object.assign(it, { key: fs, sep: [] });
            this.onKeyLine = true;
          }
          return;
        }
        default: {
          const bv = this.startBlockValue(map2);
          if (bv) {
            if (bv.type === "block-seq") {
              if (!it.explicitKey && it.sep && !includesToken(it.sep, "newline")) {
                yield* this.pop({
                  type: "error",
                  offset: this.offset,
                  message: "Unexpected block-seq-ind on same line with key",
                  source: this.source
                });
                return;
              }
            } else if (atMapIndent) {
              map2.items.push({ start });
            }
            this.stack.push(bv);
            return;
          }
        }
      }
    }
    yield* this.pop();
    yield* this.step();
  }
  *blockSequence(seq2) {
    const it = seq2.items[seq2.items.length - 1];
    switch (this.type) {
      case "newline":
        if (it.value) {
          const end = "end" in it.value ? it.value.end : void 0;
          const last = Array.isArray(end) ? end[end.length - 1] : void 0;
          if (last?.type === "comment")
            end?.push(this.sourceToken);
          else
            seq2.items.push({ start: [this.sourceToken] });
        } else
          it.start.push(this.sourceToken);
        return;
      case "space":
      case "comment":
        if (it.value)
          seq2.items.push({ start: [this.sourceToken] });
        else {
          if (this.atIndentedComment(it.start, seq2.indent)) {
            const prev = seq2.items[seq2.items.length - 2];
            const end = prev?.value?.end;
            if (Array.isArray(end)) {
              arrayPushArray(end, it.start);
              end.push(this.sourceToken);
              seq2.items.pop();
              return;
            }
          }
          it.start.push(this.sourceToken);
        }
        return;
      case "anchor":
      case "tag":
        if (it.value || this.indent <= seq2.indent)
          break;
        it.start.push(this.sourceToken);
        return;
      case "seq-item-ind":
        if (this.indent !== seq2.indent)
          break;
        if (it.value || includesToken(it.start, "seq-item-ind"))
          seq2.items.push({ start: [this.sourceToken] });
        else
          it.start.push(this.sourceToken);
        return;
    }
    if (this.indent > seq2.indent) {
      const bv = this.startBlockValue(seq2);
      if (bv) {
        this.stack.push(bv);
        return;
      }
    }
    yield* this.pop();
    yield* this.step();
  }
  *flowCollection(fc) {
    const it = fc.items[fc.items.length - 1];
    if (this.type === "flow-error-end") {
      let top;
      do {
        yield* this.pop();
        top = this.peek(1);
      } while (top?.type === "flow-collection");
    } else if (fc.end.length === 0) {
      switch (this.type) {
        case "comma":
        case "explicit-key-ind":
          if (!it || it.sep)
            fc.items.push({ start: [this.sourceToken] });
          else
            it.start.push(this.sourceToken);
          return;
        case "map-value-ind":
          if (!it || it.value)
            fc.items.push({ start: [], key: null, sep: [this.sourceToken] });
          else if (it.sep)
            it.sep.push(this.sourceToken);
          else
            Object.assign(it, { key: null, sep: [this.sourceToken] });
          return;
        case "space":
        case "comment":
        case "newline":
        case "anchor":
        case "tag":
          if (!it || it.value)
            fc.items.push({ start: [this.sourceToken] });
          else if (it.sep)
            it.sep.push(this.sourceToken);
          else
            it.start.push(this.sourceToken);
          return;
        case "alias":
        case "scalar":
        case "single-quoted-scalar":
        case "double-quoted-scalar": {
          const fs = this.flowScalar(this.type);
          if (!it || it.value)
            fc.items.push({ start: [], key: fs, sep: [] });
          else if (it.sep)
            this.stack.push(fs);
          else
            Object.assign(it, { key: fs, sep: [] });
          return;
        }
        case "flow-map-end":
        case "flow-seq-end":
          fc.end.push(this.sourceToken);
          return;
      }
      const bv = this.startBlockValue(fc);
      if (bv)
        this.stack.push(bv);
      else {
        yield* this.pop();
        yield* this.step();
      }
    } else {
      const parent = this.peek(2);
      if (parent.type === "block-map" && (this.type === "map-value-ind" && parent.indent === fc.indent || this.type === "newline" && !parent.items[parent.items.length - 1].sep)) {
        yield* this.pop();
        yield* this.step();
      } else if (this.type === "map-value-ind" && parent.type !== "flow-collection") {
        const prev = getPrevProps(parent);
        const start = getFirstKeyStartProps(prev);
        fixFlowSeqItems(fc);
        const sep = fc.end.splice(1, fc.end.length);
        sep.push(this.sourceToken);
        const map2 = {
          type: "block-map",
          offset: fc.offset,
          indent: fc.indent,
          items: [{ start, key: fc, sep }]
        };
        this.onKeyLine = true;
        this.stack[this.stack.length - 1] = map2;
      } else {
        yield* this.lineEnd(fc);
      }
    }
  }
  flowScalar(type) {
    if (this.onNewLine) {
      let nl = this.source.indexOf("\n") + 1;
      while (nl !== 0) {
        this.onNewLine(this.offset + nl);
        nl = this.source.indexOf("\n", nl) + 1;
      }
    }
    return {
      type,
      offset: this.offset,
      indent: this.indent,
      source: this.source
    };
  }
  startBlockValue(parent) {
    switch (this.type) {
      case "alias":
      case "scalar":
      case "single-quoted-scalar":
      case "double-quoted-scalar":
        return this.flowScalar(this.type);
      case "block-scalar-header":
        return {
          type: "block-scalar",
          offset: this.offset,
          indent: this.indent,
          props: [this.sourceToken],
          source: ""
        };
      case "flow-map-start":
      case "flow-seq-start":
        return {
          type: "flow-collection",
          offset: this.offset,
          indent: this.indent,
          start: this.sourceToken,
          items: [],
          end: []
        };
      case "seq-item-ind":
        return {
          type: "block-seq",
          offset: this.offset,
          indent: this.indent,
          items: [{ start: [this.sourceToken] }]
        };
      case "explicit-key-ind": {
        this.onKeyLine = true;
        const prev = getPrevProps(parent);
        const start = getFirstKeyStartProps(prev);
        start.push(this.sourceToken);
        return {
          type: "block-map",
          offset: this.offset,
          indent: this.indent,
          items: [{ start, explicitKey: true }]
        };
      }
      case "map-value-ind": {
        this.onKeyLine = true;
        const prev = getPrevProps(parent);
        const start = getFirstKeyStartProps(prev);
        return {
          type: "block-map",
          offset: this.offset,
          indent: this.indent,
          items: [{ start, key: null, sep: [this.sourceToken] }]
        };
      }
    }
    return null;
  }
  atIndentedComment(start, indent) {
    if (this.type !== "comment")
      return false;
    if (this.indent <= indent)
      return false;
    return start.every((st) => st.type === "newline" || st.type === "space");
  }
  *documentEnd(docEnd) {
    if (this.type !== "doc-mode") {
      if (docEnd.end)
        docEnd.end.push(this.sourceToken);
      else
        docEnd.end = [this.sourceToken];
      if (this.type === "newline")
        yield* this.pop();
    }
  }
  *lineEnd(token) {
    switch (this.type) {
      case "comma":
      case "doc-start":
      case "doc-end":
      case "flow-seq-end":
      case "flow-map-end":
      case "map-value-ind":
        yield* this.pop();
        yield* this.step();
        break;
      case "newline":
        this.onKeyLine = false;
      // fallthrough
      case "space":
      case "comment":
      default:
        if (token.end)
          token.end.push(this.sourceToken);
        else
          token.end = [this.sourceToken];
        if (this.type === "newline")
          yield* this.pop();
    }
  }
};

// node_modules/yaml/browser/dist/public-api.js
function parseOptions(options) {
  const prettyErrors = options.prettyErrors !== false;
  const lineCounter = options.lineCounter || prettyErrors && new LineCounter() || null;
  return { lineCounter, prettyErrors };
}
function parseDocument(source, options = {}) {
  const { lineCounter, prettyErrors } = parseOptions(options);
  const parser = new Parser(lineCounter?.addNewLine);
  const composer = new Composer(options);
  let doc = null;
  for (const _doc of composer.compose(parser.parse(source), true, source.length)) {
    if (!doc)
      doc = _doc;
    else if (doc.options.logLevel !== "silent") {
      doc.errors.push(new YAMLParseError(_doc.range.slice(0, 2), "MULTIPLE_DOCS", "Source contains multiple documents; please use YAML.parseAllDocuments()"));
      break;
    }
  }
  if (prettyErrors && lineCounter) {
    doc.errors.forEach(prettifyError(source, lineCounter));
    doc.warnings.forEach(prettifyError(source, lineCounter));
  }
  return doc;
}
function parse(src, reviver, options) {
  let _reviver = void 0;
  if (typeof reviver === "function") {
    _reviver = reviver;
  } else if (options === void 0 && reviver && typeof reviver === "object") {
    options = reviver;
  }
  const doc = parseDocument(src, options);
  if (!doc)
    return null;
  doc.warnings.forEach((warning) => warn(doc.options.logLevel, warning));
  if (doc.errors.length > 0) {
    if (doc.options.logLevel !== "silent")
      throw doc.errors[0];
    else
      doc.errors = [];
  }
  return doc.toJS(Object.assign({ reviver: _reviver }, options));
}
function stringify3(value, replacer, options) {
  let _replacer = null;
  if (typeof replacer === "function" || Array.isArray(replacer)) {
    _replacer = replacer;
  } else if (options === void 0 && replacer) {
    options = replacer;
  }
  if (typeof options === "string")
    options = options.length;
  if (typeof options === "number") {
    const indent = Math.round(options);
    options = indent < 1 ? void 0 : indent > 8 ? { indent: 8 } : { indent };
  }
  if (value === void 0) {
    const { keepUndefined } = options ?? replacer ?? {};
    if (!keepUndefined)
      return void 0;
  }
  if (isDocument(value) && !_replacer)
    return value.toString(options);
  return new Document(value, _replacer, options).toString(options);
}

// apps/concierge/src/app/building-manager/auto-release-settings-modal.component.ts
var _forTrack0 = ($index, $item) => $item.date;
var _forTrack1 = ($index, $item) => $item.i;
function AutoReleaseSettingsModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 2)(1, "icon", 6);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function AutoReleaseSettingsModalComponent_Conditional_5_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.AUTO_RELEASE_DEFAULT_HOURS_EMPTY"), " ");
  }
}
function AutoReleaseSettingsModalComponent_Conditional_5_Conditional_25_For_1_Conditional_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const block_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind2(2, 3, block_r3.start, "shortTime"), " - ", \u0275\u0275pipeBind2(3, 6, block_r3.end, "shortTime"), " | ", block_r3.location, " ");
  }
}
function AutoReleaseSettingsModalComponent_Conditional_5_Conditional_25_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "span", 24);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(5, AutoReleaseSettingsModalComponent_Conditional_5_Conditional_25_For_1_Conditional_0_For_6_Template, 4, 9, "div", 25, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pref_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 1, pref_r4.date, "EEEE"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(pref_r4.blocks);
  }
}
function AutoReleaseSettingsModalComponent_Conditional_5_Conditional_25_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AutoReleaseSettingsModalComponent_Conditional_5_Conditional_25_For_1_Conditional_0_Template, 7, 4, "div", 22);
  }
  if (rf & 2) {
    const pref_r4 = ctx.$implicit;
    \u0275\u0275conditional(pref_r4.blocks.length ? 0 : -1);
  }
}
function AutoReleaseSettingsModalComponent_Conditional_5_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, AutoReleaseSettingsModalComponent_Conditional_5_Conditional_25_For_1_Template, 1, 1, null, null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.default_work_preferences());
  }
}
function AutoReleaseSettingsModalComponent_Conditional_5_For_48_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "a-duration-field", 9);
    \u0275\u0275listener("ngModelChange", function AutoReleaseSettingsModalComponent_Conditional_5_For_48_Conditional_0_Conditional_3_Template_a_duration_field_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const name_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setSetting(name_r6 + "_time_before", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(2, "a-duration-field", 9);
    \u0275\u0275listener("ngModelChange", function AutoReleaseSettingsModalComponent_Conditional_5_For_48_Conditional_0_Conditional_3_Template_a_duration_field_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      const name_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setSetting(name_r6 + "_time_after", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const name_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("min", -15)("max", 60)("step", 5)("ngModel", ctx_r1.setting(name_r6 + "_time_before"));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("min", 0)("max", 60)("step", 5)("ngModel", ctx_r1.setting(name_r6 + "_time_after"));
    \u0275\u0275control();
  }
}
function AutoReleaseSettingsModalComponent_Conditional_5_For_48_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "settings-toggle", 27);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function AutoReleaseSettingsModalComponent_Conditional_5_For_48_Conditional_0_Template_settings_toggle_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const name_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleCustom(name_r6, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(3, AutoReleaseSettingsModalComponent_Conditional_5_For_48_Conditional_0_Conditional_3_Template, 3, 8, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const name_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(2, 3, "APP.CONCIERGE.AUTO_RELEASE_" + name_r6.toUpperCase()))("ngModel", ctx_r1.setting("custom")?.includes(name_r6));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.setting("custom")?.includes(name_r6) ? 3 : -1);
  }
}
function AutoReleaseSettingsModalComponent_Conditional_5_For_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AutoReleaseSettingsModalComponent_Conditional_5_For_48_Conditional_0_Template, 4, 5, "div", 26);
  }
  if (rf & 2) {
    const name_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.setting("resources")?.includes(name_r6) ? 0 : -1);
  }
}
function AutoReleaseSettingsModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 3)(1, "div", 7)(2, "div", 8)(3, "label");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a-duration-field", 9);
    \u0275\u0275listener("ngModelChange", function AutoReleaseSettingsModalComponent_Conditional_5_Template_a_duration_field_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setSetting("time_before", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 8)(8, "label");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a-duration-field", 9);
    \u0275\u0275listener("ngModelChange", function AutoReleaseSettingsModalComponent_Conditional_5_Template_a_duration_field_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setSetting("time_after", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 10)(13, "div", 8)(14, "label");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "a-time-field", 11);
    \u0275\u0275listener("ngModelChange", function AutoReleaseSettingsModalComponent_Conditional_5_Template_a_time_field_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setStartHour($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "settings-toggle", 12);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275listener("ngModelChange", function AutoReleaseSettingsModalComponent_Conditional_5_Template_settings_toggle_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setSetting("release_outside_hours", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "label");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 13);
    \u0275\u0275conditionalCreate(24, AutoReleaseSettingsModalComponent_Conditional_5_Conditional_24_Template, 3, 3, "div", 14)(25, AutoReleaseSettingsModalComponent_Conditional_5_Conditional_25_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 15);
    \u0275\u0275listener("click", function AutoReleaseSettingsModalComponent_Conditional_5_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDefaultWorkHourPreferences());
    });
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "label");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-form-field", 16)(33, "mat-select", 17);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275listener("ngModelChange", function AutoReleaseSettingsModalComponent_Conditional_5_Template_mat_select_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setSetting("resources", $event));
    });
    \u0275\u0275elementStart(35, "mat-option", 18);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "mat-option", 19);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "mat-option", 20);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "mat-option", 21);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(47, AutoReleaseSettingsModalComponent_Conditional_5_For_48_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 25, "APP.CONCIERGE.AUTO_RELEASE_NOTIFY"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("min", -15)("max", 60)("step", 5)("ngModel", ctx_r1.setting("time_before"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 27, "APP.CONCIERGE.AUTO_RELEASE_CANCEL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("min", 0)("max", 60)("step", 5)("ngModel", ctx_r1.setting("time_after"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 29, "APP.CONCIERGE.AUTO_RELEASE_ALL_DAY_START"));
    \u0275\u0275advance(2);
    \u0275\u0275property("no_past_times", false)("ngModel", ctx_r1.start_hour());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(19, 31, "APP.CONCIERGE.AUTO_RELEASE_OUTSIDE_HOURS"))("ngModel", ctx_r1.setting("release_outside_hours"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 33, "APP.CONCIERGE.AUTO_RELEASE_DEFAULT_HOURS"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.default_work_preferences().length ? 24 : 25);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 35, "APP.CONCIERGE.AUTO_RELEASE_DEFAULT_HOURS_SET"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 37, "APP.CONCIERGE.AUTO_RELEASE_TYPES"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.setting("resources"))("placeholder", \u0275\u0275pipeBind1(34, 39, "APP.CONCIERGE.AUTO_RELEASE_TYPES"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 41, "RESOURCE.DESKS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 43, "RESOURCE.VISITORS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 45, "RESOURCE.PARKING"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(46, 47, "RESOURCE.LOCKERS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.types);
  }
}
function AutoReleaseSettingsModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 4);
    \u0275\u0275element(1, "mat-spinner", 29);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 48);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.loading());
  }
}
function AutoReleaseSettingsModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 5)(1, "button", 30);
    \u0275\u0275listener("click", function AutoReleaseSettingsModalComponent_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
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
var AutoReleaseSettingsModalComponent = class _AutoReleaseSettingsModalComponent {
  constructor() {
    this._id = inject(MAT_DIALOG_DATA);
    this._dialog = inject(MatDialog);
    this._dialog_ref = inject(MatDialogRef);
    this._settings = inject(SettingsService);
    this.types = ["desk", "parking", "locker", "visitor"];
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.id = this._id;
    this.settings = signal(
      {
        custom: []
      },
      ...ngDevMode ? [{ debugName: "settings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.start_hour = computed(
      () => startOfMinute(set(Date.now(), {
        hours: Math.floor(this.setting("all_day_start") || 8),
        minutes: Math.floor((this.setting("all_day_start") || 0) * 60) % 60
      })).valueOf(),
      ...ngDevMode ? [{ debugName: "start_hour" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.setStartHour = (t) => {
      const d = new Date(t);
      this.setSetting("all_day_start", d.getHours() + d.getMinutes() / 60);
    };
    this.default_work_preferences = computed(
      () => (this.setting("default_work_preferences") || []).map((pref) => ({
        date: startOfDay(setDay(Date.now(), pref.day_of_week)).valueOf(),
        blocks: pref.blocks.map((block, idx) => ({
          i: idx,
          start: startOfMinute(setHours(setMinutes(Date.now(), Math.floor(block.start_time * 60) % 60), block.start_time)),
          end: startOfMinute(setHours(setMinutes(Date.now(), Math.floor(block.end_time * 60) % 60), block.end_time)),
          location: block.location ? i18n(`COMMON.${block.location.toUpperCase()}`) : ""
        }))
      })),
      ...ngDevMode ? [{ debugName: "default_work_preferences" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    "".toUpperCase;
    this.loadSettings(this.id);
  }
  toggleCustom(name, state = true) {
    this.settings.update((settings) => {
      const custom = (settings.custom || []).filter((_) => _ !== name);
      const next_settings = __spreadProps(__spreadValues({}, settings), { custom });
      if (state) {
        custom.push(name);
        next_settings[name + "_time_before"] = settings.time_before;
        next_settings[name + "_time_after"] = settings.time_after;
      } else {
        delete next_settings[name + "_time_before"];
        delete next_settings[name + "_time_after"];
      }
      return next_settings;
    });
  }
  async setDefaultWorkHourPreferences() {
    const ref = this._dialog.open(WFHSettingsModalComponent, {
      data: {
        local: true,
        preferences: this.setting("default_work_preferences") || []
      }
    });
    const result = await nextValueFrom(ref.afterClosed());
    if (!result)
      return;
    this.setSetting("default_work_preferences", result);
  }
  setting(key) {
    return this.settings()[key];
  }
  setSetting(key, value) {
    this.settings.update((settings) => __spreadProps(__spreadValues({}, settings), { [key]: value }));
  }
  async loadSettings(id) {
    this.loading.set(i18n("APP.CONCIERGE.AUTO_RELEASE_LOADING"));
    this.settings.set({ custom: [] });
    const settings = (await Vc({ parent_id: id })).data;
    const unencrypted = settings.find((_) => _.encryption_level === He.None);
    if (!unencrypted)
      return;
    try {
      this.settings.set(parse(unencrypted.settings_string)?.auto_release || {});
    } catch {
    }
    if (!this.setting("custom"))
      this.setSetting("custom", []);
    for (const name of this.types) {
      const key = name + "_time_before";
      if (key in this.settings()) {
        this.settings.update((settings2) => __spreadProps(__spreadValues({}, settings2), {
          custom: [...settings2.custom || [], name]
        }));
      }
    }
    this.loading.set("");
  }
  async save() {
    this.loading.set(i18n("APP.CONCIERGE.AUTO_RELEASE_SAVING"));
    const settings = (await Vc({ parent_id: this.id })).data;
    let unencrypted = settings.find((_) => _.encryption_level === He.None);
    if (!unencrypted) {
      unencrypted = new qe({
        parent_id: this.id,
        encryption_level: He.None,
        settings_string: ""
      });
    }
    const new_settings = __spreadValues({}, this.settings());
    delete new_settings.custom;
    let old_settings = {};
    try {
      old_settings = parse(unencrypted.settings_string) || {};
    } catch {
    }
    unencrypted.settings_string = stringify3(__spreadProps(__spreadValues({}, old_settings), {
      auto_release: new_settings
    }));
    const on_error = (e) => {
      notifyError(i18n("APP.CONCIERGE.AUTO_RELEASE_ERROR", { error: e }));
      throw e;
    };
    unencrypted.id ? await ea(unencrypted.id, unencrypted).catch(on_error) : await ta(unencrypted).catch(on_error);
    const metadata_key = this._settings.get("app.workplace_metadata_key") || "workplace_app";
    const metadata = await Wu(this.id, metadata_key);
    const details = metadata.details || {};
    details.auto_release = new_settings;
    await Qu(this.id, {
      name: metadata_key,
      details,
      description: ""
    }).catch(on_error);
    notifySuccess(i18n("APP.CONCIERGE.AUTO_RELEASE_SUCCESS"));
    this.loading.set("");
    this._dialog_ref.close();
  }
  static {
    this.\u0275fac = function AutoReleaseSettingsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AutoReleaseSettingsModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AutoReleaseSettingsModalComponent, selectors: [["auto-release-modal"]], decls: 8, vars: 6, consts: [[1, "bg-base-200", "m-2", "flex", "h-14", "w-[calc(100%-1rem)]", "items-center", "justify-between", "rounded-sm", "border-none", "px-4", "py-2"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "max-h-[65vh]", "w-lg", "overflow-auto", "px-4"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-32"], [1, "border-base-200", "flex", "justify-end", "border-t", "px-4", "py-2"], [1, "text-2xl"], [1, "flex", "space-x-2"], [1, "flex-1"], [3, "ngModelChange", "min", "max", "step", "ngModel"], [1, "flex", "items-end", "space-x-2"], [3, "ngModelChange", "no_past_times", "ngModel"], [1, "mb-4", "flex-1", 3, "ngModelChange", "label", "ngModel"], [1, "my-2", "grid", "grid-cols-2", "gap-2"], [1, "bg-base-200", "col-span-2", "mb-2", "flex", "w-full", "items-center", "justify-center", "rounded-sm", "py-4", "opacity-30"], ["btn", "", "matRipple", "", 1, "mb-4", "w-full", 3, "click"], ["appearance", "outline", 1, "w-full"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], ["value", "desk"], ["value", "visitor"], ["value", "parking"], ["value", "locker"], [1, "border-base-300", "relative", "rounded-sm", "border", "px-2", "pt-4", "pb-2"], [1, "bg-base-100", "absolute", "-top-2", "left-2", "rounded-sm", "px-2", "text-sm"], [1, "relative", "-top-0.5"], [1, "mb-1", "text-xs", "opacity-60"], [1, "border-base-200", "mb-4", "space-y-4", "rounded-lg", "border"], [3, "ngModelChange", "label", "ngModel"], [1, "flex", "h-14", "space-x-2", "px-2"], [3, "diameter"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"]], template: function AutoReleaseSettingsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h3", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(4, AutoReleaseSettingsModalComponent_Conditional_4_Template, 3, 0, "button", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, AutoReleaseSettingsModalComponent_Conditional_5_Template, 49, 49, "main", 3)(6, AutoReleaseSettingsModalComponent_Conditional_6_Template, 4, 2, "main", 4);
        \u0275\u0275conditionalCreate(7, AutoReleaseSettingsModalComponent_Conditional_7_Template, 4, 3, "footer", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "APP.CONCIERGE.AUTO_RELEASE_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 5 : 6);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 7 : -1);
      }
    }, dependencies: [
      CommonModule,
      DurationFieldComponent,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRippleModule,
      MatRipple,
      SettingsToggleComponent,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      TimeFieldComponent,
      FormsModule,
      NgControlStatus,
      NgModel,
      MatDialogModule,
      MatDialogClose,
      IconComponent,
      DatePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoReleaseSettingsModalComponent, [{
    type: Component,
    args: [{ selector: "auto-release-modal", template: `
        <header
            class="bg-base-200 m-2 flex h-14 w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none px-4 py-2"
        >
            <h3 class="text-xl font-medium">
                {{ 'APP.CONCIERGE.AUTO_RELEASE_HEADER' | translate }}
            </h3>
            @if (!loading()) {
                <button icon matRipple mat-dialog-close>
                    <icon class="text-2xl">close</icon>
                </button>
            }
        </header>
        @if (!loading()) {
            <main class="max-h-[65vh] w-lg overflow-auto px-4">
                <div class="flex space-x-2">
                    <div class="flex-1">
                        <label>
                            {{
                                'APP.CONCIERGE.AUTO_RELEASE_NOTIFY' | translate
                            }}
                        </label>
                        <a-duration-field
                            [min]="-15"
                            [max]="60"
                            [step]="5"
                            [ngModel]="setting('time_before')"
                            (ngModelChange)="setSetting('time_before', $event)"
                        ></a-duration-field>
                    </div>
                    <div class="flex-1">
                        <label>{{
                            'APP.CONCIERGE.AUTO_RELEASE_CANCEL' | translate
                        }}</label>
                        <a-duration-field
                            [min]="0"
                            [max]="60"
                            [step]="5"
                            [ngModel]="setting('time_after')"
                            (ngModelChange)="setSetting('time_after', $event)"
                        ></a-duration-field>
                    </div>
                </div>
                <div class="flex items-end space-x-2">
                    <div class="flex-1">
                        <label>{{
                            'APP.CONCIERGE.AUTO_RELEASE_ALL_DAY_START'
                                | translate
                        }}</label>
                        <a-time-field
                            [no_past_times]="false"
                            [ngModel]="start_hour()"
                            (ngModelChange)="setStartHour($event)"
                        ></a-time-field>
                    </div>
                    <settings-toggle
                        class="mb-4 flex-1"
                        [label]="
                            'APP.CONCIERGE.AUTO_RELEASE_OUTSIDE_HOURS'
                                | translate
                        "
                        [ngModel]="setting('release_outside_hours')"
                        (ngModelChange)="
                            setSetting('release_outside_hours', $event)
                        "
                    ></settings-toggle>
                </div>
                <label>{{
                    'APP.CONCIERGE.AUTO_RELEASE_DEFAULT_HOURS' | translate
                }}</label>
                <div class="my-2 grid grid-cols-2 gap-2">
                    @if (!default_work_preferences().length) {
                        <div
                            class="bg-base-200 col-span-2 mb-2 flex w-full items-center justify-center rounded-sm py-4 opacity-30"
                        >
                            {{
                                'APP.CONCIERGE.AUTO_RELEASE_DEFAULT_HOURS_EMPTY'
                                    | translate
                            }}
                        </div>
                    } @else {
                        @for (
                            pref of default_work_preferences();
                            track pref.date
                        ) {
                            @if (pref.blocks.length) {
                                <div
                                    class="border-base-300 relative rounded-sm border px-2 pt-4 pb-2"
                                >
                                    <div
                                        class="bg-base-100 absolute -top-2 left-2 rounded-sm px-2 text-sm"
                                    >
                                        <span class="relative -top-0.5">{{
                                            pref.date | date: 'EEEE'
                                        }}</span>
                                    </div>
                                    @for (block of pref.blocks; track block.i) {
                                        <div class="mb-1 text-xs opacity-60">
                                            {{
                                                block.start | date: 'shortTime'
                                            }}
                                            -
                                            {{ block.end | date: 'shortTime' }}
                                            |
                                            {{ block.location }}
                                        </div>
                                    }
                                </div>
                            }
                        }
                    }
                </div>
                <button
                    btn
                    matRipple
                    (click)="setDefaultWorkHourPreferences()"
                    class="mb-4 w-full"
                >
                    {{
                        'APP.CONCIERGE.AUTO_RELEASE_DEFAULT_HOURS_SET'
                            | translate
                    }}
                </button>
                <label>{{
                    'APP.CONCIERGE.AUTO_RELEASE_TYPES' | translate
                }}</label>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-select
                        multiple
                        [ngModel]="setting('resources')"
                        (ngModelChange)="setSetting('resources', $event)"
                        [placeholder]="
                            'APP.CONCIERGE.AUTO_RELEASE_TYPES' | translate
                        "
                    >
                        <!-- <mat-option value="room">
                Rooms
              </mat-option> -->
                        <mat-option value="desk">
                            {{ 'RESOURCE.DESKS' | translate }}
                        </mat-option>
                        <mat-option value="visitor">
                            {{ 'RESOURCE.VISITORS' | translate }}
                        </mat-option>
                        <mat-option value="parking">
                            {{ 'RESOURCE.PARKING' | translate }}
                        </mat-option>
                        <mat-option value="locker">
                            {{ 'RESOURCE.LOCKERS' | translate }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
                @for (name of types; track name) {
                    @if (setting('resources')?.includes(name)) {
                        <div
                            class="border-base-200 mb-4 space-y-4 rounded-lg border"
                        >
                            <settings-toggle
                                [label]="
                                    'APP.CONCIERGE.AUTO_RELEASE_' +
                                        name.toUpperCase() | translate
                                "
                                [ngModel]="setting('custom')?.includes(name)"
                                (ngModelChange)="toggleCustom(name, $event)"
                            ></settings-toggle>
                            @if (setting('custom')?.includes(name)) {
                                <div class="flex h-14 space-x-2 px-2">
                                    <a-duration-field
                                        [min]="-15"
                                        [max]="60"
                                        [step]="5"
                                        [ngModel]="
                                            setting(name + '_time_before')
                                        "
                                        (ngModelChange)="
                                            setSetting(
                                                name + '_time_before',
                                                $event
                                            )
                                        "
                                    ></a-duration-field>
                                    <a-duration-field
                                        [min]="0"
                                        [max]="60"
                                        [step]="5"
                                        [ngModel]="
                                            setting(name + '_time_after')
                                        "
                                        (ngModelChange)="
                                            setSetting(
                                                name + '_time_after',
                                                $event
                                            )
                                        "
                                    ></a-duration-field>
                                </div>
                            }
                        </div>
                    }
                }
            </main>
        } @else {
            <main
                class="flex flex-col items-center justify-center space-y-2 p-32"
            >
                <mat-spinner [diameter]="48"></mat-spinner>
                <p>{{ loading() }}</p>
            </main>
        }
        @if (!loading()) {
            <footer class="border-base-200 flex justify-end border-t px-4 py-2">
                <button btn matRipple class="w-32" (click)="save()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        }
    `, imports: [
      CommonModule,
      DurationFieldComponent,
      MatProgressSpinnerModule,
      MatRippleModule,
      SettingsToggleComponent,
      MatFormFieldModule,
      MatSelectModule,
      TimeFieldComponent,
      FormsModule,
      MatDialogModule,
      TranslatePipe,
      IconComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AutoReleaseSettingsModalComponent, { className: "AutoReleaseSettingsModalComponent", filePath: "apps/concierge/src/app/building-manager/auto-release-settings-modal.component.ts", lineNumber: 289 });
})();

// apps/concierge/src/app/building-manager/building-form.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function BuildingFormComponent_Conditional_1_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const region_r1 = ctx.$implicit;
    \u0275\u0275property("value", region_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", region_r1.display_name || region_r1.name, " ");
  }
}
function BuildingFormComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 4)(5, "mat-select", 12);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "mat-option", 8);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(10, BuildingFormComponent_Conditional_1_For_11_Template, 2, 2, "mat-option", 8, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "RESOURCE.REGION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.parent_id)("placeholder", \u0275\u0275pipeBind1(6, 7, "COMMON.REGION_SELECT"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.default_parent);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 9, "COMMON.NONE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.region_list());
  }
}
function BuildingFormComponent_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tz_r3 = ctx.$implicit;
    \u0275\u0275property("value", tz_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tz_r3);
  }
}
function BuildingFormComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "COMMON.TIMEZONE_EMPTY"), " ");
  }
}
var BuildingFormComponent = class _BuildingFormComponent extends AsyncHandler {
  get default_parent() {
    return this._org.organisation.id;
  }
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this.building = input(
      null,
      ...ngDevMode ? [{ debugName: "building" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.save = input(
      0,
      ...ngDevMode ? [{ debugName: "save" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loadingInput = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "loadingInput" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "loading" }));
    this.loading = linkedSignal(
      this.loadingInput,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loadingChange = output();
    this.done = output();
    this.timezones = TIMEZONES_IANA;
    this.region_list = this._org.region_list;
    this.model = signal(
      {
        id: "",
        parent_id: this._org.organisation.id,
        display_name: "",
        timezone: Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone || "",
        location: ""
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (p) => {
      required(p.parent_id);
      required(p.display_name);
    });
    this.filtered_timezones = computed(
      () => {
        const timezone = (this.model().timezone || "").toLowerCase();
        return this.timezones.filter((_) => _.toLowerCase().includes(timezone));
      },
      ...ngDevMode ? [{ debugName: "filtered_timezones" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const building = this.building();
      if (!building)
        return;
      this.model.update((m) => __spreadProps(__spreadValues({}, m), {
        id: building.id ?? m.id,
        parent_id: building.parent_id ?? m.parent_id,
        display_name: building.display_name ?? m.display_name,
        timezone: building.timezone ?? m.timezone,
        location: building.location ?? m.location
      }));
    });
    effect(() => {
      if (this.save())
        this.saveChanges();
    });
  }
  async saveChanges() {
    this.model.update((m) => __spreadProps(__spreadValues({}, m), {
      parent_id: m.parent_id || this._org.organisation.id
    }));
    this.form().markAsTouched();
    if (!this.form().valid()) {
      return notifyError(i18n("FORM.INVALID_FIELDS", {
        field_list: getInvalidSignalFields(this.form, this.model).join(", ")
      }));
    }
    const data = this.model();
    this.loading.set(true);
    this.loadingChange.emit(true);
    const body = __spreadProps(__spreadValues({}, data), {
      tags: ["building"],
      name: `BLD ${Rt().description} ${data.display_name}`
    });
    const building = await (data.id ? Ya(data.id, body) : Va(body)).catch((e) => {
      notifyError(i18n("APP.CONCIERGE.BUILDINGS_SAVE_ERROR", {
        error: e.message || e.error || e
      }));
      this.loading.set(false);
      this.loadingChange.emit(false);
      throw e;
    });
    notifySuccess(i18n("APP.CONCIERGE.BUILDINGS_SAVE_SUCCESS"));
    this.loading.set(false);
    this.loadingChange.emit(false);
    this.done.emit(building);
  }
  static {
    this.\u0275fac = function BuildingFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BuildingFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BuildingFormComponent, selectors: [["building-form"]], inputs: { building: [1, "building"], save: [1, "save"], loadingInput: [1, "loading", "loadingInput"] }, outputs: { loadingChange: "loadingChange", done: "done" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 30, vars: 24, consts: [["auto", "matAutocomplete"], ["building", ""], [1, "flex", "flex-col"], ["for", "display-name"], ["appearance", "outline"], ["matInput", "", 3, "placeholder", "formField"], ["matPrefix", "", 1, "text-2xl"], ["matInput", "", 3, "formField", "placeholder", "matAutocomplete"], [3, "value"], [3, "disabled"], ["for", "address"], ["for", "region"], [3, "formField", "placeholder"]], template: function BuildingFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "form", 1);
        \u0275\u0275conditionalCreate(1, BuildingFormComponent_Conditional_1_Template, 12, 11, "div", 2);
        \u0275\u0275elementStart(2, "div", 2)(3, "label", 3);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "mat-form-field", 4);
        \u0275\u0275element(7, "input", 5);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 2)(10, "label", 3);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-form-field", 4)(14, "icon", 6);
        \u0275\u0275text(15, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275element(16, "input", 7);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "mat-autocomplete", null, 0);
        \u0275\u0275repeaterCreate(20, BuildingFormComponent_For_21_Template, 2, 2, "mat-option", 8, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275conditionalCreate(22, BuildingFormComponent_Conditional_22_Template, 3, 4, "mat-option", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 2)(24, "label", 10);
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "mat-form-field", 4);
        \u0275\u0275element(28, "input", 5);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const auto_r4 = \u0275\u0275reference(19);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.region_list().length ? 1 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 12, "FORM.DISPLAY_NAME"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 14, "FORM.DISPLAY_NAME"))("formField", ctx.form.display_name);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 16, "COMMON.TIMEZONE"));
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.timezone)("placeholder", \u0275\u0275pipeBind1(17, 18, "COMMON.TIMEZONE"))("matAutocomplete", auto_r4);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.filtered_timezones());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.timezones.length ? 22 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 20, "COMMON.LOCATION"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(29, 22, "COMMON.LOCATION"))("formField", ctx.form.location);
        \u0275\u0275control();
      }
    }, dependencies: [
      IconComponent,
      FormField,
      MatFormFieldModule,
      MatFormField,
      MatPrefix,
      MatAutocompleteModule,
      MatAutocomplete,
      MatOption,
      MatAutocompleteTrigger,
      MatSelectModule,
      MatSelect,
      MatInputModule,
      MatInput,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuildingFormComponent, [{
    type: Component,
    args: [{ selector: "building-form", template: `
        <form building>
            @if (region_list().length) {
                <div class="flex flex-col">
                    <label for="region">
                        {{ 'RESOURCE.REGION' | translate }}
                    </label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            [formField]="form.parent_id"
                            [placeholder]="'COMMON.REGION_SELECT' | translate"
                        >
                                <mat-option [value]="default_parent">
                                    {{ 'COMMON.NONE' | translate }}
                                </mat-option>
                                @for (
                                    region of region_list();
                                    track region.id
                                ) {
                                    <mat-option [value]="region.id">
                                        {{ region.display_name || region.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
                <div class="flex flex-col">
                    <label for="display-name"
                        >{{ 'FORM.DISPLAY_NAME' | translate }}
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [placeholder]="'FORM.DISPLAY_NAME' | translate"
                            [formField]="form.display_name"
                        />
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="display-name">{{
                        'COMMON.TIMEZONE' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <icon matPrefix class="text-2xl">search</icon>
                        <input
                            matInput
                            [formField]="form.timezone"
                            [placeholder]="'COMMON.TIMEZONE' | translate"
                            [matAutocomplete]="auto"
                        />
                    </mat-form-field>
                    <mat-autocomplete #auto="matAutocomplete">
                        @for (tz of filtered_timezones(); track tz) {
                            <mat-option [value]="tz">{{ tz }}</mat-option>
                        }
                        @if (!timezones.length) {
                            <mat-option [disabled]="true">
                                {{ 'COMMON.TIMEZONE_EMPTY' | translate }}
                            </mat-option>
                        }
                    </mat-autocomplete>
                </div>
                <div class="flex flex-col">
                    <label for="address">
                        {{ 'COMMON.LOCATION' | translate }}
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [placeholder]="'COMMON.LOCATION' | translate"
                            [formField]="form.location"
                        />
                    </mat-form-field>
                </div>
            </form>
    `, imports: [
      TranslatePipe,
      IconComponent,
      FormField,
      MatFormFieldModule,
      MatAutocompleteModule,
      MatSelectModule,
      MatInputModule
    ] }]
  }], () => [], { building: [{ type: Input, args: [{ isSignal: true, alias: "building", required: false }] }], save: [{ type: Input, args: [{ isSignal: true, alias: "save", required: false }] }], loadingInput: [{ type: Input, args: [{ isSignal: true, alias: "loading", required: false }] }], loadingChange: [{ type: Output, args: ["loadingChange"] }], done: [{ type: Output, args: ["done"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BuildingFormComponent, { className: "BuildingFormComponent", filePath: "apps/concierge/src/app/building-manager/building-form.component.ts", lineNumber: 119 });
})();

// apps/concierge/src/app/building-manager/building-modal.component.ts
var BuildingModalComponent = class _BuildingModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.save_state = signal(
      0,
      ...ngDevMode ? [{ debugName: "save_state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.building = signal(
      this._data,
      ...ngDevMode ? [{ debugName: "building" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.close = (d) => this._dialog_ref.close(d);
    this.save = () => this.save_state.set(Date.now());
  }
  static {
    this.\u0275fac = function BuildingModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BuildingModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BuildingModalComponent, selectors: [["building-modal"]], decls: 4, vars: 9, consts: [[3, "confirm", "heading", "loading"], [3, "loadingChange", "done", "building", "save", "loading"]], template: function BuildingModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("confirm", function BuildingModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(3, "building-form", 1);
        \u0275\u0275twoWayListener("loadingChange", function BuildingModalComponent_Template_building_form_loadingChange_3_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.loading, $event) || (ctx.loading = $event);
          return $event;
        });
        \u0275\u0275listener("done", function BuildingModalComponent_Template_building_form_done_3_listener($event) {
          return ctx.close($event);
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 5, ctx.building().id ? "APP.CONCIERGE.BUILDINGS_EDIT" : "APP.CONCIERGE.BUILDINGS_NEW"))("loading", ctx.loading() ? \u0275\u0275pipeBind1(2, 7, "APP.CONCIERGE.BUILDINGS_SAVING") : "");
        \u0275\u0275advance(3);
        \u0275\u0275property("building", ctx.building())("save", ctx.save_state());
        \u0275\u0275twoWayProperty("loading", ctx.loading);
      }
    }, dependencies: [
      FullscreenModalShellComponent,
      BuildingFormComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuildingModalComponent, [{
    type: Component,
    args: [{ selector: "building-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (building().id
                    ? 'APP.CONCIERGE.BUILDINGS_EDIT'
                    : 'APP.CONCIERGE.BUILDINGS_NEW'
                ) | translate
            "
            [loading]="
                loading() ? ('APP.CONCIERGE.BUILDINGS_SAVING' | translate) : ''
            "
            (confirm)="save()"
        >
            <building-form
                [building]="building()"
                [save]="save_state()"
                [(loading)]="loading"
                (done)="close($event)"
            />
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      BuildingFormComponent,
      TranslatePipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BuildingModalComponent, { className: "BuildingModalComponent", filePath: "apps/concierge/src/app/building-manager/building-modal.component.ts", lineNumber: 40 });
})();

// apps/concierge/src/app/building-manager/induction-settings-modal.component.ts
function InductionSettingsModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 2)(1, "icon", 6);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function InductionSettingsModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 3)(1, "settings-toggle", 7);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function InductionSettingsModalComponent_Conditional_5_Template_settings_toggle_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.is_enabled, $event) || (ctx_r1.is_enabled = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(3, "mat-form-field", 8)(4, "textarea", 9);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function InductionSettingsModalComponent_Conditional_5_Template_textarea_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.induction_details, $event) || (ctx_r1.induction_details = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.is_enabled);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(2, 4, "APP.CONCIERGE.INDUCTION_ENABLE"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.induction_details);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 6, "APP.CONCIERGE.INDUCTION_DETAILS"));
    \u0275\u0275control();
  }
}
function InductionSettingsModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 4);
    \u0275\u0275element(1, "mat-spinner", 10);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 48);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.loading());
  }
}
function InductionSettingsModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 5)(1, "button", 11);
    \u0275\u0275listener("click", function InductionSettingsModalComponent_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(2, " Save ");
    \u0275\u0275elementEnd()();
  }
}
var InductionSettingsModalComponent = class _InductionSettingsModalComponent {
  constructor() {
    this._zone_id = inject(MAT_DIALOG_DATA);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._dialog_ref = inject(MatDialogRef);
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.induction_details = signal(
      "",
      ...ngDevMode ? [{ debugName: "induction_details" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_enabled = signal(
      false,
      ...ngDevMode ? [{ debugName: "is_enabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.settings = signal(
      {},
      ...ngDevMode ? [{ debugName: "settings" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    if (!this._zone_id)
      return;
    this.loadSettings();
  }
  async loadSettings() {
    this.loading.set(i18n("APP.CONCIERGE.INDUCTION_LOADING"));
    const visitor_kiosk_app = this._settings.get("app.visitor_kiosk_app") || "visitor-kiosk_app";
    const [bld_metadata, org_metadata, org_settings] = await Promise.all([
      Wu(this._zone_id, visitor_kiosk_app),
      Wu(this._org.organisation.id, visitor_kiosk_app),
      Wu(this._org.organisation.id, "settings")
    ]);
    const settings = __spreadValues(__spreadValues(__spreadValues({}, org_settings.details), org_metadata.details), bld_metadata.details);
    this.settings.set(settings);
    this.induction_details.set(settings.induction_details || "");
    this.is_enabled.set(settings.induction_enabled ?? false);
    this.loading.set("");
  }
  async save() {
    this.loading.set(i18n("APP.CONCIERGE.INDUCTION_SAVING"));
    const visitor_kiosk_app = this._settings.get("app.visitor_kiosk_app") || "visitor-kiosk_app";
    const concierge_app = this._settings.get("app.concierge_app") || "concierge_app";
    this._dialog_ref.disableClose = true;
    const metadata = await Wu(this._zone_id, visitor_kiosk_app);
    const con_metadata = await Wu(this._zone_id, concierge_app);
    const visitor_metadata = __spreadProps(__spreadValues({}, metadata.details), {
      induction_details: this.induction_details(),
      induction_enabled: this.is_enabled()
    });
    const concierge_metadata = __spreadProps(__spreadValues({}, con_metadata.details), {
      induction_details: this.induction_details(),
      induction_enabled: this.is_enabled()
    });
    const result_visitor = await Qu(this._zone_id, {
      name: metadata.name || visitor_kiosk_app,
      description: metadata.description || "",
      details: visitor_metadata
    }).catch((err) => {
      console.error(err);
      notifyError(i18n("APP.CONCIERGE.INDUCTION_ERROR", { error: err }));
    });
    const result_concierge = await Qu(this._zone_id, {
      name: con_metadata.name || concierge_app,
      description: con_metadata.description || "",
      details: concierge_metadata
    }).catch((err) => {
      console.error(err);
      notifyError(i18n("APP.CONCIERGE.INDUCTION_ERROR", { error: err }));
    });
    this.loading.set("");
    if (result_visitor) {
      notifySuccess(i18n("APP.CONCIERGE.INDUCTION_SUCCESS"));
      this._dialog_ref.close();
    }
  }
  static {
    this.\u0275fac = function InductionSettingsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InductionSettingsModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InductionSettingsModalComponent, selectors: [["induction-settings-modal"]], decls: 8, vars: 6, consts: [[1, "bg-base-200", "m-2", "flex", "h-14", "w-[calc(100%-1rem)]", "items-center", "justify-between", "rounded-sm", "border-none", "px-4", "py-2"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "flex-col", "space-y-2", "px-4"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-32"], [1, "border-base-200", "mt-2", "flex", "justify-end", "border-t", "px-4", "py-2"], [1, "text-2xl"], [3, "ngModelChange", "ngModel", "label"], ["appearance", "outline", 1, "h-[50vh]", "w-xl", "max-w-[80vw]"], ["matInput", "", 1, "h-[calc(50vh-2rem)]", "w-136", "max-w-[calc(80vw-2rem)]", "resize-none", 3, "ngModelChange", "ngModel", "placeholder"], [3, "diameter"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"]], template: function InductionSettingsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h3", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(4, InductionSettingsModalComponent_Conditional_4_Template, 3, 0, "button", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, InductionSettingsModalComponent_Conditional_5_Template, 6, 8, "main", 3)(6, InductionSettingsModalComponent_Conditional_6_Template, 4, 2, "main", 4);
        \u0275\u0275conditionalCreate(7, InductionSettingsModalComponent_Conditional_7_Template, 3, 0, "footer", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "APP.CONCIERGE.INDUCTION_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 5 : 6);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 7 : -1);
      }
    }, dependencies: [
      MatDialogModule,
      MatDialogClose,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      SettingsToggleComponent,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InductionSettingsModalComponent, [{
    type: Component,
    args: [{ selector: "induction-settings-modal", template: `
        <header
            class="bg-base-200 m-2 flex h-14 w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none px-4 py-2"
        >
            <h3 class="text-xl font-medium">
                {{ 'APP.CONCIERGE.INDUCTION_HEADER' | translate }}
            </h3>
            @if (!loading()) {
                <button icon matRipple mat-dialog-close>
                    <icon class="text-2xl">close</icon>
                </button>
            }
        </header>
        @if (!loading()) {
            <main class="flex flex-col space-y-2 px-4">
                <settings-toggle
                    [(ngModel)]="is_enabled"
                    [label]="'APP.CONCIERGE.INDUCTION_ENABLE' | translate"
                ></settings-toggle>
                <mat-form-field
                    appearance="outline"
                    class="h-[50vh] w-xl max-w-[80vw]"
                >
                    <textarea
                        matInput
                        [(ngModel)]="induction_details"
                        [placeholder]="
                            'APP.CONCIERGE.INDUCTION_DETAILS' | translate
                        "
                        class="h-[calc(50vh-2rem)] w-136 max-w-[calc(80vw-2rem)] resize-none"
                    ></textarea>
                </mat-form-field>
            </main>
        } @else {
            <main
                class="flex flex-col items-center justify-center space-y-2 p-32"
            >
                <mat-spinner [diameter]="48"></mat-spinner>
                <p>{{ loading() }}</p>
            </main>
        }
        @if (!loading()) {
            <footer
                class="border-base-200 mt-2 flex justify-end border-t px-4 py-2"
            >
                <button btn matRipple class="w-32" (click)="save()">
                    Save
                </button>
            </footer>
        }
    `, imports: [
      MatDialogModule,
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatProgressSpinnerModule,
      MatFormFieldModule,
      MatInputModule,
      SettingsToggleComponent,
      FormsModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InductionSettingsModalComponent, { className: "InductionSettingsModalComponent", filePath: "apps/concierge/src/app/building-manager/induction-settings-modal.component.ts", lineNumber: 92 });
})();

// apps/concierge/src/app/building-manager/item-list-modal.component.ts
function ItemListModalComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "input", 6);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function ItemListModalComponent_For_12_Template_input_ngModelChange_1_listener($event) {
      const \u0275$index_18_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateItem(\u0275$index_18_r2, "name", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(3, "input", 7);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("ngModelChange", function ItemListModalComponent_For_12_Template_input_ngModelChange_3_listener($event) {
      const \u0275$index_18_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateItem(\u0275$index_18_r2, "email", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(5, "button", 8);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function ItemListModalComponent_For_12_Template_button_click_5_listener() {
      const \u0275$index_18_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeItem(\u0275$index_18_r2));
    });
    \u0275\u0275elementStart(7, "icon", 9);
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(2, 5, "APP.CONCIERGE.SUPPORT_TYPES_NAME"))("ngModel", item_r4.name);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(4, 7, "APP.CONCIERGE.SUPPORT_TYPES_EMAIL"))("ngModel", item_r4.email);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 9, "APP.CONCIERGE.SUPPORT_TYPES_REMOVE"));
  }
}
var ItemListModalComponent = class _ItemListModalComponent {
  constructor() {
    this._bld_id = inject(MAT_DIALOG_DATA);
    this._settings = inject(SettingsService);
    this._dialog_ref = inject(MatDialogRef);
    this.item_list = signal(
      [],
      ...ngDevMode ? [{ debugName: "item_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.identify = (index, item) => index;
  }
  async ngOnInit() {
    const metadata_key = this._settings.get("app.workplace_metadata_key") || "workplace_app";
    const metadata = await Wu(this._bld_id, metadata_key);
    const items = metadata?.details?.support_issue_types || [];
    this.item_list.set(items);
  }
  addItem() {
    this.item_list.update((items) => [...items, { name: "", email: "" }]);
  }
  removeItem(index) {
    this.item_list.update((items) => items.filter((_, i) => i !== index));
  }
  updateItem(index, key, value) {
    this.item_list.update((items) => items.map((item, i) => i === index ? __spreadProps(__spreadValues({}, item), { [key]: value }) : item));
  }
  async save() {
    const metadata_key = this._settings.get("app.workplace_metadata_key") || "workplace_app";
    const concierge_key = this._settings.get("app.concierge_metadata_key") || "concierge_app";
    this.loading.set(true);
    const items = this.item_list().filter((_) => _);
    const metadata = await Wu(this._bld_id, metadata_key);
    metadata.details.support_issue_types = items;
    let resp = await Qu(this._bld_id, {
      name: metadata_key,
      details: metadata.details,
      description: metadata.description || ""
    }).catch((_) => {
      notifyError(`Failed to save issue types. ${_}`);
    });
    if (!resp) {
      this.loading.set(false);
      return;
    }
    const concierge_metadata = await Wu(this._bld_id, metadata_key);
    concierge_metadata.details.support_issue_types = items;
    resp = await Qu(this._bld_id, {
      name: concierge_key,
      details: concierge_metadata.details,
      description: concierge_metadata.description || ""
    }).catch((_) => {
      notifyError(`Failed to save issue types. ${_}`);
    });
    this.loading.set(false);
    if (resp)
      this._dialog_ref.close();
  }
  static {
    this.\u0275fac = function ItemListModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ItemListModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemListModalComponent, selectors: [["item-list-modal"]], decls: 16, vars: 6, consts: [["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "h-[50vh]", "w-xl", "space-y-2", "overflow-auto", "p-2"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], [1, "flex", "w-full", "items-center", "space-x-2"], [1, "border-base-200", "flex", "items-center", "justify-end", "border-t", "p-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], ["type", "text", 1, "border-base-200", "flex-1", "rounded-sm", "border", "px-4", "py-3", 3, "ngModelChange", "placeholder", "ngModel"], ["type", "email", 1, "border-base-200", "flex-2", "rounded-sm", "border", "px-4", "py-3", 3, "ngModelChange", "placeholder", "ngModel"], ["icon", "", "matRipple", "", 1, "border-error", "text-error", "h-12", "w-12", "rounded-sm", "border", 3, "click", "matTooltip"], [1, "text-2xl"]], template: function ItemListModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header")(1, "h2");
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 0)(5, "icon");
        \u0275\u0275text(6, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "main", 1)(8, "button", 2);
        \u0275\u0275listener("click", function ItemListModalComponent_Template_button_click_8_listener() {
          return ctx.addItem();
        });
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(11, ItemListModalComponent_For_12_Template, 9, 11, "div", 3, ctx.identify, true);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "footer", 4)(14, "button", 5);
        \u0275\u0275listener("click", function ItemListModalComponent_Template_button_click_14_listener() {
          return ctx.save();
        });
        \u0275\u0275text(15, "Save");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "APP.CONCIERGE.SUPPORT_TYPES_HEADER"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 4, "APP.CONCIERGE.SUPPORT_TYPES_ADD"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.item_list());
      }
    }, dependencies: [
      MatDialogModule,
      MatDialogClose,
      MatRippleModule,
      MatRipple,
      IconComponent,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatTooltipModule,
      MatTooltip,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemListModalComponent, [{
    type: Component,
    args: [{ selector: "item-list-modal", template: `
        <header>
            <h2>{{ 'APP.CONCIERGE.SUPPORT_TYPES_HEADER' | translate }}</h2>
            <button icon matRipple mat-dialog-close="">
                <icon>close</icon>
            </button>
        </header>
        <main class="h-[50vh] w-xl space-y-2 overflow-auto p-2">
            <button btn matRipple class="w-full" (click)="addItem()">
                {{ 'APP.CONCIERGE.SUPPORT_TYPES_ADD' | translate }}
            </button>
            @for (
                item of item_list();
                track identify(i, item);
                let i = $index
            ) {
                <div class="flex w-full items-center space-x-2">
                    <input
                        type="text"
                        class="border-base-200 flex-1 rounded-sm border px-4 py-3"
                        [placeholder]="
                            'APP.CONCIERGE.SUPPORT_TYPES_NAME' | translate
                        "
                        [ngModel]="item.name"
                        (ngModelChange)="updateItem(i, 'name', $event)"
                    />
                    <input
                        type="email"
                        class="border-base-200 flex-2 rounded-sm border px-4 py-3"
                        [placeholder]="
                            'APP.CONCIERGE.SUPPORT_TYPES_EMAIL' | translate
                        "
                        [ngModel]="item.email"
                        (ngModelChange)="updateItem(i, 'email', $event)"
                    />
                    <button
                        icon
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.SUPPORT_TYPES_REMOVE' | translate
                        "
                        class="border-error text-error h-12 w-12 rounded-sm border"
                        (click)="removeItem(i)"
                    >
                        <icon class="text-2xl">delete</icon>
                    </button>
                </div>
            }
        </main>
        <footer
            class="border-base-200 flex items-center justify-end border-t p-2"
        >
            <button btn matRipple class="w-32" (click)="save()">Save</button>
        </footer>
    `, imports: [
      MatDialogModule,
      MatRippleModule,
      IconComponent,
      FormsModule,
      TranslatePipe,
      MatTooltipModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemListModalComponent, { className: "ItemListModalComponent", filePath: "apps/concierge/src/app/building-manager/item-list-modal.component.ts", lineNumber: 81 });
})();

// apps/concierge/src/app/building-manager/building-management.service.ts
var BuildingManagementService = class _BuildingManagementService {
  constructor() {
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._options = signal(
      {},
      ...ngDevMode ? [{ debugName: "_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = this._options.asReadonly();
    this.filtered_buildings = computed(
      () => {
        this._org.initialised();
        const regions = this._org.region_list();
        let list = this._org.building_list();
        const options = this._options();
        if (options.zone) {
          list = list.filter((_) => _.parent_id === options.zone);
        }
        if (options.search) {
          list = list.filter((_) => _.name.toLowerCase().includes(options.search.toLowerCase()));
        }
        for (const bld of list) {
          const parent = regions.find((_) => _.id === bld.parent_id);
          if (parent) {
            bld.region = parent.display_name || parent.name;
          }
          bld.level_count = this._org.levelsForBuilding(bld)?.length || 0;
        }
        return list;
      },
      ...ngDevMode ? [{ debugName: "filtered_buildings" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  setFilters(options) {
    this._options.update((current) => __spreadValues(__spreadValues({}, current), options));
  }
  setSearchString(search) {
    this._options.update((current) => __spreadProps(__spreadValues({}, current), { search }));
  }
  editBuilding(building = new Kt()) {
    const ref = this._dialog.open(BuildingModalComponent, {
      data: building
    });
    ref.afterClosed().subscribe((data) => {
      if (data)
        this._org.addZone(data);
    });
  }
  editBuildingMetadata(zone = new Kt()) {
    const ref = this._dialog.open(AppSettingsModalComponent, {
      data: { zone }
    });
    ref.afterClosed().subscribe((data) => {
      if (data)
        setTimeout(() => location.reload(), 300);
    });
  }
  setAutoRelease(building) {
    if (!building?.id)
      return;
    this._dialog.open(AutoReleaseSettingsModalComponent, {
      data: building.id
    });
  }
  setInduction(building) {
    if (!building?.id)
      return;
    this._dialog.open(InductionSettingsModalComponent, {
      data: building.id
    });
  }
  setSupportIssueTypes(building) {
    if (!building?.id)
      return;
    this._dialog.open(ItemListModalComponent, {
      data: building.id
    });
  }
  async removeBuilding(building) {
    const ref = await openConfirmModal({
      title: i18n("APP.CONCIERGE.BUILDINGS_REMOVE_TITLE"),
      content: i18n("APP.CONCIERGE.BUILDINGS_REMOVE_MSG", {
        name: building.name
      }),
      icon: { content: "delete_forever" },
      confirm_text: i18n("COMMON.REMOVE")
    }, this._dialog);
    if (ref.reason !== "done")
      return ref.close();
    ref.loading(i18n("APP.CONCIERGE.BUILDINGS_REMOVE_LOADING"));
    await Xa(building.id).catch((e) => {
      notifyError(i18n("APP.CONCIERGE.BUILDINGS_REMOVE_ERROR", { error: e }));
      throw e;
    });
    this._org.removeZone({ id: building.id, tags: ["building"] });
    notifySuccess(i18n("APP.CONCIERGE.BUILDINGS_REMOVE_SUCCESS"));
    ref.close();
  }
  static {
    this.\u0275fac = function BuildingManagementService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BuildingManagementService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BuildingManagementService, factory: _BuildingManagementService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuildingManagementService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/concierge/src/app/ui/app-settings/booking-panel-settings-modal.component.ts
var BookingPanelSettingsModalComponent = class _BookingPanelSettingsModalComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._injector = inject(Injector);
    this._uploads = inject(UploadsService);
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.uploading = signal(
      0,
      ...ngDevMode ? [{ debugName: "uploading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.zone = this._data.zone;
    this.model = signal(
      {
        control_ui: "",
        catering_ui: "",
        custom_qr_url: "",
        custom_qr_color: "",
        show_qr_code: true,
        hide_qr_text: false,
        disable_book_now: false,
        disable_book_now_host: true,
        disable_end_meeting: false,
        enable_end_meeting_button: false,
        hide_meeting_details: false,
        hide_meeting_title: false,
        min_duration: 15,
        max_duration: 60,
        pending_before: 5,
        pending_period: 15,
        room_image: "",
        offline_image: ""
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (p) => {
      validate(p.control_ui, ({ value }) => isValidUrl(value()) ? void 0 : { kind: "url" });
      validate(p.catering_ui, ({ value }) => isValidUrl(value()) ? void 0 : { kind: "url" });
      validate(p.custom_qr_url, ({ value }) => isValidUrl(value()) ? void 0 : { kind: "url" });
      validate(p.room_image, ({ value }) => isValidUrl(value()) ? void 0 : { kind: "url" });
      validate(p.offline_image, ({ value }) => isValidUrl(value()) ? void 0 : { kind: "url" });
    });
    this._defaults = {};
  }
  async ngOnInit() {
    if (!this.zone?.id) {
      notifyError("Opened booking panel settings modal with invalid zone");
      return;
    }
    onFieldChange(this.model, (m) => m.max_duration, (max_duration) => {
      if (max_duration <= 60)
        return;
      this.model.update((m) => __spreadProps(__spreadValues({}, m), {
        min_duration: Math.max(15, Math.floor(m.min_duration / 15) * 15)
      }));
    }, this._injector);
    this._defaults = __spreadValues({}, this.model());
    this.loading.set("Loading existing panel settings...");
    let settings = [];
    try {
      const response = await Vc({ parent_id: this.zone.id });
      settings = response?.data || [];
    } catch {
    }
    const unencrypted_settings = settings.find((block) => block.encryption_level === He.None);
    if (!unencrypted_settings) {
      this.loading.set("");
      return;
    }
    this.loading.set("Processing found panel settings...");
    const setting_value = parse(unencrypted_settings.settings_string) || {};
    this.model.update((m) => __spreadValues(__spreadValues({}, m), setting_value));
    this.loading.set("");
  }
  uploadImage(event, link_field) {
    const element = event.target;
    if (!element?.files?.length)
      return;
    const files = element.files;
    const file = files[0];
    if (!file.type.includes("image")) {
      return notifyError("File is not an image");
    }
    const upload = this._uploads.uploadFileWithProgress(file);
    const effect_ref = effect(() => {
      const s = upload();
      this.uploading.set(s.progress);
      if (s.error) {
        notifyError("Failed to upload image. Try again later");
        this.uploading.set(0);
        effect_ref.destroy();
        return;
      }
      if (s.link) {
        this.uploading.set(0);
        this.model.update((m) => __spreadProps(__spreadValues({}, m), {
          [link_field]: s.link
        }));
        effect_ref.destroy();
      }
    }, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "effect_ref" } : (
      /* istanbul ignore next */
      {}
    )), { injector: this._injector }));
  }
  async save() {
    this.form().markAsTouched();
    if (!this.form().valid()) {
      return notifyError(`Some form fields are invalid. [${getInvalidSignalFields(this.form, this.model).join(", ")}]`);
    }
    const form_value = this.model();
    this._dialog_ref.disableClose = true;
    this.loading.set("Loading existing booking panel settings...");
    let settings = [];
    try {
      const response = await Vc({ parent_id: this.zone.id });
      settings = response?.data || [];
    } catch {
    }
    let unencrypted_settings = settings.find((block) => block.encryption_level === He.None);
    if (!unencrypted_settings)
      unencrypted_settings = new qe({
        encryption_level: He.None
      });
    const setting_value = parse(unencrypted_settings.settings_string) || {};
    const new_settings_blob = __spreadValues(__spreadValues({}, setting_value), form_value);
    const new_setting = __spreadProps(__spreadValues({}, unencrypted_settings), {
      parent_id: this._data.zone.id,
      settings_string: stringify3(new_settings_blob)
    });
    this.loading.set("Saving changes to booking panel settings...");
    const update = unencrypted_settings.id ? ea(unencrypted_settings.id, new_setting) : ta(new_setting);
    try {
      await update;
    } catch (e) {
      this._dialog_ref.disableClose = false;
      this.loading.set("");
      notifyError("Error saving changes to booking panel settings");
      throw e;
    }
    this._dialog_ref.close();
    notifySuccess(`Successfully updated booking panel settings for "${this.zone.display_name}"`);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275BookingPanelSettingsModalComponent_BaseFactory;
      return function BookingPanelSettingsModalComponent_Factory(__ngFactoryType__) {
        return (\u0275BookingPanelSettingsModalComponent_BaseFactory || (\u0275BookingPanelSettingsModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_BookingPanelSettingsModalComponent)))(__ngFactoryType__ || _BookingPanelSettingsModalComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingPanelSettingsModalComponent, selectors: [["booking-panel-settings-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 87, vars: 34, consts: [[3, "confirm", "heading", "loading"], [1, "flex", "flex-col", "space-y-4"], [1, "border-base-300", "relative", "mb-4", "flex", "flex-col", "rounded-sm", "border", "p-2"], [1, "bg-base-100", "absolute", "top-0", "left-8", "-translate-y-1/2", "p-2", "text-sm"], [1, "-mx-2", "flex", "flex-wrap", "items-center"], ["label", "Disable booking", 3, "formField"], ["label", "Hide booking host options", 3, "formField"], [1, "flex", "space-x-4"], [1, "h-20", "flex-1"], ["for", "min-duration"], [3, "formField", "min", "step", "max"], ["for", "max-duration"], [1, "flex-1"], ["for", "pending_before"], ["for", "pending_period"], ["label", "Disable auto-ending bookings", "info", "Disable ending the current booking early when sensors\ndon't detect presence in room after a period of time", 3, "formField"], ["label", "Show button to end booking early", 3, "formField"], ["label", "Hide Meeting Details", "info", "When enabled only shows the time of the current meeting", 3, "formField"], ["label", "Hide Meeting Title", "info", "When enabled only shows the time and host of the current meeting", 3, "formField"], ["label", "Show Booking QR Code", 3, "formField"], ["label", "Hide QR helper text", 3, "formField"], [1, "mb-2"], ["for", "custom-qr-url"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "placeholder", "/workplace/#/book/room/?room_id=sys-123456", 3, "formField"], ["for", "custom-qr-color"], ["matInput", "", "placeholder", "#4A2C89", 3, "formField"], ["for", "control-ui"], ["matInput", "", "placeholder", "https://control.example.com/...", 3, "formField"], ["for", "catering-ui"], ["matInput", "", "placeholder", "https://catering.example.com/...", 3, "formField"], ["for", "room-image"], [1, "flex", "space-x-2"], ["appearance", "outline", 1, "w-1/2", "flex-1"], ["matInput", "", "placeholder", "/assets/images/room_test1.png", 3, "formField"], ["icon", "", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "rounded-sm", 3, "disabled"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"], ["for", "offline-image"], ["matInput", "", "placeholder", "/assets/images/offline1.png", 3, "formField"], ["icon", "", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "relative", "h-12", "w-12", "rounded-sm", 3, "disabled"]], template: function BookingPanelSettingsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275listener("confirm", function BookingPanelSettingsModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(1, "form", 1)(2, "div", 2)(3, "h4", 3);
        \u0275\u0275text(4, " Booking Settings ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4);
        \u0275\u0275element(6, "settings-toggle", 5);
        \u0275\u0275controlCreate();
        \u0275\u0275element(7, "settings-toggle", 6);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "label", 9);
        \u0275\u0275text(11, "Minimum Booking Duration");
        \u0275\u0275elementEnd();
        \u0275\u0275element(12, "a-duration-field", 10);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 8)(14, "label", 11);
        \u0275\u0275text(15, "Maximum Booking Duration");
        \u0275\u0275elementEnd();
        \u0275\u0275element(16, "a-duration-field", 10);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 7)(18, "div", 12)(19, "label", 13);
        \u0275\u0275text(20, "Allow check-in before meeting");
        \u0275\u0275elementEnd();
        \u0275\u0275element(21, "a-duration-field", 10);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 12)(23, "label", 14);
        \u0275\u0275text(24, "Cancel not checked-in meetings after");
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "a-duration-field", 10);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 4);
        \u0275\u0275element(27, "settings-toggle", 15);
        \u0275\u0275controlCreate();
        \u0275\u0275element(28, "settings-toggle", 16);
        \u0275\u0275controlCreate();
        \u0275\u0275element(29, "settings-toggle", 17);
        \u0275\u0275controlCreate();
        \u0275\u0275element(30, "settings-toggle", 18);
        \u0275\u0275controlCreate();
        \u0275\u0275element(31, "settings-toggle", 19);
        \u0275\u0275controlCreate();
        \u0275\u0275element(32, "settings-toggle", 20);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 21)(34, "label", 22);
        \u0275\u0275text(35, "Custom QR Code URL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "mat-form-field", 23);
        \u0275\u0275element(37, "input", 24);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(38, "mat-error");
        \u0275\u0275text(39, " Custom QR Code URL must be a valid URL ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "mat-hint");
        \u0275\u0275text(41, " Custom QR Code URL will replace the default Booking QR Code ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "div", 21)(43, "label", 25);
        \u0275\u0275text(44, "Custom QR Color");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "mat-form-field", 23);
        \u0275\u0275element(46, "input", 26);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "div", 7)(48, "div", 12)(49, "label", 27);
        \u0275\u0275text(50, "Control UI URL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "mat-form-field", 23);
        \u0275\u0275element(52, "input", 28);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(53, "mat-error");
        \u0275\u0275text(54, "Control UI must be a valid URL");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(55, "div", 12)(56, "label", 29);
        \u0275\u0275text(57, "Catering UI URL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "mat-form-field", 23);
        \u0275\u0275element(59, "input", 30);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(60, "mat-error");
        \u0275\u0275text(61, " Catering UI must be a valid URL ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(62, "div", 7)(63, "div", 12)(64, "label", 31);
        \u0275\u0275text(65, "Room Image URL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "div", 32)(67, "mat-form-field", 33);
        \u0275\u0275element(68, "input", 34);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(69, "mat-error");
        \u0275\u0275text(70, " Room Image must be a valid URL ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(71, "button", 35)(72, "icon");
        \u0275\u0275text(73, "cloud_upload");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "input", 36);
        \u0275\u0275listener("change", function BookingPanelSettingsModalComponent_Template_input_change_74_listener($event) {
          return ctx.uploadImage($event, "room_image");
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(75, "div", 12)(76, "label", 37);
        \u0275\u0275text(77, "Offline Image URL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "div", 32)(79, "mat-form-field", 33);
        \u0275\u0275element(80, "input", 38);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(81, "mat-error");
        \u0275\u0275text(82, " Offline Image must be a valid URL ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(83, "button", 39)(84, "icon");
        \u0275\u0275text(85, "cloud_upload");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "input", 36);
        \u0275\u0275listener("change", function BookingPanelSettingsModalComponent_Template_input_change_86_listener($event) {
          return ctx.uploadImage($event, "offline_image");
        });
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", "Booking Panel Settings - " + (ctx.zone.display_name || ctx.zone.name || "Organisation"))("loading", ctx.loading());
        \u0275\u0275advance(6);
        \u0275\u0275property("formField", ctx.form.disable_book_now);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.disable_book_now_host);
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.min_duration)("min", 0)("step", ctx.model().max_duration > 60 ? 15 : 5)("max", ctx.model().max_duration);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275property("formField", ctx.form.max_duration)("min", ctx.model().min_duration + 15 - ctx.model().min_duration % 15)("step", 15)("max", 480);
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.pending_before)("min", 0)("step", 5)("max", 60);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275property("formField", ctx.form.pending_period)("min", 0)("step", 5)("max", 60);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("formField", ctx.form.disable_end_meeting);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.enable_end_meeting_button);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.hide_meeting_details);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.hide_meeting_title);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.show_qr_code);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.hide_qr_text);
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.custom_qr_url);
        \u0275\u0275control();
        \u0275\u0275advance(9);
        \u0275\u0275property("formField", ctx.form.custom_qr_color);
        \u0275\u0275control();
        \u0275\u0275advance(6);
        \u0275\u0275property("formField", ctx.form.control_ui);
        \u0275\u0275control();
        \u0275\u0275advance(7);
        \u0275\u0275property("formField", ctx.form.catering_ui);
        \u0275\u0275control();
        \u0275\u0275advance(9);
        \u0275\u0275property("formField", ctx.form.room_image);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.uploading());
        \u0275\u0275advance(9);
        \u0275\u0275property("formField", ctx.form.offline_image);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.uploading());
      }
    }, dependencies: [
      FullscreenModalShellComponent,
      MatRippleModule,
      MatRipple,
      IconComponent,
      MatProgressSpinnerModule,
      MatFormFieldModule,
      MatFormField,
      MatHint,
      MatError,
      MatInputModule,
      MatInput,
      SettingsToggleComponent,
      DurationFieldComponent,
      MatDialogModule,
      FormField
    ], styles: ["\nsettings-toggle[_ngcontent-%COMP%] {\n  width: calc(50% - 1rem);\n  margin: 0.5rem;\n}\n/*# sourceMappingURL=booking-panel-settings-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingPanelSettingsModalComponent, [{
    type: Component,
    args: [{ selector: `booking-panel-settings-modal`, template: `
        <fullscreen-modal-shell
            [heading]="
                'Booking Panel Settings - ' +
                (zone.display_name || zone.name || 'Organisation')
            "
            [loading]="loading()"
            (confirm)="save()"
        >
            <form class="flex flex-col space-y-4">
                <div
                    class="border-base-300 relative mb-4 flex flex-col rounded-sm border p-2"
                >
                    <h4
                        class="bg-base-100 absolute top-0 left-8 -translate-y-1/2 p-2 text-sm"
                    >
                        Booking Settings
                    </h4>
                    <div class="-mx-2 flex flex-wrap items-center">
                        <settings-toggle
                            label="Disable booking"
                            [formField]="form.disable_book_now"
                        ></settings-toggle>
                        <settings-toggle
                            label="Hide booking host options"
                            [formField]="form.disable_book_now_host"
                        ></settings-toggle>
                    </div>
                    <div class="flex space-x-4">
                        <div class="h-20 flex-1">
                            <label for="min-duration"
                                >Minimum Booking Duration</label
                            >
                            <a-duration-field
                                [formField]="form.min_duration"
                                [min]="0"
                                [step]="model().max_duration > 60 ? 15 : 5"
                                [max]="model().max_duration"
                            ></a-duration-field>
                        </div>
                        <div class="h-20 flex-1">
                            <label for="max-duration"
                                >Maximum Booking Duration</label
                            >
                            <a-duration-field
                                [formField]="form.max_duration"
                                [min]="
                                    model().min_duration +
                                    15 -
                                    (model().min_duration % 15)
                                "
                                [step]="15"
                                [max]="480"
                            ></a-duration-field>
                        </div>
                    </div>
                </div>
                <div class="flex space-x-4">
                    <div class="flex-1">
                        <label for="pending_before"
                            >Allow check-in before meeting</label
                        >
                        <a-duration-field
                            [formField]="form.pending_before"
                            [min]="0"
                            [step]="5"
                            [max]="60"
                        ></a-duration-field>
                    </div>
                    <div class="flex-1">
                        <label for="pending_period"
                            >Cancel not checked-in meetings after</label
                        >
                        <a-duration-field
                            [formField]="form.pending_period"
                            [min]="0"
                            [step]="5"
                            [max]="60"
                        ></a-duration-field>
                    </div>
                </div>
                <div class="-mx-2 flex flex-wrap items-center">
                    <settings-toggle
                        label="Disable auto-ending bookings"
                        [formField]="form.disable_end_meeting"
                        info="Disable ending the current booking early when sensors
don't detect presence in room after a period of time"
                    ></settings-toggle>
                    <settings-toggle
                        label="Show button to end booking early"
                        [formField]="form.enable_end_meeting_button"
                    ></settings-toggle>
                    <settings-toggle
                        label="Hide Meeting Details"
                        [formField]="form.hide_meeting_details"
                        info="When enabled only shows the time of the current meeting"
                    ></settings-toggle>
                    <settings-toggle
                        label="Hide Meeting Title"
                        [formField]="form.hide_meeting_title"
                        info="When enabled only shows the time and host of the current meeting"
                    ></settings-toggle>
                    <settings-toggle
                        label="Show Booking QR Code"
                        [formField]="form.show_qr_code"
                    ></settings-toggle>
                    <settings-toggle
                        label="Hide QR helper text"
                        [formField]="form.hide_qr_text"
                    ></settings-toggle>
                </div>
                <div class="mb-2">
                    <label for="custom-qr-url">Custom QR Code URL</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            placeholder="/workplace/#/book/room/?room_id=sys-123456"
                            [formField]="form.custom_qr_url"
                        />
                        <mat-error>
                            Custom QR Code URL must be a valid URL
                        </mat-error>
                        <mat-hint>
                            Custom QR Code URL will replace the default Booking
                            QR Code
                        </mat-hint>
                    </mat-form-field>
                </div>
                <div class="mb-2">
                    <label for="custom-qr-color">Custom QR Color</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            placeholder="#4A2C89"
                            [formField]="form.custom_qr_color"
                        />
                    </mat-form-field>
                </div>
                <div class="flex space-x-4">
                    <div class="flex-1">
                        <label for="control-ui">Control UI URL</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                [formField]="form.control_ui"
                                placeholder="https://control.example.com/..."
                            />
                            <mat-error
                                >Control UI must be a valid URL</mat-error
                            >
                        </mat-form-field>
                    </div>
                    <div class="flex-1">
                        <label for="catering-ui">Catering UI URL</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                [formField]="form.catering_ui"
                                placeholder="https://catering.example.com/..."
                            />
                            <mat-error>
                                Catering UI must be a valid URL
                            </mat-error>
                        </mat-form-field>
                    </div>
                </div>
                <div class="flex space-x-4">
                    <div class="flex-1">
                        <label for="room-image">Room Image URL</label>
                        <div class="flex space-x-2">
                            <mat-form-field
                                appearance="outline"
                                class="w-1/2 flex-1"
                            >
                                <input
                                    matInput
                                    placeholder="/assets/images/room_test1.png"
                                    [formField]="form.room_image"
                                />
                                <mat-error>
                                    Room Image must be a valid URL
                                </mat-error>
                            </mat-form-field>
                            <button
                                icon
                                matRipple
                                [disabled]="uploading()"
                                class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                            >
                                <icon>cloud_upload</icon>
                                <input
                                    type="file"
                                    class="absolute inset-0 opacity-0"
                                    (change)="uploadImage($event, 'room_image')"
                                />
                            </button>
                        </div>
                    </div>
                    <div class="flex-1">
                        <label for="offline-image">Offline Image URL</label>
                        <div class="flex space-x-2">
                            <mat-form-field
                                appearance="outline"
                                class="w-1/2 flex-1"
                            >
                                <input
                                    matInput
                                    placeholder="/assets/images/offline1.png"
                                    [formField]="form.offline_image"
                                />
                                <mat-error>
                                    Offline Image must be a valid URL
                                </mat-error>
                            </mat-form-field>
                            <button
                                icon
                                matRipple
                                [disabled]="uploading()"
                                class="bg-secondary text-secondary-content relative h-12 w-12 rounded-sm"
                            >
                                <icon>cloud_upload</icon>
                                <input
                                    type="file"
                                    class="absolute inset-0 opacity-0"
                                    (change)="
                                        uploadImage($event, 'offline_image')
                                    "
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      MatRippleModule,
      IconComponent,
      MatProgressSpinnerModule,
      MatFormFieldModule,
      MatInputModule,
      SettingsToggleComponent,
      DurationFieldComponent,
      MatDialogModule,
      FormField
    ], styles: ["/* angular:styles/component:css;ca7581e3f527e8cafa49f5d3654b7182593f8c4b756e7d34512a16bfc4e4e137;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/ui/app-settings/booking-panel-settings-modal.component.ts */\nsettings-toggle {\n  width: calc(50% - 1rem);\n  margin: 0.5rem;\n}\n/*# sourceMappingURL=booking-panel-settings-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingPanelSettingsModalComponent, { className: "BookingPanelSettingsModalComponent", filePath: "apps/concierge/src/app/ui/app-settings/booking-panel-settings-modal.component.ts", lineNumber: 302 });
})();

// apps/concierge/src/environments/settings.ts
var custom_reports = [];
var app = {
  name: "Concierge",
  title: "PlaceOS",
  description: "Concierge UI",
  short_name: "PlaceOS",
  logo_light: "assets/logo-light.svg",
  logo_dark: "assets/logo-dark.svg",
  default_route: "/book/rooms",
  currency: "USD",
  use_24_hour_time: false,
  admin_group: "concierge_admins",
  features: [
    "spaces",
    "zones",
    "desks",
    "parking",
    "visitors",
    "assets",
    "facilities",
    "internal-users",
    "points",
    "surveys",
    "catering",
    "events",
    "booking-report",
    "attendance-report",
    "contact-tracing-report",
    "signage",
    "events",
    "email-templates"
  ],
  guests: { vaccine_check: true },
  delegated: false,
  has_uploads: true,
  custom_reports,
  desks: {
    can_book_for_others: true,
    max_assigned_count: 0,
    hide_user_list_download: true
  },
  bookings: { can_book_for_others: true, use_building_timezone: false },
  visitors: { all_visitors_action_window: 15 },
  reports: { attendance_include_weekends: false },
  parking: {
    show_waitlist: false,
    disable_styles: false,
    hide_bay_number: false,
    hide_level_selector_on_booking_list: false,
    hide_users: false,
    hide_vehicles: false,
    hide_users_and_vehicles: false,
    hide_availability_counter: false,
    hide_assign_space: false,
    allow_deleting: false,
    assign_space_on_approve: false,
    max_assigned_count: 0,
    custom_booking_columns: [],
    show_user_groups: []
  },
  events: {
    allow_setup_breakdown: false,
    use_building_timezone: false,
    day_timeline_view: "inverted",
    block_start: 7,
    block_end: 19,
    block_height: 5,
    custom_actions: [
      {
        id: "set_setup_breakdown",
        name: "Set Setup/Breakdown",
        icon: "manage_history"
      }
    ]
  },
  locales: [
    { id: "en-AU", name: "LANGUAGE.ENGLISH", local: "English", flag: "\u{1F1E6}\u{1F1FA}" },
    {
      id: "en-US",
      name: "LANGUAGE.ENGLISH_US",
      local: "English (US)",
      flag: "\u{1F1FA}\u{1F1F8}"
    },
    { id: "fr", name: "LANGUAGE.FRENCH", local: "Fran\xE7ais", flag: "\u{1F1EB}\u{1F1F7}" },
    {
      id: "fr-CA",
      name: "LANGUAGE.FRENCH_CA",
      local: "Fran\xE7ais (Canada)",
      flag: "\u{1F1E8}\u{1F1E6}"
    },
    { id: "es", name: "LANGUAGE.SPANISH", local: "Espa\xF1ol", flag: "\u{1F1EA}\u{1F1F8}" },
    {
      id: "pt",
      name: "LANGUAGE.PORTUGUESE",
      local: "Portugu\xEAs",
      flag: "\u{1F1F5}\u{1F1F9}"
    },
    { id: "it", name: "LANGUAGE.ITALIAN", local: "Italiano", flag: "\u{1F1EE}\u{1F1F9}" },
    { id: "zh", name: "LANGUAGE.CHINESE", local: "\u4E2D\u6587", flag: "\u{1F1E8}\u{1F1F3}" },
    { id: "ja-JP", name: "LANGUAGE.JAPANESE", local: "\u65E5\u672C\u8A9E", flag: "\u{1F1EF}\u{1F1F5}" },
    { id: "ar", name: "LANGUAGE.ARABIC", local: "\u0639\u0631\u0628\u064A\u0629", flag: "" }
  ],
  catering: {
    use_bookings: true
  }
};
var DEFAULT_SETTINGS = {
  debug: true,
  composer: {
    domain: "",
    route: "/concierge",
    protocol: "",
    port: "",
    use_domain: false,
    local_login: false
  },
  app
};

// apps/concierge/src/app/ui/app-settings/settings-option.constants.ts
var AVAILABLE_PERIOD_SHORT_OPTIONS = [
  { value: 1, label: "1 Day" },
  { value: 2, label: "2 Days" },
  { value: 3, label: "3 Days" },
  { value: 4, label: "4 Days" },
  { value: 5, label: "5 Days" },
  { value: 6, label: "6 Days" },
  { value: 7, label: "1 Week" },
  { value: 8, label: "8 Days" },
  { value: 9, label: "9 Days" },
  { value: 10, label: "10 Days" },
  { value: 11, label: "11 Days" },
  { value: 12, label: "12 Days" },
  { value: 13, label: "13 Days" },
  { value: 14, label: "2 Weeks" },
  { value: 21, label: "3 Weeks" },
  { value: 30, label: "1 Month" }
];
var AVAILABLE_PERIOD_EXTENDED_OPTIONS = [
  ...AVAILABLE_PERIOD_SHORT_OPTIONS,
  { value: 45, label: "6 Weeks" },
  { value: 60, label: "2 Months" },
  { value: 90, label: "3 Months" },
  { value: 120, label: "4 Months" },
  { value: 150, label: "5 Months" },
  { value: 180, label: "6 Months" }
];
var MAX_DURATION_FULL_OPTIONS = [
  { value: 60, label: "1 Hour" },
  { value: 90, label: "1 Hour 30 Minutes" },
  { value: 120, label: "2 Hours" },
  { value: 180, label: "3 Hours" },
  { value: 240, label: "4 Hours" },
  { value: 300, label: "5 Hours" },
  { value: 360, label: "6 Hours" },
  { value: 420, label: "7 Hours" },
  { value: 480, label: "8 Hours" },
  { value: 540, label: "9 Hours" },
  { value: 600, label: "10 Hours" },
  { value: 660, label: "11 Hours" },
  { value: 720, label: "12 Hours" },
  { value: 780, label: "13 Hours" },
  { value: 840, label: "14 Hours" },
  { value: 900, label: "15 Hours" },
  { value: 960, label: "16 Hours" },
  { value: 1020, label: "17 Hours" },
  { value: 1080, label: "18 Hours" },
  { value: 1140, label: "19 Hours" },
  { value: 1200, label: "20 Hours" }
];
var MAX_DURATION_SHORT_OPTIONS = MAX_DURATION_FULL_OPTIONS.filter((o) => o.value <= 720);
var MAX_DURATION_MINI_OPTIONS = MAX_DURATION_FULL_OPTIONS.filter((o) => o.value <= 480);
var WEEK_START_OPTIONS = [
  { value: 0, label: "Sunday" },
  { value: 1, label: "Monday" },
  { value: 2, label: "Tuesday" },
  { value: 3, label: "Wednesday" },
  { value: 4, label: "Thursday" },
  { value: 5, label: "Friday" },
  { value: 6, label: "Saturday" }
];
var BLOCK_START_OPTIONS = [
  { value: 0, label: "12AM (Midnight)" },
  { value: 1, label: "1AM" },
  { value: 2, label: "2AM" },
  { value: 3, label: "3AM" },
  { value: 4, label: "4AM" },
  { value: 5, label: "5AM" },
  { value: 6, label: "6AM" },
  { value: 7, label: "7AM" },
  { value: 8, label: "8AM" },
  { value: 9, label: "9AM" },
  { value: 10, label: "10AM" },
  { value: 11, label: "11AM" }
];
var BLOCK_END_OPTIONS = [
  { value: 12, label: "12PM (Midday)" },
  { value: 13, label: "1PM" },
  { value: 14, label: "2PM" },
  { value: 15, label: "3PM" },
  { value: 16, label: "4PM" },
  { value: 17, label: "5PM" },
  { value: 18, label: "6PM" },
  { value: 19, label: "7PM" },
  { value: 20, label: "8PM" },
  { value: 21, label: "9PM" },
  { value: 22, label: "10PM" },
  { value: 23, label: "11PM" },
  { value: 24, label: "12AM (Midnight)" }
];
var BOOKABLE_HOUR_START_OPTIONS = [
  { value: 0, label: "12AM (Midnight)" },
  { value: 1, label: "1AM" },
  { value: 2, label: "2AM" },
  { value: 3, label: "3AM" },
  { value: 4, label: "4AM" },
  { value: 5, label: "5AM" },
  { value: 6, label: "6AM" },
  { value: 7, label: "7AM" },
  { value: 8, label: "8AM" },
  { value: 9, label: "9AM" },
  { value: 10, label: "10AM" },
  { value: 11, label: "11AM" },
  { value: 12, label: "12PM (Midday)" },
  { value: 13, label: "1PM" },
  { value: 14, label: "2PM" },
  { value: 15, label: "3PM" },
  { value: 16, label: "4PM" },
  { value: 17, label: "5PM" },
  { value: 18, label: "6PM" },
  { value: 19, label: "7PM" },
  { value: 20, label: "8PM" },
  { value: 21, label: "9PM" },
  { value: 22, label: "10PM" },
  { value: 23, label: "11PM" }
];
var BOOKABLE_HOUR_END_OPTIONS = [
  { value: 1, label: "1AM" },
  { value: 2, label: "2AM" },
  { value: 3, label: "3AM" },
  { value: 4, label: "4AM" },
  { value: 5, label: "5AM" },
  { value: 6, label: "6AM" },
  { value: 7, label: "7AM" },
  { value: 8, label: "8AM" },
  { value: 9, label: "9AM" },
  { value: 10, label: "10AM" },
  { value: 11, label: "11AM" },
  { value: 12, label: "12PM (Midday)" },
  { value: 13, label: "1PM" },
  { value: 14, label: "2PM" },
  { value: 15, label: "3PM" },
  { value: 16, label: "4PM" },
  { value: 17, label: "5PM" },
  { value: 18, label: "6PM" },
  { value: 19, label: "7PM" },
  { value: 20, label: "8PM" },
  { value: 21, label: "9PM" },
  { value: 22, label: "10PM" },
  { value: 23, label: "11PM" },
  { value: 24, label: "12AM (Midnight)" }
];
var BLOCK_HEIGHT_OPTIONS = [
  { value: 1, label: "1rem (16px)" },
  { value: 1.5, label: "1.5rem (24px)" },
  { value: 2, label: "2rem (32px)" },
  { value: 2.5, label: "2.5rem (40px)" },
  { value: 3, label: "3rem (48px)" },
  { value: 3.5, label: "3.5rem (56px)" },
  { value: 4, label: "4rem (64px)" },
  { value: 4.5, label: "4.5rem (72px)" },
  { value: 5, label: "5rem (80px)" },
  { value: 5.5, label: "5.5rem (88px)" },
  { value: 6, label: "6rem (96px)" },
  { value: 6.5, label: "6.5rem (104px)" },
  { value: 7, label: "7rem (112px)" },
  { value: 7.5, label: "7.5rem (120px)" },
  { value: 8, label: "8rem (128px)" }
];
var SETUP_BREAKDOWN_OPTIONS = [
  { value: 5, label: "5 Minutes" },
  { value: 10, label: "10 Minutes" },
  { value: 15, label: "15 Minutes" },
  { value: 30, label: "30 Minutes" },
  { value: 45, label: "45 Minutes" },
  { value: 60, label: "1 Hour" },
  { value: 90, label: "1 Hour 30 Minutes" },
  { value: 120, label: "2 Hours" }
];
var CACHE_DURATION_OPTIONS = [
  { value: -1, label: "No cache" },
  ...AVAILABLE_PERIOD_SHORT_OPTIONS
];
var EXPLORE_FEATURE_OPTIONS = [
  { value: "devices", label: "Devices" },
  { value: "desks", label: "Desks" },
  { value: "lockers", label: "Lockers" },
  { value: "parking", label: "Parking" },
  { value: "spaces", label: "Rooms" },
  { value: "spaces-presence", label: "Room Presence" },
  { value: "zones", label: "Zones" }
];
var BANNER_TYPE_OPTIONS = [
  { value: "", label: "None" },
  { value: "info", label: "Info" },
  { value: "warn", label: "Warning" },
  { value: "error", label: "Error" }
];
var DAY_TIMELINE_VIEW_OPTIONS = [
  { value: "default", label: "Timeline" },
  { value: "inverted", label: "Timeline (Rooms Vertical)" }
];

// apps/concierge/src/app/ui/app-settings/concierge-settings-form-modal.component.ts
var _c02 = () => ({ standalone: true });
var _forTrack03 = ($index, $item) => $item.value;
var _forTrack12 = ($index, $item) => $item.code;
function ConciergeSettingsFormModalComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 76);
    \u0275\u0275text(1, " Room Report ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-option", 77);
    \u0275\u0275text(3, " Desk Report ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-option", 78);
    \u0275\u0275text(5, " Catering Report ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-option", 79);
    \u0275\u0275text(7, " Parking Report ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-option", 80);
    \u0275\u0275text(9, " Contact Tracing Report ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-option", 81);
    \u0275\u0275text(11, " Assets Report ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-option", 82);
    \u0275\u0275text(13, " Visitors Report ");
    \u0275\u0275elementEnd();
  }
}
function ConciergeSettingsFormModalComponent_For_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r1 = ctx.$implicit;
    \u0275\u0275property("value", opt_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r1.label);
  }
}
function ConciergeSettingsFormModalComponent_Conditional_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 83);
    \u0275\u0275text(2, " Group Events Calendar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 10);
    \u0275\u0275element(4, "input", 84);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(5, "mat-hint");
    \u0275\u0275text(6, " Calendar to add all group events to ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("formField", ctx_r1.form.group_events_calendar);
    \u0275\u0275control();
  }
}
function ConciergeSettingsFormModalComponent_For_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    \u0275\u0275property("value", opt_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r3.label);
  }
}
function ConciergeSettingsFormModalComponent_For_138_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    \u0275\u0275property("value", option_r4.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r4.display_name, " ");
  }
}
function ConciergeSettingsFormModalComponent_Conditional_139_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 62);
    \u0275\u0275text(1, " No currencies match your search ");
    \u0275\u0275elementEnd();
  }
}
function ConciergeSettingsFormModalComponent_Conditional_148_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 69)(1, "h3", 34);
    \u0275\u0275text(2, " Reports ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "settings-toggle", 85);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.reports.attendance_include_weekends);
    \u0275\u0275control();
  }
}
function ConciergeSettingsFormModalComponent_Conditional_149_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    \u0275\u0275property("value", opt_r6.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r6.label);
  }
}
function ConciergeSettingsFormModalComponent_Conditional_149_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r7 = ctx.$implicit;
    \u0275\u0275property("value", opt_r7.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r7.label);
  }
}
function ConciergeSettingsFormModalComponent_Conditional_149_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r8 = ctx.$implicit;
    \u0275\u0275property("value", opt_r8.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r8.label);
  }
}
function ConciergeSettingsFormModalComponent_Conditional_149_For_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r9 = ctx.$implicit;
    \u0275\u0275property("value", opt_r9.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r9.label);
  }
}
function ConciergeSettingsFormModalComponent_Conditional_149_For_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r10 = ctx.$implicit;
    \u0275\u0275property("value", opt_r10.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r10.label);
  }
}
function ConciergeSettingsFormModalComponent_Conditional_149_For_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r11 = ctx.$implicit;
    \u0275\u0275property("value", opt_r11.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r11.label);
  }
}
function ConciergeSettingsFormModalComponent_Conditional_149_For_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r12 = ctx.$implicit;
    \u0275\u0275property("value", opt_r12.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r12.label);
  }
}
function ConciergeSettingsFormModalComponent_Conditional_149_For_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r13 = ctx.$implicit;
    \u0275\u0275property("value", opt_r13.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r13.label);
  }
}
function ConciergeSettingsFormModalComponent_Conditional_149_For_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r14 = ctx.$implicit;
    \u0275\u0275property("value", opt_r14.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r14.label);
  }
}
function ConciergeSettingsFormModalComponent_Conditional_149_For_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r15 = ctx.$implicit;
    \u0275\u0275property("value", opt_r15.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r15.label);
  }
}
function ConciergeSettingsFormModalComponent_Conditional_149_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 70)(1, "h3", 34);
    \u0275\u0275text(2, " Room Bookings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 86);
    \u0275\u0275listener("click", function ConciergeSettingsFormModalComponent_Conditional_149_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleGroup("spaces"));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 87)(7, "div", 88)(8, "div", 36)(9, "label", 89);
    \u0275\u0275text(10, " Day Timeline Default View ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 10)(12, "mat-select", 90);
    \u0275\u0275repeaterCreate(13, ConciergeSettingsFormModalComponent_Conditional_149_For_14_Template, 2, 2, "mat-option", 39, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(15, "mat-hint");
    \u0275\u0275text(16, " Default day timeline layout for room bookings ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 35)(18, "div", 36)(19, "label", 91);
    \u0275\u0275text(20, "Block Start Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-form-field", 10)(22, "mat-select", 92);
    \u0275\u0275repeaterCreate(23, ConciergeSettingsFormModalComponent_Conditional_149_For_24_Template, 2, 2, "mat-option", 39, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(25, "mat-hint");
    \u0275\u0275text(26, " Start time of dayview blocks ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 36)(28, "label", 93);
    \u0275\u0275text(29, "Block End Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "mat-form-field", 10)(31, "mat-select", 92);
    \u0275\u0275repeaterCreate(32, ConciergeSettingsFormModalComponent_Conditional_149_For_33_Template, 2, 2, "mat-option", 39, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(34, "mat-hint");
    \u0275\u0275text(35, " End time of dayview blocks ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "div", 35)(37, "div", 36)(38, "label", 94);
    \u0275\u0275text(39, " Block Height ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "mat-form-field", 10)(41, "mat-select", 90);
    \u0275\u0275repeaterCreate(42, ConciergeSettingsFormModalComponent_Conditional_149_For_43_Template, 2, 2, "mat-option", 39, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(44, "mat-hint");
    \u0275\u0275text(45, " Height of 1 hour in dayview ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 36)(47, "label", 95);
    \u0275\u0275text(48, " Max Duration ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "mat-form-field", 10)(50, "mat-select", 90);
    \u0275\u0275repeaterCreate(51, ConciergeSettingsFormModalComponent_Conditional_149_For_52_Template, 2, 2, "mat-option", 39, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(53, "mat-hint");
    \u0275\u0275text(54, " Max duration for single day bookings ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(55, "div")(56, "label", 96);
    \u0275\u0275text(57, " Available Period ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "mat-form-field", 10)(59, "mat-select", 90);
    \u0275\u0275repeaterCreate(60, ConciergeSettingsFormModalComponent_Conditional_149_For_61_Template, 2, 2, "mat-option", 39, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(62, "mat-hint");
    \u0275\u0275text(63, " Number of days ahead users can create bookings from the room booking manager ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "div", 97)(65, "div")(66, "label", 98);
    \u0275\u0275text(67, " Bookable Start ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "mat-form-field", 10)(69, "mat-select", 90);
    \u0275\u0275repeaterCreate(70, ConciergeSettingsFormModalComponent_Conditional_149_For_71_Template, 2, 2, "mat-option", 39, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div")(73, "label", 99);
    \u0275\u0275text(74, " Bookable End ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "mat-form-field", 10)(76, "mat-select", 90);
    \u0275\u0275repeaterCreate(77, ConciergeSettingsFormModalComponent_Conditional_149_For_78_Template, 2, 2, "mat-option", 39, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(79, "div", 63);
    \u0275\u0275element(80, "settings-toggle", 100);
    \u0275\u0275controlCreate();
    \u0275\u0275element(81, "settings-toggle", 101);
    \u0275\u0275controlCreate();
    \u0275\u0275element(82, "settings-toggle", 102);
    \u0275\u0275controlCreate();
    \u0275\u0275element(83, "settings-toggle", 103);
    \u0275\u0275controlCreate();
    \u0275\u0275element(84, "settings-toggle", 104);
    \u0275\u0275controlCreate();
    \u0275\u0275element(85, "settings-toggle", 105);
    \u0275\u0275controlCreate();
    \u0275\u0275element(86, "settings-toggle", 106);
    \u0275\u0275controlCreate();
    \u0275\u0275element(87, "settings-toggle", 107);
    \u0275\u0275controlCreate();
    \u0275\u0275element(88, "settings-toggle", 108);
    \u0275\u0275controlCreate();
    \u0275\u0275element(89, "settings-toggle", 109);
    \u0275\u0275controlCreate();
    \u0275\u0275element(90, "settings-toggle", 110);
    \u0275\u0275controlCreate();
    \u0275\u0275element(91, "settings-toggle", 111);
    \u0275\u0275controlCreate();
    \u0275\u0275element(92, "settings-toggle", 112);
    \u0275\u0275controlCreate();
    \u0275\u0275element(93, "settings-toggle", 113);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "div", 97)(95, "div")(96, "label", 114);
    \u0275\u0275text(97, " All Day Start ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "mat-form-field", 10)(99, "mat-select", 115);
    \u0275\u0275repeaterCreate(100, ConciergeSettingsFormModalComponent_Conditional_149_For_101_Template, 2, 2, "mat-option", 39, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "div")(103, "label", 116);
    \u0275\u0275text(104, " All Day End ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "mat-form-field", 10)(106, "mat-select", 115);
    \u0275\u0275repeaterCreate(107, ConciergeSettingsFormModalComponent_Conditional_149_For_108_Template, 2, 2, "mat-option", 39, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.shown_group() === "spaces" ? "chevron_left" : "keyboard_arrow_down");
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx_r1.shown_group() === "spaces");
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r1.form.events.day_timeline_view);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.DAY_TIMELINE_VIEW);
    \u0275\u0275advance(9);
    \u0275\u0275property("formField", ctx_r1.form.events.block_start);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.BLOCK_START);
    \u0275\u0275advance(8);
    \u0275\u0275property("formField", ctx_r1.form.events.block_end);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.BLOCK_END);
    \u0275\u0275advance(9);
    \u0275\u0275property("formField", ctx_r1.form.events.block_height);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.BLOCK_HEIGHT);
    \u0275\u0275advance(8);
    \u0275\u0275property("formField", ctx_r1.form.events.max_duration);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.MAX_DURATION_FULL);
    \u0275\u0275advance(8);
    \u0275\u0275property("formField", ctx_r1.form.events.available_period);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.AVAILABLE_PERIOD_SHORT);
    \u0275\u0275advance(9);
    \u0275\u0275property("formField", ctx_r1.form.events.bookable_hours.start);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.BOOKABLE_HOUR_START);
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r1.form.events.bookable_hours.end);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.BOOKABLE_HOUR_END);
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.events.allow_all_day);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.events.all_day_default);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.events.allow_setup_breakdown);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.events.can_book_for_others);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.events.can_book_for_anyone);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.events.has_assets);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.events.hide_notes);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.events.hide_attendees);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.events.allow_externals);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.events.strict_capacity_check);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.events.allow_multiday);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.events.use_building_timezone);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.events.allow_visibility);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.events.allow_edit);
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r1.form.events.all_day_period.start);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.BLOCK_START);
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r1.form.events.all_day_period.end);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.BLOCK_END);
  }
}
function ConciergeSettingsFormModalComponent_Conditional_150_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 71)(1, "h3", 34);
    \u0275\u0275text(2, " Desk Assignments ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 86);
    \u0275\u0275listener("click", function ConciergeSettingsFormModalComponent_Conditional_150_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleGroup("desks"));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 87)(7, "div", 88)(8, "div")(9, "label", 117);
    \u0275\u0275text(10, " Max Assigned Desks Per User ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 10);
    \u0275\u0275element(12, "input", 118);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(13, "mat-hint");
    \u0275\u0275text(14, " Maximum number of desk assignments a user can have at one time. Set to 0 for unlimited. ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.shown_group() === "desks" ? "chevron_left" : "keyboard_arrow_down");
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx_r1.shown_group() === "desks");
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r1.form.desks.max_assigned_count);
    \u0275\u0275control();
  }
}
function ConciergeSettingsFormModalComponent_Conditional_151_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r18 = ctx.$implicit;
    \u0275\u0275property("value", opt_r18.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r18.label);
  }
}
function ConciergeSettingsFormModalComponent_Conditional_151_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r19 = ctx.$implicit;
    \u0275\u0275property("value", opt_r19.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r19.label);
  }
}
function ConciergeSettingsFormModalComponent_Conditional_151_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 72)(1, "h3", 34);
    \u0275\u0275text(2, " Visitors ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 86);
    \u0275\u0275listener("click", function ConciergeSettingsFormModalComponent_Conditional_151_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleGroup("visitors"));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 87)(7, "div", 88)(8, "div", 97)(9, "div")(10, "label", 119);
    \u0275\u0275text(11, " Bookable Start ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-form-field", 10)(13, "mat-select", 115);
    \u0275\u0275repeaterCreate(14, ConciergeSettingsFormModalComponent_Conditional_151_For_15_Template, 2, 2, "mat-option", 39, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "label", 120);
    \u0275\u0275text(18, " Bookable End ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-form-field", 10)(20, "mat-select", 115);
    \u0275\u0275repeaterCreate(21, ConciergeSettingsFormModalComponent_Conditional_151_For_22_Template, 2, 2, "mat-option", 39, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "label", 121);
    \u0275\u0275text(24, "Hide Guest List fields");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "mat-form-field", 10)(26, "mat-select", 122)(27, "mat-option", 123);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "mat-option", 124);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "mat-option", 125);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "mat-option", 126);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "mat-option", 127);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "mat-option", 128);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(45, "mat-hint");
    \u0275\u0275text(46, " Hide selected columns on the visitor listing table ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "label", 129);
    \u0275\u0275text(48, " Check-in/out all visitors action window ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "mat-form-field", 10);
    \u0275\u0275element(50, "input", 118);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(51, "mat-hint");
    \u0275\u0275text(52, " Minutes before and after the booking time to show all visitor check-in/out actions ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 63);
    \u0275\u0275element(54, "settings-toggle", 130);
    \u0275\u0275controlCreate();
    \u0275\u0275element(55, "settings-toggle", 131);
    \u0275\u0275controlCreate();
    \u0275\u0275element(56, "settings-toggle", 132);
    \u0275\u0275controlCreate();
    \u0275\u0275element(57, "settings-toggle", 133);
    \u0275\u0275controlCreate();
    \u0275\u0275element(58, "settings-toggle", 134);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.shown_group() === "visitors" ? "chevron_left" : "keyboard_arrow_down");
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx_r1.shown_group() === "visitors");
    \u0275\u0275advance(7);
    \u0275\u0275property("formField", ctx_r1.form.visitors.bookable_hours.start);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.BOOKABLE_HOUR_START);
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r1.form.visitors.bookable_hours.end);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.BOOKABLE_HOUR_END);
    \u0275\u0275advance(5);
    \u0275\u0275property("formField", ctx_r1.form.visitors.hide_fields);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 18, "COMMON.CHECKED_IN_AT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 20, "COMMON.CHECKED_OUT_AT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 22, "COMMON.CHECKED_IN"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 24, "FORM.TIME"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 26, "FORM.HOST"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 28, "COMMON.STATE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275property("formField", ctx_r1.form.visitors.all_visitors_action_window);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("formField", ctx_r1.form.visitors.has_parking);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.visitors.allow_pass_number);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.visitors.allow_printing_label);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.visitors.allow_international);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.visitors.show_calendar_links);
    \u0275\u0275control();
  }
}
function ConciergeSettingsFormModalComponent_Conditional_152_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r21 = ctx.$implicit;
    \u0275\u0275property("value", opt_r21.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r21.label);
  }
}
function ConciergeSettingsFormModalComponent_Conditional_152_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r22 = ctx.$implicit;
    \u0275\u0275property("value", opt_r22.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r22.label);
  }
}
function ConciergeSettingsFormModalComponent_Conditional_152_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r23 = ctx.$implicit;
    \u0275\u0275property("value", opt_r23.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r23.label);
  }
}
function ConciergeSettingsFormModalComponent_Conditional_152_For_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r24 = ctx.$implicit;
    \u0275\u0275property("value", opt_r24.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r24.label);
  }
}
function ConciergeSettingsFormModalComponent_Conditional_152_For_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r25 = ctx.$implicit;
    \u0275\u0275property("value", opt_r25.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r25.label);
  }
}
function ConciergeSettingsFormModalComponent_Conditional_152_For_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r26 = ctx.$implicit;
    \u0275\u0275property("value", opt_r26.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r26.label);
  }
}
function ConciergeSettingsFormModalComponent_Conditional_152_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 73)(1, "h3", 34);
    \u0275\u0275text(2, " PlaceOS Bookings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 86);
    \u0275\u0275listener("click", function ConciergeSettingsFormModalComponent_Conditional_152_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleGroup("bookings"));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 87)(7, "div", 88)(8, "div")(9, "label", 96);
    \u0275\u0275text(10, " Available Period ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 10)(12, "mat-select", 90);
    \u0275\u0275repeaterCreate(13, ConciergeSettingsFormModalComponent_Conditional_152_For_14_Template, 2, 2, "mat-option", 39, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(15, "mat-hint");
    \u0275\u0275text(16, " Number of days ahead the user is able to book ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div")(18, "label", 95);
    \u0275\u0275text(19, " Max Duration ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-form-field", 10)(21, "mat-select", 90);
    \u0275\u0275repeaterCreate(22, ConciergeSettingsFormModalComponent_Conditional_152_For_23_Template, 2, 2, "mat-option", 39, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(24, "mat-hint");
    \u0275\u0275text(25, " Max duration for single day bookings ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 97)(27, "div")(28, "label", 135);
    \u0275\u0275text(29, " Bookable Start ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "mat-form-field", 10)(31, "mat-select", 90);
    \u0275\u0275repeaterCreate(32, ConciergeSettingsFormModalComponent_Conditional_152_For_33_Template, 2, 2, "mat-option", 39, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div")(35, "label", 136);
    \u0275\u0275text(36, " Bookable End ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-form-field", 10)(38, "mat-select", 90);
    \u0275\u0275repeaterCreate(39, ConciergeSettingsFormModalComponent_Conditional_152_For_40_Template, 2, 2, "mat-option", 39, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 63);
    \u0275\u0275element(42, "settings-toggle", 100);
    \u0275\u0275controlCreate();
    \u0275\u0275element(43, "settings-toggle", 111);
    \u0275\u0275controlCreate();
    \u0275\u0275element(44, "settings-toggle", 105);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 97)(46, "div")(47, "label", 137);
    \u0275\u0275text(48, " All Day Start ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "mat-form-field", 10)(50, "mat-select", 90);
    \u0275\u0275repeaterCreate(51, ConciergeSettingsFormModalComponent_Conditional_152_For_52_Template, 2, 2, "mat-option", 39, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div")(54, "label", 138);
    \u0275\u0275text(55, " All Day End ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "mat-form-field", 10)(57, "mat-select", 90);
    \u0275\u0275repeaterCreate(58, ConciergeSettingsFormModalComponent_Conditional_152_For_59_Template, 2, 2, "mat-option", 39, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.shown_group() === "bookings" ? "chevron_left" : "keyboard_arrow_down");
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx_r1.shown_group() === "bookings");
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r1.form.bookings.available_period);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.AVAILABLE_PERIOD_EXTENDED);
    \u0275\u0275advance(8);
    \u0275\u0275property("formField", ctx_r1.form.bookings.max_duration);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.MAX_DURATION_FULL);
    \u0275\u0275advance(9);
    \u0275\u0275property("formField", ctx_r1.form.bookings.bookable_hours.start);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.BOOKABLE_HOUR_START);
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r1.form.bookings.bookable_hours.end);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.BOOKABLE_HOUR_END);
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.bookings.allow_all_day);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.bookings.use_building_timezone);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.bookings.has_assets);
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r1.form.bookings.all_day_period.start);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.BLOCK_START);
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r1.form.bookings.all_day_period.end);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.BLOCK_END);
  }
}
function ConciergeSettingsFormModalComponent_Conditional_153_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r28 = ctx.$implicit;
    \u0275\u0275property("value", opt_r28.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r28.label);
  }
}
function ConciergeSettingsFormModalComponent_Conditional_153_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r29 = ctx.$implicit;
    \u0275\u0275property("value", opt_r29.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r29.label);
  }
}
function ConciergeSettingsFormModalComponent_Conditional_153_For_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r30 = ctx.$implicit;
    \u0275\u0275property("value", opt_r30.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r30.label);
  }
}
function ConciergeSettingsFormModalComponent_Conditional_153_For_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r31 = ctx.$implicit;
    \u0275\u0275property("value", opt_r31.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r31.label);
  }
}
function ConciergeSettingsFormModalComponent_Conditional_153_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 74)(1, "h3", 34);
    \u0275\u0275text(2, " Parking ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 86);
    \u0275\u0275listener("click", function ConciergeSettingsFormModalComponent_Conditional_153_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleGroup("parking"));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 87)(7, "div", 88)(8, "div")(9, "label", 96);
    \u0275\u0275text(10, " Available Period ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 10)(12, "mat-select", 90);
    \u0275\u0275repeaterCreate(13, ConciergeSettingsFormModalComponent_Conditional_153_For_14_Template, 2, 2, "mat-option", 39, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(15, "mat-hint");
    \u0275\u0275text(16, " Number of days ahead the user is able to book ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div")(18, "label", 95);
    \u0275\u0275text(19, " Max Duration ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-form-field", 10)(21, "mat-select", 90);
    \u0275\u0275repeaterCreate(22, ConciergeSettingsFormModalComponent_Conditional_153_For_23_Template, 2, 2, "mat-option", 39, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(24, "mat-hint");
    \u0275\u0275text(25, " Max duration for single day bookings ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div")(27, "label", 139);
    \u0275\u0275text(28, " Max Assigned Parking Spaces Per User ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-form-field", 10);
    \u0275\u0275element(30, "input", 118);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(31, "mat-hint");
    \u0275\u0275text(32, " Maximum number of parking space assignments a user can have at one time. Set to 0 for unlimited. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 97)(34, "div")(35, "label", 140);
    \u0275\u0275text(36, " Bookable Start ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-form-field", 10)(38, "mat-select", 90);
    \u0275\u0275repeaterCreate(39, ConciergeSettingsFormModalComponent_Conditional_153_For_40_Template, 2, 2, "mat-option", 39, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div")(42, "label", 141);
    \u0275\u0275text(43, " Bookable End ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "mat-form-field", 10)(45, "mat-select", 90);
    \u0275\u0275repeaterCreate(46, ConciergeSettingsFormModalComponent_Conditional_153_For_47_Template, 2, 2, "mat-option", 39, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 63);
    \u0275\u0275element(49, "settings-toggle", 100);
    \u0275\u0275controlCreate();
    \u0275\u0275element(50, "settings-toggle", 142);
    \u0275\u0275controlCreate();
    \u0275\u0275element(51, "settings-toggle", 143);
    \u0275\u0275controlCreate();
    \u0275\u0275element(52, "settings-toggle", 144);
    \u0275\u0275controlCreate();
    \u0275\u0275element(53, "settings-toggle", 145);
    \u0275\u0275controlCreate();
    \u0275\u0275element(54, "settings-toggle", 146);
    \u0275\u0275controlCreate();
    \u0275\u0275element(55, "settings-toggle", 147);
    \u0275\u0275controlCreate();
    \u0275\u0275element(56, "settings-toggle", 148);
    \u0275\u0275controlCreate();
    \u0275\u0275element(57, "settings-toggle", 149);
    \u0275\u0275controlCreate();
    \u0275\u0275element(58, "settings-toggle", 150);
    \u0275\u0275controlCreate();
    \u0275\u0275element(59, "settings-toggle", 151);
    \u0275\u0275controlCreate();
    \u0275\u0275element(60, "settings-toggle", 152);
    \u0275\u0275controlCreate();
    \u0275\u0275element(61, "settings-toggle", 153);
    \u0275\u0275controlCreate();
    \u0275\u0275element(62, "settings-toggle", 154);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275element(64, "settings-toggle", 155);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.shown_group() === "parking" ? "chevron_left" : "keyboard_arrow_down");
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx_r1.shown_group() === "parking");
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r1.form.parking.available_period);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.AVAILABLE_PERIOD_EXTENDED);
    \u0275\u0275advance(8);
    \u0275\u0275property("formField", ctx_r1.form.parking.max_duration);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.MAX_DURATION_FULL);
    \u0275\u0275advance(8);
    \u0275\u0275property("formField", ctx_r1.form.parking.max_assigned_count);
    \u0275\u0275control();
    \u0275\u0275advance(8);
    \u0275\u0275property("formField", ctx_r1.form.parking.bookable_hours.start);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.BOOKABLE_HOUR_START);
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r1.form.parking.bookable_hours.end);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.BOOKABLE_HOUR_END);
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.parking.allow_all_day);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.parking.show_users);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.parking.show_status_details);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.parking.disable_styles);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.parking.disable_bookings);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.parking.show_requests);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.parking.show_waitlist);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.parking.hide_bay_number);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.parking.hide_level_selector_on_booking_list);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.parking.hide_users);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.parking.hide_vehicles);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.parking.hide_users_and_vehicles);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.parking.hide_assign_space);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(63, 24, "APP.CONCIERGE.PARKING_ALLOW_DELETING"))("formField", ctx_r1.form.parking.allow_deleting);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r1.form.parking.assign_space_on_approve);
    \u0275\u0275control();
  }
}
function ConciergeSettingsFormModalComponent_Conditional_154_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r33 = ctx.$implicit;
    \u0275\u0275property("value", opt_r33.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r33.label);
  }
}
function ConciergeSettingsFormModalComponent_Conditional_154_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r34 = ctx.$implicit;
    \u0275\u0275property("value", opt_r34.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r34.label);
  }
}
function ConciergeSettingsFormModalComponent_Conditional_154_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r35 = ctx.$implicit;
    \u0275\u0275property("value", opt_r35.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r35.label);
  }
}
function ConciergeSettingsFormModalComponent_Conditional_154_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r36 = ctx.$implicit;
    \u0275\u0275property("value", opt_r36.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r36.label);
  }
}
function ConciergeSettingsFormModalComponent_Conditional_154_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 75)(1, "h3", 34);
    \u0275\u0275text(2, " Locker Bookings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 86);
    \u0275\u0275listener("click", function ConciergeSettingsFormModalComponent_Conditional_154_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleGroup("lockers"));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 87)(7, "div", 88)(8, "div")(9, "label", 96);
    \u0275\u0275text(10, " Available Period ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 10)(12, "mat-select", 90);
    \u0275\u0275repeaterCreate(13, ConciergeSettingsFormModalComponent_Conditional_154_For_14_Template, 2, 2, "mat-option", 39, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(15, "mat-hint");
    \u0275\u0275text(16, " Number of days ahead the user is able to book ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div")(18, "label", 95);
    \u0275\u0275text(19, " Max Duration ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-form-field", 10)(21, "mat-select", 90);
    \u0275\u0275repeaterCreate(22, ConciergeSettingsFormModalComponent_Conditional_154_For_23_Template, 2, 2, "mat-option", 39, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 97)(25, "div")(26, "label", 156);
    \u0275\u0275text(27, " Bookable Start ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-form-field", 10)(29, "mat-select", 90);
    \u0275\u0275repeaterCreate(30, ConciergeSettingsFormModalComponent_Conditional_154_For_31_Template, 2, 2, "mat-option", 39, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div")(33, "label", 157);
    \u0275\u0275text(34, " Bookable End ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "mat-form-field", 10)(36, "mat-select", 90);
    \u0275\u0275repeaterCreate(37, ConciergeSettingsFormModalComponent_Conditional_154_For_38_Template, 2, 2, "mat-option", 39, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 63);
    \u0275\u0275element(40, "settings-toggle", 100);
    \u0275\u0275controlCreate();
    \u0275\u0275element(41, "settings-toggle", 158);
    \u0275\u0275controlCreate();
    \u0275\u0275element(42, "settings-toggle", 159);
    \u0275\u0275controlCreate();
    \u0275\u0275element(43, "settings-toggle", 160);
    \u0275\u0275controlCreate();
    \u0275\u0275element(44, "settings-toggle", 161);
    \u0275\u0275controlCreate();
    \u0275\u0275element(45, "settings-toggle", 162);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.shown_group() === "lockers" ? "chevron_left" : "keyboard_arrow_down");
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx_r1.shown_group() === "lockers");
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r1.form.lockers.available_period);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.AVAILABLE_PERIOD_SHORT);
    \u0275\u0275advance(8);
    \u0275\u0275property("formField", ctx_r1.form.lockers.max_duration);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.MAX_DURATION_FULL);
    \u0275\u0275advance(7);
    \u0275\u0275property("formField", ctx_r1.form.lockers.bookable_hours.start);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.BOOKABLE_HOUR_START);
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r1.form.lockers.bookable_hours.end);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.BOOKABLE_HOUR_END);
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.lockers.allow_all_day);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.lockers.all_day_default);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.lockers.show_calendar_links);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.lockers.hide_end_time);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.lockers.disabled_date_select);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.lockers.disabled_start_time);
    \u0275\u0275control();
  }
}
var ConciergeSettingsFormModalComponent = class _ConciergeSettingsFormModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this.existing_settings = {};
    this.old_settings = {};
    this.zone = this._data.zone;
    this.AVAILABLE_PERIOD_SHORT = AVAILABLE_PERIOD_SHORT_OPTIONS;
    this.AVAILABLE_PERIOD_EXTENDED = AVAILABLE_PERIOD_EXTENDED_OPTIONS;
    this.MAX_DURATION_FULL = MAX_DURATION_FULL_OPTIONS;
    this.WEEK_START = WEEK_START_OPTIONS;
    this.BLOCK_START = BLOCK_START_OPTIONS;
    this.BLOCK_END = BLOCK_END_OPTIONS;
    this.BOOKABLE_HOUR_START = BOOKABLE_HOUR_START_OPTIONS;
    this.BOOKABLE_HOUR_END = BOOKABLE_HOUR_END_OPTIONS;
    this.BLOCK_HEIGHT = BLOCK_HEIGHT_OPTIONS;
    this.DAY_TIMELINE_VIEW = DAY_TIMELINE_VIEW_OPTIONS;
    this.BANNER_TYPE = BANNER_TYPE_OPTIONS;
    this.heading = signal(
      "",
      ...ngDevMode ? [{ debugName: "heading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.shown_group = signal(
      "",
      ...ngDevMode ? [{ debugName: "shown_group" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.currency_filter = signal(
      "",
      ...ngDevMode ? [{ debugName: "currency_filter" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.currency_options = buildCurrencyOptions();
    this.filtered_currency_options = computed(
      () => {
        const filter_text = this.currency_filter().trim().toLowerCase();
        if (!filter_text)
          return this.currency_options;
        return this.currency_options.filter((option) => option.search_text.includes(filter_text));
      },
      ...ngDevMode ? [{ debugName: "filtered_currency_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.settings_key = this._settings.get("app.concierge_metadata_key") || "concierge_app";
    this.model = signal(
      {
        logo_light: "",
        logo_dark: "",
        features: [],
        banner: {},
        default_route: "",
        use_24_hour_time: false,
        delegated: false,
        force_upload_state: false,
        private_uploads: false,
        week_start: 0,
        currency: "USD",
        use_region: false,
        group_events_calendar: "",
        kiosk_url_path: "",
        short_url_public_key: "",
        control_path: "",
        signage_path: "",
        workplace_url_path: "",
        public_url_path: "",
        admin_group: "",
        events: {
          allow_all_day: false,
          all_day_period: {
            start: null,
            end: null
          },
          bookable_hours: {
            start: null,
            end: null
          },
          all_day_default: false,
          allow_setup_breakdown: false,
          has_assets: false,
          hide_notes: false,
          hide_attendees: false,
          allow_externals: false,
          strict_capacity_check: false,
          allow_multiday: false,
          use_building_timezone: false,
          day_timeline_view: "default",
          block_start: 0,
          block_end: 24,
          block_height: 3,
          max_duration: 360,
          available_period: 14,
          can_book_for_others: false,
          can_book_for_anyone: false,
          allow_visibility: false,
          allow_edit: true
        },
        desks: {
          max_assigned_count: 0
        },
        visitors: {
          bookable_hours: {
            start: null,
            end: null
          },
          has_parking: false,
          allow_pass_number: false,
          allow_printing_label: false,
          allow_international: false,
          show_calendar_links: false,
          all_visitors_action_window: 15,
          hide_fields: []
        },
        bookings: {
          allow_all_day: true,
          all_day_period: {
            start: null,
            end: null
          },
          bookable_hours: {
            start: null,
            end: null
          },
          has_assets: false,
          use_building_timezone: false,
          available_period: 14,
          max_duration: 480
        },
        reports: {
          attendance_include_weekends: false
        },
        parking: {
          allow_all_day: true,
          bookable_hours: {
            start: null,
            end: null
          },
          show_users: false,
          show_status_details: true,
          disable_styles: false,
          disable_bookings: false,
          show_requests: false,
          show_waitlist: true,
          hide_bay_number: false,
          hide_level_selector_on_booking_list: false,
          hide_users: false,
          hide_vehicles: false,
          hide_users_and_vehicles: false,
          hide_assign_space: false,
          allow_deleting: false,
          assign_space_on_approve: false,
          available_period: 7,
          max_duration: 480,
          max_assigned_count: 0
        },
        lockers: {
          allow_all_day: true,
          bookable_hours: {
            start: null,
            end: null
          },
          all_day_default: false,
          show_calendar_links: false,
          available_period: 14,
          max_duration: 480,
          hide_end_time: false,
          disabled_start_time: false,
          disabled_date_select: false
        }
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (p) => {
      min(p.desks.max_assigned_count, 0);
      min(p.visitors.all_visitors_action_window, 0);
      min(p.parking.max_assigned_count, 0);
    });
  }
  get date_string() {
    return format(Date.now(), "yyyy-MM-dd+HH");
  }
  async ngOnInit() {
    const zone = this._data.zone;
    this.loading.set("Loading existing settings...");
    this.heading.set(`Concierge Settings <div class="font-mono text-xs px-2 py-1 rounded bg-base-300 ml-2">${this.zone.display_name || this.zone.name || "Organisation"}</div>`);
    this._patchModel(DEFAULT_SETTINGS.app);
    const org_id = this._org.organisation.id;
    const org_metadata = await this._getMetadata(org_id);
    const parent_metadata = org_id !== zone.parent_id ? await this._getMetadata(zone.parent_id) : {};
    const metadata = await this._getMetadata(zone.id);
    this.existing_settings = __spreadValues(__spreadValues(__spreadValues({}, DEFAULT_SETTINGS.app), org_metadata), parent_metadata);
    this._patchModel(org_metadata || {});
    this._patchModel(parent_metadata || {});
    this._patchModel(metadata || {});
    this.old_settings = metadata;
    this.loading.set("");
  }
  toggleGroup(group) {
    this.shown_group.update((shown) => group === shown ? "" : group);
  }
  updateCurrencyFilter(value) {
    this.currency_filter.set((value || "").trim());
  }
  onCurrencySelectStateChange(is_open) {
    if (!is_open) {
      this.currency_filter.set("");
    }
  }
  async save() {
    this.loading.set("Saving settings...");
    const zone = this._data.zone;
    const form_value = this.model();
    const new_settings = __spreadValues({}, this.old_settings);
    for (const key in form_value) {
      if (form_value[key] instanceof Array) {
        new_settings[key] = form_value[key];
      } else if (form_value[key] instanceof Object) {
        new_settings[key] = __spreadValues(__spreadValues({}, this.existing_settings[key] || {}), form_value[key]);
      } else {
        new_settings[key] = form_value[key];
      }
    }
    for (const key in new_settings) {
      if (!this._isValid(new_settings[key], this.existing_settings[key])) {
        delete new_settings[key];
      } else if (new_settings[key] instanceof Object && !(new_settings[key] instanceof Array) && this.existing_settings[key]) {
        for (const sub_key in new_settings[key]) {
          if (!this._isValid(new_settings[key][sub_key], this.existing_settings[key][sub_key])) {
            delete new_settings[key][sub_key];
          }
        }
      }
    }
    const user = currentUser();
    new_settings.edited_by = {
      id: user.id,
      name: user.name,
      email: user.email,
      domain: location.hostname,
      role: user.groups.includes("placeos_admin") ? "Admin" : user.groups.includes("placeos_support") ? "Support" : "User"
    };
    try {
      await Qu(zone.id, {
        name: `${this.settings_key}`,
        details: new_settings,
        description: `[${VERSION.hash}|C] Concierge Application Settings`
      });
    } catch (e) {
      console.error(e);
      this.loading.set("");
      notifyError(`Failed to save settings: ${e.message || e.error || e}`);
      throw e;
    }
    this.loading.set("");
    notifySuccess("Successfully saved concierge app settings");
    this._dialog_ref.close();
  }
  _patchModel(patch) {
    this.model.update((m) => this._mergeInto(m, patch));
  }
  _mergeInto(target, patch) {
    if (!patch || typeof patch !== "object")
      return target;
    const result = __spreadValues({}, target);
    for (const key in patch) {
      if (!(key in result))
        continue;
      const patch_value = patch[key];
      const current_value = result[key];
      if (patch_value && typeof patch_value === "object" && !Array.isArray(patch_value) && current_value && typeof current_value === "object" && !Array.isArray(current_value)) {
        result[key] = this._mergeInto(current_value, patch_value);
      } else if (patch_value !== void 0) {
        result[key] = patch_value;
      }
    }
    return result;
  }
  _isValid(new_value, existing_value) {
    return new_value !== "" && new_value !== void 0 && new_value !== null && JSON.stringify(new_value) !== JSON.stringify(existing_value);
  }
  async _getMetadata(id) {
    const metadata = await Wu(id, this.settings_key);
    return metadata.details;
  }
  static {
    this.\u0275fac = function ConciergeSettingsFormModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConciergeSettingsFormModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConciergeSettingsFormModalComponent, selectors: [["concierge-settings-form-modal"]], decls: 155, vars: 42, consts: [[3, "confirm", "heading", "loading"], [1, "flex", "flex-col", "space-y-8", "pb-4"], ["general", "", 1, "bg-base-100", "space-y-2", "rounded-sm"], ["for", "logo_light"], [1, "mb-4", "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", 3, "formField"], ["ngModel", "", 3, "ngModelChange", "ngModelOptions"], ["for", "logo_dark"], ["for", "features"], ["appearance", "outline", 1, "w-full"], ["multiple", "", 3, "formField"], ["value", "zones"], ["value", "spaces"], ["value", "assets"], ["value", "desks"], ["value", "lockers"], ["value", "parking"], ["value", "parking-bookings"], ["value", "parking-manage"], ["value", "visitors"], ["value", "internal-users"], ["value", "surveys"], ["value", "catering"], ["value", "points-of-interest"], ["value", "url-management"], ["value", "events"], ["value", "points"], ["value", "emergency-contacts"], ["value", "signage"], ["value", "email-templates"], ["value", "deals-n-offers"], ["value", "reports"], [1, "border-base-300", "relative", "rounded-sm", "border", "px-4", "pt-4", "pb-2"], [1, "bg-base-100", "absolute", "top-0", "left-4", "-translate-y-1/2", "rounded-sm", "px-2", "py-1", "font-medium"], [1, "flex", "items-center", "space-x-4"], [1, "flex-1"], ["for", "banner-type"], ["name", "banner-type", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], ["matInput", "", "placeholder", "Banner Message", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["for", "default-route"], ["matInput", "", "placeholder", "/book/rooms/new", 3, "formField"], [1, "grid", "gap-4", "md:grid-cols-2"], ["for", "workplace-url-path"], ["matInput", "", "placeholder", "/workplace", 3, "formField"], ["for", "public-url-path"], ["matInput", "", "placeholder", "/public", 3, "formField"], ["for", "kiosk-url-path"], ["matInput", "", "placeholder", "/map-kiosk", 3, "formField"], ["for", "control-path"], ["matInput", "", "placeholder", "/control", 3, "formField"], ["for", "signage-path"], ["matInput", "", "placeholder", "/signage", 3, "formField"], ["for", "short-url-public-key"], ["matInput", "", "placeholder", "your-short-url-public-key", 3, "formField"], ["for", "week-start"], ["placeholder", "Sunday", 3, "formField"], ["for", "currency"], ["placeholder", "Select currency code", 3, "openedChange", "formField"], ["disabled", "", 1, "!h-auto", "!py-2"], ["matInput", "", "placeholder", "Search currency code or name", 3, "ngModelChange", "click", "keydown", "ngModel", "ngModelOptions"], ["disabled", ""], [1, "-mx-2", "flex", "flex-wrap", "items-center"], ["label", "Use 24 hour time", 3, "formField"], ["label", "Delegated", 3, "formField"], ["label", "Force upload state", 3, "formField"], ["label", "All uploads are private", 3, "formField"], ["label", "Use region over building", 3, "formField"], ["reports", "", "id", "feature-reports", 1, "border-base-300", "relative", "rounded-sm", "border", "px-2", "pt-4", "pb-2"], ["spaces", "", "id", "feature-spaces", 1, "border-base-300", "relative", "rounded-sm", "border"], ["desks", "", "id", "feature-desks", 1, "border-base-300", "relative", "rounded-sm", "border"], ["visitors", "", "id", "feature-visitors", 1, "border-base-300", "relative", "rounded-sm", "border"], ["bookings", "", "id", "feature-bookings", 1, "border-base-300", "relative", "rounded-sm", "border"], ["parking", "", "id", "feature-parking", 1, "border-base-300", "relative", "rounded-sm", "border"], ["lockers", "", "id", "feature-lockers", 1, "border-base-300", "relative", "rounded-sm", "border"], ["value", "booking-report"], ["value", "desk-report"], ["value", "catering-report"], ["value", "parking-report"], ["value", "contact-tracing-report"], ["value", "assets-report"], ["value", "visitors-report"], ["for", "group-events-calendar"], ["matInput", "", "placeholder", "shared.events@calendar.acme.tech", 3, "formField"], ["label", "Include weekends in site attendance averages", 3, "formField"], ["icon", "", "matRipple", "", 1, "bg-base-100", "absolute", "top-0", "right-4", "-translate-y-1/2", 3, "click"], ["collapsible", ""], [1, "content", "px-4", "pt-4", "pb-2"], ["for", "day-timeline-view"], [3, "formField"], ["for", "block-start"], ["placeholder", "12AM (Midnight)", 3, "formField"], ["for", "block-end"], ["for", "block-height"], ["for", "max-duration"], ["for", "available-period"], [1, "grid", "grid-cols-1", "gap-4", "md:grid-cols-2"], ["for", "events-bookable-start"], ["for", "events-bookable-end"], ["label", "Allow all day bookings", 3, "formField"], ["label", "Default to all day", 3, "formField"], ["label", "Allow editing setup/breakdown times", 3, "formField"], ["label", "Allow booking for other users", 3, "formField"], ["label", "Allow booking for any other users", 3, "formField"], ["label", "Allow booking with assets", 3, "formField"], ["label", "Hide notes field when booking", 3, "formField"], ["label", "Hide attendees field when booking", 3, "formField"], ["label", "Allow booking for external users", 3, "formField"], ["label", "Enforce capacity for rooms", 3, "formField"], ["label", "Allow booking for multiple days", 3, "formField"], ["label", "Display times with building timezone", 3, "formField"], ["label", "Allow Visibility options", 3, "formField"], ["label", "Allow editing bookings", 3, "formField"], ["for", "events-all-day-start"], ["placeholder", "None", 3, "formField"], ["for", "events-all-day-end"], ["for", "desks-max-assigned-count"], ["matInput", "", "type", "number", 3, "formField"], ["for", "visitors-bookable-start"], ["for", "visitors-bookable-end"], ["for", "hide-fields"], ["placeholder", "No fields selected", "multiple", "", 3, "formField"], ["value", "checked_in_at"], ["value", "checked_out_at"], ["value", "state"], ["value", "date"], ["value", "user_name"], ["value", "status"], ["for", "all-visitors-action-window"], ["label", "Allow booking parking for visitors", 3, "formField"], ["label", "Allow setting pass number for visitors", 3, "formField"], ["label", "Allow printing visitor labels", 3, "formField"], ["label", "Allow international flag for visitors", 3, "formField"], ["label", "Show calendar links after booking", 3, "formField"], ["for", "bookings-bookable-start"], ["for", "bookings-bookable-end"], ["for", "bookings-all-day-start"], ["for", "bookings-all-day-end"], ["for", "parking-max-assigned-count"], ["for", "parking-bookable-start"], ["for", "parking-bookable-end"], ["label", "Show assigned users on parking map", 3, "formField"], ["label", "Show parking status details on map", 3, "formField"], ["label", "Disable parking map styles", 3, "formField"], ["label", "Disable reservations", 3, "formField"], ["label", "Show booking requests", 3, "formField"], ["label", "Show waitlisted status and filter", 3, "formField"], ["label", "Always hide bay number column", 3, "formField"], ["label", "Hide level selector on booking list", 3, "formField"], ["label", "Hide user tab", 3, "formField"], ["label", "Hide vehicle tab", 3, "formField"], ["label", "Hide user and vehicle tabs", 3, "formField"], ["label", "Hide assign space action", 3, "formField"], [3, "label", "formField"], ["label", "Assign a space when approving requests", 3, "formField"], ["for", "lockers-bookable-start"], ["for", "lockers-bookable-end"], ["label", "Default bookings to all day", 3, "formField"], ["label", "Show Calendar Links after booking", 3, "formField"], ["label", "Hide End time option", 3, "formField"], ["label", "Disable Date selection", 3, "formField"], ["label", "Disable start time option", 3, "formField"]], template: function ConciergeSettingsFormModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275listener("confirm", function ConciergeSettingsFormModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(1, "form", 1)(2, "section", 2)(3, "div")(4, "label", 3);
        \u0275\u0275text(5, "Light Mode Logo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4)(7, "mat-form-field", 5);
        \u0275\u0275element(8, "input", 6);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "upload-button", 7);
        \u0275\u0275listener("ngModelChange", function ConciergeSettingsFormModalComponent_Template_upload_button_ngModelChange_9_listener($event) {
          return ctx.model.update((m) => __spreadProps(__spreadValues({}, m), { logo_light: $event }));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div")(11, "label", 8);
        \u0275\u0275text(12, "Dark Mode Logo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 4)(14, "mat-form-field", 5);
        \u0275\u0275element(15, "input", 6);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "upload-button", 7);
        \u0275\u0275listener("ngModelChange", function ConciergeSettingsFormModalComponent_Template_upload_button_ngModelChange_16_listener($event) {
          return ctx.model.update((m) => __spreadProps(__spreadValues({}, m), { logo_dark: $event }));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div")(18, "label", 9);
        \u0275\u0275text(19, "Features");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "mat-form-field", 10)(21, "mat-select", 11)(22, "mat-option", 12);
        \u0275\u0275text(23, " Zones ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "mat-option", 13);
        \u0275\u0275text(25, " Rooms ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "mat-option", 14);
        \u0275\u0275text(27, "Assets");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "mat-option", 15);
        \u0275\u0275text(29, "Desks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "mat-option", 16);
        \u0275\u0275text(31, " Lockers ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "mat-option", 17);
        \u0275\u0275text(33, "Parking");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "mat-option", 18);
        \u0275\u0275text(35, "Parking Bookings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "mat-option", 19);
        \u0275\u0275text(37, "Parking Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "mat-option", 20);
        \u0275\u0275text(39, " Visitors ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "mat-option", 21);
        \u0275\u0275text(41, " User Directory ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "mat-option", 22);
        \u0275\u0275text(43, " Surveys ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "mat-option", 23);
        \u0275\u0275text(45, " Catering ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "mat-option", 24);
        \u0275\u0275text(47, " Points of Interest ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "mat-option", 25);
        \u0275\u0275text(49, " URL Management ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "mat-option", 26);
        \u0275\u0275text(51, " Group Events ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "mat-option", 27);
        \u0275\u0275text(53, " Points ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "mat-option", 28);
        \u0275\u0275text(55, " Emergency Contacts ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "mat-option", 29);
        \u0275\u0275text(57, " Digital Signage ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "mat-option", 30);
        \u0275\u0275text(59, " Email Templates ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "mat-option", 31);
        \u0275\u0275text(61, " Deals & Offers ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "mat-option", 32);
        \u0275\u0275text(63, " Reports ");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(64, ConciergeSettingsFormModalComponent_Conditional_64_Template, 14, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "div", 33)(66, "h3", 34);
        \u0275\u0275text(67, " Banner ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "div", 35)(69, "div", 36)(70, "label", 37);
        \u0275\u0275text(71, "Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "mat-form-field", 10)(73, "mat-select", 38);
        \u0275\u0275listener("ngModelChange", function ConciergeSettingsFormModalComponent_Template_mat_select_ngModelChange_73_listener($event) {
          return ctx.model.update((m) => __spreadProps(__spreadValues({}, m), { banner: { id: ctx.date_string, content: m.banner?.content || "", type: $event } }));
        });
        \u0275\u0275repeaterCreate(74, ConciergeSettingsFormModalComponent_For_75_Template, 2, 2, "mat-option", 39, _forTrack03);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(76, "div", 36)(77, "label", 37);
        \u0275\u0275text(78, "Message");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "mat-form-field", 10)(80, "input", 40);
        \u0275\u0275listener("ngModelChange", function ConciergeSettingsFormModalComponent_Template_input_ngModelChange_80_listener($event) {
          return ctx.model.update((m) => __spreadProps(__spreadValues({}, m), { banner: { id: ctx.date_string, type: m.banner?.type || "", content: $event } }));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(81, "div")(82, "label", 41);
        \u0275\u0275text(83, "Default Route");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "mat-form-field", 10);
        \u0275\u0275element(85, "input", 42);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(86, "mat-hint");
        \u0275\u0275text(87, " Main page of the application ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(88, ConciergeSettingsFormModalComponent_Conditional_88_Template, 7, 1, "div");
        \u0275\u0275elementStart(89, "div", 43)(90, "div")(91, "label", 44);
        \u0275\u0275text(92, "Workplace URL Path");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "mat-form-field", 10);
        \u0275\u0275element(94, "input", 45);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(95, "div")(96, "label", 46);
        \u0275\u0275text(97, "Public URL Path");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "mat-form-field", 10);
        \u0275\u0275element(99, "input", 47);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(100, "div")(101, "label", 48);
        \u0275\u0275text(102, "Map Kiosk URL Path");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "mat-form-field", 10);
        \u0275\u0275element(104, "input", 49);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(105, "div", 43)(106, "div")(107, "label", 50);
        \u0275\u0275text(108, "Control URL Path");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "mat-form-field", 10);
        \u0275\u0275element(110, "input", 51);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(111, "div")(112, "label", 52);
        \u0275\u0275text(113, "Signage URL Path");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "mat-form-field", 10);
        \u0275\u0275element(115, "input", 53);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(116, "div")(117, "label", 54);
        \u0275\u0275text(118, "Short URL Public Key");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "mat-form-field", 10);
        \u0275\u0275element(120, "input", 55);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(121, "div")(122, "label", 56);
        \u0275\u0275text(123, "Week Start");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(124, "mat-form-field", 10)(125, "mat-select", 57);
        \u0275\u0275repeaterCreate(126, ConciergeSettingsFormModalComponent_For_127_Template, 2, 2, "mat-option", 39, _forTrack03);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(128, "mat-hint");
        \u0275\u0275text(129, " Day of the week to show initially on various calendars ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(130, "div")(131, "label", 58);
        \u0275\u0275text(132, "Currency");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(133, "mat-form-field", 10)(134, "mat-select", 59);
        \u0275\u0275listener("openedChange", function ConciergeSettingsFormModalComponent_Template_mat_select_openedChange_134_listener($event) {
          return ctx.onCurrencySelectStateChange($event);
        });
        \u0275\u0275elementStart(135, "mat-option", 60)(136, "input", 61);
        \u0275\u0275listener("ngModelChange", function ConciergeSettingsFormModalComponent_Template_input_ngModelChange_136_listener($event) {
          return ctx.updateCurrencyFilter($event);
        })("click", function ConciergeSettingsFormModalComponent_Template_input_click_136_listener($event) {
          return $event.stopPropagation();
        })("keydown", function ConciergeSettingsFormModalComponent_Template_input_keydown_136_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(137, ConciergeSettingsFormModalComponent_For_138_Template, 2, 2, "mat-option", 39, _forTrack12);
        \u0275\u0275conditionalCreate(139, ConciergeSettingsFormModalComponent_Conditional_139_Template, 2, 0, "mat-option", 62);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(140, "mat-hint");
        \u0275\u0275text(141, " ISO 4217 currency code for pricing ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(142, "div", 63);
        \u0275\u0275element(143, "settings-toggle", 64);
        \u0275\u0275controlCreate();
        \u0275\u0275element(144, "settings-toggle", 65);
        \u0275\u0275controlCreate();
        \u0275\u0275element(145, "settings-toggle", 66);
        \u0275\u0275controlCreate();
        \u0275\u0275element(146, "settings-toggle", 67);
        \u0275\u0275controlCreate();
        \u0275\u0275element(147, "settings-toggle", 68);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(148, ConciergeSettingsFormModalComponent_Conditional_148_Template, 4, 1, "section", 69);
        \u0275\u0275conditionalCreate(149, ConciergeSettingsFormModalComponent_Conditional_149_Template, 109, 27, "section", 70);
        \u0275\u0275conditionalCreate(150, ConciergeSettingsFormModalComponent_Conditional_150_Template, 15, 4, "section", 71);
        \u0275\u0275conditionalCreate(151, ConciergeSettingsFormModalComponent_Conditional_151_Template, 59, 30, "section", 72);
        \u0275\u0275conditionalCreate(152, ConciergeSettingsFormModalComponent_Conditional_152_Template, 60, 12, "section", 73);
        \u0275\u0275conditionalCreate(153, ConciergeSettingsFormModalComponent_Conditional_153_Template, 65, 26, "section", 74);
        \u0275\u0275conditionalCreate(154, ConciergeSettingsFormModalComponent_Conditional_154_Template, 46, 13, "section", 75);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", ctx.heading())("loading", ctx.loading());
        \u0275\u0275advance(8);
        \u0275\u0275property("formField", ctx.form.logo_light);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(37, _c02));
        \u0275\u0275control();
        \u0275\u0275advance(6);
        \u0275\u0275property("formField", ctx.form.logo_dark);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(38, _c02));
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.features);
        \u0275\u0275control();
        \u0275\u0275advance(43);
        \u0275\u0275conditional(ctx.model().features.includes("reports") ? 64 : -1);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngModel", ctx.model().banner?.type || "")("ngModelOptions", \u0275\u0275pureFunction0(39, _c02));
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.BANNER_TYPE);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngModel", ctx.model().banner?.content || "")("ngModelOptions", \u0275\u0275pureFunction0(40, _c02));
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.default_route);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.model().features.includes("events") ? 88 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275property("formField", ctx.form.workplace_url_path);
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.public_url_path);
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.kiosk_url_path);
        \u0275\u0275control();
        \u0275\u0275advance(6);
        \u0275\u0275property("formField", ctx.form.control_path);
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.signage_path);
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.short_url_public_key);
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.week_start);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.WEEK_START);
        \u0275\u0275advance(8);
        \u0275\u0275property("formField", ctx.form.currency);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.currency_filter())("ngModelOptions", \u0275\u0275pureFunction0(41, _c02));
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.filtered_currency_options());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.filtered_currency_options().length ? 139 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("formField", ctx.form.use_24_hour_time);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.delegated);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.force_upload_state);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.private_uploads);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.use_region);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().features.includes("attendance-report") ? 148 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().features.includes("spaces") ? 149 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().features.includes("desks") ? 150 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().features.includes("visitors") ? 151 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().features.includes("visitors") || ctx.model().features.includes("parking") || ctx.model().features.includes("lockers") ? 152 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().features.includes("parking") || ctx.model().features.includes("parking-bookings") ? 153 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().features.includes("lockers") ? 154 : -1);
      }
    }, dependencies: [
      MatDialogModule,
      FullscreenModalShellComponent,
      SettingsToggleComponent,
      FormField,
      MatRippleModule,
      MatRipple,
      IconComponent,
      MatSelectModule,
      MatFormField,
      MatHint,
      MatSelect,
      MatOption,
      MatFormFieldModule,
      MatInputModule,
      MatInput,
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      NgForm,
      UploadButtonComponent,
      TranslatePipe
    ], styles: ["\nsettings-toggle[_ngcontent-%COMP%] {\n  width: calc(50% - 1rem);\n  margin: 0.5rem;\n}\n/*# sourceMappingURL=concierge-settings-form-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConciergeSettingsFormModalComponent, [{
    type: Component,
    args: [{ selector: "concierge-settings-form-modal", template: `
        <fullscreen-modal-shell
            [heading]="heading()"
            [loading]="loading()"
            (confirm)="save()"
        >
            <form class="flex flex-col space-y-8 pb-4">
                <section general class="bg-base-100 space-y-2 rounded-sm">
                    <div>
                        <label for="logo_light">Light Mode Logo</label>
                        <div class="mb-4 flex items-center space-x-2">
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript w-full"
                            >
                                <input matInput [formField]="form.logo_light" />
                            </mat-form-field>
                            <upload-button
                                ngModel
                                (ngModelChange)="
                                    model.update((m) => ({
                                        ...m,
                                        logo_light: $event,
                                    }))
                                "
                                [ngModelOptions]="{ standalone: true }"
                            ></upload-button>
                        </div>
                    </div>
                    <div>
                        <label for="logo_dark">Dark Mode Logo</label>
                        <div class="mb-4 flex items-center space-x-2">
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript w-full"
                            >
                                <input matInput [formField]="form.logo_dark" />
                            </mat-form-field>
                            <upload-button
                                ngModel
                                (ngModelChange)="
                                    model.update((m) => ({
                                        ...m,
                                        logo_dark: $event,
                                    }))
                                "
                                [ngModelOptions]="{ standalone: true }"
                            ></upload-button>
                        </div>
                    </div>
                    <div>
                        <label for="features">Features</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select [formField]="form.features" multiple>
                                <mat-option value="zones"> Zones </mat-option>
                                <mat-option value="spaces"> Rooms </mat-option>
                                <mat-option value="assets">Assets</mat-option>
                                <mat-option value="desks">Desks</mat-option>
                                <mat-option value="lockers">
                                    Lockers
                                </mat-option>
                                <mat-option value="parking">Parking</mat-option>
                                <mat-option value="parking-bookings"
                                    >Parking Bookings</mat-option
                                >
                                <mat-option value="parking-manage"
                                    >Parking Management</mat-option
                                >
                                <mat-option value="visitors">
                                    Visitors
                                </mat-option>
                                <mat-option value="internal-users">
                                    User Directory
                                </mat-option>
                                <mat-option value="surveys">
                                    Surveys
                                </mat-option>
                                <mat-option value="catering">
                                    Catering
                                </mat-option>
                                <mat-option value="points-of-interest">
                                    Points of Interest
                                </mat-option>
                                <mat-option value="url-management">
                                    URL Management
                                </mat-option>
                                <mat-option value="events">
                                    Group Events
                                </mat-option>
                                <mat-option value="points"> Points </mat-option>
                                <mat-option value="emergency-contacts">
                                    Emergency Contacts
                                </mat-option>
                                <mat-option value="signage">
                                    Digital Signage
                                </mat-option>
                                <mat-option value="email-templates">
                                    Email Templates
                                </mat-option>
                                <mat-option value="deals-n-offers">
                                    Deals & Offers
                                </mat-option>
                                <mat-option value="reports">
                                    Reports
                                </mat-option>
                                @if (model().features.includes('reports')) {
                                    <mat-option value="booking-report">
                                        Room Report
                                    </mat-option>
                                    <mat-option value="desk-report">
                                        Desk Report
                                    </mat-option>
                                    <mat-option value="catering-report">
                                        Catering Report
                                    </mat-option>
                                    <mat-option value="parking-report">
                                        Parking Report
                                    </mat-option>
                                    <mat-option value="contact-tracing-report">
                                        Contact Tracing Report
                                    </mat-option>
                                    <mat-option value="assets-report">
                                        Assets Report
                                    </mat-option>
                                    <mat-option value="visitors-report">
                                        Visitors Report
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div
                        class="border-base-300 relative rounded-sm border px-4 pt-4 pb-2"
                    >
                        <h3
                            class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                        >
                            Banner
                        </h3>
                        <div class="flex items-center space-x-4">
                            <div class="flex-1">
                                <label for="banner-type">Type</label>
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <mat-select
                                        name="banner-type"
                                        [ngModel]="model().banner?.type || ''"
                                        (ngModelChange)="
                                            model.update((m) => ({
                                                ...m,
                                                banner: {
                                                    id: date_string,
                                                    content:
                                                        m.banner?.content || '',
                                                    type: $event,
                                                },
                                            }))
                                        "
                                        [ngModelOptions]="{
                                            standalone: true,
                                        }"
                                    >
                                        @for (
                                            opt of BANNER_TYPE;
                                            track opt.value
                                        ) {
                                            <mat-option [value]="opt.value">{{
                                                opt.label
                                            }}</mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            </div>
                            <div class="flex-1">
                                <label for="banner-type">Message</label>
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        matInput
                                        placeholder="Banner Message"
                                        [ngModel]="model().banner?.content || ''"
                                        (ngModelChange)="
                                            model.update((m) => ({
                                                ...m,
                                                banner: {
                                                    id: date_string,
                                                    type: m.banner?.type || '',
                                                    content: $event,
                                                },
                                            }))
                                        "
                                        [ngModelOptions]="{
                                            standalone: true,
                                        }"
                                    />
                                </mat-form-field>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label for="default-route">Default Route</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                [formField]="form.default_route"
                                placeholder="/book/rooms/new"
                            />
                            <mat-hint> Main page of the application </mat-hint>
                        </mat-form-field>
                    </div>
                    @if (model().features.includes('events')) {
                        <div>
                            <label for="group-events-calendar">
                                Group Events Calendar
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    [formField]="form.group_events_calendar"
                                    placeholder="shared.events@calendar.acme.tech"
                                />
                                <mat-hint>
                                    Calendar to add all group events to
                                </mat-hint>
                            </mat-form-field>
                        </div>
                    }
                    <div class="grid gap-4 md:grid-cols-2">
                        <div>
                            <label for="workplace-url-path"
                                >Workplace URL Path</label
                            >
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    [formField]="form.workplace_url_path"
                                    placeholder="/workplace"
                                />
                            </mat-form-field>
                        </div>
                        <div>
                            <label for="public-url-path">Public URL Path</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    [formField]="form.public_url_path"
                                    placeholder="/public"
                                />
                            </mat-form-field>
                        </div>
                        <div>
                            <label for="kiosk-url-path"
                                >Map Kiosk URL Path</label
                            >
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    [formField]="form.kiosk_url_path"
                                    placeholder="/map-kiosk"
                                />
                            </mat-form-field>
                        </div>
                    </div>
                    <div class="grid gap-4 md:grid-cols-2">
                        <div>
                            <label for="control-path">Control URL Path</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    [formField]="form.control_path"
                                    placeholder="/control"
                                />
                            </mat-form-field>
                        </div>
                        <div>
                            <label for="signage-path">Signage URL Path</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    [formField]="form.signage_path"
                                    placeholder="/signage"
                                />
                            </mat-form-field>
                        </div>
                    </div>
                    <div>
                        <label for="short-url-public-key"
                            >Short URL Public Key</label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                [formField]="form.short_url_public_key"
                                placeholder="your-short-url-public-key"
                            />
                        </mat-form-field>
                    </div>
                    <div>
                        <label for="week-start">Week Start</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                [formField]="form.week_start"
                                placeholder="Sunday"
                            >
                                @for (opt of WEEK_START; track opt.value) {
                                    <mat-option [value]="opt.value">{{
                                        opt.label
                                    }}</mat-option>
                                }
                            </mat-select>
                            <mat-hint>
                                Day of the week to show initially on various
                                calendars
                            </mat-hint>
                        </mat-form-field>
                    </div>
                    <div>
                        <label for="currency">Currency</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                [formField]="form.currency"
                                placeholder="Select currency code"
                                (openedChange)="
                                    onCurrencySelectStateChange($event)
                                "
                            >
                                <mat-option disabled class="!h-auto !py-2">
                                    <input
                                        matInput
                                        placeholder="Search currency code or name"
                                        [ngModel]="currency_filter()"
                                        (ngModelChange)="
                                            updateCurrencyFilter($event)
                                        "
                                        [ngModelOptions]="{ standalone: true }"
                                        (click)="$event.stopPropagation()"
                                        (keydown)="$event.stopPropagation()"
                                    />
                                </mat-option>
                                @for (
                                    option of filtered_currency_options();
                                    track option.code
                                ) {
                                    <mat-option [value]="option.code">
                                        {{ option.display_name }}
                                    </mat-option>
                                }
                                @if (!filtered_currency_options().length) {
                                    <mat-option disabled>
                                        No currencies match your search
                                    </mat-option>
                                }
                            </mat-select>
                            <mat-hint>
                                ISO 4217 currency code for pricing
                            </mat-hint>
                        </mat-form-field>
                    </div>
                    <div class="-mx-2 flex flex-wrap items-center">
                        <settings-toggle
                            label="Use 24 hour time"
                            [formField]="form.use_24_hour_time"
                        ></settings-toggle>
                        <settings-toggle
                            label="Delegated"
                            [formField]="form.delegated"
                        ></settings-toggle>
                        <settings-toggle
                            label="Force upload state"
                            [formField]="form.force_upload_state"
                        ></settings-toggle>
                        <settings-toggle
                            label="All uploads are private"
                            [formField]="form.private_uploads"
                        ></settings-toggle>
                        <settings-toggle
                            label="Use region over building"
                            [formField]="form.use_region"
                        ></settings-toggle>
                    </div>
                </section>
                @if (model().features.includes('attendance-report')) {
                    <section
                        reports
                        id="feature-reports"
                        class="border-base-300 relative rounded-sm border px-2 pt-4 pb-2"
                    >
                        <h3
                            class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                        >
                            Reports
                        </h3>
                        <settings-toggle
                            label="Include weekends in site attendance averages"
                            [formField]="
                                form.reports.attendance_include_weekends
                            "
                        ></settings-toggle>
                    </section>
                }
                @if (model().features.includes('spaces')) {
                    <section
                        spaces
                        id="feature-spaces"
                        class="border-base-300 relative rounded-sm border"
                    >
                        <h3
                            class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                        >
                            Room Bookings
                        </h3>
                        <button
                            icon
                            matRipple
                            class="bg-base-100 absolute top-0 right-4 -translate-y-1/2"
                            (click)="toggleGroup('spaces')"
                        >
                            <icon>{{
                                shown_group() === 'spaces'
                                    ? 'chevron_left'
                                    : 'keyboard_arrow_down'
                            }}</icon>
                        </button>
                        <div
                            collapsible
                            [class.open]="shown_group() === 'spaces'"
                        >
                            <div class="content px-4 pt-4 pb-2">
                                <div class="flex-1">
                                    <label for="day-timeline-view">
                                        Day Timeline Default View
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            [formField]="
                                                form.events.day_timeline_view
                                            "
                                        >
                                            @for (
                                                opt of DAY_TIMELINE_VIEW;
                                                track opt.value
                                            ) {
                                                <mat-option
                                                    [value]="opt.value"
                                                    >{{ opt.label }}</mat-option
                                                >
                                            }
                                        </mat-select>
                                        <mat-hint>
                                            Default day timeline layout for room
                                            bookings
                                        </mat-hint>
                                    </mat-form-field>
                                </div>
                                <div class="flex items-center space-x-4">
                                    <div class="flex-1">
                                        <label for="block-start"
                                            >Block Start Time</label
                                        >
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="
                                                    form.events.block_start
                                                "
                                                placeholder="12AM (Midnight)"
                                            >
                                                @for (
                                                    opt of BLOCK_START;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                            <mat-hint>
                                                Start time of dayview blocks
                                            </mat-hint>
                                        </mat-form-field>
                                    </div>
                                    <div class="flex-1">
                                        <label for="block-end"
                                            >Block End Time</label
                                        >
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="
                                                    form.events.block_end
                                                "
                                                placeholder="12AM (Midnight)"
                                            >
                                                @for (
                                                    opt of BLOCK_END;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                            <mat-hint>
                                                End time of dayview blocks
                                            </mat-hint>
                                        </mat-form-field>
                                    </div>
                                </div>
                                <div class="flex items-center space-x-4">
                                    <div class="flex-1">
                                        <label for="block-height">
                                            Block Height
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="
                                                    form.events.block_height
                                                "
                                            >
                                                @for (
                                                    opt of BLOCK_HEIGHT;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                            <mat-hint>
                                                Height of 1 hour in dayview
                                            </mat-hint>
                                        </mat-form-field>
                                    </div>
                                    <div class="flex-1">
                                        <label for="max-duration">
                                            Max Duration
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="
                                                    form.events.max_duration
                                                "
                                            >
                                                @for (
                                                    opt of MAX_DURATION_FULL;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                            <mat-hint>
                                                Max duration for single day
                                                bookings
                                            </mat-hint>
                                        </mat-form-field>
                                    </div>
                                </div>
                                <div>
                                    <label for="available-period">
                                        Available Period
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            [formField]="
                                                form.events.available_period
                                            "
                                        >
                                            @for (
                                                opt of AVAILABLE_PERIOD_SHORT;
                                                track opt.value
                                            ) {
                                                <mat-option
                                                    [value]="opt.value"
                                                    >{{ opt.label }}</mat-option
                                                >
                                            }
                                        </mat-select>
                                        <mat-hint>
                                            Number of days ahead users can
                                            create bookings from the room
                                            booking manager
                                        </mat-hint>
                                    </mat-form-field>
                                </div>
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
                                >
                                    <div>
                                        <label for="events-bookable-start">
                                            Bookable Start
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="
                                                    form.events.bookable_hours
                                                        .start
                                                "
                                            >
                                                @for (
                                                    opt of BOOKABLE_HOUR_START;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                    <div>
                                        <label for="events-bookable-end">
                                            Bookable End
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="
                                                    form.events.bookable_hours
                                                        .end
                                                "
                                            >
                                                @for (
                                                    opt of BOOKABLE_HOUR_END;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                </div>
                                <div class="-mx-2 flex flex-wrap items-center">
                                    <settings-toggle
                                        label="Allow all day bookings"
                                        [formField]="form.events.allow_all_day"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Default to all day"
                                        [formField]="
                                            form.events.all_day_default
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow editing setup/breakdown times"
                                        [formField]="
                                            form.events.allow_setup_breakdown
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow booking for other users"
                                        [formField]="
                                            form.events.can_book_for_others
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow booking for any other users"
                                        [formField]="
                                            form.events.can_book_for_anyone
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow booking with assets"
                                        [formField]="form.events.has_assets"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Hide notes field when booking"
                                        [formField]="form.events.hide_notes"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Hide attendees field when booking"
                                        [formField]="form.events.hide_attendees"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow booking for external users"
                                        [formField]="
                                            form.events.allow_externals
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Enforce capacity for rooms"
                                        [formField]="
                                            form.events.strict_capacity_check
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow booking for multiple days"
                                        [formField]="form.events.allow_multiday"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Display times with building timezone"
                                        [formField]="
                                            form.events.use_building_timezone
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow Visibility options"
                                        [formField]="
                                            form.events.allow_visibility
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow editing bookings"
                                        [formField]="form.events.allow_edit"
                                    ></settings-toggle>
                                </div>
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
                                >
                                    <div>
                                        <label for="events-all-day-start">
                                            All Day Start
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="
                                                    form.events.all_day_period
                                                        .start
                                                "
                                                placeholder="None"
                                            >
                                                @for (
                                                    opt of BLOCK_START;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                    <div>
                                        <label for="events-all-day-end">
                                            All Day End
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="
                                                    form.events.all_day_period
                                                        .end
                                                "
                                                placeholder="None"
                                            >
                                                @for (
                                                    opt of BLOCK_END;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                }
                @if (model().features.includes('desks')) {
                    <section
                        desks
                        id="feature-desks"
                        class="border-base-300 relative rounded-sm border"
                    >
                        <h3
                            class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                        >
                            Desk Assignments
                        </h3>
                        <button
                            icon
                            matRipple
                            class="bg-base-100 absolute top-0 right-4 -translate-y-1/2"
                            (click)="toggleGroup('desks')"
                        >
                            <icon>{{
                                shown_group() === 'desks'
                                    ? 'chevron_left'
                                    : 'keyboard_arrow_down'
                            }}</icon>
                        </button>
                        <div
                            collapsible
                            [class.open]="shown_group() === 'desks'"
                        >
                            <div class="content px-4 pt-4 pb-2">
                                <div>
                                    <label for="desks-max-assigned-count">
                                        Max Assigned Desks Per User
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <input
                                            matInput
                                            type="number"
                                            [formField]="
                                                form.desks.max_assigned_count
                                            "
                                        />
                                        <mat-hint>
                                            Maximum number of desk assignments a
                                            user can have at one time. Set to 0
                                            for unlimited.
                                        </mat-hint>
                                    </mat-form-field>
                                </div>
                            </div>
                        </div>
                    </section>
                }
                @if (model().features.includes('visitors')) {
                    <section
                        visitors
                        id="feature-visitors"
                        class="border-base-300 relative rounded-sm border"
                    >
                        <h3
                            class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                        >
                            Visitors
                        </h3>
                        <button
                            icon
                            matRipple
                            class="bg-base-100 absolute top-0 right-4 -translate-y-1/2"
                            (click)="toggleGroup('visitors')"
                        >
                            <icon>{{
                                shown_group() === 'visitors'
                                    ? 'chevron_left'
                                    : 'keyboard_arrow_down'
                            }}</icon>
                        </button>
                        <div
                            collapsible
                            [class.open]="shown_group() === 'visitors'"
                        >
                            <div class="content px-4 pt-4 pb-2">
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
                                >
                                    <div>
                                        <label for="visitors-bookable-start">
                                            Bookable Start
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="
                                                    form.visitors.bookable_hours
                                                        .start
                                                "
                                                placeholder="None"
                                            >
                                                @for (
                                                    opt of BOOKABLE_HOUR_START;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                    <div>
                                        <label for="visitors-bookable-end">
                                            Bookable End
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="
                                                    form.visitors.bookable_hours
                                                        .end
                                                "
                                                placeholder="None"
                                            >
                                                @for (
                                                    opt of BOOKABLE_HOUR_END;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                </div>
                                <label for="hide-fields"
                                    >Hide Guest List fields</label
                                >
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <mat-select
                                        [formField]="form.visitors.hide_fields"
                                        placeholder="No fields selected"
                                        multiple
                                    >
                                        <mat-option value="checked_in_at">
                                            {{
                                                'COMMON.CHECKED_IN_AT'
                                                    | translate
                                            }}
                                        </mat-option>
                                        <mat-option value="checked_out_at">
                                            {{
                                                'COMMON.CHECKED_OUT_AT'
                                                    | translate
                                            }}
                                        </mat-option>
                                        <mat-option value="state">
                                            {{
                                                'COMMON.CHECKED_IN' | translate
                                            }}
                                        </mat-option>
                                        <mat-option value="date">
                                            {{ 'FORM.TIME' | translate }}
                                        </mat-option>
                                        <mat-option value="user_name">
                                            {{ 'FORM.HOST' | translate }}
                                        </mat-option>
                                        <mat-option value="status">
                                            {{ 'COMMON.STATE' | translate }}
                                        </mat-option>
                                    </mat-select>
                                    <mat-hint>
                                        Hide selected columns on the visitor
                                        listing table
                                    </mat-hint>
                                </mat-form-field>
                                <label for="all-visitors-action-window">
                                    Check-in/out all visitors action window
                                </label>
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        matInput
                                        type="number"
                                        [formField]="
                                            form.visitors
                                                .all_visitors_action_window
                                        "
                                    />
                                    <mat-hint>
                                        Minutes before and after the booking
                                        time to show all visitor check-in/out
                                        actions
                                    </mat-hint>
                                </mat-form-field>
                                <div class="-mx-2 flex flex-wrap items-center">
                                    <settings-toggle
                                        label="Allow booking parking for visitors"
                                        [formField]="form.visitors.has_parking"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow setting pass number for visitors"
                                        [formField]="
                                            form.visitors.allow_pass_number
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow printing visitor labels"
                                        [formField]="
                                            form.visitors.allow_printing_label
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow international flag for visitors"
                                        [formField]="
                                            form.visitors.allow_international
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Show calendar links after booking"
                                        [formField]="
                                            form.visitors.show_calendar_links
                                        "
                                    ></settings-toggle>
                                </div>
                            </div>
                        </div>
                    </section>
                }
                @if (
                    model().features.includes('visitors') ||
                    model().features.includes('parking') ||
                    model().features.includes('lockers')
                ) {
                    <section
                        bookings
                        id="feature-bookings"
                        class="border-base-300 relative rounded-sm border"
                    >
                        <h3
                            class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                        >
                            PlaceOS Bookings
                        </h3>
                        <button
                            icon
                            matRipple
                            class="bg-base-100 absolute top-0 right-4 -translate-y-1/2"
                            (click)="toggleGroup('bookings')"
                        >
                            <icon>{{
                                shown_group() === 'bookings'
                                    ? 'chevron_left'
                                    : 'keyboard_arrow_down'
                            }}</icon>
                        </button>
                        <div
                            collapsible
                            [class.open]="shown_group() === 'bookings'"
                        >
                            <div class="content px-4 pt-4 pb-2">
                                <div>
                                    <label for="available-period">
                                        Available Period
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            [formField]="
                                                form.bookings.available_period
                                            "
                                        >
                                            @for (
                                                opt of AVAILABLE_PERIOD_EXTENDED;
                                                track opt.value
                                            ) {
                                                <mat-option
                                                    [value]="opt.value"
                                                    >{{ opt.label }}</mat-option
                                                >
                                            }
                                        </mat-select>
                                        <mat-hint>
                                            Number of days ahead the user is
                                            able to book
                                        </mat-hint>
                                    </mat-form-field>
                                </div>
                                <div>
                                    <label for="max-duration">
                                        Max Duration
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            [formField]="
                                                form.bookings.max_duration
                                            "
                                        >
                                            @for (
                                                opt of MAX_DURATION_FULL;
                                                track opt.value
                                            ) {
                                                <mat-option
                                                    [value]="opt.value"
                                                    >{{ opt.label }}</mat-option
                                                >
                                            }
                                        </mat-select>
                                        <mat-hint>
                                            Max duration for single day bookings
                                        </mat-hint>
                                    </mat-form-field>
                                </div>
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
                                >
                                    <div>
                                        <label for="bookings-bookable-start">
                                            Bookable Start
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="
                                                    form.bookings.bookable_hours
                                                        .start
                                                "
                                            >
                                                @for (
                                                    opt of BOOKABLE_HOUR_START;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                    <div>
                                        <label for="bookings-bookable-end">
                                            Bookable End
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="
                                                    form.bookings.bookable_hours
                                                        .end
                                                "
                                            >
                                                @for (
                                                    opt of BOOKABLE_HOUR_END;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                </div>
                                <div class="-mx-2 flex flex-wrap items-center">
                                    <settings-toggle
                                        label="Allow all day bookings"
                                        [formField]="form.bookings.allow_all_day"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Display times with building timezone"
                                        [formField]="
                                            form.bookings.use_building_timezone
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow booking with assets"
                                        [formField]="form.bookings.has_assets"
                                    ></settings-toggle>
                                </div>
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
                                >
                                    <div>
                                        <label for="bookings-all-day-start">
                                            All Day Start
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="
                                                    form.bookings.all_day_period
                                                        .start
                                                "
                                            >
                                                @for (
                                                    opt of BLOCK_START;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                    <div>
                                        <label for="bookings-all-day-end">
                                            All Day End
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="
                                                    form.bookings.all_day_period
                                                        .end
                                                "
                                            >
                                                @for (
                                                    opt of BLOCK_END;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                }
                @if (
                    model().features.includes('parking') ||
                    model().features.includes('parking-bookings')
                ) {
                    <section
                        parking
                        id="feature-parking"
                        class="border-base-300 relative rounded-sm border"
                    >
                        <h3
                            class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                        >
                            Parking
                        </h3>
                        <button
                            icon
                            matRipple
                            class="bg-base-100 absolute top-0 right-4 -translate-y-1/2"
                            (click)="toggleGroup('parking')"
                        >
                            <icon>{{
                                shown_group() === 'parking'
                                    ? 'chevron_left'
                                    : 'keyboard_arrow_down'
                            }}</icon>
                        </button>
                        <div
                            collapsible
                            [class.open]="shown_group() === 'parking'"
                        >
                            <div class="content px-4 pt-4 pb-2">
                                <div>
                                    <label for="available-period">
                                        Available Period
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            [formField]="
                                                form.parking.available_period
                                            "
                                        >
                                            @for (
                                                opt of AVAILABLE_PERIOD_EXTENDED;
                                                track opt.value
                                            ) {
                                                <mat-option
                                                    [value]="opt.value"
                                                    >{{ opt.label }}</mat-option
                                                >
                                            }
                                        </mat-select>
                                        <mat-hint>
                                            Number of days ahead the user is
                                            able to book
                                        </mat-hint>
                                    </mat-form-field>
                                </div>
                                <div>
                                    <label for="max-duration">
                                        Max Duration
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            [formField]="
                                                form.parking.max_duration
                                            "
                                        >
                                            @for (
                                                opt of MAX_DURATION_FULL;
                                                track opt.value
                                            ) {
                                                <mat-option
                                                    [value]="opt.value"
                                                    >{{ opt.label }}</mat-option
                                                >
                                            }
                                        </mat-select>
                                        <mat-hint>
                                            Max duration for single day bookings
                                        </mat-hint>
                                    </mat-form-field>
                                </div>
                                <div>
                                    <label for="parking-max-assigned-count">
                                        Max Assigned Parking Spaces Per User
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <input
                                            matInput
                                            type="number"
                                            [formField]="
                                                form.parking.max_assigned_count
                                            "
                                        />
                                        <mat-hint>
                                            Maximum number of parking space
                                            assignments a user can have at one
                                            time. Set to 0 for unlimited.
                                        </mat-hint>
                                    </mat-form-field>
                                </div>
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
                                >
                                    <div>
                                        <label for="parking-bookable-start">
                                            Bookable Start
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="
                                                    form.parking.bookable_hours
                                                        .start
                                                "
                                            >
                                                @for (
                                                    opt of BOOKABLE_HOUR_START;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                    <div>
                                        <label for="parking-bookable-end">
                                            Bookable End
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="
                                                    form.parking.bookable_hours
                                                        .end
                                                "
                                            >
                                                @for (
                                                    opt of BOOKABLE_HOUR_END;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                </div>
                                <div class="-mx-2 flex flex-wrap items-center">
                                    <settings-toggle
                                        label="Allow all day bookings"
                                        [formField]="form.parking.allow_all_day"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Show assigned users on parking map"
                                        [formField]="form.parking.show_users"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Show parking status details on map"
                                        [formField]="
                                            form.parking.show_status_details
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Disable parking map styles"
                                        [formField]="form.parking.disable_styles"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Disable reservations"
                                        [formField]="
                                            form.parking.disable_bookings
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Show booking requests"
                                        [formField]="form.parking.show_requests"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Show waitlisted status and filter"
                                        [formField]="form.parking.show_waitlist"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Always hide bay number column"
                                        [formField]="
                                            form.parking.hide_bay_number
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Hide level selector on booking list"
                                        [formField]="
                                            form.parking
                                                .hide_level_selector_on_booking_list
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Hide user tab"
                                        [formField]="form.parking.hide_users"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Hide vehicle tab"
                                        [formField]="form.parking.hide_vehicles"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Hide user and vehicle tabs"
                                        [formField]="
                                            form.parking.hide_users_and_vehicles
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Hide assign space action"
                                        [formField]="
                                            form.parking.hide_assign_space
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        [label]="
                                            'APP.CONCIERGE.PARKING_ALLOW_DELETING'
                                                | translate
                                        "
                                        [formField]="form.parking.allow_deleting"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Assign a space when approving requests"
                                        [formField]="
                                            form.parking.assign_space_on_approve
                                        "
                                    ></settings-toggle>
                                </div>
                            </div>
                        </div>
                    </section>
                }
                @if (model().features.includes('lockers')) {
                    <section
                        lockers
                        id="feature-lockers"
                        class="border-base-300 relative rounded-sm border"
                    >
                        <h3
                            class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                        >
                            Locker Bookings
                        </h3>
                        <button
                            icon
                            matRipple
                            class="bg-base-100 absolute top-0 right-4 -translate-y-1/2"
                            (click)="toggleGroup('lockers')"
                        >
                            <icon>{{
                                shown_group() === 'lockers'
                                    ? 'chevron_left'
                                    : 'keyboard_arrow_down'
                            }}</icon>
                        </button>
                        <div
                            collapsible
                            [class.open]="shown_group() === 'lockers'"
                        >
                            <div class="content px-4 pt-4 pb-2">
                                <div>
                                    <label for="available-period">
                                        Available Period
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            [formField]="
                                                form.lockers.available_period
                                            "
                                        >
                                            @for (
                                                opt of AVAILABLE_PERIOD_SHORT;
                                                track opt.value
                                            ) {
                                                <mat-option
                                                    [value]="opt.value"
                                                    >{{ opt.label }}</mat-option
                                                >
                                            }
                                        </mat-select>
                                        <mat-hint>
                                            Number of days ahead the user is
                                            able to book
                                        </mat-hint>
                                    </mat-form-field>
                                </div>
                                <div>
                                    <label for="max-duration">
                                        Max Duration
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            [formField]="
                                                form.lockers.max_duration
                                            "
                                        >
                                            @for (
                                                opt of MAX_DURATION_FULL;
                                                track opt.value
                                            ) {
                                                <mat-option
                                                    [value]="opt.value"
                                                    >{{ opt.label }}</mat-option
                                                >
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                </div>
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
                                >
                                    <div>
                                        <label for="lockers-bookable-start">
                                            Bookable Start
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="
                                                    form.lockers.bookable_hours
                                                        .start
                                                "
                                            >
                                                @for (
                                                    opt of BOOKABLE_HOUR_START;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                    <div>
                                        <label for="lockers-bookable-end">
                                            Bookable End
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="
                                                    form.lockers.bookable_hours
                                                        .end
                                                "
                                            >
                                                @for (
                                                    opt of BOOKABLE_HOUR_END;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                </div>
                                <div class="-mx-2 flex flex-wrap items-center">
                                    <settings-toggle
                                        label="Allow all day bookings"
                                        [formField]="form.lockers.allow_all_day"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Default bookings to all day"
                                        [formField]="
                                            form.lockers.all_day_default
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Show Calendar Links after booking"
                                        [formField]="
                                            form.lockers.show_calendar_links
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Hide End time option"
                                        [formField]="form.lockers.hide_end_time"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Disable Date selection"
                                        [formField]="
                                            form.lockers.disabled_date_select
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Disable start time option"
                                        [formField]="
                                            form.lockers.disabled_start_time
                                        "
                                    ></settings-toggle>
                                </div>
                            </div>
                        </div>
                    </section>
                }
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      MatDialogModule,
      FullscreenModalShellComponent,
      SettingsToggleComponent,
      FormField,
      MatRippleModule,
      IconComponent,
      TranslatePipe,
      MatSelectModule,
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      UploadButtonComponent
    ], styles: ["/* angular:styles/component:css;ca7581e3f527e8cafa49f5d3654b7182593f8c4b756e7d34512a16bfc4e4e137;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/ui/app-settings/concierge-settings-form-modal.component.ts */\nsettings-toggle {\n  width: calc(50% - 1rem);\n  margin: 0.5rem;\n}\n/*# sourceMappingURL=concierge-settings-form-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConciergeSettingsFormModalComponent, { className: "ConciergeSettingsFormModalComponent", filePath: "apps/concierge/src/app/ui/app-settings/concierge-settings-form-modal.component.ts", lineNumber: 1800 });
})();

// apps/visitor-kiosk/src/environments/settings.ts
var home = {};
var explore = {
  colors: {
    "space-available": "#43a047",
    "space-requestable": "#ffb300",
    "space-unavailable": "#e53935",
    "space-not-bookable": "#ccc",
    "desk-available": "#43a047",
    "desk-available-stroke": "#1b5e20",
    "desk-unavailable": "#e53935",
    "desk-unavailable-stroke": "#b71c1c",
    "desk-reserved": "#ffb300",
    "desk-reserved-stroke": "#ff6f00",
    "desk-not-bookable": "#fff",
    "desk-not-bookable-stroke": "#ccc",
    "zone-low": "#43a047",
    "zone-medium": "#ffb300",
    "zone-high": "#e53935"
  },
  can_select_building: false,
  show_legend_group_names: true,
  legend: {}
};
var app2 = {
  name: "Visitor-Kiosk",
  title: "Visitor Kiosk",
  description: "Kiosk UI written with Angular Framework",
  short_name: "KIOSK",
  logo_light: "assets/logo-light.svg",
  logo_dark: "assets/logo-dark.svg",
  allow_self_registration: true,
  allow_registration_time_options: false,
  allow_user_photo: true,
  hide_building_image: false,
  explore,
  home,
  welcome_background: "assets/img/skyline.png",
  locales: [
    { id: "en-AU", name: "LANGUAGE.ENGLISH", local: "English", flag: "\u{1F1E6}\u{1F1FA}" },
    {
      id: "en-US",
      name: "LANGUAGE.ENGLISH_US",
      local: "English (US)",
      flag: "\u{1F1FA}\u{1F1F8}"
    },
    { id: "fr", name: "LANGUAGE.FRENCH", local: "Fran\xE7ais", flag: "\u{1F1EB}\u{1F1F7}" },
    {
      id: "fr-CA",
      name: "LANGUAGE.FRENCH_CA",
      local: "Fran\xE7ais (Canada)",
      flag: "\u{1F1E8}\u{1F1E6}"
    },
    { id: "es", name: "LANGUAGE.SPANISH", local: "Espa\xF1ol", flag: "\u{1F1EA}\u{1F1F8}" },
    {
      id: "pt",
      name: "LANGUAGE.PORTUGUESE",
      local: "Portugu\xEAs",
      flag: "\u{1F1F5}\u{1F1F9}"
    },
    { id: "it", name: "LANGUAGE.ITALIAN", local: "Italiano", flag: "\u{1F1EE}\u{1F1F9}" },
    { id: "zh", name: "LANGUAGE.CHINESE", local: "\u4E2D\u6587", flag: "\u{1F1E8}\u{1F1F3}" },
    { id: "ja-JP", name: "LANGUAGE.JAPANESE", local: "\u65E5\u672C\u8A9E", flag: "\u{1F1EF}\u{1F1F5}" },
    { id: "ar", name: "LANGUAGE.ARABIC", local: "\u0639\u0631\u0628\u064A\u0629", flag: "" }
  ]
};
var DEFAULT_SETTINGS2 = {
  debug: true,
  composer: {
    domain: "",
    route: "/visitor-kiosk",
    protocol: "",
    port: "",
    use_domain: false,
    local_login: false
  },
  service_worker: {
    auto_reload: true
  },
  app: app2,
  mock: false
};

// apps/concierge/src/app/ui/app-settings/visitor-kiosk-settings-form-modal.component.ts
var _c03 = () => ({ standalone: true });
var _c1 = () => [];
var _forTrack04 = ($index, $item) => $item.value;
function VisitorKioskSettingsFormModalComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "settings-toggle", 15);
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formField", ctx_r0.form.induction_after_details);
    \u0275\u0275control();
  }
}
function VisitorKioskSettingsFormModalComponent_For_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r2 = ctx.$implicit;
    \u0275\u0275property("value", opt_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r2.label);
  }
}
function VisitorKioskSettingsFormModalComponent_For_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    \u0275\u0275property("value", opt_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r3.label);
  }
}
function VisitorKioskSettingsFormModalComponent_For_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    \u0275\u0275property("value", opt_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r4.label);
  }
}
function VisitorKioskSettingsFormModalComponent_For_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r5 = ctx.$implicit;
    \u0275\u0275property("value", opt_r5.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r5.label);
  }
}
function VisitorKioskSettingsFormModalComponent_For_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    \u0275\u0275property("value", opt_r6.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r6.label);
  }
}
function VisitorKioskSettingsFormModalComponent_Conditional_109_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 63)(2, "mat-form-field", 5)(3, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function VisitorKioskSettingsFormModalComponent_Conditional_109_For_4_Template_input_ngModelChange_3_listener($event) {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(item_r9[0], $event) || (item_r9[0] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 65)(5, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function VisitorKioskSettingsFormModalComponent_Conditional_109_For_4_Template_input_ngModelChange_5_listener($event) {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(item_r9[1], $event) || (item_r9[1] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 67);
    \u0275\u0275listener("click", function VisitorKioskSettingsFormModalComponent_Conditional_109_For_4_Template_button_click_6_listener() {
      const \u0275$index_210_r10 = \u0275\u0275restoreView(_r8).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeLegend(\u0275$index_210_r10));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", item_r9[0]);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(4, _c03));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", item_r9[1]);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(5, _c03));
    \u0275\u0275control();
  }
}
function VisitorKioskSettingsFormModalComponent_Conditional_109_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "h3", 29);
    \u0275\u0275text(2, " Legend ");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, VisitorKioskSettingsFormModalComponent_Conditional_109_For_4_Template, 9, 6, "div", 61, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(5, "button", 62);
    \u0275\u0275listener("click", function VisitorKioskSettingsFormModalComponent_Conditional_109_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addLegend());
    });
    \u0275\u0275text(6, " Add Legend Item ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.model().explore.legend || \u0275\u0275pureFunction0(0, _c1));
  }
}
function VisitorKioskSettingsFormModalComponent_For_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r11 = ctx.$implicit;
    \u0275\u0275property("value", opt_r11.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r11.label);
  }
}
var VisitorKioskSettingsFormModalComponent = class _VisitorKioskSettingsFormModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this.existing_settings = {};
    this.old_settings = {};
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.zone = this._data.zone;
    this.MAX_DURATION_MINI = MAX_DURATION_MINI_OPTIONS;
    this.EXPLORE_FEATURE = EXPLORE_FEATURE_OPTIONS;
    this.settings_key = this._settings.get("app.visitor_kiosk_metadata_key") || "visitor-kiosk_app";
    this.model = signal(
      {
        logo_light: "",
        logo_dark: "",
        default_route: "",
        welcome_background: "",
        welcome_message: "",
        induction_enabled: false,
        induction_details: "",
        induction_after_details: false,
        allow_self_registration: false,
        allow_registration_time_options: false,
        allow_pass_number: false,
        allow_printing_label: false,
        allow_user_photo: false,
        allow_beverages: false,
        hide_explore: false,
        hide_building_image: false,
        checked_in_template: "",
        standalone_visitor_location: "",
        visitor_label_size: {
          width: 25,
          height: 15,
          scale: 4
        },
        visitors: {
          allow_all_day: false,
          max_duration: 180
        },
        explore: {
          hide_device_fields: false,
          show_legend: false,
          hide_zones: false,
          legend: [],
          colors: {},
          show_booking_qr: false,
          disable: [],
          disable_actions: [],
          disable_labels: [],
          disable_features: [],
          disable_styles: [],
          use_zone_polygons: false,
          area_count_key: "count",
          show_zone_labels: false,
          show_zone_sensor_info: false
        }
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model);
  }
  async ngOnInit() {
    const zone = this._data.zone;
    this.loading.set("Loading existing settings...");
    this._patchModel(DEFAULT_SETTINGS2.app);
    const org_id = this._org.organisation.id;
    const org_metadata = await this._getMetadata(org_id);
    const parent_metadata = org_id !== zone.parent_id ? await this._getMetadata(zone.parent_id) : {};
    const metadata = await this._getMetadata(zone.id);
    this.existing_settings = __spreadValues(__spreadValues(__spreadValues({}, DEFAULT_SETTINGS2.app), org_metadata), parent_metadata);
    this._patchModel(org_metadata || {});
    this._patchModel(parent_metadata || {});
    this._patchModel(metadata || {});
    this.old_settings = metadata;
    this.loading.set("");
  }
  addLegend() {
    const legend = [...this.model().explore.legend || []];
    legend.push(["", ""]);
    this.model.update((m) => __spreadProps(__spreadValues({}, m), {
      explore: __spreadProps(__spreadValues({}, m.explore), { legend })
    }));
  }
  removeLegend(index) {
    const legend = [...this.model().explore.legend || []];
    if (legend.length > index)
      legend.splice(index, 1);
    this.model.update((m) => __spreadProps(__spreadValues({}, m), {
      explore: __spreadProps(__spreadValues({}, m.explore), { legend })
    }));
  }
  _patchModel(value) {
    if (!value)
      return;
    this.model.update((m) => __spreadProps(__spreadValues(__spreadValues({}, m), value), {
      visitor_label_size: __spreadValues(__spreadValues({}, m.visitor_label_size), value.visitor_label_size || {}),
      visitors: __spreadValues(__spreadValues({}, m.visitors), value.visitors || {}),
      explore: __spreadValues(__spreadValues({}, m.explore), value.explore || {})
    }));
  }
  async save() {
    this.loading.set("Saving settings...");
    const zone = this._data.zone;
    const form_value = this.model();
    const new_settings = __spreadValues({}, this.old_settings);
    for (const key in form_value) {
      if (form_value[key] instanceof Array) {
        new_settings[key] = form_value[key];
      } else if (form_value[key] instanceof Object) {
        new_settings[key] = __spreadValues(__spreadValues({}, this.existing_settings[key] || {}), form_value[key]);
      } else {
        new_settings[key] = form_value[key];
      }
    }
    for (const key in new_settings) {
      if (!this._isValid(new_settings[key], this.existing_settings[key])) {
        delete new_settings[key];
      } else if (new_settings[key] instanceof Object && !(new_settings[key] instanceof Array) && this.existing_settings[key]) {
        for (const sub_key in new_settings[key]) {
          if (!this._isValid(new_settings[key][sub_key], this.existing_settings[key][sub_key])) {
            delete new_settings[key][sub_key];
          }
        }
      }
    }
    const user = currentUser();
    new_settings.edited_by = {
      id: user.id,
      name: user.name,
      email: user.email,
      domain: location.hostname,
      role: user.groups.includes("placeos_admin") ? "Admin" : user.groups.includes("placeos_support") ? "Support" : "User"
    };
    try {
      await Qu(zone.id, {
        name: `${this.settings_key}`,
        details: new_settings,
        description: `[${VERSION.hash}|C] Visitor-kiosk Application Settings`
      });
    } catch (e) {
      console.error(e);
      this.loading.set("");
      notifyError(`Failed to save settings: ${e.message || e.error || e}`);
      throw e;
    }
    this.loading.set("");
    notifySuccess("Successfully saved visitor kiosk app settings");
    this._dialog_ref.close();
  }
  _isValid(new_value, existing_value) {
    return new_value !== "" && new_value !== void 0 && new_value !== null && JSON.stringify(new_value) !== JSON.stringify(existing_value);
  }
  async _getMetadata(id) {
    const metadata = await Wu(id, this.settings_key);
    return metadata.details;
  }
  static {
    this.\u0275fac = function VisitorKioskSettingsFormModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisitorKioskSettingsFormModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorKioskSettingsFormModalComponent, selectors: [["visitor-kiosk-settings-form-modal"]], decls: 130, vars: 42, consts: [[3, "confirm", "heading", "loading"], [1, "flex", "flex-col", "space-y-8"], ["general", "", 1, "bg-base-100", "space-y-2", "rounded-sm"], ["for", "logo_light"], [1, "mb-4", "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", 3, "formField"], ["ngModel", "", 3, "ngModelChange", "ngModelOptions"], ["for", "logo_dark"], ["for", "welcome-background"], ["for", "default-route"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "placeholder", "Welcome to PlaceOS Self Service Kiosk", 3, "formField"], [1, "-mx-2", "flex", "flex-wrap", "items-center"], ["label", "Enable Induction", 3, "formField"], ["label", "Induction after Confirm Details", 3, "formField"], ["label", "Allow Self Registration", 3, "formField"], ["label", "Allow setting visitor pass number", 3, "formField"], ["label", "Allow Printing Label", 3, "formField"], ["label", "Allow Visitor Photo", 3, "formField"], ["label", "Allow Registration Time Options", 3, "formField"], ["label", "Allow Beverages", 3, "formField"], ["label", "Hide Explore Map option", 3, "formField"], ["label", "Hide Building Image", 3, "formField"], ["for", "standalone-visitor-location"], ["matInput", "", "placeholder", "zone-system-id", 3, "formField"], ["for", "checked-in-template"], ["matInput", "", "placeholder", "Welcome >visitor_name<", 3, "formField"], [1, "border-base-300", "relative", "rounded-sm", "border", "px-4", "pt-4", "pb-2"], [1, "bg-base-100", "absolute", "top-0", "left-4", "-translate-y-1/2", "rounded-sm", "px-2", "py-1", "font-medium"], [1, "grid", "gap-4", "md:grid-cols-3"], ["for", "label-width"], ["matInput", "", "type", "number", 3, "formField"], ["for", "label-height"], ["for", "label-scale"], ["explore", "", 1, "border-base-300", "relative", "rounded-sm", "border", "px-4", "pt-4", "pb-2"], ["for", "disable"], ["placeholder", "No disabled features", "multiple", "", 3, "formField"], [3, "value"], [1, "flex", "items-center", "space-x-4"], [1, "flex-1"], ["for", "disable-actions"], ["placeholder", "No disabled actions", "multiple", "", 3, "formField"], ["for", "available-period"], ["placeholder", "No disabled labels", "multiple", "", 3, "formField"], ["for", "disable-features"], ["placeholder", "No disabled displays", "multiple", "", 3, "formField"], ["for", "disable-styles"], ["placeholder", "No disabled styles", "multiple", "", 3, "formField"], [1, "border-base-300", "relative", "rounded-sm", "border", "p-4"], ["label", "Hide device fields", "info", "Hides the MAC address, manufacturer, OS and SSID fields from device info tooltips", 3, "formField"], ["label", "Show Legend", 3, "formField"], ["label", "Hide Zones", 3, "formField"], ["label", "Show Booking QR Code", 3, "formField"], ["label", "Use defined polygons for zones", 3, "formField"], ["label", "Show labels for zones", 3, "formField"], ["label", "Show zone sensor info", 3, "formField"], ["booking", "", 1, "border-base-300", "relative", "rounded-sm", "border", "px-4", "pt-4", "pb-2"], ["for", "max-duration"], [3, "formField"], ["label", "Allow all day bookings", 3, "formField"], [1, "mb-4", "flex", "items-center", "space-x-4"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], [1, "w-3/4", "flex-1"], ["matInput", "", "placeholder", "Legend Key", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["matTooltip", "Legend Color", 1, "flex", "w-12", "items-center", "justify-center"], ["type", "color", 1, "border-base-content", "h-11", "rounded-lg", "border", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["icon", "", "matRipple", "", 1, "border-error", "text-error", "h-12", "w-12", "rounded-sm", "border", 3, "click"]], template: function VisitorKioskSettingsFormModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275listener("confirm", function VisitorKioskSettingsFormModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(1, "form", 1)(2, "section", 2)(3, "div")(4, "label", 3);
        \u0275\u0275text(5, "Light Mode Logo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4)(7, "mat-form-field", 5);
        \u0275\u0275element(8, "input", 6);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "upload-button", 7);
        \u0275\u0275listener("ngModelChange", function VisitorKioskSettingsFormModalComponent_Template_upload_button_ngModelChange_9_listener($event) {
          return ctx.model.update((m) => __spreadProps(__spreadValues({}, m), { logo_light: $event }));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div")(11, "label", 8);
        \u0275\u0275text(12, "Dark Mode Logo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 4)(14, "mat-form-field", 5);
        \u0275\u0275element(15, "input", 6);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "upload-button", 7);
        \u0275\u0275listener("ngModelChange", function VisitorKioskSettingsFormModalComponent_Template_upload_button_ngModelChange_16_listener($event) {
          return ctx.model.update((m) => __spreadProps(__spreadValues({}, m), { logo_dark: $event }));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div")(18, "label", 9);
        \u0275\u0275text(19, " Welcome Background ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 4)(21, "mat-form-field", 5);
        \u0275\u0275element(22, "input", 6);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "upload-button", 7);
        \u0275\u0275listener("ngModelChange", function VisitorKioskSettingsFormModalComponent_Template_upload_button_ngModelChange_23_listener($event) {
          return ctx.model.update((m) => __spreadProps(__spreadValues({}, m), { welcome_background: $event }));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div")(25, "label", 10);
        \u0275\u0275text(26, "Welcome Message");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "mat-form-field", 11);
        \u0275\u0275element(28, "textarea", 12);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 13);
        \u0275\u0275element(30, "settings-toggle", 14);
        \u0275\u0275controlCreate();
        \u0275\u0275conditionalCreate(31, VisitorKioskSettingsFormModalComponent_Conditional_31_Template, 1, 1, "settings-toggle", 15);
        \u0275\u0275element(32, "settings-toggle", 16);
        \u0275\u0275controlCreate();
        \u0275\u0275element(33, "settings-toggle", 17);
        \u0275\u0275controlCreate();
        \u0275\u0275element(34, "settings-toggle", 18);
        \u0275\u0275controlCreate();
        \u0275\u0275element(35, "settings-toggle", 19);
        \u0275\u0275controlCreate();
        \u0275\u0275element(36, "settings-toggle", 20);
        \u0275\u0275controlCreate();
        \u0275\u0275element(37, "settings-toggle", 21);
        \u0275\u0275controlCreate();
        \u0275\u0275element(38, "settings-toggle", 22);
        \u0275\u0275controlCreate();
        \u0275\u0275element(39, "settings-toggle", 23);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div")(41, "label", 24);
        \u0275\u0275text(42, " Standalone Visitor Location ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "mat-form-field", 11);
        \u0275\u0275element(44, "input", 25);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div")(46, "label", 26);
        \u0275\u0275text(47, " Checked In Template ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "mat-form-field", 11);
        \u0275\u0275element(49, "textarea", 27);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 28)(51, "h3", 29);
        \u0275\u0275text(52, " Visitor Label Size ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 30)(54, "div")(55, "label", 31);
        \u0275\u0275text(56, "Width (mm)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "mat-form-field", 11);
        \u0275\u0275element(58, "input", 32);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "div")(60, "label", 33);
        \u0275\u0275text(61, "Height (mm)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "mat-form-field", 11);
        \u0275\u0275element(63, "input", 32);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "div")(65, "label", 34);
        \u0275\u0275text(66, "Scale");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "mat-form-field", 11);
        \u0275\u0275element(68, "input", 32);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(69, "section", 35)(70, "h3", 29);
        \u0275\u0275text(71, " PlaceOS Maps ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "div")(73, "label", 36);
        \u0275\u0275text(74, " Disabled Features ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "mat-form-field", 11)(76, "mat-select", 37);
        \u0275\u0275repeaterCreate(77, VisitorKioskSettingsFormModalComponent_For_78_Template, 2, 2, "mat-option", 38, _forTrack04);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(79, "div", 39)(80, "div", 40)(81, "label", 41);
        \u0275\u0275text(82, " Disabled Feature Actions ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "mat-form-field", 11)(84, "mat-select", 42);
        \u0275\u0275repeaterCreate(85, VisitorKioskSettingsFormModalComponent_For_86_Template, 2, 2, "mat-option", 38, _forTrack04);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(87, "div", 40)(88, "label", 43);
        \u0275\u0275text(89, " Disabled Feature Labels ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "mat-form-field", 11)(91, "mat-select", 44);
        \u0275\u0275repeaterCreate(92, VisitorKioskSettingsFormModalComponent_For_93_Template, 2, 2, "mat-option", 38, _forTrack04);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(94, "div", 39)(95, "div", 40)(96, "label", 45);
        \u0275\u0275text(97, " Disabled Feature Displays ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "mat-form-field", 11)(99, "mat-select", 46);
        \u0275\u0275repeaterCreate(100, VisitorKioskSettingsFormModalComponent_For_101_Template, 2, 2, "mat-option", 38, _forTrack04);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(102, "div", 40)(103, "label", 47);
        \u0275\u0275text(104, " Disabled Feature Styles ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "mat-form-field", 11)(106, "mat-select", 48);
        \u0275\u0275repeaterCreate(107, VisitorKioskSettingsFormModalComponent_For_108_Template, 2, 2, "mat-option", 38, _forTrack04);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(109, VisitorKioskSettingsFormModalComponent_Conditional_109_Template, 7, 1, "div", 49);
        \u0275\u0275elementStart(110, "div", 13);
        \u0275\u0275element(111, "settings-toggle", 50);
        \u0275\u0275controlCreate();
        \u0275\u0275element(112, "settings-toggle", 51);
        \u0275\u0275controlCreate();
        \u0275\u0275element(113, "settings-toggle", 52);
        \u0275\u0275controlCreate();
        \u0275\u0275element(114, "settings-toggle", 53);
        \u0275\u0275controlCreate();
        \u0275\u0275element(115, "settings-toggle", 54);
        \u0275\u0275controlCreate();
        \u0275\u0275element(116, "settings-toggle", 55);
        \u0275\u0275controlCreate();
        \u0275\u0275element(117, "settings-toggle", 56);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(118, "section", 57)(119, "h3", 29);
        \u0275\u0275text(120, " Visitor Booking Rules ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "div")(122, "label", 58);
        \u0275\u0275text(123, "Max Duration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(124, "mat-form-field", 11)(125, "mat-select", 59);
        \u0275\u0275repeaterCreate(126, VisitorKioskSettingsFormModalComponent_For_127_Template, 2, 2, "mat-option", 38, _forTrack04);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(128, "div", 13);
        \u0275\u0275element(129, "settings-toggle", 60);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", "Visitor Kiosk Settings - " + (ctx.zone.display_name || ctx.zone.name || "Organisation"))("loading", ctx.loading());
        \u0275\u0275advance(8);
        \u0275\u0275property("formField", ctx.form.logo_light);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(39, _c03));
        \u0275\u0275control();
        \u0275\u0275advance(6);
        \u0275\u0275property("formField", ctx.form.logo_dark);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(40, _c03));
        \u0275\u0275control();
        \u0275\u0275advance(6);
        \u0275\u0275property("formField", ctx.form.welcome_background);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(41, _c03));
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.welcome_message);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("formField", ctx.form.induction_enabled);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().induction_enabled ? 31 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.allow_self_registration);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.allow_pass_number);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.allow_printing_label);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.allow_user_photo);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.allow_registration_time_options);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.allow_beverages);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.hide_explore);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.hide_building_image);
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.standalone_visitor_location);
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.checked_in_template);
        \u0275\u0275control();
        \u0275\u0275advance(9);
        \u0275\u0275property("formField", ctx.form.visitor_label_size.width);
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.visitor_label_size.height);
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.visitor_label_size.scale);
        \u0275\u0275control();
        \u0275\u0275advance(8);
        \u0275\u0275property("formField", ctx.form.explore.disable);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.EXPLORE_FEATURE);
        \u0275\u0275advance(7);
        \u0275\u0275property("formField", ctx.form.explore.disable_actions);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.EXPLORE_FEATURE);
        \u0275\u0275advance(6);
        \u0275\u0275property("formField", ctx.form.explore.disable_labels);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.EXPLORE_FEATURE);
        \u0275\u0275advance(7);
        \u0275\u0275property("formField", ctx.form.explore.disable_features);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.EXPLORE_FEATURE);
        \u0275\u0275advance(6);
        \u0275\u0275property("formField", ctx.form.explore.disable_styles);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.EXPLORE_FEATURE);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.model().explore.show_legend ? 109 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("formField", ctx.form.explore.hide_device_fields);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.explore.show_legend);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.explore.hide_zones);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.explore.show_booking_qr);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.explore.use_zone_polygons);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.explore.show_zone_labels);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.explore.show_zone_sensor_info);
        \u0275\u0275control();
        \u0275\u0275advance(8);
        \u0275\u0275property("formField", ctx.form.visitors.max_duration);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.MAX_DURATION_MINI);
        \u0275\u0275advance(3);
        \u0275\u0275property("formField", ctx.form.visitors.allow_all_day);
        \u0275\u0275control();
      }
    }, dependencies: [
      FullscreenModalShellComponent,
      MatDialogModule,
      MatRippleModule,
      MatRipple,
      IconComponent,
      MatProgressSpinnerModule,
      SettingsToggleComponent,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatInputModule,
      MatInput,
      UploadButtonComponent,
      FormField,
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      NgForm
    ], styles: ["\nsettings-toggle[_ngcontent-%COMP%] {\n  width: calc(50% - 1rem);\n  margin: 0.5rem;\n}\n/*# sourceMappingURL=visitor-kiosk-settings-form-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitorKioskSettingsFormModalComponent, [{
    type: Component,
    args: [{ selector: "visitor-kiosk-settings-form-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                'Visitor Kiosk Settings - ' +
                (zone.display_name || zone.name || 'Organisation')
            "
            [loading]="loading()"
            (confirm)="save()"
        >
            <form class="flex flex-col space-y-8">
                <section general class="bg-base-100 space-y-2 rounded-sm">
                    <div>
                        <label for="logo_light">Light Mode Logo</label>
                        <div class="mb-4 flex items-center space-x-2">
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript w-full"
                            >
                                <input matInput [formField]="form.logo_light" />
                            </mat-form-field>
                            <upload-button
                                ngModel
                                (ngModelChange)="
                                    model.update((m) => ({
                                        ...m,
                                        logo_light: $event,
                                    }))
                                "
                                [ngModelOptions]="{ standalone: true }"
                            ></upload-button>
                        </div>
                    </div>
                    <div>
                        <label for="logo_dark">Dark Mode Logo</label>
                        <div class="mb-4 flex items-center space-x-2">
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript w-full"
                            >
                                <input matInput [formField]="form.logo_dark" />
                            </mat-form-field>
                            <upload-button
                                ngModel
                                (ngModelChange)="
                                    model.update((m) => ({
                                        ...m,
                                        logo_dark: $event,
                                    }))
                                "
                                [ngModelOptions]="{ standalone: true }"
                            ></upload-button>
                        </div>
                    </div>
                    <div>
                        <label for="welcome-background">
                            Welcome Background
                        </label>
                        <div class="mb-4 flex items-center space-x-2">
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript w-full"
                            >
                                <input
                                    matInput
                                    [formField]="form.welcome_background"
                                />
                            </mat-form-field>
                            <upload-button
                                ngModel
                                (ngModelChange)="
                                    model.update((m) => ({
                                        ...m,
                                        welcome_background: $event,
                                    }))
                                "
                                [ngModelOptions]="{ standalone: true }"
                            ></upload-button>
                        </div>
                    </div>
                    <div>
                        <label for="default-route">Welcome Message</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <textarea
                                matInput
                                [formField]="form.welcome_message"
                                placeholder="Welcome to PlaceOS Self Service Kiosk"
                            ></textarea>
                        </mat-form-field>
                    </div>
                    <div class="-mx-2 flex flex-wrap items-center">
                        <settings-toggle
                            label="Enable Induction"
                            [formField]="form.induction_enabled"
                        ></settings-toggle>
                        @if (model().induction_enabled) {
                            <settings-toggle
                                label="Induction after Confirm Details"
                                [formField]="form.induction_after_details"
                            ></settings-toggle>
                        }
                        <settings-toggle
                            label="Allow Self Registration"
                            [formField]="form.allow_self_registration"
                        ></settings-toggle>
                        <settings-toggle
                            label="Allow setting visitor pass number"
                            [formField]="form.allow_pass_number"
                        ></settings-toggle>
                        <settings-toggle
                            label="Allow Printing Label"
                            [formField]="form.allow_printing_label"
                        ></settings-toggle>
                        <settings-toggle
                            label="Allow Visitor Photo"
                            [formField]="form.allow_user_photo"
                        ></settings-toggle>
                        <settings-toggle
                            label="Allow Registration Time Options"
                            [formField]="form.allow_registration_time_options"
                        ></settings-toggle>
                        <settings-toggle
                            label="Allow Beverages"
                            [formField]="form.allow_beverages"
                        ></settings-toggle>
                        <settings-toggle
                            label="Hide Explore Map option"
                            [formField]="form.hide_explore"
                        ></settings-toggle>
                        <settings-toggle
                            label="Hide Building Image"
                            [formField]="form.hide_building_image"
                        ></settings-toggle>
                    </div>
                    <div>
                        <label for="standalone-visitor-location">
                            Standalone Visitor Location
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                [formField]="form.standalone_visitor_location"
                                placeholder="zone-system-id"
                            />
                        </mat-form-field>
                    </div>
                    <div>
                        <label for="checked-in-template">
                            Checked In Template
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <textarea
                                matInput
                                [formField]="form.checked_in_template"
                                placeholder="Welcome &gt;visitor_name&lt;"
                            ></textarea>
                        </mat-form-field>
                    </div>
                    <div
                        class="border-base-300 relative rounded-sm border px-4 pt-4 pb-2"
                    >
                        <h3
                            class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                        >
                            Visitor Label Size
                        </h3>
                        <div class="grid gap-4 md:grid-cols-3">
                            <div>
                                <label for="label-width">Width (mm)</label>
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        matInput
                                        type="number"
                                        [formField]="
                                            form.visitor_label_size.width
                                        "
                                    />
                                </mat-form-field>
                            </div>
                            <div>
                                <label for="label-height">Height (mm)</label>
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        matInput
                                        type="number"
                                        [formField]="
                                            form.visitor_label_size.height
                                        "
                                    />
                                </mat-form-field>
                            </div>
                            <div>
                                <label for="label-scale">Scale</label>
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        matInput
                                        type="number"
                                        [formField]="
                                            form.visitor_label_size.scale
                                        "
                                    />
                                </mat-form-field>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    explore
                    class="border-base-300 relative rounded-sm border px-4 pt-4 pb-2"
                >
                    <h3
                        class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                    >
                        PlaceOS Maps
                    </h3>
                    <div>
                        <label for="disable"> Disabled Features </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                [formField]="form.explore.disable"
                                placeholder="No disabled features"
                                multiple
                            >
                                @for (opt of EXPLORE_FEATURE; track opt.value) {
                                    <mat-option [value]="opt.value">{{
                                        opt.label
                                    }}</mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="flex items-center space-x-4">
                        <div class="flex-1">
                            <label for="disable-actions">
                                Disabled Feature Actions
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    [formField]="form.explore.disable_actions"
                                    placeholder="No disabled actions"
                                    multiple
                                >
                                    @for (
                                        opt of EXPLORE_FEATURE;
                                        track opt.value
                                    ) {
                                        <mat-option [value]="opt.value">{{
                                            opt.label
                                        }}</mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                        <div class="flex-1">
                            <label for="available-period">
                                Disabled Feature Labels
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    [formField]="form.explore.disable_labels"
                                    placeholder="No disabled labels"
                                    multiple
                                >
                                    @for (
                                        opt of EXPLORE_FEATURE;
                                        track opt.value
                                    ) {
                                        <mat-option [value]="opt.value">{{
                                            opt.label
                                        }}</mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <div class="flex-1">
                            <label for="disable-features">
                                Disabled Feature Displays
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    [formField]="form.explore.disable_features"
                                    placeholder="No disabled displays"
                                    multiple
                                >
                                    @for (
                                        opt of EXPLORE_FEATURE;
                                        track opt.value
                                    ) {
                                        <mat-option [value]="opt.value">{{
                                            opt.label
                                        }}</mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                        <div class="flex-1">
                            <label for="disable-styles">
                                Disabled Feature Styles
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    [formField]="form.explore.disable_styles"
                                    placeholder="No disabled styles"
                                    multiple
                                >
                                    @for (
                                        opt of EXPLORE_FEATURE;
                                        track opt.value
                                    ) {
                                        <mat-option [value]="opt.value">{{
                                            opt.label
                                        }}</mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                    </div>
                    @if (model().explore.show_legend) {
                        <div
                            class="border-base-300 relative rounded-sm border p-4"
                        >
                            <h3
                                class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                            >
                                Legend
                            </h3>
                            @for (
                                item of model().explore.legend || [];
                                track item;
                                let i = $index
                            ) {
                                <div class="mb-4 flex items-center space-x-4">
                                    <div class="w-3/4 flex-1">
                                        <mat-form-field
                                            appearance="outline"
                                            class="no-subscript w-full"
                                        >
                                            <input
                                                matInput
                                                placeholder="Legend Key"
                                                [(ngModel)]="item[0]"
                                                [ngModelOptions]="{
                                                    standalone: true,
                                                }"
                                            />
                                        </mat-form-field>
                                    </div>
                                    <div
                                        class="flex w-12 items-center justify-center"
                                        matTooltip="Legend Color"
                                    >
                                        <input
                                            type="color"
                                            class="border-base-content h-11 rounded-lg border"
                                            [(ngModel)]="item[1]"
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                        />
                                    </div>
                                    <button
                                        icon
                                        matRipple
                                        class="border-error text-error h-12 w-12 rounded-sm border"
                                        (click)="removeLegend(i)"
                                    >
                                        <icon>delete</icon>
                                    </button>
                                </div>
                            }
                            <button
                                btn
                                matRipple
                                class="w-full"
                                (click)="addLegend()"
                            >
                                Add Legend Item
                            </button>
                        </div>
                    }
                    <div class="-mx-2 flex flex-wrap items-center">
                        <settings-toggle
                            label="Hide device fields"
                            [formField]="form.explore.hide_device_fields"
                            info="Hides the MAC address, manufacturer, OS and SSID fields from device info tooltips"
                        ></settings-toggle>
                        <settings-toggle
                            label="Show Legend"
                            [formField]="form.explore.show_legend"
                        ></settings-toggle>
                        <settings-toggle
                            label="Hide Zones"
                            [formField]="form.explore.hide_zones"
                        ></settings-toggle>
                        <settings-toggle
                            label="Show Booking QR Code"
                            [formField]="form.explore.show_booking_qr"
                        ></settings-toggle>
                        <settings-toggle
                            label="Use defined polygons for zones"
                            [formField]="form.explore.use_zone_polygons"
                        ></settings-toggle>
                        <settings-toggle
                            label="Show labels for zones"
                            [formField]="form.explore.show_zone_labels"
                        ></settings-toggle>
                        <settings-toggle
                            label="Show zone sensor info"
                            [formField]="form.explore.show_zone_sensor_info"
                        ></settings-toggle>
                    </div>
                </section>
                <section
                    booking
                    class="border-base-300 relative rounded-sm border px-4 pt-4 pb-2"
                >
                    <h3
                        class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                    >
                        Visitor Booking Rules
                    </h3>
                    <div>
                        <label for="max-duration">Max Duration</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                [formField]="form.visitors.max_duration"
                            >
                                @for (
                                    opt of MAX_DURATION_MINI;
                                    track opt.value
                                ) {
                                    <mat-option [value]="opt.value">{{
                                        opt.label
                                    }}</mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="-mx-2 flex flex-wrap items-center">
                        <settings-toggle
                            label="Allow all day bookings"
                            [formField]="form.visitors.allow_all_day"
                        ></settings-toggle>
                    </div>
                </section>
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      MatDialogModule,
      MatRippleModule,
      IconComponent,
      MatProgressSpinnerModule,
      SettingsToggleComponent,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule,
      UploadButtonComponent,
      FormField,
      FormsModule
    ], styles: ["/* angular:styles/component:css;ca7581e3f527e8cafa49f5d3654b7182593f8c4b756e7d34512a16bfc4e4e137;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/ui/app-settings/visitor-kiosk-settings-form-modal.component.ts */\nsettings-toggle {\n  width: calc(50% - 1rem);\n  margin: 0.5rem;\n}\n/*# sourceMappingURL=visitor-kiosk-settings-form-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorKioskSettingsFormModalComponent, { className: "VisitorKioskSettingsFormModalComponent", filePath: "apps/concierge/src/app/ui/app-settings/visitor-kiosk-settings-form-modal.component.ts", lineNumber: 519 });
})();

// apps/workplace/src/environments/settings.ts
var general = {
  banner: {
    id: "2",
    type: "info",
    content: ``
  },
  search: true,
  dark_mode: true
};
var help = [
  {
    name: "About PlaceOS",
    link: "https://place.technology/resources",
    icon: {
      type: "icon",
      class: "material-symbols-rounded",
      content: "dns"
    },
    background: "https://static1.squarespace.com/static/52142586e4b0c09536a144ad/5c8ed203a4222fa1927bbab3/5cb7cba66e9a7f63584b4d39/1555549341622/too-many-buttons.jpg?format=2500w"
  },
  {
    name: "General Enquiries",
    link: "mailto:equiries@place.technology?subject=Staff%20App%20Demo",
    icon: {
      type: "icon",
      class: "material-symbols-rounded",
      content: "mail"
    },
    background: "assets/img/it-banner.jpg"
  },
  {
    name: "Contact PlaceOS",
    link: "https://place.technology/contact-1",
    icon: {
      type: "icon",
      class: "material-symbols-rounded",
      content: "call"
    },
    background: "https://images.squarespace-cdn.com/content/v1/52142586e4b0c09536a144ad/1569984759306-M6ZOKD64OG009U68MYUL/ke17ZwdGBToddI8pDm48kCX-V5vw-8h9IBXN10-_8XN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0p4Wyba38KfG317vYluk45_zZdtnDCZTLKcP2mivxmYi50xvY5saIGKMgOza9mH4XA/image-asset.jpeg?format=2500w"
  },
  {
    name: "About Us",
    link: "https://place.technology/",
    icon: {
      type: "icon",
      class: "material-symbols-rounded",
      content: "business"
    },
    background: "https://images.squarespace-cdn.com/content/v1/52142586e4b0c09536a144ad/1569985184499-QF839PTJ2EV30KIZF59X/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/image-asset.jpeg?format=2500w"
  }
];
var events = {
  multiple_spaces: false,
  desk_start: 9,
  // bookable_hours: { start: 8, end: 19 },
  can_book_for_others: false,
  has_catering: true,
  has_assets: true,
  allow_all_day: true,
  hide_notes: false,
  hide_attendees: false,
  hide_nearby_desks: false,
  features_label: "",
  features_on_form: false,
  booking_unavailable: false,
  allow_externals: true,
  allow_recurrence: false,
  allow_daily_allday_recurrence: false,
  allow_online_meetings: false,
  force_current_user_for_booking_rules: false
};
var space_display = {
  show_images: false
};
var directory = {
  show_avatars: true,
  min_search_length: 3
};
var schedule = {
  use_websocket: false,
  legend: [
    { name: "Accepted", color: "#21A453" },
    { name: "Pending", color: "#ffbf1f" },
    { name: "Rejected", color: "#f44336" }
  ]
};
var explore2 = {
  colors: {
    "space-free": "#43a047",
    "space-pending": "#ffb300",
    "space-busy": "#e53935",
    "space-not-bookable": "#ccc",
    "space-unknown": "#000",
    // 'desk-available': '#43a047',
    // 'desk-available-stroke': '#1b5e20',
    // 'desk-unavailable': '#e53935',
    // 'desk-unavailable-stroke': '#b71c1c',
    // 'desk-reserved': '#ffb300',
    // 'desk-reserved-stroke': '#ff6f00',
    // 'desk-not-bookable': '#fff',
    // 'desk-not-bookable-stroke': '#ccc',
    "zone-low": "#43a047",
    "zone-medium": "#ffb300",
    "zone-high": "#e53935"
  },
  can_select_building: true,
  show_legend_group_names: true,
  show_legend: true,
  hide_zones: true,
  use_zone_polygons: false,
  show_simple_sensor_info: false,
  show_presence_indicators: false,
  legend: [
    ["Available", "#43a047"],
    ["In Use", "#e53935"],
    ["Pending", "#ffb300"],
    ["Signs of Life", "#1565c0"]
  ],
  use_cisco_maps: false,
  cisco_maps: {
    token: "",
    tenant_id: "",
    location_id: ""
  }
};
var app3 = {
  name: "Workplace",
  title: "Workplace Application",
  description: "PlaceOS Workplace UI written with Angular Framework",
  short_name: "WorkMate",
  logo_light: "assets/logo-light.svg",
  logo_dark: "assets/logo-dark.svg",
  locales: [
    { id: "en-AU", name: "LANGUAGE.ENGLISH", local: "English", flag: "\u{1F1E6}\u{1F1FA}" },
    {
      id: "en-US",
      name: "LANGUAGE.ENGLISH_US",
      local: "English (US)",
      flag: "\u{1F1FA}\u{1F1F8}"
    },
    { id: "fr", name: "LANGUAGE.FRENCH", local: "Fran\xE7ais", flag: "\u{1F1EB}\u{1F1F7}" },
    {
      id: "fr-CA",
      name: "LANGUAGE.FRENCH_CA",
      local: "Fran\xE7ais (Canada)",
      flag: "\u{1F1E8}\u{1F1E6}"
    },
    { id: "es", name: "LANGUAGE.SPANISH", local: "Espa\xF1ol", flag: "\u{1F1EA}\u{1F1F8}" },
    {
      id: "pt",
      name: "LANGUAGE.PORTUGUESE",
      local: "Portugu\xEAs",
      flag: "\u{1F1F5}\u{1F1F9}"
    },
    { id: "it", name: "LANGUAGE.ITALIAN", local: "Italiano", flag: "\u{1F1EE}\u{1F1F9}" },
    { id: "zh", name: "LANGUAGE.CHINESE", local: "\u4E2D\u6587", flag: "\u{1F1E8}\u{1F1F3}" },
    { id: "ja-JP", name: "LANGUAGE.JAPANESE", local: "\u65E5\u672C\u8A9E", flag: "\u{1F1EF}\u{1F1F5}" },
    { id: "ar", name: "LANGUAGE.ARABIC", local: "\u0639\u0631\u0628\u064A\u0629", flag: "" }
  ],
  features: [
    "spaces",
    "desks",
    "explore",
    "parking",
    "help",
    "schedule",
    "lockers",
    "visitor-invite",
    "group-events"
  ],
  currency: "USD",
  default_route: "/landing",
  use_geolocation: false,
  use_24_hour_time: false,
  show_changelog: true,
  new_features: true,
  can_deliver: true,
  no_user_calendar: false,
  basic_user_search: false,
  no_maps: true,
  general,
  help,
  events,
  space_display,
  directory,
  explore: explore2,
  bookings: {
    no_approval: false,
    all_day_default: false,
    allowed_daily_visitor_count: 100,
    multiple_visitors: true,
    force_current_user_for_booking_rules: false,
    // Applies to any assignable resource type (desk/parking/locker).
    // Override per type under `app.<type>s.*` (e.g. `app.desks.*`).
    allow_booking_with_reserved_resource: false,
    prevent_self_booking_if_assigned_resource: false
  },
  desks: {
    can_book_lockers: true,
    can_book_for_others: true,
    // bookable_hours: { start: 8, end: 19 },
    allow_groups: true,
    allow_time_changes: true,
    allow_all_day: true,
    auto_allocation: false,
    show_calendar_links: true,
    allow_recurrence: true,
    hide_map: false,
    default_select_as_map: false,
    default_duration: 60
  },
  parking: {
    allow_all_day: true,
    allow_recurrence: true,
    request_submission_notes_html: "",
    vehicle_types: [
      { id: "car", name: "BOOKINGS.PARKING_VEHICLE_CAR" },
      { id: "bike", name: "BOOKINGS.PARKING_VEHICLE_BIKE" },
      { id: "van", name: "BOOKINGS.PARKING_VEHICLE_VAN" },
      { id: "truck", name: "BOOKINGS.PARKING_VEHICLE_TRUCK" },
      { id: "other", name: "BOOKINGS.PARKING_VEHICLE_OTHER" }
    ],
    hidden_buildings: [],
    hide_prefer_toggle: false,
    hide_custom_shift: false,
    hide_selected_space: false,
    hide_availability_counter: false,
    require_plate_number: false,
    require_space_restriction: false
  },
  visitors: {
    allow_all_day: true
  },
  analytics: {
    enabled: true,
    tracking_id: ""
  },
  chat: {
    enabled: false
  },
  hide_contacts: false,
  schedule,
  virtual_concierge: {
    display: "fullscreen",
    side: "left",
    prompts: [
      "Book a meeting room tomorrow at 2pm for 4 people",
      "Find me an available desk near a window",
      "Reserve parking for Friday morning"
    ]
  }
};
var DEFAULT_SETTINGS3 = {
  debug: true,
  composer: {
    domain: "",
    route: "/staff",
    protocol: "",
    port: "",
    use_domain: false,
    local_login: false
  },
  app: app3
};

// apps/concierge/src/app/ui/app-settings/workplace-settings-form-modal.component.ts
var _c04 = () => ({ standalone: true });
var _c12 = () => ({ id: "en-GB", name: "English", flag: "\u{1F1EC}\u{1F1E7}" });
var _c2 = () => ({ id: "en-US", name: "English", flag: "\u{1F1FA}\u{1F1F8}" });
var _c3 = () => ({ id: "fr", name: "French", flag: "\u{1F1EB}\u{1F1F7}" });
var _c4 = () => ({ id: "es", name: "Spanish", flag: "\u{1F1EA}\u{1F1F8}" });
var _c5 = () => ({ id: "pt", name: "Portuguese", flag: "\u{1F1F5}\u{1F1F9}" });
var _c6 = () => ({ id: "ar", name: "Arabic", flag: "" });
var _c7 = () => [];
var _forTrack05 = ($index, $item) => $item.value;
var _forTrack13 = ($index, $item) => $item.code;
function WorkplaceSettingsFormModalComponent_For_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r1 = ctx.$implicit;
    \u0275\u0275property("value", opt_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r1.label);
  }
}
function WorkplaceSettingsFormModalComponent_For_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r2 = ctx.$implicit;
    \u0275\u0275property("value", opt_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r2.label);
  }
}
function WorkplaceSettingsFormModalComponent_For_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    \u0275\u0275property("value", option_r3.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r3.display_name, " ");
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_129_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 52);
    \u0275\u0275text(1, " No currencies match your search ");
    \u0275\u0275elementEnd();
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_153_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "settings-toggle", 59);
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("formField", ctx_r3.form.allow_support_ticket_images);
    \u0275\u0275control();
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_165_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    \u0275\u0275property("value", opt_r6.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r6.label);
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_165_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r7 = ctx.$implicit;
    \u0275\u0275property("value", opt_r7.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r7.label);
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_165_For_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r8 = ctx.$implicit;
    \u0275\u0275property("value", opt_r8.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r8.label);
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_165_For_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r9 = ctx.$implicit;
    \u0275\u0275property("value", opt_r9.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r9.label);
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_165_For_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r10 = ctx.$implicit;
    \u0275\u0275property("value", opt_r10.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r10.label);
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_165_For_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r11 = ctx.$implicit;
    \u0275\u0275property("value", opt_r11.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r11.label);
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_165_For_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r12 = ctx.$implicit;
    \u0275\u0275property("value", opt_r12.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r12.label);
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_165_For_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r13 = ctx.$implicit;
    \u0275\u0275property("value", opt_r13.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r13.label);
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_165_For_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r14 = ctx.$implicit;
    \u0275\u0275property("value", opt_r14.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r14.label);
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_165_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 71)(1, "h3", 31);
    \u0275\u0275text(2, " Room Bookings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 77);
    \u0275\u0275listener("click", function WorkplaceSettingsFormModalComponent_Conditional_165_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleGroup("spaces"));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 78)(7, "div", 79)(8, "div")(9, "label", 80);
    \u0275\u0275text(10, " Available Period ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 10)(12, "mat-select", 81);
    \u0275\u0275repeaterCreate(13, WorkplaceSettingsFormModalComponent_Conditional_165_For_14_Template, 2, 2, "mat-option", 36, _forTrack05);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(15, "mat-hint");
    \u0275\u0275text(16, " Number of days ahead the user is able to book ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div")(18, "label", 82);
    \u0275\u0275text(19, "Force Host");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-form-field", 10);
    \u0275\u0275element(21, "input", 83);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(22, "mat-hint");
    \u0275\u0275text(23, " Force host of room bookings to be this user ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-error");
    \u0275\u0275text(25, "Invalid email address");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div")(27, "label", 84);
    \u0275\u0275text(28, " Max Duration ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-form-field", 10)(30, "mat-select", 81);
    \u0275\u0275repeaterCreate(31, WorkplaceSettingsFormModalComponent_Conditional_165_For_32_Template, 2, 2, "mat-option", 36, _forTrack05);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(33, "mat-hint");
    \u0275\u0275text(34, " Max duration for single day bookings ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 32)(36, "div")(37, "label", 85);
    \u0275\u0275text(38, " Default Setup Duration ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "mat-form-field", 10)(40, "mat-select", 86);
    \u0275\u0275repeaterCreate(41, WorkplaceSettingsFormModalComponent_Conditional_165_For_42_Template, 2, 2, "mat-option", 36, _forTrack05);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div")(44, "label", 87);
    \u0275\u0275text(45, " Default Breakdown Duration ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "mat-form-field", 10)(47, "mat-select", 88);
    \u0275\u0275repeaterCreate(48, WorkplaceSettingsFormModalComponent_Conditional_165_For_49_Template, 2, 2, "mat-option", 36, _forTrack05);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "div")(51, "label", 89);
    \u0275\u0275text(52, " Cache Period ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "mat-form-field", 10)(54, "mat-select", 81);
    \u0275\u0275repeaterCreate(55, WorkplaceSettingsFormModalComponent_Conditional_165_For_56_Template, 2, 2, "mat-option", 36, _forTrack05);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(57, "mat-hint");
    \u0275\u0275text(58, " Number of days ahead to grab bookings from the room driver ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(59, "div", 90)(60, "div")(61, "label", 91);
    \u0275\u0275text(62, " Bookable Start ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "mat-form-field", 10)(64, "mat-select", 92);
    \u0275\u0275repeaterCreate(65, WorkplaceSettingsFormModalComponent_Conditional_165_For_66_Template, 2, 2, "mat-option", 36, _forTrack05);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div")(68, "label", 93);
    \u0275\u0275text(69, " Bookable End ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "mat-form-field", 10)(71, "mat-select", 92);
    \u0275\u0275repeaterCreate(72, WorkplaceSettingsFormModalComponent_Conditional_165_For_73_Template, 2, 2, "mat-option", 36, _forTrack05);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(74, "div", 55);
    \u0275\u0275element(75, "settings-toggle", 94);
    \u0275\u0275controlCreate();
    \u0275\u0275element(76, "settings-toggle", 95);
    \u0275\u0275controlCreate();
    \u0275\u0275element(77, "settings-toggle", 96);
    \u0275\u0275controlCreate();
    \u0275\u0275element(78, "settings-toggle", 97);
    \u0275\u0275controlCreate();
    \u0275\u0275element(79, "settings-toggle", 98);
    \u0275\u0275controlCreate();
    \u0275\u0275element(80, "settings-toggle", 99);
    \u0275\u0275controlCreate();
    \u0275\u0275element(81, "settings-toggle", 100);
    \u0275\u0275controlCreate();
    \u0275\u0275element(82, "settings-toggle", 101);
    \u0275\u0275controlCreate();
    \u0275\u0275element(83, "settings-toggle", 102);
    \u0275\u0275controlCreate();
    \u0275\u0275element(84, "settings-toggle", 103);
    \u0275\u0275controlCreate();
    \u0275\u0275element(85, "settings-toggle", 104);
    \u0275\u0275controlCreate();
    \u0275\u0275element(86, "settings-toggle", 105);
    \u0275\u0275controlCreate();
    \u0275\u0275element(87, "settings-toggle", 106);
    \u0275\u0275controlCreate();
    \u0275\u0275element(88, "settings-toggle", 107);
    \u0275\u0275controlCreate();
    \u0275\u0275element(89, "settings-toggle", 108);
    \u0275\u0275controlCreate();
    \u0275\u0275element(90, "settings-toggle", 109);
    \u0275\u0275controlCreate();
    \u0275\u0275element(91, "settings-toggle", 110);
    \u0275\u0275controlCreate();
    \u0275\u0275element(92, "settings-toggle", 111);
    \u0275\u0275controlCreate();
    \u0275\u0275element(93, "settings-toggle", 112);
    \u0275\u0275controlCreate();
    \u0275\u0275element(94, "settings-toggle", 113);
    \u0275\u0275controlCreate();
    \u0275\u0275element(95, "settings-toggle", 114);
    \u0275\u0275controlCreate();
    \u0275\u0275element(96, "settings-toggle", 115);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "div", 90)(98, "div")(99, "label", 116);
    \u0275\u0275text(100, " All Day Start ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "mat-form-field", 10)(102, "mat-select", 81);
    \u0275\u0275repeaterCreate(103, WorkplaceSettingsFormModalComponent_Conditional_165_For_104_Template, 2, 2, "mat-option", 36, _forTrack05);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(105, "div")(106, "label", 117);
    \u0275\u0275text(107, " All Day End ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "mat-form-field", 10)(109, "mat-select", 81);
    \u0275\u0275repeaterCreate(110, WorkplaceSettingsFormModalComponent_Conditional_165_For_111_Template, 2, 2, "mat-option", 36, _forTrack05);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.shown_group() === "spaces" ? "chevron_left" : "keyboard_arrow_down");
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx_r3.shown_group() === "spaces");
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r3.form.events.allowed_future_days);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.AVAILABLE_PERIOD_EXTENDED);
    \u0275\u0275advance(8);
    \u0275\u0275property("formField", ctx_r3.form.events.force_host);
    \u0275\u0275control();
    \u0275\u0275advance(9);
    \u0275\u0275property("formField", ctx_r3.form.events.max_duration);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.MAX_DURATION_FULL);
    \u0275\u0275advance(9);
    \u0275\u0275property("formField", ctx_r3.form.events.setup);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.SETUP_BREAKDOWN);
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r3.form.events.breakdown);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.SETUP_BREAKDOWN);
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r3.form.events.cache_duration_in_days);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.CACHE_DURATION);
    \u0275\u0275advance(9);
    \u0275\u0275property("formField", ctx_r3.form.events.bookable_hours.start);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.BOOKABLE_HOUR_START);
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r3.form.events.bookable_hours.end);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.BOOKABLE_HOUR_END);
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r3.form.events.allow_all_day);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.events.all_day_default);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.events.booking_unavailable);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.events.can_book_for_others);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.events.can_book_for_anyone);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.events.has_assets);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.events.hide_user_actions);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.events.multiple_spaces);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.events.room_as_host);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.events.allow_externals);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.events.strict_capacity_check);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.events.allow_visibility);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.events.hide_notes);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.events.hide_attendees);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.events.hide_nearby_desks);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.events.allow_recurrence);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.events.allow_multiday);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.events.use_bookings);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.events.use_building_timezone);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.events.allow_daily_allday_recurrence);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.events.no_standalone);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.events.hide_end_time);
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r3.form.events.all_day_period.start);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.BLOCK_START);
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r3.form.events.all_day_period.end);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.BLOCK_END);
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_166_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r16 = ctx.$implicit;
    \u0275\u0275property("value", opt_r16.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r16.label);
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_166_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r17 = ctx.$implicit;
    \u0275\u0275property("value", opt_r17.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r17.label);
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_166_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r18 = ctx.$implicit;
    \u0275\u0275property("value", opt_r18.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r18.label);
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_166_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r19 = ctx.$implicit;
    \u0275\u0275property("value", opt_r19.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r19.label);
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_166_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 72)(1, "h3", 31);
    \u0275\u0275text(2, " Desk Bookings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 77);
    \u0275\u0275listener("click", function WorkplaceSettingsFormModalComponent_Conditional_166_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleGroup("desks"));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 78)(7, "div", 79)(8, "div")(9, "label", 84);
    \u0275\u0275text(10, " Max Duration ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 10)(12, "mat-select", 81);
    \u0275\u0275repeaterCreate(13, WorkplaceSettingsFormModalComponent_Conditional_166_For_14_Template, 2, 2, "mat-option", 36, _forTrack05);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div")(16, "label", 80);
    \u0275\u0275text(17, " Available Period ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "mat-form-field", 10)(19, "mat-select", 81);
    \u0275\u0275repeaterCreate(20, WorkplaceSettingsFormModalComponent_Conditional_166_For_21_Template, 2, 2, "mat-option", 36, _forTrack05);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(22, "mat-hint");
    \u0275\u0275text(23, " Number of days ahead the user is able to book ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 90)(25, "div")(26, "label", 118);
    \u0275\u0275text(27, " Bookable Start ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-form-field", 10)(29, "mat-select", 81);
    \u0275\u0275repeaterCreate(30, WorkplaceSettingsFormModalComponent_Conditional_166_For_31_Template, 2, 2, "mat-option", 36, _forTrack05);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div")(33, "label", 119);
    \u0275\u0275text(34, " Bookable End ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "mat-form-field", 10)(36, "mat-select", 81);
    \u0275\u0275repeaterCreate(37, WorkplaceSettingsFormModalComponent_Conditional_166_For_38_Template, 2, 2, "mat-option", 36, _forTrack05);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 55);
    \u0275\u0275element(40, "settings-toggle", 94);
    \u0275\u0275controlCreate();
    \u0275\u0275element(41, "settings-toggle", 95);
    \u0275\u0275controlCreate();
    \u0275\u0275element(42, "settings-toggle", 120);
    \u0275\u0275controlCreate();
    \u0275\u0275element(43, "settings-toggle", 121);
    \u0275\u0275controlCreate();
    \u0275\u0275element(44, "settings-toggle", 122);
    \u0275\u0275controlCreate();
    \u0275\u0275element(45, "settings-toggle", 123);
    \u0275\u0275controlCreate();
    \u0275\u0275element(46, "settings-toggle", 124);
    \u0275\u0275controlCreate();
    \u0275\u0275element(47, "settings-toggle", 125);
    \u0275\u0275controlCreate();
    \u0275\u0275element(48, "settings-toggle", 126);
    \u0275\u0275controlCreate();
    \u0275\u0275element(49, "settings-toggle", 127);
    \u0275\u0275controlCreate();
    \u0275\u0275element(50, "settings-toggle", 128);
    \u0275\u0275controlCreate();
    \u0275\u0275element(51, "settings-toggle", 129);
    \u0275\u0275controlCreate();
    \u0275\u0275element(52, "settings-toggle", 130);
    \u0275\u0275controlCreate();
    \u0275\u0275element(53, "settings-toggle", 131);
    \u0275\u0275controlCreate();
    \u0275\u0275element(54, "settings-toggle", 115);
    \u0275\u0275controlCreate();
    \u0275\u0275element(55, "settings-toggle", 112);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.shown_group() === "desks" ? "chevron_left" : "keyboard_arrow_down");
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx_r3.shown_group() === "desks");
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r3.form.desks.max_duration);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.MAX_DURATION_SHORT);
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r3.form.desks.available_period);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.AVAILABLE_PERIOD_EXTENDED);
    \u0275\u0275advance(9);
    \u0275\u0275property("formField", ctx_r3.form.desks.bookable_hours.start);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.BOOKABLE_HOUR_START);
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r3.form.desks.bookable_hours.end);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.BOOKABLE_HOUR_END);
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r3.form.desks.allow_all_day);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.desks.all_day_default);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.desks.allow_groups);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.desks.allow_time_changes);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.desks.auto_allocation);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.desks.can_book_for_others);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.desks.can_book_lockers);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.desks.has_assets);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.desks.allow_recurrence);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.desks.auto_checkin);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.desks.default_select_as_map);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.desks.show_calendar_links);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.desks.height_enabled);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.desks.hide_checkin);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.desks.hide_end_time);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.desks.use_building_timezone);
    \u0275\u0275control();
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_167_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r21 = ctx.$implicit;
    \u0275\u0275property("value", opt_r21.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r21.label);
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_167_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r22 = ctx.$implicit;
    \u0275\u0275property("value", opt_r22.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r22.label);
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_167_For_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r23 = ctx.$implicit;
    \u0275\u0275property("value", opt_r23.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r23.label);
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_167_For_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r24 = ctx.$implicit;
    \u0275\u0275property("value", opt_r24.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r24.label);
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_167_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 73)(1, "h3", 31);
    \u0275\u0275text(2, " PlaceOS Bookings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 77);
    \u0275\u0275listener("click", function WorkplaceSettingsFormModalComponent_Conditional_167_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleGroup("bookings"));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 78)(7, "div", 79)(8, "div", 90)(9, "div")(10, "label", 132);
    \u0275\u0275text(11, " Bookable Start ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-form-field", 10)(13, "mat-select", 81);
    \u0275\u0275repeaterCreate(14, WorkplaceSettingsFormModalComponent_Conditional_167_For_15_Template, 2, 2, "mat-option", 36, _forTrack05);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "label", 133);
    \u0275\u0275text(18, " Bookable End ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-form-field", 10)(20, "mat-select", 81);
    \u0275\u0275repeaterCreate(21, WorkplaceSettingsFormModalComponent_Conditional_167_For_22_Template, 2, 2, "mat-option", 36, _forTrack05);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 55);
    \u0275\u0275element(24, "settings-toggle", 94);
    \u0275\u0275controlCreate();
    \u0275\u0275element(25, "settings-toggle", 95);
    \u0275\u0275controlCreate();
    \u0275\u0275element(26, "settings-toggle", 112);
    \u0275\u0275controlCreate();
    \u0275\u0275element(27, "settings-toggle", 97);
    \u0275\u0275controlCreate();
    \u0275\u0275element(28, "settings-toggle", 134);
    \u0275\u0275controlCreate();
    \u0275\u0275element(29, "settings-toggle", 135);
    \u0275\u0275controlCreate();
    \u0275\u0275element(30, "settings-toggle", 99);
    \u0275\u0275controlCreate();
    \u0275\u0275elementContainerStart(31);
    \u0275\u0275element(32, "settings-toggle", 136);
    \u0275\u0275controlCreate();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(33);
    \u0275\u0275element(34, "settings-toggle", 137);
    \u0275\u0275controlCreate();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 90)(36, "div")(37, "label", 138);
    \u0275\u0275text(38, " All Day Start ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "mat-form-field", 10)(40, "mat-select", 92);
    \u0275\u0275repeaterCreate(41, WorkplaceSettingsFormModalComponent_Conditional_167_For_42_Template, 2, 2, "mat-option", 36, _forTrack05);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div")(44, "label", 139);
    \u0275\u0275text(45, " All Day End ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "mat-form-field", 10)(47, "mat-select", 92);
    \u0275\u0275repeaterCreate(48, WorkplaceSettingsFormModalComponent_Conditional_167_For_49_Template, 2, 2, "mat-option", 36, _forTrack05);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.shown_group() === "bookings" ? "chevron_left" : "keyboard_arrow_down");
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx_r3.shown_group() === "bookings");
    \u0275\u0275advance(7);
    \u0275\u0275property("formField", ctx_r3.form.bookings.bookable_hours.start);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.BOOKABLE_HOUR_START);
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r3.form.bookings.bookable_hours.end);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.BOOKABLE_HOUR_END);
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r3.form.bookings.allow_all_day);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.bookings.all_day_default);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.bookings.use_building_timezone);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.bookings.can_book_for_others);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.bookings.multiple_visitors);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.bookings.no_approval);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.bookings.allow_assets);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r3.form.visitors.show_calendar_links);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r3.form.visitors.allow_international);
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r3.form.bookings.all_day_period.start);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.BLOCK_START);
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r3.form.bookings.all_day_period.end);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.BLOCK_END);
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_168_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r26 = ctx.$implicit;
    \u0275\u0275property("value", opt_r26.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r26.label);
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_168_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r27 = ctx.$implicit;
    \u0275\u0275property("value", opt_r27.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r27.label);
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_168_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r28 = ctx.$implicit;
    \u0275\u0275property("value", opt_r28.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r28.label);
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_168_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r29 = ctx.$implicit;
    \u0275\u0275property("value", opt_r29.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r29.label);
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_168_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r30 = ctx.$implicit;
    \u0275\u0275property("value", opt_r30.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r30.label);
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_168_Conditional_45_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 157)(1, "div", 159)(2, "mat-form-field", 5)(3, "input", 160);
    \u0275\u0275twoWayListener("ngModelChange", function WorkplaceSettingsFormModalComponent_Conditional_168_Conditional_45_For_4_Template_input_ngModelChange_3_listener($event) {
      const item_r33 = \u0275\u0275restoreView(_r32).$implicit;
      \u0275\u0275twoWayBindingSet(item_r33[0], $event) || (item_r33[0] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 161)(5, "input", 162);
    \u0275\u0275twoWayListener("ngModelChange", function WorkplaceSettingsFormModalComponent_Conditional_168_Conditional_45_For_4_Template_input_ngModelChange_5_listener($event) {
      const item_r33 = \u0275\u0275restoreView(_r32).$implicit;
      \u0275\u0275twoWayBindingSet(item_r33[1], $event) || (item_r33[1] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 163);
    \u0275\u0275listener("click", function WorkplaceSettingsFormModalComponent_Conditional_168_Conditional_45_For_4_Template_button_click_6_listener() {
      const \u0275$index_787_r34 = \u0275\u0275restoreView(_r32).$index;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.removeLegend(\u0275$index_787_r34));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r33 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", item_r33[0]);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(4, _c04));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", item_r33[1]);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(5, _c04));
    \u0275\u0275control();
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_168_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 149)(1, "h3", 31);
    \u0275\u0275text(2, " Legend ");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, WorkplaceSettingsFormModalComponent_Conditional_168_Conditional_45_For_4_Template, 9, 6, "div", 157, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(5, "button", 158);
    \u0275\u0275listener("click", function WorkplaceSettingsFormModalComponent_Conditional_168_Conditional_45_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.addLegend());
    });
    \u0275\u0275text(6, " Add Legend Item ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.model().explore.legend || \u0275\u0275pureFunction0(0, _c7));
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_168_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 74)(1, "h3", 31);
    \u0275\u0275text(2, " PlaceOS Maps ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 77);
    \u0275\u0275listener("click", function WorkplaceSettingsFormModalComponent_Conditional_168_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleGroup("explore"));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 78)(7, "div", 79)(8, "div")(9, "label", 140);
    \u0275\u0275text(10, " Disabled Features ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 10)(12, "mat-select", 141);
    \u0275\u0275repeaterCreate(13, WorkplaceSettingsFormModalComponent_Conditional_168_For_14_Template, 2, 2, "mat-option", 36, _forTrack05);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 32)(16, "div", 33)(17, "label", 142);
    \u0275\u0275text(18, " Disabled Feature Actions ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-form-field", 10)(20, "mat-select", 143);
    \u0275\u0275repeaterCreate(21, WorkplaceSettingsFormModalComponent_Conditional_168_For_22_Template, 2, 2, "mat-option", 36, _forTrack05);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 33)(24, "label", 80);
    \u0275\u0275text(25, " Disabled Feature Labels ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-form-field", 10)(27, "mat-select", 144);
    \u0275\u0275repeaterCreate(28, WorkplaceSettingsFormModalComponent_Conditional_168_For_29_Template, 2, 2, "mat-option", 36, _forTrack05);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 32)(31, "div", 33)(32, "label", 145);
    \u0275\u0275text(33, " Disabled Feature Displays ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "mat-form-field", 10)(35, "mat-select", 146);
    \u0275\u0275repeaterCreate(36, WorkplaceSettingsFormModalComponent_Conditional_168_For_37_Template, 2, 2, "mat-option", 36, _forTrack05);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 33)(39, "label", 147);
    \u0275\u0275text(40, " Disabled Feature Styles ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "mat-form-field", 10)(42, "mat-select", 148);
    \u0275\u0275repeaterCreate(43, WorkplaceSettingsFormModalComponent_Conditional_168_For_44_Template, 2, 2, "mat-option", 36, _forTrack05);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(45, WorkplaceSettingsFormModalComponent_Conditional_168_Conditional_45_Template, 7, 1, "div", 149);
    \u0275\u0275elementStart(46, "div", 55);
    \u0275\u0275element(47, "settings-toggle", 150);
    \u0275\u0275controlCreate();
    \u0275\u0275element(48, "settings-toggle", 151);
    \u0275\u0275controlCreate();
    \u0275\u0275element(49, "settings-toggle", 152);
    \u0275\u0275controlCreate();
    \u0275\u0275element(50, "settings-toggle", 153);
    \u0275\u0275controlCreate();
    \u0275\u0275element(51, "settings-toggle", 154);
    \u0275\u0275controlCreate();
    \u0275\u0275element(52, "settings-toggle", 155);
    \u0275\u0275controlCreate();
    \u0275\u0275element(53, "settings-toggle", 156);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.shown_group() === "explore" ? "chevron_left" : "keyboard_arrow_down");
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx_r3.shown_group() === "explore");
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r3.form.explore.disable);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.EXPLORE_FEATURE);
    \u0275\u0275advance(7);
    \u0275\u0275property("formField", ctx_r3.form.explore.disable_actions);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.EXPLORE_FEATURE);
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r3.form.explore.disable_labels);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.EXPLORE_FEATURE);
    \u0275\u0275advance(7);
    \u0275\u0275property("formField", ctx_r3.form.explore.disable_features);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.EXPLORE_FEATURE);
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r3.form.explore.disable_styles);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.EXPLORE_FEATURE);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.model().explore?.show_legend ? 45 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r3.form.explore.hide_device_fields);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.explore.show_legend);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.explore.hide_zones);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.explore.show_booking_qr);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.explore.use_zone_polygons);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.explore.show_zone_labels);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.explore.show_zone_sensor_info);
    \u0275\u0275control();
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_169_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r36 = ctx.$implicit;
    \u0275\u0275property("value", opt_r36.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r36.label);
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_169_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r37 = ctx.$implicit;
    \u0275\u0275property("value", opt_r37.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r37.label);
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_169_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r38 = ctx.$implicit;
    \u0275\u0275property("value", opt_r38.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r38.label);
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_169_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r39 = ctx.$implicit;
    \u0275\u0275property("value", opt_r39.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r39.label);
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_169_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 75)(1, "h3", 31);
    \u0275\u0275text(2, " Parking Bookings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 77);
    \u0275\u0275listener("click", function WorkplaceSettingsFormModalComponent_Conditional_169_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleGroup("parking"));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 78)(7, "div", 79)(8, "div")(9, "label", 84);
    \u0275\u0275text(10, " Max Duration ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 10)(12, "mat-select", 81);
    \u0275\u0275repeaterCreate(13, WorkplaceSettingsFormModalComponent_Conditional_169_For_14_Template, 2, 2, "mat-option", 36, _forTrack05);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div")(16, "label", 80);
    \u0275\u0275text(17, " Available Period ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "mat-form-field", 10)(19, "mat-select", 81);
    \u0275\u0275repeaterCreate(20, WorkplaceSettingsFormModalComponent_Conditional_169_For_21_Template, 2, 2, "mat-option", 36, _forTrack05);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(22, "mat-hint");
    \u0275\u0275text(23, " Number of days ahead the user is able to book ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 90)(25, "div")(26, "label", 164);
    \u0275\u0275text(27, " Bookable Start ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-form-field", 10)(29, "mat-select", 81);
    \u0275\u0275repeaterCreate(30, WorkplaceSettingsFormModalComponent_Conditional_169_For_31_Template, 2, 2, "mat-option", 36, _forTrack05);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div")(33, "label", 165);
    \u0275\u0275text(34, " Bookable End ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "mat-form-field", 10)(36, "mat-select", 81);
    \u0275\u0275repeaterCreate(37, WorkplaceSettingsFormModalComponent_Conditional_169_For_38_Template, 2, 2, "mat-option", 36, _forTrack05);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 55);
    \u0275\u0275element(40, "settings-toggle", 94);
    \u0275\u0275controlCreate();
    \u0275\u0275element(41, "settings-toggle", 95);
    \u0275\u0275controlCreate();
    \u0275\u0275element(42, "settings-toggle", 166);
    \u0275\u0275controlCreate();
    \u0275\u0275element(43, "settings-toggle", 167);
    \u0275\u0275controlCreate();
    \u0275\u0275element(44, "settings-toggle", 168);
    \u0275\u0275controlCreate();
    \u0275\u0275element(45, "settings-toggle", 169);
    \u0275\u0275controlCreate();
    \u0275\u0275element(46, "settings-toggle", 97);
    \u0275\u0275controlCreate();
    \u0275\u0275element(47, "settings-toggle", 170);
    \u0275\u0275controlCreate();
    \u0275\u0275element(48, "settings-toggle", 171);
    \u0275\u0275controlCreate();
    \u0275\u0275element(49, "settings-toggle", 112);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.shown_group() === "parking" ? "chevron_left" : "keyboard_arrow_down");
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx_r3.shown_group() === "parking");
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r3.form.parking.max_duration);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.MAX_DURATION_SHORT);
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r3.form.parking.available_period);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.AVAILABLE_PERIOD_EXTENDED);
    \u0275\u0275advance(9);
    \u0275\u0275property("formField", ctx_r3.form.parking.bookable_hours.start);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.BOOKABLE_HOUR_START);
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r3.form.parking.bookable_hours.end);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.BOOKABLE_HOUR_END);
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r3.form.parking.allow_all_day);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.parking.all_day_default);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.parking.show_users);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.parking.show_status_details);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.parking.allow_time_changes);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.parking.auto_allocation);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.parking.can_book_for_others);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.parking.allow_recurrence);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.parking.hide_end_time);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.parking.use_building_timezone);
    \u0275\u0275control();
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_170_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r41 = ctx.$implicit;
    \u0275\u0275property("value", opt_r41.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r41.label);
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_170_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r42 = ctx.$implicit;
    \u0275\u0275property("value", opt_r42.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r42.label);
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_170_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r43 = ctx.$implicit;
    \u0275\u0275property("value", opt_r43.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r43.label);
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_170_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 76)(1, "h3", 31);
    \u0275\u0275text(2, " Locker Bookings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 77);
    \u0275\u0275listener("click", function WorkplaceSettingsFormModalComponent_Conditional_170_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r40);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleGroup("lockers"));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 78)(7, "div", 79)(8, "div")(9, "label", 84);
    \u0275\u0275text(10, " Max Duration ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 10)(12, "mat-select", 81);
    \u0275\u0275repeaterCreate(13, WorkplaceSettingsFormModalComponent_Conditional_170_For_14_Template, 2, 2, "mat-option", 36, _forTrack05);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 90)(16, "div")(17, "label", 172);
    \u0275\u0275text(18, " Bookable Start ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-form-field", 10)(20, "mat-select", 81);
    \u0275\u0275repeaterCreate(21, WorkplaceSettingsFormModalComponent_Conditional_170_For_22_Template, 2, 2, "mat-option", 36, _forTrack05);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div")(24, "label", 173);
    \u0275\u0275text(25, " Bookable End ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-form-field", 10)(27, "mat-select", 81);
    \u0275\u0275repeaterCreate(28, WorkplaceSettingsFormModalComponent_Conditional_170_For_29_Template, 2, 2, "mat-option", 36, _forTrack05);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 55);
    \u0275\u0275element(31, "settings-toggle", 94);
    \u0275\u0275controlCreate();
    \u0275\u0275element(32, "settings-toggle", 95);
    \u0275\u0275controlCreate();
    \u0275\u0275element(33, "settings-toggle", 174);
    \u0275\u0275controlCreate();
    \u0275\u0275element(34, "settings-toggle", 171);
    \u0275\u0275controlCreate();
    \u0275\u0275element(35, "settings-toggle", 168);
    \u0275\u0275controlCreate();
    \u0275\u0275element(36, "settings-toggle", 112);
    \u0275\u0275controlCreate();
    \u0275\u0275element(37, "settings-toggle", 175);
    \u0275\u0275controlCreate();
    \u0275\u0275element(38, "settings-toggle", 176);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.shown_group() === "lockers" ? "chevron_left" : "keyboard_arrow_down");
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx_r3.shown_group() === "lockers");
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r3.form.lockers.max_duration);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.MAX_DURATION_SHORT);
    \u0275\u0275advance(7);
    \u0275\u0275property("formField", ctx_r3.form.lockers.bookable_hours.start);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.BOOKABLE_HOUR_START);
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r3.form.lockers.bookable_hours.end);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.BOOKABLE_HOUR_END);
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r3.form.lockers.allow_all_day);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.lockers.all_day_default);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.lockers.show_calendar_links);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.lockers.hide_end_time);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.lockers.allow_time_changes);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.lockers.use_building_timezone);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.lockers.disabled_date_select);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.lockers.disabled_start_time);
    \u0275\u0275control();
  }
}
var WorkplaceSettingsFormModalComponent = class _WorkplaceSettingsFormModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this.heading = signal(
      "",
      ...ngDevMode ? [{ debugName: "heading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.existing_settings = {};
    this.old_settings = {};
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.shown_group = signal(
      "",
      ...ngDevMode ? [{ debugName: "shown_group" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.currency_filter = signal(
      "",
      ...ngDevMode ? [{ debugName: "currency_filter" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.currency_options = buildCurrencyOptions();
    this.filtered_currency_options = computed(
      () => {
        const filter_text = this.currency_filter().trim().toLowerCase();
        if (!filter_text)
          return this.currency_options;
        return this.currency_options.filter((option) => option.search_text.includes(filter_text));
      },
      ...ngDevMode ? [{ debugName: "filtered_currency_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.zone = this._data.zone;
    this.settings_key = this._settings.get("app.workplace_metadata_key") || "workplace_app";
    this.AVAILABLE_PERIOD_EXTENDED = AVAILABLE_PERIOD_EXTENDED_OPTIONS;
    this.BLOCK_START = BLOCK_START_OPTIONS;
    this.BLOCK_END = BLOCK_END_OPTIONS;
    this.BOOKABLE_HOUR_START = BOOKABLE_HOUR_START_OPTIONS;
    this.BOOKABLE_HOUR_END = BOOKABLE_HOUR_END_OPTIONS;
    this.MAX_DURATION_FULL = MAX_DURATION_FULL_OPTIONS;
    this.MAX_DURATION_SHORT = MAX_DURATION_SHORT_OPTIONS;
    this.WEEK_START = WEEK_START_OPTIONS;
    this.SETUP_BREAKDOWN = SETUP_BREAKDOWN_OPTIONS;
    this.CACHE_DURATION = CACHE_DURATION_OPTIONS;
    this.EXPLORE_FEATURE = EXPLORE_FEATURE_OPTIONS;
    this.BANNER_TYPE = BANNER_TYPE_OPTIONS;
    this.model = signal(
      {
        logo_light: "",
        logo_dark: "",
        banner: {},
        features: [],
        feature_groups: {},
        use_24_hour_time: false,
        use_region: false,
        default_route: "",
        allow_support_ticket_images: false,
        basic_user_search: false,
        hide_contacts: false,
        colleagues_require_auth: false,
        no_user_calendar: false,
        hide_landing_sidebar: false,
        hide_landing_spaces: false,
        hide_landing_rooms: false,
        hide_colleagues: false,
        show_quick_links: false,
        show_quick_book: false,
        allow_dark_mode: true,
        show_changelog: true,
        global_search: true,
        use_imperial_units: false,
        external_support_url: "",
        support_email: "",
        catering_provider: "",
        currency: "USD",
        departments: {},
        week_start: 0,
        locales: [],
        hide_global_search_items: [],
        events: {
          allow_all_day: false,
          all_day_period: {
            start: null,
            end: null
          },
          bookable_hours: {
            start: null,
            end: null
          },
          booking_unavailable: false,
          can_book_for_others: false,
          can_book_for_anyone: false,
          has_assets: false,
          hide_user_actions: false,
          multiple_spaces: false,
          room_as_host: false,
          allow_externals: false,
          strict_capacity_check: false,
          hide_notes: false,
          hide_attendees: false,
          hide_nearby_desks: false,
          allow_recurrence: false,
          all_day_default: false,
          allow_multiday: false,
          use_bookings: false,
          allow_visibility: false,
          use_building_timezone: false,
          force_host: "",
          allow_daily_allday_recurrence: false,
          no_standalone: false,
          allowed_future_days: 45,
          setup: 0,
          breakdown: 0,
          max_duration: 360,
          cache_duration_in_days: 14,
          idle_timeout: 5,
          hide_end_time: false
        },
        bookings: {
          allow_all_day: false,
          all_day_period: {
            start: null,
            end: null
          },
          bookable_hours: {
            start: null,
            end: null
          },
          all_day_default: false,
          use_building_timezone: false,
          allow_assets: false,
          no_approval: false,
          can_book_for_others: false,
          multiple_visitors: false,
          hide_end_time: false
        },
        desks: {
          allow_all_day: false,
          bookable_hours: {
            start: null,
            end: null
          },
          all_day_default: false,
          allow_groups: false,
          allow_time_changes: false,
          auto_allocation: false,
          can_book_for_others: false,
          can_book_lockers: false,
          has_assets: false,
          hide_reason: false,
          needs_reason: false,
          allow_recurrence: false,
          default_select_as_map: false,
          show_calendar_links: false,
          auto_checkin: false,
          available_period: 14,
          max_duration: 480,
          use_building_timezone: false,
          hide_map: false,
          height_enabled: false,
          hide_checkin: false,
          hide_end_time: false
        },
        parking: {
          allow_all_day: false,
          bookable_hours: {
            start: null,
            end: null
          },
          all_day_default: false,
          show_users: false,
          show_status_details: true,
          allow_time_changes: false,
          auto_allocation: false,
          can_book_for_others: false,
          allow_recurrence: false,
          default_select_as_map: false,
          show_calendar_links: false,
          auto_checkin: false,
          available_period: 14,
          max_duration: 480,
          use_building_timezone: false,
          hide_end_time: false
        },
        lockers: {
          allow_all_day: false,
          bookable_hours: {
            start: null,
            end: null
          },
          all_day_default: false,
          show_calendar_links: false,
          allow_time_changes: false,
          use_building_timezone: false,
          max_duration: 480,
          hide_end_time: false,
          disabled_start_time: false,
          disabled_date_select: false
        },
        visitors: {
          all_day_default: false,
          bookable_hours: {
            start: null,
            end: null
          },
          show_calendar_links: false,
          allow_international: false
        },
        explore: {
          hide_device_fields: false,
          show_legend: false,
          hide_zones: false,
          legend: [],
          colors: {},
          show_booking_qr: false,
          disable: [],
          disable_actions: [],
          disable_labels: [],
          disable_features: [],
          disable_styles: [],
          use_zone_polygons: false,
          area_count_key: "count",
          show_zone_labels: false,
          show_zone_sensor_info: false
        }
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (p) => {
      validate(p.external_support_url, ({ value }) => value() && !isValidUrl(value()) ? { kind: "url" } : void 0);
      validate(p.support_email, ({ value }) => value() && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value()) ? { kind: "email" } : void 0);
      validate(p.events.force_host, ({ value }) => value() && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value()) ? { kind: "email" } : void 0);
    });
  }
  get date_string() {
    return format(Date.now(), "yyyy-MM-dd+HH");
  }
  async ngOnInit() {
    const zone = this._data.zone;
    this.loading.set("Loading existing settings...");
    this._patchModel(DEFAULT_SETTINGS3.app);
    this.heading.set(`Workplace Settings <div class="font-mono text-xs px-2 py-1 rounded bg-base-300 ml-2">${this.zone.display_name || this.zone.name || "Organisation"}</div>`);
    const org_id = this._org.organisation.id;
    const org_metadata = await this._getMetadata(org_id);
    const parent_metadata = org_id !== zone.parent_id ? await this._getMetadata(zone.parent_id) : {};
    const metadata = await this._getMetadata(zone.id);
    this.existing_settings = __spreadValues(__spreadValues(__spreadValues({}, DEFAULT_SETTINGS3.app), org_metadata), parent_metadata);
    this._patchModel(org_metadata || {});
    this._patchModel(parent_metadata || {});
    this._patchModel(metadata || {});
    this.old_settings = metadata;
    this.loading.set("");
  }
  toggleGroup(group) {
    this.shown_group.update((shown) => group === shown ? "" : group);
  }
  updateCurrencyFilter(value) {
    this.currency_filter.set((value || "").trim());
  }
  onCurrencySelectStateChange(is_open) {
    if (!is_open) {
      this.currency_filter.set("");
    }
  }
  async save() {
    this.loading.set("Saving settings...");
    const zone = this._data.zone;
    const form_value = this.model();
    const new_settings = __spreadValues({}, this.old_settings);
    for (const key in form_value) {
      if (form_value[key] instanceof Array) {
        new_settings[key] = form_value[key];
      } else if (form_value[key] instanceof Object) {
        new_settings[key] = __spreadValues(__spreadValues({}, this.existing_settings[key] || {}), form_value[key]);
      } else {
        new_settings[key] = form_value[key];
      }
    }
    for (const key in new_settings) {
      if (!this._isValid(new_settings[key], this.existing_settings[key])) {
        delete new_settings[key];
      } else if (new_settings[key] instanceof Object && !(new_settings[key] instanceof Array) && this.existing_settings[key]) {
        for (const sub_key in new_settings[key]) {
          if (!this._isValid(new_settings[key][sub_key], this.existing_settings[key][sub_key])) {
            delete new_settings[key][sub_key];
          }
        }
      }
    }
    const user = currentUser();
    new_settings.edited_by = {
      id: user.id,
      name: user.name,
      email: user.email,
      domain: location.hostname,
      role: user.groups.includes("placeos_admin") ? "Admin" : user.groups.includes("placeos_support") ? "Support" : "User"
    };
    try {
      await Qu(zone.id, {
        name: `${this.settings_key}`,
        details: new_settings,
        description: `[${VERSION.hash}|C] Workplace Application Settings`
      });
    } catch (e) {
      console.error(e);
      this.loading.set("");
      notifyError(`Failed to save settings: ${e.message || e.error || e}`);
      throw e;
    }
    this.loading.set("");
    notifySuccess("Successfully saved workplace app settings");
    this._dialog_ref.close();
  }
  _isValid(new_value, existing_value) {
    return new_value !== "" && new_value !== void 0 && new_value !== null && JSON.stringify(new_value) !== JSON.stringify(existing_value);
  }
  _patchModel(patch) {
    this.model.update((m) => this._mergeInto(m, patch));
  }
  _mergeInto(target, patch) {
    if (!patch || typeof patch !== "object")
      return target;
    const result = __spreadValues({}, target);
    for (const key in patch) {
      if (!(key in result))
        continue;
      const patch_value = patch[key];
      const current_value = result[key];
      if (patch_value && typeof patch_value === "object" && !Array.isArray(patch_value) && current_value && typeof current_value === "object" && !Array.isArray(current_value)) {
        result[key] = this._mergeInto(current_value, patch_value);
      } else if (patch_value !== void 0) {
        result[key] = patch_value;
      }
    }
    return result;
  }
  async _getMetadata(id) {
    const metadata = await Wu(id, this.settings_key);
    return metadata.details;
  }
  addLegend() {
    let legend = this.model().explore?.legend || [];
    if (!(legend instanceof Array))
      legend = [];
    const new_legend = [
      ...legend,
      ["", "#1E88E5"]
    ];
    this.model.update((m) => __spreadProps(__spreadValues({}, m), {
      explore: __spreadProps(__spreadValues({}, m.explore), { legend: new_legend })
    }));
  }
  removeLegend(index) {
    let legend = this.model().explore?.legend || [];
    if (!(legend instanceof Array))
      legend = [];
    if (index >= legend.length)
      return;
    const new_legend = legend.filter((_, i) => i !== index);
    this.model.update((m) => __spreadProps(__spreadValues({}, m), {
      explore: __spreadProps(__spreadValues({}, m.explore), { legend: new_legend })
    }));
  }
  static {
    this.\u0275fac = function WorkplaceSettingsFormModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WorkplaceSettingsFormModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkplaceSettingsFormModalComponent, selectors: [["workplace-settings-form-modal"]], decls: 171, vars: 60, consts: [[3, "confirm", "heading", "loading"], [1, "flex", "flex-col", "space-y-8", "pb-4"], ["general", "", 1, "bg-base-100", "space-y-2", "rounded-sm"], ["for", "logo_light"], [1, "mb-4", "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", 3, "formField"], ["ngModel", "", 3, "ngModelChange", "ngModelOptions"], ["for", "logo_dark"], ["for", "features"], ["appearance", "outline", 1, "w-full"], ["multiple", "", 3, "formField"], ["value", "spaces"], ["value", "desks"], ["value", "explore"], ["value", "parking"], ["value", "visitor-invite"], ["value", "lockers"], ["value", "help"], ["value", "schedule"], ["value", "wfh"], ["value", "support-ticket"], ["value", "group-events"], ["value", "deals-n-offers"], ["value", "mapspeople"], ["value", "emergency_contacts"], ["value", "features"], ["value", "points_of_interest"], ["value", "contacts"], ["value", "users"], [1, "border-base-300", "relative", "rounded-sm", "border", "px-4", "pt-4", "pb-2"], [1, "bg-base-100", "absolute", "top-0", "left-4", "-translate-y-1/2", "rounded-sm", "px-2", "py-1", "font-medium"], [1, "flex", "items-center", "space-x-4"], [1, "flex-1"], ["for", "banner-type"], ["name", "banner-type", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], ["matInput", "", "name", "banner-message", "placeholder", "Banner Message", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["for", "external-support-url"], ["matInput", "", "placeholder", "https://support.com/ticket", 3, "formField"], ["for", "support-email"], ["matInput", "", "placeholder", "support@acme.tech", 3, "formField"], ["for", "default-route"], ["matInput", "", "placeholder", "/landing", 3, "formField"], ["for", "catering-provider"], ["matInput", "", "placeholder", "Catering Provider", 3, "formField"], ["for", "week-start"], ["placeholder", "Sunday", 3, "formField"], ["for", "currency"], ["placeholder", "Select currency code", 3, "openedChange", "formField"], ["disabled", "", 1, "!h-auto", "!py-2"], ["matInput", "", "placeholder", "Search currency code or name", 3, "ngModelChange", "click", "keydown", "ngModel", "ngModelOptions"], ["disabled", ""], ["for", "locales"], ["multiple", "", "placeholder", "Select locales", 3, "formField"], [1, "-mx-2", "flex", "flex-wrap", "items-center"], ["label", "Use 24 hour time", 3, "formField"], ["label", "Use region over building", 3, "formField"], ["label", "Use imperial units for measurements", 3, "formField"], ["label", "Allow images in support tickets", 3, "formField"], ["label", "Search only authenticated users", 3, "formField"], ["label", "Only authenticated colleagues", "info", "Will limit the available users to add as colleagues to only\n those who have authenticated with the application", 3, "formField"], ["label", "Hide landing sidebar", 3, "formField"], ["label", "Hide landing spaces", 3, "formField"], ["label", "Hide landing rooms", 3, "formField"], ["label", "Hide colleagues", 3, "formField"], ["label", "Show landing quick links", 3, "formField"], ["label", "Show landing quick book", 3, "formField"], ["label", "Allow dark mode", 3, "formField"], ["label", "Show changelog link", 3, "formField"], ["label", "Show global search", 3, "formField"], ["events", "", "id", "feature-spaces", 1, "border-base-300", "relative", "rounded-sm", "border"], ["desks", "", "id", "feature-desks", 1, "border-base-300", "relative", "rounded-sm", "border"], ["bookings", "", "id", "feature-bookings", 1, "border-base-300", "relative", "rounded-sm", "border"], ["explore", "", "id", "feature-explore", 1, "border-base-300", "relative", "rounded-sm", "border"], ["parking", "", "id", "feature-parking", 1, "border-base-300", "relative", "rounded-sm", "border"], ["lockers", "", "id", "feature-lockers", 1, "border-base-300", "relative", "rounded-sm", "border"], ["icon", "", "matRipple", "", 1, "bg-base-100", "absolute", "top-0", "right-4", "-translate-y-1/2", 3, "click"], ["collapsible", ""], [1, "content", "px-4", "pt-4", "pb-2"], ["for", "available-period"], [3, "formField"], ["for", "force-host"], ["matInput", "", "placeholder", "global.host@acme.tech", 3, "formField"], ["for", "max-duration"], ["for", "setup"], ["placeholder", "No default setup", 3, "formField"], ["for", "breakdown"], ["placeholder", "No default breakdown", 3, "formField"], ["for", "cache-duration"], [1, "grid", "grid-cols-1", "gap-4", "md:grid-cols-2"], ["for", "events-bookable-start"], ["placeholder", "None", 3, "formField"], ["for", "events-bookable-end"], ["label", "Allow all day bookings", 3, "formField"], ["label", "Default bookings to all day", 3, "formField"], ["label", "Disable booking requests", "info", "Prevent making backend requests for bookings and give users links to create the booking in their own calendars", 3, "formField"], ["label", "Allow booking for other users", 3, "formField"], ["label", "Allow booking for any users", 3, "formField"], ["label", "Allow booking with assets", 3, "formField"], ["label", "Hide attendee actions", 3, "formField"], ["label", "Allow booking multiple spaces", 3, "formField"], ["label", "Force room as host", 3, "formField"], ["label", "Allow external attendees", 3, "formField"], ["label", "Enforce room capacity limits", 3, "formField"], ["label", "Allow Visibility options", 3, "formField"], ["label", "Disable notes field", 3, "formField"], ["label", "Hide attendees field", 3, "formField"], ["label", "Hide nearby desk action", "info", "Hide the book nearby desks button on the meeting success view", 3, "formField"], ["label", "Allow recurring meetings", 3, "formField"], ["label", "Allow multi-day bookings", 3, "formField"], ["label", "Use PlaceOS bookings", 3, "formField"], ["label", "Display times with building timezone", 3, "formField"], ["label", "Allow daily all-day recurrence", 3, "formField"], ["label", "Disable standalone bookings", 3, "formField"], ["label", "Hide End Time option", 3, "formField"], ["for", "events-all-day-start"], ["for", "events-all-day-end"], ["for", "desks-bookable-start"], ["for", "desks-bookable-end"], ["label", "Allow group bookings", 3, "formField"], ["label", "Allow time changes", 3, "formField"], ["label", "Auto-allocation", 3, "formField"], ["label", "Allow booking for others", 3, "formField"], ["label", "Allow also booking a locker", 3, "formField"], ["label", "Allow requesting assets with booking", 3, "formField"], ["label", "Allow Recurring Desk bookings", 3, "formField"], ["label", "Auto-checkin map bookingss", 3, "formField"], ["label", "Default to desk select modal to map view", 3, "formField"], ["label", "Show calendar links after booking", 3, "formField"], ["label", "Enabled desk height", 3, "formField"], ["label", "Hide Checkin Options", 3, "formField"], ["for", "bookings-bookable-start"], ["for", "bookings-bookable-end"], ["label", "Allow booking multiple visitors", 3, "formField"], ["label", "Auto-approve bookings", 3, "formField"], ["label", "Show calendar links after visitor invite", 3, "formField"], ["label", "Allow international flag for visitors", 3, "formField"], ["for", "bookings-all-day-start"], ["for", "bookings-all-day-end"], ["for", "disable"], ["placeholder", "No disabled features", "multiple", "", 3, "formField"], ["for", "disable-actions"], ["placeholder", "No disabled actions", "multiple", "", 3, "formField"], ["placeholder", "No disabled labels", "multiple", "", 3, "formField"], ["for", "disable-features"], ["placeholder", "No disabled displays", "multiple", "", 3, "formField"], ["for", "disable-styles"], ["placeholder", "No disabled styles", "multiple", "", 3, "formField"], [1, "border-base-300", "relative", "rounded-sm", "border", "p-4"], ["label", "Hide device fields", "info", "Hides the MAC address, manufacturer, OS and SSID fields from device info tooltips", 3, "formField"], ["label", "Show Legend", 3, "formField"], ["label", "Hide Zones", 3, "formField"], ["label", "Show Booking QR Code", 3, "formField"], ["label", "Use defined polygons for zones", 3, "formField"], ["label", "Show labels for zones", 3, "formField"], ["label", "Show zone sensor info", 3, "formField"], [1, "mb-4", "flex", "items-center", "space-x-4"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], [1, "w-3/4", "flex-1"], ["matInput", "", "placeholder", "Legend Key", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["matTooltip", "Legend Color", 1, "flex", "w-12", "items-center", "justify-center"], ["type", "color", 1, "border-base-content", "h-11", "rounded-lg", "border", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["icon", "", "matRipple", "", 1, "border-error", "text-error", "h-12", "w-12", "rounded-sm", "border", 3, "click"], ["for", "parking-bookable-start"], ["for", "parking-bookable-end"], ["label", "Show assigned users on parking map", 3, "formField"], ["label", "Show parking status details on map", 3, "formField"], ["label", "Allow user selecting booking time", 3, "formField"], ["label", "Auto-allocate parking spaces", 3, "formField"], ["label", "Allow recurring parking bookings", 3, "formField"], ["label", "Hide End time option", 3, "formField"], ["for", "lockers-bookable-start"], ["for", "lockers-bookable-end"], ["label", "Show Calendar Links after booking", 3, "formField"], ["label", "Disable Date selection", 3, "formField"], ["label", "Disable start time option", 3, "formField"]], template: function WorkplaceSettingsFormModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275listener("confirm", function WorkplaceSettingsFormModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(1, "form", 1)(2, "section", 2)(3, "div")(4, "label", 3);
        \u0275\u0275text(5, "Light Mode Logo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4)(7, "mat-form-field", 5);
        \u0275\u0275element(8, "input", 6);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "upload-button", 7);
        \u0275\u0275listener("ngModelChange", function WorkplaceSettingsFormModalComponent_Template_upload_button_ngModelChange_9_listener($event) {
          return ctx.model.update((m) => __spreadProps(__spreadValues({}, m), { logo_light: $event }));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div")(11, "label", 8);
        \u0275\u0275text(12, "Dark Mode Logo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 4)(14, "mat-form-field", 5);
        \u0275\u0275element(15, "input", 6);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "upload-button", 7);
        \u0275\u0275listener("ngModelChange", function WorkplaceSettingsFormModalComponent_Template_upload_button_ngModelChange_16_listener($event) {
          return ctx.model.update((m) => __spreadProps(__spreadValues({}, m), { logo_dark: $event }));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div")(18, "label", 9);
        \u0275\u0275text(19, "Features");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "mat-form-field", 10)(21, "mat-select", 11)(22, "mat-option", 12);
        \u0275\u0275text(23, " Rooms ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "mat-option", 13);
        \u0275\u0275text(25, "Desks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "mat-option", 14);
        \u0275\u0275text(27, "Explore");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "mat-option", 15);
        \u0275\u0275text(29, "Parking");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "mat-option", 16);
        \u0275\u0275text(31, " Visitors ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "mat-option", 17);
        \u0275\u0275text(33, "Lockers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "mat-option", 18);
        \u0275\u0275text(35, "Help Desk");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "mat-option", 19);
        \u0275\u0275text(37, " Your Bookings ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "mat-option", 20);
        \u0275\u0275text(39, "Work Schedule");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "mat-option", 21);
        \u0275\u0275text(41, " Support Tickets ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "mat-option", 22);
        \u0275\u0275text(43, "Group Events");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "mat-option", 23);
        \u0275\u0275text(45, " Deals & Offers ");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div")(47, "label", 9);
        \u0275\u0275text(48, "Hide Global Search Item Types");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "mat-form-field", 10)(50, "mat-select", 11)(51, "mat-option", 24);
        \u0275\u0275text(52, " MapsPeople ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "mat-option", 12);
        \u0275\u0275text(54, " Rooms ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "mat-option", 25);
        \u0275\u0275text(56, " Emergency Contacts ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "mat-option", 26);
        \u0275\u0275text(58, " Map Features ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "mat-option", 27);
        \u0275\u0275text(60, " Points of Interest ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "mat-option", 28);
        \u0275\u0275text(62, " Contacts ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "mat-option", 29);
        \u0275\u0275text(64, " Users ");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "div", 30)(66, "h3", 31);
        \u0275\u0275text(67, " Banner ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "div", 32)(69, "div", 33)(70, "label", 34);
        \u0275\u0275text(71, "Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "mat-form-field", 10)(73, "mat-select", 35);
        \u0275\u0275listener("ngModelChange", function WorkplaceSettingsFormModalComponent_Template_mat_select_ngModelChange_73_listener($event) {
          return ctx.model.update((m) => __spreadProps(__spreadValues({}, m), { banner: { id: ctx.date_string, content: m.banner?.content || "", type: $event } }));
        });
        \u0275\u0275repeaterCreate(74, WorkplaceSettingsFormModalComponent_For_75_Template, 2, 2, "mat-option", 36, _forTrack05);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(76, "div", 33)(77, "label", 34);
        \u0275\u0275text(78, "Message");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "mat-form-field", 10)(80, "input", 37);
        \u0275\u0275listener("ngModelChange", function WorkplaceSettingsFormModalComponent_Template_input_ngModelChange_80_listener($event) {
          return ctx.model.update((m) => __spreadProps(__spreadValues({}, m), { banner: { id: ctx.date_string, type: m.banner?.type || "", content: $event } }));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(81, "div")(82, "label", 38);
        \u0275\u0275text(83, " External Support URL ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "mat-form-field", 10);
        \u0275\u0275element(85, "input", 39);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(86, "mat-hint");
        \u0275\u0275text(87, " External URL to link users to for support tickets ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "mat-error");
        \u0275\u0275text(89, "Invalid URL");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(90, "div")(91, "label", 40);
        \u0275\u0275text(92, "Support Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "mat-form-field", 10);
        \u0275\u0275element(94, "input", 41);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(95, "mat-hint");
        \u0275\u0275text(96, " Email to send tickets when created in the app ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(97, "div")(98, "label", 42);
        \u0275\u0275text(99, "Default Route");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "mat-form-field", 10);
        \u0275\u0275element(101, "input", 43);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(102, "mat-hint");
        \u0275\u0275text(103, " Main page of the application ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(104, "div")(105, "label", 44);
        \u0275\u0275text(106, "Catering Provider");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "mat-form-field", 10);
        \u0275\u0275element(108, "input", 45);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(109, "mat-hint");
        \u0275\u0275text(110, " Name of the catering provider to force orders to use ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(111, "div")(112, "label", 46);
        \u0275\u0275text(113, "Week Start");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "mat-form-field", 10)(115, "mat-select", 47);
        \u0275\u0275repeaterCreate(116, WorkplaceSettingsFormModalComponent_For_117_Template, 2, 2, "mat-option", 36, _forTrack05);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(118, "mat-hint");
        \u0275\u0275text(119, " Day of the week to show initially on various calendars ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(120, "div")(121, "label", 48);
        \u0275\u0275text(122, "Currency");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "mat-form-field", 10)(124, "mat-select", 49);
        \u0275\u0275listener("openedChange", function WorkplaceSettingsFormModalComponent_Template_mat_select_openedChange_124_listener($event) {
          return ctx.onCurrencySelectStateChange($event);
        });
        \u0275\u0275elementStart(125, "mat-option", 50)(126, "input", 51);
        \u0275\u0275listener("ngModelChange", function WorkplaceSettingsFormModalComponent_Template_input_ngModelChange_126_listener($event) {
          return ctx.updateCurrencyFilter($event);
        })("click", function WorkplaceSettingsFormModalComponent_Template_input_click_126_listener($event) {
          return $event.stopPropagation();
        })("keydown", function WorkplaceSettingsFormModalComponent_Template_input_keydown_126_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(127, WorkplaceSettingsFormModalComponent_For_128_Template, 2, 2, "mat-option", 36, _forTrack13);
        \u0275\u0275conditionalCreate(129, WorkplaceSettingsFormModalComponent_Conditional_129_Template, 2, 0, "mat-option", 52);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(130, "mat-hint");
        \u0275\u0275text(131, " ISO 4217 currency code for pricing ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(132, "div")(133, "label", 53);
        \u0275\u0275text(134, "Locales");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "mat-form-field", 10)(136, "mat-select", 54)(137, "mat-option", 36);
        \u0275\u0275text(138, " English (British) ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(139, "mat-option", 36);
        \u0275\u0275text(140, " English (US) ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(141, "mat-option", 36);
        \u0275\u0275text(142, " French ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(143, "mat-option", 36);
        \u0275\u0275text(144, " Spanish ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(145, "mat-option", 36);
        \u0275\u0275text(146, " Portuguese ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "mat-option", 36);
        \u0275\u0275text(148, " Arabic ");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(149, "div", 55);
        \u0275\u0275element(150, "settings-toggle", 56);
        \u0275\u0275controlCreate();
        \u0275\u0275element(151, "settings-toggle", 57);
        \u0275\u0275controlCreate();
        \u0275\u0275element(152, "settings-toggle", 58);
        \u0275\u0275controlCreate();
        \u0275\u0275conditionalCreate(153, WorkplaceSettingsFormModalComponent_Conditional_153_Template, 1, 1, "settings-toggle", 59);
        \u0275\u0275element(154, "settings-toggle", 60);
        \u0275\u0275controlCreate();
        \u0275\u0275element(155, "settings-toggle", 61);
        \u0275\u0275controlCreate();
        \u0275\u0275element(156, "settings-toggle", 62);
        \u0275\u0275controlCreate();
        \u0275\u0275element(157, "settings-toggle", 63);
        \u0275\u0275controlCreate();
        \u0275\u0275element(158, "settings-toggle", 64);
        \u0275\u0275controlCreate();
        \u0275\u0275element(159, "settings-toggle", 65);
        \u0275\u0275controlCreate();
        \u0275\u0275element(160, "settings-toggle", 66);
        \u0275\u0275controlCreate();
        \u0275\u0275element(161, "settings-toggle", 67);
        \u0275\u0275controlCreate();
        \u0275\u0275element(162, "settings-toggle", 68);
        \u0275\u0275controlCreate();
        \u0275\u0275element(163, "settings-toggle", 69);
        \u0275\u0275controlCreate();
        \u0275\u0275element(164, "settings-toggle", 70);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(165, WorkplaceSettingsFormModalComponent_Conditional_165_Template, 112, 35, "section", 71);
        \u0275\u0275conditionalCreate(166, WorkplaceSettingsFormModalComponent_Conditional_166_Template, 56, 23, "section", 72);
        \u0275\u0275conditionalCreate(167, WorkplaceSettingsFormModalComponent_Conditional_167_Template, 50, 16, "section", 73);
        \u0275\u0275conditionalCreate(168, WorkplaceSettingsFormModalComponent_Conditional_168_Template, 54, 16, "section", 74);
        \u0275\u0275conditionalCreate(169, WorkplaceSettingsFormModalComponent_Conditional_169_Template, 50, 17, "section", 75);
        \u0275\u0275conditionalCreate(170, WorkplaceSettingsFormModalComponent_Conditional_170_Template, 39, 14, "section", 76);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", ctx.heading())("loading", ctx.loading());
        \u0275\u0275advance(8);
        \u0275\u0275property("formField", ctx.form.logo_light);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(49, _c04));
        \u0275\u0275control();
        \u0275\u0275advance(6);
        \u0275\u0275property("formField", ctx.form.logo_dark);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(50, _c04));
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.features);
        \u0275\u0275control();
        \u0275\u0275advance(29);
        \u0275\u0275property("formField", ctx.form.hide_global_search_items);
        \u0275\u0275control();
        \u0275\u0275advance(23);
        \u0275\u0275property("ngModel", ctx.model().banner?.type || "")("ngModelOptions", \u0275\u0275pureFunction0(51, _c04));
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.BANNER_TYPE);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngModel", ctx.model().banner?.content || "")("ngModelOptions", \u0275\u0275pureFunction0(52, _c04));
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.external_support_url);
        \u0275\u0275control();
        \u0275\u0275advance(9);
        \u0275\u0275property("formField", ctx.form.support_email);
        \u0275\u0275control();
        \u0275\u0275advance(7);
        \u0275\u0275property("formField", ctx.form.default_route);
        \u0275\u0275control();
        \u0275\u0275advance(7);
        \u0275\u0275property("formField", ctx.form.catering_provider);
        \u0275\u0275control();
        \u0275\u0275advance(7);
        \u0275\u0275property("formField", ctx.form.week_start);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.WEEK_START);
        \u0275\u0275advance(8);
        \u0275\u0275property("formField", ctx.form.currency);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.currency_filter())("ngModelOptions", \u0275\u0275pureFunction0(53, _c04));
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.filtered_currency_options());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.filtered_currency_options().length ? 129 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275property("formField", ctx.form.locales);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("value", \u0275\u0275pureFunction0(54, _c12));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", \u0275\u0275pureFunction0(55, _c2));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", \u0275\u0275pureFunction0(56, _c3));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", \u0275\u0275pureFunction0(57, _c4));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", \u0275\u0275pureFunction0(58, _c5));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", \u0275\u0275pureFunction0(59, _c6));
        \u0275\u0275advance(3);
        \u0275\u0275property("formField", ctx.form.use_24_hour_time);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.use_region);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.use_imperial_units);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().features.includes("support-ticket") ? 153 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.basic_user_search);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.colleagues_require_auth);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.hide_landing_sidebar);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.hide_landing_spaces);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.hide_landing_rooms);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.hide_colleagues);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.show_quick_links);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.show_quick_book);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.allow_dark_mode);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.show_changelog);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.global_search);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().features?.includes("spaces") ? 165 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().features.includes("desks") ? 166 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().features.includes("desks") || ctx.model().features.includes("parking") || ctx.model().features.includes("lockers") || ctx.model().features.includes("visitor-invite") ? 167 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().features.includes("explore") ? 168 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().features.includes("parking") ? 169 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().features.includes("lockers") ? 170 : -1);
      }
    }, dependencies: [
      MatDialogModule,
      FullscreenModalShellComponent,
      SettingsToggleComponent,
      FormField,
      MatRippleModule,
      MatRipple,
      IconComponent,
      MatSelectModule,
      MatFormField,
      MatHint,
      MatError,
      MatSelect,
      MatOption,
      MatFormFieldModule,
      MatInputModule,
      MatInput,
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      NgForm,
      UploadButtonComponent
    ], styles: ["\nsettings-toggle[_ngcontent-%COMP%] {\n  width: calc(50% - 1rem);\n  margin: 0.5rem;\n}\n/*# sourceMappingURL=workplace-settings-form-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkplaceSettingsFormModalComponent, [{
    type: Component,
    args: [{ selector: "workplace-settings-form-modal", template: `
        <fullscreen-modal-shell
            [heading]="heading()"
            [loading]="loading()"
            (confirm)="save()"
        >
            <form class="flex flex-col space-y-8 pb-4">
                <section general class="bg-base-100 space-y-2 rounded-sm">
                    <div>
                        <label for="logo_light">Light Mode Logo</label>
                        <div class="mb-4 flex items-center space-x-2">
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript w-full"
                            >
                                <input matInput [formField]="form.logo_light" />
                            </mat-form-field>
                            <upload-button
                                ngModel
                                (ngModelChange)="
                                    model.update((m) => ({
                                        ...m,
                                        logo_light: $event,
                                    }))
                                "
                                [ngModelOptions]="{ standalone: true }"
                            ></upload-button>
                        </div>
                    </div>
                    <div>
                        <label for="logo_dark">Dark Mode Logo</label>
                        <div class="mb-4 flex items-center space-x-2">
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript w-full"
                            >
                                <input matInput [formField]="form.logo_dark" />
                            </mat-form-field>
                            <upload-button
                                ngModel
                                (ngModelChange)="
                                    model.update((m) => ({
                                        ...m,
                                        logo_dark: $event,
                                    }))
                                "
                                [ngModelOptions]="{ standalone: true }"
                            ></upload-button>
                        </div>
                    </div>
                    <div>
                        <label for="features">Features</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select [formField]="form.features" multiple>
                                <mat-option value="spaces"> Rooms </mat-option>
                                <mat-option value="desks">Desks</mat-option>
                                <mat-option value="explore">Explore</mat-option>
                                <mat-option value="parking">Parking</mat-option>
                                <mat-option value="visitor-invite">
                                    Visitors
                                </mat-option>
                                <mat-option value="lockers">Lockers</mat-option>
                                <mat-option value="help">Help Desk</mat-option>
                                <mat-option value="schedule">
                                    Your Bookings
                                </mat-option>
                                <mat-option value="wfh"
                                    >Work Schedule</mat-option
                                >
                                <mat-option value="support-ticket">
                                    Support Tickets
                                </mat-option>
                                <mat-option value="group-events"
                                    >Group Events</mat-option
                                >
                                <mat-option value="deals-n-offers">
                                    Deals & Offers
                                </mat-option>
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div>
                        <label for="features"
                            >Hide Global Search Item Types</label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                [formField]="form.hide_global_search_items"
                                multiple
                            >
                                <mat-option value="mapspeople">
                                    MapsPeople
                                </mat-option>
                                <mat-option value="spaces"> Rooms </mat-option>
                                <mat-option value="emergency_contacts">
                                    Emergency Contacts
                                </mat-option>
                                <mat-option value="features">
                                    Map Features
                                </mat-option>
                                <mat-option value="points_of_interest">
                                    Points of Interest
                                </mat-option>
                                <mat-option value="contacts">
                                    Contacts
                                </mat-option>
                                <mat-option value="users"> Users </mat-option>
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div
                        class="border-base-300 relative rounded-sm border px-4 pt-4 pb-2"
                    >
                        <h3
                            class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                        >
                            Banner
                        </h3>
                        <div class="flex items-center space-x-4">
                            <div class="flex-1">
                                <label for="banner-type">Type</label>
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <mat-select
                                        name="banner-type"
                                        [ngModel]="model().banner?.type || ''"
                                        (ngModelChange)="
                                            model.update((m) => ({
                                                ...m,
                                                banner: {
                                                    id: date_string,
                                                    content:
                                                        m.banner?.content || '',
                                                    type: $event,
                                                },
                                            }))
                                        "
                                        [ngModelOptions]="{
                                            standalone: true,
                                        }"
                                    >
                                        @for (
                                            opt of BANNER_TYPE;
                                            track opt.value
                                        ) {
                                            <mat-option [value]="opt.value">{{
                                                opt.label
                                            }}</mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            </div>
                            <div class="flex-1">
                                <label for="banner-type">Message</label>
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        matInput
                                        name="banner-message"
                                        placeholder="Banner Message"
                                        [ngModel]="model().banner?.content || ''"
                                        (ngModelChange)="
                                            model.update((m) => ({
                                                ...m,
                                                banner: {
                                                    id: date_string,
                                                    type: m.banner?.type || '',
                                                    content: $event,
                                                },
                                            }))
                                        "
                                        [ngModelOptions]="{
                                            standalone: true,
                                        }"
                                    />
                                </mat-form-field>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label for="external-support-url">
                            External Support URL
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                [formField]="form.external_support_url"
                                placeholder="https://support.com/ticket"
                            />
                            <mat-hint>
                                External URL to link users to for support
                                tickets
                            </mat-hint>
                            <mat-error>Invalid URL</mat-error>
                        </mat-form-field>
                    </div>
                    <div>
                        <label for="support-email">Support Email</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                [formField]="form.support_email"
                                placeholder="support@acme.tech"
                            />
                            <mat-hint>
                                Email to send tickets when created in the app
                            </mat-hint>
                        </mat-form-field>
                    </div>
                    <div>
                        <label for="default-route">Default Route</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                [formField]="form.default_route"
                                placeholder="/landing"
                            />
                            <mat-hint> Main page of the application </mat-hint>
                        </mat-form-field>
                    </div>
                    <div>
                        <label for="catering-provider">Catering Provider</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                [formField]="form.catering_provider"
                                placeholder="Catering Provider"
                            />
                            <mat-hint>
                                Name of the catering provider to force orders to
                                use
                            </mat-hint>
                        </mat-form-field>
                    </div>
                    <div>
                        <label for="week-start">Week Start</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                [formField]="form.week_start"
                                placeholder="Sunday"
                            >
                                @for (opt of WEEK_START; track opt.value) {
                                    <mat-option [value]="opt.value">{{
                                        opt.label
                                    }}</mat-option>
                                }
                            </mat-select>
                            <mat-hint>
                                Day of the week to show initially on various
                                calendars
                            </mat-hint>
                        </mat-form-field>
                    </div>
                    <div>
                        <label for="currency">Currency</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                [formField]="form.currency"
                                placeholder="Select currency code"
                                (openedChange)="
                                    onCurrencySelectStateChange($event)
                                "
                            >
                                <mat-option disabled class="!h-auto !py-2">
                                    <input
                                        matInput
                                        placeholder="Search currency code or name"
                                        [ngModel]="currency_filter()"
                                        (ngModelChange)="
                                            updateCurrencyFilter($event)
                                        "
                                        [ngModelOptions]="{ standalone: true }"
                                        (click)="$event.stopPropagation()"
                                        (keydown)="$event.stopPropagation()"
                                    />
                                </mat-option>
                                @for (
                                    option of filtered_currency_options();
                                    track option.code
                                ) {
                                    <mat-option [value]="option.code">
                                        {{ option.display_name }}
                                    </mat-option>
                                }
                                @if (!filtered_currency_options().length) {
                                    <mat-option disabled>
                                        No currencies match your search
                                    </mat-option>
                                }
                            </mat-select>
                            <mat-hint>
                                ISO 4217 currency code for pricing
                            </mat-hint>
                        </mat-form-field>
                    </div>
                    <div>
                        <label for="locales">Locales</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                [formField]="form.locales"
                                multiple
                                placeholder="Select locales"
                            >
                                <mat-option
                                    [value]="{
                                        id: 'en-GB',
                                        name: 'English',
                                        flag: '\u{1F1EC}\u{1F1E7}',
                                    }"
                                >
                                    English (British)
                                </mat-option>
                                <mat-option
                                    [value]="{
                                        id: 'en-US',
                                        name: 'English',
                                        flag: '\u{1F1FA}\u{1F1F8}',
                                    }"
                                >
                                    English (US)
                                </mat-option>
                                <mat-option
                                    [value]="{
                                        id: 'fr',
                                        name: 'French',
                                        flag: '\u{1F1EB}\u{1F1F7}',
                                    }"
                                >
                                    French
                                </mat-option>
                                <mat-option
                                    [value]="{
                                        id: 'es',
                                        name: 'Spanish',
                                        flag: '\u{1F1EA}\u{1F1F8}',
                                    }"
                                >
                                    Spanish
                                </mat-option>
                                <mat-option
                                    [value]="{
                                        id: 'pt',
                                        name: 'Portuguese',
                                        flag: '\u{1F1F5}\u{1F1F9}',
                                    }"
                                >
                                    Portuguese
                                </mat-option>
                                <mat-option
                                    [value]="{
                                        id: 'ar',
                                        name: 'Arabic',
                                        flag: '',
                                    }"
                                >
                                    Arabic
                                </mat-option>
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="-mx-2 flex flex-wrap items-center">
                        <settings-toggle
                            label="Use 24 hour time"
                            [formField]="form.use_24_hour_time"
                        ></settings-toggle>
                        <settings-toggle
                            label="Use region over building"
                            [formField]="form.use_region"
                        ></settings-toggle>
                        <settings-toggle
                            label="Use imperial units for measurements"
                            [formField]="form.use_imperial_units"
                        ></settings-toggle>
                        @if (model().features.includes('support-ticket')) {
                            <settings-toggle
                                label="Allow images in support tickets"
                                [formField]="form.allow_support_ticket_images"
                            ></settings-toggle>
                        }
                        <settings-toggle
                            label="Search only authenticated users"
                            [formField]="form.basic_user_search"
                        ></settings-toggle>
                        <settings-toggle
                            label="Only authenticated colleagues"
                            info="Will limit the available users to add as colleagues to only
 those who have authenticated with the application"
                            [formField]="form.colleagues_require_auth"
                        ></settings-toggle>
                        <settings-toggle
                            label="Hide landing sidebar"
                            [formField]="form.hide_landing_sidebar"
                        ></settings-toggle>
                        <settings-toggle
                            label="Hide landing spaces"
                            [formField]="form.hide_landing_spaces"
                        ></settings-toggle>
                        <settings-toggle
                            label="Hide landing rooms"
                            [formField]="form.hide_landing_rooms"
                        ></settings-toggle>
                        <settings-toggle
                            label="Hide colleagues"
                            [formField]="form.hide_colleagues"
                        ></settings-toggle>
                        <settings-toggle
                            label="Show landing quick links"
                            [formField]="form.show_quick_links"
                        ></settings-toggle>
                        <settings-toggle
                            label="Show landing quick book"
                            [formField]="form.show_quick_book"
                        ></settings-toggle>
                        <settings-toggle
                            label="Allow dark mode"
                            [formField]="form.allow_dark_mode"
                        ></settings-toggle>
                        <settings-toggle
                            label="Show changelog link"
                            [formField]="form.show_changelog"
                        ></settings-toggle>
                        <settings-toggle
                            label="Show global search"
                            [formField]="form.global_search"
                        ></settings-toggle>
                    </div>
                </section>
                @if (model().features?.includes('spaces')) {
                    <section
                        events
                        id="feature-spaces"
                        class="border-base-300 relative rounded-sm border"
                    >
                        <h3
                            class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                        >
                            Room Bookings
                        </h3>
                        <button
                            icon
                            matRipple
                            class="bg-base-100 absolute top-0 right-4 -translate-y-1/2"
                            (click)="toggleGroup('spaces')"
                        >
                            <icon>{{
                                shown_group() === 'spaces'
                                    ? 'chevron_left'
                                    : 'keyboard_arrow_down'
                            }}</icon>
                        </button>
                        <div
                            collapsible
                            [class.open]="shown_group() === 'spaces'"
                        >
                            <div class="content px-4 pt-4 pb-2">
                                <div>
                                    <label for="available-period">
                                        Available Period
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            [formField]="form.events.allowed_future_days"
                                        >
                                            @for (
                                                opt of AVAILABLE_PERIOD_EXTENDED;
                                                track opt.value
                                            ) {
                                                <mat-option
                                                    [value]="opt.value"
                                                    >{{ opt.label }}</mat-option
                                                >
                                            }
                                        </mat-select>
                                        <mat-hint>
                                            Number of days ahead the user is
                                            able to book
                                        </mat-hint>
                                    </mat-form-field>
                                </div>
                                <div>
                                    <label for="force-host">Force Host</label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <input
                                            matInput
                                            [formField]="form.events.force_host"
                                            placeholder="global.host@acme.tech"
                                        />
                                        <mat-hint>
                                            Force host of room bookings to be
                                            this user
                                        </mat-hint>
                                        <mat-error
                                            >Invalid email address</mat-error
                                        >
                                    </mat-form-field>
                                </div>
                                <div>
                                    <label for="max-duration">
                                        Max Duration
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            [formField]="form.events.max_duration"
                                        >
                                            @for (
                                                opt of MAX_DURATION_FULL;
                                                track opt.value
                                            ) {
                                                <mat-option
                                                    [value]="opt.value"
                                                    >{{ opt.label }}</mat-option
                                                >
                                            }
                                        </mat-select>
                                        <mat-hint>
                                            Max duration for single day bookings
                                        </mat-hint>
                                    </mat-form-field>
                                </div>
                                <div class="flex items-center space-x-4">
                                    <div>
                                        <label for="setup">
                                            Default Setup Duration
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="form.events.setup"
                                                placeholder="No default setup"
                                            >
                                                @for (
                                                    opt of SETUP_BREAKDOWN;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                    <div>
                                        <label for="breakdown">
                                            Default Breakdown Duration
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="form.events.breakdown"
                                                placeholder="No default breakdown"
                                            >
                                                @for (
                                                    opt of SETUP_BREAKDOWN;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                </div>
                                <div>
                                    <label for="cache-duration">
                                        Cache Period
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            [formField]="form.events.cache_duration_in_days"
                                        >
                                            @for (
                                                opt of CACHE_DURATION;
                                                track opt.value
                                            ) {
                                                <mat-option
                                                    [value]="opt.value"
                                                    >{{ opt.label }}</mat-option
                                                >
                                            }
                                        </mat-select>
                                        <mat-hint>
                                            Number of days ahead to grab
                                            bookings from the room driver
                                        </mat-hint>
                                    </mat-form-field>
                                </div>
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
                                >
                                    <div>
                                        <label for="events-bookable-start">
                                            Bookable Start
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="form.events.bookable_hours.start"
                                                placeholder="None"
                                            >
                                                @for (
                                                    opt of BOOKABLE_HOUR_START;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                    <div>
                                        <label for="events-bookable-end">
                                            Bookable End
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="form.events.bookable_hours.end"
                                                placeholder="None"
                                            >
                                                @for (
                                                    opt of BOOKABLE_HOUR_END;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                </div>
                                <div class="-mx-2 flex flex-wrap items-center">
                                    <settings-toggle
                                        label="Allow all day bookings"
                                        [formField]="form.events.allow_all_day"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Default bookings to all day"
                                        [formField]="form.events.all_day_default"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Disable booking requests"
                                        [formField]="form.events.booking_unavailable"
                                        info="Prevent making backend requests for bookings and give users links to create the booking in their own calendars"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow booking for other users"
                                        [formField]="form.events.can_book_for_others"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow booking for any users"
                                        [formField]="form.events.can_book_for_anyone"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow booking with assets"
                                        [formField]="form.events.has_assets"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Hide attendee actions"
                                        [formField]="form.events.hide_user_actions"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow booking multiple spaces"
                                        [formField]="form.events.multiple_spaces"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Force room as host"
                                        [formField]="form.events.room_as_host"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow external attendees"
                                        [formField]="form.events.allow_externals"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Enforce room capacity limits"
                                        [formField]="form.events.strict_capacity_check"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow Visibility options"
                                        [formField]="form.events.allow_visibility"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Disable notes field"
                                        [formField]="form.events.hide_notes"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Hide attendees field"
                                        [formField]="form.events.hide_attendees"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Hide nearby desk action"
                                        info="Hide the book nearby desks button on the meeting success view"
                                        [formField]="form.events.hide_nearby_desks"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow recurring meetings"
                                        [formField]="form.events.allow_recurrence"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow multi-day bookings"
                                        [formField]="form.events.allow_multiday"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Use PlaceOS bookings"
                                        [formField]="form.events.use_bookings"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Display times with building timezone"
                                        [formField]="form.events.use_building_timezone"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow daily all-day recurrence"
                                        [formField]="form.events.allow_daily_allday_recurrence"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Disable standalone bookings"
                                        [formField]="form.events.no_standalone"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Hide End Time option"
                                        [formField]="form.events.hide_end_time"
                                    ></settings-toggle>
                                </div>
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
                                >
                                    <div>
                                        <label for="events-all-day-start">
                                            All Day Start
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="form.events.all_day_period.start"
                                            >
                                                @for (
                                                    opt of BLOCK_START;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                    <div>
                                        <label for="events-all-day-end">
                                            All Day End
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="form.events.all_day_period.end"
                                            >
                                                @for (
                                                    opt of BLOCK_END;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                }
                @if (model().features.includes('desks')) {
                    <section
                        desks
                        id="feature-desks"
                        class="border-base-300 relative rounded-sm border"
                    >
                        <h3
                            class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                        >
                            Desk Bookings
                        </h3>
                        <button
                            icon
                            matRipple
                            class="bg-base-100 absolute top-0 right-4 -translate-y-1/2"
                            (click)="toggleGroup('desks')"
                        >
                            <icon>{{
                                shown_group() === 'desks'
                                    ? 'chevron_left'
                                    : 'keyboard_arrow_down'
                            }}</icon>
                        </button>
                        <div
                            collapsible
                            [class.open]="shown_group() === 'desks'"
                        >
                            <div class="content px-4 pt-4 pb-2">
                                <div>
                                    <label for="max-duration">
                                        Max Duration
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            [formField]="form.desks.max_duration"
                                        >
                                            @for (
                                                opt of MAX_DURATION_SHORT;
                                                track opt.value
                                            ) {
                                                <mat-option
                                                    [value]="opt.value"
                                                    >{{ opt.label }}</mat-option
                                                >
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                </div>
                                <div>
                                    <label for="available-period">
                                        Available Period
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            [formField]="form.desks.available_period"
                                        >
                                            @for (
                                                opt of AVAILABLE_PERIOD_EXTENDED;
                                                track opt.value
                                            ) {
                                                <mat-option
                                                    [value]="opt.value"
                                                    >{{ opt.label }}</mat-option
                                                >
                                            }
                                        </mat-select>
                                        <mat-hint>
                                            Number of days ahead the user is
                                            able to book
                                        </mat-hint>
                                    </mat-form-field>
                                </div>
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
                                >
                                    <div>
                                        <label for="desks-bookable-start">
                                            Bookable Start
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="form.desks.bookable_hours.start"
                                            >
                                                @for (
                                                    opt of BOOKABLE_HOUR_START;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                    <div>
                                        <label for="desks-bookable-end">
                                            Bookable End
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="form.desks.bookable_hours.end"
                                            >
                                                @for (
                                                    opt of BOOKABLE_HOUR_END;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                </div>
                                <div class="-mx-2 flex flex-wrap items-center">
                                    <settings-toggle
                                        label="Allow all day bookings"
                                        [formField]="form.desks.allow_all_day"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Default bookings to all day"
                                        [formField]="form.desks.all_day_default"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow group bookings"
                                        [formField]="form.desks.allow_groups"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow time changes"
                                        [formField]="form.desks.allow_time_changes"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Auto-allocation"
                                        [formField]="form.desks.auto_allocation"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow booking for others"
                                        [formField]="form.desks.can_book_for_others"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow also booking a locker"
                                        [formField]="form.desks.can_book_lockers"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow requesting assets with booking"
                                        [formField]="form.desks.has_assets"
                                    ></settings-toggle>
                                    <!-- <settings-toggle
                                                                                                      label="Hide reason field for desk booking"
                                                                                                      [formField]="form.desks.hide_reason"
                                                                                                    ></settings-toggle>
                                                                                                    <settings-toggle
                                                                                                      label="Require a reason for desk booking"
                                                                                                      [formField]="form.desks.needs_reason"
                                                                                                    ></settings-toggle> -->
                                    <settings-toggle
                                        label="Allow Recurring Desk bookings"
                                        [formField]="form.desks.allow_recurrence"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Auto-checkin map bookingss"
                                        [formField]="form.desks.auto_checkin"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Default to desk select modal to map view"
                                        [formField]="form.desks.default_select_as_map"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Show calendar links after booking"
                                        [formField]="form.desks.show_calendar_links"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Enabled desk height"
                                        [formField]="form.desks.height_enabled"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Hide Checkin Options"
                                        [formField]="form.desks.hide_checkin"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Hide End Time option"
                                        [formField]="form.desks.hide_end_time"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Display times with building timezone"
                                        [formField]="form.desks.use_building_timezone"
                                    ></settings-toggle>
                                </div>
                            </div>
                        </div>
                    </section>
                }
                @if (
                    model().features.includes('desks') ||
                    model().features.includes('parking') ||
                    model().features.includes('lockers') ||
                    model().features.includes('visitor-invite')
                ) {
                    <section
                        bookings
                        id="feature-bookings"
                        class="border-base-300 relative rounded-sm border"
                    >
                        <h3
                            class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                        >
                            PlaceOS Bookings
                        </h3>
                        <button
                            icon
                            matRipple
                            class="bg-base-100 absolute top-0 right-4 -translate-y-1/2"
                            (click)="toggleGroup('bookings')"
                        >
                            <icon>{{
                                shown_group() === 'bookings'
                                    ? 'chevron_left'
                                    : 'keyboard_arrow_down'
                            }}</icon>
                        </button>
                        <div
                            collapsible
                            [class.open]="shown_group() === 'bookings'"
                        >
                            <div class="content px-4 pt-4 pb-2">
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
                                >
                                    <div>
                                        <label for="bookings-bookable-start">
                                            Bookable Start
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="form.bookings.bookable_hours.start"
                                            >
                                                @for (
                                                    opt of BOOKABLE_HOUR_START;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                    <div>
                                        <label for="bookings-bookable-end">
                                            Bookable End
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="form.bookings.bookable_hours.end"
                                            >
                                                @for (
                                                    opt of BOOKABLE_HOUR_END;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                </div>
                                <div class="-mx-2 flex flex-wrap items-center">
                                    <settings-toggle
                                        label="Allow all day bookings"
                                        [formField]="form.bookings.allow_all_day"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Default bookings to all day"
                                        [formField]="form.bookings.all_day_default"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Display times with building timezone"
                                        [formField]="form.bookings.use_building_timezone"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow booking for other users"
                                        [formField]="form.bookings.can_book_for_others"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow booking multiple visitors"
                                        [formField]="form.bookings.multiple_visitors"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Auto-approve bookings"
                                        [formField]="form.bookings.no_approval"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow booking with assets"
                                        [formField]="form.bookings.allow_assets"
                                    ></settings-toggle>
                                    <ng-container>
                                        <settings-toggle
                                            label="Show calendar links after visitor invite"
                                            [formField]="
                                                form.visitors.show_calendar_links
                                            "
                                        ></settings-toggle>
                                    </ng-container>
                                    <ng-container>
                                        <settings-toggle
                                            label="Allow international flag for visitors"
                                            [formField]="
                                                form.visitors.allow_international
                                            "
                                        ></settings-toggle>
                                    </ng-container>
                                </div>
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
                                >
                                    <div>
                                        <label for="bookings-all-day-start">
                                            All Day Start
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="form.bookings.all_day_period.start"
                                                placeholder="None"
                                            >
                                                @for (
                                                    opt of BLOCK_START;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                    <div>
                                        <label for="bookings-all-day-end">
                                            All Day End
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="form.bookings.all_day_period.end"
                                                placeholder="None"
                                            >
                                                @for (
                                                    opt of BLOCK_END;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                }
                @if (model().features.includes('explore')) {
                    <section
                        explore
                        id="feature-explore"
                        class="border-base-300 relative rounded-sm border"
                    >
                        <h3
                            class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                        >
                            PlaceOS Maps
                        </h3>
                        <button
                            icon
                            matRipple
                            class="bg-base-100 absolute top-0 right-4 -translate-y-1/2"
                            (click)="toggleGroup('explore')"
                        >
                            <icon>{{
                                shown_group() === 'explore'
                                    ? 'chevron_left'
                                    : 'keyboard_arrow_down'
                            }}</icon>
                        </button>
                        <div
                            collapsible
                            [class.open]="shown_group() === 'explore'"
                        >
                            <div class="content px-4 pt-4 pb-2">
                                <div>
                                    <label for="disable">
                                        Disabled Features
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            [formField]="form.explore.disable"
                                            placeholder="No disabled features"
                                            multiple
                                        >
                                            @for (
                                                opt of EXPLORE_FEATURE;
                                                track opt.value
                                            ) {
                                                <mat-option
                                                    [value]="opt.value"
                                                    >{{ opt.label }}</mat-option
                                                >
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                </div>
                                <div class="flex items-center space-x-4">
                                    <div class="flex-1">
                                        <label for="disable-actions">
                                            Disabled Feature Actions
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="form.explore.disable_actions"
                                                placeholder="No disabled actions"
                                                multiple
                                            >
                                                @for (
                                                    opt of EXPLORE_FEATURE;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                    <div class="flex-1">
                                        <label for="available-period">
                                            Disabled Feature Labels
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="form.explore.disable_labels"
                                                placeholder="No disabled labels"
                                                multiple
                                            >
                                                @for (
                                                    opt of EXPLORE_FEATURE;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                </div>
                                <div class="flex items-center space-x-4">
                                    <div class="flex-1">
                                        <label for="disable-features">
                                            Disabled Feature Displays
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="form.explore.disable_features"
                                                placeholder="No disabled displays"
                                                multiple
                                            >
                                                @for (
                                                    opt of EXPLORE_FEATURE;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                    <div class="flex-1">
                                        <label for="disable-styles">
                                            Disabled Feature Styles
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="form.explore.disable_styles"
                                                placeholder="No disabled styles"
                                                multiple
                                            >
                                                @for (
                                                    opt of EXPLORE_FEATURE;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                </div>
                                @if (model().explore?.show_legend) {
                                    <div
                                        class="border-base-300 relative rounded-sm border p-4"
                                    >
                                        <h3
                                            class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                                        >
                                            Legend
                                        </h3>
                                        @for (
                                            item of model().explore.legend ||
                                                [];
                                            track item;
                                            let i = $index
                                        ) {
                                            <div
                                                class="mb-4 flex items-center space-x-4"
                                            >
                                                <div class="w-3/4 flex-1">
                                                    <mat-form-field
                                                        appearance="outline"
                                                        class="no-subscript w-full"
                                                    >
                                                        <input
                                                            matInput
                                                            placeholder="Legend Key"
                                                            [(ngModel)]="
                                                                item[0]
                                                            "
                                                            [ngModelOptions]="{
                                                                standalone: true,
                                                            }"
                                                        />
                                                    </mat-form-field>
                                                </div>
                                                <div
                                                    class="flex w-12 items-center justify-center"
                                                    matTooltip="Legend Color"
                                                >
                                                    <input
                                                        type="color"
                                                        class="border-base-content h-11 rounded-lg border"
                                                        [(ngModel)]="item[1]"
                                                        [ngModelOptions]="{
                                                            standalone: true,
                                                        }"
                                                    />
                                                </div>
                                                <button
                                                    icon
                                                    matRipple
                                                    class="border-error text-error h-12 w-12 rounded-sm border"
                                                    (click)="removeLegend(i)"
                                                >
                                                    <icon>delete</icon>
                                                </button>
                                            </div>
                                        }
                                        <button
                                            btn
                                            matRipple
                                            class="w-full"
                                            (click)="addLegend()"
                                        >
                                            Add Legend Item
                                        </button>
                                    </div>
                                }
                                <div class="-mx-2 flex flex-wrap items-center">
                                    <settings-toggle
                                        label="Hide device fields"
                                        [formField]="form.explore.hide_device_fields"
                                        info="Hides the MAC address, manufacturer, OS and SSID fields from device info tooltips"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Show Legend"
                                        [formField]="form.explore.show_legend"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Hide Zones"
                                        [formField]="form.explore.hide_zones"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Show Booking QR Code"
                                        [formField]="form.explore.show_booking_qr"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Use defined polygons for zones"
                                        [formField]="form.explore.use_zone_polygons"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Show labels for zones"
                                        [formField]="form.explore.show_zone_labels"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Show zone sensor info"
                                        [formField]="form.explore.show_zone_sensor_info"
                                    ></settings-toggle>
                                </div>
                            </div>
                        </div>
                    </section>
                }
                @if (model().features.includes('parking')) {
                    <section
                        parking
                        id="feature-parking"
                        class="border-base-300 relative rounded-sm border"
                    >
                        <h3
                            class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                        >
                            Parking Bookings
                        </h3>
                        <button
                            icon
                            matRipple
                            class="bg-base-100 absolute top-0 right-4 -translate-y-1/2"
                            (click)="toggleGroup('parking')"
                        >
                            <icon>{{
                                shown_group() === 'parking'
                                    ? 'chevron_left'
                                    : 'keyboard_arrow_down'
                            }}</icon>
                        </button>
                        <div
                            collapsible
                            [class.open]="shown_group() === 'parking'"
                        >
                            <div class="content px-4 pt-4 pb-2">
                                <div>
                                    <label for="max-duration">
                                        Max Duration
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            [formField]="form.parking.max_duration"
                                        >
                                            @for (
                                                opt of MAX_DURATION_SHORT;
                                                track opt.value
                                            ) {
                                                <mat-option
                                                    [value]="opt.value"
                                                    >{{ opt.label }}</mat-option
                                                >
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                </div>
                                <div>
                                    <label for="available-period">
                                        Available Period
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            [formField]="form.parking.available_period"
                                        >
                                            @for (
                                                opt of AVAILABLE_PERIOD_EXTENDED;
                                                track opt.value
                                            ) {
                                                <mat-option
                                                    [value]="opt.value"
                                                    >{{ opt.label }}</mat-option
                                                >
                                            }
                                        </mat-select>
                                        <mat-hint>
                                            Number of days ahead the user is
                                            able to book
                                        </mat-hint>
                                    </mat-form-field>
                                </div>
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
                                >
                                    <div>
                                        <label for="parking-bookable-start">
                                            Bookable Start
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="form.parking.bookable_hours.start"
                                            >
                                                @for (
                                                    opt of BOOKABLE_HOUR_START;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                    <div>
                                        <label for="parking-bookable-end">
                                            Bookable End
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="form.parking.bookable_hours.end"
                                            >
                                                @for (
                                                    opt of BOOKABLE_HOUR_END;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                </div>
                                <div class="-mx-2 flex flex-wrap items-center">
                                    <settings-toggle
                                        label="Allow all day bookings"
                                        [formField]="form.parking.allow_all_day"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Default bookings to all day"
                                        [formField]="form.parking.all_day_default"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Show assigned users on parking map"
                                        [formField]="form.parking.show_users"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Show parking status details on map"
                                        [formField]="form.parking.show_status_details"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow user selecting booking time"
                                        [formField]="form.parking.allow_time_changes"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Auto-allocate parking spaces"
                                        [formField]="form.parking.auto_allocation"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow booking for other users"
                                        [formField]="form.parking.can_book_for_others"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow recurring parking bookings"
                                        [formField]="form.parking.allow_recurrence"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Hide End time option"
                                        [formField]="form.parking.hide_end_time"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Display times with building timezone"
                                        [formField]="form.parking.use_building_timezone"
                                    ></settings-toggle>
                                </div>
                            </div>
                        </div>
                    </section>
                }
                @if (model().features.includes('lockers')) {
                    <section
                        lockers
                        id="feature-lockers"
                        class="border-base-300 relative rounded-sm border"
                    >
                        <h3
                            class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 font-medium"
                        >
                            Locker Bookings
                        </h3>
                        <button
                            icon
                            matRipple
                            class="bg-base-100 absolute top-0 right-4 -translate-y-1/2"
                            (click)="toggleGroup('lockers')"
                        >
                            <icon>{{
                                shown_group() === 'lockers'
                                    ? 'chevron_left'
                                    : 'keyboard_arrow_down'
                            }}</icon>
                        </button>
                        <div
                            collapsible
                            [class.open]="shown_group() === 'lockers'"
                        >
                            <div class="content px-4 pt-4 pb-2">
                                <div>
                                    <label for="max-duration">
                                        Max Duration
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            [formField]="form.lockers.max_duration"
                                        >
                                            @for (
                                                opt of MAX_DURATION_SHORT;
                                                track opt.value
                                            ) {
                                                <mat-option
                                                    [value]="opt.value"
                                                    >{{ opt.label }}</mat-option
                                                >
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                </div>
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
                                >
                                    <div>
                                        <label for="lockers-bookable-start">
                                            Bookable Start
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="form.lockers.bookable_hours.start"
                                            >
                                                @for (
                                                    opt of BOOKABLE_HOUR_START;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                    <div>
                                        <label for="lockers-bookable-end">
                                            Bookable End
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                        >
                                            <mat-select
                                                [formField]="form.lockers.bookable_hours.end"
                                            >
                                                @for (
                                                    opt of BOOKABLE_HOUR_END;
                                                    track opt.value
                                                ) {
                                                    <mat-option
                                                        [value]="opt.value"
                                                        >{{
                                                            opt.label
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                </div>
                                <div class="-mx-2 flex flex-wrap items-center">
                                    <settings-toggle
                                        label="Allow all day bookings"
                                        [formField]="form.lockers.allow_all_day"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Default bookings to all day"
                                        [formField]="form.lockers.all_day_default"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Show Calendar Links after booking"
                                        [formField]="form.lockers.show_calendar_links"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Hide End time option"
                                        [formField]="form.lockers.hide_end_time"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow user selecting booking time"
                                        [formField]="form.lockers.allow_time_changes"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Display times with building timezone"
                                        [formField]="form.lockers.use_building_timezone"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Disable Date selection"
                                        [formField]="form.lockers.disabled_date_select"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Disable start time option"
                                        [formField]="form.lockers.disabled_start_time"
                                    ></settings-toggle>
                                </div>
                            </div>
                        </div>
                    </section>
                }
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      MatDialogModule,
      FullscreenModalShellComponent,
      SettingsToggleComponent,
      FormField,
      MatRippleModule,
      IconComponent,
      MatSelectModule,
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      UploadButtonComponent
    ], styles: ["/* angular:styles/component:css;ca7581e3f527e8cafa49f5d3654b7182593f8c4b756e7d34512a16bfc4e4e137;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/ui/app-settings/workplace-settings-form-modal.component.ts */\nsettings-toggle {\n  width: calc(50% - 1rem);\n  margin: 0.5rem;\n}\n/*# sourceMappingURL=workplace-settings-form-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkplaceSettingsFormModalComponent, { className: "WorkplaceSettingsFormModalComponent", filePath: "apps/concierge/src/app/ui/app-settings/workplace-settings-form-modal.component.ts", lineNumber: 1888 });
})();

// apps/concierge/src/app/building-manager/building-list.component.ts
var _c05 = (a0, a1) => ({ key: "display_name", name: a0, content: a1 });
var _c13 = () => ({ key: "location", name: "Location", size: "13.5rem" });
var _c22 = (a0, a1) => ({ key: "timezone", name: a0, size: "12rem", content: a1 });
var _c32 = (a0) => ({ key: "region", name: a0, size: "11rem", sortable: false });
var _c42 = (a0) => ({ key: "level_count", name: a0, size: "5.5rem" });
var _c52 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3.25rem", sortable: false });
var _c62 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function BuildingListComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_8_Template_button_click_0_listener() {
      const row_r2 = \u0275\u0275restoreView(_r1).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyToClipboard(row_r2.id));
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    const data_r4 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r2.id, " ");
  }
}
function BuildingListComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r5 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r5);
  }
}
function BuildingListComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "level");
    \u0275\u0275pipe(2, "level");
  }
  if (rf & 2) {
    const data_r6 = ctx.data;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, data_r6)?.display_name || \u0275\u0275pipeBind1(2, 3, data_r6)?.name, " ");
  }
}
function BuildingListComponent_ng_template_14_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 14);
  }
  if (rf & 2) {
    const data_r7 = \u0275\u0275nextContext().data;
    \u0275\u0275property("source", data_r7[0]);
  }
}
function BuildingListComponent_ng_template_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "COMMON.IMAGES_EMPTY"));
  }
}
function BuildingListComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, BuildingListComponent_ng_template_14_Conditional_0_Template, 1, 1, "img", 14);
    \u0275\u0275conditionalCreate(1, BuildingListComponent_ng_template_14_Conditional_1_Template, 3, 3, "span", 15);
  }
  if (rf & 2) {
    const data_r7 = ctx.data;
    \u0275\u0275conditional(data_r7.length ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r7.length ? 1 : -1);
  }
}
function BuildingListComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "button", 17)(2, "icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 5)(6, "button", 18)(7, "div", 19)(8, "icon", 20);
    \u0275\u0275text(9, "edit_square");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "mat-menu", null, 6)(15, "button", 21);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_16_Template_button_click_15_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editWorkplaceSettings(row_r9));
    });
    \u0275\u0275elementStart(16, "div", 19)(17, "icon", 20);
    \u0275\u0275text(18, "meeting_room");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "button", 21);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_16_Template_button_click_22_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editConciergeSettings(row_r9));
    });
    \u0275\u0275elementStart(23, "div", 19)(24, "icon", 20);
    \u0275\u0275text(25, "support_agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "button", 21);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_16_Template_button_click_29_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editBookingPanelSettings(row_r9));
    });
    \u0275\u0275elementStart(30, "div", 19)(31, "icon", 20);
    \u0275\u0275text(32, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "button", 21);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_16_Template_button_click_36_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editVisitorKioskSettings(row_r9));
    });
    \u0275\u0275elementStart(37, "div", 19)(38, "icon", 20);
    \u0275\u0275text(39, "qr_code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div");
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "button", 21);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_16_Template_button_click_43_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editBuilding(row_r9));
    });
    \u0275\u0275elementStart(44, "div", 19)(45, "icon", 20);
    \u0275\u0275text(46, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div");
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "button", 21);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_16_Template_button_click_50_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setAutoRelease(row_r9));
    });
    \u0275\u0275elementStart(51, "div", 19)(52, "icon", 22);
    \u0275\u0275text(53, " release_alert ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div");
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "button", 21);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_16_Template_button_click_57_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setInduction(row_r9));
    });
    \u0275\u0275elementStart(58, "div", 19)(59, "icon", 22);
    \u0275\u0275text(60, " badge ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div");
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "button", 21);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_16_Template_button_click_64_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSupportIssueTypes(row_r9));
    });
    \u0275\u0275elementStart(65, "div", 19)(66, "icon", 22);
    \u0275\u0275text(67, " support_agent ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div");
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(71, "button", 21);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_16_Template_button_click_71_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeBuilding(row_r9));
    });
    \u0275\u0275elementStart(72, "div", 23)(73, "icon", 24);
    \u0275\u0275text(74, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div");
    \u0275\u0275text(76);
    \u0275\u0275pipe(77, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const menu_r10 = \u0275\u0275reference(5);
    const app_settings_menu_r11 = \u0275\u0275reference(14);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r10);
    \u0275\u0275advance(5);
    \u0275\u0275property("matMenuTriggerFor", app_settings_menu_r11);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 12, "APP.CONCIERGE.APP_SETTINGS"), " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 14, "APP.CONCIERGE.APP_SETTINGS_WORKPLACE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 16, "APP.CONCIERGE.APP_SETTINGS_CONCIERGE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 18, "APP.CONCIERGE.APP_SETTINGS_BOOKING_PANEL"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 20, "APP.CONCIERGE.APP_SETTINGS_VISITOR_KIOSK"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 22, "APP.CONCIERGE.BUILDINGS_EDIT"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(56, 24, "APP.CONCIERGE.BUILDINGS_AUTO_RELEASE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(63, 26, "APP.CONCIERGE.BUILDINGS_INDUCTION"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(70, 28, "APP.CONCIERGE.BUILDINGS_SUPPORT_TYPES"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(77, 30, "APP.CONCIERGE.BUILDINGS_REMOVE"), " ");
  }
}
var BuildingListComponent = class _BuildingListComponent {
  constructor() {
    this._manager = inject(BuildingManagementService);
    this._clipboard = inject(Clipboard);
    this._dialog = inject(MatDialog);
    this.buildings = this._manager.filtered_buildings;
    this.settings = {};
    this.editBuilding = (building) => this._manager.editBuilding(building);
    this.editBuildingMetadata = (building) => this._manager.editBuildingMetadata(building);
    this.removeBuilding = (building) => this._manager.removeBuilding(building);
    this.setAutoRelease = (building) => this._manager.setAutoRelease(building);
    this.setInduction = (building) => this._manager.setInduction(building);
    this.setSupportIssueTypes = (building) => this._manager.setSupportIssueTypes(building);
    this.copyToClipboard = (id) => {
      const success = this._clipboard.copy(id);
      if (success)
        notifySuccess(i18n("APP.CONCIERGE.BUILDINGS_COPIED_ID"));
    };
  }
  editWorkplaceSettings(zone) {
    this._dialog.open(WorkplaceSettingsFormModalComponent, {
      data: { zone }
    });
  }
  editConciergeSettings(zone) {
    this._dialog.open(ConciergeSettingsFormModalComponent, {
      data: { zone }
    });
  }
  editBookingPanelSettings(zone) {
    this._dialog.open(BookingPanelSettingsModalComponent, {
      data: { zone }
    });
  }
  editVisitorKioskSettings(zone) {
    this._dialog.open(VisitorKioskSettingsFormModalComponent, {
      data: { zone }
    });
  }
  static {
    this.\u0275fac = function BuildingListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BuildingListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BuildingListComponent, selectors: [["building-list"]], decls: 18, vars: 34, consts: [["name_template", ""], ["timezone_template", ""], ["level_template", ""], ["image_template", ""], ["action_template", ""], ["menu", "matMenu"], ["app_settings_menu", "matMenu"], [1, "absolute", "inset-0", "overflow-auto", "px-8"], [1, "block", "w-full", "min-w-248", "text-sm", 3, "data", "empty_message", "columns", "sortable"], [1, "h-20", "w-full"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "p-4", "font-mono", "text-xs"], ["auth", "", 1, "max-h-12", "max-w-32", 3, "source"], [1, "opacity-30"], [1, "mx-auto", "flex", "items-center", "p-2"], ["icon", "", "default", "", "matRipple", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], ["mat-menu-item", "", 3, "click"], ["className", "material-symbols-rounded", 1, "text-xl"], [1, "flex", "items-center", "space-x-2", "text-red-500"], [1, "text-error", "text-xl"]], template: function BuildingListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 7);
        \u0275\u0275element(1, "simple-table", 8);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275element(7, "div", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, BuildingListComponent_ng_template_8_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(10, BuildingListComponent_ng_template_10_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(12, BuildingListComponent_ng_template_12_Template, 3, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(14, BuildingListComponent_ng_template_14_Template, 2, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(16, BuildingListComponent_ng_template_16_Template, 78, 32, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const name_template_r12 = \u0275\u0275reference(9);
        const timezone_template_r13 = \u0275\u0275reference(11);
        const action_template_r14 = \u0275\u0275reference(17);
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.buildings())("empty_message", \u0275\u0275pipeBind1(2, 4, "APP.CONCIERGE.BUILDINGS_EMPTY"))("columns", \u0275\u0275pureFunction6(27, _c62, \u0275\u0275pureFunction2(14, _c05, \u0275\u0275pipeBind1(3, 6, "APP.CONCIERGE.BUILDINGS_NAME"), name_template_r12), \u0275\u0275pureFunction0(17, _c13), \u0275\u0275pureFunction2(18, _c22, \u0275\u0275pipeBind1(4, 8, "COMMON.TIMEZONE"), timezone_template_r13), \u0275\u0275pureFunction1(21, _c32, \u0275\u0275pipeBind1(5, 10, "RESOURCE.REGION")), \u0275\u0275pureFunction1(23, _c42, \u0275\u0275pipeBind1(6, 12, "APP.CONCIERGE.BUILDINGS_LEVELS")), \u0275\u0275pureFunction1(25, _c52, action_template_r14)))("sortable", true);
      }
    }, dependencies: [
      SimpleTableComponent,
      AuthenticatedImageDirective,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      IconComponent,
      TranslatePipe,
      LevelPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuildingListComponent, [{
    type: Component,
    args: [{ selector: "building-list", template: `
        <div class="absolute inset-0 overflow-auto px-8">
            <simple-table
                class="block w-full min-w-248 text-sm"
                [data]="buildings()"
                [empty_message]="'APP.CONCIERGE.BUILDINGS_EMPTY' | translate"
                [columns]="[
                    {
                        key: 'display_name',
                        name: 'APP.CONCIERGE.BUILDINGS_NAME' | translate,
                        content: name_template,
                    },
                    {
                        key: 'location',
                        name: 'Location',
                        size: '13.5rem',
                    },
                    {
                        key: 'timezone',
                        name: 'COMMON.TIMEZONE' | translate,
                        size: '12rem',
                        content: timezone_template,
                    },
                    {
                        key: 'region',
                        name: 'RESOURCE.REGION' | translate,
                        size: '11rem',
                        sortable: false,
                    },
                    {
                        key: 'level_count',
                        name: 'APP.CONCIERGE.BUILDINGS_LEVELS' | translate,
                        size: '5.5rem',
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        size: '3.25rem',
                        sortable: false,
                    },
                ]"
                [sortable]="true"
            ></simple-table>
            <div class="h-20 w-full"></div>
        </div>
        <ng-template #name_template let-row="row" let-data="data">
            <button
                class="px-4 py-2 text-left leading-tight"
                (click)="copyToClipboard(row.id)"
            >
                <div class="">{{ data }}</div>
                <div class="font-mono text-[0.625rem] opacity-30">
                    {{ row.id }}
                </div>
            </button>
        </ng-template>
        <ng-template #timezone_template let-data="data">
            <div class="p-4 font-mono text-xs">{{ data }}</div>
        </ng-template>
        <ng-template #level_template let-data="data">
            {{ (data | level)?.display_name || (data | level)?.name }}
        </ng-template>
        <ng-template #image_template let-data="data">
            @if (data.length) {
                <img auth [source]="data[0]" class="max-h-12 max-w-32" />
            }
            @if (!data.length) {
                <span class="opacity-30">{{
                    'COMMON.IMAGES_EMPTY' | translate
                }}</span>
            }
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="mx-auto flex items-center p-2">
                <button icon default matRipple [matMenuTriggerFor]="menu">
                    <icon>more_vert</icon>
                </button>
                <mat-menu #menu="matMenu">
                    <button
                        mat-menu-item
                        [matMenuTriggerFor]="app_settings_menu"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">edit_square</icon>
                            <div>
                                {{ 'APP.CONCIERGE.APP_SETTINGS' | translate }}
                            </div>
                        </div>
                    </button>
                    <mat-menu #app_settings_menu="matMenu">
                        <button
                            mat-menu-item
                            (click)="editWorkplaceSettings(row)"
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">meeting_room</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.APP_SETTINGS_WORKPLACE'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        <button
                            mat-menu-item
                            (click)="editConciergeSettings(row)"
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">support_agent</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.APP_SETTINGS_CONCIERGE'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        <button
                            mat-menu-item
                            (click)="editBookingPanelSettings(row)"
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">event_busy</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.APP_SETTINGS_BOOKING_PANEL'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        <button
                            mat-menu-item
                            (click)="editVisitorKioskSettings(row)"
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">qr_code</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.APP_SETTINGS_VISITOR_KIOSK'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                    </mat-menu>
                    <button mat-menu-item (click)="editBuilding(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">edit</icon>
                            <div>
                                {{ 'APP.CONCIERGE.BUILDINGS_EDIT' | translate }}
                            </div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="setAutoRelease(row)">
                        <div class="flex items-center space-x-2">
                            <icon
                                className="material-symbols-rounded"
                                class="text-xl"
                            >
                                release_alert
                            </icon>
                            <div>
                                {{
                                    'APP.CONCIERGE.BUILDINGS_AUTO_RELEASE'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="setInduction(row)">
                        <div class="flex items-center space-x-2">
                            <icon
                                className="material-symbols-rounded"
                                class="text-xl"
                            >
                                badge
                            </icon>
                            <div>
                                {{
                                    'APP.CONCIERGE.BUILDINGS_INDUCTION'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="setSupportIssueTypes(row)">
                        <div class="flex items-center space-x-2">
                            <icon
                                className="material-symbols-rounded"
                                class="text-xl"
                            >
                                support_agent
                            </icon>
                            <div>
                                {{
                                    'APP.CONCIERGE.BUILDINGS_SUPPORT_TYPES'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="removeBuilding(row)">
                        <div class="flex items-center space-x-2 text-red-500">
                            <icon class="text-error text-xl"> delete </icon>
                            <div>
                                {{
                                    'APP.CONCIERGE.BUILDINGS_REMOVE' | translate
                                }}
                            </div>
                        </div>
                    </button>
                </mat-menu>
            </div>
        </ng-template>
    `, imports: [
      SimpleTableComponent,
      AuthenticatedImageDirective,
      MatMenuModule,
      TranslatePipe,
      IconComponent,
      LevelPipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BuildingListComponent, { className: "BuildingListComponent", filePath: "apps/concierge/src/app/building-manager/building-list.component.ts", lineNumber: 250 });
})();

// apps/concierge/src/app/level-manager/level-map-editor-modal.component.ts
var _forTrack06 = ($index, $item) => $item.editor_index;
function LevelMapEditorModalComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "icon", 5);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function LevelMapEditorModalComponent_Conditional_2_For_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 27);
  }
}
function LevelMapEditorModalComponent_Conditional_2_For_18_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35)(1, "icon", 36);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
  }
}
function LevelMapEditorModalComponent_Conditional_2_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function LevelMapEditorModalComponent_Conditional_2_For_18_Template_button_click_0_listener() {
      const element_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectElement(element_r4.editor_index));
    })("mouseenter", function LevelMapEditorModalComponent_Conditional_2_For_18_Template_button_mouseenter_0_listener() {
      const element_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.hoverElement(element_r4.editor_index));
    })("mouseleave", function LevelMapEditorModalComponent_Conditional_2_For_18_Template_button_mouseleave_0_listener() {
      const element_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.clearHoveredElement(element_r4.editor_index));
    });
    \u0275\u0275conditionalCreate(1, LevelMapEditorModalComponent_Conditional_2_For_18_Conditional_1_Template, 1, 0, "div", 27);
    \u0275\u0275elementStart(2, "span", 28)(3, "span", 29);
    \u0275\u0275element(4, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 31);
    \u0275\u0275element(6, "span", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 32)(8, "div", 33);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 34);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(12, LevelMapEditorModalComponent_Conditional_2_For_18_Conditional_12_Template, 3, 0, "span", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-secondary", ctx_r0.selected_index() === element_r4.editor_index)("text-secondary-content", ctx_r0.selected_index() === element_r4.editor_index);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.selected_index() === element_r4.editor_index ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r0.colourPreview(element_r4.stroke));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r0.colourPreview(element_r4.fill));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", element_r4.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" <", element_r4.tag, "> ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isElementEdited(element_r4.editor_index) ? 12 : -1);
  }
}
function LevelMapEditorModalComponent_Conditional_2_ForEmpty_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1, " No SVG elements found. ");
    \u0275\u0275elementEnd();
  }
}
function LevelMapEditorModalComponent_Conditional_2_Conditional_22_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 38);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r0.overlay_url(), \u0275\u0275sanitizeUrl);
  }
}
function LevelMapEditorModalComponent_Conditional_2_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "img", 37);
    \u0275\u0275conditionalCreate(2, LevelMapEditorModalComponent_Conditional_2_Conditional_22_Conditional_2_Template, 1, 1, "img", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.preview_url(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.overlay_url() ? 2 : -1);
  }
}
function LevelMapEditorModalComponent_Conditional_2_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "icon", 39);
    \u0275\u0275text(2, "image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No SVG loaded.");
    \u0275\u0275elementEnd()();
  }
}
function LevelMapEditorModalComponent_Conditional_2_Conditional_25_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 57);
    \u0275\u0275listener("click", function LevelMapEditorModalComponent_Conditional_2_Conditional_25_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const element_r7 = \u0275\u0275nextContext();
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.resetElement(element_r7.editor_index));
    });
    \u0275\u0275elementStart(1, "icon", 36);
    \u0275\u0275text(2, "undo");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Reset ");
    \u0275\u0275elementEnd();
  }
}
function LevelMapEditorModalComponent_Conditional_2_Conditional_25_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56)(1, "label", 58);
    \u0275\u0275text(2, " Text ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 47)(4, "textarea", 59);
    \u0275\u0275listener("ngModelChange", function LevelMapEditorModalComponent_Conditional_2_Conditional_25_Conditional_30_Template_textarea_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.updateSelectedText($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r0.selected_text());
    \u0275\u0275control();
  }
}
function LevelMapEditorModalComponent_Conditional_2_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "h3", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, LevelMapEditorModalComponent_Conditional_2_Conditional_25_Conditional_5_Template, 4, 0, "button", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 44)(7, "div", 45)(8, "label", 46);
    \u0275\u0275text(9, " Element ID ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-form-field", 47)(11, "input", 48);
    \u0275\u0275listener("ngModelChange", function LevelMapEditorModalComponent_Conditional_2_Conditional_25_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateSelectedId($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 45)(13, "label", 49);
    \u0275\u0275text(14, " Fill colour ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-form-field", 47)(16, "input", 50);
    \u0275\u0275listener("ngModelChange", function LevelMapEditorModalComponent_Conditional_2_Conditional_25_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateSelectedFill($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(17, "button", 51);
    \u0275\u0275listener("click", function LevelMapEditorModalComponent_Conditional_2_Conditional_25_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r5);
      const fill_picker_r8 = \u0275\u0275reference(20);
      return \u0275\u0275resetView(fill_picker_r8.click());
    });
    \u0275\u0275element(18, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 52, 0);
    \u0275\u0275listener("input", function LevelMapEditorModalComponent_Conditional_2_Conditional_25_Template_input_input_19_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateSelectedFill($event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 45)(22, "label", 53);
    \u0275\u0275text(23, " Stroke colour ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-form-field", 47)(25, "input", 54);
    \u0275\u0275listener("ngModelChange", function LevelMapEditorModalComponent_Conditional_2_Conditional_25_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateSelectedStroke($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(26, "button", 55);
    \u0275\u0275listener("click", function LevelMapEditorModalComponent_Conditional_2_Conditional_25_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r5);
      const stroke_picker_r9 = \u0275\u0275reference(29);
      return \u0275\u0275resetView(stroke_picker_r9.click());
    });
    \u0275\u0275element(27, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 52, 1);
    \u0275\u0275listener("input", function LevelMapEditorModalComponent_Conditional_2_Conditional_25_Template_input_input_28_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateSelectedStroke($event.target.value));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(30, LevelMapEditorModalComponent_Conditional_2_Conditional_25_Conditional_30_Template, 5, 1, "div", 56);
  }
  if (rf & 2) {
    const element_r7 = ctx;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", element_r7.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" <", element_r7.tag, "> ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isElementEdited(element_r7.editor_index) ? 5 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r0.selected_id());
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r0.selected_fill());
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r0.colourPreview(ctx_r0.selected_fill()));
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.colourPickerValue(ctx_r0.selected_fill()));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r0.selected_stroke());
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r0.colourPreview(ctx_r0.selected_stroke()));
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.colourPickerValue(ctx_r0.selected_stroke()));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(element_r7.can_edit_text ? 30 : -1);
  }
}
function LevelMapEditorModalComponent_Conditional_2_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "icon", 60);
    \u0275\u0275text(2, "touch_app");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Select an element from the list to edit its ID, colours, or text. ");
    \u0275\u0275elementEnd()();
  }
}
function LevelMapEditorModalComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 4)(1, "aside", 7)(2, "div", 8)(3, "div", 9)(4, "h3", 10);
    \u0275\u0275text(5, " Map elements ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "mat-form-field", 12)(9, "icon", 13);
    \u0275\u0275text(10, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function LevelMapEditorModalComponent_Conditional_2_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.filter, $event) || (ctx_r0.filter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "label", 15)(13, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function LevelMapEditorModalComponent_Conditional_2_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.show_only_ids, $event) || (ctx_r0.show_only_ids = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "Only show elements with IDs");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 17);
    \u0275\u0275repeaterCreate(17, LevelMapEditorModalComponent_Conditional_2_For_18_Template, 13, 12, "button", 18, _forTrack06, false, LevelMapEditorModalComponent_Conditional_2_ForEmpty_19_Template, 2, 0, "div", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "main", 20)(21, "div", 21);
    \u0275\u0275conditionalCreate(22, LevelMapEditorModalComponent_Conditional_2_Conditional_22_Template, 3, 2, "div", 22)(23, LevelMapEditorModalComponent_Conditional_2_Conditional_23_Template, 5, 0, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "section", 24);
    \u0275\u0275conditionalCreate(25, LevelMapEditorModalComponent_Conditional_2_Conditional_25_Template, 31, 13)(26, LevelMapEditorModalComponent_Conditional_2_Conditional_26_Template, 5, 0, "div", 25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2(" ", ctx_r0.filtered_elements().length, " / ", ctx_r0.elements().length, " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.filter);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.show_only_ids);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.filtered_elements());
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.preview_url() ? 22 : 23);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_8_0 = ctx_r0.selected_element()) ? 25 : 26, tmp_8_0);
  }
}
var EDITABLE_TAGS = /* @__PURE__ */ new Set([
  "a",
  "circle",
  "ellipse",
  "g",
  "image",
  "line",
  "path",
  "polygon",
  "polyline",
  "rect",
  "text",
  "tspan",
  "use"
]);
var TEXT_TAGS = /* @__PURE__ */ new Set(["text", "tspan"]);
var CONTAINER_TAGS = /* @__PURE__ */ new Set(["a", "g"]);
var LINE_TAGS = /* @__PURE__ */ new Set(["line"]);
var REFERENCE_TAGS = /* @__PURE__ */ new Set(["image", "use"]);
var NON_RENDERED_TAGS = /* @__PURE__ */ new Set([
  "clippath",
  "defs",
  "filter",
  "lineargradient",
  "marker",
  "mask",
  "metadata",
  "pattern",
  "radialgradient",
  "script",
  "style",
  "symbol"
]);
var SVG_NS = "http://www.w3.org/2000/svg";
var SELECTED_OUTLINE_COLOUR = "#00A3FF";
var HOVERED_OUTLINE_COLOUR = "#FFB020";
var LevelMapEditorModalComponent = class _LevelMapEditorModalComponent {
  constructor() {
    this._uploads = inject(UploadsService);
    this._level = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._document = null;
    this._preview_object_url = "";
    this._overlay_object_url = "";
    this._style_rules = [];
    this._original_elements = /* @__PURE__ */ new Map();
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.error = signal(
      "",
      ...ngDevMode ? [{ debugName: "error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.elements = signal(
      [],
      ...ngDevMode ? [{ debugName: "elements" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filter = signal(
      "",
      ...ngDevMode ? [{ debugName: "filter" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_only_ids = signal(
      false,
      ...ngDevMode ? [{ debugName: "show_only_ids" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_index = signal(
      -1,
      ...ngDevMode ? [{ debugName: "selected_index" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hovered_index = signal(
      -1,
      ...ngDevMode ? [{ debugName: "hovered_index" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_id = signal(
      "",
      ...ngDevMode ? [{ debugName: "selected_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_fill = signal(
      "",
      ...ngDevMode ? [{ debugName: "selected_fill" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_stroke = signal(
      "",
      ...ngDevMode ? [{ debugName: "selected_stroke" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_text = signal(
      "",
      ...ngDevMode ? [{ debugName: "selected_text" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.preview_url = signal(
      "",
      ...ngDevMode ? [{ debugName: "preview_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.overlay_url = signal(
      "",
      ...ngDevMode ? [{ debugName: "overlay_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.svg_markup = signal(
      "",
      ...ngDevMode ? [{ debugName: "svg_markup" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.dirty = signal(
      false,
      ...ngDevMode ? [{ debugName: "dirty" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.edited_elements = signal(
      /* @__PURE__ */ new Set(),
      ...ngDevMode ? [{ debugName: "edited_elements" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered_elements = computed(
      () => {
        const filter_text = this.filter().trim().toLowerCase();
        const elements = this.show_only_ids() ? this.elements().filter((element) => !!element.id) : this.elements();
        if (!filter_text)
          return elements;
        return elements.filter((element) => [
          element.id,
          element.tag,
          element.text,
          element.fill,
          element.stroke
        ].join(" ").toLowerCase().includes(filter_text));
      },
      ...ngDevMode ? [{ debugName: "filtered_elements" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_element = computed(
      () => this.elements().find((element) => element.editor_index === this.selected_index()),
      ...ngDevMode ? [{ debugName: "selected_element" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.outlined_indices = computed(
      () => {
        const selected_index = this.selected_index();
        const hovered_index = this.hovered_index();
        const indices = [];
        if (selected_index >= 0)
          indices.push(selected_index);
        if (hovered_index >= 0 && hovered_index !== selected_index) {
          indices.push(hovered_index);
        }
        return indices;
      },
      ...ngDevMode ? [{ debugName: "outlined_indices" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_save = computed(
      () => !!this.svg_markup() && this.dirty() && !this.loading(),
      ...ngDevMode ? [{ debugName: "can_save" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async ngOnInit() {
    if (!this._level?.map_id) {
      this.error.set("This level does not have an SVG map URL set.");
      return;
    }
    this.loading.set("Loading SVG map...");
    try {
      const details = await getMapDetails(this._level.map_id);
      this._loadSvg(details.raw_data);
    } catch (error) {
      this.error.set(`Failed to load the SVG map. ${this._errorMessage(error)}`);
    } finally {
      this.loading.set("");
    }
  }
  ngOnDestroy() {
    this._revokePreviewUrl();
  }
  selectElement(editor_index) {
    if (!this._setSelectedElement(editor_index))
      return;
    this._refreshOverlay();
  }
  hoverElement(editor_index) {
    if (this.hovered_index() === editor_index)
      return;
    this.hovered_index.set(editor_index);
    this._refreshOverlay();
  }
  clearHoveredElement(editor_index) {
    if (this.hovered_index() !== editor_index)
      return;
    this.hovered_index.set(-1);
    this._refreshOverlay();
  }
  updateSelectedId(value) {
    this.selected_id.set(value);
    this.applySelectedChanges();
  }
  updateSelectedFill(value) {
    this.selected_fill.set(value);
    this.applySelectedChanges();
  }
  updateSelectedStroke(value) {
    this.selected_stroke.set(value);
    this.applySelectedChanges();
  }
  updateSelectedText(value) {
    this.selected_text.set(value);
    this.applySelectedChanges();
  }
  applySelectedChanges() {
    const editor_index = this.selected_index();
    const element = this._elementAtIndex(editor_index);
    if (!element)
      return;
    this._setAttribute(element, "id", this.selected_id().trim());
    this._setColourAttribute(element, "fill", this.selected_fill().trim());
    this._setColourAttribute(element, "stroke", this.selected_stroke().trim());
    if (TEXT_TAGS.has(element.tagName.toLowerCase())) {
      element.textContent = this.selected_text();
    }
    this._refreshElements();
    this.selected_index.set(editor_index);
    this.edited_elements.update((indices) => /* @__PURE__ */ new Set([...indices, editor_index]));
    this.dirty.set(true);
    this._refreshPreview();
  }
  colourPreview(value) {
    const colour = (value || "").replace("!important", "").trim();
    return colour && typeof CSS !== "undefined" && CSS.supports("color", colour) ? colour : "transparent";
  }
  colourPickerValue(value) {
    const colour = (value || "").replace("!important", "").trim();
    return /^#[0-9a-f]{6}$/i.test(colour) ? colour : "#000000";
  }
  isElementEdited(editor_index) {
    return this.edited_elements().has(editor_index);
  }
  resetElement(editor_index) {
    const element = this._elementAtIndex(editor_index);
    const original = this._original_elements.get(editor_index);
    if (!element || !original)
      return;
    element.replaceWith(original.cloneNode(true));
    this.edited_elements.update((indices) => {
      const next = new Set(indices);
      next.delete(editor_index);
      return next;
    });
    this._refreshElements();
    this.hovered_index.set(-1);
    this._setSelectedElement(editor_index);
    this.dirty.set(this.edited_elements().size > 0);
    this._refreshPreview();
  }
  async save() {
    if (!this._document || !this.svg_markup())
      return;
    const duplicate_id = this._duplicateId();
    if (duplicate_id) {
      notifyError(`Duplicate SVG element ID "${duplicate_id}"`);
      return;
    }
    this.loading.set("Uploading edited SVG map...");
    try {
      const file = new File([this.svg_markup()], this._fileName(), {
        type: "image/svg+xml"
      });
      const upload_id = await this._uploads.uploadFileToCompletion(file);
      const map_id = `/api/engine/v2/uploads/${encodeURIComponent(upload_id)}/url`;
      this.loading.set("Updating level map URL...");
      const level_name = this._level.name || `LEVEL ${Rt().description} ${this._level.display_name || this._level.id}`;
      const response = await Ya(this._level.id, {
        id: this._level.id,
        display_name: this._level.display_name,
        parent_id: this._level.parent_id,
        map_id,
        name: level_name,
        tags: this._level.tags?.length ? this._level.tags : ["level"]
      });
      notifySuccess("Successfully updated level SVG map.");
      this._dialog_ref.close(__spreadProps(__spreadValues(__spreadValues({}, this._level), response), {
        map_id,
        tags: response?.tags?.length ? response.tags : this._level.tags?.length ? this._level.tags : ["level"]
      }));
    } catch (error) {
      notifyError(`Failed to save the SVG map. ${this._errorMessage(error)}`);
    } finally {
      this.loading.set("");
    }
  }
  _loadSvg(svg_markup) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svg_markup, "image/svg+xml");
    const parser_error = doc.querySelector("parsererror");
    const svg = doc.querySelector("svg");
    if (parser_error || !svg)
      throw new Error("Invalid SVG document.");
    this._document = doc;
    this._style_rules = this._svgStyleRules(doc);
    this._original_elements = this._originalElementMap(doc);
    this.edited_elements.set(/* @__PURE__ */ new Set());
    this.error.set("");
    this._refreshElements();
    this._setSelectedElement(this.elements()[0]?.editor_index ?? -1);
    this.dirty.set(false);
    this._refreshPreview();
  }
  _refreshElements() {
    const svg = this._document?.querySelector("svg");
    if (!svg) {
      this.elements.set([]);
      return;
    }
    const elements = Array.from(svg.querySelectorAll("*")).map((element, index) => ({ element, index })).filter(({ element }) => this._isEditableElement(element)).filter(({ element }) => this._isVisibleElement(element)).map(({ element, index }) => this._elementDetails(element, index));
    this.elements.set(elements);
  }
  _setSelectedElement(editor_index) {
    const element = this._elementAtIndex(editor_index);
    if (!element)
      return false;
    const details = this._elementDetails(element, editor_index);
    this.selected_index.set(editor_index);
    this.selected_id.set(details.id);
    this.selected_fill.set(details.fill);
    this.selected_stroke.set(details.stroke);
    this.selected_text.set(details.text);
    return true;
  }
  _originalElementMap(doc) {
    const svg = doc.querySelector("svg");
    const elements = /* @__PURE__ */ new Map();
    if (!svg)
      return elements;
    Array.from(svg.querySelectorAll("*")).forEach((element, index) => elements.set(index, element.cloneNode(true)));
    return elements;
  }
  _refreshPreview() {
    const markup = this._serialiseSvg();
    this.svg_markup.set(markup);
    this._revokeMapPreviewUrl();
    this._preview_object_url = URL.createObjectURL(new Blob([markup], { type: "image/svg+xml" }));
    this.preview_url.set(this._preview_object_url);
    this._refreshOverlay();
  }
  _refreshOverlay() {
    this._revokeOverlayUrl();
    const overlay_markup = this._serialiseSelectionOverlay();
    if (!overlay_markup) {
      this.overlay_url.set("");
      return;
    }
    this._overlay_object_url = URL.createObjectURL(new Blob([overlay_markup], { type: "image/svg+xml" }));
    this.overlay_url.set(this._overlay_object_url);
  }
  _serialiseSvg() {
    const svg = this._document?.querySelector("svg");
    if (!svg)
      return "";
    return new XMLSerializer().serializeToString(svg);
  }
  _serialiseSelectionOverlay() {
    const svg = this._document?.querySelector("svg");
    const outlines = this.outlined_indices();
    if (!svg || !outlines.length)
      return "";
    const overlay_doc = document.implementation.createDocument(SVG_NS, "svg", null);
    const overlay_svg = overlay_doc.documentElement;
    this._copySvgViewport(svg, overlay_svg);
    overlay_svg.setAttribute("pointer-events", "none");
    for (const editor_index of outlines) {
      const selected_element = this._elementAtIndex(editor_index);
      if (!selected_element)
        continue;
      const overlay_element = overlay_doc.importNode(this._selectedOverlayElement(selected_element), true);
      this._highlightElement(overlay_element, this._outlineColour(editor_index));
      overlay_svg.appendChild(overlay_element);
    }
    return new XMLSerializer().serializeToString(overlay_svg);
  }
  _outlineColour(editor_index) {
    return editor_index === this.hovered_index() ? HOVERED_OUTLINE_COLOUR : SELECTED_OUTLINE_COLOUR;
  }
  _revokePreviewUrl() {
    this._revokeMapPreviewUrl();
    this._revokeOverlayUrl();
  }
  _revokeMapPreviewUrl() {
    if (this._preview_object_url) {
      URL.revokeObjectURL(this._preview_object_url);
      this._preview_object_url = "";
    }
    this.preview_url.set("");
  }
  _revokeOverlayUrl() {
    if (this._overlay_object_url) {
      URL.revokeObjectURL(this._overlay_object_url);
      this._overlay_object_url = "";
    }
    this.overlay_url.set("");
  }
  _elementAtIndex(editor_index) {
    const svg = this._document?.querySelector("svg");
    if (!svg || editor_index < 0)
      return null;
    return Array.from(svg.querySelectorAll("*"))[editor_index] || null;
  }
  _elementDetails(element, editor_index) {
    const tag = element.tagName.toLowerCase();
    const can_edit_text = TEXT_TAGS.has(tag);
    const text = can_edit_text ? (element.textContent || "").trim() : "";
    const id = element.getAttribute("id") || "";
    return {
      editor_index,
      tag,
      id,
      fill: this._visibleColourValue(element, "fill"),
      stroke: this._visibleColourValue(element, "stroke"),
      text,
      can_edit_text,
      label: id || text || `${tag} ${editor_index + 1}`
    };
  }
  _isEditableElement(element) {
    const tag = element.tagName.toLowerCase();
    return EDITABLE_TAGS.has(tag) || !!element.getAttribute("id") || !!this._colourAttribute(element, "fill") || !!this._colourAttribute(element, "stroke");
  }
  _isVisibleElement(element) {
    if (this._hasHiddenAncestor(element))
      return false;
    const tag = element.tagName.toLowerCase();
    if (NON_RENDERED_TAGS.has(tag))
      return false;
    if (CONTAINER_TAGS.has(tag)) {
      return Array.from(element.children).some((child) => this._isVisibleElement(child));
    }
    if (TEXT_TAGS.has(tag)) {
      return !!(element.textContent || "").trim() && (this._hasVisibleFill(element) || this._hasVisibleStroke(element));
    }
    if (LINE_TAGS.has(tag))
      return this._hasVisibleStroke(element);
    if (REFERENCE_TAGS.has(tag))
      return this._hasReference(element);
    return this._hasVisibleFill(element) || this._hasVisibleStroke(element);
  }
  _hasHiddenAncestor(element) {
    let current = element;
    while (current) {
      const tag = current.tagName.toLowerCase();
      if (NON_RENDERED_TAGS.has(tag))
        return true;
      if (current.hasAttribute("hidden") || this._styleValue(current, "display") === "none" || ["hidden", "collapse"].includes(this._styleValue(current, "visibility")) || this._numberValue(this._styleValue(current, "opacity")) === 0) {
        return true;
      }
      current = current.parentElement;
    }
    return false;
  }
  _hasVisibleFill(element) {
    const fill = this._inheritedStyleValue(element, "fill", "black");
    const fill_opacity = this._numberValue(this._inheritedStyleValue(element, "fill-opacity", "1"));
    return !this._isTransparentColour(fill || "black") && fill_opacity !== 0;
  }
  _hasVisibleStroke(element) {
    const stroke = this._inheritedStyleValue(element, "stroke", "");
    const stroke_opacity = this._numberValue(this._inheritedStyleValue(element, "stroke-opacity", "1"));
    const stroke_width = this._numberValue(this._inheritedStyleValue(element, "stroke-width", "1"));
    return !!stroke && !this._isTransparentColour(stroke) && stroke_opacity !== 0 && stroke_width !== 0;
  }
  _hasReference(element) {
    return element.hasAttribute("href") || element.hasAttribute("xlink:href") || element.hasAttributeNS("http://www.w3.org/1999/xlink", "href");
  }
  _colourAttribute(element, name) {
    return element.getAttribute(name) || element.style?.getPropertyValue(name) || "";
  }
  _visibleColourValue(element, name) {
    const fallback = name === "fill" ? "black" : "";
    return this._inheritedStyleValue(element, name, fallback);
  }
  _styleValue(element, name) {
    const inline_value = element.style?.getPropertyValue(name);
    if (inline_value)
      return this._cleanStyleValue(inline_value);
    const css_value = this._cssStyleValue(element, name);
    if (css_value)
      return css_value;
    return this._cleanStyleValue(element.getAttribute(name) || "") || "";
  }
  _cssStyleValue(element, name) {
    let value = "";
    let specificity = -1;
    for (const rule of this._style_rules) {
      const style_value = rule.styles[name];
      if (!style_value)
        continue;
      for (const selector of rule.selectors) {
        if (!this._matchesSelector(element, selector))
          continue;
        const next_specificity = this._selectorSpecificity(selector);
        if (next_specificity >= specificity) {
          value = style_value;
          specificity = next_specificity;
        }
      }
    }
    return value;
  }
  _svgStyleRules(doc) {
    const rules = [];
    for (const style of Array.from(doc.querySelectorAll("style"))) {
      const css = (style.textContent || "").replace(/\/\*[\s\S]*?\*\//g, "");
      const rule_regex = /([^{}@]+)\{([^{}]+)\}/g;
      let match;
      while (match = rule_regex.exec(css)) {
        const selectors = match[1].split(",").map((_) => _.trim()).filter((_) => !!_);
        const styles = match[2].split(";").map((_) => _.trim()).filter((_) => _.includes(":")).reduce((map2, declaration) => {
          const [key, ...parts] = declaration.split(":");
          const value = this._cleanStyleValue(parts.join(":"));
          if (key.trim() && value) {
            map2[key.trim()] = value;
          }
          return map2;
        }, {});
        if (selectors.length && Object.keys(styles).length) {
          rules.push({ selectors, styles });
        }
      }
    }
    return rules;
  }
  _matchesSelector(element, selector) {
    try {
      return element.matches(selector);
    } catch {
      return false;
    }
  }
  _selectorSpecificity(selector) {
    const id_count = selector.match(/#[\w-]+/g)?.length || 0;
    const class_count = selector.match(/(\.[\w-]+|\[[^\]]+\]|:[\w-]+)/g)?.length || 0;
    const tag_count = selector.replace(/#[\w-]+/g, " ").replace(/(\.[\w-]+|\[[^\]]+\]|:[\w-]+)/g, " ").split(/[\s>+~]+/).filter((_) => !!_.trim() && _.trim() !== "*").length || 0;
    return id_count * 100 + class_count * 10 + tag_count;
  }
  _cleanStyleValue(value) {
    return value.replace("!important", "").trim();
  }
  _inheritedStyleValue(element, name, fallback) {
    let current = element;
    while (current) {
      const value = this._styleValue(current, name);
      if (value)
        return value;
      current = current.parentElement;
    }
    return fallback;
  }
  _numberValue(value) {
    if (!value)
      return null;
    const number = parseFloat(value);
    return Number.isFinite(number) ? number : null;
  }
  _isTransparentColour(value) {
    const colour = value.trim().toLowerCase();
    return !colour || colour === "none" || colour === "transparent" || colour === "rgba(0,0,0,0)" || colour === "rgba(0, 0, 0, 0)";
  }
  _copySvgViewport(source, target) {
    target.setAttribute("xmlns", SVG_NS);
    for (const attribute of [
      "viewBox",
      "width",
      "height",
      "preserveAspectRatio"
    ]) {
      const value = source.getAttribute(attribute);
      if (value)
        target.setAttribute(attribute, value);
    }
    if (!target.getAttribute("viewBox")) {
      const width = source.getAttribute("width") || "100%";
      const height = source.getAttribute("height") || "100%";
      target.setAttribute("width", width);
      target.setAttribute("height", height);
    }
  }
  _selectedOverlayElement(element) {
    let clone = element.cloneNode(true);
    let parent = element.parentElement;
    while (parent && parent.tagName.toLowerCase() !== "svg") {
      const parent_clone = parent.cloneNode(false);
      parent_clone.appendChild(clone);
      clone = parent_clone;
      parent = parent.parentElement;
    }
    return clone;
  }
  _highlightElement(element, colour) {
    this._stripIds(element);
    const targets = [element, ...Array.from(element.querySelectorAll("*"))];
    for (const target of targets) {
      if (target.tagName === "title" || target.tagName === "desc") {
        continue;
      }
      target.setAttribute("data-map-editor-highlight", "true");
      target.setAttribute("fill", "none");
      target.setAttribute("stroke", colour);
      target.setAttribute("stroke-width", "3");
      target.setAttribute("vector-effect", "non-scaling-stroke");
      target.setAttribute("pointer-events", "none");
      target.setAttribute("opacity", "1");
      target.removeAttribute("display");
      target.removeAttribute("visibility");
      const style = target.style;
      style?.setProperty("fill", "none", "important");
      style?.setProperty("stroke", colour, "important");
      style?.setProperty("stroke-width", "3", "important");
      style?.setProperty("vector-effect", "non-scaling-stroke", "important");
      style?.setProperty("pointer-events", "none", "important");
      style?.setProperty("opacity", "1", "important");
      style?.removeProperty("display");
      style?.removeProperty("visibility");
    }
    const title = element.ownerDocument.createElementNS(SVG_NS, "title");
    title.textContent = "Selected map element";
    element.insertBefore(title, element.firstChild);
  }
  _stripIds(element) {
    element.removeAttribute("id");
    for (const child of Array.from(element.querySelectorAll("[id]"))) {
      child.removeAttribute("id");
    }
  }
  _setAttribute(element, name, value) {
    if (value)
      element.setAttribute(name, value);
    else
      element.removeAttribute(name);
  }
  _setColourAttribute(element, name, value) {
    if (value) {
      element.setAttribute(name, value);
      element.style?.setProperty(name, value);
    } else {
      element.removeAttribute(name);
      element.style?.removeProperty(name);
    }
  }
  _duplicateId() {
    const svg = this._document?.querySelector("svg");
    if (!svg)
      return "";
    const seen = /* @__PURE__ */ new Set();
    for (const element of Array.from(svg.querySelectorAll("[id]"))) {
      const id = element.getAttribute("id") || "";
      if (!id)
        continue;
      if (seen.has(id))
        return id;
      seen.add(id);
    }
    return "";
  }
  _fileName() {
    const name = this._level.display_name || this._level.name || this._level.id;
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "level-map";
    return `${slug}.svg`;
  }
  _errorMessage(error) {
    return error?.message || error?.error || `${error || ""}`;
  }
  static {
    this.\u0275fac = function LevelMapEditorModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LevelMapEditorModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LevelMapEditorModalComponent, selectors: [["level-map-editor-modal"]], decls: 3, vars: 4, consts: [["fill_picker", ""], ["stroke_picker", ""], ["heading", "Edit SVG map", "confirm_text", "Save SVG map", 3, "confirm", "full_width", "loading", "confirm_disabled"], [1, "border-error/30", "bg-error/10", "mx-auto", "mt-8", "flex", "max-w-2xl", "flex-col", "items-center", "justify-center", "rounded", "border", "p-8", "text-center"], [1, "grid", "h-[calc(100vh-10rem)]", "min-h-0", "grid-cols-[24rem_minmax(0,1fr)]", "gap-4", "overflow-hidden"], [1, "text-error", "text-4xl"], [1, "mt-2"], [1, "border-base-300", "bg-base-100", "flex", "min-h-0", "flex-col", "overflow-hidden", "rounded-md", "border", "shadow-sm"], [1, "border-base-300", "flex", "flex-col", "gap-2", "border-b", "p-3"], [1, "flex", "items-center", "justify-between"], [1, "text-sm", "font-semibold"], [1, "bg-base-200", "rounded-full", "px-2", "py-0.5", "text-xs", "font-medium", "opacity-70"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "w-full"], ["matPrefix", "", 1, "mx-1", "opacity-50"], ["matInput", "", "name", "element-filter", "placeholder", "Filter elements", 3, "ngModelChange", "ngModel"], ["for", "svg-elements-with-ids", 1, "flex", "cursor-pointer", "items-center", "gap-2", "text-xs"], ["id", "svg-elements-with-ids", "name", "svg-elements-with-ids", "type", "checkbox", 1, "accent-secondary", "h-4", "w-4", 3, "ngModelChange", "ngModel"], [1, "min-h-0", "flex-1", "overflow-auto"], ["matRipple", "", 1, "border-base-200", "hover:bg-base-200", "relative", "flex", "w-full", "items-center", "gap-3", "border-b", "px-3", "py-2", "text-left", "transition-colors", 3, "bg-secondary", "text-secondary-content"], [1, "flex", "h-full", "items-center", "justify-center", "p-8", "text-center", "opacity-50"], [1, "flex", "min-h-0", "min-w-0", "flex-col", "gap-4"], [1, "canvas", "border-base-300", "relative", "flex", "min-h-0", "flex-1", "items-center", "justify-center", "overflow-auto", "rounded-md", "border", "p-4", "shadow-sm"], [1, "map-preview"], [1, "flex", "flex-col", "items-center", "gap-2", "opacity-40"], [1, "border-base-300", "bg-base-100", "rounded-md", "border", "p-4", "shadow-sm"], [1, "flex", "items-center", "gap-3", "py-4", "opacity-50"], ["matRipple", "", 1, "border-base-200", "hover:bg-base-200", "relative", "flex", "w-full", "items-center", "gap-3", "border-b", "px-3", "py-2", "text-left", "transition-colors", 3, "click", "mouseenter", "mouseleave"], [1, "bg-secondary-content/60", "absolute", "inset-y-0", "left-0", "w-1"], [1, "colour-stack", "shrink-0"], [1, "checker", "border-base-300", "colour-tile", "stroke-tile"], [1, "block", "h-full", "w-full"], [1, "checker", "border-base-300", "colour-tile", "fill-tile"], [1, "min-w-0", "flex-1"], [1, "truncate", "text-sm", "font-medium"], [1, "truncate", "font-mono", "text-xs", "opacity-50"], ["title", "Edited", 1, "bg-warning", "text-warning-content", "flex", "h-6", "w-6", "shrink-0", "items-center", "justify-center", "rounded-full"], [1, "text-base"], ["alt", "SVG map preview", 3, "src"], ["alt", "", "aria-hidden", "true", 1, "pointer-events-none", 3, "src"], [1, "text-4xl"], [1, "mb-3", "flex", "items-center", "gap-2"], [1, "truncate", "text-sm", "font-semibold"], [1, "bg-base-200", "rounded", "px-1.5", "py-0.5", "font-mono", "text-xs", "opacity-60"], ["type", "button", 1, "border-base-300", "hover:bg-base-200", "ml-auto", "flex", "shrink-0", "items-center", "gap-1", "rounded", "border", "px-2", "py-1", "text-xs"], [1, "grid", "grid-cols-1", "gap-x-4", "sm:grid-cols-2", "lg:grid-cols-3"], [1, "flex", "flex-col"], ["for", "svg-element-id"], ["appearance", "outline", "subscriptSizing", "dynamic"], ["matInput", "", "id", "svg-element-id", "name", "svg-element-id", 3, "ngModelChange", "ngModel"], ["for", "svg-element-fill"], ["matInput", "", "id", "svg-element-fill", "name", "svg-element-fill", "placeholder", "#FFFFFF, none", 3, "ngModelChange", "ngModel"], ["matSuffix", "", "type", "button", "aria-label", "Pick fill colour", 1, "checker", "border-base-300", "mr-2", "block", "h-6", "w-6", "overflow-hidden", "rounded", "border", 3, "click"], ["type", "color", "tabindex", "-1", "aria-hidden", "true", 1, "colour-picker-input", 3, "input", "value"], ["for", "svg-element-stroke"], ["matInput", "", "id", "svg-element-stroke", "name", "svg-element-stroke", "placeholder", "#111111, none", 3, "ngModelChange", "ngModel"], ["matSuffix", "", "type", "button", "aria-label", "Pick stroke colour", 1, "checker", "border-base-300", "mr-2", "block", "h-6", "w-6", "overflow-hidden", "rounded", "border", 3, "click"], [1, "mt-2", "flex", "flex-col"], ["type", "button", 1, "border-base-300", "hover:bg-base-200", "ml-auto", "flex", "shrink-0", "items-center", "gap-1", "rounded", "border", "px-2", "py-1", "text-xs", 3, "click"], ["for", "svg-element-text"], ["matInput", "", "id", "svg-element-text", "name", "svg-element-text", "rows", "3", 3, "ngModelChange", "ngModel"], [1, "text-2xl"]], template: function LevelMapEditorModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 2);
        \u0275\u0275listener("confirm", function LevelMapEditorModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.save();
        });
        \u0275\u0275conditionalCreate(1, LevelMapEditorModalComponent_Conditional_1_Template, 5, 1, "div", 3)(2, LevelMapEditorModalComponent_Conditional_2_Template, 27, 7, "section", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("full_width", true)("loading", ctx.loading())("confirm_disabled", !ctx.can_save());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.error() ? 1 : 2);
      }
    }, dependencies: [
      FormsModule,
      DefaultValueAccessor,
      CheckboxControlValueAccessor,
      NgControlStatus,
      NgModel,
      FullscreenModalShellComponent,
      IconComponent,
      MatFormFieldModule,
      MatFormField,
      MatPrefix,
      MatSuffix,
      MatInputModule,
      MatInput,
      MatRippleModule,
      MatRipple
    ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]     fullscreen-modal-shell > div {\n  overflow: hidden;\n}\n[_nghost-%COMP%]     fullscreen-modal-shell main {\n  min-height: 0;\n  overflow: hidden;\n}\nlabel[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  opacity: 0.75;\n}\n.checker[_ngcontent-%COMP%] {\n  background-color: var(--base-100);\n  background-image:\n    linear-gradient(\n      45deg,\n      var(--base-300) 25%,\n      transparent 25%),\n    linear-gradient(\n      -45deg,\n      var(--base-300) 25%,\n      transparent 25%),\n    linear-gradient(\n      45deg,\n      transparent 75%,\n      var(--base-300) 75%),\n    linear-gradient(\n      -45deg,\n      transparent 75%,\n      var(--base-300) 75%);\n  background-size: 8px 8px;\n  background-position:\n    0 0,\n    0 4px,\n    4px -4px,\n    -4px 0;\n}\n.colour-stack[_ngcontent-%COMP%] {\n  position: relative;\n  width: 2.25rem;\n  height: 2.25rem;\n}\n.colour-tile[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  height: 1.5rem;\n  width: 1.5rem;\n  overflow: hidden;\n  border-width: 1px;\n  border-radius: 0.25rem;\n  box-shadow: 0 1px 2px rgb(0 0 0 / 0.16);\n}\n.stroke-tile[_ngcontent-%COMP%] {\n  top: 0;\n  right: 0;\n}\n.fill-tile[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 0;\n}\n.colour-picker-input[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  opacity: 0;\n  pointer-events: none;\n}\n.map-preview[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  min-width: 0;\n  min-height: 0;\n  filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1));\n}\n.map-preview[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  min-width: 0;\n  min-height: 0;\n  object-fit: contain;\n}\n.canvas[_ngcontent-%COMP%] {\n  background-color: var(--base-100);\n  background-image:\n    linear-gradient(\n      45deg,\n      var(--base-200) 25%,\n      transparent 25%),\n    linear-gradient(\n      -45deg,\n      var(--base-200) 25%,\n      transparent 25%),\n    linear-gradient(\n      45deg,\n      transparent 75%,\n      var(--base-200) 75%),\n    linear-gradient(\n      -45deg,\n      transparent 75%,\n      var(--base-200) 75%);\n  background-size: 22px 22px;\n  background-position:\n    0 0,\n    0 11px,\n    11px -11px,\n    -11px 0;\n}\n/*# sourceMappingURL=level-map-editor-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LevelMapEditorModalComponent, [{
    type: Component,
    args: [{ selector: "level-map-editor-modal", template: `
        <fullscreen-modal-shell
            heading="Edit SVG map"
            [full_width]="true"
            [loading]="loading()"
            [confirm_disabled]="!can_save()"
            confirm_text="Save SVG map"
            (confirm)="save()"
        >
            @if (error()) {
                <div
                    class="border-error/30 bg-error/10 mx-auto mt-8 flex max-w-2xl flex-col items-center justify-center rounded border p-8 text-center"
                >
                    <icon class="text-error text-4xl">error</icon>
                    <p class="mt-2">{{ error() }}</p>
                </div>
            } @else {
                <section
                    class="grid h-[calc(100vh-10rem)] min-h-0 grid-cols-[24rem_minmax(0,1fr)] gap-4 overflow-hidden"
                >
                    <aside
                        class="border-base-300 bg-base-100 flex min-h-0 flex-col overflow-hidden rounded-md border shadow-sm"
                    >
                        <div
                            class="border-base-300 flex flex-col gap-2 border-b p-3"
                        >
                            <div class="flex items-center justify-between">
                                <h3 class="text-sm font-semibold">
                                    Map elements
                                </h3>
                                <span
                                    class="bg-base-200 rounded-full px-2 py-0.5 text-xs font-medium opacity-70"
                                >
                                    {{ filtered_elements().length }} /
                                    {{ elements().length }}
                                </span>
                            </div>
                            <mat-form-field
                                appearance="outline"
                                subscriptSizing="dynamic"
                                class="w-full"
                            >
                                <icon matPrefix class="mx-1 opacity-50"
                                    >search</icon
                                >
                                <input
                                    matInput
                                    name="element-filter"
                                    placeholder="Filter elements"
                                    [(ngModel)]="filter"
                                />
                            </mat-form-field>
                            <label
                                class="flex cursor-pointer items-center gap-2 text-xs"
                                for="svg-elements-with-ids"
                            >
                                <input
                                    id="svg-elements-with-ids"
                                    name="svg-elements-with-ids"
                                    type="checkbox"
                                    class="accent-secondary h-4 w-4"
                                    [(ngModel)]="show_only_ids"
                                />
                                <span>Only show elements with IDs</span>
                            </label>
                        </div>
                        <div class="min-h-0 flex-1 overflow-auto">
                            @for (
                                element of filtered_elements();
                                track element.editor_index
                            ) {
                                <button
                                    matRipple
                                    class="border-base-200 hover:bg-base-200 relative flex w-full items-center gap-3 border-b px-3 py-2 text-left transition-colors"
                                    [class.bg-secondary]="
                                        selected_index() ===
                                        element.editor_index
                                    "
                                    [class.text-secondary-content]="
                                        selected_index() ===
                                        element.editor_index
                                    "
                                    (click)="
                                        selectElement(element.editor_index)
                                    "
                                    (mouseenter)="
                                        hoverElement(element.editor_index)
                                    "
                                    (mouseleave)="
                                        clearHoveredElement(
                                            element.editor_index
                                        )
                                    "
                                >
                                    @if (
                                        selected_index() ===
                                        element.editor_index
                                    ) {
                                        <div
                                            class="bg-secondary-content/60 absolute inset-y-0 left-0 w-1"
                                        ></div>
                                    }
                                    <span class="colour-stack shrink-0">
                                        <span
                                            class="checker border-base-300 colour-tile stroke-tile"
                                        >
                                            <span
                                                class="block h-full w-full"
                                                [style.background]="
                                                    colourPreview(
                                                        element.stroke
                                                    )
                                                "
                                            ></span>
                                        </span>
                                        <span
                                            class="checker border-base-300 colour-tile fill-tile"
                                        >
                                            <span
                                                class="block h-full w-full"
                                                [style.background]="
                                                    colourPreview(element.fill)
                                                "
                                            ></span>
                                        </span>
                                    </span>
                                    <div class="min-w-0 flex-1">
                                        <div
                                            class="truncate text-sm font-medium"
                                        >
                                            {{ element.label }}
                                        </div>
                                        <div
                                            class="truncate font-mono text-xs opacity-50"
                                        >
                                            &lt;{{ element.tag }}&gt;
                                        </div>
                                    </div>
                                    @if (
                                        isElementEdited(element.editor_index)
                                    ) {
                                        <span
                                            class="bg-warning text-warning-content flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                                            title="Edited"
                                        >
                                            <icon class="text-base">edit</icon>
                                        </span>
                                    }
                                </button>
                            } @empty {
                                <div
                                    class="flex h-full items-center justify-center p-8 text-center opacity-50"
                                >
                                    No SVG elements found.
                                </div>
                            }
                        </div>
                    </aside>
                    <main class="flex min-h-0 min-w-0 flex-col gap-4">
                        <div
                            class="canvas border-base-300 relative flex min-h-0 flex-1 items-center justify-center overflow-auto rounded-md border p-4 shadow-sm"
                        >
                            @if (preview_url()) {
                                <div class="map-preview">
                                    <img
                                        [src]="preview_url()"
                                        alt="SVG map preview"
                                    />
                                    @if (overlay_url()) {
                                        <img
                                            class="pointer-events-none"
                                            [src]="overlay_url()"
                                            alt=""
                                            aria-hidden="true"
                                        />
                                    }
                                </div>
                            } @else {
                                <div
                                    class="flex flex-col items-center gap-2 opacity-40"
                                >
                                    <icon class="text-4xl">image</icon>
                                    <p>No SVG loaded.</p>
                                </div>
                            }
                        </div>
                        <section
                            class="border-base-300 bg-base-100 rounded-md border p-4 shadow-sm"
                        >
                            @if (selected_element(); as element) {
                                <div class="mb-3 flex items-center gap-2">
                                    <h3 class="truncate text-sm font-semibold">
                                        {{ element.label }}
                                    </h3>
                                    <span
                                        class="bg-base-200 rounded px-1.5 py-0.5 font-mono text-xs opacity-60"
                                    >
                                        &lt;{{ element.tag }}&gt;
                                    </span>
                                    @if (
                                        isElementEdited(element.editor_index)
                                    ) {
                                        <button
                                            type="button"
                                            class="border-base-300 hover:bg-base-200 ml-auto flex shrink-0 items-center gap-1 rounded border px-2 py-1 text-xs"
                                            (click)="
                                                resetElement(
                                                    element.editor_index
                                                )
                                            "
                                        >
                                            <icon class="text-base">undo</icon>
                                            Reset
                                        </button>
                                    }
                                </div>
                                <div
                                    class="grid grid-cols-1 gap-x-4 sm:grid-cols-2 lg:grid-cols-3"
                                >
                                    <div class="flex flex-col">
                                        <label for="svg-element-id">
                                            Element ID
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            subscriptSizing="dynamic"
                                        >
                                            <input
                                                matInput
                                                id="svg-element-id"
                                                name="svg-element-id"
                                                [ngModel]="selected_id()"
                                                (ngModelChange)="
                                                    updateSelectedId($event)
                                                "
                                            />
                                        </mat-form-field>
                                    </div>
                                    <div class="flex flex-col">
                                        <label for="svg-element-fill">
                                            Fill colour
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            subscriptSizing="dynamic"
                                        >
                                            <input
                                                matInput
                                                id="svg-element-fill"
                                                name="svg-element-fill"
                                                placeholder="#FFFFFF, none"
                                                [ngModel]="selected_fill()"
                                                (ngModelChange)="
                                                    updateSelectedFill($event)
                                                "
                                            />
                                            <button
                                                matSuffix
                                                type="button"
                                                class="checker border-base-300 mr-2 block h-6 w-6 overflow-hidden rounded border"
                                                aria-label="Pick fill colour"
                                                (click)="fill_picker.click()"
                                            >
                                                <span
                                                    class="block h-full w-full"
                                                    [style.background]="
                                                        colourPreview(
                                                            selected_fill()
                                                        )
                                                    "
                                                ></span>
                                            </button>
                                            <input
                                                #fill_picker
                                                class="colour-picker-input"
                                                type="color"
                                                [value]="
                                                    colourPickerValue(
                                                        selected_fill()
                                                    )
                                                "
                                                tabindex="-1"
                                                aria-hidden="true"
                                                (input)="
                                                    updateSelectedFill(
                                                        $any($event.target)
                                                            .value
                                                    )
                                                "
                                            />
                                        </mat-form-field>
                                    </div>
                                    <div class="flex flex-col">
                                        <label for="svg-element-stroke">
                                            Stroke colour
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            subscriptSizing="dynamic"
                                        >
                                            <input
                                                matInput
                                                id="svg-element-stroke"
                                                name="svg-element-stroke"
                                                placeholder="#111111, none"
                                                [ngModel]="selected_stroke()"
                                                (ngModelChange)="
                                                    updateSelectedStroke($event)
                                                "
                                            />
                                            <button
                                                matSuffix
                                                type="button"
                                                class="checker border-base-300 mr-2 block h-6 w-6 overflow-hidden rounded border"
                                                aria-label="Pick stroke colour"
                                                (click)="stroke_picker.click()"
                                            >
                                                <span
                                                    class="block h-full w-full"
                                                    [style.background]="
                                                        colourPreview(
                                                            selected_stroke()
                                                        )
                                                    "
                                                ></span>
                                            </button>
                                            <input
                                                #stroke_picker
                                                class="colour-picker-input"
                                                type="color"
                                                [value]="
                                                    colourPickerValue(
                                                        selected_stroke()
                                                    )
                                                "
                                                tabindex="-1"
                                                aria-hidden="true"
                                                (input)="
                                                    updateSelectedStroke(
                                                        $any($event.target)
                                                            .value
                                                    )
                                                "
                                            />
                                        </mat-form-field>
                                    </div>
                                </div>
                                @if (element.can_edit_text) {
                                    <div class="mt-2 flex flex-col">
                                        <label for="svg-element-text">
                                            Text
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            subscriptSizing="dynamic"
                                        >
                                            <textarea
                                                matInput
                                                id="svg-element-text"
                                                name="svg-element-text"
                                                rows="3"
                                                [ngModel]="selected_text()"
                                                (ngModelChange)="
                                                    updateSelectedText($event)
                                                "
                                            ></textarea>
                                        </mat-form-field>
                                    </div>
                                }
                            } @else {
                                <div
                                    class="flex items-center gap-3 py-4 opacity-50"
                                >
                                    <icon class="text-2xl">touch_app</icon>
                                    <p>
                                        Select an element from the list to edit
                                        its ID, colours, or text.
                                    </p>
                                </div>
                            }
                        </section>
                    </main>
                </section>
            }
        </fullscreen-modal-shell>
    `, imports: [
      FormsModule,
      FullscreenModalShellComponent,
      IconComponent,
      MatFormFieldModule,
      MatInputModule,
      MatRippleModule
    ], styles: ["/* angular:styles/component:css;8ca834767d490f026847e23634a5f5eeb84d0229aeda06bb07e3a292fe0da3f5;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/level-manager/level-map-editor-modal.component.ts */\n:host {\n  display: block;\n}\n:host ::ng-deep fullscreen-modal-shell > div {\n  overflow: hidden;\n}\n:host ::ng-deep fullscreen-modal-shell main {\n  min-height: 0;\n  overflow: hidden;\n}\nlabel {\n  margin-bottom: 0.25rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  opacity: 0.75;\n}\n.checker {\n  background-color: var(--base-100);\n  background-image:\n    linear-gradient(\n      45deg,\n      var(--base-300) 25%,\n      transparent 25%),\n    linear-gradient(\n      -45deg,\n      var(--base-300) 25%,\n      transparent 25%),\n    linear-gradient(\n      45deg,\n      transparent 75%,\n      var(--base-300) 75%),\n    linear-gradient(\n      -45deg,\n      transparent 75%,\n      var(--base-300) 75%);\n  background-size: 8px 8px;\n  background-position:\n    0 0,\n    0 4px,\n    4px -4px,\n    -4px 0;\n}\n.colour-stack {\n  position: relative;\n  width: 2.25rem;\n  height: 2.25rem;\n}\n.colour-tile {\n  position: absolute;\n  display: block;\n  height: 1.5rem;\n  width: 1.5rem;\n  overflow: hidden;\n  border-width: 1px;\n  border-radius: 0.25rem;\n  box-shadow: 0 1px 2px rgb(0 0 0 / 0.16);\n}\n.stroke-tile {\n  top: 0;\n  right: 0;\n}\n.fill-tile {\n  bottom: 0;\n  left: 0;\n}\n.colour-picker-input {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  opacity: 0;\n  pointer-events: none;\n}\n.map-preview {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  min-width: 0;\n  min-height: 0;\n  filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1));\n}\n.map-preview > img {\n  position: absolute;\n  inset: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  min-width: 0;\n  min-height: 0;\n  object-fit: contain;\n}\n.canvas {\n  background-color: var(--base-100);\n  background-image:\n    linear-gradient(\n      45deg,\n      var(--base-200) 25%,\n      transparent 25%),\n    linear-gradient(\n      -45deg,\n      var(--base-200) 25%,\n      transparent 25%),\n    linear-gradient(\n      45deg,\n      transparent 75%,\n      var(--base-200) 75%),\n    linear-gradient(\n      -45deg,\n      transparent 75%,\n      var(--base-200) 75%);\n  background-size: 22px 22px;\n  background-position:\n    0 0,\n    0 11px,\n    11px -11px,\n    -11px 0;\n}\n/*# sourceMappingURL=level-map-editor-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LevelMapEditorModalComponent, { className: "LevelMapEditorModalComponent", filePath: "apps/concierge/src/app/level-manager/level-map-editor-modal.component.ts", lineNumber: 618 });
})();

// apps/concierge/src/app/level-manager/level-modal.component.ts
var _forTrack07 = ($index, $item) => $item.id;
function LevelModalComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const building_r1 = ctx.$implicit;
    \u0275\u0275property("value", building_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", building_r1.display_name || building_r1.name, " ");
  }
}
var LevelModalComponent = class _LevelModalComponent {
  constructor() {
    this._org = inject(OrganisationService);
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.building_list = this._org.building_list;
    this.model = signal(
      {
        id: this._data?.id || "",
        display_name: this._data?.display_name || "",
        parent_id: this._data?.parent_id || "",
        map_id: this._data?.map_id || "",
        parking: this._data?.tags?.includes("parking") || false
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (p) => {
      required(p.display_name);
      required(p.parent_id);
      required(p.map_id);
    });
  }
  async save() {
    this.form().markAsTouched();
    if (!this.form().valid()) {
      return notifyError(i18n("FORM.INVALID_FIELDS", {
        field_list: getInvalidSignalFields(this.form, this.model).join(", ")
      }));
    }
    this.loading.set(true);
    const data = this.model();
    data.tags = data.parking ? ["level", "parking"] : ["level"];
    const resp = await (data.id ? Ya(data.id, __spreadProps(__spreadValues({}, data), {
      name: `LEVEL ${Rt().description} ${data.display_name}`
    })) : Va(__spreadProps(__spreadValues({}, data), {
      name: `LEVEL ${Rt().description} ${data.display_name}`
    }))).catch();
    if (resp.id)
      this._dialog_ref.close(resp);
    this.loading.set(false);
  }
  static {
    this.\u0275fac = function LevelModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LevelModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LevelModalComponent, selectors: [["level-modal"]], decls: 36, vars: 36, consts: [[3, "confirm", "heading", "loading"], ["system", ""], [1, "flex", "flex-col"], ["for", "zone"], ["appearance", "outline"], [3, "formField", "placeholder"], [3, "value"], ["for", "display-name"], ["matInput", "", 3, "placeholder", "formField"], [1, "flex", "space-x-4", "pb-4"], [1, "flex-1", 3, "label", "formField"], [1, "flex-1"], ["for", "map-id"]], template: function LevelModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("confirm", function LevelModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(3, "form", 1)(4, "div", 2)(5, "label", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementStart(8, "span");
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "mat-form-field", 4)(11, "mat-select", 5);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275repeaterCreate(13, LevelModalComponent_For_14_Template, 2, 2, "mat-option", 6, _forTrack07);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(15, "mat-error");
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "div", 2)(19, "label", 7);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "mat-form-field", 4);
        \u0275\u0275element(23, "input", 8);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 9);
        \u0275\u0275element(26, "settings-toggle", 10);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275element(28, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 2)(30, "label", 12);
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "mat-form-field", 4);
        \u0275\u0275element(34, "input", 8);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 16, ctx.model().id ? "APP.CONCIERGE.LEVELS_EDIT" : "APP.CONCIERGE.LEVELS_NEW"))("loading", ctx.loading() ? \u0275\u0275pipeBind1(2, 18, "APP.CONCIERGE.LEVELS_SAVING") : "");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("error", ctx.form.parent_id().invalid() && ctx.form.parent_id().touched());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 20, "RESOURCE.BUILDING"));
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.parent_id)("placeholder", \u0275\u0275pipeBind1(12, 22, "COMMON.BUILDING_SELECT"));
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.building_list());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 24, "APP.CONCIERGE.LEVELS_BUILDING_REQUIRED"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 26, "FORM.DISPLAY_NAME"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(24, 28, "FORM.DISPLAY_NAME"))("formField", ctx.form.display_name);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(27, 30, "APP.CONCIERGE.LEVELS_HAS_PARKING"))("formField", ctx.form.parking);
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 32, "APP.CONCIERGE.LEVELS_MAP_URL"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(35, 34, "APP.CONCIERGE.LEVELS_MAP_URL_PLACEHOLDER"))("formField", ctx.form.map_id);
        \u0275\u0275control();
      }
    }, dependencies: [
      FullscreenModalShellComponent,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      FormField,
      SettingsToggleComponent,
      MatSelectModule,
      MatSelect,
      MatOption,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LevelModalComponent, [{
    type: Component,
    args: [{ selector: "level-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (model().id
                    ? 'APP.CONCIERGE.LEVELS_EDIT'
                    : 'APP.CONCIERGE.LEVELS_NEW'
                ) | translate
            "
            [loading]="
                loading() ? ('APP.CONCIERGE.LEVELS_SAVING' | translate) : ''
            "
            (confirm)="save()"
        >
            <form system>
                <div class="flex flex-col">
                    <label
                        for="zone"
                        [class.error]="
                            form.parent_id().invalid() &&
                            form.parent_id().touched()
                        "
                    >
                        {{ 'RESOURCE.BUILDING' | translate }}<span>*</span>
                    </label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            [formField]="form.parent_id"
                            [placeholder]="
                                'COMMON.BUILDING_SELECT' | translate
                            "
                        >
                            @for (
                                building of building_list();
                                track building.id
                            ) {
                                <mat-option [value]="building.id">
                                    {{
                                        building.display_name || building.name
                                    }}
                                </mat-option>
                            }
                        </mat-select>
                        <mat-error>{{
                            'APP.CONCIERGE.LEVELS_BUILDING_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="display-name">{{
                        'FORM.DISPLAY_NAME' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [placeholder]="'FORM.DISPLAY_NAME' | translate"
                            [formField]="form.display_name"
                        />
                    </mat-form-field>
                </div>
                <div class="flex space-x-4 pb-4">
                    <settings-toggle
                        class="flex-1"
                        [label]="'APP.CONCIERGE.LEVELS_HAS_PARKING' | translate"
                        [formField]="form.parking"
                    >
                    </settings-toggle>
                    <div class="flex-1"></div>
                </div>
                <div class="flex flex-col">
                    <label for="map-id">{{
                        'APP.CONCIERGE.LEVELS_MAP_URL' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [placeholder]="
                                'APP.CONCIERGE.LEVELS_MAP_URL_PLACEHOLDER'
                                    | translate
                            "
                            [formField]="form.map_id"
                        />
                    </mat-form-field>
                </div>
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      MatFormFieldModule,
      MatInputModule,
      FormField,
      SettingsToggleComponent,
      MatSelectModule,
      TranslatePipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LevelModalComponent, { className: "LevelModalComponent", filePath: "apps/concierge/src/app/level-manager/level-modal.component.ts", lineNumber: 120 });
})();

// apps/concierge/src/app/level-manager/level-management.service.ts
var LevelManagementService = class _LevelManagementService {
  constructor() {
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._options = signal(
      {},
      ...ngDevMode ? [{ debugName: "_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = this._options.asReadonly();
    this.level_list = this._org.level_list;
    this._level_params = computed(
      () => ({
        buildings: this._org.building_list(),
        levels: this.level_list(),
        options: this._options()
      }),
      ...ngDevMode ? [{ debugName: "_level_params" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._level_params_debounced = debounced(this._level_params, 300);
    this._filtered_levels = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_filtered_levels" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._level_params_debounced.value(),
      defaultValue: [],
      loader: async ({ params }) => {
        const { buildings, options } = params;
        let list = params.levels.filter((_) => buildings.find((bld) => bld.id === _.parent_id));
        if (options.zone) {
          list = list.filter((_) => _.parent_id === options.zone);
        }
        if (options.search) {
          list = list.filter((_) => _.name.toLowerCase().includes(options.search.toLowerCase()));
        }
        for (const level of list) {
          const parent = this._org.buildings.find((bld) => bld.id === level.parent_id);
          if (parent) {
            level.building = parent.display_name || parent.name;
          }
          level.room_count = await nextValueFrom(requestSpacesForZone(level.id)).then((spaces) => spaces.length);
        }
        return list;
      }
    }));
    this.filtered_levels = this._filtered_levels.value;
  }
  setFilters(options) {
    this._options.update((current) => __spreadValues(__spreadValues({}, current), options));
  }
  setSearchString(search) {
    this._options.update((current) => __spreadProps(__spreadValues({}, current), { search }));
  }
  editLevel(level = new Kt()) {
    const ref = this._dialog.open(LevelModalComponent, {
      data: level
    });
    ref.afterClosed().subscribe((data) => {
      if (data)
        this._org.addZone(data);
    });
  }
  editLevelMap(level) {
    const ref = this._dialog.open(LevelMapEditorModalComponent, {
      data: level
    });
    ref.afterClosed().subscribe((data) => {
      if (data)
        this._org.addZone(data);
    });
  }
  async removeLevel(level) {
    const ref = await openConfirmModal({
      title: i18n("APP.CONCIERGE.LEVELS_REMOVE_TITLE"),
      content: i18n("APP.CONCIERGE.LEVELS_REMOVE_MSG", {
        name: level.name
      }),
      icon: { content: "delete_forever" },
      confirm_text: i18n("COMMON.REMOVE")
    }, this._dialog);
    if (ref.reason !== "done")
      return ref.close();
    ref.loading(i18n("APP.CONCIERGE.LEVELS_REMOVE_LOADING"));
    await Xa(level.id).catch((e) => {
      notifyError(i18n("APP.CONCIERGE.LEVELS_REMOVE_ERROR", { error: e }));
      ref.close();
      throw e;
    });
    this._org.removeZone({ id: level.id, tags: ["level"] });
    notifySuccess(i18n("APP.CONCIERGE.LEVELS_REMOVE_SUCCESS"));
    ref.close();
  }
  static {
    this.\u0275fac = function LevelManagementService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LevelManagementService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LevelManagementService, factory: _LevelManagementService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LevelManagementService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/concierge/src/app/level-manager/level-list.component.ts
var _c06 = (a0, a1) => ({ key: "display_name", name: a0, content: a1 });
var _c14 = (a0) => ({ key: "building", name: a0, size: "16rem" });
var _c23 = (a0, a1) => ({ key: "parking", name: a0, content: a1, size: "5rem", sortable: false });
var _c33 = (a0) => ({ key: "room_count", name: a0, size: "6rem" });
var _c43 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3.25rem", sortable: false });
var _c53 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function LevelListComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function LevelListComponent_ng_template_8_Template_button_click_0_listener() {
      const row_r2 = \u0275\u0275restoreView(_r1).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyToClipboard(row_r2.id));
    });
    \u0275\u0275elementStart(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    const data_r4 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r2.id, " ");
  }
}
function LevelListComponent_ng_template_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "icon");
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function LevelListComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LevelListComponent_ng_template_10_Conditional_0_Template, 3, 0, "div", 10);
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    \u0275\u0275conditional(row_r5.tags?.includes("parking") ? 0 : -1);
  }
}
function LevelListComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "button", 12)(2, "icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 3)(6, "button", 13);
    \u0275\u0275listener("click", function LevelListComponent_ng_template_12_Template_button_click_6_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editLevel(row_r7));
    });
    \u0275\u0275elementStart(7, "div", 14)(8, "icon", 15);
    \u0275\u0275text(9, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "button", 16);
    \u0275\u0275listener("click", function LevelListComponent_ng_template_12_Template_button_click_13_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editLevelMap(row_r7));
    });
    \u0275\u0275elementStart(14, "div", 14)(15, "icon", 15);
    \u0275\u0275text(16, "map");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "Edit SVG map");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "button", 13);
    \u0275\u0275listener("click", function LevelListComponent_ng_template_12_Template_button_click_19_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editBookingPanelSettings(row_r7));
    });
    \u0275\u0275elementStart(20, "div", 14)(21, "icon", 17);
    \u0275\u0275text(22, " top_panel_open ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "button", 13);
    \u0275\u0275listener("click", function LevelListComponent_ng_template_12_Template_button_click_26_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeLevel(row_r7));
    });
    \u0275\u0275elementStart(27, "div", 14)(28, "icon", 18);
    \u0275\u0275text(29, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const row_r7 = ctx.row;
    const menu_r8 = \u0275\u0275reference(5);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r8);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 5, "APP.CONCIERGE.LEVELS_EDIT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !row_r7.map_id);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 7, "APP.CONCIERGE.APP_SETTINGS_BOOKING_PANEL"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 9, "APP.CONCIERGE.LEVELS_REMOVE"), " ");
  }
}
var LevelListComponent = class _LevelListComponent {
  constructor() {
    this._manager = inject(LevelManagementService);
    this._clipboard = inject(Clipboard);
    this._dialog = inject(MatDialog);
    this.levels = this._manager.filtered_levels;
    this.editLevel = (level) => this._manager.editLevel(level);
    this.editLevelMap = (level) => this._manager.editLevelMap(level);
    this.removeLevel = (level) => this._manager.removeLevel(level);
    this.copyToClipboard = (id) => {
      const success = this._clipboard.copy(id);
      if (success)
        notifySuccess(i18n("APP.CONCIERGE.LEVELS_COPIED_ID"));
    };
  }
  editBookingPanelSettings(level) {
    this._dialog.open(BookingPanelSettingsModalComponent, {
      data: { zone: level }
    });
  }
  static {
    this.\u0275fac = function LevelListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LevelListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LevelListComponent, selectors: [["level-list"]], decls: 14, vars: 32, consts: [["name_template", ""], ["parking_template", ""], ["action_template", ""], ["menu", "matMenu"], [1, "absolute", "inset-0", "overflow-auto", "px-8"], [1, "block", "min-w-3xl", "text-sm", 3, "data", "empty_message", "columns", "sortable"], [1, "h-20", "w-full"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "bg-success", "text-success-content", "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl"], [1, "mx-auto", "flex", "items-center", "gap-2", "p-2"], ["icon", "", "default", "", "matRipple", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], ["mat-menu-item", "", 3, "click", "disabled"], ["className", "material-symbols-rounded", 1, "text-2xl"], [1, "text-error", "text-2xl"]], template: function LevelListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 4);
        \u0275\u0275element(1, "simple-table", 5);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275element(7, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, LevelListComponent_ng_template_8_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(10, LevelListComponent_ng_template_10_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(12, LevelListComponent_ng_template_12_Template, 33, 11, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const name_template_r9 = \u0275\u0275reference(9);
        const parking_template_r10 = \u0275\u0275reference(11);
        const action_template_r11 = \u0275\u0275reference(13);
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.levels())("empty_message", \u0275\u0275pipeBind1(2, 4, "APP.CONCIERGE.LEVELS_EMPTY"))("columns", \u0275\u0275pureFunction5(26, _c53, \u0275\u0275pureFunction2(14, _c06, \u0275\u0275pipeBind1(3, 6, "APP.CONCIERGE.LEVELS_NAME"), name_template_r9), \u0275\u0275pureFunction1(17, _c14, \u0275\u0275pipeBind1(4, 8, "RESOURCE.BUILDING")), \u0275\u0275pureFunction2(19, _c23, \u0275\u0275pipeBind1(5, 10, "RESOURCE.PARKING"), parking_template_r10), \u0275\u0275pureFunction1(22, _c33, \u0275\u0275pipeBind1(6, 12, "APP.CONCIERGE.LEVELS_ROOMS")), \u0275\u0275pureFunction1(24, _c43, action_template_r11)))("sortable", true);
      }
    }, dependencies: [
      SimpleTableComponent,
      IconComponent,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LevelListComponent, [{
    type: Component,
    args: [{ selector: "level-list", template: `
        <div class="absolute inset-0 overflow-auto px-8">
            <simple-table
                class="block min-w-3xl text-sm"
                [data]="levels()"
                [empty_message]="'APP.CONCIERGE.LEVELS_EMPTY' | translate"
                [columns]="[
                    {
                        key: 'display_name',
                        name: 'APP.CONCIERGE.LEVELS_NAME' | translate,
                        content: name_template,
                    },
                    {
                        key: 'building',
                        name: 'RESOURCE.BUILDING' | translate,
                        size: '16rem',
                    },
                    {
                        key: 'parking',
                        name: 'RESOURCE.PARKING' | translate,
                        content: parking_template,
                        size: '5rem',
                        sortable: false,
                    },
                    {
                        key: 'room_count',
                        name: 'APP.CONCIERGE.LEVELS_ROOMS' | translate,
                        size: '6rem',
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        size: '3.25rem',
                        sortable: false,
                    },
                ]"
                [sortable]="true"
            ></simple-table>
            <div class="h-20 w-full"></div>
        </div>
        <ng-template #name_template let-row="row" let-data="data">
            <button
                class="px-4 py-2 text-left leading-tight"
                (click)="copyToClipboard(row.id)"
            >
                <div class="">{{ data }}</div>
                <div class="font-mono text-[0.625rem] opacity-30">
                    {{ row.id }}
                </div>
            </button>
        </ng-template>
        <ng-template #parking_template let-row="row">
            @if (row.tags?.includes('parking')) {
                <div
                    class="bg-success text-success-content mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl"
                >
                    <icon>done</icon>
                </div>
            }
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="mx-auto flex items-center gap-2 p-2">
                <button icon default matRipple [matMenuTriggerFor]="menu">
                    <icon>more_vert</icon>
                </button>
                <mat-menu #menu="matMenu">
                    <button mat-menu-item (click)="editLevel(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">edit</icon>
                            <span>{{
                                'APP.CONCIERGE.LEVELS_EDIT' | translate
                            }}</span>
                        </div>
                    </button>
                    <button
                        mat-menu-item
                        [disabled]="!row.map_id"
                        (click)="editLevelMap(row)"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">map</icon>
                            <span>Edit SVG map</span>
                        </div>
                    </button>
                    <button
                        mat-menu-item
                        (click)="editBookingPanelSettings(row)"
                    >
                        <div class="flex items-center space-x-2">
                            <icon
                                className="material-symbols-rounded"
                                class="text-2xl"
                            >
                                top_panel_open
                            </icon>
                            <span>{{
                                'APP.CONCIERGE.APP_SETTINGS_BOOKING_PANEL'
                                    | translate
                            }}</span>
                        </div>
                    </button>
                    <button mat-menu-item (click)="removeLevel(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-error text-2xl"> delete </icon>
                            <span>
                                {{ 'APP.CONCIERGE.LEVELS_REMOVE' | translate }}
                            </span>
                        </div>
                    </button>
                </mat-menu>
            </div>
        </ng-template>
    `, imports: [
      SimpleTableComponent,
      TranslatePipe,
      IconComponent,
      MatMenuModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LevelListComponent, { className: "LevelListComponent", filePath: "apps/concierge/src/app/level-manager/level-list.component.ts", lineNumber: 138 });
})();

// apps/concierge/src/app/region-manager/region-modal.component.ts
function RegionModalComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tz_r1 = ctx.$implicit;
    \u0275\u0275property("value", tz_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tz_r1);
  }
}
function RegionModalComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "COMMON.TIMEZONE_EMPTY"), " ");
  }
}
var RegionModalComponent = class _RegionModalComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.timezones = TIMEZONES_IANA;
    this.model = signal(
      {
        id: this._data?.id || "",
        display_name: this._data?.display_name || "",
        timezone: Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone || "",
        parent_id: this._org.organisation.id
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (p) => {
      required(p.display_name);
    });
    this.filtered_timezones = computed(
      () => {
        const timezone = (this.model().timezone || "").toLowerCase();
        return this.timezones.filter((_) => _.toLowerCase().includes(timezone));
      },
      ...ngDevMode ? [{ debugName: "filtered_timezones" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async save() {
    this.form().markAsTouched();
    if (!this.form().valid()) {
      return notifyError(`Some form fields are invalid. [${getInvalidSignalFields(this.form, this.model).join(", ")}]`);
    }
    const data = this.model();
    data.tags = ["region"];
    this.loading.set(true);
    const resp = await (data.id ? Ya(data.id, __spreadProps(__spreadValues({}, data), {
      name: `REGION ${Rt().description} ${data.display_name}`
    })) : Va(__spreadProps(__spreadValues({}, data), {
      name: `REGION ${Rt().description} ${data.display_name}`
    }))).catch();
    if (resp.id)
      this._dialog_ref.close(resp);
    this.loading.set(false);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275RegionModalComponent_BaseFactory;
      return function RegionModalComponent_Factory(__ngFactoryType__) {
        return (\u0275RegionModalComponent_BaseFactory || (\u0275RegionModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_RegionModalComponent)))(__ngFactoryType__ || _RegionModalComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegionModalComponent, selectors: [["region-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 25, vars: 22, consts: [["auto", "matAutocomplete"], [3, "confirm", "heading", "loading"], [1, "flex", "flex-col"], ["for", "display-name"], ["appearance", "outline"], ["matInput", "", 3, "placeholder", "formField"], ["matPrefix", "", 1, "text-2xl"], ["matInput", "", 3, "formField", "placeholder", "matAutocomplete"], [3, "value"], [3, "disabled"]], template: function RegionModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 1);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("confirm", function RegionModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(3, "form")(4, "div", 2)(5, "label", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "mat-form-field", 4);
        \u0275\u0275element(9, "input", 5);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 2)(12, "label", 3);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "mat-form-field", 4)(16, "icon", 6);
        \u0275\u0275text(17, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 7);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "mat-autocomplete", null, 0);
        \u0275\u0275repeaterCreate(22, RegionModalComponent_For_23_Template, 2, 2, "mat-option", 8, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275conditionalCreate(24, RegionModalComponent_Conditional_24_Template, 3, 4, "mat-option", 9);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        const auto_r2 = \u0275\u0275reference(21);
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 10, ctx.model().id ? "APP.CONCIERGE.REGIONS_EDIT" : "APP.CONCIERGE.REGIONS_NEW"))("loading", ctx.loading() ? \u0275\u0275pipeBind1(2, 12, "APP.CONCIERGE.REGION_SAVING") : "");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 14, "FORM.DISPLAY_NAME"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(10, 16, "FORM.DISPLAY_NAME"))("formField", ctx.form.display_name);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 18, "COMMON.TIMEZONE"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.timezone)("placeholder", \u0275\u0275pipeBind1(19, 20, "COMMON.TIMEZONE"))("matAutocomplete", auto_r2);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.filtered_timezones());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.timezones.length ? 24 : -1);
      }
    }, dependencies: [
      FullscreenModalShellComponent,
      MatAutocompleteModule,
      MatAutocomplete,
      MatOption,
      MatAutocompleteTrigger,
      MatFormFieldModule,
      MatFormField,
      MatPrefix,
      MatInputModule,
      MatInput,
      IconComponent,
      FormField,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegionModalComponent, [{
    type: Component,
    args: [{ selector: "region-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (model().id
                    ? 'APP.CONCIERGE.REGIONS_EDIT'
                    : 'APP.CONCIERGE.REGIONS_NEW'
                ) | translate
            "
            [loading]="
                loading() ? ('APP.CONCIERGE.REGION_SAVING' | translate) : ''
            "
            (confirm)="save()"
        >
            <form>
                <div class="flex flex-col">
                    <label for="display-name">
                        {{ 'FORM.DISPLAY_NAME' | translate }}
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [placeholder]="'FORM.DISPLAY_NAME' | translate"
                            [formField]="form.display_name"
                        />
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="display-name">
                        {{ 'COMMON.TIMEZONE' | translate }}
                    </label>
                    <mat-form-field appearance="outline">
                        <icon matPrefix class="text-2xl">search</icon>
                        <input
                            matInput
                            [formField]="form.timezone"
                            [placeholder]="'COMMON.TIMEZONE' | translate"
                            [matAutocomplete]="auto"
                        />
                    </mat-form-field>
                    <mat-autocomplete #auto="matAutocomplete">
                        @for (tz of filtered_timezones(); track tz) {
                            <mat-option [value]="tz">{{ tz }}</mat-option>
                        }
                        @if (!timezones.length) {
                            <mat-option [disabled]="true">
                                {{ 'COMMON.TIMEZONE_EMPTY' | translate }}
                            </mat-option>
                        }
                    </mat-autocomplete>
                </div>
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      MatAutocompleteModule,
      MatFormFieldModule,
      MatInputModule,
      TranslatePipe,
      IconComponent,
      FormField
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegionModalComponent, { className: "RegionModalComponent", filePath: "apps/concierge/src/app/region-manager/region-modal.component.ts", lineNumber: 88 });
})();

// apps/concierge/src/app/region-manager/region-management.service.ts
var RegionManagementService = class _RegionManagementService {
  constructor() {
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._options = signal(
      {},
      ...ngDevMode ? [{ debugName: "_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = this._options.asReadonly();
    this.filtered_regions = computed(
      () => {
        const buildings = this._org.building_list();
        let list = this._org.region_list();
        const options = this._options();
        if (options.search) {
          list = list.filter((_) => _.name.toLowerCase().includes(options.search.toLowerCase()));
        }
        for (const region of list) {
          region.building_count = buildings.filter((bld) => bld.parent_id === region.id).length;
        }
        return list;
      },
      ...ngDevMode ? [{ debugName: "filtered_regions" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  setFilters(options) {
    this._options.update((current) => __spreadValues(__spreadValues({}, current), options));
  }
  setSearchString(search) {
    this._options.update((current) => __spreadProps(__spreadValues({}, current), { search }));
  }
  editRegion(region = new Kt()) {
    const ref = this._dialog.open(RegionModalComponent, {
      data: region
    });
    ref.afterClosed().subscribe((data) => {
      if (data)
        this._org.addZone(data);
    });
  }
  editRegionMetadata(region = new Kt()) {
    const ref = this._dialog.open(AppSettingsModalComponent, {
      data: { zone: region }
    });
    ref.afterClosed().subscribe((data) => {
      if (data)
        setTimeout(() => location.reload(), 300);
    });
  }
  async removeRegion(region) {
    const ref = await openConfirmModal({
      title: i18n("APP.CONCIERGE.REGIONS_REMOVE_TITLE"),
      content: i18n("APP.CONCIERGE.REGIONS_REMOVE_MSG", {
        name: region.name
      }),
      icon: { content: "delete_forever" },
      confirm_text: i18n("COMMON.REMOVE")
    }, this._dialog);
    if (ref.reason !== "done")
      return ref.close();
    ref.loading(i18n("APP.CONCIERGE.REGIONS_REMOVE_LOADING"));
    await Xa(region.id).catch((e) => {
      notifyError(i18n("APP.CONCIERGE.REGIONS_REMOVE_ERROR", { error: e }));
      throw e;
    });
    this._org.removeZone({ id: region.id, tags: ["region"] });
    notifySuccess(i18n("APP.CONCIERGE.REGIONS_REMOVE_SUCCESS"));
    ref.close();
  }
  static {
    this.\u0275fac = function RegionManagementService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegionManagementService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RegionManagementService, factory: _RegionManagementService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegionManagementService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/concierge/src/app/region-manager/region-list.component.ts
var _c07 = (a0, a1) => ({ key: "display_name", name: a0, content: a1 });
var _c15 = (a0) => ({ key: "building_count", name: a0, size: "8rem" });
var _c24 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3.5rem", sortable: false });
var _c34 = (a0, a1, a2) => [a0, a1, a2];
function RegionListComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function RegionListComponent_ng_template_6_Template_button_click_0_listener() {
      const row_r2 = \u0275\u0275restoreView(_r1).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyToClipboard(row_r2.id));
    });
    \u0275\u0275elementStart(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    const data_r4 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r2.id, " ");
  }
}
function RegionListComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "button", 11)(2, "icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 2)(6, "button", 12)(7, "div", 13)(8, "icon", 14);
    \u0275\u0275text(9, "edit_square");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "mat-menu", null, 3)(15, "button", 15);
    \u0275\u0275listener("click", function RegionListComponent_ng_template_8_Template_button_click_15_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editWorkplaceSettings(row_r6));
    });
    \u0275\u0275elementStart(16, "div", 13)(17, "icon", 14);
    \u0275\u0275text(18, "meeting_room");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "button", 15);
    \u0275\u0275listener("click", function RegionListComponent_ng_template_8_Template_button_click_22_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editConciergeSettings(row_r6));
    });
    \u0275\u0275elementStart(23, "div", 13)(24, "icon", 14);
    \u0275\u0275text(25, "support_agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "button", 15);
    \u0275\u0275listener("click", function RegionListComponent_ng_template_8_Template_button_click_29_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editBookingPanelSettings(row_r6));
    });
    \u0275\u0275elementStart(30, "div", 13)(31, "icon", 14);
    \u0275\u0275text(32, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "button", 15);
    \u0275\u0275listener("click", function RegionListComponent_ng_template_8_Template_button_click_36_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editVisitorKioskSettings(row_r6));
    });
    \u0275\u0275elementStart(37, "div", 13)(38, "icon", 14);
    \u0275\u0275text(39, "qr_code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div");
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "button", 15);
    \u0275\u0275listener("click", function RegionListComponent_ng_template_8_Template_button_click_43_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editRegion(row_r6));
    });
    \u0275\u0275elementStart(44, "div", 13)(45, "icon", 14);
    \u0275\u0275text(46, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div");
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "button", 15);
    \u0275\u0275listener("click", function RegionListComponent_ng_template_8_Template_button_click_50_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeRegion(row_r6));
    });
    \u0275\u0275elementStart(51, "div", 16)(52, "icon", 17);
    \u0275\u0275text(53, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div");
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const menu_r7 = \u0275\u0275reference(5);
    const app_settings_menu_r8 = \u0275\u0275reference(14);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r7);
    \u0275\u0275advance(5);
    \u0275\u0275property("matMenuTriggerFor", app_settings_menu_r8);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 9, "APP.CONCIERGE.APP_SETTINGS"), " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 11, "APP.CONCIERGE.APP_SETTINGS_WORKPLACE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 13, "APP.CONCIERGE.APP_SETTINGS_CONCIERGE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 15, "APP.CONCIERGE.APP_SETTINGS_BOOKING_PANEL"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 17, "APP.CONCIERGE.APP_SETTINGS_VISITOR_KIOSK"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 19, "APP.CONCIERGE.REGIONS_EDIT"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(56, 21, "APP.CONCIERGE.REGIONS_REMOVE"), " ");
  }
}
var RegionListComponent = class _RegionListComponent {
  constructor() {
    this._manager = inject(RegionManagementService);
    this._clipboard = inject(Clipboard);
    this._dialog = inject(MatDialog);
    this.regions = this._manager.filtered_regions;
    this.editRegion = (region) => this._manager.editRegion(region);
    this.removeRegion = (region) => this._manager.removeRegion(region);
    this.copyToClipboard = (id) => {
      const success = this._clipboard.copy(id);
      if (success)
        notifySuccess("Region ID copied to clipboard.");
    };
  }
  editWorkplaceSettings(zone) {
    this._dialog.open(WorkplaceSettingsFormModalComponent, {
      data: { zone }
    });
  }
  editConciergeSettings(zone) {
    this._dialog.open(ConciergeSettingsFormModalComponent, {
      data: { zone }
    });
  }
  editBookingPanelSettings(zone) {
    this._dialog.open(BookingPanelSettingsModalComponent, {
      data: { zone }
    });
  }
  editVisitorKioskSettings(zone) {
    this._dialog.open(VisitorKioskSettingsFormModalComponent, {
      data: { zone }
    });
  }
  static {
    this.\u0275fac = function RegionListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegionListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegionListComponent, selectors: [["region-list"]], decls: 10, vars: 21, consts: [["name_template", ""], ["action_template", ""], ["menu", "matMenu"], ["app_settings_menu", "matMenu"], [1, "absolute", "inset-0", "overflow-auto", "px-8"], [1, "block", "min-w-lg", "text-sm", 3, "data", "empty_message", "columns", "sortable"], [1, "h-20", "w-full"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "flex", "w-full", "justify-end", "space-x-2", "p-1"], ["icon", "", "default", "", "matRipple", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2", "text-red-500"], [1, "text-error", "text-xl"]], template: function RegionListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 4);
        \u0275\u0275element(1, "simple-table", 5);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275element(5, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, RegionListComponent_ng_template_6_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(8, RegionListComponent_ng_template_8_Template, 57, 23, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const name_template_r9 = \u0275\u0275reference(7);
        const action_template_r10 = \u0275\u0275reference(9);
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.regions())("empty_message", \u0275\u0275pipeBind1(2, 4, "APP.CONCIERGE.REGIONS_EMPTY"))("columns", \u0275\u0275pureFunction3(17, _c34, \u0275\u0275pureFunction2(10, _c07, \u0275\u0275pipeBind1(3, 6, "APP.CONCIERGE.REGIONS_NAME"), name_template_r9), \u0275\u0275pureFunction1(13, _c15, \u0275\u0275pipeBind1(4, 8, "APP.CONCIERGE.REGIONS_BUILDINGS")), \u0275\u0275pureFunction1(15, _c24, action_template_r10)))("sortable", true);
      }
    }, dependencies: [
      SimpleTableComponent,
      IconComponent,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegionListComponent, [{
    type: Component,
    args: [{ selector: "region-list", template: `
        <div class="absolute inset-0 overflow-auto px-8">
            <simple-table
                class="block min-w-lg text-sm"
                [data]="regions()"
                [empty_message]="'APP.CONCIERGE.REGIONS_EMPTY' | translate"
                [columns]="[
                    {
                        key: 'display_name',
                        name: 'APP.CONCIERGE.REGIONS_NAME' | translate,
                        content: name_template,
                    },
                    {
                        key: 'building_count',
                        name: 'APP.CONCIERGE.REGIONS_BUILDINGS' | translate,
                        size: '8rem',
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        size: '3.5rem',
                        sortable: false,
                    },
                ]"
                [sortable]="true"
            ></simple-table>
            <div class="h-20 w-full"></div>
        </div>
        <ng-template #name_template let-row="row" let-data="data">
            <button
                class="px-4 py-2 text-left leading-tight"
                (click)="copyToClipboard(row.id)"
            >
                <div class="">{{ data }}</div>
                <div class="font-mono text-[0.625rem] opacity-30">
                    {{ row.id }}
                </div>
            </button>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="flex w-full justify-end space-x-2 p-1">
                <button
                    icon
                    default
                    matRipple
                    [matMenuTriggerFor]="menu"
                >
                    <icon>more_vert</icon>
                </button>
                <mat-menu #menu="matMenu">
                    <button
                        mat-menu-item
                        [matMenuTriggerFor]="app_settings_menu"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">edit_square</icon>
                            <div>
                                {{ 'APP.CONCIERGE.APP_SETTINGS' | translate }}
                            </div>
                        </div>
                    </button>
                    <mat-menu #app_settings_menu="matMenu">
                        <button
                            mat-menu-item
                            (click)="editWorkplaceSettings(row)"
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">meeting_room</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.APP_SETTINGS_WORKPLACE'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        <button
                            mat-menu-item
                            (click)="editConciergeSettings(row)"
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">support_agent</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.APP_SETTINGS_CONCIERGE'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        <button
                            mat-menu-item
                            (click)="editBookingPanelSettings(row)"
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">event_busy</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.APP_SETTINGS_BOOKING_PANEL'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        <button
                            mat-menu-item
                            (click)="editVisitorKioskSettings(row)"
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">qr_code</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.APP_SETTINGS_VISITOR_KIOSK'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                    </mat-menu>
                    <button mat-menu-item (click)="editRegion(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">edit</icon>
                            <div>
                                {{ 'APP.CONCIERGE.REGIONS_EDIT' | translate }}
                            </div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="removeRegion(row)">
                        <div class="flex items-center space-x-2 text-red-500">
                            <icon class="text-error text-xl"> delete </icon>
                            <div>
                                {{ 'APP.CONCIERGE.REGIONS_REMOVE' | translate }}
                            </div>
                        </div>
                    </button>
                </mat-menu>
            </div>
        </ng-template>
    `, imports: [
      SimpleTableComponent,
      TranslatePipe,
      IconComponent,
      MatMenuModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegionListComponent, { className: "RegionListComponent", filePath: "apps/concierge/src/app/region-manager/region-list.component.ts", lineNumber: 169 });
})();

// apps/concierge/src/app/zone-manager/zone-manager.component.ts
function ZoneManagerComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 6)(1, "icon");
    \u0275\u0275text(2, "more_vert");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const app_settings_menu_r2 = \u0275\u0275reference(29);
    \u0275\u0275property("matMenuTriggerFor", app_settings_menu_r2)("matTooltip", "Organisation App Settings");
  }
}
function ZoneManagerComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "region-list", 13);
  }
}
function ZoneManagerComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "building-list", 13);
  }
}
function ZoneManagerComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "level-list", 13);
  }
}
var ZoneManagerComponent = class _ZoneManagerComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._region_service = inject(RegionManagementService);
    this._building_service = inject(BuildingManagementService);
    this._level_service = inject(LevelManagementService);
    this._dialog = inject(MatDialog);
    this._org = inject(OrganisationService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this.selected_tab = signal(
      0,
      ...ngDevMode ? [{ debugName: "selected_tab" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.TAB_NAMES = ["regions", "buildings", "levels"];
    this.addButtonText = computed(
      () => {
        const tab_index = this.selected_tab();
        if (tab_index === 0)
          return "APP.CONCIERGE.REGIONS_ADD";
        if (tab_index === 1)
          return "APP.CONCIERGE.BUILDINGS_ADD";
        return "APP.CONCIERGE.LEVELS_ADD";
      },
      ...ngDevMode ? [{ debugName: "addButtonText" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.addItem = () => {
      const tab_index = this.selected_tab();
      if (tab_index === 0)
        this._region_service.editRegion();
      else if (tab_index === 1)
        this._building_service.editBuilding();
      else
        this._level_service.editLevel();
    };
  }
  onTabChange(index) {
    this.selected_tab.set(index);
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: { tab: this.TAB_NAMES[index] },
      queryParamsHandling: "merge"
    });
  }
  async ngOnInit() {
    await this._org.waitUntilInitialised();
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("tab")) {
        const tab_name = params.get("tab");
        const tab_index = this.TAB_NAMES.indexOf(tab_name);
        if (tab_index >= 0) {
          this.selected_tab.set(tab_index);
        }
      }
    }));
  }
  editWorkplaceSettings() {
    this._dialog.open(WorkplaceSettingsFormModalComponent, {
      data: { zone: this._org.organisation }
    });
  }
  editConciergeSettings() {
    this._dialog.open(ConciergeSettingsFormModalComponent, {
      data: { zone: this._org.organisation }
    });
  }
  editBookingPanelSettings() {
    this._dialog.open(BookingPanelSettingsModalComponent, {
      data: { zone: this._org.organisation }
    });
  }
  editVisitorKioskSettings() {
    this._dialog.open(VisitorKioskSettingsFormModalComponent, {
      data: { zone: this._org.organisation }
    });
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275ZoneManagerComponent_BaseFactory;
      return function ZoneManagerComponent_Factory(__ngFactoryType__) {
        return (\u0275ZoneManagerComponent_BaseFactory || (\u0275ZoneManagerComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ZoneManagerComponent)))(__ngFactoryType__ || _ZoneManagerComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZoneManagerComponent, selectors: [["", "app-zone-manager", ""]], features: [\u0275\u0275InheritDefinitionFeature], decls: 58, vars: 30, consts: [["app_settings_menu", "matMenu"], [1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "mb-2", "flex", "items-center", "justify-between", "px-8", "pt-4", "pb-2"], [1, "text-2xl", "font-medium"], [1, "flex", "items-center", "gap-2"], ["icon", "", "matRipple", "", 3, "matMenuTriggerFor", "matTooltip"], ["btn", "", "matRipple", "", 1, "w-48", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "pr-2"], [1, "bg-base-200", "mx-8", "mb-4", "overflow-hidden", "rounded-md", 3, "selectedIndexChange", "selectedIndex"], [3, "label"], [1, "content-area", "flex-1"], [1, "relative", "block", "h-full", "w-full"], ["mat-menu-item", "", 3, "click"], [1, "text-xl"]], template: function ZoneManagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275element(0, "app-topbar");
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275element(2, "app-sidebar");
        \u0275\u0275elementStart(3, "main", 2)(4, "header", 3)(5, "h2", 4);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 5);
        \u0275\u0275conditionalCreate(9, ZoneManagerComponent_Conditional_9_Template, 3, 2, "button", 6);
        \u0275\u0275elementStart(10, "button", 7);
        \u0275\u0275listener("click", function ZoneManagerComponent_Template_button_click_10_listener() {
          return ctx.addItem();
        });
        \u0275\u0275elementStart(11, "div", 8)(12, "icon");
        \u0275\u0275text(13, "shadow_add");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 9);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(17, "mat-tab-group", 10);
        \u0275\u0275twoWayListener("selectedIndexChange", function ZoneManagerComponent_Template_mat_tab_group_selectedIndexChange_17_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.selected_tab, $event) || (ctx.selected_tab = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("selectedIndexChange", function ZoneManagerComponent_Template_mat_tab_group_selectedIndexChange_17_listener($event) {
          return ctx.onTabChange($event);
        });
        \u0275\u0275element(18, "mat-tab", 11);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275element(20, "mat-tab", 11);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275element(22, "mat-tab", 11);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 12);
        \u0275\u0275conditionalCreate(25, ZoneManagerComponent_Conditional_25_Template, 1, 0, "region-list", 13)(26, ZoneManagerComponent_Conditional_26_Template, 1, 0, "building-list", 13)(27, ZoneManagerComponent_Conditional_27_Template, 1, 0, "level-list", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "mat-menu", null, 0)(30, "button", 14);
        \u0275\u0275listener("click", function ZoneManagerComponent_Template_button_click_30_listener() {
          return ctx.editWorkplaceSettings();
        });
        \u0275\u0275elementStart(31, "div", 8)(32, "icon", 15);
        \u0275\u0275text(33, "meeting_room");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div");
        \u0275\u0275text(35);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "button", 14);
        \u0275\u0275listener("click", function ZoneManagerComponent_Template_button_click_37_listener() {
          return ctx.editConciergeSettings();
        });
        \u0275\u0275elementStart(38, "div", 8)(39, "icon", 15);
        \u0275\u0275text(40, "support_agent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div");
        \u0275\u0275text(42);
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(44, "button", 14);
        \u0275\u0275listener("click", function ZoneManagerComponent_Template_button_click_44_listener() {
          return ctx.editBookingPanelSettings();
        });
        \u0275\u0275elementStart(45, "div", 8)(46, "icon", 15);
        \u0275\u0275text(47, "event_busy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div");
        \u0275\u0275text(49);
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(51, "button", 14);
        \u0275\u0275listener("click", function ZoneManagerComponent_Template_button_click_51_listener() {
          return ctx.editVisitorKioskSettings();
        });
        \u0275\u0275elementStart(52, "div", 8)(53, "icon", 15);
        \u0275\u0275text(54, "qr_code");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "div");
        \u0275\u0275text(56);
        \u0275\u0275pipe(57, "translate");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 12, "APP.CONCIERGE.ZONES_HEADER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.selected_tab() === 0 ? 9 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 14, ctx.addButtonText()), " ");
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("selectedIndex", ctx.selected_tab);
        \u0275\u0275advance();
        \u0275\u0275property("label", \u0275\u0275pipeBind1(19, 16, "APP.CONCIERGE.TAB_REGIONS"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(21, 18, "APP.CONCIERGE.TAB_BUILDINGS"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(23, 20, "APP.CONCIERGE.TAB_LEVELS"));
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.selected_tab() === 0 ? 25 : ctx.selected_tab() === 1 ? 26 : ctx.selected_tab() === 2 ? 27 : -1);
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 22, "APP.CONCIERGE.APP_SETTINGS_WORKPLACE"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 24, "APP.CONCIERGE.APP_SETTINGS_CONCIERGE"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(50, 26, "APP.CONCIERGE.APP_SETTINGS_BOOKING_PANEL"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(57, 28, "APP.CONCIERGE.APP_SETTINGS_VISITOR_KIOSK"), " ");
      }
    }, dependencies: [
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      MatTabsModule,
      MatTab,
      MatTabGroup,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      RegionListComponent,
      BuildingListComponent,
      LevelListComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=zone-manager.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZoneManagerComponent, [{
    type: Component,
    args: [{ selector: "[app-zone-manager]", template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <header
                    class="mb-2 flex items-center justify-between px-8 pt-4 pb-2"
                >
                    <h2 class="text-2xl font-medium">
                        {{ 'APP.CONCIERGE.ZONES_HEADER' | translate }}
                    </h2>
                    <div class="flex items-center gap-2">
                        @if (selected_tab() === 0) {
                            <button
                                icon
                                matRipple
                                [matMenuTriggerFor]="app_settings_menu"
                                [matTooltip]="'Organisation App Settings'"
                            >
                                <icon>more_vert</icon>
                            </button>
                        }
                        <button btn matRipple (click)="addItem()" class="w-48">
                            <div class="flex items-center space-x-2">
                                <icon>shadow_add</icon>
                                <div class="pr-2">
                                    {{ addButtonText() | translate }}
                                </div>
                            </div>
                        </button>
                    </div>
                </header>
                <mat-tab-group
                    class="bg-base-200 mx-8 mb-4 overflow-hidden rounded-md"
                    [(selectedIndex)]="selected_tab"
                    (selectedIndexChange)="onTabChange($event)"
                >
                    <mat-tab
                        [label]="'APP.CONCIERGE.TAB_REGIONS' | translate"
                    ></mat-tab>
                    <mat-tab
                        [label]="'APP.CONCIERGE.TAB_BUILDINGS' | translate"
                    ></mat-tab>
                    <mat-tab
                        [label]="'APP.CONCIERGE.TAB_LEVELS' | translate"
                    ></mat-tab>
                </mat-tab-group>
                <div class="content-area flex-1">
                    @if (selected_tab() === 0) {
                        <region-list
                            class="relative block h-full w-full"
                        ></region-list>
                    } @else if (selected_tab() === 1) {
                        <building-list
                            class="relative block h-full w-full"
                        ></building-list>
                    } @else if (selected_tab() === 2) {
                        <level-list
                            class="relative block h-full w-full"
                        ></level-list>
                    }
                </div>
                <mat-menu #app_settings_menu="matMenu">
                    <button mat-menu-item (click)="editWorkplaceSettings()">
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">meeting_room</icon>
                            <div>
                                {{
                                    'APP.CONCIERGE.APP_SETTINGS_WORKPLACE'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="editConciergeSettings()">
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">support_agent</icon>
                            <div>
                                {{
                                    'APP.CONCIERGE.APP_SETTINGS_CONCIERGE'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="editBookingPanelSettings()">
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">event_busy</icon>
                            <div>
                                {{
                                    'APP.CONCIERGE.APP_SETTINGS_BOOKING_PANEL'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="editVisitorKioskSettings()">
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">qr_code</icon>
                            <div>
                                {{
                                    'APP.CONCIERGE.APP_SETTINGS_VISITOR_KIOSK'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                </mat-menu>
            </main>
        </div>
    `, imports: [
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      MatTabsModule,
      MatMenuModule,
      MatRippleModule,
      MatTooltipModule,
      IconComponent,
      TranslatePipe,
      RegionListComponent,
      BuildingListComponent,
      LevelListComponent
    ], styles: ["/* angular:styles/component:css;8c4a04aa555db379bf6f094c3ef1278e1f19da8fa9947c76cf85d1411aeb75c3;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/zone-manager/zone-manager.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=zone-manager.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZoneManagerComponent, { className: "ZoneManagerComponent", filePath: "apps/concierge/src/app/zone-manager/zone-manager.component.ts", lineNumber: 161 });
})();

// apps/concierge/src/app/zone-manager/zone-manager.routes.ts
var ROUTES = [
  { path: "", component: ZoneManagerComponent, title: "Zone Management" }
];
export {
  ROUTES
};
//# sourceMappingURL=zone-manager.routes-QYVE25E2.js.map
