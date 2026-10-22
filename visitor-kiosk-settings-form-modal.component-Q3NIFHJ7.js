import {
  EXPLORE_FEATURE_OPTIONS,
  MAX_DURATION_MINI_OPTIONS,
  appSettingOverrides,
  applyAppSettings,
  mergeAppSettings
} from "./chunk-LTM6CUF4.js";
import {
  UploadButtonComponent
} from "./chunk-3RAH2CUF.js";
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
import {
  MatProgressSpinnerModule
} from "./chunk-TZ5JUV4G.js";
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
  MatFormFieldModule
} from "./chunk-ZVSHIGFS.js";
import "./chunk-4VWJLUSZ.js";
import "./chunk-HLTSGFYE.js";
import {
  MatOption
} from "./chunk-JQJNBBNN.js";
import "./chunk-N7R5EHVG.js";
import {
  FormField,
  form
} from "./chunk-MCWEYL2F.js";
import {
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
  currentUser
} from "./chunk-WHXIEU2S.js";
import "./chunk-EQB56Z5X.js";
import "./chunk-J53GBIJV.js";
import {
  ac,
  hc,
  notifyError,
  notifySuccess
} from "./chunk-77D47I3C.js";
import "./chunk-QQKECY2M.js";
import "./chunk-F5BJYE7W.js";
import "./chunk-FWV33PKU.js";
import "./chunk-BF2TDFXD.js";
import "./chunk-R7WRISTA.js";
import "./chunk-TFYF4ALL.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-EOGESHX7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/visitor-kiosk/src/environments/settings.ts
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
  }
};
var app = {
  name: "Visitor-Kiosk",
  short_name: "KIOSK",
  logo_light: "assets/logo-light.svg",
  logo_dark: "assets/logo-dark.svg",
  allow_self_registration: true,
  allow_registration_time_options: false,
  allow_user_photo: true,
  hide_building_image: false,
  explore,
  welcome_background: "assets/img/skyline.webp",
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
var DEFAULT_SETTINGS = {
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
  app,
  mock: false
};

// apps/concierge/src/app/ui/app-settings/visitor-kiosk-settings-form-modal.component.ts
var _c0 = () => ({ standalone: true });
var _forTrack0 = ($index, $item) => $item.value;
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
function VisitorKioskSettingsFormModalComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 60);
    \u0275\u0275text(2, " Induction Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 11);
    \u0275\u0275element(4, "textarea", 61);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("formField", ctx_r0.form.induction_details);
    \u0275\u0275control();
  }
}
function VisitorKioskSettingsFormModalComponent_For_79_Template(rf, ctx) {
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
function VisitorKioskSettingsFormModalComponent_For_87_Template(rf, ctx) {
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
function VisitorKioskSettingsFormModalComponent_For_94_Template(rf, ctx) {
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
function VisitorKioskSettingsFormModalComponent_For_102_Template(rf, ctx) {
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
function VisitorKioskSettingsFormModalComponent_For_109_Template(rf, ctx) {
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
function VisitorKioskSettingsFormModalComponent_For_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
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
function VisitorKioskSettingsFormModalComponent_For_132_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
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
var DEVICE_FIELD_OPTIONS = [
  { value: "mac", label: "MAC Address" },
  { value: "manufacturer", label: "Manufacturer" },
  { value: "os", label: "Operating System" },
  { value: "ssid", label: "SSID" },
  { value: "username", label: "Username" },
  { value: "user", label: "User Type" }
];
var VisitorKioskSettingsFormModalComponent = class _VisitorKioskSettingsFormModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
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
    this.zone = this._data.zone;
    this.MAX_DURATION_MINI = MAX_DURATION_MINI_OPTIONS;
    this.EXPLORE_FEATURE = EXPLORE_FEATURE_OPTIONS;
    this.DEVICE_FIELDS = DEVICE_FIELD_OPTIONS;
    this.settings_key = this._settings.get("app.visitor_kiosk_metadata_key") || this._settings.get("app.visitor_kiosk_app") || "visitor-kiosk_app";
    this.model = signal(
      {
        logo_light: "assets/logo-light.svg",
        logo_dark: "assets/logo-dark.svg",
        default_route: "welcome",
        welcome_background: "assets/img/skyline.webp",
        welcome_message: "",
        induction_enabled: false,
        induction_details: "",
        induction_after_details: false,
        allow_self_registration: true,
        allow_registration_time_options: false,
        allow_pass_number: false,
        allow_printing_label: true,
        allow_user_photo: true,
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
          hide_device_fields: [],
          show_legend: true,
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
    try {
      const org_id = this._org.organisation.id;
      const org_metadata = zone.id !== org_id ? await this._getMetadata(org_id) : {};
      const parent_metadata = zone.id !== org_id && !!zone.parent_id && org_id !== zone.parent_id ? await this._getMetadata(zone.parent_id) : {};
      const metadata = await this._getMetadata(zone.id);
      this.existing_settings = mergeAppSettings(DEFAULT_SETTINGS.app, org_metadata, parent_metadata);
      this._patchModel(this.existing_settings);
      this._patchModel(metadata || {});
      this.old_settings = metadata;
      this.initial_settings = this.model();
    } catch (e) {
      notifyError(`Failed to load existing settings. ${errorText(e)}`);
      this._dialog_ref.close();
    } finally {
      this.loading.set("");
    }
  }
  _patchModel(value) {
    this.model.update((model) => {
      const next = applyAppSettings(model, value);
      if (Array.isArray(next.explore.hide_device_fields))
        return next;
      return __spreadProps(__spreadValues({}, next), {
        explore: __spreadProps(__spreadValues({}, next.explore), { hide_device_fields: [] })
      });
    });
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
  async _getMetadata(id) {
    const metadata = await ac(id, this.settings_key);
    return metadata.details || {};
  }
  static {
    this.\u0275fac = function VisitorKioskSettingsFormModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisitorKioskSettingsFormModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorKioskSettingsFormModalComponent, selectors: [["visitor-kiosk-settings-form-modal"]], decls: 135, vars: 41, consts: [[3, "confirm", "heading", "loading"], [1, "flex", "flex-col", "space-y-8"], ["general", "", 1, "bg-base-100", "space-y-2", "rounded-sm"], ["for", "logo_light"], [1, "mb-4", "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", 3, "formField"], ["ngModel", "", 3, "ngModelChange", "ngModelOptions"], ["for", "logo_dark"], ["for", "welcome-background"], ["for", "default-route"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "placeholder", "Welcome to PlaceOS Self Service Kiosk", 3, "formField"], [1, "-mx-2", "flex", "flex-wrap", "items-center"], ["label", "Enable Induction", 3, "formField"], ["label", "Induction after Confirm Details", 3, "formField"], ["label", "Allow Self Registration", 3, "formField"], ["label", "Allow setting visitor pass number", 3, "formField"], ["label", "Allow Printing Label", 3, "formField"], ["label", "Allow Visitor Photo", 3, "formField"], ["label", "Allow Registration Time Options", 3, "formField"], ["label", "Allow Beverages", 3, "formField"], ["label", "Hide Explore Map option", 3, "formField"], ["label", "Hide Building Image", 3, "formField"], ["for", "standalone-visitor-location"], ["matInput", "", "placeholder", "zone-system-id", 3, "formField"], ["for", "checked-in-template"], ["matInput", "", "placeholder", "Welcome >visitor_name<", 3, "formField"], [1, "border-base-300", "relative", "rounded-sm", "border", "px-4", "pt-4", "pb-2"], [1, "bg-base-100", "absolute", "top-0", "left-4", "-translate-y-1/2", "rounded-sm", "px-2", "py-1", "font-medium"], [1, "grid", "gap-4", "md:grid-cols-3"], ["for", "label-width"], ["matInput", "", "type", "number", 3, "formField"], ["for", "label-height"], ["for", "label-scale"], ["explore", "", 1, "border-base-300", "relative", "rounded-sm", "border", "px-4", "pt-4", "pb-2"], ["for", "disable"], ["placeholder", "No disabled features", "multiple", "", 3, "formField"], [3, "value"], [1, "flex", "items-center", "space-x-4"], [1, "flex-1"], ["for", "disable-actions"], ["placeholder", "No disabled actions", "multiple", "", 3, "formField"], ["for", "available-period"], ["placeholder", "No disabled labels", "multiple", "", 3, "formField"], ["for", "disable-features"], ["placeholder", "No disabled displays", "multiple", "", 3, "formField"], ["for", "disable-styles"], ["placeholder", "No disabled styles", "multiple", "", 3, "formField"], ["for", "hide-device-fields"], ["placeholder", "No hidden fields", "multiple", "", 3, "formField"], ["label", "Show Legend", 3, "formField"], ["label", "Show Booking QR Code", 3, "formField"], ["label", "Use defined polygons for zones", 3, "formField"], ["label", "Show labels for zones", 3, "formField"], ["label", "Show zone sensor info", 3, "formField"], ["booking", "", 1, "border-base-300", "relative", "rounded-sm", "border", "px-4", "pt-4", "pb-2"], ["for", "max-duration"], [3, "formField"], ["label", "Allow all day bookings", 3, "formField"], ["for", "induction-details"], ["matInput", "", "placeholder", "Site rules for visitors to accept", 3, "formField"]], template: function VisitorKioskSettingsFormModalComponent_Template(rf, ctx) {
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
        \u0275\u0275conditionalCreate(40, VisitorKioskSettingsFormModalComponent_Conditional_40_Template, 5, 1, "div");
        \u0275\u0275elementStart(41, "div")(42, "label", 24);
        \u0275\u0275text(43, " Standalone Visitor Location ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "mat-form-field", 11);
        \u0275\u0275element(45, "input", 25);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div")(47, "label", 26);
        \u0275\u0275text(48, " Checked In Template ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "mat-form-field", 11);
        \u0275\u0275element(50, "textarea", 27);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "div", 28)(52, "h3", 29);
        \u0275\u0275text(53, " Visitor Label Size ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "div", 30)(55, "div")(56, "label", 31);
        \u0275\u0275text(57, "Width (em)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "mat-form-field", 11);
        \u0275\u0275element(59, "input", 32);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "div")(61, "label", 33);
        \u0275\u0275text(62, "Height (em)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "mat-form-field", 11);
        \u0275\u0275element(64, "input", 32);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "div")(66, "label", 34);
        \u0275\u0275text(67, "Font Size (mm)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "mat-form-field", 11);
        \u0275\u0275element(69, "input", 32);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(70, "section", 35)(71, "h3", 29);
        \u0275\u0275text(72, " PlaceOS Maps ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "div")(74, "label", 36);
        \u0275\u0275text(75, " Disabled Features ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "mat-form-field", 11)(77, "mat-select", 37);
        \u0275\u0275repeaterCreate(78, VisitorKioskSettingsFormModalComponent_For_79_Template, 2, 2, "mat-option", 38, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(80, "div", 39)(81, "div", 40)(82, "label", 41);
        \u0275\u0275text(83, " Disabled Feature Actions ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "mat-form-field", 11)(85, "mat-select", 42);
        \u0275\u0275repeaterCreate(86, VisitorKioskSettingsFormModalComponent_For_87_Template, 2, 2, "mat-option", 38, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(88, "div", 40)(89, "label", 43);
        \u0275\u0275text(90, " Disabled Feature Labels ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "mat-form-field", 11)(92, "mat-select", 44);
        \u0275\u0275repeaterCreate(93, VisitorKioskSettingsFormModalComponent_For_94_Template, 2, 2, "mat-option", 38, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(95, "div", 39)(96, "div", 40)(97, "label", 45);
        \u0275\u0275text(98, " Disabled Feature Displays ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "mat-form-field", 11)(100, "mat-select", 46);
        \u0275\u0275repeaterCreate(101, VisitorKioskSettingsFormModalComponent_For_102_Template, 2, 2, "mat-option", 38, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(103, "div", 40)(104, "label", 47);
        \u0275\u0275text(105, " Disabled Feature Styles ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "mat-form-field", 11)(107, "mat-select", 48);
        \u0275\u0275repeaterCreate(108, VisitorKioskSettingsFormModalComponent_For_109_Template, 2, 2, "mat-option", 38, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(110, "div")(111, "label", 49);
        \u0275\u0275text(112, " Hidden Device Fields ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(113, "mat-form-field", 11)(114, "mat-select", 50);
        \u0275\u0275repeaterCreate(115, VisitorKioskSettingsFormModalComponent_For_116_Template, 2, 2, "mat-option", 38, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(117, "div", 13);
        \u0275\u0275element(118, "settings-toggle", 51);
        \u0275\u0275controlCreate();
        \u0275\u0275element(119, "settings-toggle", 52);
        \u0275\u0275controlCreate();
        \u0275\u0275element(120, "settings-toggle", 53);
        \u0275\u0275controlCreate();
        \u0275\u0275element(121, "settings-toggle", 54);
        \u0275\u0275controlCreate();
        \u0275\u0275element(122, "settings-toggle", 55);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(123, "section", 56)(124, "h3", 29);
        \u0275\u0275text(125, " Visitor Booking Rules ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "div")(127, "label", 57);
        \u0275\u0275text(128, "Max Duration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(129, "mat-form-field", 11)(130, "mat-select", 58);
        \u0275\u0275repeaterCreate(131, VisitorKioskSettingsFormModalComponent_For_132_Template, 2, 2, "mat-option", 38, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(133, "div", 13);
        \u0275\u0275element(134, "settings-toggle", 59);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", "Visitor Kiosk Settings - " + (ctx.zone.display_name || ctx.zone.name || "Organisation"))("loading", ctx.loading());
        \u0275\u0275advance(8);
        \u0275\u0275property("formField", ctx.form.logo_light);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(38, _c0));
        \u0275\u0275control();
        \u0275\u0275advance(6);
        \u0275\u0275property("formField", ctx.form.logo_dark);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(39, _c0));
        \u0275\u0275control();
        \u0275\u0275advance(6);
        \u0275\u0275property("formField", ctx.form.welcome_background);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(40, _c0));
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
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().induction_enabled ? 40 : -1);
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
        \u0275\u0275advance(6);
        \u0275\u0275property("formField", ctx.form.explore.hide_device_fields);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.DEVICE_FIELDS);
        \u0275\u0275advance(3);
        \u0275\u0275property("formField", ctx.form.explore.show_legend);
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
                    @if (model().induction_enabled) {
                        <div>
                            <label for="induction-details">
                                Induction Details
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <textarea
                                    matInput
                                    [formField]="form.induction_details"
                                    placeholder="Site rules for visitors to accept"
                                ></textarea>
                            </mat-form-field>
                        </div>
                    }
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
                                <label for="label-width">Width (em)</label>
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
                                <label for="label-height">Height (em)</label>
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
                                <label for="label-scale">Font Size (mm)</label>
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
                    <div>
                        <label for="hide-device-fields">
                            Hidden Device Fields
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                [formField]="form.explore.hide_device_fields"
                                placeholder="No hidden fields"
                                multiple
                            >
                                @for (opt of DEVICE_FIELDS; track opt.value) {
                                    <mat-option [value]="opt.value">{{
                                        opt.label
                                    }}</mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="-mx-2 flex flex-wrap items-center">
                        <settings-toggle
                            label="Show Legend"
                            [formField]="form.explore.show_legend"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorKioskSettingsFormModalComponent, { className: "VisitorKioskSettingsFormModalComponent", filePath: "apps/concierge/src/app/ui/app-settings/visitor-kiosk-settings-form-modal.component.ts", lineNumber: 492 });
})();
export {
  VisitorKioskSettingsFormModalComponent
};
//# debugId=9cf21c26-bd36-5475-a809-f5a55b86184b
//# sourceMappingURL=visitor-kiosk-settings-form-modal.component-Q3NIFHJ7.js.map
