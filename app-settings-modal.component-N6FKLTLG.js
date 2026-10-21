import {
  MatCheckbox,
  MatCheckboxModule,
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-TZ5JUV4G.js";
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef
} from "./chunk-CAAMUB2D.js";
import "./chunk-JQJNBBNN.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-C5SFKFXB.js";
import {
  OrganisationService,
  SettingsService
} from "./chunk-NAPLFNKH.js";
import "./chunk-ZBK6XVOU.js";
import {
  IconComponent
} from "./chunk-BSQA34BX.js";
import {
  ac,
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
  ɵɵtextInterpolate1
} from "./chunk-EOGESHX7.js";
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
    const zone_settings = (await ac(this.zone.id, `${this.workplace_key}`).catch(() => ({ details: {} }))).details;
    const parent_settings = (await ac(this.zone.parent_id, `${this.workplace_key}`).catch(() => ({ details: {} }))).details;
    const org_settings = (await ac(this._org.organisation.id, `${this.workplace_key}`).catch(() => ({ details: {} }))).details;
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
      await hc(this.zone.id, {
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
export {
  AppSettingsModalComponent
};
//# debugId=48332bc8-af9b-5168-91bb-c86718ce9dfb
//# sourceMappingURL=app-settings-modal.component-N6FKLTLG.js.map
