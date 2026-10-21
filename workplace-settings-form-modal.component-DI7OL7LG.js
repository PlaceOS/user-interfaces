import {
  AVAILABLE_PERIOD_EXTENDED_OPTIONS,
  BANNER_TYPE_OPTIONS,
  BLOCK_END_OPTIONS,
  BLOCK_START_OPTIONS,
  BOOKABLE_HOUR_END_OPTIONS,
  BOOKABLE_HOUR_START_OPTIONS,
  EXPLORE_FEATURE_OPTIONS,
  LOCKER_BOOKING_FALLBACKS,
  MAX_DURATION_FULL_OPTIONS,
  MAX_DURATION_SHORT_OPTIONS,
  SETUP_BREAKDOWN_OPTIONS,
  WEEK_START_OPTIONS,
  appSettingOverrides,
  applyAppSettings,
  applyBookingFallbacks,
  mergeAppSettings
} from "./chunk-LTM6CUF4.js";
import {
  UploadButtonComponent
} from "./chunk-JGBH7DYD.js";
import {
  errorText
} from "./chunk-A6F2GUTH.js";
import "./chunk-EFMAXE4Z.js";
import {
  SettingsToggleComponent
} from "./chunk-6DDBZJ2C.js";
import {
  FullscreenModalShellComponent
} from "./chunk-AYM5LPAN.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-EPT6QV6G.js";
import "./chunk-TZ5JUV4G.js";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from "./chunk-CAAMUB2D.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-YVNE7QXT.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatHint
} from "./chunk-ZVSHIGFS.js";
import "./chunk-4VWJLUSZ.js";
import "./chunk-HLTSGFYE.js";
import {
  MatOption
} from "./chunk-JQJNBBNN.js";
import {
  isValidUrl
} from "./chunk-ANOUTIDN.js";
import "./chunk-OFW7WDFE.js";
import "./chunk-7MSOSGO6.js";
import "./chunk-N7R5EHVG.js";
import {
  FormField,
  form,
  validate
} from "./chunk-MCWEYL2F.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-C5SFKFXB.js";
import {
  OrganisationService,
  SettingsService,
  VERSION,
  buildCurrencyOptions,
  currentUser
} from "./chunk-6LLBH4AH.js";
import "./chunk-EQB56Z5X.js";
import {
  IconComponent
} from "./chunk-J53GBIJV.js";
import {
  ac,
  format,
  hc,
  notifyError,
  notifySuccess
} from "./chunk-77D47I3C.js";
import "./chunk-QQKECY2M.js";
import "./chunk-F5BJYE7W.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-FWV33PKU.js";
import "./chunk-BF2TDFXD.js";
import "./chunk-R7WRISTA.js";
import "./chunk-TFYF4ALL.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
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
} from "./chunk-EOGESHX7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/workplace/src/environments/settings.ts
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
  // bookable_hours: { start: 8, end: 19 },
  can_book_for_others: false,
  has_assets: true,
  allow_all_day: true,
  hide_notes: false,
  hide_attendees: false,
  hide_nearby_desks: false,
  booking_unavailable: false,
  allow_externals: true,
  allow_recurrence: false,
  allow_daily_allday_recurrence: false,
  allow_online_meetings: false,
  force_current_user_for_booking_rules: false
};
var schedule = {
  use_websocket: false
};
var explore = {
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
  show_legend: true,
  hide_zones: true,
  hide_devices: true,
  hide_sensors: true,
  use_zone_polygons: false,
  legend: [
    ["Available", "#43a047"],
    ["In Use", "#e53935"],
    ["Pending", "#ffb300"],
    ["Signs of Life", "#1565c0"]
  ],
  cisco_maps: {
    enabled: false
  }
};
var app = {
  name: "Workplace",
  short_name: "Workplace",
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
  basic_user_search: false,
  show_presence_indicators: false,
  help,
  events,
  // Catering backend: 'native' uses PlaceOS assets, 'external' uses the
  // external catering driver bound to the building via the `catering` module
  // binding
  catering: {
    backend: "native"
  },
  explore,
  bookings: {
    no_approval: false,
    all_day_default: false,
    allowed_daily_visitor_count: 100,
    multiple_visitors: true,
    force_current_user_for_booking_rules: false,
    // Applies to any assignable resource type (desk/parking/locker).
    // Override per type under `app.<type>s.*` (e.g. `app.desks.*`).
    assigned_resource_booking: "other_only"
  },
  desks: {
    use_assets: false,
    can_book_lockers: true,
    can_book_for_others: true,
    // bookable_hours: { start: 8, end: 19 },
    allow_groups: true,
    allow_time_changes: true,
    allow_all_day: true,
    auto_allocation: false,
    show_calendar_links: true,
    allow_recurrence: true,
    default_select_as_map: false,
    default_duration: 60
  },
  parking: {
    allow_all_day: true,
    allow_recurrence: true,
    waitlist_week_start: { day: 5, hour: 18, minute: 0 },
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
    require_space_restriction: true
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
var DEFAULT_SETTINGS = {
  debug: true,
  composer: {
    domain: "",
    route: "/staff",
    protocol: "",
    port: "",
    use_domain: false,
    local_login: false
  },
  app
};

// apps/concierge/src/app/ui/app-settings/workplace-settings-form-modal.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = () => ({ id: "en-GB", name: "English", flag: "\u{1F1EC}\u{1F1E7}" });
var _c2 = () => ({ id: "en-US", name: "English", flag: "\u{1F1FA}\u{1F1F8}" });
var _c3 = () => ({ id: "fr", name: "French", flag: "\u{1F1EB}\u{1F1F7}" });
var _c4 = () => ({ id: "es", name: "Spanish", flag: "\u{1F1EA}\u{1F1F8}" });
var _c5 = () => ({ id: "pt", name: "Portuguese", flag: "\u{1F1F5}\u{1F1F9}" });
var _c6 = () => ({ id: "ar", name: "Arabic", flag: "" });
var _c7 = () => [];
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.code;
function WorkplaceSettingsFormModalComponent_For_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 45);
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
function WorkplaceSettingsFormModalComponent_For_138_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 45);
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
function WorkplaceSettingsFormModalComponent_For_149_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 45);
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
function WorkplaceSettingsFormModalComponent_Conditional_150_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 61);
    \u0275\u0275text(1, " No currencies match your search ");
    \u0275\u0275elementEnd();
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_174_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "settings-toggle", 68);
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("formField", ctx_r3.form.allow_support_ticket_images);
    \u0275\u0275control();
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_186_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 45);
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
function WorkplaceSettingsFormModalComponent_Conditional_186_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 45);
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
function WorkplaceSettingsFormModalComponent_Conditional_186_For_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 45);
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
function WorkplaceSettingsFormModalComponent_Conditional_186_For_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 45);
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
function WorkplaceSettingsFormModalComponent_Conditional_186_For_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 45);
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
function WorkplaceSettingsFormModalComponent_Conditional_186_For_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 45);
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
function WorkplaceSettingsFormModalComponent_Conditional_186_For_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 45);
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
function WorkplaceSettingsFormModalComponent_Conditional_186_For_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 45);
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
function WorkplaceSettingsFormModalComponent_Conditional_186_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 80)(1, "h3", 40);
    \u0275\u0275text(2, " Room Bookings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 86);
    \u0275\u0275listener("click", function WorkplaceSettingsFormModalComponent_Conditional_186_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleGroup("spaces"));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 87)(7, "div", 88)(8, "div")(9, "label", 89);
    \u0275\u0275text(10, " Available Period ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 10)(12, "mat-select", 90);
    \u0275\u0275repeaterCreate(13, WorkplaceSettingsFormModalComponent_Conditional_186_For_14_Template, 2, 2, "mat-option", 45, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(15, "mat-hint");
    \u0275\u0275text(16, " Number of days ahead the user is able to book ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div")(18, "label", 91);
    \u0275\u0275text(19, "Force Host");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-form-field", 10);
    \u0275\u0275element(21, "input", 92);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(22, "mat-hint");
    \u0275\u0275text(23, " Force host of room bookings to be this user ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-error");
    \u0275\u0275text(25, "Invalid email address");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div")(27, "label", 93);
    \u0275\u0275text(28, " Max Duration ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-form-field", 10)(30, "mat-select", 90);
    \u0275\u0275repeaterCreate(31, WorkplaceSettingsFormModalComponent_Conditional_186_For_32_Template, 2, 2, "mat-option", 45, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(33, "mat-hint");
    \u0275\u0275text(34, " Max duration for single day bookings ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 41)(36, "div")(37, "label", 94);
    \u0275\u0275text(38, " Default Setup Duration ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "mat-form-field", 10)(40, "mat-select", 95);
    \u0275\u0275repeaterCreate(41, WorkplaceSettingsFormModalComponent_Conditional_186_For_42_Template, 2, 2, "mat-option", 45, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div")(44, "label", 96);
    \u0275\u0275text(45, " Default Breakdown Duration ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "mat-form-field", 10)(47, "mat-select", 97);
    \u0275\u0275repeaterCreate(48, WorkplaceSettingsFormModalComponent_Conditional_186_For_49_Template, 2, 2, "mat-option", 45, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "div", 98)(51, "div")(52, "label", 99);
    \u0275\u0275text(53, " Bookable Start ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "mat-form-field", 10)(55, "mat-select", 100);
    \u0275\u0275repeaterCreate(56, WorkplaceSettingsFormModalComponent_Conditional_186_For_57_Template, 2, 2, "mat-option", 45, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div")(59, "label", 101);
    \u0275\u0275text(60, " Bookable End ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "mat-form-field", 10)(62, "mat-select", 100);
    \u0275\u0275repeaterCreate(63, WorkplaceSettingsFormModalComponent_Conditional_186_For_64_Template, 2, 2, "mat-option", 45, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "div", 64);
    \u0275\u0275element(66, "settings-toggle", 102);
    \u0275\u0275controlCreate();
    \u0275\u0275element(67, "settings-toggle", 103);
    \u0275\u0275controlCreate();
    \u0275\u0275element(68, "settings-toggle", 104);
    \u0275\u0275controlCreate();
    \u0275\u0275element(69, "settings-toggle", 105);
    \u0275\u0275controlCreate();
    \u0275\u0275element(70, "settings-toggle", 106);
    \u0275\u0275controlCreate();
    \u0275\u0275element(71, "settings-toggle", 107);
    \u0275\u0275controlCreate();
    \u0275\u0275element(72, "settings-toggle", 108);
    \u0275\u0275controlCreate();
    \u0275\u0275element(73, "settings-toggle", 109);
    \u0275\u0275controlCreate();
    \u0275\u0275element(74, "settings-toggle", 110);
    \u0275\u0275controlCreate();
    \u0275\u0275element(75, "settings-toggle", 111);
    \u0275\u0275controlCreate();
    \u0275\u0275element(76, "settings-toggle", 112);
    \u0275\u0275controlCreate();
    \u0275\u0275element(77, "settings-toggle", 113);
    \u0275\u0275controlCreate();
    \u0275\u0275element(78, "settings-toggle", 114);
    \u0275\u0275controlCreate();
    \u0275\u0275element(79, "settings-toggle", 115);
    \u0275\u0275controlCreate();
    \u0275\u0275element(80, "settings-toggle", 116);
    \u0275\u0275controlCreate();
    \u0275\u0275element(81, "settings-toggle", 117);
    \u0275\u0275controlCreate();
    \u0275\u0275element(82, "settings-toggle", 118);
    \u0275\u0275controlCreate();
    \u0275\u0275element(83, "settings-toggle", 119);
    \u0275\u0275controlCreate();
    \u0275\u0275element(84, "settings-toggle", 120);
    \u0275\u0275controlCreate();
    \u0275\u0275element(85, "settings-toggle", 121);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "div", 98)(87, "div")(88, "label", 122);
    \u0275\u0275text(89, " All Day Start ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "mat-form-field", 10)(91, "mat-select", 90);
    \u0275\u0275repeaterCreate(92, WorkplaceSettingsFormModalComponent_Conditional_186_For_93_Template, 2, 2, "mat-option", 45, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "div")(95, "label", 123);
    \u0275\u0275text(96, " All Day End ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "mat-form-field", 10)(98, "mat-select", 90);
    \u0275\u0275repeaterCreate(99, WorkplaceSettingsFormModalComponent_Conditional_186_For_100_Template, 2, 2, "mat-option", 45, _forTrack0);
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
    \u0275\u0275advance(7);
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
    \u0275\u0275property("formField", ctx_r3.form.events.multiple_spaces);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.events.room_as_host);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.events.allow_externals);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.events.allow_international);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.events.allow_attendee_internal_or_external);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.events.strict_capacity_check);
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
function WorkplaceSettingsFormModalComponent_Conditional_187_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 45);
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
function WorkplaceSettingsFormModalComponent_Conditional_187_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 45);
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
function WorkplaceSettingsFormModalComponent_Conditional_187_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 45);
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
function WorkplaceSettingsFormModalComponent_Conditional_187_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 45);
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
function WorkplaceSettingsFormModalComponent_Conditional_187_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 81)(1, "h3", 40);
    \u0275\u0275text(2, " Desk Bookings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 86);
    \u0275\u0275listener("click", function WorkplaceSettingsFormModalComponent_Conditional_187_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleGroup("desks"));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 87)(7, "div", 88)(8, "div")(9, "label", 93);
    \u0275\u0275text(10, " Max Duration ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 10)(12, "mat-select", 90);
    \u0275\u0275repeaterCreate(13, WorkplaceSettingsFormModalComponent_Conditional_187_For_14_Template, 2, 2, "mat-option", 45, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div")(16, "label", 89);
    \u0275\u0275text(17, " Available Period ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "mat-form-field", 10)(19, "mat-select", 90);
    \u0275\u0275repeaterCreate(20, WorkplaceSettingsFormModalComponent_Conditional_187_For_21_Template, 2, 2, "mat-option", 45, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(22, "mat-hint");
    \u0275\u0275text(23, " Number of days ahead the user is able to book ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 98)(25, "div")(26, "label", 124);
    \u0275\u0275text(27, " Bookable Start ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-form-field", 10)(29, "mat-select", 90);
    \u0275\u0275repeaterCreate(30, WorkplaceSettingsFormModalComponent_Conditional_187_For_31_Template, 2, 2, "mat-option", 45, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div")(33, "label", 125);
    \u0275\u0275text(34, " Bookable End ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "mat-form-field", 10)(36, "mat-select", 90);
    \u0275\u0275repeaterCreate(37, WorkplaceSettingsFormModalComponent_Conditional_187_For_38_Template, 2, 2, "mat-option", 45, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 64);
    \u0275\u0275element(40, "settings-toggle", 102);
    \u0275\u0275controlCreate();
    \u0275\u0275element(41, "settings-toggle", 126);
    \u0275\u0275controlCreate();
    \u0275\u0275element(42, "settings-toggle", 127);
    \u0275\u0275controlCreate();
    \u0275\u0275element(43, "settings-toggle", 128);
    \u0275\u0275controlCreate();
    \u0275\u0275element(44, "settings-toggle", 129);
    \u0275\u0275controlCreate();
    \u0275\u0275element(45, "settings-toggle", 130);
    \u0275\u0275controlCreate();
    \u0275\u0275element(46, "settings-toggle", 131);
    \u0275\u0275controlCreate();
    \u0275\u0275element(47, "settings-toggle", 132);
    \u0275\u0275controlCreate();
    \u0275\u0275element(48, "settings-toggle", 133);
    \u0275\u0275controlCreate();
    \u0275\u0275element(49, "settings-toggle", 134);
    \u0275\u0275controlCreate();
    \u0275\u0275element(50, "settings-toggle", 135);
    \u0275\u0275controlCreate();
    \u0275\u0275element(51, "settings-toggle", 136);
    \u0275\u0275controlCreate();
    \u0275\u0275element(52, "settings-toggle", 137);
    \u0275\u0275controlCreate();
    \u0275\u0275element(53, "settings-toggle", 138);
    \u0275\u0275controlCreate();
    \u0275\u0275element(54, "settings-toggle", 119);
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
    \u0275\u0275property("formField", ctx_r3.form.desks.use_building_timezone);
    \u0275\u0275control();
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_188_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r20 = ctx.$implicit;
    \u0275\u0275property("value", opt_r20.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r20.label);
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_188_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 45);
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
function WorkplaceSettingsFormModalComponent_Conditional_188_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 45);
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
function WorkplaceSettingsFormModalComponent_Conditional_188_For_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 45);
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
function WorkplaceSettingsFormModalComponent_Conditional_188_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 82)(1, "h3", 40);
    \u0275\u0275text(2, " PlaceOS Bookings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 86);
    \u0275\u0275listener("click", function WorkplaceSettingsFormModalComponent_Conditional_188_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleGroup("bookings"));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 87)(7, "div", 88)(8, "div", 98)(9, "div")(10, "label", 139);
    \u0275\u0275text(11, " Bookable Start ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-form-field", 10)(13, "mat-select", 90);
    \u0275\u0275repeaterCreate(14, WorkplaceSettingsFormModalComponent_Conditional_188_For_15_Template, 2, 2, "mat-option", 45, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "label", 140);
    \u0275\u0275text(18, " Bookable End ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-form-field", 10)(20, "mat-select", 90);
    \u0275\u0275repeaterCreate(21, WorkplaceSettingsFormModalComponent_Conditional_188_For_22_Template, 2, 2, "mat-option", 45, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 64);
    \u0275\u0275element(24, "settings-toggle", 102);
    \u0275\u0275controlCreate();
    \u0275\u0275element(25, "settings-toggle", 126);
    \u0275\u0275controlCreate();
    \u0275\u0275element(26, "settings-toggle", 119);
    \u0275\u0275controlCreate();
    \u0275\u0275element(27, "settings-toggle", 104);
    \u0275\u0275controlCreate();
    \u0275\u0275element(28, "settings-toggle", 141);
    \u0275\u0275controlCreate();
    \u0275\u0275element(29, "settings-toggle", 142);
    \u0275\u0275controlCreate();
    \u0275\u0275element(30, "settings-toggle", 106);
    \u0275\u0275controlCreate();
    \u0275\u0275elementContainerStart(31);
    \u0275\u0275element(32, "settings-toggle", 143);
    \u0275\u0275controlCreate();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(33);
    \u0275\u0275element(34, "settings-toggle", 144);
    \u0275\u0275controlCreate();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(35);
    \u0275\u0275element(36, "settings-toggle", 145);
    \u0275\u0275controlCreate();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 98)(38, "div")(39, "label", 146);
    \u0275\u0275text(40, " All Day Start ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "mat-form-field", 10)(42, "mat-select", 100);
    \u0275\u0275repeaterCreate(43, WorkplaceSettingsFormModalComponent_Conditional_188_For_44_Template, 2, 2, "mat-option", 45, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div")(46, "label", 147);
    \u0275\u0275text(47, " All Day End ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "mat-form-field", 10)(49, "mat-select", 100);
    \u0275\u0275repeaterCreate(50, WorkplaceSettingsFormModalComponent_Conditional_188_For_51_Template, 2, 2, "mat-option", 45, _forTrack0);
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
    \u0275\u0275property("formField", ctx_r3.form.bookings.has_assets);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r3.form.visitors.show_calendar_links);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r3.form.visitors.allow_international);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r3.form.visitors.allow_visitor_internal_or_external);
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
function WorkplaceSettingsFormModalComponent_Conditional_189_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 45);
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
function WorkplaceSettingsFormModalComponent_Conditional_189_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 45);
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
function WorkplaceSettingsFormModalComponent_Conditional_189_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 45);
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
function WorkplaceSettingsFormModalComponent_Conditional_189_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 45);
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
function WorkplaceSettingsFormModalComponent_Conditional_189_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 45);
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
function WorkplaceSettingsFormModalComponent_Conditional_189_Conditional_45_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 173)(1, "div", 175)(2, "mat-form-field", 5)(3, "input", 176);
    \u0275\u0275twoWayListener("ngModelChange", function WorkplaceSettingsFormModalComponent_Conditional_189_Conditional_45_For_4_Template_input_ngModelChange_3_listener($event) {
      const item_r32 = \u0275\u0275restoreView(_r31).$implicit;
      \u0275\u0275twoWayBindingSet(item_r32[0], $event) || (item_r32[0] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 177)(5, "input", 178);
    \u0275\u0275twoWayListener("ngModelChange", function WorkplaceSettingsFormModalComponent_Conditional_189_Conditional_45_For_4_Template_input_ngModelChange_5_listener($event) {
      const item_r32 = \u0275\u0275restoreView(_r31).$implicit;
      \u0275\u0275twoWayBindingSet(item_r32[1], $event) || (item_r32[1] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 179);
    \u0275\u0275listener("click", function WorkplaceSettingsFormModalComponent_Conditional_189_Conditional_45_For_4_Template_button_click_6_listener() {
      const \u0275$index_802_r33 = \u0275\u0275restoreView(_r31).$index;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.removeLegend(\u0275$index_802_r33));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r32 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", item_r32[0]);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", item_r32[1]);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275control();
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_189_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 157)(1, "h3", 40);
    \u0275\u0275text(2, " Legend ");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, WorkplaceSettingsFormModalComponent_Conditional_189_Conditional_45_For_4_Template, 9, 6, "div", 173, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(5, "button", 174);
    \u0275\u0275listener("click", function WorkplaceSettingsFormModalComponent_Conditional_189_Conditional_45_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r30);
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
function WorkplaceSettingsFormModalComponent_Conditional_189_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 83)(1, "h3", 40);
    \u0275\u0275text(2, " PlaceOS Maps ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 86);
    \u0275\u0275listener("click", function WorkplaceSettingsFormModalComponent_Conditional_189_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleGroup("explore"));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 87)(7, "div", 88)(8, "div")(9, "label", 148);
    \u0275\u0275text(10, " Disabled Features ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 10)(12, "mat-select", 149);
    \u0275\u0275repeaterCreate(13, WorkplaceSettingsFormModalComponent_Conditional_189_For_14_Template, 2, 2, "mat-option", 45, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 41)(16, "div", 42)(17, "label", 150);
    \u0275\u0275text(18, " Disabled Feature Actions ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-form-field", 10)(20, "mat-select", 151);
    \u0275\u0275repeaterCreate(21, WorkplaceSettingsFormModalComponent_Conditional_189_For_22_Template, 2, 2, "mat-option", 45, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 42)(24, "label", 89);
    \u0275\u0275text(25, " Disabled Feature Labels ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-form-field", 10)(27, "mat-select", 152);
    \u0275\u0275repeaterCreate(28, WorkplaceSettingsFormModalComponent_Conditional_189_For_29_Template, 2, 2, "mat-option", 45, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 41)(31, "div", 42)(32, "label", 153);
    \u0275\u0275text(33, " Disabled Feature Displays ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "mat-form-field", 10)(35, "mat-select", 154);
    \u0275\u0275repeaterCreate(36, WorkplaceSettingsFormModalComponent_Conditional_189_For_37_Template, 2, 2, "mat-option", 45, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 42)(39, "label", 155);
    \u0275\u0275text(40, " Disabled Feature Styles ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "mat-form-field", 10)(42, "mat-select", 156);
    \u0275\u0275repeaterCreate(43, WorkplaceSettingsFormModalComponent_Conditional_189_For_44_Template, 2, 2, "mat-option", 45, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(45, WorkplaceSettingsFormModalComponent_Conditional_189_Conditional_45_Template, 7, 1, "div", 157);
    \u0275\u0275elementStart(46, "div")(47, "label", 158);
    \u0275\u0275text(48, " Hidden Device Fields ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "mat-form-field", 10)(50, "mat-select", 25)(51, "mat-option", 159);
    \u0275\u0275text(52, " MAC Address ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "mat-option", 160);
    \u0275\u0275text(54, " Manufacturer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "mat-option", 161);
    \u0275\u0275text(56, "OS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "mat-option", 162);
    \u0275\u0275text(58, "SSID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "mat-option", 163);
    \u0275\u0275text(60, " Username ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "mat-option", 164);
    \u0275\u0275text(62, "User");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(63, "mat-hint");
    \u0275\u0275text(64, " Fields hidden from device info tooltips ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "div", 64);
    \u0275\u0275element(66, "settings-toggle", 165);
    \u0275\u0275controlCreate();
    \u0275\u0275element(67, "settings-toggle", 166);
    \u0275\u0275controlCreate();
    \u0275\u0275element(68, "settings-toggle", 167);
    \u0275\u0275controlCreate();
    \u0275\u0275element(69, "settings-toggle", 168);
    \u0275\u0275controlCreate();
    \u0275\u0275element(70, "settings-toggle", 169);
    \u0275\u0275controlCreate();
    \u0275\u0275element(71, "settings-toggle", 170);
    \u0275\u0275controlCreate();
    \u0275\u0275element(72, "settings-toggle", 171);
    \u0275\u0275controlCreate();
    \u0275\u0275element(73, "settings-toggle", 172);
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
    \u0275\u0275advance(5);
    \u0275\u0275property("formField", ctx_r3.form.explore.hide_device_fields);
    \u0275\u0275control();
    \u0275\u0275advance(16);
    \u0275\u0275property("formField", ctx_r3.form.explore.show_legend);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.explore.hide_zones);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.explore.hide_devices);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r3.form.explore.hide_sensors);
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
function WorkplaceSettingsFormModalComponent_Conditional_190_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 45);
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
function WorkplaceSettingsFormModalComponent_Conditional_190_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 45);
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
function WorkplaceSettingsFormModalComponent_Conditional_190_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 45);
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
function WorkplaceSettingsFormModalComponent_Conditional_190_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 45);
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
function WorkplaceSettingsFormModalComponent_Conditional_190_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 84)(1, "h3", 40);
    \u0275\u0275text(2, " Parking Bookings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 86);
    \u0275\u0275listener("click", function WorkplaceSettingsFormModalComponent_Conditional_190_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleGroup("parking"));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 87)(7, "div", 88)(8, "div")(9, "label", 93);
    \u0275\u0275text(10, " Max Duration ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 10)(12, "mat-select", 90);
    \u0275\u0275repeaterCreate(13, WorkplaceSettingsFormModalComponent_Conditional_190_For_14_Template, 2, 2, "mat-option", 45, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div")(16, "label", 89);
    \u0275\u0275text(17, " Available Period ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "mat-form-field", 10)(19, "mat-select", 90);
    \u0275\u0275repeaterCreate(20, WorkplaceSettingsFormModalComponent_Conditional_190_For_21_Template, 2, 2, "mat-option", 45, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(22, "mat-hint");
    \u0275\u0275text(23, " Number of days ahead the user is able to book ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 98)(25, "div")(26, "label", 180);
    \u0275\u0275text(27, " Bookable Start ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-form-field", 10)(29, "mat-select", 90);
    \u0275\u0275repeaterCreate(30, WorkplaceSettingsFormModalComponent_Conditional_190_For_31_Template, 2, 2, "mat-option", 45, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div")(33, "label", 181);
    \u0275\u0275text(34, " Bookable End ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "mat-form-field", 10)(36, "mat-select", 90);
    \u0275\u0275repeaterCreate(37, WorkplaceSettingsFormModalComponent_Conditional_190_For_38_Template, 2, 2, "mat-option", 45, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 64);
    \u0275\u0275element(40, "settings-toggle", 102);
    \u0275\u0275controlCreate();
    \u0275\u0275element(41, "settings-toggle", 126);
    \u0275\u0275controlCreate();
    \u0275\u0275element(42, "settings-toggle", 182);
    \u0275\u0275controlCreate();
    \u0275\u0275element(43, "settings-toggle", 183);
    \u0275\u0275controlCreate();
    \u0275\u0275element(44, "settings-toggle", 184);
    \u0275\u0275controlCreate();
    \u0275\u0275element(45, "settings-toggle", 185);
    \u0275\u0275controlCreate();
    \u0275\u0275element(46, "settings-toggle", 104);
    \u0275\u0275controlCreate();
    \u0275\u0275element(47, "settings-toggle", 186);
    \u0275\u0275controlCreate();
    \u0275\u0275element(48, "settings-toggle", 119);
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
    \u0275\u0275property("formField", ctx_r3.form.parking.use_building_timezone);
    \u0275\u0275control();
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_191_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r40 = ctx.$implicit;
    \u0275\u0275property("value", opt_r40.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r40.label);
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_191_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 45);
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
function WorkplaceSettingsFormModalComponent_Conditional_191_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 45);
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
function WorkplaceSettingsFormModalComponent_Conditional_191_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 85)(1, "h3", 40);
    \u0275\u0275text(2, " Locker Bookings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 86);
    \u0275\u0275listener("click", function WorkplaceSettingsFormModalComponent_Conditional_191_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleGroup("lockers"));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 87)(7, "div", 88)(8, "div")(9, "label", 93);
    \u0275\u0275text(10, " Max Duration ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 10)(12, "mat-select", 90);
    \u0275\u0275repeaterCreate(13, WorkplaceSettingsFormModalComponent_Conditional_191_For_14_Template, 2, 2, "mat-option", 45, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 98)(16, "div")(17, "label", 187);
    \u0275\u0275text(18, " Bookable Start ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-form-field", 10)(20, "mat-select", 90);
    \u0275\u0275repeaterCreate(21, WorkplaceSettingsFormModalComponent_Conditional_191_For_22_Template, 2, 2, "mat-option", 45, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div")(24, "label", 188);
    \u0275\u0275text(25, " Bookable End ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-form-field", 10)(27, "mat-select", 90);
    \u0275\u0275repeaterCreate(28, WorkplaceSettingsFormModalComponent_Conditional_191_For_29_Template, 2, 2, "mat-option", 45, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 64);
    \u0275\u0275element(31, "settings-toggle", 102);
    \u0275\u0275controlCreate();
    \u0275\u0275element(32, "settings-toggle", 126);
    \u0275\u0275controlCreate();
    \u0275\u0275element(33, "settings-toggle", 189);
    \u0275\u0275controlCreate();
    \u0275\u0275element(34, "settings-toggle", 190);
    \u0275\u0275controlCreate();
    \u0275\u0275element(35, "settings-toggle", 184);
    \u0275\u0275controlCreate();
    \u0275\u0275element(36, "settings-toggle", 119);
    \u0275\u0275controlCreate();
    \u0275\u0275element(37, "settings-toggle", 191);
    \u0275\u0275controlCreate();
    \u0275\u0275element(38, "settings-toggle", 192);
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
    this.initial_settings = {};
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
        colleagues_require_auth: true,
        hide_landing_spaces: false,
        hide_landing_rooms: false,
        hide_colleagues: false,
        hide_landing_customise: false,
        hide_landing_widgets: [],
        show_quick_links: true,
        show_quick_book: true,
        allow_dark_mode: false,
        show_changelog: true,
        global_search: true,
        use_imperial_units: false,
        external_support_url: "",
        support_email: "support@place.tech",
        catering_provider: "",
        currency: "USD",
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
          multiple_spaces: false,
          room_as_host: false,
          allow_externals: false,
          allow_international: false,
          allow_attendee_internal_or_external: false,
          strict_capacity_check: false,
          hide_notes: false,
          hide_attendees: false,
          hide_nearby_desks: false,
          allow_recurrence: false,
          allow_multiday: false,
          use_bookings: false,
          use_building_timezone: false,
          force_host: "",
          allow_daily_allday_recurrence: false,
          no_standalone: false,
          allowed_future_days: 180,
          setup: 0,
          breakdown: 0,
          max_duration: 480
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
          has_assets: false,
          no_approval: false,
          can_book_for_others: false,
          multiple_visitors: false
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
          allow_recurrence: false,
          default_select_as_map: false,
          show_calendar_links: false,
          auto_checkin: false,
          available_period: 90,
          max_duration: 480,
          use_building_timezone: false,
          height_enabled: false,
          hide_checkin: false
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
          show_calendar_links: false,
          auto_checkin: false,
          available_period: 7,
          max_duration: 480,
          use_building_timezone: false
        },
        lockers: {
          allow_all_day: true,
          bookable_hours: {
            start: null,
            end: null
          },
          all_day_default: false,
          show_calendar_links: false,
          allow_time_changes: true,
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
          allow_international: false,
          allow_visitor_internal_or_external: false
        },
        explore: {
          hide_device_fields: [],
          show_legend: false,
          hide_zones: false,
          hide_devices: true,
          hide_sensors: true,
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
    this.heading.set(`Workplace Settings <div class="font-mono text-xs px-2 py-1 rounded bg-base-300 ml-2">${this.zone.display_name || this.zone.name || "Organisation"}</div>`);
    try {
      const org_id = this._org.organisation.id;
      const org_metadata = zone.id !== org_id ? await this._getMetadata(org_id) : {};
      const parent_metadata = zone.id !== org_id && !!zone.parent_id && org_id !== zone.parent_id ? await this._getMetadata(zone.parent_id) : {};
      const metadata = await this._getMetadata(zone.id);
      this.existing_settings = mergeAppSettings(DEFAULT_SETTINGS.app, org_metadata, parent_metadata);
      this._patchModel(this.existing_settings);
      this._patchModel(metadata || {});
      this.model.update((model) => applyBookingFallbacks(model, mergeAppSettings(this.existing_settings, metadata), "lockers", LOCKER_BOOKING_FALLBACKS));
      this.old_settings = metadata;
      this.initial_settings = this.model();
    } catch (e) {
      notifyError(`Failed to load existing settings. ${errorText(e)}`);
      this._dialog_ref.close();
    } finally {
      this.loading.set("");
    }
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
    const working_settings = mergeAppSettings(this.old_settings, this.model());
    const new_settings = appSettingOverrides(working_settings, this.existing_settings, this.initial_settings, this.old_settings);
    const user = currentUser();
    new_settings.edited_by = {
      id: user.id,
      name: user.name,
      email: user.email,
      domain: location.hostname,
      role: user.groups.includes("placeos_admin") ? "Admin" : user.groups.includes("placeos_support") ? "Support" : "User"
    };
    try {
      await hc(zone.id, {
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
  _patchModel(patch) {
    this.model.update((model) => applyAppSettings(model, patch));
  }
  async _getMetadata(id) {
    const metadata = await ac(id, this.settings_key);
    return metadata.details || {};
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkplaceSettingsFormModalComponent, selectors: [["workplace-settings-form-modal"]], decls: 192, vars: 61, consts: [[3, "confirm", "heading", "loading"], [1, "flex", "flex-col", "space-y-8", "pb-4"], ["general", "", 1, "bg-base-100", "space-y-2", "rounded-sm"], ["for", "logo_light"], [1, "mb-4", "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", 3, "formField"], ["ngModel", "", 3, "ngModelChange", "ngModelOptions"], ["for", "logo_dark"], ["for", "features"], ["appearance", "outline", 1, "w-full"], ["multiple", "", 3, "formField"], ["value", "spaces"], ["value", "desks"], ["value", "explore"], ["value", "parking"], ["value", "visitor-invite"], ["value", "lockers"], ["value", "help"], ["value", "schedule"], ["value", "wfh"], ["value", "support-ticket"], ["value", "group-events"], ["value", "deals-n-offers"], ["for", "hide-landing-widgets"], ["placeholder", "None", "multiple", "", 3, "formField"], ["value", "available_now"], ["value", "quick_actions"], ["value", "desk_week"], ["value", "favourites"], ["value", "colleagues"], ["value", "focus_timer"], ["value", "world_clock"], ["value", "mapspeople"], ["value", "emergency_contacts"], ["value", "features"], ["value", "points_of_interest"], ["value", "contacts"], ["value", "users"], [1, "border-base-300", "relative", "rounded-sm", "border", "px-4", "pt-4", "pb-2"], [1, "bg-base-100", "absolute", "top-0", "left-4", "-translate-y-1/2", "rounded-sm", "px-2", "py-1", "font-medium"], [1, "flex", "items-center", "space-x-4"], [1, "flex-1"], ["for", "banner-type"], ["name", "banner-type", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], ["matInput", "", "name", "banner-message", "placeholder", "Banner Message", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["for", "external-support-url"], ["matInput", "", "placeholder", "https://support.com/ticket", 3, "formField"], ["for", "support-email"], ["matInput", "", "placeholder", "support@acme.tech", 3, "formField"], ["for", "default-route"], ["matInput", "", "placeholder", "/landing", 3, "formField"], ["for", "catering-provider"], ["matInput", "", "placeholder", "Catering Provider", 3, "formField"], ["for", "week-start"], ["placeholder", "Sunday", 3, "formField"], ["for", "currency"], ["placeholder", "Select currency code", 3, "openedChange", "formField"], ["disabled", "", 1, "!h-auto", "!py-2"], ["matInput", "", "placeholder", "Search currency code or name", 3, "ngModelChange", "click", "keydown", "ngModel", "ngModelOptions"], ["disabled", ""], ["for", "locales"], ["multiple", "", "placeholder", "Select locales", 3, "formField"], [1, "-mx-2", "flex", "flex-wrap", "items-center"], ["label", "Use 24 hour time", 3, "formField"], ["label", "Use region over building", 3, "formField"], ["label", "Use imperial units for measurements", 3, "formField"], ["label", "Allow images in support tickets", 3, "formField"], ["label", "Search only authenticated users", 3, "formField"], ["label", "Only authenticated colleagues", "info", "Will limit the available users to add as colleagues to only\n those who have authenticated with the application", 3, "formField"], ["label", "Hide landing spaces", 3, "formField"], ["label", "Hide landing rooms", 3, "formField"], ["label", "Hide colleagues", 3, "formField"], ["label", "Hide landing customise", "info", "Will stop users from changing the layout of the landing page", 3, "formField"], ["label", "Show landing quick links", 3, "formField"], ["label", "Show landing quick book", 3, "formField"], ["label", "Allow dark mode", 3, "formField"], ["label", "Show changelog link", 3, "formField"], ["label", "Show global search", 3, "formField"], ["events", "", "id", "feature-spaces", 1, "border-base-300", "relative", "rounded-sm", "border"], ["desks", "", "id", "feature-desks", 1, "border-base-300", "relative", "rounded-sm", "border"], ["bookings", "", "id", "feature-bookings", 1, "border-base-300", "relative", "rounded-sm", "border"], ["explore", "", "id", "feature-explore", 1, "border-base-300", "relative", "rounded-sm", "border"], ["parking", "", "id", "feature-parking", 1, "border-base-300", "relative", "rounded-sm", "border"], ["lockers", "", "id", "feature-lockers", 1, "border-base-300", "relative", "rounded-sm", "border"], ["icon", "", "matRipple", "", 1, "bg-base-100", "absolute", "top-0", "right-4", "-translate-y-1/2", 3, "click"], ["collapsible", ""], [1, "content", "px-4", "pt-4", "pb-2"], ["for", "available-period"], [3, "formField"], ["for", "force-host"], ["matInput", "", "placeholder", "global.host@acme.tech", 3, "formField"], ["for", "max-duration"], ["for", "setup"], ["placeholder", "No default setup", 3, "formField"], ["for", "breakdown"], ["placeholder", "No default breakdown", 3, "formField"], [1, "grid", "grid-cols-1", "gap-4", "md:grid-cols-2"], ["for", "events-bookable-start"], ["placeholder", "None", 3, "formField"], ["for", "events-bookable-end"], ["label", "Allow all day bookings", 3, "formField"], ["label", "Disable booking requests", "info", "Prevent making backend requests for bookings and give users links to create the booking in their own calendars", 3, "formField"], ["label", "Allow booking for other users", 3, "formField"], ["label", "Allow booking for any users", 3, "formField"], ["label", "Allow booking with assets", 3, "formField"], ["label", "Allow booking multiple spaces", 3, "formField"], ["label", "Force room as host", 3, "formField"], ["label", "Allow external attendees", 3, "formField"], ["label", "Allow international attendees", "info", "Show a checkbox on the meeting form that flags each attendee as international", 3, "formField"], ["label", "Allow attendees to be marked internal or external", "info", "Show a control on the meeting form that marks each attendee as internal (default) or external", 3, "formField"], ["label", "Enforce room capacity limits", 3, "formField"], ["label", "Disable notes field", 3, "formField"], ["label", "Hide attendees field", 3, "formField"], ["label", "Hide nearby desk action", "info", "Hide the book nearby desks button on the meeting success view", 3, "formField"], ["label", "Allow recurring meetings", 3, "formField"], ["label", "Allow multi-day bookings", 3, "formField"], ["label", "Use PlaceOS bookings", 3, "formField"], ["label", "Display times with building timezone", 3, "formField"], ["label", "Allow daily all-day recurrence", 3, "formField"], ["label", "Disable standalone bookings", 3, "formField"], ["for", "events-all-day-start"], ["for", "events-all-day-end"], ["for", "desks-bookable-start"], ["for", "desks-bookable-end"], ["label", "Default bookings to all day", 3, "formField"], ["label", "Allow group bookings", 3, "formField"], ["label", "Allow time changes", 3, "formField"], ["label", "Auto-allocation", 3, "formField"], ["label", "Allow booking for others", 3, "formField"], ["label", "Allow also booking a locker", 3, "formField"], ["label", "Allow requesting assets with booking", 3, "formField"], ["label", "Allow Recurring Desk bookings", 3, "formField"], ["label", "Auto-checkin map bookingss", 3, "formField"], ["label", "Default to desk select modal to map view", 3, "formField"], ["label", "Show calendar links after booking", 3, "formField"], ["label", "Enabled desk height", 3, "formField"], ["label", "Hide Checkin Options", 3, "formField"], ["for", "bookings-bookable-start"], ["for", "bookings-bookable-end"], ["label", "Allow booking multiple visitors", 3, "formField"], ["label", "Auto-approve bookings", 3, "formField"], ["label", "Show calendar links after visitor invite", 3, "formField"], ["label", "Allow international flag for visitors", 3, "formField"], ["label", "Allow visitors to be marked internal or external", 3, "formField"], ["for", "bookings-all-day-start"], ["for", "bookings-all-day-end"], ["for", "disable"], ["placeholder", "No disabled features", "multiple", "", 3, "formField"], ["for", "disable-actions"], ["placeholder", "No disabled actions", "multiple", "", 3, "formField"], ["placeholder", "No disabled labels", "multiple", "", 3, "formField"], ["for", "disable-features"], ["placeholder", "No disabled displays", "multiple", "", 3, "formField"], ["for", "disable-styles"], ["placeholder", "No disabled styles", "multiple", "", 3, "formField"], [1, "border-base-300", "relative", "rounded-sm", "border", "p-4"], ["for", "hide-device-fields"], ["value", "mac"], ["value", "manufacturer"], ["value", "os"], ["value", "ssid"], ["value", "username"], ["value", "user"], ["label", "Show Legend", 3, "formField"], ["label", "Hide Areas Toggle", 3, "formField"], ["label", "Hide Devices Toggle", 3, "formField"], ["label", "Hide Sensors Toggle", 3, "formField"], ["label", "Show Booking QR Code", 3, "formField"], ["label", "Use defined polygons for zones", 3, "formField"], ["label", "Show labels for zones", 3, "formField"], ["label", "Show zone sensor info", 3, "formField"], [1, "mb-4", "flex", "items-center", "space-x-4"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], [1, "w-3/4", "flex-1"], ["matInput", "", "placeholder", "Legend Key", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["matTooltip", "Legend Color", 1, "flex", "w-12", "items-center", "justify-center"], ["type", "color", 1, "border-base-content", "h-11", "rounded-lg", "border", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["icon", "", "matRipple", "", 1, "border-error", "text-error", "h-12", "w-12", "rounded-sm", "border", 3, "click"], ["for", "parking-bookable-start"], ["for", "parking-bookable-end"], ["label", "Show assigned users on parking map", 3, "formField"], ["label", "Show parking status details on map", 3, "formField"], ["label", "Allow user selecting booking time", 3, "formField"], ["label", "Auto-allocate parking spaces", 3, "formField"], ["label", "Allow recurring parking bookings", 3, "formField"], ["for", "lockers-bookable-start"], ["for", "lockers-bookable-end"], ["label", "Show Calendar Links after booking", 3, "formField"], ["label", "Hide End time option", 3, "formField"], ["label", "Disable Date selection", 3, "formField"], ["label", "Disable start time option", 3, "formField"]], template: function WorkplaceSettingsFormModalComponent_Template(rf, ctx) {
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
        \u0275\u0275elementStart(46, "div")(47, "label", 24);
        \u0275\u0275text(48, "Hidden Landing Widgets");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "mat-form-field", 10)(50, "mat-select", 25)(51, "mat-option", 26);
        \u0275\u0275text(52, " Available Now ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "mat-option", 27);
        \u0275\u0275text(54, " Quick Actions ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "mat-option", 28);
        \u0275\u0275text(56, " My Desk Bookings ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "mat-option", 29);
        \u0275\u0275text(58, " Favourites ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "mat-option", 30);
        \u0275\u0275text(60, " Colleagues ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "mat-option", 31);
        \u0275\u0275text(62, " Focus Timer ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "mat-option", 32);
        \u0275\u0275text(64, " World Clock ");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(65, "mat-hint");
        \u0275\u0275text(66, " Widgets that users cannot have on the landing page ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(67, "div")(68, "label", 9);
        \u0275\u0275text(69, "Hide Global Search Item Types");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "mat-form-field", 10)(71, "mat-select", 11)(72, "mat-option", 33);
        \u0275\u0275text(73, " MapsPeople ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "mat-option", 12);
        \u0275\u0275text(75, " Rooms ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "mat-option", 34);
        \u0275\u0275text(77, " Emergency Contacts ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "mat-option", 35);
        \u0275\u0275text(79, " Map Features ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "mat-option", 36);
        \u0275\u0275text(81, " Points of Interest ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "mat-option", 37);
        \u0275\u0275text(83, " Contacts ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "mat-option", 38);
        \u0275\u0275text(85, " Users ");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(86, "div", 39)(87, "h3", 40);
        \u0275\u0275text(88, " Banner ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "div", 41)(90, "div", 42)(91, "label", 43);
        \u0275\u0275text(92, "Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "mat-form-field", 10)(94, "mat-select", 44);
        \u0275\u0275listener("ngModelChange", function WorkplaceSettingsFormModalComponent_Template_mat_select_ngModelChange_94_listener($event) {
          return ctx.model.update((m) => __spreadProps(__spreadValues({}, m), { banner: { id: ctx.date_string, content: m.banner?.content || "", type: $event } }));
        });
        \u0275\u0275repeaterCreate(95, WorkplaceSettingsFormModalComponent_For_96_Template, 2, 2, "mat-option", 45, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(97, "div", 42)(98, "label", 43);
        \u0275\u0275text(99, "Message");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "mat-form-field", 10)(101, "input", 46);
        \u0275\u0275listener("ngModelChange", function WorkplaceSettingsFormModalComponent_Template_input_ngModelChange_101_listener($event) {
          return ctx.model.update((m) => __spreadProps(__spreadValues({}, m), { banner: { id: ctx.date_string, type: m.banner?.type || "", content: $event } }));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(102, "div")(103, "label", 47);
        \u0275\u0275text(104, " External Support URL ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "mat-form-field", 10);
        \u0275\u0275element(106, "input", 48);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(107, "mat-hint");
        \u0275\u0275text(108, " External URL to link users to for support tickets ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "mat-error");
        \u0275\u0275text(110, "Invalid URL");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(111, "div")(112, "label", 49);
        \u0275\u0275text(113, "Support Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "mat-form-field", 10);
        \u0275\u0275element(115, "input", 50);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(116, "mat-hint");
        \u0275\u0275text(117, " Email to send tickets when created in the app ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(118, "div")(119, "label", 51);
        \u0275\u0275text(120, "Default Route");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "mat-form-field", 10);
        \u0275\u0275element(122, "input", 52);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(123, "mat-hint");
        \u0275\u0275text(124, " Main page of the application ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(125, "div")(126, "label", 53);
        \u0275\u0275text(127, "Catering Provider");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(128, "mat-form-field", 10);
        \u0275\u0275element(129, "input", 54);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(130, "mat-hint");
        \u0275\u0275text(131, " Name of the catering provider to force orders to use ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(132, "div")(133, "label", 55);
        \u0275\u0275text(134, "Week Start");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "mat-form-field", 10)(136, "mat-select", 56);
        \u0275\u0275repeaterCreate(137, WorkplaceSettingsFormModalComponent_For_138_Template, 2, 2, "mat-option", 45, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(139, "mat-hint");
        \u0275\u0275text(140, " Day of the week to show initially on various calendars ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(141, "div")(142, "label", 57);
        \u0275\u0275text(143, "Currency");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(144, "mat-form-field", 10)(145, "mat-select", 58);
        \u0275\u0275listener("openedChange", function WorkplaceSettingsFormModalComponent_Template_mat_select_openedChange_145_listener($event) {
          return ctx.onCurrencySelectStateChange($event);
        });
        \u0275\u0275elementStart(146, "mat-option", 59)(147, "input", 60);
        \u0275\u0275listener("ngModelChange", function WorkplaceSettingsFormModalComponent_Template_input_ngModelChange_147_listener($event) {
          return ctx.updateCurrencyFilter($event);
        })("click", function WorkplaceSettingsFormModalComponent_Template_input_click_147_listener($event) {
          return $event.stopPropagation();
        })("keydown", function WorkplaceSettingsFormModalComponent_Template_input_keydown_147_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(148, WorkplaceSettingsFormModalComponent_For_149_Template, 2, 2, "mat-option", 45, _forTrack1);
        \u0275\u0275conditionalCreate(150, WorkplaceSettingsFormModalComponent_Conditional_150_Template, 2, 0, "mat-option", 61);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(151, "mat-hint");
        \u0275\u0275text(152, " ISO 4217 currency code for pricing ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(153, "div")(154, "label", 62);
        \u0275\u0275text(155, "Locales");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "mat-form-field", 10)(157, "mat-select", 63)(158, "mat-option", 45);
        \u0275\u0275text(159, " English (British) ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "mat-option", 45);
        \u0275\u0275text(161, " English (US) ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "mat-option", 45);
        \u0275\u0275text(163, " French ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "mat-option", 45);
        \u0275\u0275text(165, " Spanish ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(166, "mat-option", 45);
        \u0275\u0275text(167, " Portuguese ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(168, "mat-option", 45);
        \u0275\u0275text(169, " Arabic ");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(170, "div", 64);
        \u0275\u0275element(171, "settings-toggle", 65);
        \u0275\u0275controlCreate();
        \u0275\u0275element(172, "settings-toggle", 66);
        \u0275\u0275controlCreate();
        \u0275\u0275element(173, "settings-toggle", 67);
        \u0275\u0275controlCreate();
        \u0275\u0275conditionalCreate(174, WorkplaceSettingsFormModalComponent_Conditional_174_Template, 1, 1, "settings-toggle", 68);
        \u0275\u0275element(175, "settings-toggle", 69);
        \u0275\u0275controlCreate();
        \u0275\u0275element(176, "settings-toggle", 70);
        \u0275\u0275controlCreate();
        \u0275\u0275element(177, "settings-toggle", 71);
        \u0275\u0275controlCreate();
        \u0275\u0275element(178, "settings-toggle", 72);
        \u0275\u0275controlCreate();
        \u0275\u0275element(179, "settings-toggle", 73);
        \u0275\u0275controlCreate();
        \u0275\u0275element(180, "settings-toggle", 74);
        \u0275\u0275controlCreate();
        \u0275\u0275element(181, "settings-toggle", 75);
        \u0275\u0275controlCreate();
        \u0275\u0275element(182, "settings-toggle", 76);
        \u0275\u0275controlCreate();
        \u0275\u0275element(183, "settings-toggle", 77);
        \u0275\u0275controlCreate();
        \u0275\u0275element(184, "settings-toggle", 78);
        \u0275\u0275controlCreate();
        \u0275\u0275element(185, "settings-toggle", 79);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(186, WorkplaceSettingsFormModalComponent_Conditional_186_Template, 101, 32, "section", 80);
        \u0275\u0275conditionalCreate(187, WorkplaceSettingsFormModalComponent_Conditional_187_Template, 55, 22, "section", 81);
        \u0275\u0275conditionalCreate(188, WorkplaceSettingsFormModalComponent_Conditional_188_Template, 52, 17, "section", 82);
        \u0275\u0275conditionalCreate(189, WorkplaceSettingsFormModalComponent_Conditional_189_Template, 74, 18, "section", 83);
        \u0275\u0275conditionalCreate(190, WorkplaceSettingsFormModalComponent_Conditional_190_Template, 49, 16, "section", 84);
        \u0275\u0275conditionalCreate(191, WorkplaceSettingsFormModalComponent_Conditional_191_Template, 39, 14, "section", 85);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", ctx.heading())("loading", ctx.loading());
        \u0275\u0275advance(8);
        \u0275\u0275property("formField", ctx.form.logo_light);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(50, _c0));
        \u0275\u0275control();
        \u0275\u0275advance(6);
        \u0275\u0275property("formField", ctx.form.logo_dark);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(51, _c0));
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.features);
        \u0275\u0275control();
        \u0275\u0275advance(29);
        \u0275\u0275property("formField", ctx.form.hide_landing_widgets);
        \u0275\u0275control();
        \u0275\u0275advance(21);
        \u0275\u0275property("formField", ctx.form.hide_global_search_items);
        \u0275\u0275control();
        \u0275\u0275advance(23);
        \u0275\u0275property("ngModel", ctx.model().banner?.type || "")("ngModelOptions", \u0275\u0275pureFunction0(52, _c0));
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.BANNER_TYPE);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngModel", ctx.model().banner?.content || "")("ngModelOptions", \u0275\u0275pureFunction0(53, _c0));
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
        \u0275\u0275property("ngModel", ctx.currency_filter())("ngModelOptions", \u0275\u0275pureFunction0(54, _c0));
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.filtered_currency_options());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.filtered_currency_options().length ? 150 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275property("formField", ctx.form.locales);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("value", \u0275\u0275pureFunction0(55, _c1));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", \u0275\u0275pureFunction0(56, _c2));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", \u0275\u0275pureFunction0(57, _c3));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", \u0275\u0275pureFunction0(58, _c4));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", \u0275\u0275pureFunction0(59, _c5));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", \u0275\u0275pureFunction0(60, _c6));
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
        \u0275\u0275conditional(ctx.model().features.includes("support-ticket") ? 174 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.basic_user_search);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.colleagues_require_auth);
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
        \u0275\u0275property("formField", ctx.form.hide_landing_customise);
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
        \u0275\u0275conditional(ctx.model().features?.includes("spaces") ? 186 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().features.includes("desks") ? 187 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().features.includes("desks") || ctx.model().features.includes("parking") || ctx.model().features.includes("lockers") || ctx.model().features.includes("visitor-invite") ? 188 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().features.includes("explore") ? 189 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().features.includes("parking") ? 190 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().features.includes("lockers") ? 191 : -1);
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
                        <label for="hide-landing-widgets"
                            >Hidden Landing Widgets</label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                [formField]="form.hide_landing_widgets"
                                placeholder="None"
                                multiple
                            >
                                <mat-option value="available_now">
                                    Available Now
                                </mat-option>
                                <mat-option value="quick_actions">
                                    Quick Actions
                                </mat-option>
                                <mat-option value="desk_week">
                                    My Desk Bookings
                                </mat-option>
                                <mat-option value="favourites">
                                    Favourites
                                </mat-option>
                                <mat-option value="colleagues">
                                    Colleagues
                                </mat-option>
                                <mat-option value="focus_timer">
                                    Focus Timer
                                </mat-option>
                                <mat-option value="world_clock">
                                    World Clock
                                </mat-option>
                            </mat-select>
                            <mat-hint>
                                Widgets that users cannot have on the landing
                                page
                            </mat-hint>
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
                            label="Hide landing customise"
                            info="Will stop users from changing the layout of the landing page"
                            [formField]="form.hide_landing_customise"
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
                                        label="Allow international attendees"
                                        info="Show a checkbox on the meeting form that flags each attendee as international"
                                        [formField]="form.events.allow_international"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow attendees to be marked internal or external"
                                        info="Show a control on the meeting form that marks each attendee as internal (default) or external"
                                        [formField]="form.events.allow_attendee_internal_or_external"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Enforce room capacity limits"
                                        [formField]="form.events.strict_capacity_check"
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
                                        [formField]="form.bookings.has_assets"
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
                                    <ng-container>
                                        <settings-toggle
                                            label="Allow visitors to be marked internal or external"
                                            [formField]="
                                                form.visitors
                                                    .allow_visitor_internal_or_external
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
                                <div>
                                    <label for="hide-device-fields">
                                        Hidden Device Fields
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            [formField]="form.explore.hide_device_fields"
                                            placeholder="None"
                                            multiple
                                        >
                                            <mat-option value="mac">
                                                MAC Address
                                            </mat-option>
                                            <mat-option value="manufacturer">
                                                Manufacturer
                                            </mat-option>
                                            <mat-option value="os">OS</mat-option>
                                            <mat-option value="ssid">SSID</mat-option>
                                            <mat-option value="username">
                                                Username
                                            </mat-option>
                                            <mat-option value="user">User</mat-option>
                                        </mat-select>
                                        <mat-hint>
                                            Fields hidden from device info
                                            tooltips
                                        </mat-hint>
                                    </mat-form-field>
                                </div>
                                <div class="-mx-2 flex flex-wrap items-center">
                                    <settings-toggle
                                        label="Show Legend"
                                        [formField]="form.explore.show_legend"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Hide Areas Toggle"
                                        [formField]="form.explore.hide_zones"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Hide Devices Toggle"
                                        [formField]="form.explore.hide_devices"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Hide Sensors Toggle"
                                        [formField]="form.explore.hide_sensors"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkplaceSettingsFormModalComponent, { className: "WorkplaceSettingsFormModalComponent", filePath: "apps/concierge/src/app/ui/app-settings/workplace-settings-form-modal.component.ts", lineNumber: 1930 });
})();
export {
  WorkplaceSettingsFormModalComponent
};
//# debugId=232cece7-a686-5f1e-a790-305c44d1c6ad
//# sourceMappingURL=workplace-settings-form-modal.component-DI7OL7LG.js.map
