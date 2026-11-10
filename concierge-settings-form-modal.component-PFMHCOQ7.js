import {
  SettingsCurrencySelectComponent
} from "./chunk-FTJEEUVP.js";
import {
  AVAILABLE_PERIOD_EXTENDED_OPTIONS,
  AVAILABLE_PERIOD_SHORT_OPTIONS,
  BANNER_TYPE_OPTIONS,
  BLOCK_END_OPTIONS,
  BLOCK_HEIGHT_OPTIONS,
  BLOCK_START_OPTIONS,
  BOOKABLE_HOUR_END_OPTIONS,
  BOOKABLE_HOUR_START_OPTIONS,
  DAY_TIMELINE_VIEW_OPTIONS,
  MAX_DURATION_FULL_OPTIONS,
  SettingsSelectComponent,
  WEEK_START_OPTIONS
} from "./chunk-KUME46RA.js";
import {
  UploadButtonComponent
} from "./chunk-SAYZBXJ2.js";
import {
  LOCKER_BOOKING_FALLBACKS,
  appMetadataKey,
  appSettingsHeading,
  applyAppSettings,
  applyBookingFallbacks,
  loadLayeredAppSettings,
  mergeAppSettings,
  saveAppSettings
} from "./chunk-MLM255N3.js";
import {
  errorText
} from "./chunk-ZK7TEMGJ.js";
import {
  FullscreenModalShellComponent
} from "./chunk-I54UCJRI.js";
import "./chunk-JPCHL3R6.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-ZKTZLORL.js";
import "./chunk-PNPURSUP.js";
import {
  SettingsToggleComponent
} from "./chunk-WPCRKWB7.js";
import "./chunk-Y75V4M7I.js";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from "./chunk-CQXOQ5CV.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-VYHM6UDD.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatHint
} from "./chunk-EW7QYLXJ.js";
import {
  FormField,
  form,
  min
} from "./chunk-3RIVBWTA.js";
import "./chunk-6QAQELLN.js";
import {
  MatOption
} from "./chunk-45QQOFY3.js";
import "./chunk-S3CIVIET.js";
import "./chunk-3CFF632X.js";
import {
  TranslatePipe
} from "./chunk-B7IQ463Q.js";
import {
  IconComponent
} from "./chunk-3FG7YPIO.js";
import "./chunk-ALK6QLUK.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  OrganisationService,
  ɵNgNoValidate
} from "./chunk-RU54IFPK.js";
import {
  SettingsService,
  format,
  notifyError,
  notifySuccess
} from "./chunk-YDOJZJXF.js";
import "./chunk-KOAX2NOP.js";
import "./chunk-UX5PQ32A.js";
import {
  MatRippleModule
} from "./chunk-ZT4WQV5M.js";
import {
  MatRipple
} from "./chunk-EAD6DYEJ.js";
import "./chunk-THGATZR4.js";
import "./chunk-O25RF34I.js";
import "./chunk-IR32ILQ7.js";
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-AQIWUFR7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/concierge/src/environments/settings.ts
var custom_reports = [];
var app = {
  name: "Concierge",
  short_name: "Concierge",
  logo_light: "assets/logo-light.svg",
  logo_dark: "assets/logo-dark.svg",
  default_route: "/book/rooms",
  currency: "USD",
  staff_search_exclude_guests: true,
  use_24_hour_time: false,
  analytics: {
    enabled: true,
    tracking_id: ""
  },
  admin_group: "concierge_admins",
  features: [
    "spaces",
    "zones",
    "maps",
    "desks",
    "parking",
    "visitors",
    "assets",
    "internal-users",
    "points",
    "surveys",
    "catering",
    "events",
    "booking-report",
    "attendance-report",
    "contact-tracing-report",
    "email-templates"
  ],
  has_uploads: true,
  bulk_actions: false,
  custom_reports,
  desks: {
    use_assets: false,
    can_book_for_others: true,
    max_assigned_count: 0,
    hide_user_list_download: false
  },
  bookings: { can_book_for_others: true, use_building_timezone: false },
  visitors: { all_visitors_action_window: 15, allow_pass_number: true },
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

// apps/concierge/src/app/ui/app-settings/concierge-settings-form-modal.component.ts
var _c0 = () => ({ standalone: true });
var _forTrack0 = ($index, $item) => $item.value;
function ConciergeSettingsFormModalComponent_For_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 50);
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
function ConciergeSettingsFormModalComponent_Conditional_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 78);
    \u0275\u0275text(2, " Group Events Calendar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 11);
    \u0275\u0275element(4, "input", 79);
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
function ConciergeSettingsFormModalComponent_Conditional_140_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 71)(1, "h3", 45);
    \u0275\u0275text(2, " Reports ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "settings-toggle", 80);
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
function ConciergeSettingsFormModalComponent_Conditional_141_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 72)(1, "h3", 45);
    \u0275\u0275text(2, " Room Bookings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 81);
    \u0275\u0275listener("click", function ConciergeSettingsFormModalComponent_Conditional_141_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleGroup("spaces"));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 82)(7, "div", 83);
    \u0275\u0275element(8, "settings-select", 84);
    \u0275\u0275elementStart(9, "div", 46);
    \u0275\u0275element(10, "settings-select", 85)(11, "settings-select", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 46);
    \u0275\u0275element(13, "settings-select", 87)(14, "settings-select", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "settings-select", 89);
    \u0275\u0275elementStart(16, "div", 90);
    \u0275\u0275element(17, "settings-select", 91)(18, "settings-select", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 68);
    \u0275\u0275element(20, "settings-toggle", 93);
    \u0275\u0275controlCreate();
    \u0275\u0275element(21, "settings-toggle", 94);
    \u0275\u0275controlCreate();
    \u0275\u0275element(22, "settings-toggle", 95);
    \u0275\u0275controlCreate();
    \u0275\u0275element(23, "settings-toggle", 96);
    \u0275\u0275controlCreate();
    \u0275\u0275element(24, "settings-toggle", 97);
    \u0275\u0275controlCreate();
    \u0275\u0275element(25, "settings-toggle", 98);
    \u0275\u0275controlCreate();
    \u0275\u0275element(26, "settings-toggle", 99);
    \u0275\u0275controlCreate();
    \u0275\u0275element(27, "settings-toggle", 100);
    \u0275\u0275controlCreate();
    \u0275\u0275element(28, "settings-toggle", 101);
    \u0275\u0275controlCreate();
    \u0275\u0275element(29, "settings-toggle", 102);
    \u0275\u0275controlCreate();
    \u0275\u0275element(30, "settings-toggle", 103);
    \u0275\u0275controlCreate();
    \u0275\u0275element(31, "settings-toggle", 104);
    \u0275\u0275controlCreate();
    \u0275\u0275element(32, "settings-toggle", 105);
    \u0275\u0275controlCreate();
    \u0275\u0275element(33, "settings-toggle", 106);
    \u0275\u0275controlCreate();
    \u0275\u0275element(34, "settings-toggle", 107);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 90);
    \u0275\u0275element(36, "settings-select", 108)(37, "settings-select", 109);
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
    \u0275\u0275property("field", ctx_r1.form.events.day_timeline_view)("options", ctx_r1.DAY_TIMELINE_VIEW);
    \u0275\u0275advance(2);
    \u0275\u0275property("field", ctx_r1.form.events.block_start)("options", ctx_r1.BLOCK_START);
    \u0275\u0275advance();
    \u0275\u0275property("field", ctx_r1.form.events.block_end)("options", ctx_r1.BLOCK_END);
    \u0275\u0275advance(2);
    \u0275\u0275property("field", ctx_r1.form.events.block_height)("options", ctx_r1.BLOCK_HEIGHT);
    \u0275\u0275advance();
    \u0275\u0275property("field", ctx_r1.form.events.max_duration)("options", ctx_r1.MAX_DURATION_FULL);
    \u0275\u0275advance();
    \u0275\u0275property("field", ctx_r1.form.events.available_period)("options", ctx_r1.AVAILABLE_PERIOD_SHORT);
    \u0275\u0275advance(2);
    \u0275\u0275property("field", ctx_r1.form.events.bookable_hours.start)("options", ctx_r1.BOOKABLE_HOUR_START);
    \u0275\u0275advance();
    \u0275\u0275property("field", ctx_r1.form.events.bookable_hours.end)("options", ctx_r1.BOOKABLE_HOUR_END);
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r1.form.events.allow_all_day);
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
    \u0275\u0275property("formField", ctx_r1.form.events.allow_international);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.events.allow_attendee_internal_or_external);
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
    \u0275\u0275advance(2);
    \u0275\u0275property("field", ctx_r1.form.events.all_day_period.start)("options", ctx_r1.BLOCK_START);
    \u0275\u0275advance();
    \u0275\u0275property("field", ctx_r1.form.events.all_day_period.end)("options", ctx_r1.BLOCK_END);
  }
}
function ConciergeSettingsFormModalComponent_Conditional_142_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 73)(1, "h3", 45);
    \u0275\u0275text(2, " Desk Assignments ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 110);
    \u0275\u0275listener("click", function ConciergeSettingsFormModalComponent_Conditional_142_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleGroup("desks"));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 82)(7, "div", 83)(8, "div")(9, "label", 111);
    \u0275\u0275text(10, " Max Assigned Desks Per User ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 11);
    \u0275\u0275element(12, "input", 112);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(13, "mat-hint");
    \u0275\u0275text(14, " Maximum number of desk assignments a user can have at one time. Set to 0 for unlimited. ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-expanded", ctx_r1.shown_group() === "desks");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.shown_group() === "desks" ? "chevron_left" : "keyboard_arrow_down");
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx_r1.shown_group() === "desks");
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r1.form.desks.max_assigned_count);
    \u0275\u0275control();
  }
}
function ConciergeSettingsFormModalComponent_Conditional_143_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 74)(1, "h3", 45);
    \u0275\u0275text(2, " Visitors ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 113);
    \u0275\u0275listener("click", function ConciergeSettingsFormModalComponent_Conditional_143_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleGroup("visitors"));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 82)(7, "div", 83)(8, "div", 90);
    \u0275\u0275element(9, "settings-select", 114)(10, "settings-select", 115);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "label", 116);
    \u0275\u0275text(12, "Hide Guest List fields");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-form-field", 11)(14, "mat-select", 117)(15, "mat-option", 118);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "mat-option", 119);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-option", 120);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-option", 121);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "mat-option", 122);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "mat-option", 123);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "mat-option", 124);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(36, "mat-hint");
    \u0275\u0275text(37, " Hide selected columns on the visitor listing table ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "label", 125);
    \u0275\u0275text(39, " Check-in/out all visitors action window ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "mat-form-field", 11);
    \u0275\u0275element(41, "input", 126);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(42, "mat-hint");
    \u0275\u0275text(43, " Minutes before and after the booking time to show all visitor check-in/out actions ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 68);
    \u0275\u0275element(45, "settings-toggle", 127);
    \u0275\u0275controlCreate();
    \u0275\u0275element(46, "settings-toggle", 128);
    \u0275\u0275controlCreate();
    \u0275\u0275element(47, "settings-toggle", 129);
    \u0275\u0275controlCreate();
    \u0275\u0275element(48, "settings-toggle", 130);
    \u0275\u0275controlCreate();
    \u0275\u0275element(49, "settings-toggle", 131);
    \u0275\u0275controlCreate();
    \u0275\u0275element(50, "settings-toggle", 132);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-expanded", ctx_r1.shown_group() === "visitors");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.shown_group() === "visitors" ? "chevron_left" : "keyboard_arrow_down");
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx_r1.shown_group() === "visitors");
    \u0275\u0275advance(3);
    \u0275\u0275property("field", ctx_r1.form.visitors.bookable_hours.start)("options", ctx_r1.BOOKABLE_HOUR_START);
    \u0275\u0275advance();
    \u0275\u0275property("field", ctx_r1.form.visitors.bookable_hours.end)("options", ctx_r1.BOOKABLE_HOUR_END);
    \u0275\u0275advance(4);
    \u0275\u0275property("formField", ctx_r1.form.visitors.hide_fields);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 23, "COMMON.CHECKED_IN_AT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 25, "COMMON.CHECKED_OUT_AT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 27, "COMMON.CHECKED_IN"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 29, "COMMON.TIME"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 31, "FORM.HOST"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 33, "COMMON.STATE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 35, "FORM.NOTES"), " ");
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
    \u0275\u0275property("formField", ctx_r1.form.visitors.allow_visitor_internal_or_external);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.visitors.show_calendar_links);
    \u0275\u0275control();
  }
}
function ConciergeSettingsFormModalComponent_Conditional_144_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 75)(1, "h3", 45);
    \u0275\u0275text(2, " PlaceOS Bookings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 133);
    \u0275\u0275listener("click", function ConciergeSettingsFormModalComponent_Conditional_144_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleGroup("bookings"));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 82)(7, "div", 83);
    \u0275\u0275element(8, "settings-select", 134)(9, "settings-select", 135);
    \u0275\u0275elementStart(10, "div", 90);
    \u0275\u0275element(11, "settings-select", 136)(12, "settings-select", 137);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 68);
    \u0275\u0275element(14, "settings-toggle", 93);
    \u0275\u0275controlCreate();
    \u0275\u0275element(15, "settings-toggle", 105);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 90);
    \u0275\u0275element(17, "settings-select", 138)(18, "settings-select", 139);
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
    \u0275\u0275advance(2);
    \u0275\u0275property("field", ctx_r1.form.bookings.available_period)("options", ctx_r1.AVAILABLE_PERIOD_EXTENDED);
    \u0275\u0275advance();
    \u0275\u0275property("field", ctx_r1.form.bookings.max_duration)("options", ctx_r1.MAX_DURATION_FULL);
    \u0275\u0275advance(2);
    \u0275\u0275property("field", ctx_r1.form.bookings.bookable_hours.start)("options", ctx_r1.BOOKABLE_HOUR_START);
    \u0275\u0275advance();
    \u0275\u0275property("field", ctx_r1.form.bookings.bookable_hours.end)("options", ctx_r1.BOOKABLE_HOUR_END);
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r1.form.bookings.allow_all_day);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.bookings.use_building_timezone);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("field", ctx_r1.form.bookings.all_day_period.start)("options", ctx_r1.BLOCK_START);
    \u0275\u0275advance();
    \u0275\u0275property("field", ctx_r1.form.bookings.all_day_period.end)("options", ctx_r1.BLOCK_END);
  }
}
function ConciergeSettingsFormModalComponent_Conditional_145_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 76)(1, "h3", 45);
    \u0275\u0275text(2, " Parking ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 140);
    \u0275\u0275listener("click", function ConciergeSettingsFormModalComponent_Conditional_145_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleGroup("parking"));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 82)(7, "div", 83);
    \u0275\u0275element(8, "settings-select", 141)(9, "settings-select", 142);
    \u0275\u0275elementStart(10, "div")(11, "label", 143);
    \u0275\u0275text(12, " Max Assigned Parking Spaces Per User ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-form-field", 11);
    \u0275\u0275element(14, "input", 144);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(15, "mat-hint");
    \u0275\u0275text(16, " Maximum number of parking space assignments a user can have at one time. Set to 0 for unlimited. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 90);
    \u0275\u0275element(18, "settings-select", 145)(19, "settings-select", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 68);
    \u0275\u0275element(21, "settings-toggle", 93);
    \u0275\u0275controlCreate();
    \u0275\u0275element(22, "settings-toggle", 147);
    \u0275\u0275controlCreate();
    \u0275\u0275element(23, "settings-toggle", 148);
    \u0275\u0275controlCreate();
    \u0275\u0275element(24, "settings-toggle", 149);
    \u0275\u0275controlCreate();
    \u0275\u0275element(25, "settings-toggle", 150);
    \u0275\u0275controlCreate();
    \u0275\u0275element(26, "settings-toggle", 151);
    \u0275\u0275controlCreate();
    \u0275\u0275element(27, "settings-toggle", 152);
    \u0275\u0275controlCreate();
    \u0275\u0275element(28, "settings-toggle", 153);
    \u0275\u0275controlCreate();
    \u0275\u0275element(29, "settings-toggle", 154);
    \u0275\u0275controlCreate();
    \u0275\u0275element(30, "settings-toggle", 155);
    \u0275\u0275controlCreate();
    \u0275\u0275element(31, "settings-toggle", 156);
    \u0275\u0275controlCreate();
    \u0275\u0275element(32, "settings-toggle", 157);
    \u0275\u0275controlCreate();
    \u0275\u0275element(33, "settings-toggle", 158);
    \u0275\u0275controlCreate();
    \u0275\u0275element(34, "settings-toggle", 159);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275element(36, "settings-toggle", 160);
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
    \u0275\u0275property("field", ctx_r1.form.parking.available_period)("options", ctx_r1.AVAILABLE_PERIOD_EXTENDED);
    \u0275\u0275advance();
    \u0275\u0275property("field", ctx_r1.form.parking.max_duration)("options", ctx_r1.MAX_DURATION_FULL);
    \u0275\u0275advance(5);
    \u0275\u0275property("formField", ctx_r1.form.parking.max_assigned_count);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("field", ctx_r1.form.parking.bookable_hours.start)("options", ctx_r1.BOOKABLE_HOUR_START);
    \u0275\u0275advance();
    \u0275\u0275property("field", ctx_r1.form.parking.bookable_hours.end)("options", ctx_r1.BOOKABLE_HOUR_END);
    \u0275\u0275advance(2);
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
    \u0275\u0275property("label", \u0275\u0275pipeBind1(35, 29, "APP.CONCIERGE.PARKING_ALLOW_DELETING"))("formField", ctx_r1.form.parking.allow_deleting);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r1.form.parking.assign_space_on_approve);
    \u0275\u0275control();
  }
}
function ConciergeSettingsFormModalComponent_Conditional_146_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 77)(1, "h3", 45);
    \u0275\u0275text(2, " Locker Bookings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 161);
    \u0275\u0275listener("click", function ConciergeSettingsFormModalComponent_Conditional_146_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleGroup("lockers"));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 82)(7, "div", 83);
    \u0275\u0275element(8, "settings-select", 162)(9, "settings-select", 163);
    \u0275\u0275elementStart(10, "div", 90);
    \u0275\u0275element(11, "settings-select", 164)(12, "settings-select", 165);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 68);
    \u0275\u0275element(14, "settings-toggle", 93);
    \u0275\u0275controlCreate();
    \u0275\u0275element(15, "settings-toggle", 166);
    \u0275\u0275controlCreate();
    \u0275\u0275element(16, "settings-toggle", 167);
    \u0275\u0275controlCreate();
    \u0275\u0275element(17, "settings-toggle", 168);
    \u0275\u0275controlCreate();
    \u0275\u0275element(18, "settings-toggle", 169);
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
    \u0275\u0275property("field", ctx_r1.form.lockers.available_period)("options", ctx_r1.AVAILABLE_PERIOD_EXTENDED);
    \u0275\u0275advance();
    \u0275\u0275property("field", ctx_r1.form.lockers.max_duration)("options", ctx_r1.MAX_DURATION_FULL);
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
    this._layers = { inherited: {}, stored: {} };
    this._initial = {};
    this.zone = this._data.zone;
    this.heading = appSettingsHeading("Concierge Settings", this.zone);
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
    this.settings_key = appMetadataKey(this._settings, "concierge");
    this.model = signal(
      {
        logo_light: "",
        logo_dark: "",
        features: [],
        banner: {},
        default_route: "",
        use_24_hour_time: false,
        week_start: 0,
        currency: "USD",
        use_region: false,
        group_events_calendar: "",
        kiosk_url_path: "",
        short_url_public_key: "",
        control_path: "",
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
          allow_setup_breakdown: false,
          has_assets: false,
          hide_notes: false,
          hide_attendees: false,
          allow_externals: false,
          allow_international: false,
          allow_attendee_internal_or_external: false,
          strict_capacity_check: false,
          allow_multiday: false,
          use_building_timezone: false,
          day_timeline_view: "inverted",
          block_start: 7,
          block_end: 19,
          block_height: 5,
          max_duration: 480,
          // Unset means no limit
          available_period: null,
          can_book_for_others: false,
          can_book_for_anyone: false,
          allow_visibility: false,
          allow_edit: false
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
          allow_pass_number: true,
          allow_printing_label: true,
          allow_international: false,
          allow_visitor_internal_or_external: false,
          show_calendar_links: false,
          all_visitors_action_window: 15,
          hide_fields: []
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
          use_building_timezone: false,
          // Unset so parking and lockers keep their own fallbacks
          available_period: null,
          max_duration: 480
        },
        reports: {
          attendance_include_weekends: false
        },
        parking: {
          allow_all_day: false,
          bookable_hours: {
            start: null,
            end: null
          },
          show_users: false,
          show_status_details: true,
          disable_styles: false,
          disable_bookings: false,
          show_requests: false,
          show_waitlist: false,
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
          available_period: 90,
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
      await saveAppSettings(this.zone.id, this.settings_key, "Concierge", this._layers, this._initial, this.model());
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
  static {
    this.\u0275fac = function ConciergeSettingsFormModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConciergeSettingsFormModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConciergeSettingsFormModalComponent, selectors: [["concierge-settings-form-modal"]], decls: 147, vars: 34, consts: [[3, "confirm", "heading", "loading"], [1, "flex", "flex-col", "space-y-8", "pb-4"], ["general", "", 1, "bg-base-100", "space-y-2", "rounded-sm"], ["for", "concierge-settings-form-modal-logo_light"], [1, "mb-4", "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["id", "concierge-settings-form-modal-logo_light", "matInput", "", 3, "formField"], ["ngModel", "", 3, "ngModelChange", "ngModelOptions"], ["for", "concierge-settings-form-modal-logo_dark"], ["id", "concierge-settings-form-modal-logo_dark", "matInput", "", 3, "formField"], ["for", "concierge-settings-form-modal-features", "id", "concierge-settings-form-modal-features-label"], ["appearance", "outline", 1, "w-full"], ["aria-labelledby", "concierge-settings-form-modal-features-label", "multiple", "", 3, "formField"], ["value", "zones"], ["value", "maps"], ["value", "spaces"], ["value", "assets"], ["value", "desks"], ["value", "lockers"], ["value", "parking"], ["value", "parking-bookings"], ["value", "parking-manage"], ["value", "visitors"], ["value", "visitor-rules"], ["value", "internal-users"], ["value", "surveys"], ["value", "catering"], ["value", "points-of-interest"], ["value", "url-management"], ["value", "events"], ["value", "points"], ["value", "emergency-contacts"], ["value", "email-templates"], ["value", "deals-n-offers"], ["value", "attendance-report"], ["value", "booking-report"], ["value", "desk-report"], ["value", "catering-report"], ["value", "parking-report"], ["value", "lockers-report"], ["value", "contact-tracing-report"], ["value", "assets-report"], ["value", "visitors-report"], ["value", "user-report"], [1, "border-base-300", "relative", "rounded-sm", "border", "px-4", "pt-4", "pb-2"], [1, "bg-base-100", "absolute", "top-0", "left-4", "-translate-y-1/2", "rounded-sm", "px-2", "py-1", "font-medium"], [1, "flex", "items-center", "space-x-4"], [1, "flex-1"], ["for", "concierge-settings-form-modal-banner-type", "id", "concierge-settings-form-modal-banner-type-label"], ["aria-labelledby", "concierge-settings-form-modal-banner-type-label", "name", "banner-type", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], ["for", "concierge-settings-form-modal-banner-type-2"], ["id", "concierge-settings-form-modal-banner-type-2", "matInput", "", "placeholder", "Banner Message", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["for", "concierge-settings-form-modal-default-route"], ["id", "concierge-settings-form-modal-default-route", "matInput", "", "placeholder", "/book/rooms/new", 3, "formField"], [1, "grid", "gap-4", "md:grid-cols-2"], ["for", "concierge-settings-form-modal-workplace-url-path"], ["id", "concierge-settings-form-modal-workplace-url-path", "matInput", "", "placeholder", "/workplace", 3, "formField"], ["for", "concierge-settings-form-modal-public-url-path"], ["id", "concierge-settings-form-modal-public-url-path", "matInput", "", "placeholder", "/public", 3, "formField"], ["for", "concierge-settings-form-modal-kiosk-url-path"], ["id", "concierge-settings-form-modal-kiosk-url-path", "matInput", "", "placeholder", "/map-kiosk", 3, "formField"], ["for", "concierge-settings-form-modal-control-path"], ["id", "concierge-settings-form-modal-control-path", "matInput", "", "placeholder", "/control", 3, "formField"], ["for", "concierge-settings-form-modal-short-url-public-key"], ["id", "concierge-settings-form-modal-short-url-public-key", "matInput", "", "placeholder", "your-short-url-public-key", 3, "formField"], ["field_id", "concierge-settings-form-modal-week-start", "label", "Week Start", "placeholder", "Sunday", "hint", "Day of the week to show initially on various calendars", 3, "field", "options"], ["field_id", "concierge-settings-form-modal-currency", 3, "field"], [1, "-mx-2", "flex", "flex-wrap", "items-center"], ["label", "Use 24 hour time", 3, "formField"], ["label", "Use region over building", 3, "formField"], ["reports", "", "id", "feature-reports", 1, "border-base-300", "relative", "rounded-sm", "border", "px-2", "pt-4", "pb-2"], ["spaces", "", "id", "feature-spaces", 1, "border-base-300", "relative", "rounded-sm", "border"], ["desks", "", "id", "feature-desks", 1, "border-base-300", "relative", "rounded-sm", "border"], ["visitors", "", "id", "feature-visitors", 1, "border-base-300", "relative", "rounded-sm", "border"], ["bookings", "", "id", "feature-bookings", 1, "border-base-300", "relative", "rounded-sm", "border"], ["parking", "", "id", "feature-parking", 1, "border-base-300", "relative", "rounded-sm", "border"], ["lockers", "", "id", "feature-lockers", 1, "border-base-300", "relative", "rounded-sm", "border"], ["for", "concierge-settings-form-modal-group-events-calendar"], ["id", "concierge-settings-form-modal-group-events-calendar", "matInput", "", "placeholder", "shared.events@calendar.acme.tech", 3, "formField"], ["label", "Include weekends in site attendance averages", 3, "formField"], ["icon", "", "matRipple", "", "aria-label", "Room Bookings", 1, "bg-base-100", "absolute", "top-0", "right-4", "-translate-y-1/2", 3, "click"], ["collapsible", ""], [1, "content", "px-4", "pt-4", "pb-2"], ["field_id", "concierge-settings-form-modal-day-timeline-view", "label", "Day Timeline Default View", "hint", "Default day timeline layout for room bookings", 1, "flex-1", 3, "field", "options"], ["field_id", "concierge-settings-form-modal-block-start", "label", "Block Start Time", "placeholder", "12AM (Midnight)", "hint", "Start time of dayview blocks", 1, "flex-1", 3, "field", "options"], ["field_id", "concierge-settings-form-modal-block-end", "label", "Block End Time", "placeholder", "12AM (Midnight)", "hint", "End time of dayview blocks", 1, "flex-1", 3, "field", "options"], ["field_id", "concierge-settings-form-modal-block-height", "label", "Block Height", "hint", "Height of 1 hour in dayview", 1, "flex-1", 3, "field", "options"], ["field_id", "concierge-settings-form-modal-max-duration", "label", "Max Duration", "hint", "Max duration for single day bookings", 1, "flex-1", 3, "field", "options"], ["field_id", "concierge-settings-form-modal-available-period", "label", "Available Period", "placeholder", "No limit", "null_option", "No limit", "hint", "Number of days ahead users can create group events", 3, "field", "options"], [1, "grid", "grid-cols-1", "gap-4", "md:grid-cols-2"], ["field_id", "concierge-settings-form-modal-events-bookable-start", "label", "Bookable Start", 3, "field", "options"], ["field_id", "concierge-settings-form-modal-events-bookable-end", "label", "Bookable End", 3, "field", "options"], ["label", "Allow all day bookings", 3, "formField"], ["label", "Allow editing setup/breakdown times", 3, "formField"], ["label", "Allow booking for other users", 3, "formField"], ["label", "Allow booking for any other users", 3, "formField"], ["label", "Allow booking with assets", 3, "formField"], ["label", "Hide notes field when booking", 3, "formField"], ["label", "Hide attendees field when booking", 3, "formField"], ["label", "Allow booking for external users", 3, "formField"], ["label", "Allow international attendees", "info", "Show a checkbox on the event booking form that flags each attendee as international", 3, "formField"], ["label", "Allow attendees to be marked internal or external", "info", "Show a control on the event booking form that marks each attendee as internal (default) or external", 3, "formField"], ["label", "Enforce capacity for rooms", 3, "formField"], ["label", "Allow booking for multiple days", 3, "formField"], ["label", "Display times with building timezone", 3, "formField"], ["label", "Allow Visibility options", 3, "formField"], ["label", "Allow editing bookings", 3, "formField"], ["field_id", "concierge-settings-form-modal-events-all-day-start", "label", "All Day Start", "placeholder", "None", 3, "field", "options"], ["field_id", "concierge-settings-form-modal-events-all-day-end", "label", "All Day End", "placeholder", "None", 3, "field", "options"], ["icon", "", "matRipple", "", "aria-label", "Desk Assignments", 1, "bg-base-100", "absolute", "top-0", "right-4", "-translate-y-1/2", 3, "click"], ["for", "concierge-settings-form-modal-desks-max-assigned-count"], ["id", "concierge-settings-form-modal-desks-max-assigned-count", "matInput", "", "type", "number", 3, "formField"], ["icon", "", "matRipple", "", "aria-label", "Visitors", 1, "bg-base-100", "absolute", "top-0", "right-4", "-translate-y-1/2", 3, "click"], ["field_id", "concierge-settings-form-modal-visitors-bookable-start", "label", "Bookable Start", "placeholder", "None", 3, "field", "options"], ["field_id", "concierge-settings-form-modal-visitors-bookable-end", "label", "Bookable End", "placeholder", "None", 3, "field", "options"], ["for", "concierge-settings-form-modal-hide-fields", "id", "concierge-settings-form-modal-hide-fields-label"], ["aria-labelledby", "concierge-settings-form-modal-hide-fields-label", "placeholder", "No fields selected", "multiple", "", 3, "formField"], ["value", "checked_in_at"], ["value", "checked_out_at"], ["value", "state"], ["value", "date"], ["value", "user_name"], ["value", "status"], ["value", "notes"], ["for", "concierge-settings-form-modal-all-visitors-action-window"], ["id", "concierge-settings-form-modal-all-visitors-action-window", "matInput", "", "type", "number", 3, "formField"], ["label", "Allow booking parking for visitors", 3, "formField"], ["label", "Allow setting pass number for visitors", 3, "formField"], ["label", "Allow printing visitor labels", 3, "formField"], ["label", "Allow international flag for visitors", 3, "formField"], ["label", "Allow visitors to be marked internal or external", 3, "formField"], ["label", "Show calendar links after booking", 3, "formField"], ["icon", "", "matRipple", "", "aria-label", "PlaceOS Bookings", 1, "bg-base-100", "absolute", "top-0", "right-4", "-translate-y-1/2", 3, "click"], ["field_id", "concierge-settings-form-modal-available-period-2", "label", "Available Period", "placeholder", "Not set", "null_option", "Not set", "hint", "Number of days ahead the user is able to book. Parking and lockers use this when their own period is not set", 3, "field", "options"], ["field_id", "concierge-settings-form-modal-max-duration-2", "label", "Max Duration", "hint", "Max duration for single day bookings", 3, "field", "options"], ["field_id", "concierge-settings-form-modal-bookings-bookable-start", "label", "Bookable Start", 3, "field", "options"], ["field_id", "concierge-settings-form-modal-bookings-bookable-end", "label", "Bookable End", 3, "field", "options"], ["field_id", "concierge-settings-form-modal-bookings-all-day-start", "label", "All Day Start", 3, "field", "options"], ["field_id", "concierge-settings-form-modal-bookings-all-day-end", "label", "All Day End", 3, "field", "options"], ["icon", "", "matRipple", "", "aria-label", "Parking", 1, "bg-base-100", "absolute", "top-0", "right-4", "-translate-y-1/2", 3, "click"], ["field_id", "concierge-settings-form-modal-available-period-3", "label", "Available Period", "hint", "Number of days ahead the user is able to book", 3, "field", "options"], ["field_id", "concierge-settings-form-modal-max-duration-3", "label", "Max Duration", "hint", "Max duration for single day bookings", 3, "field", "options"], ["for", "concierge-settings-form-modal-parking-max-assigned-count"], ["id", "concierge-settings-form-modal-parking-max-assigned-count", "matInput", "", "type", "number", 3, "formField"], ["field_id", "concierge-settings-form-modal-parking-bookable-start", "label", "Bookable Start", 3, "field", "options"], ["field_id", "concierge-settings-form-modal-parking-bookable-end", "label", "Bookable End", 3, "field", "options"], ["label", "Show assigned users on parking map", 3, "formField"], ["label", "Show parking status details on map", 3, "formField"], ["label", "Disable parking map styles", 3, "formField"], ["label", "Disable reservations", 3, "formField"], ["label", "Show booking requests", 3, "formField"], ["label", "Show waitlisted status and filter", 3, "formField"], ["label", "Always hide bay number column", 3, "formField"], ["label", "Hide level selector on booking list", 3, "formField"], ["label", "Hide user tab", 3, "formField"], ["label", "Hide vehicle tab", 3, "formField"], ["label", "Hide user and vehicle tabs", 3, "formField"], ["label", "Hide assign space action", 3, "formField"], [3, "label", "formField"], ["label", "Assign a space when approving requests", 3, "formField"], ["icon", "", "matRipple", "", "aria-label", "Locker Bookings", 1, "bg-base-100", "absolute", "top-0", "right-4", "-translate-y-1/2", 3, "click"], ["field_id", "concierge-settings-form-modal-available-period-4", "label", "Available Period", "hint", "Number of days ahead the user is able to book", 3, "field", "options"], ["field_id", "concierge-settings-form-modal-max-duration-4", "label", "Max Duration", 3, "field", "options"], ["field_id", "concierge-settings-form-modal-lockers-bookable-start", "label", "Bookable Start", 3, "field", "options"], ["field_id", "concierge-settings-form-modal-lockers-bookable-end", "label", "Bookable End", 3, "field", "options"], ["label", "Default bookings to all day", 3, "formField"], ["label", "Hide End time option", 3, "formField"], ["label", "Disable date and time selection", 3, "formField"], ["label", "Disable start time option", 3, "formField"]], template: function ConciergeSettingsFormModalComponent_Template(rf, ctx) {
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
        \u0275\u0275element(15, "input", 9);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "upload-button", 7);
        \u0275\u0275listener("ngModelChange", function ConciergeSettingsFormModalComponent_Template_upload_button_ngModelChange_16_listener($event) {
          return ctx.model.update((m) => __spreadProps(__spreadValues({}, m), { logo_dark: $event }));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div")(18, "label", 10);
        \u0275\u0275text(19, "Features");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "mat-form-field", 11)(21, "mat-select", 12)(22, "mat-option", 13);
        \u0275\u0275text(23, " Zones ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "mat-option", 14);
        \u0275\u0275text(25, " Maps ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "mat-option", 15);
        \u0275\u0275text(27, " Rooms ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "mat-option", 16);
        \u0275\u0275text(29, "Assets");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "mat-option", 17);
        \u0275\u0275text(31, "Desks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "mat-option", 18);
        \u0275\u0275text(33, " Lockers ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "mat-option", 19);
        \u0275\u0275text(35, "Parking");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "mat-option", 20);
        \u0275\u0275text(37, "Parking Bookings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "mat-option", 21);
        \u0275\u0275text(39, "Parking Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "mat-option", 22);
        \u0275\u0275text(41, " Visitors ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "mat-option", 23);
        \u0275\u0275text(43, " Visitor Rules ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "mat-option", 24);
        \u0275\u0275text(45, " User Directory ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "mat-option", 25);
        \u0275\u0275text(47, " Surveys ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "mat-option", 26);
        \u0275\u0275text(49, " Catering ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "mat-option", 27);
        \u0275\u0275text(51, " Points of Interest ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "mat-option", 28);
        \u0275\u0275text(53, " URL Management ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "mat-option", 29);
        \u0275\u0275text(55, " Group Events ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "mat-option", 30);
        \u0275\u0275text(57, " Points ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "mat-option", 31);
        \u0275\u0275text(59, " Emergency Contacts ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "mat-option", 32);
        \u0275\u0275text(61, " Email Templates ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "mat-option", 33);
        \u0275\u0275text(63, " Deals & Offers ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "mat-option", 34);
        \u0275\u0275text(65, " Site Attendance Report ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "mat-option", 35);
        \u0275\u0275text(67, " Room Report ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "mat-option", 36);
        \u0275\u0275text(69, " Desk Report ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "mat-option", 37);
        \u0275\u0275text(71, " Catering Report ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "mat-option", 38);
        \u0275\u0275text(73, " Parking Report ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "mat-option", 39);
        \u0275\u0275text(75, " Lockers Report ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "mat-option", 40);
        \u0275\u0275text(77, " Contact Tracing Report ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "mat-option", 41);
        \u0275\u0275text(79, " Assets Report ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "mat-option", 42);
        \u0275\u0275text(81, " Visitors Report ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "mat-option", 43);
        \u0275\u0275text(83, " User Report ");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(84, "div", 44)(85, "h3", 45);
        \u0275\u0275text(86, " Banner ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "div", 46)(88, "div", 47)(89, "label", 48);
        \u0275\u0275text(90, "Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "mat-form-field", 11)(92, "mat-select", 49);
        \u0275\u0275listener("ngModelChange", function ConciergeSettingsFormModalComponent_Template_mat_select_ngModelChange_92_listener($event) {
          return ctx.model.update((m) => __spreadProps(__spreadValues({}, m), { banner: { id: ctx.date_string, content: m.banner?.content || "", type: $event } }));
        });
        \u0275\u0275repeaterCreate(93, ConciergeSettingsFormModalComponent_For_94_Template, 2, 2, "mat-option", 50, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(95, "div", 47)(96, "label", 51);
        \u0275\u0275text(97, "Message");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "mat-form-field", 11)(99, "input", 52);
        \u0275\u0275listener("ngModelChange", function ConciergeSettingsFormModalComponent_Template_input_ngModelChange_99_listener($event) {
          return ctx.model.update((m) => __spreadProps(__spreadValues({}, m), { banner: { id: ctx.date_string, type: m.banner?.type || "", content: $event } }));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(100, "div")(101, "label", 53);
        \u0275\u0275text(102, "Default Route");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "mat-form-field", 11);
        \u0275\u0275element(104, "input", 54);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(105, "mat-hint");
        \u0275\u0275text(106, " Main page of the application ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(107, ConciergeSettingsFormModalComponent_Conditional_107_Template, 7, 1, "div");
        \u0275\u0275elementStart(108, "div", 55)(109, "div")(110, "label", 56);
        \u0275\u0275text(111, "Workplace URL Path");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "mat-form-field", 11);
        \u0275\u0275element(113, "input", 57);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(114, "div")(115, "label", 58);
        \u0275\u0275text(116, "Public URL Path");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(117, "mat-form-field", 11);
        \u0275\u0275element(118, "input", 59);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(119, "div")(120, "label", 60);
        \u0275\u0275text(121, "Map Kiosk URL Path");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "mat-form-field", 11);
        \u0275\u0275element(123, "input", 61);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(124, "div", 55)(125, "div")(126, "label", 62);
        \u0275\u0275text(127, "Control URL Path");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(128, "mat-form-field", 11);
        \u0275\u0275element(129, "input", 63);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(130, "div")(131, "label", 64);
        \u0275\u0275text(132, "Short URL Public Key");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(133, "mat-form-field", 11);
        \u0275\u0275element(134, "input", 65);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275element(135, "settings-select", 66)(136, "settings-currency-select", 67);
        \u0275\u0275elementStart(137, "div", 68);
        \u0275\u0275element(138, "settings-toggle", 69);
        \u0275\u0275controlCreate();
        \u0275\u0275element(139, "settings-toggle", 70);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(140, ConciergeSettingsFormModalComponent_Conditional_140_Template, 4, 1, "section", 71);
        \u0275\u0275conditionalCreate(141, ConciergeSettingsFormModalComponent_Conditional_141_Template, 38, 39, "section", 72);
        \u0275\u0275conditionalCreate(142, ConciergeSettingsFormModalComponent_Conditional_142_Template, 15, 5, "section", 73);
        \u0275\u0275conditionalCreate(143, ConciergeSettingsFormModalComponent_Conditional_143_Template, 51, 37, "section", 74);
        \u0275\u0275conditionalCreate(144, ConciergeSettingsFormModalComponent_Conditional_144_Template, 19, 18, "section", 75);
        \u0275\u0275conditionalCreate(145, ConciergeSettingsFormModalComponent_Conditional_145_Template, 37, 31, "section", 76);
        \u0275\u0275conditionalCreate(146, ConciergeSettingsFormModalComponent_Conditional_146_Template, 19, 17, "section", 77);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", ctx.heading)("loading", ctx.loading());
        \u0275\u0275advance(8);
        \u0275\u0275property("formField", ctx.form.logo_light);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(30, _c0));
        \u0275\u0275control();
        \u0275\u0275advance(6);
        \u0275\u0275property("formField", ctx.form.logo_dark);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(31, _c0));
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.features);
        \u0275\u0275control();
        \u0275\u0275advance(71);
        \u0275\u0275property("ngModel", ctx.model().banner?.type || "")("ngModelOptions", \u0275\u0275pureFunction0(32, _c0));
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.BANNER_TYPE);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngModel", ctx.model().banner?.content || "")("ngModelOptions", \u0275\u0275pureFunction0(33, _c0));
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.default_route);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.model().features.includes("events") ? 107 : -1);
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
        \u0275\u0275property("formField", ctx.form.short_url_public_key);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("field", ctx.form.week_start)("options", ctx.WEEK_START);
        \u0275\u0275advance();
        \u0275\u0275property("field", ctx.form.currency);
        \u0275\u0275advance(2);
        \u0275\u0275property("formField", ctx.form.use_24_hour_time);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.use_region);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().features.includes("attendance-report") ? 140 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().features.includes("spaces") ? 141 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().features.includes("desks") ? 142 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().features.includes("visitors") ? 143 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().features.includes("visitors") || ctx.model().features.includes("parking") || ctx.model().features.includes("lockers") ? 144 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().features.includes("parking") || ctx.model().features.includes("parking-bookings") ? 145 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().features.includes("lockers") ? 146 : -1);
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
      SettingsSelectComponent,
      SettingsCurrencySelectComponent,
      TranslatePipe
    ], styles: ["\nsettings-toggle[_ngcontent-%COMP%] {\n  width: calc(50% - 1rem);\n  margin: 0.5rem;\n}\n/*# sourceMappingURL=concierge-settings-form-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConciergeSettingsFormModalComponent, [{
    type: Component,
    args: [{ selector: "concierge-settings-form-modal", template: `
        <fullscreen-modal-shell
            [heading]="heading"
            [loading]="loading()"
            (confirm)="save()"
        >
            <form class="flex flex-col space-y-8 pb-4">
                <section general class="bg-base-100 space-y-2 rounded-sm">
                    <div>
                        <label for="concierge-settings-form-modal-logo_light"
                            >Light Mode Logo</label
                        >
                        <div class="mb-4 flex items-center space-x-2">
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript w-full"
                            >
                                <input
                                    id="concierge-settings-form-modal-logo_light"
                                    matInput
                                    [formField]="form.logo_light"
                                />
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
                        <label for="concierge-settings-form-modal-logo_dark"
                            >Dark Mode Logo</label
                        >
                        <div class="mb-4 flex items-center space-x-2">
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript w-full"
                            >
                                <input
                                    id="concierge-settings-form-modal-logo_dark"
                                    matInput
                                    [formField]="form.logo_dark"
                                />
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
                        <label
                            for="concierge-settings-form-modal-features"
                            id="concierge-settings-form-modal-features-label"
                            >Features</label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                aria-labelledby="concierge-settings-form-modal-features-label"
                                [formField]="form.features"
                                multiple
                            >
                                <mat-option value="zones"> Zones </mat-option>
                                <mat-option value="maps"> Maps </mat-option>
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
                                <mat-option value="visitor-rules">
                                    Visitor Rules
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
                                <mat-option value="email-templates">
                                    Email Templates
                                </mat-option>
                                <mat-option value="deals-n-offers">
                                    Deals & Offers
                                </mat-option>
                                <mat-option value="attendance-report">
                                    Site Attendance Report
                                </mat-option>
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
                                <mat-option value="lockers-report">
                                    Lockers Report
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
                                <mat-option value="user-report">
                                    User Report
                                </mat-option>
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
                                <label
                                    for="concierge-settings-form-modal-banner-type"
                                    id="concierge-settings-form-modal-banner-type-label"
                                    >Type</label
                                >
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <mat-select
                                        aria-labelledby="concierge-settings-form-modal-banner-type-label"
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
                                <label
                                    for="concierge-settings-form-modal-banner-type-2"
                                    >Message</label
                                >
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        id="concierge-settings-form-modal-banner-type-2"
                                        matInput
                                        placeholder="Banner Message"
                                        [ngModel]="
                                            model().banner?.content || ''
                                        "
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
                        <label for="concierge-settings-form-modal-default-route"
                            >Default Route</label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                id="concierge-settings-form-modal-default-route"
                                matInput
                                [formField]="form.default_route"
                                placeholder="/book/rooms/new"
                            />
                            <mat-hint> Main page of the application </mat-hint>
                        </mat-form-field>
                    </div>
                    @if (model().features.includes('events')) {
                        <div>
                            <label
                                for="concierge-settings-form-modal-group-events-calendar"
                            >
                                Group Events Calendar
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    id="concierge-settings-form-modal-group-events-calendar"
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
                            <label
                                for="concierge-settings-form-modal-workplace-url-path"
                                >Workplace URL Path</label
                            >
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    id="concierge-settings-form-modal-workplace-url-path"
                                    matInput
                                    [formField]="form.workplace_url_path"
                                    placeholder="/workplace"
                                />
                            </mat-form-field>
                        </div>
                        <div>
                            <label
                                for="concierge-settings-form-modal-public-url-path"
                                >Public URL Path</label
                            >
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    id="concierge-settings-form-modal-public-url-path"
                                    matInput
                                    [formField]="form.public_url_path"
                                    placeholder="/public"
                                />
                            </mat-form-field>
                        </div>
                        <div>
                            <label
                                for="concierge-settings-form-modal-kiosk-url-path"
                                >Map Kiosk URL Path</label
                            >
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    id="concierge-settings-form-modal-kiosk-url-path"
                                    matInput
                                    [formField]="form.kiosk_url_path"
                                    placeholder="/map-kiosk"
                                />
                            </mat-form-field>
                        </div>
                    </div>
                    <div class="grid gap-4 md:grid-cols-2">
                        <div>
                            <label
                                for="concierge-settings-form-modal-control-path"
                                >Control URL Path</label
                            >
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    id="concierge-settings-form-modal-control-path"
                                    matInput
                                    [formField]="form.control_path"
                                    placeholder="/control"
                                />
                            </mat-form-field>
                        </div>
                    </div>
                    <div>
                        <label
                            for="concierge-settings-form-modal-short-url-public-key"
                            >Short URL Public Key</label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                id="concierge-settings-form-modal-short-url-public-key"
                                matInput
                                [formField]="form.short_url_public_key"
                                placeholder="your-short-url-public-key"
                            />
                        </mat-form-field>
                    </div>
                    <settings-select
                        field_id="concierge-settings-form-modal-week-start"
                        label="Week Start"
                        [field]="form.week_start"
                        [options]="WEEK_START"
                        placeholder="Sunday"
                        hint="Day of the week to show initially on various calendars"
                    />
                    <settings-currency-select
                        field_id="concierge-settings-form-modal-currency"
                        [field]="form.currency"
                    />
                    <div class="-mx-2 flex flex-wrap items-center">
                        <settings-toggle
                            label="Use 24 hour time"
                            [formField]="form.use_24_hour_time"
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
                                    class="flex-1"
                                    field_id="concierge-settings-form-modal-day-timeline-view"
                                    label="Day Timeline Default View"
                                    [field]="form.events.day_timeline_view"
                                    [options]="DAY_TIMELINE_VIEW"
                                    hint="Default day timeline layout for room bookings"
                                />
                                <div class="flex items-center space-x-4">
                                    <settings-select
                                        class="flex-1"
                                        field_id="concierge-settings-form-modal-block-start"
                                        label="Block Start Time"
                                        [field]="form.events.block_start"
                                        [options]="BLOCK_START"
                                        placeholder="12AM (Midnight)"
                                        hint="Start time of dayview blocks"
                                    />
                                    <settings-select
                                        class="flex-1"
                                        field_id="concierge-settings-form-modal-block-end"
                                        label="Block End Time"
                                        [field]="form.events.block_end"
                                        [options]="BLOCK_END"
                                        placeholder="12AM (Midnight)"
                                        hint="End time of dayview blocks"
                                    />
                                </div>
                                <div class="flex items-center space-x-4">
                                    <settings-select
                                        class="flex-1"
                                        field_id="concierge-settings-form-modal-block-height"
                                        label="Block Height"
                                        [field]="form.events.block_height"
                                        [options]="BLOCK_HEIGHT"
                                        hint="Height of 1 hour in dayview"
                                    />
                                    <settings-select
                                        class="flex-1"
                                        field_id="concierge-settings-form-modal-max-duration"
                                        label="Max Duration"
                                        [field]="form.events.max_duration"
                                        [options]="MAX_DURATION_FULL"
                                        hint="Max duration for single day bookings"
                                    />
                                </div>
                                <settings-select
                                    field_id="concierge-settings-form-modal-available-period"
                                    label="Available Period"
                                    [field]="form.events.available_period"
                                    [options]="AVAILABLE_PERIOD_SHORT"
                                    placeholder="No limit"
                                    null_option="No limit"
                                    hint="Number of days ahead users can create group events"
                                />
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
                                >
                                    <settings-select
                                        field_id="concierge-settings-form-modal-events-bookable-start"
                                        label="Bookable Start"
                                        [field]="
                                            form.events.bookable_hours.start
                                        "
                                        [options]="BOOKABLE_HOUR_START"
                                    />
                                    <settings-select
                                        field_id="concierge-settings-form-modal-events-bookable-end"
                                        label="Bookable End"
                                        [field]="form.events.bookable_hours.end"
                                        [options]="BOOKABLE_HOUR_END"
                                    />
                                </div>
                                <div class="-mx-2 flex flex-wrap items-center">
                                    <settings-toggle
                                        label="Allow all day bookings"
                                        [formField]="form.events.allow_all_day"
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
                                        label="Allow international attendees"
                                        info="Show a checkbox on the event booking form that flags each attendee as international"
                                        [formField]="
                                            form.events.allow_international
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Allow attendees to be marked internal or external"
                                        info="Show a control on the event booking form that marks each attendee as internal (default) or external"
                                        [formField]="
                                            form.events
                                                .allow_attendee_internal_or_external
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
                                    <settings-select
                                        field_id="concierge-settings-form-modal-events-all-day-start"
                                        label="All Day Start"
                                        [field]="
                                            form.events.all_day_period.start
                                        "
                                        [options]="BLOCK_START"
                                        placeholder="None"
                                    />
                                    <settings-select
                                        field_id="concierge-settings-form-modal-events-all-day-end"
                                        label="All Day End"
                                        [field]="form.events.all_day_period.end"
                                        [options]="BLOCK_END"
                                        placeholder="None"
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
                            Desk Assignments
                        </h3>
                        <button
                            icon
                            matRipple
                            class="bg-base-100 absolute top-0 right-4 -translate-y-1/2"
                            aria-label="Desk Assignments"
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
                                <div>
                                    <label
                                        for="concierge-settings-form-modal-desks-max-assigned-count"
                                    >
                                        Max Assigned Desks Per User
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <input
                                            id="concierge-settings-form-modal-desks-max-assigned-count"
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
                            aria-label="Visitors"
                            [attr.aria-expanded]="shown_group() === 'visitors'"
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
                                    <settings-select
                                        field_id="concierge-settings-form-modal-visitors-bookable-start"
                                        label="Bookable Start"
                                        [field]="
                                            form.visitors.bookable_hours.start
                                        "
                                        [options]="BOOKABLE_HOUR_START"
                                        placeholder="None"
                                    />
                                    <settings-select
                                        field_id="concierge-settings-form-modal-visitors-bookable-end"
                                        label="Bookable End"
                                        [field]="
                                            form.visitors.bookable_hours.end
                                        "
                                        [options]="BOOKABLE_HOUR_END"
                                        placeholder="None"
                                    />
                                </div>
                                <label
                                    for="concierge-settings-form-modal-hide-fields"
                                    id="concierge-settings-form-modal-hide-fields-label"
                                    >Hide Guest List fields</label
                                >
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <mat-select
                                        aria-labelledby="concierge-settings-form-modal-hide-fields-label"
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
                                            {{ 'COMMON.TIME' | translate }}
                                        </mat-option>
                                        <mat-option value="user_name">
                                            {{ 'FORM.HOST' | translate }}
                                        </mat-option>
                                        <mat-option value="status">
                                            {{ 'COMMON.STATE' | translate }}
                                        </mat-option>
                                        <mat-option value="notes">
                                            {{ 'FORM.NOTES' | translate }}
                                        </mat-option>
                                    </mat-select>
                                    <mat-hint>
                                        Hide selected columns on the visitor
                                        listing table
                                    </mat-hint>
                                </mat-form-field>
                                <label
                                    for="concierge-settings-form-modal-all-visitors-action-window"
                                >
                                    Check-in/out all visitors action window
                                </label>
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        id="concierge-settings-form-modal-all-visitors-action-window"
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
                                        label="Allow visitors to be marked internal or external"
                                        [formField]="
                                            form.visitors
                                                .allow_visitor_internal_or_external
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
                                <settings-select
                                    field_id="concierge-settings-form-modal-available-period-2"
                                    label="Available Period"
                                    [field]="form.bookings.available_period"
                                    [options]="AVAILABLE_PERIOD_EXTENDED"
                                    placeholder="Not set"
                                    null_option="Not set"
                                    hint="Number of days ahead the user is able to book. Parking and lockers use this when their own period is not set"
                                />
                                <settings-select
                                    field_id="concierge-settings-form-modal-max-duration-2"
                                    label="Max Duration"
                                    [field]="form.bookings.max_duration"
                                    [options]="MAX_DURATION_FULL"
                                    hint="Max duration for single day bookings"
                                />
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
                                >
                                    <settings-select
                                        field_id="concierge-settings-form-modal-bookings-bookable-start"
                                        label="Bookable Start"
                                        [field]="
                                            form.bookings.bookable_hours.start
                                        "
                                        [options]="BOOKABLE_HOUR_START"
                                    />
                                    <settings-select
                                        field_id="concierge-settings-form-modal-bookings-bookable-end"
                                        label="Bookable End"
                                        [field]="
                                            form.bookings.bookable_hours.end
                                        "
                                        [options]="BOOKABLE_HOUR_END"
                                    />
                                </div>
                                <div class="-mx-2 flex flex-wrap items-center">
                                    <settings-toggle
                                        label="Allow all day bookings"
                                        [formField]="
                                            form.bookings.allow_all_day
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Display times with building timezone"
                                        [formField]="
                                            form.bookings.use_building_timezone
                                        "
                                    ></settings-toggle>
                                </div>
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
                                >
                                    <settings-select
                                        field_id="concierge-settings-form-modal-bookings-all-day-start"
                                        label="All Day Start"
                                        [field]="
                                            form.bookings.all_day_period.start
                                        "
                                        [options]="BLOCK_START"
                                    />
                                    <settings-select
                                        field_id="concierge-settings-form-modal-bookings-all-day-end"
                                        label="All Day End"
                                        [field]="
                                            form.bookings.all_day_period.end
                                        "
                                        [options]="BLOCK_END"
                                    />
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
                            aria-label="Parking"
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
                                    field_id="concierge-settings-form-modal-available-period-3"
                                    label="Available Period"
                                    [field]="form.parking.available_period"
                                    [options]="AVAILABLE_PERIOD_EXTENDED"
                                    hint="Number of days ahead the user is able to book"
                                />
                                <settings-select
                                    field_id="concierge-settings-form-modal-max-duration-3"
                                    label="Max Duration"
                                    [field]="form.parking.max_duration"
                                    [options]="MAX_DURATION_FULL"
                                    hint="Max duration for single day bookings"
                                />
                                <div>
                                    <label
                                        for="concierge-settings-form-modal-parking-max-assigned-count"
                                    >
                                        Max Assigned Parking Spaces Per User
                                    </label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <input
                                            id="concierge-settings-form-modal-parking-max-assigned-count"
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
                                    <settings-select
                                        field_id="concierge-settings-form-modal-parking-bookable-start"
                                        label="Bookable Start"
                                        [field]="
                                            form.parking.bookable_hours.start
                                        "
                                        [options]="BOOKABLE_HOUR_START"
                                    />
                                    <settings-select
                                        field_id="concierge-settings-form-modal-parking-bookable-end"
                                        label="Bookable End"
                                        [field]="
                                            form.parking.bookable_hours.end
                                        "
                                        [options]="BOOKABLE_HOUR_END"
                                    />
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
                                        [formField]="
                                            form.parking.disable_styles
                                        "
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
                                        [formField]="
                                            form.parking.allow_deleting
                                        "
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
                                    field_id="concierge-settings-form-modal-available-period-4"
                                    label="Available Period"
                                    [field]="form.lockers.available_period"
                                    [options]="AVAILABLE_PERIOD_EXTENDED"
                                    hint="Number of days ahead the user is able to book"
                                />
                                <settings-select
                                    field_id="concierge-settings-form-modal-max-duration-4"
                                    label="Max Duration"
                                    [field]="form.lockers.max_duration"
                                    [options]="MAX_DURATION_FULL"
                                />
                                <div
                                    class="grid grid-cols-1 gap-4 md:grid-cols-2"
                                >
                                    <settings-select
                                        field_id="concierge-settings-form-modal-lockers-bookable-start"
                                        label="Bookable Start"
                                        [field]="
                                            form.lockers.bookable_hours.start
                                        "
                                        [options]="BOOKABLE_HOUR_START"
                                    />
                                    <settings-select
                                        field_id="concierge-settings-form-modal-lockers-bookable-end"
                                        label="Bookable End"
                                        [field]="
                                            form.lockers.bookable_hours.end
                                        "
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
                                        [formField]="
                                            form.lockers.all_day_default
                                        "
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Hide End time option"
                                        [formField]="form.lockers.hide_end_time"
                                    ></settings-toggle>
                                    <settings-toggle
                                        label="Disable date and time selection"
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
      UploadButtonComponent,
      SettingsSelectComponent,
      SettingsCurrencySelectComponent
    ], styles: ["/* angular:styles/component:css;ca7581e3f527e8cafa49f5d3654b7182593f8c4b756e7d34512a16bfc4e4e137;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/ui/app-settings/concierge-settings-form-modal.component.ts */\nsettings-toggle {\n  width: calc(50% - 1rem);\n  margin: 0.5rem;\n}\n/*# sourceMappingURL=concierge-settings-form-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConciergeSettingsFormModalComponent, { className: "ConciergeSettingsFormModalComponent", filePath: "apps/concierge/src/app/ui/app-settings/concierge-settings-form-modal.component.ts", lineNumber: 1298 });
})();
export {
  ConciergeSettingsFormModalComponent
};
//# debugId=8ebbda9e-bf6a-5f3e-a1bc-0f50056fdb30
//# sourceMappingURL=concierge-settings-form-modal.component-PFMHCOQ7.js.map
