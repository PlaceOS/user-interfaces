import {
  parse,
  stringify
} from "./chunk-6JYDOR4Q.js";
import {
  errorText
} from "./chunk-A6F2GUTH.js";
import {
  DurationFieldComponent
} from "./chunk-5BGTJO37.js";
import "./chunk-EFMAXE4Z.js";
import {
  TimeFieldComponent,
  WFHSettingsModalComponent
} from "./chunk-JNZHGOKA.js";
import {
  SettingsToggleComponent
} from "./chunk-6DDBZJ2C.js";
import {
  setDay
} from "./chunk-UTCRAK3D.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-EPT6QV6G.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-TZ5JUV4G.js";
import "./chunk-UHYZ3QEX.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef
} from "./chunk-CAAMUB2D.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-ZVSHIGFS.js";
import "./chunk-HLTSGFYE.js";
import {
  MatOption
} from "./chunk-JQJNBBNN.js";
import {
  setMinutes
} from "./chunk-CJTY5XSB.js";
import {
  setHours
} from "./chunk-Q6SBHIQZ.js";
import {
  TranslatePipe
} from "./chunk-N7R5EHVG.js";
import "./chunk-MCWEYL2F.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-C5SFKFXB.js";
import {
  SettingsService
} from "./chunk-WHXIEU2S.js";
import "./chunk-EQB56Z5X.js";
import {
  IconComponent
} from "./chunk-J53GBIJV.js";
import {
  $a,
  Le,
  Pe,
  ac,
  ba,
  ga,
  hc,
  i18n,
  nextValueFrom,
  notifyError,
  notifySuccess,
  set,
  startOfDay,
  startOfMinute
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
  CommonModule,
  Component,
  DatePipe,
  computed,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-EOGESHX7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

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
    try {
      const settings = (await ga({ parent_id: id })).data;
      const unencrypted = settings.find((_) => _.encryption_level === Le.None);
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
    } catch (e) {
      notifyError(`Failed to load auto release settings. ${errorText(e)}`);
      this._dialog_ref.close();
    } finally {
      this.loading.set("");
    }
  }
  async save() {
    this.loading.set(i18n("APP.CONCIERGE.AUTO_RELEASE_SAVING"));
    try {
      const settings = (await ga({ parent_id: this.id })).data;
      let unencrypted = settings.find((_) => _.encryption_level === Le.None);
      if (!unencrypted) {
        unencrypted = new Pe({
          parent_id: this.id,
          encryption_level: Le.None,
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
      unencrypted.settings_string = stringify(__spreadProps(__spreadValues({}, old_settings), {
        auto_release: new_settings
      }));
      unencrypted.id ? await $a(unencrypted.id, unencrypted) : await ba(unencrypted);
      const metadata_key = this._settings.get("app.workplace_metadata_key") || "workplace_app";
      const metadata = await ac(this.id, metadata_key);
      const details = metadata.details || {};
      details.auto_release = new_settings;
      await hc(this.id, {
        name: metadata_key,
        details,
        description: ""
      });
      notifySuccess(i18n("APP.CONCIERGE.AUTO_RELEASE_SUCCESS"));
      this._dialog_ref.close();
    } catch (e) {
      notifyError(i18n("APP.CONCIERGE.AUTO_RELEASE_ERROR", {
        error: errorText(e)
      }));
    } finally {
      this.loading.set("");
    }
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AutoReleaseSettingsModalComponent, { className: "AutoReleaseSettingsModalComponent", filePath: "apps/concierge/src/app/building-manager/auto-release-settings-modal.component.ts", lineNumber: 290 });
})();
export {
  AutoReleaseSettingsModalComponent
};
//# debugId=b5e0d6ed-6ca9-52bc-84c1-67e12b0ceddb
//# sourceMappingURL=auto-release-settings-modal.component-WGADPTL5.js.map
