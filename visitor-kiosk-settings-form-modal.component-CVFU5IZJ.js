import {
  EXPLORE_FEATURE_OPTIONS,
  MAX_DURATION_MINI_OPTIONS,
  SettingsSelectComponent
} from "./chunk-EKLW2SRP.js";
import {
  UploadButtonComponent
} from "./chunk-MQIZCFYK.js";
import {
  appMetadataKey,
  applyAppSettings,
  loadLayeredAppSettings,
  saveAppSettings
} from "./chunk-HPNZBLYS.js";
import {
  errorText
} from "./chunk-MXRCFL5P.js";
import "./chunk-USEVMWEI.js";
import {
  FullscreenModalShellComponent
} from "./chunk-MBTT2I5V.js";
import "./chunk-CHMDCM47.js";
import {
  MatProgressSpinnerModule
} from "./chunk-I52JNSOJ.js";
import {
  SettingsToggleComponent
} from "./chunk-OPRY76KM.js";
import "./chunk-UDPUXKZJ.js";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from "./chunk-2K5G7CFD.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-C6YYRFK6.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-54KE5JKV.js";
import "./chunk-OX3RHFRB.js";
import "./chunk-QWYXFXJS.js";
import "./chunk-G7ZLBZI3.js";
import "./chunk-RIENTTXY.js";
import "./chunk-SWZTUYHJ.js";
import {
  FormField,
  form
} from "./chunk-MBEGKN3O.js";
import {
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  OrganisationService,
  SettingsService,
  ɵNgNoValidate
} from "./chunk-E5WLQ6H2.js";
import "./chunk-NE545G3N.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-XMOMB3G6.js";
import "./chunk-OWTWWOGC.js";
import "./chunk-ZEZKWG7M.js";
import "./chunk-3WBJTYSG.js";
import "./chunk-QSD4JXRO.js";
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
  ɵɵtext
} from "./chunk-QAVCSYNX.js";
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
function VisitorKioskSettingsFormModalComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "settings-toggle", 17);
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
    \u0275\u0275elementStart(0, "div")(1, "label", 55);
    \u0275\u0275text(2, " Induction Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 13);
    \u0275\u0275element(4, "textarea", 56);
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
    this._layers = { inherited: {}, stored: {} };
    this._initial = {};
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
    this.settings_key = appMetadataKey(this._settings, "visitor-kiosk");
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
    this.loading.set("Loading existing settings...");
    try {
      this._layers = await loadLayeredAppSettings(this.zone, this._org.organisation.id, this.settings_key, DEFAULT_SETTINGS.app);
      const { inherited, stored } = this._layers;
      this._patchModel(inherited);
      this._patchModel(stored);
      this._initial = this.model();
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
    try {
      await saveAppSettings(this.zone.id, this.settings_key, "Visitor-kiosk", this._layers, this._initial, this.model());
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
  static {
    this.\u0275fac = function VisitorKioskSettingsFormModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisitorKioskSettingsFormModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorKioskSettingsFormModalComponent, selectors: [["visitor-kiosk-settings-form-modal"]], decls: 93, vars: 48, consts: [[3, "confirm", "heading", "loading"], [1, "flex", "flex-col", "space-y-8"], ["general", "", 1, "bg-base-100", "space-y-2", "rounded-sm"], ["for", "visitor-kiosk-settings-form-modal-logo_light"], [1, "mb-4", "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["id", "visitor-kiosk-settings-form-modal-logo_light", "matInput", "", 3, "formField"], ["ngModel", "", 3, "ngModelChange", "ngModelOptions"], ["for", "visitor-kiosk-settings-form-modal-logo_dark"], ["id", "visitor-kiosk-settings-form-modal-logo_dark", "matInput", "", 3, "formField"], ["for", "visitor-kiosk-settings-form-modal-welcome-background"], ["id", "visitor-kiosk-settings-form-modal-welcome-background", "matInput", "", 3, "formField"], ["for", "visitor-kiosk-settings-form-modal-default-route"], ["appearance", "outline", 1, "w-full"], ["id", "visitor-kiosk-settings-form-modal-default-route", "matInput", "", "placeholder", "Welcome to PlaceOS Self Service Kiosk", 3, "formField"], [1, "-mx-2", "flex", "flex-wrap", "items-center"], ["label", "Enable Induction", 3, "formField"], ["label", "Induction after Confirm Details", 3, "formField"], ["label", "Allow Self Registration", 3, "formField"], ["label", "Allow setting visitor pass number", 3, "formField"], ["label", "Allow Printing Label", 3, "formField"], ["label", "Allow Visitor Photo", 3, "formField"], ["label", "Allow Registration Time Options", 3, "formField"], ["label", "Allow Beverages", 3, "formField"], ["label", "Hide Explore Map option", 3, "formField"], ["label", "Hide Building Image", 3, "formField"], ["for", "visitor-kiosk-settings-form-modal-standalone-visitor-location"], ["id", "visitor-kiosk-settings-form-modal-standalone-visitor-location", "matInput", "", "placeholder", "zone-system-id", 3, "formField"], ["for", "visitor-kiosk-settings-form-modal-checked-in-template"], ["id", "visitor-kiosk-settings-form-modal-checked-in-template", "matInput", "", "placeholder", "Welcome >visitor_name<", 3, "formField"], [1, "border-base-300", "relative", "rounded-sm", "border", "px-4", "pt-4", "pb-2"], [1, "bg-base-100", "absolute", "top-0", "left-4", "-translate-y-1/2", "rounded-sm", "px-2", "py-1", "font-medium"], [1, "grid", "gap-4", "md:grid-cols-3"], ["for", "visitor-kiosk-settings-form-modal-label-width"], ["id", "visitor-kiosk-settings-form-modal-label-width", "matInput", "", "type", "number", 3, "formField"], ["for", "visitor-kiosk-settings-form-modal-label-height"], ["id", "visitor-kiosk-settings-form-modal-label-height", "matInput", "", "type", "number", 3, "formField"], ["for", "visitor-kiosk-settings-form-modal-label-scale"], ["id", "visitor-kiosk-settings-form-modal-label-scale", "matInput", "", "type", "number", 3, "formField"], ["explore", "", 1, "border-base-300", "relative", "rounded-sm", "border", "px-4", "pt-4", "pb-2"], ["field_id", "visitor-kiosk-settings-form-modal-disable", "label", "Disabled Features", "placeholder", "No disabled features", "multiple", "", 3, "field", "options"], [1, "flex", "items-center", "space-x-4"], ["field_id", "visitor-kiosk-settings-form-modal-disable-actions", "label", "Disabled Feature Actions", "placeholder", "No disabled actions", "multiple", "", 1, "flex-1", 3, "field", "options"], ["field_id", "visitor-kiosk-settings-form-modal-available-period", "label", "Disabled Feature Labels", "placeholder", "No disabled labels", "multiple", "", 1, "flex-1", 3, "field", "options"], ["field_id", "visitor-kiosk-settings-form-modal-disable-features", "label", "Disabled Feature Displays", "placeholder", "No disabled displays", "multiple", "", 1, "flex-1", 3, "field", "options"], ["field_id", "visitor-kiosk-settings-form-modal-disable-styles", "label", "Disabled Feature Styles", "placeholder", "No disabled styles", "multiple", "", 1, "flex-1", 3, "field", "options"], ["field_id", "visitor-kiosk-settings-form-modal-hide-device-fields", "label", "Hidden Device Fields", "placeholder", "No hidden fields", "multiple", "", 3, "field", "options"], ["label", "Show Legend", 3, "formField"], ["label", "Show Booking QR Code", 3, "formField"], ["label", "Use defined polygons for zones", 3, "formField"], ["label", "Show labels for zones", 3, "formField"], ["label", "Show zone sensor info", 3, "formField"], ["booking", "", 1, "border-base-300", "relative", "rounded-sm", "border", "px-4", "pt-4", "pb-2"], ["field_id", "visitor-kiosk-settings-form-modal-max-duration", "label", "Max Duration", 3, "field", "options"], ["label", "Allow all day bookings", 3, "formField"], ["for", "visitor-kiosk-settings-form-modal-induction-details"], ["id", "visitor-kiosk-settings-form-modal-induction-details", "matInput", "", "placeholder", "Site rules for visitors to accept", 3, "formField"]], template: function VisitorKioskSettingsFormModalComponent_Template(rf, ctx) {
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
        \u0275\u0275element(15, "input", 9);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "upload-button", 7);
        \u0275\u0275listener("ngModelChange", function VisitorKioskSettingsFormModalComponent_Template_upload_button_ngModelChange_16_listener($event) {
          return ctx.model.update((m) => __spreadProps(__spreadValues({}, m), { logo_dark: $event }));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div")(18, "label", 10);
        \u0275\u0275text(19, " Welcome Background ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 4)(21, "mat-form-field", 5);
        \u0275\u0275element(22, "input", 11);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "upload-button", 7);
        \u0275\u0275listener("ngModelChange", function VisitorKioskSettingsFormModalComponent_Template_upload_button_ngModelChange_23_listener($event) {
          return ctx.model.update((m) => __spreadProps(__spreadValues({}, m), { welcome_background: $event }));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div")(25, "label", 12);
        \u0275\u0275text(26, "Welcome Message");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "mat-form-field", 13);
        \u0275\u0275element(28, "textarea", 14);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 15);
        \u0275\u0275element(30, "settings-toggle", 16);
        \u0275\u0275controlCreate();
        \u0275\u0275conditionalCreate(31, VisitorKioskSettingsFormModalComponent_Conditional_31_Template, 1, 1, "settings-toggle", 17);
        \u0275\u0275element(32, "settings-toggle", 18);
        \u0275\u0275controlCreate();
        \u0275\u0275element(33, "settings-toggle", 19);
        \u0275\u0275controlCreate();
        \u0275\u0275element(34, "settings-toggle", 20);
        \u0275\u0275controlCreate();
        \u0275\u0275element(35, "settings-toggle", 21);
        \u0275\u0275controlCreate();
        \u0275\u0275element(36, "settings-toggle", 22);
        \u0275\u0275controlCreate();
        \u0275\u0275element(37, "settings-toggle", 23);
        \u0275\u0275controlCreate();
        \u0275\u0275element(38, "settings-toggle", 24);
        \u0275\u0275controlCreate();
        \u0275\u0275element(39, "settings-toggle", 25);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(40, VisitorKioskSettingsFormModalComponent_Conditional_40_Template, 5, 1, "div");
        \u0275\u0275elementStart(41, "div")(42, "label", 26);
        \u0275\u0275text(43, " Standalone Visitor Location ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "mat-form-field", 13);
        \u0275\u0275element(45, "input", 27);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div")(47, "label", 28);
        \u0275\u0275text(48, " Checked In Template ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "mat-form-field", 13);
        \u0275\u0275element(50, "textarea", 29);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "div", 30)(52, "h3", 31);
        \u0275\u0275text(53, " Visitor Label Size ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "div", 32)(55, "div")(56, "label", 33);
        \u0275\u0275text(57, "Width (em)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "mat-form-field", 13);
        \u0275\u0275element(59, "input", 34);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "div")(61, "label", 35);
        \u0275\u0275text(62, "Height (em)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "mat-form-field", 13);
        \u0275\u0275element(64, "input", 36);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "div")(66, "label", 37);
        \u0275\u0275text(67, "Font Size (mm)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "mat-form-field", 13);
        \u0275\u0275element(69, "input", 38);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(70, "section", 39)(71, "h3", 31);
        \u0275\u0275text(72, " PlaceOS Maps ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(73, "settings-select", 40);
        \u0275\u0275elementStart(74, "div", 41);
        \u0275\u0275element(75, "settings-select", 42)(76, "settings-select", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "div", 41);
        \u0275\u0275element(78, "settings-select", 44)(79, "settings-select", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275element(80, "settings-select", 46);
        \u0275\u0275elementStart(81, "div", 15);
        \u0275\u0275element(82, "settings-toggle", 47);
        \u0275\u0275controlCreate();
        \u0275\u0275element(83, "settings-toggle", 48);
        \u0275\u0275controlCreate();
        \u0275\u0275element(84, "settings-toggle", 49);
        \u0275\u0275controlCreate();
        \u0275\u0275element(85, "settings-toggle", 50);
        \u0275\u0275controlCreate();
        \u0275\u0275element(86, "settings-toggle", 51);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(87, "section", 52)(88, "h3", 31);
        \u0275\u0275text(89, " Visitor Booking Rules ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(90, "settings-select", 53);
        \u0275\u0275elementStart(91, "div", 15);
        \u0275\u0275element(92, "settings-toggle", 54);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", "Visitor Kiosk Settings - " + (ctx.zone.display_name || ctx.zone.name || "Organisation"))("loading", ctx.loading());
        \u0275\u0275advance(8);
        \u0275\u0275property("formField", ctx.form.logo_light);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(45, _c0));
        \u0275\u0275control();
        \u0275\u0275advance(6);
        \u0275\u0275property("formField", ctx.form.logo_dark);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(46, _c0));
        \u0275\u0275control();
        \u0275\u0275advance(6);
        \u0275\u0275property("formField", ctx.form.welcome_background);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(47, _c0));
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
        \u0275\u0275advance(4);
        \u0275\u0275property("field", ctx.form.explore.disable)("options", ctx.EXPLORE_FEATURE);
        \u0275\u0275advance(2);
        \u0275\u0275property("field", ctx.form.explore.disable_actions)("options", ctx.EXPLORE_FEATURE);
        \u0275\u0275advance();
        \u0275\u0275property("field", ctx.form.explore.disable_labels)("options", ctx.EXPLORE_FEATURE);
        \u0275\u0275advance(2);
        \u0275\u0275property("field", ctx.form.explore.disable_features)("options", ctx.EXPLORE_FEATURE);
        \u0275\u0275advance();
        \u0275\u0275property("field", ctx.form.explore.disable_styles)("options", ctx.EXPLORE_FEATURE);
        \u0275\u0275advance();
        \u0275\u0275property("field", ctx.form.explore.hide_device_fields)("options", ctx.DEVICE_FIELDS);
        \u0275\u0275advance(2);
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
        \u0275\u0275advance(4);
        \u0275\u0275property("field", ctx.form.visitors.max_duration)("options", ctx.MAX_DURATION_MINI);
        \u0275\u0275advance(2);
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
      MatInputModule,
      MatInput,
      UploadButtonComponent,
      FormField,
      FormsModule,
      \u0275NgNoValidate,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      NgForm,
      SettingsSelectComponent
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
                        <label
                            for="visitor-kiosk-settings-form-modal-logo_light"
                            >Light Mode Logo</label
                        >
                        <div class="mb-4 flex items-center space-x-2">
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript w-full"
                            >
                                <input
                                    id="visitor-kiosk-settings-form-modal-logo_light"
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
                        <label for="visitor-kiosk-settings-form-modal-logo_dark"
                            >Dark Mode Logo</label
                        >
                        <div class="mb-4 flex items-center space-x-2">
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript w-full"
                            >
                                <input
                                    id="visitor-kiosk-settings-form-modal-logo_dark"
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
                            for="visitor-kiosk-settings-form-modal-welcome-background"
                        >
                            Welcome Background
                        </label>
                        <div class="mb-4 flex items-center space-x-2">
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript w-full"
                            >
                                <input
                                    id="visitor-kiosk-settings-form-modal-welcome-background"
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
                        <label
                            for="visitor-kiosk-settings-form-modal-default-route"
                            >Welcome Message</label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <textarea
                                id="visitor-kiosk-settings-form-modal-default-route"
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
                            <label
                                for="visitor-kiosk-settings-form-modal-induction-details"
                            >
                                Induction Details
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <textarea
                                    id="visitor-kiosk-settings-form-modal-induction-details"
                                    matInput
                                    [formField]="form.induction_details"
                                    placeholder="Site rules for visitors to accept"
                                ></textarea>
                            </mat-form-field>
                        </div>
                    }
                    <div>
                        <label
                            for="visitor-kiosk-settings-form-modal-standalone-visitor-location"
                        >
                            Standalone Visitor Location
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                id="visitor-kiosk-settings-form-modal-standalone-visitor-location"
                                matInput
                                [formField]="form.standalone_visitor_location"
                                placeholder="zone-system-id"
                            />
                        </mat-form-field>
                    </div>
                    <div>
                        <label
                            for="visitor-kiosk-settings-form-modal-checked-in-template"
                        >
                            Checked In Template
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <textarea
                                id="visitor-kiosk-settings-form-modal-checked-in-template"
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
                                <label
                                    for="visitor-kiosk-settings-form-modal-label-width"
                                    >Width (em)</label
                                >
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        id="visitor-kiosk-settings-form-modal-label-width"
                                        matInput
                                        type="number"
                                        [formField]="
                                            form.visitor_label_size.width
                                        "
                                    />
                                </mat-form-field>
                            </div>
                            <div>
                                <label
                                    for="visitor-kiosk-settings-form-modal-label-height"
                                    >Height (em)</label
                                >
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        id="visitor-kiosk-settings-form-modal-label-height"
                                        matInput
                                        type="number"
                                        [formField]="
                                            form.visitor_label_size.height
                                        "
                                    />
                                </mat-form-field>
                            </div>
                            <div>
                                <label
                                    for="visitor-kiosk-settings-form-modal-label-scale"
                                    >Font Size (mm)</label
                                >
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        id="visitor-kiosk-settings-form-modal-label-scale"
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
                    <settings-select
                        field_id="visitor-kiosk-settings-form-modal-disable"
                        label="Disabled Features"
                        [field]="form.explore.disable"
                        [options]="EXPLORE_FEATURE"
                        placeholder="No disabled features"
                        multiple
                    />
                    <div class="flex items-center space-x-4">
                        <settings-select
                            class="flex-1"
                            field_id="visitor-kiosk-settings-form-modal-disable-actions"
                            label="Disabled Feature Actions"
                            [field]="form.explore.disable_actions"
                            [options]="EXPLORE_FEATURE"
                            placeholder="No disabled actions"
                            multiple
                        />
                        <settings-select
                            class="flex-1"
                            field_id="visitor-kiosk-settings-form-modal-available-period"
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
                            field_id="visitor-kiosk-settings-form-modal-disable-features"
                            label="Disabled Feature Displays"
                            [field]="form.explore.disable_features"
                            [options]="EXPLORE_FEATURE"
                            placeholder="No disabled displays"
                            multiple
                        />
                        <settings-select
                            class="flex-1"
                            field_id="visitor-kiosk-settings-form-modal-disable-styles"
                            label="Disabled Feature Styles"
                            [field]="form.explore.disable_styles"
                            [options]="EXPLORE_FEATURE"
                            placeholder="No disabled styles"
                            multiple
                        />
                    </div>
                    <settings-select
                        field_id="visitor-kiosk-settings-form-modal-hide-device-fields"
                        label="Hidden Device Fields"
                        [field]="form.explore.hide_device_fields"
                        [options]="DEVICE_FIELDS"
                        placeholder="No hidden fields"
                        multiple
                    />
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
                    <settings-select
                        field_id="visitor-kiosk-settings-form-modal-max-duration"
                        label="Max Duration"
                        [field]="form.visitors.max_duration"
                        [options]="MAX_DURATION_MINI"
                    />
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
      MatInputModule,
      UploadButtonComponent,
      FormField,
      FormsModule,
      SettingsSelectComponent
    ], styles: ["/* angular:styles/component:css;ca7581e3f527e8cafa49f5d3654b7182593f8c4b756e7d34512a16bfc4e4e137;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/ui/app-settings/visitor-kiosk-settings-form-modal.component.ts */\nsettings-toggle {\n  width: calc(50% - 1rem);\n  margin: 0.5rem;\n}\n/*# sourceMappingURL=visitor-kiosk-settings-form-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorKioskSettingsFormModalComponent, { className: "VisitorKioskSettingsFormModalComponent", filePath: "apps/concierge/src/app/ui/app-settings/visitor-kiosk-settings-form-modal.component.ts", lineNumber: 456 });
})();
export {
  VisitorKioskSettingsFormModalComponent
};
//# debugId=ac15b419-08c9-5517-bac1-1e88954d317d
//# sourceMappingURL=visitor-kiosk-settings-form-modal.component-CVFU5IZJ.js.map
