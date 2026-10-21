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
  LOCKER_BOOKING_FALLBACKS,
  MAX_DURATION_FULL_OPTIONS,
  WEEK_START_OPTIONS,
  appSettingOverrides,
  applyAppSettings,
  applyBookingFallbacks,
  mergeAppSettings
} from "./chunk-LTM6CUF4.js";
import {
  UploadButtonComponent
} from "./chunk-N2BETW62.js";
import {
  errorText
} from "./chunk-J2E27BEW.js";
import "./chunk-LE4CPNK6.js";
import {
  SettingsToggleComponent
} from "./chunk-TN5N7BOW.js";
import {
  FullscreenModalShellComponent
} from "./chunk-XHHUJX6A.js";
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
  TranslatePipe
} from "./chunk-JCEMX2GO.js";
import {
  FormField,
  form,
  min
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
} from "./chunk-NAPLFNKH.js";
import "./chunk-ZBK6XVOU.js";
import {
  IconComponent
} from "./chunk-BSQA34BX.js";
import {
  ac,
  format,
  hc,
  notifyError,
  notifySuccess
} from "./chunk-PYWAX25U.js";
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
} from "./chunk-EOGESHX7.js";
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
    "signage",
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
var _forTrack1 = ($index, $item) => $item.code;
function ConciergeSettingsFormModalComponent_For_96_Template(rf, ctx) {
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
function ConciergeSettingsFormModalComponent_Conditional_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 84);
    \u0275\u0275text(2, " Group Events Calendar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 10);
    \u0275\u0275element(4, "input", 85);
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
function ConciergeSettingsFormModalComponent_For_148_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 50);
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
function ConciergeSettingsFormModalComponent_For_159_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 50);
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
function ConciergeSettingsFormModalComponent_Conditional_160_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 73);
    \u0275\u0275text(1, " No currencies match your search ");
    \u0275\u0275elementEnd();
  }
}
function ConciergeSettingsFormModalComponent_Conditional_166_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 77)(1, "h3", 45);
    \u0275\u0275text(2, " Reports ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "settings-toggle", 86);
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
function ConciergeSettingsFormModalComponent_Conditional_167_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 50);
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
function ConciergeSettingsFormModalComponent_Conditional_167_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 50);
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
function ConciergeSettingsFormModalComponent_Conditional_167_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 50);
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
function ConciergeSettingsFormModalComponent_Conditional_167_For_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 50);
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
function ConciergeSettingsFormModalComponent_Conditional_167_For_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 50);
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
function ConciergeSettingsFormModalComponent_Conditional_167_For_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 50);
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
function ConciergeSettingsFormModalComponent_Conditional_167_For_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 50);
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
function ConciergeSettingsFormModalComponent_Conditional_167_For_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 50);
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
function ConciergeSettingsFormModalComponent_Conditional_167_For_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 50);
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
function ConciergeSettingsFormModalComponent_Conditional_167_For_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 50);
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
function ConciergeSettingsFormModalComponent_Conditional_167_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 78)(1, "h3", 45);
    \u0275\u0275text(2, " Room Bookings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 87);
    \u0275\u0275listener("click", function ConciergeSettingsFormModalComponent_Conditional_167_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleGroup("spaces"));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 88)(7, "div", 89)(8, "div", 47)(9, "label", 90);
    \u0275\u0275text(10, " Day Timeline Default View ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 10)(12, "mat-select", 91);
    \u0275\u0275repeaterCreate(13, ConciergeSettingsFormModalComponent_Conditional_167_For_14_Template, 2, 2, "mat-option", 50, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(15, "mat-hint");
    \u0275\u0275text(16, " Default day timeline layout for room bookings ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 46)(18, "div", 47)(19, "label", 92);
    \u0275\u0275text(20, "Block Start Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-form-field", 10)(22, "mat-select", 93);
    \u0275\u0275repeaterCreate(23, ConciergeSettingsFormModalComponent_Conditional_167_For_24_Template, 2, 2, "mat-option", 50, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(25, "mat-hint");
    \u0275\u0275text(26, " Start time of dayview blocks ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 47)(28, "label", 94);
    \u0275\u0275text(29, "Block End Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "mat-form-field", 10)(31, "mat-select", 93);
    \u0275\u0275repeaterCreate(32, ConciergeSettingsFormModalComponent_Conditional_167_For_33_Template, 2, 2, "mat-option", 50, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(34, "mat-hint");
    \u0275\u0275text(35, " End time of dayview blocks ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "div", 46)(37, "div", 47)(38, "label", 95);
    \u0275\u0275text(39, " Block Height ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "mat-form-field", 10)(41, "mat-select", 91);
    \u0275\u0275repeaterCreate(42, ConciergeSettingsFormModalComponent_Conditional_167_For_43_Template, 2, 2, "mat-option", 50, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(44, "mat-hint");
    \u0275\u0275text(45, " Height of 1 hour in dayview ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 47)(47, "label", 96);
    \u0275\u0275text(48, " Max Duration ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "mat-form-field", 10)(50, "mat-select", 91);
    \u0275\u0275repeaterCreate(51, ConciergeSettingsFormModalComponent_Conditional_167_For_52_Template, 2, 2, "mat-option", 50, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(53, "mat-hint");
    \u0275\u0275text(54, " Max duration for single day bookings ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(55, "div")(56, "label", 97);
    \u0275\u0275text(57, " Available Period ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "mat-form-field", 10)(59, "mat-select", 98)(60, "mat-option", 50);
    \u0275\u0275text(61, "No limit");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(62, ConciergeSettingsFormModalComponent_Conditional_167_For_63_Template, 2, 2, "mat-option", 50, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(64, "mat-hint");
    \u0275\u0275text(65, " Number of days ahead users can create group events ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(66, "div", 99)(67, "div")(68, "label", 100);
    \u0275\u0275text(69, " Bookable Start ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "mat-form-field", 10)(71, "mat-select", 91);
    \u0275\u0275repeaterCreate(72, ConciergeSettingsFormModalComponent_Conditional_167_For_73_Template, 2, 2, "mat-option", 50, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div")(75, "label", 101);
    \u0275\u0275text(76, " Bookable End ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "mat-form-field", 10)(78, "mat-select", 91);
    \u0275\u0275repeaterCreate(79, ConciergeSettingsFormModalComponent_Conditional_167_For_80_Template, 2, 2, "mat-option", 50, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(81, "div", 74);
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
    \u0275\u0275element(94, "settings-toggle", 114);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div", 99)(96, "div")(97, "label", 115);
    \u0275\u0275text(98, " All Day Start ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "mat-form-field", 10)(100, "mat-select", 116);
    \u0275\u0275repeaterCreate(101, ConciergeSettingsFormModalComponent_Conditional_167_For_102_Template, 2, 2, "mat-option", 50, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "div")(104, "label", 117);
    \u0275\u0275text(105, " All Day End ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "mat-form-field", 10)(107, "mat-select", 116);
    \u0275\u0275repeaterCreate(108, ConciergeSettingsFormModalComponent_Conditional_167_For_109_Template, 2, 2, "mat-option", 50, _forTrack0);
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
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
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
function ConciergeSettingsFormModalComponent_Conditional_168_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 79)(1, "h3", 45);
    \u0275\u0275text(2, " Desk Assignments ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 87);
    \u0275\u0275listener("click", function ConciergeSettingsFormModalComponent_Conditional_168_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleGroup("desks"));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 88)(7, "div", 89)(8, "div")(9, "label", 118);
    \u0275\u0275text(10, " Max Assigned Desks Per User ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 10);
    \u0275\u0275element(12, "input", 119);
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
function ConciergeSettingsFormModalComponent_Conditional_169_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 50);
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
function ConciergeSettingsFormModalComponent_Conditional_169_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 50);
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
function ConciergeSettingsFormModalComponent_Conditional_169_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 80)(1, "h3", 45);
    \u0275\u0275text(2, " Visitors ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 87);
    \u0275\u0275listener("click", function ConciergeSettingsFormModalComponent_Conditional_169_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleGroup("visitors"));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 88)(7, "div", 89)(8, "div", 99)(9, "div")(10, "label", 120);
    \u0275\u0275text(11, " Bookable Start ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-form-field", 10)(13, "mat-select", 116);
    \u0275\u0275repeaterCreate(14, ConciergeSettingsFormModalComponent_Conditional_169_For_15_Template, 2, 2, "mat-option", 50, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "label", 121);
    \u0275\u0275text(18, " Bookable End ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-form-field", 10)(20, "mat-select", 116);
    \u0275\u0275repeaterCreate(21, ConciergeSettingsFormModalComponent_Conditional_169_For_22_Template, 2, 2, "mat-option", 50, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "label", 122);
    \u0275\u0275text(24, "Hide Guest List fields");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "mat-form-field", 10)(26, "mat-select", 123)(27, "mat-option", 124);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "mat-option", 125);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "mat-option", 126);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "mat-option", 127);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "mat-option", 128);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "mat-option", 129);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "mat-option", 130);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(48, "mat-hint");
    \u0275\u0275text(49, " Hide selected columns on the visitor listing table ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "label", 131);
    \u0275\u0275text(51, " Check-in/out all visitors action window ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "mat-form-field", 10);
    \u0275\u0275element(53, "input", 119);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(54, "mat-hint");
    \u0275\u0275text(55, " Minutes before and after the booking time to show all visitor check-in/out actions ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 74);
    \u0275\u0275element(57, "settings-toggle", 132);
    \u0275\u0275controlCreate();
    \u0275\u0275element(58, "settings-toggle", 133);
    \u0275\u0275controlCreate();
    \u0275\u0275element(59, "settings-toggle", 134);
    \u0275\u0275controlCreate();
    \u0275\u0275element(60, "settings-toggle", 135);
    \u0275\u0275controlCreate();
    \u0275\u0275element(61, "settings-toggle", 136);
    \u0275\u0275controlCreate();
    \u0275\u0275element(62, "settings-toggle", 137);
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 20, "COMMON.CHECKED_IN_AT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 22, "COMMON.CHECKED_OUT_AT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 24, "COMMON.CHECKED_IN"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 26, "COMMON.TIME"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 28, "FORM.HOST"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 30, "COMMON.STATE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(47, 32, "FORM.NOTES"), " ");
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
function ConciergeSettingsFormModalComponent_Conditional_170_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 50);
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
function ConciergeSettingsFormModalComponent_Conditional_170_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 50);
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
function ConciergeSettingsFormModalComponent_Conditional_170_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 50);
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
function ConciergeSettingsFormModalComponent_Conditional_170_For_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 50);
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
function ConciergeSettingsFormModalComponent_Conditional_170_For_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 50);
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
function ConciergeSettingsFormModalComponent_Conditional_170_For_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 50);
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
function ConciergeSettingsFormModalComponent_Conditional_170_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 81)(1, "h3", 45);
    \u0275\u0275text(2, " PlaceOS Bookings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 87);
    \u0275\u0275listener("click", function ConciergeSettingsFormModalComponent_Conditional_170_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleGroup("bookings"));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 88)(7, "div", 89)(8, "div")(9, "label", 97);
    \u0275\u0275text(10, " Available Period ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 10)(12, "mat-select", 138)(13, "mat-option", 50);
    \u0275\u0275text(14, "Not set");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(15, ConciergeSettingsFormModalComponent_Conditional_170_For_16_Template, 2, 2, "mat-option", 50, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(17, "mat-hint");
    \u0275\u0275text(18, " Number of days ahead the user is able to book. Parking and lockers use this when their own period is not set ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div")(20, "label", 96);
    \u0275\u0275text(21, " Max Duration ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "mat-form-field", 10)(23, "mat-select", 91);
    \u0275\u0275repeaterCreate(24, ConciergeSettingsFormModalComponent_Conditional_170_For_25_Template, 2, 2, "mat-option", 50, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(26, "mat-hint");
    \u0275\u0275text(27, " Max duration for single day bookings ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 99)(29, "div")(30, "label", 139);
    \u0275\u0275text(31, " Bookable Start ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-form-field", 10)(33, "mat-select", 91);
    \u0275\u0275repeaterCreate(34, ConciergeSettingsFormModalComponent_Conditional_170_For_35_Template, 2, 2, "mat-option", 50, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div")(37, "label", 140);
    \u0275\u0275text(38, " Bookable End ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "mat-form-field", 10)(40, "mat-select", 91);
    \u0275\u0275repeaterCreate(41, ConciergeSettingsFormModalComponent_Conditional_170_For_42_Template, 2, 2, "mat-option", 50, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 74);
    \u0275\u0275element(44, "settings-toggle", 102);
    \u0275\u0275controlCreate();
    \u0275\u0275element(45, "settings-toggle", 112);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 99)(47, "div")(48, "label", 141);
    \u0275\u0275text(49, " All Day Start ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "mat-form-field", 10)(51, "mat-select", 91);
    \u0275\u0275repeaterCreate(52, ConciergeSettingsFormModalComponent_Conditional_170_For_53_Template, 2, 2, "mat-option", 50, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div")(55, "label", 142);
    \u0275\u0275text(56, " All Day End ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "mat-form-field", 10)(58, "mat-select", 91);
    \u0275\u0275repeaterCreate(59, ConciergeSettingsFormModalComponent_Conditional_170_For_60_Template, 2, 2, "mat-option", 50, _forTrack0);
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
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
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
function ConciergeSettingsFormModalComponent_Conditional_171_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 50);
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
function ConciergeSettingsFormModalComponent_Conditional_171_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 50);
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
function ConciergeSettingsFormModalComponent_Conditional_171_For_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 50);
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
function ConciergeSettingsFormModalComponent_Conditional_171_For_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 50);
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
function ConciergeSettingsFormModalComponent_Conditional_171_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 82)(1, "h3", 45);
    \u0275\u0275text(2, " Parking ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 87);
    \u0275\u0275listener("click", function ConciergeSettingsFormModalComponent_Conditional_171_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleGroup("parking"));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 88)(7, "div", 89)(8, "div")(9, "label", 97);
    \u0275\u0275text(10, " Available Period ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 10)(12, "mat-select", 91);
    \u0275\u0275repeaterCreate(13, ConciergeSettingsFormModalComponent_Conditional_171_For_14_Template, 2, 2, "mat-option", 50, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(15, "mat-hint");
    \u0275\u0275text(16, " Number of days ahead the user is able to book ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div")(18, "label", 96);
    \u0275\u0275text(19, " Max Duration ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-form-field", 10)(21, "mat-select", 91);
    \u0275\u0275repeaterCreate(22, ConciergeSettingsFormModalComponent_Conditional_171_For_23_Template, 2, 2, "mat-option", 50, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(24, "mat-hint");
    \u0275\u0275text(25, " Max duration for single day bookings ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div")(27, "label", 143);
    \u0275\u0275text(28, " Max Assigned Parking Spaces Per User ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-form-field", 10);
    \u0275\u0275element(30, "input", 119);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(31, "mat-hint");
    \u0275\u0275text(32, " Maximum number of parking space assignments a user can have at one time. Set to 0 for unlimited. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 99)(34, "div")(35, "label", 144);
    \u0275\u0275text(36, " Bookable Start ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-form-field", 10)(38, "mat-select", 91);
    \u0275\u0275repeaterCreate(39, ConciergeSettingsFormModalComponent_Conditional_171_For_40_Template, 2, 2, "mat-option", 50, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div")(42, "label", 145);
    \u0275\u0275text(43, " Bookable End ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "mat-form-field", 10)(45, "mat-select", 91);
    \u0275\u0275repeaterCreate(46, ConciergeSettingsFormModalComponent_Conditional_171_For_47_Template, 2, 2, "mat-option", 50, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 74);
    \u0275\u0275element(49, "settings-toggle", 102);
    \u0275\u0275controlCreate();
    \u0275\u0275element(50, "settings-toggle", 146);
    \u0275\u0275controlCreate();
    \u0275\u0275element(51, "settings-toggle", 147);
    \u0275\u0275controlCreate();
    \u0275\u0275element(52, "settings-toggle", 148);
    \u0275\u0275controlCreate();
    \u0275\u0275element(53, "settings-toggle", 149);
    \u0275\u0275controlCreate();
    \u0275\u0275element(54, "settings-toggle", 150);
    \u0275\u0275controlCreate();
    \u0275\u0275element(55, "settings-toggle", 151);
    \u0275\u0275controlCreate();
    \u0275\u0275element(56, "settings-toggle", 152);
    \u0275\u0275controlCreate();
    \u0275\u0275element(57, "settings-toggle", 153);
    \u0275\u0275controlCreate();
    \u0275\u0275element(58, "settings-toggle", 154);
    \u0275\u0275controlCreate();
    \u0275\u0275element(59, "settings-toggle", 155);
    \u0275\u0275controlCreate();
    \u0275\u0275element(60, "settings-toggle", 156);
    \u0275\u0275controlCreate();
    \u0275\u0275element(61, "settings-toggle", 157);
    \u0275\u0275controlCreate();
    \u0275\u0275element(62, "settings-toggle", 158);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275element(64, "settings-toggle", 159);
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
function ConciergeSettingsFormModalComponent_Conditional_172_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 50);
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
function ConciergeSettingsFormModalComponent_Conditional_172_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 50);
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
function ConciergeSettingsFormModalComponent_Conditional_172_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 50);
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
function ConciergeSettingsFormModalComponent_Conditional_172_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 50);
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
function ConciergeSettingsFormModalComponent_Conditional_172_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 83)(1, "h3", 45);
    \u0275\u0275text(2, " Locker Bookings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 87);
    \u0275\u0275listener("click", function ConciergeSettingsFormModalComponent_Conditional_172_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleGroup("lockers"));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 88)(7, "div", 89)(8, "div")(9, "label", 97);
    \u0275\u0275text(10, " Available Period ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 10)(12, "mat-select", 91);
    \u0275\u0275repeaterCreate(13, ConciergeSettingsFormModalComponent_Conditional_172_For_14_Template, 2, 2, "mat-option", 50, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(15, "mat-hint");
    \u0275\u0275text(16, " Number of days ahead the user is able to book ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div")(18, "label", 96);
    \u0275\u0275text(19, " Max Duration ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-form-field", 10)(21, "mat-select", 91);
    \u0275\u0275repeaterCreate(22, ConciergeSettingsFormModalComponent_Conditional_172_For_23_Template, 2, 2, "mat-option", 50, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 99)(25, "div")(26, "label", 160);
    \u0275\u0275text(27, " Bookable Start ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-form-field", 10)(29, "mat-select", 91);
    \u0275\u0275repeaterCreate(30, ConciergeSettingsFormModalComponent_Conditional_172_For_31_Template, 2, 2, "mat-option", 50, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div")(33, "label", 161);
    \u0275\u0275text(34, " Bookable End ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "mat-form-field", 10)(36, "mat-select", 91);
    \u0275\u0275repeaterCreate(37, ConciergeSettingsFormModalComponent_Conditional_172_For_38_Template, 2, 2, "mat-option", 50, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 74);
    \u0275\u0275element(40, "settings-toggle", 102);
    \u0275\u0275controlCreate();
    \u0275\u0275element(41, "settings-toggle", 162);
    \u0275\u0275controlCreate();
    \u0275\u0275element(42, "settings-toggle", 163);
    \u0275\u0275controlCreate();
    \u0275\u0275element(43, "settings-toggle", 164);
    \u0275\u0275controlCreate();
    \u0275\u0275element(44, "settings-toggle", 165);
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
    \u0275\u0275repeater(ctx_r1.AVAILABLE_PERIOD_EXTENDED);
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
    this.initial_settings = {};
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
    this.settings_key = this._settings.get("app.concierge_metadata_key") || this._settings.get("app.concierge_app") || "concierge_app";
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
          allow_setup_breakdown: false,
          has_assets: false,
          hide_notes: false,
          hide_attendees: false,
          allow_externals: false,
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
    const zone = this._data.zone;
    this.loading.set("Loading existing settings...");
    this.heading.set(`Concierge Settings <div class="font-mono text-xs px-2 py-1 rounded bg-base-300 ml-2">${this.zone.display_name || this.zone.name || "Organisation"}</div>`);
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
    this.model.update((model) => applyAppSettings(model, patch));
  }
  async _getMetadata(id) {
    const metadata = await ac(id, this.settings_key);
    return metadata.details || {};
  }
  static {
    this.\u0275fac = function ConciergeSettingsFormModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConciergeSettingsFormModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConciergeSettingsFormModalComponent, selectors: [["concierge-settings-form-modal"]], decls: 173, vars: 38, consts: [[3, "confirm", "heading", "loading"], [1, "flex", "flex-col", "space-y-8", "pb-4"], ["general", "", 1, "bg-base-100", "space-y-2", "rounded-sm"], ["for", "logo_light"], [1, "mb-4", "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", 3, "formField"], ["ngModel", "", 3, "ngModelChange", "ngModelOptions"], ["for", "logo_dark"], ["for", "features"], ["appearance", "outline", 1, "w-full"], ["multiple", "", 3, "formField"], ["value", "zones"], ["value", "maps"], ["value", "spaces"], ["value", "assets"], ["value", "desks"], ["value", "lockers"], ["value", "parking"], ["value", "parking-bookings"], ["value", "parking-manage"], ["value", "visitors"], ["value", "visitor-rules"], ["value", "internal-users"], ["value", "surveys"], ["value", "catering"], ["value", "points-of-interest"], ["value", "url-management"], ["value", "events"], ["value", "points"], ["value", "emergency-contacts"], ["value", "signage"], ["value", "email-templates"], ["value", "deals-n-offers"], ["value", "attendance-report"], ["value", "booking-report"], ["value", "desk-report"], ["value", "catering-report"], ["value", "parking-report"], ["value", "lockers-report"], ["value", "contact-tracing-report"], ["value", "assets-report"], ["value", "visitors-report"], ["value", "user-report"], [1, "border-base-300", "relative", "rounded-sm", "border", "px-4", "pt-4", "pb-2"], [1, "bg-base-100", "absolute", "top-0", "left-4", "-translate-y-1/2", "rounded-sm", "px-2", "py-1", "font-medium"], [1, "flex", "items-center", "space-x-4"], [1, "flex-1"], ["for", "banner-type"], ["name", "banner-type", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], ["matInput", "", "placeholder", "Banner Message", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["for", "default-route"], ["matInput", "", "placeholder", "/book/rooms/new", 3, "formField"], [1, "grid", "gap-4", "md:grid-cols-2"], ["for", "workplace-url-path"], ["matInput", "", "placeholder", "/workplace", 3, "formField"], ["for", "public-url-path"], ["matInput", "", "placeholder", "/public", 3, "formField"], ["for", "kiosk-url-path"], ["matInput", "", "placeholder", "/map-kiosk", 3, "formField"], ["for", "control-path"], ["matInput", "", "placeholder", "/control", 3, "formField"], ["for", "signage-path"], ["matInput", "", "placeholder", "/signage", 3, "formField"], ["for", "short-url-public-key"], ["matInput", "", "placeholder", "your-short-url-public-key", 3, "formField"], ["for", "week-start"], ["placeholder", "Sunday", 3, "formField"], ["for", "currency"], ["placeholder", "Select currency code", 3, "openedChange", "formField"], ["disabled", "", 1, "!h-auto", "!py-2"], ["matInput", "", "placeholder", "Search currency code or name", 3, "ngModelChange", "click", "keydown", "ngModel", "ngModelOptions"], ["disabled", ""], [1, "-mx-2", "flex", "flex-wrap", "items-center"], ["label", "Use 24 hour time", 3, "formField"], ["label", "Use region over building", 3, "formField"], ["reports", "", "id", "feature-reports", 1, "border-base-300", "relative", "rounded-sm", "border", "px-2", "pt-4", "pb-2"], ["spaces", "", "id", "feature-spaces", 1, "border-base-300", "relative", "rounded-sm", "border"], ["desks", "", "id", "feature-desks", 1, "border-base-300", "relative", "rounded-sm", "border"], ["visitors", "", "id", "feature-visitors", 1, "border-base-300", "relative", "rounded-sm", "border"], ["bookings", "", "id", "feature-bookings", 1, "border-base-300", "relative", "rounded-sm", "border"], ["parking", "", "id", "feature-parking", 1, "border-base-300", "relative", "rounded-sm", "border"], ["lockers", "", "id", "feature-lockers", 1, "border-base-300", "relative", "rounded-sm", "border"], ["for", "group-events-calendar"], ["matInput", "", "placeholder", "shared.events@calendar.acme.tech", 3, "formField"], ["label", "Include weekends in site attendance averages", 3, "formField"], ["icon", "", "matRipple", "", 1, "bg-base-100", "absolute", "top-0", "right-4", "-translate-y-1/2", 3, "click"], ["collapsible", ""], [1, "content", "px-4", "pt-4", "pb-2"], ["for", "day-timeline-view"], [3, "formField"], ["for", "block-start"], ["placeholder", "12AM (Midnight)", 3, "formField"], ["for", "block-end"], ["for", "block-height"], ["for", "max-duration"], ["for", "available-period"], ["placeholder", "No limit", 3, "formField"], [1, "grid", "grid-cols-1", "gap-4", "md:grid-cols-2"], ["for", "events-bookable-start"], ["for", "events-bookable-end"], ["label", "Allow all day bookings", 3, "formField"], ["label", "Allow editing setup/breakdown times", 3, "formField"], ["label", "Allow booking for other users", 3, "formField"], ["label", "Allow booking for any other users", 3, "formField"], ["label", "Allow booking with assets", 3, "formField"], ["label", "Hide notes field when booking", 3, "formField"], ["label", "Hide attendees field when booking", 3, "formField"], ["label", "Allow booking for external users", 3, "formField"], ["label", "Enforce capacity for rooms", 3, "formField"], ["label", "Allow booking for multiple days", 3, "formField"], ["label", "Display times with building timezone", 3, "formField"], ["label", "Allow Visibility options", 3, "formField"], ["label", "Allow editing bookings", 3, "formField"], ["for", "events-all-day-start"], ["placeholder", "None", 3, "formField"], ["for", "events-all-day-end"], ["for", "desks-max-assigned-count"], ["matInput", "", "type", "number", 3, "formField"], ["for", "visitors-bookable-start"], ["for", "visitors-bookable-end"], ["for", "hide-fields"], ["placeholder", "No fields selected", "multiple", "", 3, "formField"], ["value", "checked_in_at"], ["value", "checked_out_at"], ["value", "state"], ["value", "date"], ["value", "user_name"], ["value", "status"], ["value", "notes"], ["for", "all-visitors-action-window"], ["label", "Allow booking parking for visitors", 3, "formField"], ["label", "Allow setting pass number for visitors", 3, "formField"], ["label", "Allow printing visitor labels", 3, "formField"], ["label", "Allow international flag for visitors", 3, "formField"], ["label", "Allow visitors to be marked internal or external", 3, "formField"], ["label", "Show calendar links after booking", 3, "formField"], ["placeholder", "Not set", 3, "formField"], ["for", "bookings-bookable-start"], ["for", "bookings-bookable-end"], ["for", "bookings-all-day-start"], ["for", "bookings-all-day-end"], ["for", "parking-max-assigned-count"], ["for", "parking-bookable-start"], ["for", "parking-bookable-end"], ["label", "Show assigned users on parking map", 3, "formField"], ["label", "Show parking status details on map", 3, "formField"], ["label", "Disable parking map styles", 3, "formField"], ["label", "Disable reservations", 3, "formField"], ["label", "Show booking requests", 3, "formField"], ["label", "Show waitlisted status and filter", 3, "formField"], ["label", "Always hide bay number column", 3, "formField"], ["label", "Hide level selector on booking list", 3, "formField"], ["label", "Hide user tab", 3, "formField"], ["label", "Hide vehicle tab", 3, "formField"], ["label", "Hide user and vehicle tabs", 3, "formField"], ["label", "Hide assign space action", 3, "formField"], [3, "label", "formField"], ["label", "Assign a space when approving requests", 3, "formField"], ["for", "lockers-bookable-start"], ["for", "lockers-bookable-end"], ["label", "Default bookings to all day", 3, "formField"], ["label", "Hide End time option", 3, "formField"], ["label", "Disable Date selection", 3, "formField"], ["label", "Disable start time option", 3, "formField"]], template: function ConciergeSettingsFormModalComponent_Template(rf, ctx) {
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
        \u0275\u0275text(25, " Maps ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "mat-option", 14);
        \u0275\u0275text(27, " Rooms ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "mat-option", 15);
        \u0275\u0275text(29, "Assets");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "mat-option", 16);
        \u0275\u0275text(31, "Desks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "mat-option", 17);
        \u0275\u0275text(33, " Lockers ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "mat-option", 18);
        \u0275\u0275text(35, "Parking");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "mat-option", 19);
        \u0275\u0275text(37, "Parking Bookings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "mat-option", 20);
        \u0275\u0275text(39, "Parking Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "mat-option", 21);
        \u0275\u0275text(41, " Visitors ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "mat-option", 22);
        \u0275\u0275text(43, " Visitor Rules ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "mat-option", 23);
        \u0275\u0275text(45, " User Directory ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "mat-option", 24);
        \u0275\u0275text(47, " Surveys ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "mat-option", 25);
        \u0275\u0275text(49, " Catering ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "mat-option", 26);
        \u0275\u0275text(51, " Points of Interest ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "mat-option", 27);
        \u0275\u0275text(53, " URL Management ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "mat-option", 28);
        \u0275\u0275text(55, " Group Events ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "mat-option", 29);
        \u0275\u0275text(57, " Points ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "mat-option", 30);
        \u0275\u0275text(59, " Emergency Contacts ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "mat-option", 31);
        \u0275\u0275text(61, " Digital Signage ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "mat-option", 32);
        \u0275\u0275text(63, " Email Templates ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "mat-option", 33);
        \u0275\u0275text(65, " Deals & Offers ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "mat-option", 34);
        \u0275\u0275text(67, " Site Attendance Report ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "mat-option", 35);
        \u0275\u0275text(69, " Room Report ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "mat-option", 36);
        \u0275\u0275text(71, " Desk Report ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "mat-option", 37);
        \u0275\u0275text(73, " Catering Report ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "mat-option", 38);
        \u0275\u0275text(75, " Parking Report ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "mat-option", 39);
        \u0275\u0275text(77, " Lockers Report ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "mat-option", 40);
        \u0275\u0275text(79, " Contact Tracing Report ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "mat-option", 41);
        \u0275\u0275text(81, " Assets Report ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "mat-option", 42);
        \u0275\u0275text(83, " Visitors Report ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "mat-option", 43);
        \u0275\u0275text(85, " User Report ");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(86, "div", 44)(87, "h3", 45);
        \u0275\u0275text(88, " Banner ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "div", 46)(90, "div", 47)(91, "label", 48);
        \u0275\u0275text(92, "Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "mat-form-field", 10)(94, "mat-select", 49);
        \u0275\u0275listener("ngModelChange", function ConciergeSettingsFormModalComponent_Template_mat_select_ngModelChange_94_listener($event) {
          return ctx.model.update((m) => __spreadProps(__spreadValues({}, m), { banner: { id: ctx.date_string, content: m.banner?.content || "", type: $event } }));
        });
        \u0275\u0275repeaterCreate(95, ConciergeSettingsFormModalComponent_For_96_Template, 2, 2, "mat-option", 50, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(97, "div", 47)(98, "label", 48);
        \u0275\u0275text(99, "Message");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "mat-form-field", 10)(101, "input", 51);
        \u0275\u0275listener("ngModelChange", function ConciergeSettingsFormModalComponent_Template_input_ngModelChange_101_listener($event) {
          return ctx.model.update((m) => __spreadProps(__spreadValues({}, m), { banner: { id: ctx.date_string, type: m.banner?.type || "", content: $event } }));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(102, "div")(103, "label", 52);
        \u0275\u0275text(104, "Default Route");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "mat-form-field", 10);
        \u0275\u0275element(106, "input", 53);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(107, "mat-hint");
        \u0275\u0275text(108, " Main page of the application ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(109, ConciergeSettingsFormModalComponent_Conditional_109_Template, 7, 1, "div");
        \u0275\u0275elementStart(110, "div", 54)(111, "div")(112, "label", 55);
        \u0275\u0275text(113, "Workplace URL Path");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "mat-form-field", 10);
        \u0275\u0275element(115, "input", 56);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(116, "div")(117, "label", 57);
        \u0275\u0275text(118, "Public URL Path");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "mat-form-field", 10);
        \u0275\u0275element(120, "input", 58);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(121, "div")(122, "label", 59);
        \u0275\u0275text(123, "Map Kiosk URL Path");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(124, "mat-form-field", 10);
        \u0275\u0275element(125, "input", 60);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(126, "div", 54)(127, "div")(128, "label", 61);
        \u0275\u0275text(129, "Control URL Path");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(130, "mat-form-field", 10);
        \u0275\u0275element(131, "input", 62);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(132, "div")(133, "label", 63);
        \u0275\u0275text(134, "Signage URL Path");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "mat-form-field", 10);
        \u0275\u0275element(136, "input", 64);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(137, "div")(138, "label", 65);
        \u0275\u0275text(139, "Short URL Public Key");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(140, "mat-form-field", 10);
        \u0275\u0275element(141, "input", 66);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(142, "div")(143, "label", 67);
        \u0275\u0275text(144, "Week Start");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(145, "mat-form-field", 10)(146, "mat-select", 68);
        \u0275\u0275repeaterCreate(147, ConciergeSettingsFormModalComponent_For_148_Template, 2, 2, "mat-option", 50, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(149, "mat-hint");
        \u0275\u0275text(150, " Day of the week to show initially on various calendars ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(151, "div")(152, "label", 69);
        \u0275\u0275text(153, "Currency");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(154, "mat-form-field", 10)(155, "mat-select", 70);
        \u0275\u0275listener("openedChange", function ConciergeSettingsFormModalComponent_Template_mat_select_openedChange_155_listener($event) {
          return ctx.onCurrencySelectStateChange($event);
        });
        \u0275\u0275elementStart(156, "mat-option", 71)(157, "input", 72);
        \u0275\u0275listener("ngModelChange", function ConciergeSettingsFormModalComponent_Template_input_ngModelChange_157_listener($event) {
          return ctx.updateCurrencyFilter($event);
        })("click", function ConciergeSettingsFormModalComponent_Template_input_click_157_listener($event) {
          return $event.stopPropagation();
        })("keydown", function ConciergeSettingsFormModalComponent_Template_input_keydown_157_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(158, ConciergeSettingsFormModalComponent_For_159_Template, 2, 2, "mat-option", 50, _forTrack1);
        \u0275\u0275conditionalCreate(160, ConciergeSettingsFormModalComponent_Conditional_160_Template, 2, 0, "mat-option", 73);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(161, "mat-hint");
        \u0275\u0275text(162, " ISO 4217 currency code for pricing ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(163, "div", 74);
        \u0275\u0275element(164, "settings-toggle", 75);
        \u0275\u0275controlCreate();
        \u0275\u0275element(165, "settings-toggle", 76);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(166, ConciergeSettingsFormModalComponent_Conditional_166_Template, 4, 1, "section", 77);
        \u0275\u0275conditionalCreate(167, ConciergeSettingsFormModalComponent_Conditional_167_Template, 110, 27, "section", 78);
        \u0275\u0275conditionalCreate(168, ConciergeSettingsFormModalComponent_Conditional_168_Template, 15, 4, "section", 79);
        \u0275\u0275conditionalCreate(169, ConciergeSettingsFormModalComponent_Conditional_169_Template, 63, 34, "section", 80);
        \u0275\u0275conditionalCreate(170, ConciergeSettingsFormModalComponent_Conditional_170_Template, 61, 12, "section", 81);
        \u0275\u0275conditionalCreate(171, ConciergeSettingsFormModalComponent_Conditional_171_Template, 65, 26, "section", 82);
        \u0275\u0275conditionalCreate(172, ConciergeSettingsFormModalComponent_Conditional_172_Template, 45, 12, "section", 83);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", ctx.heading())("loading", ctx.loading());
        \u0275\u0275advance(8);
        \u0275\u0275property("formField", ctx.form.logo_light);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(33, _c0));
        \u0275\u0275control();
        \u0275\u0275advance(6);
        \u0275\u0275property("formField", ctx.form.logo_dark);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(34, _c0));
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.features);
        \u0275\u0275control();
        \u0275\u0275advance(73);
        \u0275\u0275property("ngModel", ctx.model().banner?.type || "")("ngModelOptions", \u0275\u0275pureFunction0(35, _c0));
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.BANNER_TYPE);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngModel", ctx.model().banner?.content || "")("ngModelOptions", \u0275\u0275pureFunction0(36, _c0));
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.default_route);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.model().features.includes("events") ? 109 : -1);
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
        \u0275\u0275property("ngModel", ctx.currency_filter())("ngModelOptions", \u0275\u0275pureFunction0(37, _c0));
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.filtered_currency_options());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.filtered_currency_options().length ? 160 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("formField", ctx.form.use_24_hour_time);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.use_region);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().features.includes("attendance-report") ? 166 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().features.includes("spaces") ? 167 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().features.includes("desks") ? 168 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().features.includes("visitors") ? 169 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().features.includes("visitors") || ctx.model().features.includes("parking") || ctx.model().features.includes("lockers") ? 170 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().features.includes("parking") || ctx.model().features.includes("parking-bookings") ? 171 : -1);
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
                                <mat-option value="signage">
                                    Digital Signage
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
                                            placeholder="No limit"
                                        >
                                            <mat-option [value]="null"
                                                >No limit</mat-option
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
                                            create group events
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
                                            placeholder="Not set"
                                        >
                                            <mat-option [value]="null"
                                                >Not set</mat-option
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
                                            able to book. Parking and lockers
                                            use this when their own period is
                                            not set
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConciergeSettingsFormModalComponent, { className: "ConciergeSettingsFormModalComponent", filePath: "apps/concierge/src/app/ui/app-settings/concierge-settings-form-modal.component.ts", lineNumber: 1816 });
})();
export {
  ConciergeSettingsFormModalComponent
};
//# debugId=dd5dafd8-c4e1-5d6e-aa3c-2ca3787585e9
//# sourceMappingURL=concierge-settings-form-modal.component-PUSZLF46.js.map
