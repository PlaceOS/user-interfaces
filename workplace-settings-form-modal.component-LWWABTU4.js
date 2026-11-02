import {
  SettingsCurrencySelectComponent
} from "./chunk-W7XCYC53.js";
import {
  AVAILABLE_PERIOD_EXTENDED_OPTIONS,
  BANNER_TYPE_OPTIONS,
  BLOCK_END_OPTIONS,
  BLOCK_START_OPTIONS,
  BOOKABLE_HOUR_END_OPTIONS,
  BOOKABLE_HOUR_START_OPTIONS,
  EXPLORE_FEATURE_OPTIONS,
  MAX_DURATION_FULL_OPTIONS,
  MAX_DURATION_SHORT_OPTIONS,
  SETUP_BREAKDOWN_OPTIONS,
  SettingsSelectComponent,
  WEEK_START_OPTIONS
} from "./chunk-DFMS6OXJ.js";
import {
  UploadButtonComponent
} from "./chunk-27HLXWDO.js";
import {
  LOCKER_BOOKING_FALLBACKS,
  appMetadataKey,
  appSettingsHeading,
  applyAppSettings,
  applyBookingFallbacks,
  loadLayeredAppSettings,
  mergeAppSettings,
  saveAppSettings
} from "./chunk-HJTSFMCY.js";
import {
  errorText
} from "./chunk-MXRCFL5P.js";
import "./chunk-USEVMWEI.js";
import {
  FullscreenModalShellComponent
} from "./chunk-MBTT2I5V.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-SBGPLKMV.js";
import "./chunk-I52JNSOJ.js";
import {
  SettingsToggleComponent
} from "./chunk-SR3DWN5U.js";
import "./chunk-UALXRIP7.js";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from "./chunk-2K5G7CFD.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-JKVESZ3F.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatHint
} from "./chunk-54KE5JKV.js";
import "./chunk-OX3RHFRB.js";
import "./chunk-QWYXFXJS.js";
import {
  MatOption
} from "./chunk-G7ZLBZI3.js";
import "./chunk-RIENTTXY.js";
import {
  isValidUrl
} from "./chunk-NRIUKP6T.js";
import "./chunk-MC2JPMPX.js";
import "./chunk-QG4JAQFD.js";
import {
  TranslatePipe
} from "./chunk-SWZTUYHJ.js";
import {
  FormField,
  form,
  validate
} from "./chunk-GQCWKAWZ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  OrganisationService,
  SettingsService,
  ɵNgNoValidate
} from "./chunk-6ETA7VOK.js";
import {
  IconComponent
} from "./chunk-NE545G3N.js";
import {
  format,
  notifyError,
  notifySuccess
} from "./chunk-XMOMB3G6.js";
import "./chunk-OWTWWOGC.js";
import "./chunk-ZEZKWG7M.js";
import {
  MatRippleModule
} from "./chunk-3WBJTYSG.js";
import {
  MatRipple
} from "./chunk-QSD4JXRO.js";
import "./chunk-GTXMU3AV.js";
import "./chunk-DK3CVVJN.js";
import "./chunk-N4RTV55R.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QAVCSYNX.js";
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
    side: "left"
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
function WorkplaceSettingsFormModalComponent_For_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 48);
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
function WorkplaceSettingsFormModalComponent_Conditional_155_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "settings-toggle", 67);
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formField", ctx_r1.form.allow_support_ticket_images);
    \u0275\u0275control();
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_167_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 79)(1, "h3", 43);
    \u0275\u0275text(2, " Room Bookings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 85);
    \u0275\u0275listener("click", function WorkplaceSettingsFormModalComponent_Conditional_167_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleGroup("spaces"));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 86)(7, "div", 87);
    \u0275\u0275element(8, "settings-select", 88);
    \u0275\u0275elementStart(9, "div")(10, "label", 89);
    \u0275\u0275text(11, "Force Host");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-form-field", 11);
    \u0275\u0275element(13, "input", 90);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(14, "mat-hint");
    \u0275\u0275text(15, " Force host of room bookings to be this user ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "mat-error");
    \u0275\u0275text(17, "Invalid email address");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(18, "settings-select", 91);
    \u0275\u0275elementStart(19, "div", 44);
    \u0275\u0275element(20, "settings-select", 92)(21, "settings-select", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 94);
    \u0275\u0275element(23, "settings-select", 95)(24, "settings-select", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 63);
    \u0275\u0275element(26, "settings-toggle", 97);
    \u0275\u0275controlCreate();
    \u0275\u0275element(27, "settings-toggle", 98);
    \u0275\u0275controlCreate();
    \u0275\u0275element(28, "settings-toggle", 99);
    \u0275\u0275controlCreate();
    \u0275\u0275element(29, "settings-toggle", 100);
    \u0275\u0275controlCreate();
    \u0275\u0275element(30, "settings-toggle", 101);
    \u0275\u0275controlCreate();
    \u0275\u0275element(31, "settings-toggle", 102);
    \u0275\u0275controlCreate();
    \u0275\u0275element(32, "settings-toggle", 103);
    \u0275\u0275controlCreate();
    \u0275\u0275element(33, "settings-toggle", 104);
    \u0275\u0275controlCreate();
    \u0275\u0275element(34, "settings-toggle", 105);
    \u0275\u0275controlCreate();
    \u0275\u0275element(35, "settings-toggle", 106);
    \u0275\u0275controlCreate();
    \u0275\u0275element(36, "settings-toggle", 107);
    \u0275\u0275controlCreate();
    \u0275\u0275element(37, "settings-toggle", 108);
    \u0275\u0275controlCreate();
    \u0275\u0275element(38, "settings-toggle", 109);
    \u0275\u0275controlCreate();
    \u0275\u0275element(39, "settings-toggle", 110);
    \u0275\u0275controlCreate();
    \u0275\u0275element(40, "settings-toggle", 111);
    \u0275\u0275controlCreate();
    \u0275\u0275element(41, "settings-toggle", 112);
    \u0275\u0275controlCreate();
    \u0275\u0275element(42, "settings-toggle", 113);
    \u0275\u0275controlCreate();
    \u0275\u0275element(43, "settings-toggle", 114);
    \u0275\u0275controlCreate();
    \u0275\u0275element(44, "settings-toggle", 115);
    \u0275\u0275controlCreate();
    \u0275\u0275element(45, "settings-toggle", 116);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 94);
    \u0275\u0275element(47, "settings-select", 117)(48, "settings-select", 118);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-expanded", ctx_r1.shown_group() === "spaces");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.shown_group() === "spaces" ? "chevron_left" : "keyboard_arrow_down");
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx_r1.shown_group() === "spaces");
    \u0275\u0275advance(2);
    \u0275\u0275property("field", ctx_r1.form.events.allowed_future_days)("options", ctx_r1.AVAILABLE_PERIOD_EXTENDED);
    \u0275\u0275advance(5);
    \u0275\u0275property("formField", ctx_r1.form.events.force_host);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275property("field", ctx_r1.form.events.max_duration)("options", ctx_r1.MAX_DURATION_FULL);
    \u0275\u0275advance(2);
    \u0275\u0275property("field", ctx_r1.form.events.setup)("options", ctx_r1.SETUP_BREAKDOWN);
    \u0275\u0275advance();
    \u0275\u0275property("field", ctx_r1.form.events.breakdown)("options", ctx_r1.SETUP_BREAKDOWN);
    \u0275\u0275advance(2);
    \u0275\u0275property("field", ctx_r1.form.events.bookable_hours.start)("options", ctx_r1.BOOKABLE_HOUR_START);
    \u0275\u0275advance();
    \u0275\u0275property("field", ctx_r1.form.events.bookable_hours.end)("options", ctx_r1.BOOKABLE_HOUR_END);
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r1.form.events.allow_all_day);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.events.booking_unavailable);
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
    \u0275\u0275property("formField", ctx_r1.form.events.multiple_spaces);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.events.room_as_host);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.events.allow_externals);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.events.allow_international);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.events.allow_attendee_internal_or_external);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.events.strict_capacity_check);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.events.hide_notes);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.events.hide_attendees);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.events.hide_nearby_desks);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.events.allow_recurrence);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.events.allow_multiday);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.events.use_bookings);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.events.use_building_timezone);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.events.allow_daily_allday_recurrence);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.events.no_standalone);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("field", ctx_r1.form.events.all_day_period.start)("options", ctx_r1.BLOCK_START);
    \u0275\u0275advance();
    \u0275\u0275property("field", ctx_r1.form.events.all_day_period.end)("options", ctx_r1.BLOCK_END);
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_168_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 80)(1, "h3", 43);
    \u0275\u0275text(2, " Desk Bookings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 119);
    \u0275\u0275listener("click", function WorkplaceSettingsFormModalComponent_Conditional_168_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleGroup("desks"));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 86)(7, "div", 87);
    \u0275\u0275element(8, "settings-select", 120)(9, "settings-select", 121);
    \u0275\u0275elementStart(10, "div", 94);
    \u0275\u0275element(11, "settings-select", 122)(12, "settings-select", 123);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 63);
    \u0275\u0275element(14, "settings-toggle", 97);
    \u0275\u0275controlCreate();
    \u0275\u0275element(15, "settings-toggle", 124);
    \u0275\u0275controlCreate();
    \u0275\u0275element(16, "settings-toggle", 125);
    \u0275\u0275controlCreate();
    \u0275\u0275element(17, "settings-toggle", 126);
    \u0275\u0275controlCreate();
    \u0275\u0275element(18, "settings-toggle", 127);
    \u0275\u0275controlCreate();
    \u0275\u0275element(19, "settings-toggle", 128);
    \u0275\u0275controlCreate();
    \u0275\u0275element(20, "settings-toggle", 129);
    \u0275\u0275controlCreate();
    \u0275\u0275element(21, "settings-toggle", 130);
    \u0275\u0275controlCreate();
    \u0275\u0275element(22, "settings-toggle", 131);
    \u0275\u0275controlCreate();
    \u0275\u0275element(23, "settings-toggle", 132);
    \u0275\u0275controlCreate();
    \u0275\u0275element(24, "settings-toggle", 133);
    \u0275\u0275controlCreate();
    \u0275\u0275element(25, "settings-toggle", 134);
    \u0275\u0275controlCreate();
    \u0275\u0275element(26, "settings-toggle", 135);
    \u0275\u0275controlCreate();
    \u0275\u0275element(27, "settings-toggle", 136);
    \u0275\u0275controlCreate();
    \u0275\u0275element(28, "settings-toggle", 114);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-expanded", ctx_r1.shown_group() === "desks");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.shown_group() === "desks" ? "chevron_left" : "keyboard_arrow_down");
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx_r1.shown_group() === "desks");
    \u0275\u0275advance(2);
    \u0275\u0275property("field", ctx_r1.form.desks.max_duration)("options", ctx_r1.MAX_DURATION_SHORT);
    \u0275\u0275advance();
    \u0275\u0275property("field", ctx_r1.form.desks.available_period)("options", ctx_r1.AVAILABLE_PERIOD_EXTENDED);
    \u0275\u0275advance(2);
    \u0275\u0275property("field", ctx_r1.form.desks.bookable_hours.start)("options", ctx_r1.BOOKABLE_HOUR_START);
    \u0275\u0275advance();
    \u0275\u0275property("field", ctx_r1.form.desks.bookable_hours.end)("options", ctx_r1.BOOKABLE_HOUR_END);
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r1.form.desks.allow_all_day);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.desks.all_day_default);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.desks.allow_groups);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.desks.allow_time_changes);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.desks.auto_allocation);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.desks.can_book_for_others);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.desks.can_book_lockers);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.desks.has_assets);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.desks.allow_recurrence);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.desks.auto_checkin);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.desks.default_select_as_map);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.desks.show_calendar_links);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.desks.height_enabled);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.desks.hide_checkin);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.desks.use_building_timezone);
    \u0275\u0275control();
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_169_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 81)(1, "h3", 43);
    \u0275\u0275text(2, " PlaceOS Bookings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 137);
    \u0275\u0275listener("click", function WorkplaceSettingsFormModalComponent_Conditional_169_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleGroup("bookings"));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 86)(7, "div", 87)(8, "div", 94);
    \u0275\u0275element(9, "settings-select", 138)(10, "settings-select", 139);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 63);
    \u0275\u0275element(12, "settings-toggle", 97);
    \u0275\u0275controlCreate();
    \u0275\u0275element(13, "settings-toggle", 124);
    \u0275\u0275controlCreate();
    \u0275\u0275element(14, "settings-toggle", 114);
    \u0275\u0275controlCreate();
    \u0275\u0275element(15, "settings-toggle", 99);
    \u0275\u0275controlCreate();
    \u0275\u0275element(16, "settings-toggle", 140);
    \u0275\u0275controlCreate();
    \u0275\u0275element(17, "settings-toggle", 141);
    \u0275\u0275controlCreate();
    \u0275\u0275element(18, "settings-toggle", 101);
    \u0275\u0275controlCreate();
    \u0275\u0275elementContainerStart(19);
    \u0275\u0275element(20, "settings-toggle", 142);
    \u0275\u0275controlCreate();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(21);
    \u0275\u0275element(22, "settings-toggle", 143);
    \u0275\u0275controlCreate();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(23);
    \u0275\u0275element(24, "settings-toggle", 144);
    \u0275\u0275controlCreate();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 94);
    \u0275\u0275element(26, "settings-select", 145)(27, "settings-select", 146);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-expanded", ctx_r1.shown_group() === "bookings");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.shown_group() === "bookings" ? "chevron_left" : "keyboard_arrow_down");
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx_r1.shown_group() === "bookings");
    \u0275\u0275advance(3);
    \u0275\u0275property("field", ctx_r1.form.bookings.bookable_hours.start)("options", ctx_r1.BOOKABLE_HOUR_START);
    \u0275\u0275advance();
    \u0275\u0275property("field", ctx_r1.form.bookings.bookable_hours.end)("options", ctx_r1.BOOKABLE_HOUR_END);
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r1.form.bookings.allow_all_day);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.bookings.all_day_default);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.bookings.use_building_timezone);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.bookings.can_book_for_others);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.bookings.multiple_visitors);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.bookings.no_approval);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.bookings.has_assets);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r1.form.visitors.show_calendar_links);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r1.form.visitors.allow_international);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r1.form.visitors.allow_visitor_internal_or_external);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("field", ctx_r1.form.bookings.all_day_period.start)("options", ctx_r1.BLOCK_START);
    \u0275\u0275advance();
    \u0275\u0275property("field", ctx_r1.form.bookings.all_day_period.end)("options", ctx_r1.BLOCK_END);
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_170_Conditional_15_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 170)(1, "div", 172)(2, "mat-form-field", 5)(3, "input", 173);
    \u0275\u0275twoWayListener("ngModelChange", function WorkplaceSettingsFormModalComponent_Conditional_170_Conditional_15_For_4_Template_input_ngModelChange_3_listener($event) {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(item_r9[0], $event) || (item_r9[0] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 174)(5, "input", 175);
    \u0275\u0275twoWayListener("ngModelChange", function WorkplaceSettingsFormModalComponent_Conditional_170_Conditional_15_For_4_Template_input_ngModelChange_5_listener($event) {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(item_r9[1], $event) || (item_r9[1] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 176);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("click", function WorkplaceSettingsFormModalComponent_Conditional_170_Conditional_15_For_4_Template_button_click_6_listener() {
      const \u0275$index_526_r10 = \u0275\u0275restoreView(_r8).$index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeLegend(\u0275$index_526_r10));
    });
    \u0275\u0275elementStart(8, "icon");
    \u0275\u0275text(9, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", item_r9[0]);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(7, _c0));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", item_r9[1]);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c0));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 5, "COMMON.DELETE"));
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_170_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 153)(1, "h3", 43);
    \u0275\u0275text(2, " Legend ");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, WorkplaceSettingsFormModalComponent_Conditional_170_Conditional_15_For_4_Template, 10, 9, "div", 170, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(5, "button", 171);
    \u0275\u0275listener("click", function WorkplaceSettingsFormModalComponent_Conditional_170_Conditional_15_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addLegend());
    });
    \u0275\u0275text(6, " Add Legend Item ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.model().explore.legend || \u0275\u0275pureFunction0(0, _c7));
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_170_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 82)(1, "h3", 43);
    \u0275\u0275text(2, " PlaceOS Maps ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 147);
    \u0275\u0275listener("click", function WorkplaceSettingsFormModalComponent_Conditional_170_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleGroup("explore"));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 86)(7, "div", 87);
    \u0275\u0275element(8, "settings-select", 148);
    \u0275\u0275elementStart(9, "div", 44);
    \u0275\u0275element(10, "settings-select", 149)(11, "settings-select", 150);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 44);
    \u0275\u0275element(13, "settings-select", 151)(14, "settings-select", 152);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, WorkplaceSettingsFormModalComponent_Conditional_170_Conditional_15_Template, 7, 1, "div", 153);
    \u0275\u0275elementStart(16, "div")(17, "label", 154);
    \u0275\u0275text(18, " Hidden Device Fields ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-form-field", 11)(20, "mat-select", 155)(21, "mat-option", 156);
    \u0275\u0275text(22, " MAC Address ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-option", 157);
    \u0275\u0275text(24, " Manufacturer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "mat-option", 158);
    \u0275\u0275text(26, "OS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "mat-option", 159);
    \u0275\u0275text(28, "SSID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-option", 160);
    \u0275\u0275text(30, " Username ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "mat-option", 161);
    \u0275\u0275text(32, "User");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(33, "mat-hint");
    \u0275\u0275text(34, " Fields hidden from device info tooltips ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 63);
    \u0275\u0275element(36, "settings-toggle", 162);
    \u0275\u0275controlCreate();
    \u0275\u0275element(37, "settings-toggle", 163);
    \u0275\u0275controlCreate();
    \u0275\u0275element(38, "settings-toggle", 164);
    \u0275\u0275controlCreate();
    \u0275\u0275element(39, "settings-toggle", 165);
    \u0275\u0275controlCreate();
    \u0275\u0275element(40, "settings-toggle", 166);
    \u0275\u0275controlCreate();
    \u0275\u0275element(41, "settings-toggle", 167);
    \u0275\u0275controlCreate();
    \u0275\u0275element(42, "settings-toggle", 168);
    \u0275\u0275controlCreate();
    \u0275\u0275element(43, "settings-toggle", 169);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-expanded", ctx_r1.shown_group() === "explore");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.shown_group() === "explore" ? "chevron_left" : "keyboard_arrow_down");
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx_r1.shown_group() === "explore");
    \u0275\u0275advance(2);
    \u0275\u0275property("field", ctx_r1.form.explore.disable)("options", ctx_r1.EXPLORE_FEATURE);
    \u0275\u0275advance(2);
    \u0275\u0275property("field", ctx_r1.form.explore.disable_actions)("options", ctx_r1.EXPLORE_FEATURE);
    \u0275\u0275advance();
    \u0275\u0275property("field", ctx_r1.form.explore.disable_labels)("options", ctx_r1.EXPLORE_FEATURE);
    \u0275\u0275advance(2);
    \u0275\u0275property("field", ctx_r1.form.explore.disable_features)("options", ctx_r1.EXPLORE_FEATURE);
    \u0275\u0275advance();
    \u0275\u0275property("field", ctx_r1.form.explore.disable_styles)("options", ctx_r1.EXPLORE_FEATURE);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.model().explore?.show_legend ? 15 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("formField", ctx_r1.form.explore.hide_device_fields);
    \u0275\u0275control();
    \u0275\u0275advance(16);
    \u0275\u0275property("formField", ctx_r1.form.explore.show_legend);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.explore.hide_zones);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.explore.hide_devices);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.explore.hide_sensors);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.explore.show_booking_qr);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.explore.use_zone_polygons);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.explore.show_zone_labels);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.explore.show_zone_sensor_info);
    \u0275\u0275control();
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_171_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 83)(1, "h3", 43);
    \u0275\u0275text(2, " Parking Bookings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 177);
    \u0275\u0275listener("click", function WorkplaceSettingsFormModalComponent_Conditional_171_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleGroup("parking"));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 86)(7, "div", 87);
    \u0275\u0275element(8, "settings-select", 178)(9, "settings-select", 179);
    \u0275\u0275elementStart(10, "div", 94);
    \u0275\u0275element(11, "settings-select", 180)(12, "settings-select", 181);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 63);
    \u0275\u0275element(14, "settings-toggle", 97);
    \u0275\u0275controlCreate();
    \u0275\u0275element(15, "settings-toggle", 124);
    \u0275\u0275controlCreate();
    \u0275\u0275element(16, "settings-toggle", 182);
    \u0275\u0275controlCreate();
    \u0275\u0275element(17, "settings-toggle", 183);
    \u0275\u0275controlCreate();
    \u0275\u0275element(18, "settings-toggle", 184);
    \u0275\u0275controlCreate();
    \u0275\u0275element(19, "settings-toggle", 185);
    \u0275\u0275controlCreate();
    \u0275\u0275element(20, "settings-toggle", 99);
    \u0275\u0275controlCreate();
    \u0275\u0275element(21, "settings-toggle", 186);
    \u0275\u0275controlCreate();
    \u0275\u0275element(22, "settings-toggle", 114);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-expanded", ctx_r1.shown_group() === "parking");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.shown_group() === "parking" ? "chevron_left" : "keyboard_arrow_down");
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx_r1.shown_group() === "parking");
    \u0275\u0275advance(2);
    \u0275\u0275property("field", ctx_r1.form.parking.max_duration)("options", ctx_r1.MAX_DURATION_SHORT);
    \u0275\u0275advance();
    \u0275\u0275property("field", ctx_r1.form.parking.available_period)("options", ctx_r1.AVAILABLE_PERIOD_EXTENDED);
    \u0275\u0275advance(2);
    \u0275\u0275property("field", ctx_r1.form.parking.bookable_hours.start)("options", ctx_r1.BOOKABLE_HOUR_START);
    \u0275\u0275advance();
    \u0275\u0275property("field", ctx_r1.form.parking.bookable_hours.end)("options", ctx_r1.BOOKABLE_HOUR_END);
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r1.form.parking.allow_all_day);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.parking.all_day_default);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.parking.show_users);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.parking.show_status_details);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.parking.allow_time_changes);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.parking.auto_allocation);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.parking.can_book_for_others);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.parking.allow_recurrence);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.parking.use_building_timezone);
    \u0275\u0275control();
  }
}
function WorkplaceSettingsFormModalComponent_Conditional_172_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 84)(1, "h3", 43);
    \u0275\u0275text(2, " Locker Bookings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 187);
    \u0275\u0275listener("click", function WorkplaceSettingsFormModalComponent_Conditional_172_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleGroup("lockers"));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 86)(7, "div", 87);
    \u0275\u0275element(8, "settings-select", 188);
    \u0275\u0275elementStart(9, "div", 94);
    \u0275\u0275element(10, "settings-select", 189)(11, "settings-select", 190);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 63);
    \u0275\u0275element(13, "settings-toggle", 97);
    \u0275\u0275controlCreate();
    \u0275\u0275element(14, "settings-toggle", 124);
    \u0275\u0275controlCreate();
    \u0275\u0275element(15, "settings-toggle", 191);
    \u0275\u0275controlCreate();
    \u0275\u0275element(16, "settings-toggle", 192);
    \u0275\u0275controlCreate();
    \u0275\u0275element(17, "settings-toggle", 184);
    \u0275\u0275controlCreate();
    \u0275\u0275element(18, "settings-toggle", 114);
    \u0275\u0275controlCreate();
    \u0275\u0275element(19, "settings-toggle", 193);
    \u0275\u0275controlCreate();
    \u0275\u0275element(20, "settings-toggle", 194);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-expanded", ctx_r1.shown_group() === "lockers");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.shown_group() === "lockers" ? "chevron_left" : "keyboard_arrow_down");
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx_r1.shown_group() === "lockers");
    \u0275\u0275advance(2);
    \u0275\u0275property("field", ctx_r1.form.lockers.max_duration)("options", ctx_r1.MAX_DURATION_SHORT);
    \u0275\u0275advance(2);
    \u0275\u0275property("field", ctx_r1.form.lockers.bookable_hours.start)("options", ctx_r1.BOOKABLE_HOUR_START);
    \u0275\u0275advance();
    \u0275\u0275property("field", ctx_r1.form.lockers.bookable_hours.end)("options", ctx_r1.BOOKABLE_HOUR_END);
    \u0275\u0275advance(2);
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
    \u0275\u0275property("formField", ctx_r1.form.lockers.allow_time_changes);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.lockers.use_building_timezone);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.lockers.disabled_date_select);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.lockers.disabled_start_time);
    \u0275\u0275control();
  }
}
var WorkplaceSettingsFormModalComponent = class _WorkplaceSettingsFormModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._layers = { inherited: {}, stored: {} };
    this._initial = {};
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
    this.zone = this._data.zone;
    this.heading = appSettingsHeading("Workplace Settings", this.zone);
    this.settings_key = appMetadataKey(this._settings, "workplace");
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
    this.loading.set("Loading existing settings...");
    try {
      this._layers = await loadLayeredAppSettings(this.zone, this._org.organisation.id, this.settings_key, DEFAULT_SETTINGS.app);
      const { inherited, stored } = this._layers;
      this.model.update((model) => applyBookingFallbacks(applyAppSettings(applyAppSettings(model, inherited), stored), mergeAppSettings(inherited, stored), "lockers", LOCKER_BOOKING_FALLBACKS));
      this._initial = this.model();
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
  async save() {
    this.loading.set("Saving settings...");
    try {
      await saveAppSettings(this.zone.id, this.settings_key, "Workplace", this._layers, this._initial, this.model());
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkplaceSettingsFormModalComponent, selectors: [["workplace-settings-form-modal"]], decls: 173, vars: 58, consts: [[3, "confirm", "heading", "loading"], [1, "flex", "flex-col", "space-y-8", "pb-4"], ["general", "", 1, "bg-base-100", "space-y-2", "rounded-sm"], ["for", "workplace-settings-form-modal-logo_light"], [1, "mb-4", "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["id", "workplace-settings-form-modal-logo_light", "matInput", "", 3, "formField"], ["ngModel", "", 3, "ngModelChange", "ngModelOptions"], ["for", "workplace-settings-form-modal-logo_dark"], ["id", "workplace-settings-form-modal-logo_dark", "matInput", "", 3, "formField"], ["for", "workplace-settings-form-modal-features", "id", "workplace-settings-form-modal-features-label"], ["appearance", "outline", 1, "w-full"], ["aria-labelledby", "workplace-settings-form-modal-features-label", "multiple", "", 3, "formField"], ["value", "spaces"], ["value", "desks"], ["value", "explore"], ["value", "parking"], ["value", "visitor-invite"], ["value", "lockers"], ["value", "help"], ["value", "schedule"], ["value", "wfh"], ["value", "support-ticket"], ["value", "group-events"], ["value", "deals-n-offers"], ["for", "workplace-settings-form-modal-hide-landing-widgets", "id", "workplace-settings-form-modal-hide-landing-widgets-label"], ["aria-labelledby", "workplace-settings-form-modal-hide-landing-widgets-label", "placeholder", "None", "multiple", "", 3, "formField"], ["value", "available_now"], ["value", "quick_actions"], ["value", "desk_week"], ["value", "favourites"], ["value", "colleagues"], ["value", "focus_timer"], ["value", "world_clock"], ["for", "workplace-settings-form-modal-features-2", "id", "workplace-settings-form-modal-features-2-label"], ["aria-labelledby", "workplace-settings-form-modal-features-2-label", "multiple", "", 3, "formField"], ["value", "mapspeople"], ["value", "emergency_contacts"], ["value", "features"], ["value", "points_of_interest"], ["value", "contacts"], ["value", "users"], [1, "border-base-300", "relative", "rounded-sm", "border", "px-4", "pt-4", "pb-2"], [1, "bg-base-100", "absolute", "top-0", "left-4", "-translate-y-1/2", "rounded-sm", "px-2", "py-1", "font-medium"], [1, "flex", "items-center", "space-x-4"], [1, "flex-1"], ["for", "workplace-settings-form-modal-banner-type", "id", "workplace-settings-form-modal-banner-type-label"], ["aria-labelledby", "workplace-settings-form-modal-banner-type-label", "name", "banner-type", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], ["for", "workplace-settings-form-modal-banner-type-2"], ["id", "workplace-settings-form-modal-banner-type-2", "matInput", "", "name", "banner-message", "placeholder", "Banner Message", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["for", "workplace-settings-form-modal-external-support-url"], ["id", "workplace-settings-form-modal-external-support-url", "matInput", "", "placeholder", "https://support.com/ticket", 3, "formField"], ["for", "workplace-settings-form-modal-support-email"], ["id", "workplace-settings-form-modal-support-email", "matInput", "", "placeholder", "support@acme.tech", 3, "formField"], ["for", "workplace-settings-form-modal-default-route"], ["id", "workplace-settings-form-modal-default-route", "matInput", "", "placeholder", "/landing", 3, "formField"], ["for", "workplace-settings-form-modal-catering-provider"], ["id", "workplace-settings-form-modal-catering-provider", "matInput", "", "placeholder", "Catering Provider", 3, "formField"], ["field_id", "workplace-settings-form-modal-week-start", "label", "Week Start", "placeholder", "Sunday", "hint", "Day of the week to show initially on various calendars", 3, "field", "options"], ["field_id", "workplace-settings-form-modal-currency", 3, "field"], ["for", "workplace-settings-form-modal-locales", "id", "workplace-settings-form-modal-locales-label"], ["aria-labelledby", "workplace-settings-form-modal-locales-label", "multiple", "", "placeholder", "Select locales", 3, "formField"], [1, "-mx-2", "flex", "flex-wrap", "items-center"], ["label", "Use 24 hour time", 3, "formField"], ["label", "Use region over building", 3, "formField"], ["label", "Use imperial units for measurements", 3, "formField"], ["label", "Allow images in support tickets", 3, "formField"], ["label", "Search only authenticated users", 3, "formField"], ["label", "Only authenticated colleagues", "info", "Will limit the available users to add as colleagues to only\n those who have authenticated with the application", 3, "formField"], ["label", "Hide landing spaces", 3, "formField"], ["label", "Hide landing rooms", 3, "formField"], ["label", "Hide colleagues", 3, "formField"], ["label", "Hide landing customise", "info", "Will stop users from changing the layout of the landing page", 3, "formField"], ["label", "Show landing quick links", 3, "formField"], ["label", "Show landing quick book", 3, "formField"], ["label", "Allow dark mode", 3, "formField"], ["label", "Show changelog link", 3, "formField"], ["label", "Show global search", 3, "formField"], ["events", "", "id", "feature-spaces", 1, "border-base-300", "relative", "rounded-sm", "border"], ["desks", "", "id", "feature-desks", 1, "border-base-300", "relative", "rounded-sm", "border"], ["bookings", "", "id", "feature-bookings", 1, "border-base-300", "relative", "rounded-sm", "border"], ["explore", "", "id", "feature-explore", 1, "border-base-300", "relative", "rounded-sm", "border"], ["parking", "", "id", "feature-parking", 1, "border-base-300", "relative", "rounded-sm", "border"], ["lockers", "", "id", "feature-lockers", 1, "border-base-300", "relative", "rounded-sm", "border"], ["icon", "", "matRipple", "", "aria-label", "Room Bookings", 1, "bg-base-100", "absolute", "top-0", "right-4", "-translate-y-1/2", 3, "click"], ["collapsible", ""], [1, "content", "px-4", "pt-4", "pb-2"], ["field_id", "workplace-settings-form-modal-available-period", "label", "Available Period", "hint", "Number of days ahead the user is able to book", 3, "field", "options"], ["for", "workplace-settings-form-modal-force-host"], ["id", "workplace-settings-form-modal-force-host", "matInput", "", "placeholder", "global.host@acme.tech", 3, "formField"], ["field_id", "workplace-settings-form-modal-max-duration", "label", "Max Duration", "hint", "Max duration for single day bookings", 3, "field", "options"], ["field_id", "workplace-settings-form-modal-setup", "label", "Default Setup Duration", "placeholder", "No default setup", 3, "field", "options"], ["field_id", "workplace-settings-form-modal-breakdown", "label", "Default Breakdown Duration", "placeholder", "No default breakdown", 3, "field", "options"], [1, "grid", "grid-cols-1", "gap-4", "md:grid-cols-2"], ["field_id", "workplace-settings-form-modal-events-bookable-start", "label", "Bookable Start", "placeholder", "None", 3, "field", "options"], ["field_id", "workplace-settings-form-modal-events-bookable-end", "label", "Bookable End", "placeholder", "None", 3, "field", "options"], ["label", "Allow all day bookings", 3, "formField"], ["label", "Disable booking requests", "info", "Prevent making backend requests for bookings and give users links to create the booking in their own calendars", 3, "formField"], ["label", "Allow booking for other users", 3, "formField"], ["label", "Allow booking for any users", 3, "formField"], ["label", "Allow booking with assets", 3, "formField"], ["label", "Allow booking multiple spaces", 3, "formField"], ["label", "Force room as host", 3, "formField"], ["label", "Allow external attendees", 3, "formField"], ["label", "Allow international attendees", "info", "Show a checkbox on the meeting form that flags each attendee as international", 3, "formField"], ["label", "Allow attendees to be marked internal or external", "info", "Show a control on the meeting form that marks each attendee as internal (default) or external", 3, "formField"], ["label", "Enforce room capacity limits", 3, "formField"], ["label", "Disable notes field", 3, "formField"], ["label", "Hide attendees field", 3, "formField"], ["label", "Hide nearby desk action", "info", "Hide the book nearby desks button on the meeting success view", 3, "formField"], ["label", "Allow recurring meetings", 3, "formField"], ["label", "Allow multi-day bookings", 3, "formField"], ["label", "Use PlaceOS bookings", 3, "formField"], ["label", "Display times with building timezone", 3, "formField"], ["label", "Allow daily all-day recurrence", 3, "formField"], ["label", "Disable standalone bookings", 3, "formField"], ["field_id", "workplace-settings-form-modal-events-all-day-start", "label", "All Day Start", 3, "field", "options"], ["field_id", "workplace-settings-form-modal-events-all-day-end", "label", "All Day End", 3, "field", "options"], ["icon", "", "matRipple", "", "aria-label", "Desk Bookings", 1, "bg-base-100", "absolute", "top-0", "right-4", "-translate-y-1/2", 3, "click"], ["field_id", "workplace-settings-form-modal-max-duration-2", "label", "Max Duration", 3, "field", "options"], ["field_id", "workplace-settings-form-modal-available-period-2", "label", "Available Period", "hint", "Number of days ahead the user is able to book", 3, "field", "options"], ["field_id", "workplace-settings-form-modal-desks-bookable-start", "label", "Bookable Start", 3, "field", "options"], ["field_id", "workplace-settings-form-modal-desks-bookable-end", "label", "Bookable End", 3, "field", "options"], ["label", "Default bookings to all day", 3, "formField"], ["label", "Allow group bookings", 3, "formField"], ["label", "Allow time changes", 3, "formField"], ["label", "Auto-allocation", 3, "formField"], ["label", "Allow booking for others", 3, "formField"], ["label", "Allow also booking a locker", 3, "formField"], ["label", "Allow requesting assets with booking", 3, "formField"], ["label", "Allow Recurring Desk bookings", 3, "formField"], ["label", "Auto-checkin map bookingss", 3, "formField"], ["label", "Default to desk select modal to map view", 3, "formField"], ["label", "Show calendar links after booking", 3, "formField"], ["label", "Enabled desk height", 3, "formField"], ["label", "Hide Checkin Options", 3, "formField"], ["icon", "", "matRipple", "", "aria-label", "PlaceOS Bookings", 1, "bg-base-100", "absolute", "top-0", "right-4", "-translate-y-1/2", 3, "click"], ["field_id", "workplace-settings-form-modal-bookings-bookable-start", "label", "Bookable Start", 3, "field", "options"], ["field_id", "workplace-settings-form-modal-bookings-bookable-end", "label", "Bookable End", 3, "field", "options"], ["label", "Allow booking multiple visitors", 3, "formField"], ["label", "Auto-approve bookings", 3, "formField"], ["label", "Show calendar links after visitor invite", 3, "formField"], ["label", "Allow international flag for visitors", 3, "formField"], ["label", "Allow visitors to be marked internal or external", 3, "formField"], ["field_id", "workplace-settings-form-modal-bookings-all-day-start", "label", "All Day Start", "placeholder", "None", 3, "field", "options"], ["field_id", "workplace-settings-form-modal-bookings-all-day-end", "label", "All Day End", "placeholder", "None", 3, "field", "options"], ["icon", "", "matRipple", "", "aria-label", "PlaceOS Maps", 1, "bg-base-100", "absolute", "top-0", "right-4", "-translate-y-1/2", 3, "click"], ["field_id", "workplace-settings-form-modal-disable", "label", "Disabled Features", "placeholder", "No disabled features", "multiple", "", 3, "field", "options"], ["field_id", "workplace-settings-form-modal-disable-actions", "label", "Disabled Feature Actions", "placeholder", "No disabled actions", "multiple", "", 1, "flex-1", 3, "field", "options"], ["field_id", "workplace-settings-form-modal-available-period-3", "label", "Disabled Feature Labels", "placeholder", "No disabled labels", "multiple", "", 1, "flex-1", 3, "field", "options"], ["field_id", "workplace-settings-form-modal-disable-features", "label", "Disabled Feature Displays", "placeholder", "No disabled displays", "multiple", "", 1, "flex-1", 3, "field", "options"], ["field_id", "workplace-settings-form-modal-disable-styles", "label", "Disabled Feature Styles", "placeholder", "No disabled styles", "multiple", "", 1, "flex-1", 3, "field", "options"], [1, "border-base-300", "relative", "rounded-sm", "border", "p-4"], ["for", "workplace-settings-form-modal-hide-device-fields", "id", "workplace-settings-form-modal-hide-device-fields-label"], ["aria-labelledby", "workplace-settings-form-modal-hide-device-fields-label", "placeholder", "None", "multiple", "", 3, "formField"], ["value", "mac"], ["value", "manufacturer"], ["value", "os"], ["value", "ssid"], ["value", "username"], ["value", "user"], ["label", "Show Legend", 3, "formField"], ["label", "Hide Areas Toggle", 3, "formField"], ["label", "Hide Devices Toggle", 3, "formField"], ["label", "Hide Sensors Toggle", 3, "formField"], ["label", "Show Booking QR Code", 3, "formField"], ["label", "Use defined polygons for zones", 3, "formField"], ["label", "Show labels for zones", 3, "formField"], ["label", "Show zone sensor info", 3, "formField"], [1, "mb-4", "flex", "items-center", "space-x-4"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], [1, "w-3/4", "flex-1"], ["matInput", "", "placeholder", "Legend Key", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["matTooltip", "Legend Color", 1, "flex", "w-12", "items-center", "justify-center"], ["type", "color", 1, "border-base-content", "h-11", "rounded-lg", "border", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["icon", "", "matRipple", "", 1, "border-error", "text-error", "h-12", "w-12", "rounded-sm", "border", 3, "click"], ["icon", "", "matRipple", "", "aria-label", "Parking Bookings", 1, "bg-base-100", "absolute", "top-0", "right-4", "-translate-y-1/2", 3, "click"], ["field_id", "workplace-settings-form-modal-max-duration-3", "label", "Max Duration", 3, "field", "options"], ["field_id", "workplace-settings-form-modal-available-period-4", "label", "Available Period", "hint", "Number of days ahead the user is able to book", 3, "field", "options"], ["field_id", "workplace-settings-form-modal-parking-bookable-start", "label", "Bookable Start", 3, "field", "options"], ["field_id", "workplace-settings-form-modal-parking-bookable-end", "label", "Bookable End", 3, "field", "options"], ["label", "Show assigned users on parking map", 3, "formField"], ["label", "Show parking status details on map", 3, "formField"], ["label", "Allow user selecting booking time", 3, "formField"], ["label", "Auto-allocate parking spaces", 3, "formField"], ["label", "Allow recurring parking bookings", 3, "formField"], ["icon", "", "matRipple", "", "aria-label", "Locker Bookings", 1, "bg-base-100", "absolute", "top-0", "right-4", "-translate-y-1/2", 3, "click"], ["field_id", "workplace-settings-form-modal-max-duration-4", "label", "Max Duration", 3, "field", "options"], ["field_id", "workplace-settings-form-modal-lockers-bookable-start", "label", "Bookable Start", 3, "field", "options"], ["field_id", "workplace-settings-form-modal-lockers-bookable-end", "label", "Bookable End", 3, "field", "options"], ["label", "Show Calendar Links after booking", 3, "formField"], ["label", "Hide End time option", 3, "formField"], ["label", "Disable date and time selection", 3, "formField"], ["label", "Disable start time option", 3, "formField"]], template: function WorkplaceSettingsFormModalComponent_Template(rf, ctx) {
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
        \u0275\u0275element(15, "input", 9);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "upload-button", 7);
        \u0275\u0275listener("ngModelChange", function WorkplaceSettingsFormModalComponent_Template_upload_button_ngModelChange_16_listener($event) {
          return ctx.model.update((m) => __spreadProps(__spreadValues({}, m), { logo_dark: $event }));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div")(18, "label", 10);
        \u0275\u0275text(19, "Features");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "mat-form-field", 11)(21, "mat-select", 12)(22, "mat-option", 13);
        \u0275\u0275text(23, " Rooms ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "mat-option", 14);
        \u0275\u0275text(25, "Desks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "mat-option", 15);
        \u0275\u0275text(27, "Explore");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "mat-option", 16);
        \u0275\u0275text(29, "Parking");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "mat-option", 17);
        \u0275\u0275text(31, " Visitors ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "mat-option", 18);
        \u0275\u0275text(33, "Lockers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "mat-option", 19);
        \u0275\u0275text(35, "Help Desk");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "mat-option", 20);
        \u0275\u0275text(37, " Your Bookings ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "mat-option", 21);
        \u0275\u0275text(39, "Work Schedule");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "mat-option", 22);
        \u0275\u0275text(41, " Support Tickets ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "mat-option", 23);
        \u0275\u0275text(43, "Group Events");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "mat-option", 24);
        \u0275\u0275text(45, " Deals & Offers ");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div")(47, "label", 25);
        \u0275\u0275text(48, "Hidden Landing Widgets");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "mat-form-field", 11)(50, "mat-select", 26)(51, "mat-option", 27);
        \u0275\u0275text(52, " Available Now ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "mat-option", 28);
        \u0275\u0275text(54, " Quick Actions ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "mat-option", 29);
        \u0275\u0275text(56, " My Desk Bookings ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "mat-option", 30);
        \u0275\u0275text(58, " Favourites ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "mat-option", 31);
        \u0275\u0275text(60, " Colleagues ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "mat-option", 32);
        \u0275\u0275text(62, " Focus Timer ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "mat-option", 33);
        \u0275\u0275text(64, " World Clock ");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(65, "mat-hint");
        \u0275\u0275text(66, " Widgets that users cannot have on the landing page ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(67, "div")(68, "label", 34);
        \u0275\u0275text(69, "Hide Global Search Item Types");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "mat-form-field", 11)(71, "mat-select", 35)(72, "mat-option", 36);
        \u0275\u0275text(73, " MapsPeople ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "mat-option", 13);
        \u0275\u0275text(75, " Rooms ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "mat-option", 37);
        \u0275\u0275text(77, " Emergency Contacts ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "mat-option", 38);
        \u0275\u0275text(79, " Map Features ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "mat-option", 39);
        \u0275\u0275text(81, " Points of Interest ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "mat-option", 40);
        \u0275\u0275text(83, " Contacts ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "mat-option", 41);
        \u0275\u0275text(85, " Users ");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(86, "div", 42)(87, "h3", 43);
        \u0275\u0275text(88, " Banner ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "div", 44)(90, "div", 45)(91, "label", 46);
        \u0275\u0275text(92, "Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "mat-form-field", 11)(94, "mat-select", 47);
        \u0275\u0275listener("ngModelChange", function WorkplaceSettingsFormModalComponent_Template_mat_select_ngModelChange_94_listener($event) {
          return ctx.model.update((m) => __spreadProps(__spreadValues({}, m), { banner: { id: ctx.date_string, content: m.banner?.content || "", type: $event } }));
        });
        \u0275\u0275repeaterCreate(95, WorkplaceSettingsFormModalComponent_For_96_Template, 2, 2, "mat-option", 48, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(97, "div", 45)(98, "label", 49);
        \u0275\u0275text(99, "Message");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "mat-form-field", 11)(101, "input", 50);
        \u0275\u0275listener("ngModelChange", function WorkplaceSettingsFormModalComponent_Template_input_ngModelChange_101_listener($event) {
          return ctx.model.update((m) => __spreadProps(__spreadValues({}, m), { banner: { id: ctx.date_string, type: m.banner?.type || "", content: $event } }));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(102, "div")(103, "label", 51);
        \u0275\u0275text(104, " External Support URL ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "mat-form-field", 11);
        \u0275\u0275element(106, "input", 52);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(107, "mat-hint");
        \u0275\u0275text(108, " External URL to link users to for support tickets ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "mat-error");
        \u0275\u0275text(110, "Invalid URL");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(111, "div")(112, "label", 53);
        \u0275\u0275text(113, "Support Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "mat-form-field", 11);
        \u0275\u0275element(115, "input", 54);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(116, "mat-hint");
        \u0275\u0275text(117, " Email to send tickets when created in the app ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(118, "div")(119, "label", 55);
        \u0275\u0275text(120, "Default Route");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "mat-form-field", 11);
        \u0275\u0275element(122, "input", 56);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(123, "mat-hint");
        \u0275\u0275text(124, " Main page of the application ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(125, "div")(126, "label", 57);
        \u0275\u0275text(127, "Catering Provider");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(128, "mat-form-field", 11);
        \u0275\u0275element(129, "input", 58);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(130, "mat-hint");
        \u0275\u0275text(131, " Name of the catering provider to force orders to use ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(132, "settings-select", 59)(133, "settings-currency-select", 60);
        \u0275\u0275elementStart(134, "div")(135, "label", 61);
        \u0275\u0275text(136, "Locales");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(137, "mat-form-field", 11)(138, "mat-select", 62)(139, "mat-option", 48);
        \u0275\u0275text(140, " English (British) ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(141, "mat-option", 48);
        \u0275\u0275text(142, " English (US) ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(143, "mat-option", 48);
        \u0275\u0275text(144, " French ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(145, "mat-option", 48);
        \u0275\u0275text(146, " Spanish ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "mat-option", 48);
        \u0275\u0275text(148, " Portuguese ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(149, "mat-option", 48);
        \u0275\u0275text(150, " Arabic ");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(151, "div", 63);
        \u0275\u0275element(152, "settings-toggle", 64);
        \u0275\u0275controlCreate();
        \u0275\u0275element(153, "settings-toggle", 65);
        \u0275\u0275controlCreate();
        \u0275\u0275element(154, "settings-toggle", 66);
        \u0275\u0275controlCreate();
        \u0275\u0275conditionalCreate(155, WorkplaceSettingsFormModalComponent_Conditional_155_Template, 1, 1, "settings-toggle", 67);
        \u0275\u0275element(156, "settings-toggle", 68);
        \u0275\u0275controlCreate();
        \u0275\u0275element(157, "settings-toggle", 69);
        \u0275\u0275controlCreate();
        \u0275\u0275element(158, "settings-toggle", 70);
        \u0275\u0275controlCreate();
        \u0275\u0275element(159, "settings-toggle", 71);
        \u0275\u0275controlCreate();
        \u0275\u0275element(160, "settings-toggle", 72);
        \u0275\u0275controlCreate();
        \u0275\u0275element(161, "settings-toggle", 73);
        \u0275\u0275controlCreate();
        \u0275\u0275element(162, "settings-toggle", 74);
        \u0275\u0275controlCreate();
        \u0275\u0275element(163, "settings-toggle", 75);
        \u0275\u0275controlCreate();
        \u0275\u0275element(164, "settings-toggle", 76);
        \u0275\u0275controlCreate();
        \u0275\u0275element(165, "settings-toggle", 77);
        \u0275\u0275controlCreate();
        \u0275\u0275element(166, "settings-toggle", 78);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(167, WorkplaceSettingsFormModalComponent_Conditional_167_Template, 49, 41, "section", 79);
        \u0275\u0275conditionalCreate(168, WorkplaceSettingsFormModalComponent_Conditional_168_Template, 29, 27, "section", 80);
        \u0275\u0275conditionalCreate(169, WorkplaceSettingsFormModalComponent_Conditional_169_Template, 28, 22, "section", 81);
        \u0275\u0275conditionalCreate(170, WorkplaceSettingsFormModalComponent_Conditional_170_Template, 44, 24, "section", 82);
        \u0275\u0275conditionalCreate(171, WorkplaceSettingsFormModalComponent_Conditional_171_Template, 23, 21, "section", 83);
        \u0275\u0275conditionalCreate(172, WorkplaceSettingsFormModalComponent_Conditional_172_Template, 21, 18, "section", 84);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", ctx.heading)("loading", ctx.loading());
        \u0275\u0275advance(8);
        \u0275\u0275property("formField", ctx.form.logo_light);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(48, _c0));
        \u0275\u0275control();
        \u0275\u0275advance(6);
        \u0275\u0275property("formField", ctx.form.logo_dark);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(49, _c0));
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
        \u0275\u0275property("ngModel", ctx.model().banner?.type || "")("ngModelOptions", \u0275\u0275pureFunction0(50, _c0));
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.BANNER_TYPE);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngModel", ctx.model().banner?.content || "")("ngModelOptions", \u0275\u0275pureFunction0(51, _c0));
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
        \u0275\u0275advance(3);
        \u0275\u0275property("field", ctx.form.week_start)("options", ctx.WEEK_START);
        \u0275\u0275advance();
        \u0275\u0275property("field", ctx.form.currency);
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.locales);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("value", \u0275\u0275pureFunction0(52, _c1));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", \u0275\u0275pureFunction0(53, _c2));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", \u0275\u0275pureFunction0(54, _c3));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", \u0275\u0275pureFunction0(55, _c4));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", \u0275\u0275pureFunction0(56, _c5));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", \u0275\u0275pureFunction0(57, _c6));
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
        \u0275\u0275conditional(ctx.model().features.includes("support-ticket") ? 155 : -1);
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
        \u0275\u0275conditional(ctx.model().features?.includes("spaces") ? 167 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().features.includes("desks") ? 168 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().features.includes("desks") || ctx.model().features.includes("parking") || ctx.model().features.includes("lockers") || ctx.model().features.includes("visitor-invite") ? 169 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().features.includes("explore") ? 170 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().features.includes("parking") ? 171 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().features.includes("lockers") ? 172 : -1);
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
      UploadButtonComponent,
      SettingsSelectComponent,
      SettingsCurrencySelectComponent,
      TranslatePipe
    ], styles: ["\nsettings-toggle[_ngcontent-%COMP%] {\n  width: calc(50% - 1rem);\n  margin: 0.5rem;\n}\n/*# sourceMappingURL=workplace-settings-form-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkplaceSettingsFormModalComponent, [{
    type: Component,
    args: [{ selector: "workplace-settings-form-modal", template: `
        <fullscreen-modal-shell
            [heading]="heading"
            [loading]="loading()"
            (confirm)="save()"
        >
            <form class="flex flex-col space-y-8 pb-4">
                <section general class="bg-base-100 space-y-2 rounded-sm">
                    <div>
                        <label for="workplace-settings-form-modal-logo_light">Light Mode Logo</label>
                        <div class="mb-4 flex items-center space-x-2">
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript w-full"
                            >
                                <input id="workplace-settings-form-modal-logo_light" matInput [formField]="form.logo_light" />
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
                        <label for="workplace-settings-form-modal-logo_dark">Dark Mode Logo</label>
                        <div class="mb-4 flex items-center space-x-2">
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript w-full"
                            >
                                <input id="workplace-settings-form-modal-logo_dark" matInput [formField]="form.logo_dark" />
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
                        <label for="workplace-settings-form-modal-features" id="workplace-settings-form-modal-features-label">Features</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select aria-labelledby="workplace-settings-form-modal-features-label" [formField]="form.features" multiple>
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
                        <label for="workplace-settings-form-modal-hide-landing-widgets"
                             id="workplace-settings-form-modal-hide-landing-widgets-label">Hidden Landing Widgets</label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                aria-labelledby="workplace-settings-form-modal-hide-landing-widgets-label"
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
                        <label for="workplace-settings-form-modal-features-2"
                             id="workplace-settings-form-modal-features-2-label">Hide Global Search Item Types</label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                aria-labelledby="workplace-settings-form-modal-features-2-label"
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
                                <label for="workplace-settings-form-modal-banner-type" id="workplace-settings-form-modal-banner-type-label">Type</label>
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <mat-select
                                        aria-labelledby="workplace-settings-form-modal-banner-type-label"
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
                                <label for="workplace-settings-form-modal-banner-type-2">Message</label>
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        id="workplace-settings-form-modal-banner-type-2"
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
                        <label for="workplace-settings-form-modal-external-support-url">
                            External Support URL
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                id="workplace-settings-form-modal-external-support-url"
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
                        <label for="workplace-settings-form-modal-support-email">Support Email</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                id="workplace-settings-form-modal-support-email"
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
                        <label for="workplace-settings-form-modal-default-route">Default Route</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                id="workplace-settings-form-modal-default-route"
                                matInput
                                [formField]="form.default_route"
                                placeholder="/landing"
                            />
                            <mat-hint> Main page of the application </mat-hint>
                        </mat-form-field>
                    </div>
                    <div>
                        <label for="workplace-settings-form-modal-catering-provider">Catering Provider</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                id="workplace-settings-form-modal-catering-provider"
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
                    <settings-select
                        field_id="workplace-settings-form-modal-week-start"
                        label="Week Start"
                        [field]="form.week_start"
                        [options]="WEEK_START"
                        placeholder="Sunday"
                        hint="Day of the week to show initially on various calendars"
                    />
                    <settings-currency-select
                        field_id="workplace-settings-form-modal-currency"
                        [field]="form.currency"
                    />
                    <div>
                        <label for="workplace-settings-form-modal-locales" id="workplace-settings-form-modal-locales-label">Locales</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                aria-labelledby="workplace-settings-form-modal-locales-label"
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
                            aria-label="Room Bookings"
                            [attr.aria-expanded]="shown_group() === 'spaces'"
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
                                <settings-select
                                    field_id="workplace-settings-form-modal-available-period"
                                    label="Available Period"
                                    [field]="form.events.allowed_future_days"
                                    [options]="AVAILABLE_PERIOD_EXTENDED"
                                    hint="Number of days ahead the user is able to book"
                                />
                                <div>
                                    <label for="workplace-settings-form-modal-force-host">Force Host</label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <input
                                            id="workplace-settings-form-modal-force-host"
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
                                <settings-select
                                    field_id="workplace-settings-form-modal-max-duration"
                                    label="Max Duration"
                                    [field]="form.events.max_duration"
                                    [options]="MAX_DURATION_FULL"
                                    hint="Max duration for single day bookings"
                                />
                                <div class="flex items-center space-x-4">
                                    <settings-select
                                        field_id="workplace-settings-form-modal-setup"
                                        label="Default Setup Duration"
                                        [field]="form.events.setup"
                                        [options]="SETUP_BREAKDOWN"
                                        placeholder="No default setup"
                                    />
                                    <settings-select
                                        field_id="workplace-settings-form-modal-breakdown"
                                        label="Default Breakdown Duration"
                                        [field]="form.events.breakdown"
                                        [options]="SETUP_BREAKDOWN"
                                        placeholder="No default breakdown"
                                    />
                                </div>
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
                                >
                                    <settings-select
                                        field_id="workplace-settings-form-modal-events-bookable-start"
                                        label="Bookable Start"
                                        [field]="form.events.bookable_hours.start"
                                        [options]="BOOKABLE_HOUR_START"
                                        placeholder="None"
                                    />
                                    <settings-select
                                        field_id="workplace-settings-form-modal-events-bookable-end"
                                        label="Bookable End"
                                        [field]="form.events.bookable_hours.end"
                                        [options]="BOOKABLE_HOUR_END"
                                        placeholder="None"
                                    />
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
                                    <settings-select
                                        field_id="workplace-settings-form-modal-events-all-day-start"
                                        label="All Day Start"
                                        [field]="form.events.all_day_period.start"
                                        [options]="BLOCK_START"
                                    />
                                    <settings-select
                                        field_id="workplace-settings-form-modal-events-all-day-end"
                                        label="All Day End"
                                        [field]="form.events.all_day_period.end"
                                        [options]="BLOCK_END"
                                    />
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
                            aria-label="Desk Bookings"
                            [attr.aria-expanded]="shown_group() === 'desks'"
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
                                <settings-select
                                    field_id="workplace-settings-form-modal-max-duration-2"
                                    label="Max Duration"
                                    [field]="form.desks.max_duration"
                                    [options]="MAX_DURATION_SHORT"
                                />
                                <settings-select
                                    field_id="workplace-settings-form-modal-available-period-2"
                                    label="Available Period"
                                    [field]="form.desks.available_period"
                                    [options]="AVAILABLE_PERIOD_EXTENDED"
                                    hint="Number of days ahead the user is able to book"
                                />
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
                                >
                                    <settings-select
                                        field_id="workplace-settings-form-modal-desks-bookable-start"
                                        label="Bookable Start"
                                        [field]="form.desks.bookable_hours.start"
                                        [options]="BOOKABLE_HOUR_START"
                                    />
                                    <settings-select
                                        field_id="workplace-settings-form-modal-desks-bookable-end"
                                        label="Bookable End"
                                        [field]="form.desks.bookable_hours.end"
                                        [options]="BOOKABLE_HOUR_END"
                                    />
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
                            aria-label="PlaceOS Bookings"
                            [attr.aria-expanded]="shown_group() === 'bookings'"
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
                                    <settings-select
                                        field_id="workplace-settings-form-modal-bookings-bookable-start"
                                        label="Bookable Start"
                                        [field]="form.bookings.bookable_hours.start"
                                        [options]="BOOKABLE_HOUR_START"
                                    />
                                    <settings-select
                                        field_id="workplace-settings-form-modal-bookings-bookable-end"
                                        label="Bookable End"
                                        [field]="form.bookings.bookable_hours.end"
                                        [options]="BOOKABLE_HOUR_END"
                                    />
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
                                    <settings-select
                                        field_id="workplace-settings-form-modal-bookings-all-day-start"
                                        label="All Day Start"
                                        [field]="form.bookings.all_day_period.start"
                                        [options]="BLOCK_START"
                                        placeholder="None"
                                    />
                                    <settings-select
                                        field_id="workplace-settings-form-modal-bookings-all-day-end"
                                        label="All Day End"
                                        [field]="form.bookings.all_day_period.end"
                                        [options]="BLOCK_END"
                                        placeholder="None"
                                    />
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
                            aria-label="PlaceOS Maps"
                            [attr.aria-expanded]="shown_group() === 'explore'"
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
                                <settings-select
                                    field_id="workplace-settings-form-modal-disable"
                                    label="Disabled Features"
                                    [field]="form.explore.disable"
                                    [options]="EXPLORE_FEATURE"
                                    placeholder="No disabled features"
                                    multiple
                                />
                                <div class="flex items-center space-x-4">
                                    <settings-select
                                        class="flex-1"
                                        field_id="workplace-settings-form-modal-disable-actions"
                                        label="Disabled Feature Actions"
                                        [field]="form.explore.disable_actions"
                                        [options]="EXPLORE_FEATURE"
                                        placeholder="No disabled actions"
                                        multiple
                                    />
                                    <settings-select
                                        class="flex-1"
                                        field_id="workplace-settings-form-modal-available-period-3"
                                        label="Disabled Feature Labels"
                                        [field]="form.explore.disable_labels"
                                        [options]="EXPLORE_FEATURE"
                                        placeholder="No disabled labels"
                                        multiple
                                    />
                                </div>
                                <div class="flex items-center space-x-4">
                                    <settings-select
                                        class="flex-1"
                                        field_id="workplace-settings-form-modal-disable-features"
                                        label="Disabled Feature Displays"
                                        [field]="form.explore.disable_features"
                                        [options]="EXPLORE_FEATURE"
                                        placeholder="No disabled displays"
                                        multiple
                                    />
                                    <settings-select
                                        class="flex-1"
                                        field_id="workplace-settings-form-modal-disable-styles"
                                        label="Disabled Feature Styles"
                                        [field]="form.explore.disable_styles"
                                        [options]="EXPLORE_FEATURE"
                                        placeholder="No disabled styles"
                                        multiple
                                    />
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
                                                    [attr.aria-label]="
                                                        'COMMON.DELETE' | translate
                                                    "
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
                                    <label for="workplace-settings-form-modal-hide-device-fields" id="workplace-settings-form-modal-hide-device-fields-label">
                                        Hidden Device Fields
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            aria-labelledby="workplace-settings-form-modal-hide-device-fields-label"
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
                            aria-label="Parking Bookings"
                            [attr.aria-expanded]="shown_group() === 'parking'"
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
                                <settings-select
                                    field_id="workplace-settings-form-modal-max-duration-3"
                                    label="Max Duration"
                                    [field]="form.parking.max_duration"
                                    [options]="MAX_DURATION_SHORT"
                                />
                                <settings-select
                                    field_id="workplace-settings-form-modal-available-period-4"
                                    label="Available Period"
                                    [field]="form.parking.available_period"
                                    [options]="AVAILABLE_PERIOD_EXTENDED"
                                    hint="Number of days ahead the user is able to book"
                                />
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
                                >
                                    <settings-select
                                        field_id="workplace-settings-form-modal-parking-bookable-start"
                                        label="Bookable Start"
                                        [field]="form.parking.bookable_hours.start"
                                        [options]="BOOKABLE_HOUR_START"
                                    />
                                    <settings-select
                                        field_id="workplace-settings-form-modal-parking-bookable-end"
                                        label="Bookable End"
                                        [field]="form.parking.bookable_hours.end"
                                        [options]="BOOKABLE_HOUR_END"
                                    />
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
                            aria-label="Locker Bookings"
                            [attr.aria-expanded]="shown_group() === 'lockers'"
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
                                <settings-select
                                    field_id="workplace-settings-form-modal-max-duration-4"
                                    label="Max Duration"
                                    [field]="form.lockers.max_duration"
                                    [options]="MAX_DURATION_SHORT"
                                />
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
                                >
                                    <settings-select
                                        field_id="workplace-settings-form-modal-lockers-bookable-start"
                                        label="Bookable Start"
                                        [field]="form.lockers.bookable_hours.start"
                                        [options]="BOOKABLE_HOUR_START"
                                    />
                                    <settings-select
                                        field_id="workplace-settings-form-modal-lockers-bookable-end"
                                        label="Bookable End"
                                        [field]="form.lockers.bookable_hours.end"
                                        [options]="BOOKABLE_HOUR_END"
                                    />
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
                                        label="Disable date and time selection"
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
      UploadButtonComponent,
      TranslatePipe,
      SettingsSelectComponent,
      SettingsCurrencySelectComponent
    ], styles: ["/* angular:styles/component:css;ca7581e3f527e8cafa49f5d3654b7182593f8c4b756e7d34512a16bfc4e4e137;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/ui/app-settings/workplace-settings-form-modal.component.ts */\nsettings-toggle {\n  width: calc(50% - 1rem);\n  margin: 0.5rem;\n}\n/*# sourceMappingURL=workplace-settings-form-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkplaceSettingsFormModalComponent, { className: "WorkplaceSettingsFormModalComponent", filePath: "apps/concierge/src/app/ui/app-settings/workplace-settings-form-modal.component.ts", lineNumber: 1391 });
})();
export {
  WorkplaceSettingsFormModalComponent
};
//# debugId=ea414a44-cc7e-534d-ba8c-5fd448371ba9
//# sourceMappingURL=workplace-settings-form-modal.component-LWWABTU4.js.map
